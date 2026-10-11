# Shortutorial

Short tutorials for anything. Live at [shortutorial.com](https://shortutorial.com).

The site is a Cloudflare Worker. Static pages live in `public/`; a small API in `worker/` handles accounts, certification quizzes and the world leaderboard, with data stored in a Cloudflare D1 database (`shortutorial-db`). Cloudflare deploys automatically on every push to `main`.

## Structure

```
public/                 → everything served on the website
  index.html            → homepage with search, categories and random tutorial
  tutorials.js          → list of all tutorials (powers search, random, related links)
  style.css             → shared styles (site bar, buttons, quiz, login dialog)
  guide.css / guide.js  → template for step-by-step fix guides (Windows/Mac switch, troubleshooter)
  auth.js               → log in / sign up / account button
  quiz.js               → certification quiz at the end of each tutorial
  leaderboard/          → world leaderboard
  <slug>/index.html     → one folder per tutorial
  sitemap.xml, robots.txt
worker/
  index.js              → API: /api/signup, /api/login, /api/logout, /api/me, /api/quiz/<slug>, /api/leaderboard
  quizzes.js            → quiz questions and answers (kept server-side so they can't be read from the page)
schema.sql              → database tables
wrangler.jsonc          → Cloudflare config
```

## Adding a tutorial

1. Copy an existing tutorial folder in `public/` (e.g. `public/no-internet/`) to a new folder named after the URL you want, and change the content. Set `data-slug` on `<body>` to the folder name.
2. Add an entry to `public/tutorials.js`.
3. Add its quiz to `worker/quizzes.js` (keep a `<section class="block" id="cert"></section>` in the page so the quiz appears).
4. Add the URL to `public/sitemap.xml`.
5. Commit and push. The site updates in about a minute.

## Local testing

```
npm install
npx wrangler d1 execute shortutorial-db --local --file=schema.sql
npx wrangler dev
```
