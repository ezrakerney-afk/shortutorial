// Keeps every page's shared extras in sync. Safe to run any number of times.
// Runs automatically before every deploy (see "build" in wrangler.jsonc), and you can run it by hand:
//   node scripts/enhance-pages.mjs
// It adds or updates:
//   - favicon links Google can use (real files, not inline images)
//   - the learning-paths script on tutorial pages
//   - "Learning paths" and "Privacy" links in the footer
//   - Google structured data (JSON-LD): breadcrumbs, article info and FAQs from the page itself
import { readFileSync, writeFileSync, readdirSync, existsSync } from "node:fs";
import vm from "node:vm";

const PUB = new URL("../public/", import.meta.url);
const SITE = "https://shortutorial.com";
const ctx = { window: {} };
vm.runInNewContext(readFileSync(new URL("tutorials.js", PUB), "utf8"), ctx);
const BY = Object.fromEntries(ctx.window.TUTORIALS.map(t => [t.slug, t]));

const ICONS = '<link rel="icon" href="/favicon.ico" sizes="48x48">\n<link rel="icon" href="/favicon.svg" type="image/svg+xml">\n<link rel="apple-touch-icon" href="/apple-touch-icon.png">';
const PRIV = new URL("privacy/index.html", PUB);
const hasPrivacy = existsSync(PRIV) && !readFileSync(PRIV, "utf8").includes("{{CONTACT}}");
const FOOT_NAV = '<nav class="foot-nav" aria-label="Footer"><a href="/">All tutorials</a><a href="/paths/">Learning paths</a><a href="/leaderboard/">Leaderboard</a>' + (hasPrivacy ? '<a href="/privacy/">Privacy</a>' : '') + '</nav>';
const ORG = { "@type": "Organization", "@id": SITE + "/#org", name: "Shortutorial", url: SITE + "/", logo: SITE + "/icon-512.png" };

const text = h => h.replace(/<[^>]+>/g, " ").replace(/&nbsp;/g, " ").replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">")
  .replace(/&quot;/g, '"').replace(/&#x27;|&#39;/g, "'").replace(/\s+/g, " ").trim();
const meta = (html, re) => { const m = html.match(re); return m ? text(m[1]) : ""; };

function ldFor(html, slug) {
  if (!slug) {
    return [{ "@type": "WebSite", "@id": SITE + "/#site", name: "Shortutorial", url: SITE + "/", publisher: { "@id": SITE + "/#org" },
      potentialAction: { "@type": "SearchAction", target: SITE + "/?q={search_term_string}", "query-input": "required name=search_term_string" } }, ORG];
  }
  const t = BY[slug];
  const url = `${SITE}/${slug}/`;
  const title = t ? t.title : meta(html, /<h1[^>]*>([\s\S]*?)<\/h1>/);
  const graph = [
    { "@type": "BreadcrumbList", itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE + "/" },
      { "@type": "ListItem", position: 2, name: title, item: url }] },
    { "@type": "Article", "@id": url + "#article", headline: title, description: meta(html, /<meta name="description" content="([^"]*)"/),
      url, mainEntityOfPage: url, image: SITE + "/icon-512.png", inLanguage: "en-US", isAccessibleForFree: true,
      ...(t ? { articleSection: t.category, keywords: (t.tags || []).join(", "), timeRequired: `PT${t.minutes || 10}M` } : {}),
      author: { "@id": SITE + "/#org" }, publisher: { "@id": SITE + "/#org" } },
    ORG
  ];
  const faqs = [...html.matchAll(/<details[^>]*>\s*<summary[^>]*>([\s\S]*?)<\/summary>([\s\S]*?)<\/details>/g)]
    .map(m => ({ q: text(m[1]), a: text(m[2]) })).filter(f => f.q && f.a);
  if (faqs.length) graph.push({ "@type": "FAQPage", mainEntity: faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) });
  return graph;
}

let n = 0;
const pages = ["index.html", "404.html", ...readdirSync(PUB, { withFileTypes: true }).filter(d => d.isDirectory() && existsSync(new URL(d.name + "/index.html", PUB))).map(d => d.name + "/index.html")];
for (const p of pages) {
  const file = new URL(p, PUB);
  let h = readFileSync(file, "utf8"), before = h;
  if (h.includes("{{CONTACT}}")) continue; // unfinished page
  const slugAttr = (h.match(/<body[^>]*data-slug="([^"]+)"/) || [])[1];
  if (slugAttr && !BY[slugAttr]) continue; // a page still being written, not in tutorials.js yet
  h = h.replace(/<link rel="icon" href="data:[^"]*">/, ICONS);
  h = h.replace(/<nav class="foot-nav" aria-label="Footer">[\s\S]*?<\/nav>/, FOOT_NAV);
  const slug = (h.match(/<body[^>]*data-slug="([^"]+)"/) || [])[1];
  if (slug && !h.includes('src="../paths.js"')) h = h.replace('<script src="../tutorials.js"></script>', '<script src="../tutorials.js"></script>\n<script src="../paths.js"></script>');
  if (p === "index.html" || (slug && BY[slug])) {
    const ld = `<!-- ld --><script type="application/ld+json">${JSON.stringify({ "@context": "https://schema.org", "@graph": ldFor(h, p === "index.html" ? null : slug) }).replace(/</g, "\\u003c")}</script><!-- /ld -->`;
    h = h.includes("<!-- ld -->") ? h.replace(/<!-- ld -->[\s\S]*?<!-- \/ld -->/, ld) : h.replace("</head>", ld + "\n</head>");
  }
  if (h !== before) { writeFileSync(file, h); n++; }
}
console.log(`enhance-pages: updated ${n} of ${pages.length} pages`);
