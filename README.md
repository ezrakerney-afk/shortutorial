# Shortutorial

Short tutorials for anything. Live at [shortutorial.com](https://shortutorial.com).

This is a plain static site (no build step). Cloudflare Pages deploys it automatically on every push to `main`.

## Structure

```
index.html        → homepage with search and random tutorial
tutorials.js      → list of all tutorials (powers search + random)
style.css         → shared styles
404.html          → page-not-found
jcurses/          → shortutorial.com/jcurses
  index.html
```

## Adding a tutorial

1. Create a folder named after the URL you want, e.g. `boil-an-egg/index.html`.
2. Add an entry to `tutorials.js`:

```js
{
  slug: "boil-an-egg",
  title: "How to Boil an Egg",
  summary: "Soft, jammy or hard-boiled, every time.",
  category: "Cooking",
  tags: ["food", "kitchen", "eggs"],
  minutes: 5
}
```

3. Commit and push. The site updates in about a minute.
