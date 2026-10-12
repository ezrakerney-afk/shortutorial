// Shortutorial API: accounts, certification quizzes and the world leaderboard.
// Everything not under /api/ is served from the static files in /public.
import QUIZZES from "./quizzes.js";
import CATALOG from "./catalog.js";

const COOKIE = "st_sess";
const SESSION_DAYS = 30;
const PBKDF2_ITER = 100000;          // maximum Workers allows
const USERNAME_RE = /^[A-Za-z0-9_]{3,20}$/;

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (!url.pathname.startsWith("/api/")) return env.ASSETS.fetch(request);
    try {
      return await route(request, env, url);
    } catch (err) {
      console.error(err);
      return json({ error: "Something went wrong. Please try again." }, 500);
    }
  }
};

async function route(request, env, url) {
  const path = url.pathname.replace(/\/+$/, "");
  const method = request.method;

  if (method === "POST") {
    // Only accept JSON from our own pages (blocks cross-site form posts).
    const origin = request.headers.get("Origin");
    if (origin && new URL(origin).host !== url.host) return json({ error: "Bad origin." }, 403);
    if (!(request.headers.get("Content-Type") || "").includes("application/json")) return json({ error: "Expected JSON." }, 415);
  }

  if (path === "/api/me" && method === "GET") return me(request, env);
  if (path === "/api/signup" && method === "POST") return signup(request, env);
  if (path === "/api/login" && method === "POST") return login(request, env);
  if (path === "/api/logout" && method === "POST") return logout(request, env);
  if (path === "/api/leaderboard" && method === "GET") return leaderboard(request, env);

  if (path === "/api/search" && method === "GET") return smartSearch(request, env, url);
  if (path === "/api/ratings" && method === "GET") return allRatings(env);
  const rm = path.match(/^\/api\/rating\/([a-z0-9-]+)$/);
  if (rm && method === "GET") return getRating(request, env, url, rm[1]);
  if (rm && method === "POST") return rate(request, env, rm[1]);

  const m = path.match(/^\/api\/quiz\/([a-z0-9-]+)$/);
  if (m && method === "GET") return getQuiz(m[1]);
  if (m && method === "POST") return gradeQuiz(request, env, m[1]);

  return json({ error: "Not found." }, 404);
}

/* ---------------- accounts ---------------- */

async function signup(request, env) {
  const { username, password } = await body(request);
  if (!USERNAME_RE.test(username || "")) return json({ error: "Usernames are 3–20 letters, numbers or underscores." }, 400);
  if (typeof password !== "string" || password.length < 8) return json({ error: "Passwords need at least 8 characters." }, 400);
  if (password.length > 200) return json({ error: "That password is too long." }, 400);

  // Limit sign-ups per network to slow down spam accounts.
  const ipKey = await sha256hex("ip:" + (request.headers.get("CF-Connecting-IP") || "local"));
  const hourAgo = now() - 3600;
  const recent = await env.DB.prepare("SELECT COUNT(*) n FROM signups WHERE ip_hash = ? AND ts > ?").bind(ipKey, hourAgo).first();
  if (recent.n >= 5) return json({ error: "Too many new accounts from this network. Try again later." }, 429);

  const taken = await env.DB.prepare("SELECT 1 FROM users WHERE username = ? COLLATE NOCASE").bind(username).first();
  if (taken) return json({ error: "That username is taken." }, 409);

  const salt = randomHex(16);
  const hash = await hashPassword(password, salt);
  const res = await env.DB.prepare("INSERT INTO users (username, pw_hash, salt, created_at) VALUES (?, ?, ?, ?)")
    .bind(username, hash, salt, now()).run();
  await env.DB.batch([
    env.DB.prepare("INSERT INTO signups (ip_hash, ts) VALUES (?, ?)").bind(ipKey, now()),
    env.DB.prepare("DELETE FROM signups WHERE ts < ?").bind(now() - 86400)
  ]);
  return startSession(env, res.meta.last_row_id, { username, points: 0, certs: [] }, 201);
}

async function login(request, env) {
  const { username, password } = await body(request);
  if (typeof username !== "string" || typeof password !== "string") return json({ error: "Enter your username and password." }, 400);

  const fails = await env.DB.prepare("SELECT count, first_ts FROM login_fails WHERE username = ? COLLATE NOCASE").bind(username).first();
  if (fails && fails.count >= 10 && now() - fails.first_ts < 900) return json({ error: "Too many attempts. Wait 15 minutes and try again." }, 429);

  const user = await env.DB.prepare("SELECT id, username, pw_hash, salt FROM users WHERE username = ? COLLATE NOCASE").bind(username).first();
  const ok = user && safeEqual(await hashPassword(password, user.salt), user.pw_hash);
  if (!ok) {
    if (!fails || now() - fails.first_ts >= 900)
      await env.DB.prepare("INSERT OR REPLACE INTO login_fails (username, count, first_ts) VALUES (?, 1, ?)").bind(username.toLowerCase(), now()).run();
    else
      await env.DB.prepare("UPDATE login_fails SET count = count + 1 WHERE username = ? COLLATE NOCASE").bind(username).run();
    return json({ error: "Wrong username or password." }, 401);
  }
  await env.DB.prepare("DELETE FROM login_fails WHERE username = ? COLLATE NOCASE").bind(username).run();
  return startSession(env, user.id, await profile(env, user.id, user.username));
}

async function logout(request, env) {
  const token = readCookie(request);
  if (token) await env.DB.prepare("DELETE FROM sessions WHERE token_hash = ?").bind(await sha256hex(token)).run();
  return json({ ok: true }, 200, { "Set-Cookie": `${COOKIE}=; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=0` });
}

async function me(request, env) {
  const user = await currentUser(request, env);
  return json({ user: user ? await profile(env, user.id, user.username) : null });
}

async function startSession(env, userId, prof, status = 200) {
  const token = randomHex(32);
  const expires = now() + SESSION_DAYS * 86400;
  await env.DB.batch([
    env.DB.prepare("INSERT INTO sessions (token_hash, user_id, expires_at) VALUES (?, ?, ?)").bind(await sha256hex(token), userId, expires),
    env.DB.prepare("DELETE FROM sessions WHERE expires_at < ?").bind(now())
  ]);
  return json({ user: prof }, status, {
    "Set-Cookie": `${COOKIE}=${token}; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=${SESSION_DAYS * 86400}`
  });
}

async function currentUser(request, env) {
  const token = readCookie(request);
  if (!token) return null;
  return env.DB.prepare(
    "SELECT u.id, u.username FROM sessions s JOIN users u ON u.id = s.user_id WHERE s.token_hash = ? AND s.expires_at > ?"
  ).bind(await sha256hex(token), now()).first();
}

async function profile(env, id, username) {
  const { results } = await env.DB.prepare("SELECT slug FROM certs WHERE user_id = ? ORDER BY earned_at").bind(id).all();
  return { username, points: results.length, certs: results.map(r => r.slug) };
}

/* ---------------- quizzes ---------------- */

function getQuiz(slug) {
  const quiz = QUIZZES[slug];
  if (!quiz) return json({ error: "No quiz for this tutorial yet." }, 404);
  return json({
    slug, title: quiz.title, pass: quiz.pass, total: quiz.questions.length,
    questions: quiz.questions.map(({ q, o }) => ({ q, o }))   // answers stay on the server
  }, 200, { "Cache-Control": "public, max-age=300" });
}

async function gradeQuiz(request, env, slug) {
  const quiz = QUIZZES[slug];
  if (!quiz) return json({ error: "No quiz for this tutorial yet." }, 404);
  const { answers } = await body(request);
  if (!Array.isArray(answers) || answers.length !== quiz.questions.length || !answers.every(Number.isInteger))
    return json({ error: "Answer every question first." }, 400);

  const results = quiz.questions.map((qq, i) => ({ correct: answers[i] === qq.a, answer: qq.a, e: qq.e }));
  const score = results.filter(r => r.correct).length;
  const passed = score >= quiz.pass;

  const user = await currentUser(request, env);
  let awarded = false, already = false, points = null;
  if (user && passed) {
    const res = await env.DB.prepare("INSERT OR IGNORE INTO certs (user_id, slug, score, earned_at) VALUES (?, ?, ?, ?)")
      .bind(user.id, slug, score, now()).run();
    awarded = res.meta.changes > 0;
    already = !awarded;
  }
  if (user) points = (await profile(env, user.id, user.username)).points;

  return json({ score, total: quiz.questions.length, pass: quiz.pass, passed, results, loggedIn: !!user, awarded, already, points });
}

/* ---------------- ratings ---------------- */

// Signed-in users vote as themselves; everyone else uses a random id kept in their browser.
async function voterKey(request, env, deviceId) {
  const user = await currentUser(request, env);
  if (user) return "u:" + user.id;
  if (typeof deviceId !== "string" || !/^[a-f0-9]{32}$/.test(deviceId)) return null;
  return "d:" + (await sha256hex("device:" + deviceId)).slice(0, 40);
}

async function summary(env, slug) {
  const r = await env.DB.prepare("SELECT AVG(stars) avg, COUNT(*) n FROM ratings WHERE slug = ?").bind(slug).first();
  return { avg: r.n ? Math.round(r.avg * 10) / 10 : null, count: r.n };
}

async function allRatings(env) {
  const { results } = await env.DB.prepare("SELECT slug, AVG(stars) avg, COUNT(*) n FROM ratings GROUP BY slug").all();
  const out = {};
  for (const r of results) out[r.slug] = { avg: Math.round(r.avg * 10) / 10, count: r.n };
  return json(out, 200, { "Cache-Control": "public, max-age=60" });
}

async function getRating(request, env, url, slug) {
  if (!QUIZZES[slug]) return json({ error: "Unknown tutorial." }, 404);
  const key = await voterKey(request, env, url.searchParams.get("v"));
  const mine = key ? await env.DB.prepare("SELECT stars FROM ratings WHERE slug = ? AND voter = ?").bind(slug, key).first() : null;
  return json({ ...(await summary(env, slug)), mine: mine ? mine.stars : null });
}

async function rate(request, env, slug) {
  if (!QUIZZES[slug]) return json({ error: "Unknown tutorial." }, 404);
  const { stars, voter } = await body(request);
  if (!Number.isInteger(stars) || stars < 1 || stars > 5) return json({ error: "Pick 1 to 5 stars." }, 400);
  const key = await voterKey(request, env, voter);
  if (!key) return json({ error: "Couldn't save your rating. Try refreshing the page." }, 400);

  // Light rate limit per network to stop ballot stuffing.
  const ipKey = await sha256hex("rate:" + (request.headers.get("CF-Connecting-IP") || "local"));
  const recent = await env.DB.prepare("SELECT COUNT(*) n FROM rate_log WHERE ip_hash = ? AND ts > ?").bind(ipKey, now() - 3600).first();
  if (recent.n >= 60) return json({ error: "Too many ratings from this network. Try again later." }, 429);

  await env.DB.batch([
    env.DB.prepare("INSERT INTO ratings (slug, voter, stars, ts) VALUES (?, ?, ?, ?) ON CONFLICT(slug, voter) DO UPDATE SET stars = excluded.stars, ts = excluded.ts")
      .bind(slug, key, stars, now()),
    env.DB.prepare("INSERT INTO rate_log (ip_hash, ts) VALUES (?, ?)").bind(ipKey, now()),
    env.DB.prepare("DELETE FROM rate_log WHERE ts < ?").bind(now() - 86400)
  ]);
  return json({ ...(await summary(env, slug)), mine: stars });
}

/* ---------------- leaderboard ---------------- */

async function leaderboard(request, env) {
  // Most points first; ties go to whoever reached that score first.
  const ranked = `SELECT u.id, u.username, COUNT(c.slug) AS points,
      ROW_NUMBER() OVER (ORDER BY COUNT(c.slug) DESC, MAX(c.earned_at) ASC) AS rank
    FROM users u JOIN certs c ON c.user_id = u.id GROUP BY u.id`;
  const { results } = await env.DB.prepare(`SELECT username, points, rank FROM (${ranked}) ORDER BY rank LIMIT 100`).all();
  const players = (await env.DB.prepare("SELECT COUNT(DISTINCT user_id) n FROM certs").first()).n;

  const user = await currentUser(request, env);
  let mine = null;
  if (user) {
    const row = await env.DB.prepare(`SELECT points, rank FROM (${ranked}) WHERE id = ?`).bind(user.id).first();
    mine = { username: user.username, points: row ? row.points : 0, rank: row ? row.rank : null };
  }
  return json({ top: results, players, me: mine }, 200, { "Cache-Control": "no-store" });
}

/* ---------------- helpers ---------------- */

function json(data, status = 200, headers = {}) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json; charset=utf-8", "Cache-Control": "no-store", ...headers }
  });
}
async function body(request) {
  try { const b = await request.json(); return b && typeof b === "object" ? b : {}; } catch { return {}; }
}
const now = () => Math.floor(Date.now() / 1000);

function readCookie(request) {
  const m = (request.headers.get("Cookie") || "").match(new RegExp(`(?:^|;\\s*)${COOKIE}=([a-f0-9]{64})`));
  return m ? m[1] : null;
}
function randomHex(bytes) {
  const a = crypto.getRandomValues(new Uint8Array(bytes));
  return [...a].map(b => b.toString(16).padStart(2, "0")).join("");
}
const toHex = buf => [...new Uint8Array(buf)].map(b => b.toString(16).padStart(2, "0")).join("");
async function sha256hex(text) {
  return toHex(await crypto.subtle.digest("SHA-256", new TextEncoder().encode(text)));
}
async function hashPassword(password, saltHex) {
  const key = await crypto.subtle.importKey("raw", new TextEncoder().encode(password), "PBKDF2", false, ["deriveBits"]);
  const salt = new Uint8Array(saltHex.match(/../g).map(h => parseInt(h, 16)));
  return toHex(await crypto.subtle.deriveBits({ name: "PBKDF2", hash: "SHA-256", salt, iterations: PBKDF2_ITER }, key, 256));
}
function safeEqual(a, b) {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return diff === 0;
}

/* ---------------- smart search ----------------
   Understands meaning, not just words: "bugs in my kitchen" finds the fruit fly guide.
   Each tutorial's text is turned into an embedding (a list of numbers describing its meaning)
   with Workers AI, stored in D1, and compared with the embedding of the search. */

const EMBED_MODEL = "@cf/baai/bge-base-en-v1.5";
const RERANK_MODEL = "@cf/baai/bge-reranker-base";
const QUERY_PREFIX = "Represent this sentence for searching relevant passages: ";
let VECS = null;            // Map slug -> Float32Array, cached per worker instance
let VECS_VERSION = "";
const searchHits = new Map(); // simple per-instance rate limit

async function catalogVectors(env) {
  const version = await sha256hex(CATALOG.map(c => c.slug + c.text).join("|"));
  if (VECS && VECS_VERSION === version) return VECS;
  await env.DB.prepare("CREATE TABLE IF NOT EXISTS search_vecs (slug TEXT PRIMARY KEY, hash TEXT NOT NULL, vec TEXT NOT NULL)").run();
  const rows = (await env.DB.prepare("SELECT slug, hash, vec FROM search_vecs").all()).results || [];
  const stored = new Map(rows.map(r => [r.slug, r]));
  const map = new Map(), todo = [];
  for (const c of CATALOG) {
    const h = (await sha256hex(c.text)).slice(0, 16), r = stored.get(c.slug);
    if (r && r.hash === h) map.set(c.slug, Float32Array.from(JSON.parse(r.vec)));
    else todo.push({ ...c, h });
  }
  for (let i = 0; i < todo.length; i += 50) {
    const part = todo.slice(i, i + 50);
    const out = await env.AI.run(EMBED_MODEL, { text: part.map(c => c.text) });
    const stmts = part.map((c, j) => {
      const v = out.data[j];
      map.set(c.slug, Float32Array.from(v));
      return env.DB.prepare("INSERT OR REPLACE INTO search_vecs (slug, hash, vec) VALUES (?, ?, ?)")
        .bind(c.slug, c.h, JSON.stringify(v.map(x => Math.round(x * 1e5) / 1e5)));
    });
    await env.DB.batch(stmts);
  }
  VECS = map; VECS_VERSION = version;
  return map;
}

function cosine(a, b) {
  let d = 0, na = 0, nb = 0;
  for (let i = 0; i < a.length; i++) { d += a[i] * b[i]; na += a[i] * a[i]; nb += b[i] * b[i]; }
  return d / (Math.sqrt(na * nb) || 1);
}

async function smartSearch(request, env, url) {
  const q = (url.searchParams.get("q") || "").toLowerCase().replace(/\s+/g, " ").trim().slice(0, 120);
  if (q.length < 2) return json({ results: [] });
  if (!env.AI) return json({ error: "Smart search is not available." }, 503);

  const cache = caches.default;
  const key = new Request(`https://cache.shortutorial/search/v2-${CATALOG.length}/${encodeURIComponent(q)}`);
  const hit = await cache.match(key);
  if (hit) return new Response(hit.body, { headers: { "Content-Type": "application/json", "Cache-Control": "public, max-age=300" } });

  const ip = request.headers.get("CF-Connecting-IP") || "local", t = now();
  const rec = searchHits.get(ip) || { t, n: 0 };
  if (t - rec.t > 60) { rec.t = t; rec.n = 0; }
  if (++rec.n > 40) return json({ error: "Too many searches. Try again in a minute." }, 429);
  searchHits.set(ip, rec);
  if (searchHits.size > 5000) searchHits.clear();

  const vecs = await catalogVectors(env);
  const qv = (await env.AI.run(EMBED_MODEL, { text: [QUERY_PREFIX + q] })).data[0];
  let results = [...vecs].map(([slug, v]) => ({ slug, sim: Math.round(cosine(qv, v) * 1000) / 1000 }))
    .sort((a, b) => b.sim - a.sim).slice(0, 15);
  // Second pass: a reranker reads the search next to each candidate and scores how well it answers it.
  try {
    const text = new Map(CATALOG.map(c => [c.slug, c.text]));
    const rr = await env.AI.run(RERANK_MODEL, { query: q, contexts: results.map(r => ({ text: text.get(r.slug) })), top_k: results.length });
    const scores = new Map((rr.response || []).map(x => [x.id, x.score]));
    results = results.map((r, i) => ({ ...r, score: Math.round((scores.get(i) ?? 0) * 1000) / 1000 }))
      .sort((a, b) => b.score - a.score);
  } catch (e) {
    console.error("rerank failed", e);
    results = results.map(r => ({ ...r, score: null }));
  }
  results = results.slice(0, 12);
  const body = JSON.stringify({ results });
  // Keep answers at the edge for a day, but only 5 minutes in browsers so new tutorials show up quickly.
  await cache.put(key, new Response(body, { headers: { "Content-Type": "application/json", "Cache-Control": "public, max-age=86400" } }));
  return new Response(body, { headers: { "Content-Type": "application/json", "Cache-Control": "public, max-age=300" } });
}
