-- Shortutorial database (Cloudflare D1). Safe to run more than once.
CREATE TABLE IF NOT EXISTS users (
  id          INTEGER PRIMARY KEY AUTOINCREMENT,
  username    TEXT NOT NULL UNIQUE COLLATE NOCASE,
  pw_hash     TEXT NOT NULL,
  salt        TEXT NOT NULL,
  created_at  INTEGER NOT NULL
);

CREATE TABLE IF NOT EXISTS sessions (
  token_hash  TEXT PRIMARY KEY,
  user_id     INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  expires_at  INTEGER NOT NULL
);

-- One row per tutorial a user has passed = one certification point.
CREATE TABLE IF NOT EXISTS certs (
  user_id     INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  slug        TEXT NOT NULL,
  score       INTEGER,
  earned_at   INTEGER NOT NULL,
  PRIMARY KEY (user_id, slug)
);

CREATE TABLE IF NOT EXISTS login_fails (
  username    TEXT PRIMARY KEY COLLATE NOCASE,
  count       INTEGER NOT NULL,
  first_ts    INTEGER NOT NULL
);

CREATE TABLE IF NOT EXISTS signups (
  ip_hash     TEXT NOT NULL,
  ts          INTEGER NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_sessions_user ON sessions(user_id);
CREATE INDEX IF NOT EXISTS idx_certs_user ON certs(user_id);
CREATE INDEX IF NOT EXISTS idx_signups_ip ON signups(ip_hash, ts);

-- Star ratings: one per tutorial per voter (a signed-in user, or an anonymous device id).
CREATE TABLE IF NOT EXISTS ratings (
  slug   TEXT NOT NULL,
  voter  TEXT NOT NULL,
  stars  INTEGER NOT NULL CHECK (stars BETWEEN 1 AND 5),
  ts     INTEGER NOT NULL,
  PRIMARY KEY (slug, voter)
);
CREATE INDEX IF NOT EXISTS idx_ratings_slug ON ratings(slug);

CREATE TABLE IF NOT EXISTS rate_log (
  ip_hash TEXT NOT NULL,
  ts      INTEGER NOT NULL
);
CREATE INDEX IF NOT EXISTS idx_rate_log ON rate_log(ip_hash, ts);
