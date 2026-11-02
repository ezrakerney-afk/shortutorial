# Shortutorial

Short tutorials for anything. Live at [shortutorial.com](https://shortutorial.com).

The site is a Cloudflare Worker. Static pages live in `public/`; a small API in `worker/` handles accounts, star ratings, read counts, comments and smart search, with data stored in a Cloudflare D1 database (`shortutorial-db`). Cloudflare deploys automatically on every push to `main`.

## Structure

```
public/                 → everything served on the website
  index.html            → homepage with search, categories and random tutorial
  tutorials.js          → list of all tutorials (powers search, random, related links)
  style.css             → shared styles (site bar, buttons, ratings, login dialog)
  guide.css / guide.js  → template for step-by-step fix guides (Windows/Mac switch, troubleshooter)
  auth.js               → log in / sign up / account button (accounts are used for comments)
  rating.js / comments.js → star ratings and comments at the end of each tutorial
  <slug>/index.html     → one folder per tutorial
  paths.js              → learning paths (ordered tracks of tutorials) + the path banner on tutorial pages
  paths/                → learning paths page
  favicon.ico, favicon.svg, icon-*.png → site icons (real files so Google can show them)
  sitemap.xml, robots.txt
worker/
  index.js              → API: /api/signup, /api/login, /api/logout, /api/me, /api/rating/<slug>, /api/comments/<slug>, /api/search
  catalog.js            → search catalog, generated from public/tutorials.js before every deploy
schema.sql              → database tables
wrangler.jsonc          → Cloudflare config
```

## Adding a tutorial

1. Copy an existing tutorial folder in `public/` (e.g. `public/no-internet/`) to a new folder named after the URL you want, and change the content. Set `data-slug` on `<body>` to the folder name.
2. Add an entry to `public/tutorials.js`.
3. Keep the `<div id="tutorial-end"></div>` near the end of the page so ratings and comments appear.
4. Add the URL to `public/sitemap.xml`, and add the slug to a path in `public/paths.js` if one fits.
5. Commit and push. The site updates in about a minute.

## Page extras

`scripts/enhance-pages.mjs` runs before every deploy. It keeps the favicon links, footer links, learning-path script and Google structured data (breadcrumbs, article info, FAQs) up to date on every page, so new tutorials get them automatically. Run it by hand with `node scripts/enhance-pages.mjs`.

## Local testing

```
npm install
npx wrangler d1 execute shortutorial-db --local --file=schema.sql
npx wrangler dev
```
