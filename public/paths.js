/*
  Learning paths: tracks of tutorials, grouped into units from easiest to hardest.
  To add a path, add an entry below. Each unit is ["Unit name", [slugs in order]]. Slugs that don't exist yet in tutorials.js are skipped,
  so a path can list a tutorial before it's published.
  On a tutorial page this script also shows a "Part of a learning path" banner and remembers the visit.
*/
window.PATHS = [
  { id: "money", title: "Money basics", icon: "💵",
    blurb: "Budget, borrow wisely, understand taxes and start investing.",
    units: [["Everyday money", ["budget-50-30-20", "track-expenses-automatically", "write-a-check"]], ["Borrowing and credit", ["credit-scores", "how-loans-work", "compound-interest"]], ["Growing your money", ["investing-basics", "tax-brackets-explained", "retirement-accounts", "negotiate-salary"]]] },
  { id: "code", title: "Learn to code", icon: "💻",
    blurb: "From how computers count to building and publishing your own site.",
    units: [["How computers work", ["binary-numbers", "how-the-internet-works"]], ["Build web pages", ["html-basics", "make-a-website", "javascript-basics"]], ["Real programming", ["python-first-steps", "git-basics", "sql-basics"]]] },
  { id: "ai", title: "AI essentials", icon: "🤖",
    blurb: "Understand AI chatbots, use them well and judge what they tell you.",
    units: [["Understand AI", ["how-ai-works", "ai-prompting-basics"]], ["Think clearly", ["critical-thinking", "read-charts-and-graphs", "logic-and-sets"]]] },
  { id: "safety", title: "Stay safe online", icon: "🔒",
    blurb: "Spot scams, lock down your accounts and browse privately.",
    units: [["Spot the danger", ["spot-scam-messages", "stop-browser-popups", "block-spam-calls"]], ["Lock it down", ["strong-passwords", "two-factor-authentication"]], ["Privacy pro", ["clear-cache", "how-vpns-work"]]] },
  { id: "job", title: "Get job ready", icon: "💼",
    blurb: "The everyday work skills employers look for, start to finish.",
    units: [["Core skills", ["touch-typing", "write-professional-email", "spreadsheet-formulas"]], ["Work smarter", ["excel-pivot-tables", "project-management-basics", "use-zoom"]], ["Land the job", ["write-cover-letter", "public-speaking", "negotiate-salary"]]] },
  { id: "math", title: "Math refresher", icon: "➗",
    blurb: "Rebuild your math from negative numbers to probability.",
    units: [["Number sense", ["negative-numbers", "fractions", "percentages", "ratios-and-proportions"]], ["Algebra basics", ["order-of-operations", "exponents-scientific-notation", "solve-for-x"]], ["Shapes and data", ["area-and-volume", "pythagorean-theorem", "mean-median-mode", "probability-basics", "logic-and-sets"]]] },
  { id: "pc", title: "Computer fix-it kit", icon: "🛠️",
    blurb: "The fixes every computer owner needs sooner or later.",
    units: [["Quick wins", ["take-screenshot", "no-sound", "bluetooth-headphones"]], ["Common fixes", ["no-internet", "printer-offline", "free-up-disk-space"]], ["Keep it healthy", ["slow-computer", "back-up-computer"]]] },
  { id: "home", title: "Home repair basics", icon: "🏠",
    blurb: "Small repairs you can do yourself instead of calling someone.",
    units: [["First fixes", ["fix-stripped-screw-hole", "change-furnace-filter", "unclog-drain"]], ["Plumbing and power", ["fix-running-toilet", "outlet-not-working"]], ["Bigger projects", ["repair-drywall", "paint-a-room"]]] },
  { id: "car", title: "Car basics", icon: "🚗",
    blurb: "Handle the common roadside problems with confidence.",
    units: [["Car basics", ["check-tire-pressure", "change-a-tire", "jump-start-car"]]] },
  { id: "kitchen", title: "Kitchen basics", icon: "🍳",
    blurb: "Cook the staples well and keep the kitchen clean.",
    units: [["Kitchen staples", ["french-press-coffee", "cook-rice", "cook-chicken"]], ["Keep it clean", ["clean-microwave", "get-rid-of-fruit-flies"]]] },
  { id: "mind", title: "Big ideas", icon: "🧠",
    blurb: "Philosophy, clear thinking and how society works.",
    units: [["Think", ["critical-thinking", "philosophy-basics", "stoicism-basics"]], ["Society", ["how-the-economy-works", "us-government-basics"]]] },
  { id: "creative", title: "Creative skills", icon: "🎨",
    blurb: "Draw, take better photos, edit video and make music.",
    units: [["Start creating", ["drawing-basics", "photography-basics"]], ["Music", ["play-piano-basics", "read-sheet-music"]], ["Make videos", ["video-editing-basics"]]] }
];

(function(){
  const all = window.TUTORIALS || [];
  const known = new Set(all.map(t => t.slug));
  window.PATHS.forEach(p => {
    p.units = p.units.map(([title, steps]) => ({ title, steps: steps.filter(s => known.has(s)) })).filter(u => u.steps.length);
    p.steps = p.units.flatMap(u => u.steps);
  });
  window.PATHS = window.PATHS.filter(p => p.steps.length >= 3);

  const KEY = 'st-visited';
  window.pathVisited = function(){
    try { return new Set(JSON.parse(localStorage.getItem(KEY) || '[]')); } catch(e){ return new Set(); }
  };

  const slug = document.body && document.body.dataset.slug;
  if (!slug || !known.has(slug)) return;
  const seen = window.pathVisited(); seen.add(slug);
  try { localStorage.setItem(KEY, JSON.stringify([...seen])); } catch(e){}

  const path = window.PATHS.find(p => p.steps.includes(slug));
  const intro = document.querySelector('header.intro');
  if (!path || !intro) return;
  const i = path.steps.indexOf(slug), next = path.steps[i + 1];
  const nt = next && all.find(t => t.slug === next);
  const esc = s => String(s).replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
  const css = document.createElement('style');
  css.textContent = `.pathbar{display:flex;flex-wrap:wrap;align-items:center;gap:8px 14px;margin-top:14px;padding:10px 14px;border:1px solid var(--line);border-radius:12px;background:var(--surface);font-family:var(--mono);font-size:.8rem;color:var(--muted)}
.pathbar a{color:var(--accent);font-weight:600;text-decoration:none}.pathbar a:hover{text-decoration:underline}
.pathbar .pb-dots{display:flex;gap:4px}.pathbar .pb-dots i{width:8px;height:8px;border-radius:50%;background:var(--line)}
.pathbar .pb-dots i.on{background:var(--accent)}.pathbar .pb-dots i.now{background:var(--accent);box-shadow:0 0 0 3px var(--accent-soft)}
.pathbar .pb-next{margin-left:auto}`;
  document.head.appendChild(css);
  const dots = path.steps.map((s, k) => `<i class="${k === i ? 'now' : seen.has(s) ? 'on' : ''}"></i>`).join('');
  intro.insertAdjacentHTML('beforeend', `<div class="pathbar"><span>${path.icon} <a href="../paths/#${path.id}">${esc(path.title)}</a> · step ${i + 1} of ${path.steps.length}</span><span class="pb-dots" aria-hidden="true">${dots}</span>${nt ? `<a class="pb-next" href="../${esc(nt.slug)}/">Next: ${esc(nt.title)} →</a>` : `<a class="pb-next" href="../paths/">Path complete · more paths →</a>`}</div>`);
})();
