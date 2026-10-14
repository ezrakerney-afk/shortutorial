/*
  Shortutorial catalog.
  To add a tutorial: make a folder (e.g. /boil-an-egg/index.html),
  then add one entry below. The homepage search and "Random" button use this list.
*/
window.TUTORIALS = [
  {
    slug: "no-internet",
    title: "Fix “Connected, No Internet”",
    summary: "Wi-Fi says connected but nothing loads? Get back online on Windows or Mac.",
    category: "Computer help",
    tags: ["wifi", "wi-fi", "internet", "network", "router", "dns", "windows", "mac", "offline"],
    minutes: 10
  },
  {
    slug: "printer-offline",
    title: "Fix a Printer That Says “Offline”",
    summary: "Clear the queue, restart the spooler and stop your printer dropping offline.",
    category: "Computer help",
    tags: ["printer", "print", "offline", "hp", "canon", "epson", "brother", "windows", "mac"],
    minutes: 10
  },
  {
    slug: "free-up-disk-space",
    title: "Free Up Disk Space",
    summary: "See what's filling your drive and safely clear it on Windows or Mac.",
    category: "Computer help",
    tags: ["storage", "disk", "drive", "full", "space", "c drive", "system data", "windows", "mac"],
    minutes: 15
  },
  {
    slug: "slow-computer",
    title: "Speed Up a Slow Computer",
    summary: "Find what's slowing you down and fix it, from startup apps to upgrades.",
    category: "Computer help",
    tags: ["slow", "speed", "performance", "laptop", "ram", "startup", "task manager", "windows", "mac"],
    minutes: 20
  },
  {
    slug: "second-monitor",
    title: "Fix a Second Monitor That Isn't Detected",
    summary: "No signal or not detected? Cables, settings, drivers and Mac display limits.",
    category: "Computer help",
    tags: ["monitor", "display", "screen", "hdmi", "displayport", "usb-c", "dual monitor", "no signal", "windows", "mac"],
    minutes: 10
  },
  {
    slug: "disk-usage-100",
    title: "Fix 100% Disk Usage in Windows 11",
    summary: "Disk pinned at 100% and everything crawls? Find the cause and fix it.",
    category: "Computer help",
    tags: ["disk", "100%", "slow", "task manager", "sysmain", "hdd", "ssd", "windows"],
    minutes: 15
  },
  {
    slug: "windows-setup-every-startup",
    title: "Stop Setup Screens Appearing Every Startup",
    summary: "Windows keeps asking the same setup and privacy questions? Make it stop.",
    category: "Computer help",
    tags: ["setup", "privacy", "startup", "boot", "lets finish setting up", "oobe", "windows"],
    minutes: 10
  },
  {
    slug: "no-sign-in-box",
    title: "Fix a Missing Sign-In Box on the Lock Screen",
    summary: "No PIN or password box on the Windows lock screen? Get back in.",
    category: "Computer help",
    tags: ["sign in", "login", "lock screen", "password", "pin", "locked out", "safe mode", "windows"],
    minutes: 15
  },
  {
    slug: "windows-september-2026-update",
    title: "Windows 11 September 2026 Update Problems",
    summary: "No sound, crashing apps, AMD black screens: status and fixes for each.",
    category: "Computer help",
    tags: ["windows update", "kb5124008", "kb5129195", "kb5124010", "no sound", "audio", "amd", "crash", "known issue"],
    minutes: 10
  },
  {
    slug: "iphone-update-requested",
    title: "Fix iPhone Stuck on “Update Requested”",
    summary: "iPhone or iPad won't start downloading its update? Get it moving.",
    category: "Phone help",
    tags: ["iphone", "ipad", "ios", "update", "update requested", "stuck", "apple"],
    minutes: 10
  },
  {
    slug: "pixel-wifi-bluetooth",
    title: "Fix Pixel Wi-Fi and Bluetooth Not Working",
    summary: "Pixel Wi-Fi or Bluetooth won't turn on since the 2026 updates? What to try.",
    category: "Phone help",
    tags: ["pixel", "android", "google", "wifi", "wi-fi", "bluetooth", "known issue"],
    minutes: 10
  },
  {
    slug: "take-screenshot",
    title: "How to Take a Screenshot",
    summary: "The whole screen, part of it or one window, on Windows or Mac.",
    category: "Computer help",
    tags: ["screenshot", "screen capture", "print screen", "snipping tool", "screen record", "windows", "mac"],
    minutes: 2
  },
  {
    slug: "find-wifi-password",
    title: "How to Find Your Wi-Fi Password",
    summary: "Find it on your router, PC, Mac, iPhone or Android.",
    category: "Computer help",
    tags: ["wifi", "wi-fi", "password", "network key", "router", "forgot", "windows", "mac", "iphone", "android"],
    minutes: 2
  },
  {
    slug: "recover-unsaved-word-document",
    title: "Recover an Unsaved Word Document",
    summary: "Word crashed or you didn't save? Get your document back.",
    category: "Computer help",
    tags: ["word", "office", "unsaved", "recover", "autorecover", "lost document", "crash", "excel", "windows", "mac"],
    minutes: 8
  },
  {
    slug: "no-sound",
    title: "Fix No Sound on Your Computer",
    summary: "Speakers or headphones silent? Get your sound back on Windows or Mac.",
    category: "Computer help",
    tags: ["sound", "audio", "no sound", "speakers", "headphones", "volume", "mute", "windows", "mac"],
    minutes: 10
  },
  {
    slug: "phone-storage-full",
    title: "Phone Storage Full? Free Up Space",
    summary: "Clear space on iPhone or Android without losing your photos.",
    category: "Phone help",
    tags: ["storage", "full", "space", "iphone", "android", "photos", "whatsapp", "icloud", "google photos"],
    minutes: 15
  },
  {
    slug: "phone-wont-charge",
    title: "Phone Won't Charge? Fix It",
    summary: "Cable, port, heat or battery? Find the cause on iPhone or Android.",
    category: "Phone help",
    tags: ["charge", "charging", "battery", "port", "cable", "iphone", "android", "not charging"],
    minutes: 10
  },
  {
    slug: "block-spam-calls",
    title: "How to Stop Spam Calls",
    summary: "Silence, screen and block robocalls on iPhone or Android.",
    category: "Phone help",
    tags: ["spam", "calls", "robocall", "scam", "block", "unknown callers", "iphone", "android"],
    minutes: 10
  },
  {
    slug: "find-lost-phone",
    title: "Find a Lost or Stolen Phone",
    summary: "Locate, ring, lock and protect a missing iPhone or Android.",
    category: "Phone help",
    tags: ["lost", "stolen", "find my", "find hub", "locate", "phone", "iphone", "android", "security"],
    minutes: 10
  },
  {
    slug: "spot-scam-messages",
    title: "How to Spot a Scam Email or Text",
    summary: "Six signs of a phishing message, and what to do if you clicked.",
    category: "Online safety",
    tags: ["scam", "phishing", "fraud", "email", "text", "sms", "security", "safety"],
    minutes: 5
  },
  {
    slug: "two-factor-authentication",
    title: "Turn On Two-Step Verification",
    summary: "Protect Google, Apple, Microsoft and other accounts with 2FA.",
    category: "Online safety",
    tags: ["2fa", "two-factor", "two-step", "verification", "security", "account", "password", "hacked"],
    minutes: 15
  },
  {
    slug: "stop-browser-popups",
    title: "Stop Pop-Up Ads and Fake Virus Warnings",
    summary: "Block spammy website notifications in Chrome, Edge and Safari.",
    category: "Online safety",
    tags: ["pop-ups", "popups", "ads", "notifications", "virus warning", "chrome", "edge", "safari", "adware"],
    minutes: 8
  },
  {
    slug: "back-up-computer",
    title: "How to Back Up Your Computer",
    summary: "Automatic backups to the cloud and an external drive.",
    category: "Computer help",
    tags: ["backup", "back up", "time machine", "file history", "onedrive", "icloud", "external drive", "windows", "mac"],
    minutes: 20
  },
  {
    slug: "bluetooth-headphones",
    title: "Fix Bluetooth Headphones That Won't Connect",
    summary: "Headphones or AirPods won't pair or play sound? Fix it.",
    category: "Computer help",
    tags: ["bluetooth", "headphones", "airpods", "earbuds", "pair", "connect", "no sound", "windows", "mac"],
    minutes: 10
  },
  {
    slug: "transfer-photos-to-computer",
    title: "Transfer Photos from Phone to Computer",
    summary: "iPhone or Android to PC or Mac, by cable or wirelessly.",
    category: "Phone help",
    tags: ["photos", "transfer", "import", "iphone", "android", "pc", "mac", "heic", "usb", "airdrop"],
    minutes: 15
  },
  {
    slug: "external-drive-not-showing",
    title: "Fix an External Drive That Won't Show Up",
    summary: "Hard drive or USB stick not appearing? Find it and fix it.",
    category: "Computer help",
    tags: ["external drive", "hard drive", "usb", "flash drive", "not showing", "disk management", "disk utility", "windows", "mac"],
    minutes: 10
  },
  {
    slug: "speed-up-wifi",
    title: "Speed Up Slow Home Wi-Fi",
    summary: "Test, then speed up your home Wi-Fi without a new plan.",
    category: "Home & tech",
    tags: ["wifi", "wi-fi", "slow", "internet", "router", "speed", "mesh", "extender", "5ghz"],
    minutes: 15
  },
  {
    slug: "smart-home-together",
    title: "Make Your Smart Home Devices Work Together",
    summary: "One app for every brand: Matter, hubs and automations.",
    category: "Home & tech",
    tags: ["smart home", "matter", "thread", "apple home", "google home", "alexa", "home assistant", "iot", "automation"],
    minutes: 60
  },
  {
    slug: "track-expenses-automatically",
    title: "Track Your Spending Automatically",
    summary: "Let your bank and apps categorise spending for you.",
    category: "Money",
    tags: ["budget", "budgeting", "expenses", "spending", "money", "tracking", "finance", "spreadsheet", "subscriptions"],
    minutes: 30
  },
  {
    slug: "laptop-battery-drain",
    title: "Make Your Laptop Battery Last Longer",
    summary: "Find the drain and get hours back on Windows or Mac.",
    category: "Computer help",
    tags: ["battery", "laptop", "drain", "battery life", "power", "battery health", "windows", "mac"],
    minutes: 15
  },
  {
    slug: "fix-running-toilet",
    title: "How to Fix a Running Toilet",
    summary: "Stop the constant trickle: chain, water level or flapper.",
    category: "Home & tech",
    tags: ["toilet", "running", "plumbing", "flapper", "fill valve", "leak", "water", "home repair"],
    minutes: 15
  },
  {
    slug: "unclog-drain",
    title: "Unclog a Drain Without Harsh Chemicals",
    summary: "Clear blocked sinks, showers and toilets with simple tools.",
    category: "Home & tech",
    tags: ["drain", "clog", "blocked", "sink", "shower", "toilet", "plunger", "plumbing", "home repair"],
    minutes: 15
  },
  {
    slug: "outlet-not-working",
    title: "Fix an Outlet That Stopped Working",
    summary: "Reset the GFCI or tripped breaker, safely.",
    category: "Home & tech",
    tags: ["outlet", "socket", "gfci", "breaker", "electrical", "no power", "tripped", "home repair"],
    minutes: 5
  },
  {
    slug: "jump-start-car",
    title: "How to Jump-Start a Car Safely",
    summary: "The right clamp order, and what to do after it starts.",
    category: "Home & tech",
    tags: ["car", "battery", "jump start", "jumper cables", "dead battery", "won't start", "auto"],
    minutes: 10
  },
  {
    slug: "recycle-right",
    title: "How to Sort Your Recycling Properly",
    summary: "What goes in the bin, what doesn't, and how to check local rules.",
    category: "Home & tech",
    tags: ["recycling", "recycle", "waste", "trash", "garbage", "compost", "plastic", "sorting", "environment"],
    minutes: 5
  },
  {
    slug: "percentages",
    title: "Percentages Made Easy",
    summary: "Percent of a number, percent change, discounts and tips.",
    category: "Math",
    tags: ["math", "percent", "percentage", "discount", "tip", "increase", "decrease", "mental math"],
    minutes: 10
  },
  {
    slug: "fractions",
    title: "Fractions in 10 Minutes",
    summary: "Simplify, add, subtract, multiply and divide fractions.",
    category: "Math",
    tags: ["math", "fractions", "denominator", "numerator", "simplify", "add fractions", "divide fractions"],
    minutes: 10
  },
  {
    slug: "order-of-operations",
    title: "Order of Operations (PEMDAS)",
    summary: "Brackets, powers, ×÷, +− and the left-to-right rule.",
    category: "Math",
    tags: ["math", "pemdas", "bodmas", "bidmas", "order of operations", "brackets", "viral math"],
    minutes: 8
  },
  {
    slug: "solve-for-x",
    title: "Solve for x: Algebra Basics",
    summary: "The balance rule and one- and two-step equations.",
    category: "Math",
    tags: ["math", "algebra", "equations", "solve for x", "variables", "balance"],
    minutes: 10
  },
  {
    slug: "pythagorean-theorem",
    title: "The Pythagorean Theorem",
    summary: "a² + b² = c², finding missing sides, and real uses.",
    category: "Math",
    tags: ["math", "pythagoras", "pythagorean theorem", "triangle", "hypotenuse", "geometry"],
    minutes: 8
  },
  {
    slug: "mean-median-mode",
    title: "Mean, Median, Mode and Range",
    summary: "Three kinds of average, and which one to trust.",
    category: "Math",
    tags: ["math", "statistics", "mean", "median", "mode", "range", "average"],
    minutes: 8
  },
  {
    slug: "probability-basics",
    title: "Probability Basics",
    summary: "Odds as fractions, “and” vs “or”, and the gambler's fallacy.",
    category: "Math",
    tags: ["math", "probability", "odds", "chance", "dice", "coin", "statistics", "gambler's fallacy"],
    minutes: 10
  },
  {
    slug: "compound-interest",
    title: "Compound Interest Explained",
    summary: "How money snowballs, the rule of 72, and the debt trap.",
    category: "Money",
    tags: ["money", "compound interest", "saving", "investing", "rule of 72", "debt", "credit card", "math"],
    minutes: 10
  },
  {
    slug: "html-basics",
    title: "HTML in 10 Minutes",
    summary: "Write your first web page, with a live editor.",
    category: "Programming",
    tags: ["programming", "html", "web", "website", "coding", "beginner", "tags", "learn to code", "make a website"],
    minutes: 10
  },
  {
    slug: "python-first-steps",
    title: "Python: Your First Program",
    summary: "Print, variables, if statements and loops.",
    category: "Programming",
    tags: ["programming", "python", "coding", "beginner", "variables", "loops", "if statement", "learn to code", "first program"],
    minutes: 12
  },
  {
    slug: "spreadsheet-formulas",
    title: "Spreadsheet Formulas Every Beginner Needs",
    summary: "SUM, AVERAGE, IF and the $ sign, in Excel or Google Sheets.",
    category: "Programming",
    tags: ["excel", "google sheets", "spreadsheet", "formulas", "sum", "if", "average", "office"],
    minutes: 10
  },
  {
    slug: "git-basics",
    title: "Git Basics in 15 Minutes",
    summary: "Commits, staging, branches and GitHub, minus the jargon.",
    category: "Programming",
    tags: ["programming", "git", "github", "version control", "commit", "branch", "coding"],
    minutes: 15
  },
  {
    slug: "mental-math-tricks",
    title: "Mental Math Tricks",
    summary: "Fast tricks for adding and multiplying in your head.",
    category: "Math",
    tags: ["math", "mental math", "tricks", "multiplication", "arithmetic", "quick math"],
    minutes: 10
  },
  {
    slug: "touch-typing",
    title: "Learn Touch Typing",
    summary: "Home row, finger positions, and a typing speed test.",
    category: "Life skills",
    tags: ["typing", "touch typing", "keyboard", "wpm", "speed", "skills", "computer"],
    minutes: 10
  },
  {
    slug: "unit-conversions",
    title: "Metric and Imperial Conversions",
    summary: "Length, weight, volume and temperature, plus quick estimates.",
    category: "Math",
    tags: ["math", "metric", "imperial", "conversion", "celsius", "fahrenheit", "km", "miles", "kg", "pounds", "cooking"],
    minutes: 8
  },
  {
    slug: "budget-50-30-20",
    title: "Make a Budget with the 50/30/20 Rule",
    summary: "Needs, wants and savings, with a budget calculator.",
    category: "Money",
    tags: ["money", "budget", "50/30/20", "saving", "spending", "personal finance"],
    minutes: 8
  },
  {
    slug: "binary-numbers",
    title: "Binary Numbers Explained",
    summary: "Read and write binary, plus bits, bytes and hex.",
    category: "Programming",
    tags: ["binary", "bits", "bytes", "hexadecimal", "computers", "math", "programming"],
    minutes: 8
  },
  {
    slug: "read-sheet-music",
    title: "How to Read Sheet Music",
    summary: "Clefs, note names, rhythm and time signatures.",
    category: "Life skills",
    tags: ["music", "sheet music", "notes", "treble clef", "bass clef", "rhythm", "piano"],
    minutes: 12
  },
  {
    slug: "chess-basics",
    title: "How to Play Chess",
    summary: "Setup, how every piece moves, checkmate and castling.",
    category: "Life skills",
    tags: ["chess", "games", "board game", "checkmate", "castling", "strategy"],
    minutes: 12
  },
  {
    slug: "credit-scores",
    title: "How Credit Scores Work",
    summary: "The five factors, free reports, and how to improve your score.",
    category: "Money",
    tags: ["money", "credit score", "fico", "credit report", "utilization", "loans", "credit card"],
    minutes: 10
  },
  {
    slug: "ratios-and-proportions",
    title: "Ratios and Proportions",
    summary: "Simplify, share in a ratio, and scale recipes and maps.",
    category: "Math",
    tags: ["math", "ratio", "proportion", "recipe", "scale", "map scale"],
    minutes: 8
  },
  {
    slug: "exponents-scientific-notation",
    title: "Exponents and Scientific Notation",
    summary: "Powers, exponent rules, and writing huge and tiny numbers.",
    category: "Math",
    tags: ["math", "exponents", "powers", "scientific notation", "standard form", "science"],
    minutes: 8
  },
  {
    slug: "area-and-volume",
    title: "Area, Perimeter and Volume",
    summary: "Work out paint, flooring, fencing and soil.",
    category: "Math",
    tags: ["math", "area", "perimeter", "volume", "geometry", "circle", "diy", "square metres"],
    minutes: 10
  },
  {
    slug: "watts-and-energy-bills",
    title: "Watts, kWh and Your Electricity Bill",
    summary: "What appliances really cost to run, and how to read your bill.",
    category: "Life skills",
    tags: ["electricity", "watts", "kwh", "energy bill", "save money", "appliances", "home"],
    minutes: 10
  },
  {
    slug: "morse-code",
    title: "Learn Morse Code",
    summary: "Dots, dashes, timing and SOS, with a translator that beeps.",
    category: "Life skills",
    tags: ["morse code", "sos", "code", "signals", "survival", "fun"],
    minutes: 8
  },
  {
    slug: "latitude-longitude",
    title: "Latitude and Longitude",
    summary: "Read map coordinates and measure distances between places.",
    category: "Life skills",
    tags: ["maps", "latitude", "longitude", "gps", "coordinates", "geography", "navigation"],
    minutes: 8
  },
  {
    slug: "time-zones",
    title: "Time Zones Made Simple",
    summary: "UTC, daylight saving, and a live converter for scheduling.",
    category: "Life skills",
    tags: ["time zones", "utc", "gmt", "daylight saving", "scheduling", "travel", "meetings"],
    minutes: 8
  },
  {
    slug: "write-professional-email",
    title: "Write a Professional Email",
    summary: "Subject lines, structure, tone and follow-ups that get replies.",
    category: "Life skills",
    tags: ["email", "writing", "work", "professional", "communication", "career", "follow up"],
    minutes: 8
  },
  {
    slug: "negative-numbers",
    title: "Negative Numbers",
    summary: "Number lines, minus a minus, and multiplying negatives.",
    category: "Math",
    tags: ["math", "negative numbers", "integers", "number line", "minus"],
    minutes: 8
  },
  {
    slug: "how-the-internet-works",
    title: "How the Internet Works",
    summary: "IP addresses, DNS, packets and HTTPS, step by step.",
    category: "Programming",
    tags: ["internet", "dns", "ip address", "https", "packets", "router", "how it works", "tech"],
    minutes: 10
  },
  {
    slug: "newtons-laws",
    title: "Newton's Three Laws of Motion",
    summary: "Inertia, F = ma, and action and reaction.",
    category: "Science",
    tags: ["science", "physics", "newton", "force", "motion", "inertia", "f=ma"],
    minutes: 8
  },
  {
    slug: "how-loans-work",
    title: "How Loan Payments Work",
    summary: "APR, amortisation, and how paying extra saves money.",
    category: "Money",
    tags: ["money", "loan", "mortgage", "car loan", "apr", "interest", "amortization", "debt"],
    minutes: 10
  },
  {
    slug: "tie-a-tie",
    title: "How to Tie a Tie",
    summary: "Four-in-hand, half Windsor and full Windsor, step by step.",
    category: "Life skills",
    tags: ["tie", "tie a tie", "knot", "windsor", "four in hand", "suit", "dress", "interview"],
    minutes: 10
  },
  {
    slug: "clocks-go-back",
    title: "Clocks Go Back: Fall-Back Checklist",
    summary: "Nov 1, 2026: set the microwave, oven and car clocks, and test alarms.",
    category: "Life skills",
    tags: ["daylight saving time", "fall back", "time change", "clocks", "microwave clock", "smoke alarm", "november"],
    minutes: 10
  },
  {
    slug: "register-to-vote",
    title: "How to Register to Vote",
    summary: "Check, register online, by mail or in person, and meet the deadline.",
    category: "Life skills",
    tags: ["vote", "register to vote", "voter registration", "election", "vote.gov", "civic"],
    minutes: 10
  },
  {
    slug: "change-wifi-password",
    title: "How to Change Your Wi-Fi Password",
    summary: "Use your provider's app or router settings, then reconnect devices.",
    category: "Computer help",
    tags: ["wifi", "wi-fi", "password", "router", "xfinity", "spectrum", "at&t", "verizon", "network"],
    minutes: 10
  },
  {
    slug: "set-up-voicemail",
    title: "How to Set Up Voicemail",
    summary: "Password, greeting, visual voicemail and transcripts on iPhone or Android.",
    category: "Phone help",
    tags: ["voicemail", "greeting", "iphone", "android", "visual voicemail", "carrier", "phone"],
    minutes: 5
  },
  {
    slug: "back-up-android-phone",
    title: "Back Up Your Android Phone",
    summary: "Google One backup, Google Photos, and restoring to a new phone.",
    category: "Phone help",
    tags: ["android", "backup", "back up", "google one", "google photos", "samsung", "restore", "new phone"],
    minutes: 10
  },
  {
    slug: "keyboard-not-typing",
    title: "Keyboard Not Typing? Fix It",
    summary: "Connections, Filter Keys, wrong layout, drivers and cleaning.",
    category: "Computer help",
    tags: ["keyboard", "not typing", "keys", "wrong characters", "filter keys", "laptop", "windows", "mac"],
    minutes: 10
  },
  {
    slug: "repair-drywall",
    title: "How to Repair Drywall",
    summary: "Patch nail holes, doorknob holes and big holes invisibly.",
    category: "Home & tech",
    tags: ["drywall", "wall", "hole", "patch", "spackle", "joint compound", "diy", "home repair"],
    minutes: 15
  },
  {
    slug: "weather-alerts",
    title: "Weather Watch vs Warning vs Advisory",
    summary: "What each weather alert means and exactly what to do.",
    category: "Life skills",
    tags: ["weather", "tornado", "hurricane", "storm", "watch", "warning", "advisory", "flood", "safety"],
    minutes: 5
  },
  {
    slug: "watch-football-without-cable",
    title: "How to Watch Football Without Cable",
    summary: "Every NFL game, which service shows it, and the free antenna trick.",
    category: "Home & tech",
    tags: ["nfl", "football", "streaming", "cord cutting", "antenna", "sunday ticket", "youtube tv", "peacock", "prime video"],
    minutes: 5
  },
  {
    slug: "nfl-overtime-rules",
    title: "NFL Overtime Rules Explained",
    summary: "Both teams get the ball, then next score wins. Ties, playoffs and more.",
    category: "Life skills",
    tags: ["nfl", "football", "overtime", "rules", "tie", "playoffs", "sports"],
    minutes: 3
  },
  {
    slug: "get-rid-of-fruit-flies",
    title: "How to Get Rid of Fruit Flies",
    summary: "Remove where they breed, clean drains, and set a vinegar trap.",
    category: "Home & tech",
    tags: ["fruit flies", "gnats", "pests", "bugs", "kitchen", "vinegar trap", "flies"],
    minutes: 5
  },
  {
    slug: "jcurses",
    title: "JCurses Crash Course",
    summary: "Build colorful, keyboard-driven Java programs that run in a terminal.",
    category: "Programming",
    tags: ["java", "terminal", "eclipse", "ui", "coding"],
    minutes: 10
  },
  {
    slug: "change-a-tire",
    title: "How to Change a Flat Tire",
    summary: "Swap on your spare safely: wedges, lug nuts, jacking and the star pattern.",
    category: "Home & tech",
    tags: ["flat tire", "change tire", "spare tire", "donut", "lug nuts", "jack", "car", "roadside", "star pattern", "puncture"],
    minutes: 15
  },
  {
    slug: "check-tire-pressure",
    title: "How to Check and Fill Tire Pressure",
    summary: "Find your PSI, check cold, fill right and understand the TPMS light.",
    category: "Home & tech",
    tags: ["tire pressure", "psi", "tpms", "tire light", "air", "gauge", "cold weather", "car maintenance", "inflate tires", "bar", "kpa"],
    minutes: 10
  },
  {
    slug: "paint-a-room",
    title: "How to Paint a Room",
    summary: "Prep, prime, cut in, roll and clean up, plus a paint calculator.",
    category: "Home & tech",
    tags: ["paint", "painting", "paint a room", "walls", "primer", "roller", "cut in", "how much paint", "paint calculator", "diy", "decorating"],
    minutes: 15
  },
  {
    slug: "change-furnace-filter",
    title: "How to Change a Furnace Filter",
    summary: "Find, size and swap your HVAC filter, and know how often to change it.",
    category: "Home & tech",
    tags: ["furnace filter", "air filter", "hvac", "merv", "heating", "air conditioner", "replace filter", "filter size", "allergies", "home maintenance"],
    minutes: 10
  },
  {
    slug: "clean-microwave",
    title: "How to Clean a Microwave Fast",
    summary: "Steam it with lemon or vinegar, wipe it down, and lift stubborn stains and smells.",
    category: "Home & tech",
    tags: ["clean microwave", "microwave", "lemon", "vinegar", "steam clean", "turntable", "kitchen cleaning", "microwave smell", "baking soda", "superheated water"],
    minutes: 6
  },
  {
    slug: "fix-stripped-screw-hole",
    title: "How to Fix a Stripped Screw Hole",
    summary: "Toothpicks, dowels, longer screws and anchors to make screws hold again.",
    category: "Home & tech",
    tags: ["stripped screw", "screw hole", "loose screw", "toothpicks", "wood glue", "dowel", "drywall anchor", "door hinge", "screw extractor", "diy"],
    minutes: 10
  },
  {
    slug: "clean-silver-jewelry",
    title: "How to Clean Silver Jewelry",
    summary: "Remove tarnish safely with soap, a polishing cloth or the baking soda and foil bath.",
    category: "Life skills",
    tags: ["clean silver", "silver jewelry", "tarnish", "sterling silver", "baking soda", "aluminum foil", "polishing cloth", "pearls", "jewelry cleaning", "silver plated"],
    minutes: 7
  },
  {
    slug: "clear-cache",
    title: "How to Clear Cache and Cookies",
    summary: "Clear cache and cookies in Chrome, Edge, Safari or Firefox, and know what you'll lose.",
    category: "Computer help",
    tags: ["clear cache", "cookies", "browsing data", "chrome", "edge", "safari", "firefox", "history", "hard refresh", "website not loading", "sign in loop"],
    minutes: 5
  },
  {
    slug: "get-rid-of-ants",
    title: "How to Get Rid of Ants in the House",
    summary: "Identify the ant, follow the trail, bait instead of spray, and seal entry points.",
    category: "Home & tech",
    tags: ["ants", "get rid of ants", "ant bait", "borax", "boric acid", "sugar ants", "carpenter ants", "pharaoh ants", "pests", "kitchen ants", "bugs"],
    minutes: 8
  },
  {
    slug: "clear-cache-iphone",
    title: "Clear Cache on iPhone and Android",
    summary: "Clear Safari, Chrome and app caches on your phone, plus offload or archive apps.",
    category: "Phone help",
    tags: ["clear cache iphone", "clear cache android", "safari", "chrome", "samsung browser", "app cache", "offload app", "archive app", "cookies", "website data", "phone"],
    minutes: 7
  },
  {
    slug: "mac-keyboard-shortcuts",
    title: "Essential Mac Keyboard Shortcuts",
    summary: "Command key basics, text editing, apps, screenshots and Finder, with a trainer.",
    category: "Computer help",
    tags: ["mac", "keyboard shortcuts", "command key", "macos", "copy paste", "screenshot", "spotlight", "finder", "force quit", "option key", "macbook"],
    minutes: 12
  },
  {
    slug: "use-zoom",
    title: "How to Use Zoom",
    summary: "Join by link or ID, mute, share your screen, chat, host a meeting and fix audio.",
    category: "Computer help",
    tags: ["zoom", "video call", "join meeting", "meeting id", "mute", "share screen", "zoom workplace", "host meeting", "no audio", "webcam", "online meeting"],
    minutes: 12
  },
  {
    slug: "carve-a-pumpkin",
    title: "How to Carve a Pumpkin",
    summary: "Pick, scoop, design, carve safely, make it last until Halloween, and roast the seeds.",
    category: "Life skills",
    tags: ["carve pumpkin", "jack-o-lantern", "halloween", "pumpkin carving", "pumpkin pattern", "pumpkin seeds", "roast pumpkin seeds", "make pumpkin last", "kids", "october"],
    minutes: 12
  },
  {
    slug: "make-a-website",
    title: "Make Your First Website for Free",
    summary: "Plan, write HTML and CSS, publish free on GitHub Pages and add your own domain.",
    category: "Programming",
    tags: ["make a website", "free website", "html", "css", "github pages", "web hosting", "custom domain", "dns", "beginner", "learn to code", "publish website"],
    minutes: 20
  },
  {
    slug: "start-a-garden",
    title: "How to Start a Vegetable Garden",
    summary: "Site, soil, raised beds, what to plant, watering, and fall garlic and cover crops.",
    category: "Life skills",
    tags: ["vegetable garden", "start a garden", "raised bed", "square foot gardening", "hardiness zone", "plant garlic", "cover crops", "soil test", "fall garden", "gardening for beginners", "october"],
    minutes: 12
  },
  {
    slug: "cook-chicken",
    title: "How to Cook Chicken Safely (and Keep It Juicy)",
    summary: "Cook chicken to 165°F: thaw safely, skip washing, and bake, sear or grill it right.",
    category: "Life skills",
    tags: ["chicken", "cook chicken", "chicken temperature", "165", "thaw chicken", "defrost", "chicken breast", "bake chicken", "grill chicken", "food safety", "usda", "meat thermometer"],
    minutes: 12
  },
  {
    slug: "cook-rice",
    title: "How to Cook Perfect Rice",
    summary: "Fluffy rice every time: ratios for white, brown, jasmine and basmati, plus a timer.",
    category: "Life skills",
    tags: ["rice", "cook rice", "rice ratio", "water to rice", "jasmine rice", "basmati", "brown rice", "rice cooker", "microwave rice", "mushy rice", "cooking", "leftover rice"],
    minutes: 10
  },
  {
    slug: "french-press-coffee",
    title: "How to Make French Press Coffee",
    summary: "Brew rich French press coffee with the right ratio, grind and 4-minute timer.",
    category: "Life skills",
    tags: ["coffee", "french press", "press pot", "coffee ratio", "brew coffee", "coffee to water", "grind", "cold brew", "bloom", "coffee timer"],
    minutes: 8
  },
  {
    slug: "airpods-noise-cancellation",
    title: "Use AirPods Noise Cancellation, Transparency and Adaptive",
    summary: "Switch AirPods listening modes from the stem, iPhone, Mac or Watch, and fix weak ANC",
    category: "Phone help",
    tags: ["airpods", "noise cancellation", "anc", "transparency mode", "adaptive audio", "airpods pro", "airpods max", "airpods 4", "airpods 5", "listening mode", "ear tip fit test", "anc not working"],
    minutes: 10
  },
  {
    slug: "get-rid-of-hiccups",
    title: "How to Get Rid of Hiccups",
    summary: "Why hiccups happen, what to try in order, and when to see a doctor.",
    category: "Life skills",
    tags: ["hiccups", "stop hiccups", "hiccup cure", "get rid of hiccups", "hold breath", "diaphragm", "persistent hiccups", "breathing", "home remedy", "health"],
    minutes: 6
  },
  {
    slug: "write-a-check",
    title: "How to Write a Check",
    summary: "Fill out a check step by step, write the amount in words, void and endorse.",
    category: "Money",
    tags: ["check", "write a check", "checkbook", "amount in words", "void a check", "endorse a check", "check register", "balance checkbook", "routing number", "memo line", "bank"],
    minutes: 8
  },
  {
    slug: "check-tax-refund-status",
    title: "Where's My Refund? Check Your Tax Refund Status",
    summary: "Track your federal and state tax refund, decode the statuses, and estimate timing",
    category: "Money",
    tags: ["where's my refund", "tax refund status", "irs refund", "irs2go", "refund tracker", "tax return", "state refund", "amended return", "refund delay", "direct deposit", "october 15 extension"],
    minutes: 8
  },
  {
    slug: "delete-facebook-account",
    title: "Delete or Deactivate Your Facebook Account",
    summary: "Leave Facebook safely: save your info, sort out Messenger and Pages, then delete",
    category: "Online safety",
    tags: ["delete facebook", "deactivate facebook", "facebook account", "accounts center", "messenger", "download your information", "close facebook", "facebook privacy", "cancel deletion", "meta"],
    minutes: 10
  },
  {
    slug: "delete-instagram-account",
    title: "Delete or Deactivate Your Instagram Account",
    summary: "Deactivate or permanently delete Instagram in Accounts Center, after saving your data",
    category: "Online safety",
    tags: ["delete instagram", "deactivate instagram", "instagram account", "accounts center", "download instagram data", "close instagram", "remove instagram", "instagram privacy", "threads", "meta"],
    minutes: 10
  },
  {
    slug: "learn-spanish-basics",
    title: "Learn Basic Spanish",
    summary: "Pronunciation, greetings, numbers 1–20, key phrases, and ser vs estar, with audio.",
    category: "Life skills",
    tags: ["spanish", "learn spanish", "spanish for beginners", "spanish phrases", "spanish numbers", "greetings", "ser vs estar", "pronunciation", "flashcards", "travel spanish", "language"],
    minutes: 15
  },
  {
    slug: "play-piano-basics",
    title: "Piano for Absolute Beginners",
    summary: "Find middle C, hand position, your first song and the C, F and G chords.",
    category: "Life skills",
    tags: ["piano", "learn piano", "keyboard", "middle c", "piano for beginners", "piano chords", "finger numbers", "ode to joy", "music", "play piano", "notes"],
    minutes: 15
  },
  {
    slug: "start-a-business",
    title: "How to Start a Small Business in the US",
    summary: "Test your idea, pick a structure, get a free EIN, register, and handle money and taxes",
    category: "Money",
    tags: ["start a business", "small business", "llc", "sole proprietorship", "ein", "business plan", "break-even", "business license", "register business", "self-employment tax", "sba"],
    minutes: 20
  },
  {
    slug: "find-cheap-flights",
    title: "How to Find Cheap Flights",
    summary: "Flexible dates, Google Flights, when to book, true costs, and your refund rights.",
    category: "Life skills",
    tags: ["cheap flights", "airfare", "google flights", "when to book flights", "thanksgiving flights", "christmas flights", "24 hour rule", "flight refund", "basic economy", "bag fees", "travel"],
    minutes: 12
  },
  {
    slug: "stop-procrastinating",
    title: "How to Stop Procrastinating",
    summary: "Why we put things off and what research says helps, with a Pomodoro timer.",
    category: "Life skills",
    tags: ["procrastination", "stop procrastinating", "productivity", "pomodoro", "focus", "motivation", "time management", "study tips", "to do list", "habits", "self compassion"],
    minutes: 12
  },
  {
    slug: "write-cover-letter",
    title: "How to Write a Cover Letter",
    summary: "Structure, a strong opening, tailoring and formatting, plus a letter builder.",
    category: "Life skills",
    tags: ["cover letter", "job application", "resume", "career", "hiring manager", "writing", "job search", "cover letter template", "cover letter example", "apply for a job"],
    minutes: 12
  },
  {
    slug: "drawing-basics",
    title: "Learn to Draw: The Basics",
    summary: "Lines, shapes, perspective, proportions, shading and gesture, with a drawing pad",
    category: "Life skills",
    tags: ["learn to draw", "drawing for beginners", "how to draw", "perspective drawing", "draw a cube", "shading", "value scale", "proportions", "gesture drawing", "sketching", "drawing practice"],
    minutes: 14
  },
  {
    slug: "photography-basics",
    title: "Photography Basics",
    summary: "Exposure triangle, rule of thirds, light and phone camera tips, with a simulator",
    category: "Life skills",
    tags: ["photography", "exposure triangle", "aperture", "shutter speed", "iso", "rule of thirds", "composition", "leading lines", "golden hour", "phone camera tips", "take better photos"],
    minutes: 14
  },
  {
    slug: "video-editing-basics",
    title: "Video Editing Basics",
    summary: "Cuts, J and L cuts, b-roll, audio, color and export settings, with a mock timeline",
    category: "Computer help",
    tags: ["video editing", "edit videos", "timeline", "j cut", "l cut", "b-roll", "capcut", "davinci resolve", "imovie", "clipchamp", "export settings", "tiktok video size"],
    minutes: 13
  },
  {
    slug: "how-to-meditate",
    title: "How to Meditate",
    summary: "Posture, breath focus, the wandering mind, body scan and a daily habit, with a timer",
    category: "Life skills",
    tags: ["meditation", "how to meditate", "mindfulness", "meditation for beginners", "breathing exercise", "box breathing", "body scan", "meditation timer", "calm down", "stress relief", "guided meditation"],
    minutes: 10
  },
  {
    slug: "investing-basics",
    title: "Investing for Beginners",
    summary: "Stocks, bonds, index funds, diversification, risk and fees, with a fee simulator.",
    category: "Money",
    tags: ["investing for beginners", "how to invest", "stocks", "bonds", "index funds", "etf", "mutual funds", "diversification", "expense ratio", "dollar cost averaging", "asset allocation", "stock market"],
    minutes: 14
  },
  {
    slug: "negotiate-salary",
    title: "How to Negotiate Your Salary",
    summary: "Research pay with BLS data, counter with confidence, and use proven scripts",
    category: "Money",
    tags: ["negotiate salary", "salary negotiation", "job offer", "counteroffer", "ask for a raise", "salary expectations", "bls wages", "pay range", "negotiation script", "signing bonus", "benefits"],
    minutes: 13
  },
  {
    slug: "retirement-accounts",
    title: "Retirement Accounts Explained",
    summary: "401(k), IRA, Roth vs traditional, employer match and 2026 limits, with calculators.",
    category: "Money",
    tags: ["401k", "ira", "roth ira", "roth vs traditional", "employer match", "retirement savings", "2026 contribution limits", "catch-up contributions", "early withdrawal penalty", "rollover", "403b"],
    minutes: 14
  },
  {
    slug: "strong-passwords",
    title: "Strong Passwords and Password Managers",
    summary: "Passphrases, password managers, passkeys and breach checks, with a passphrase generator.",
    category: "Online safety",
    tags: ["strong password", "passphrase", "password generator", "password manager", "passkeys", "password strength checker", "data breach", "have i been pwned", "reused passwords", "nist password guidelines", "master password"],
    minutes: 12
  },
  {
    slug: "tax-brackets-explained",
    title: "How Tax Brackets Work",
    summary: "Marginal vs effective tax rate and the 2026 federal brackets, with a calculator.",
    category: "Money",
    tags: ["tax brackets", "2026 tax brackets", "marginal tax rate", "effective tax rate", "standard deduction", "federal income tax", "taxable income", "raise higher bracket", "irs", "income tax calculator"],
    minutes: 12
  },
  {
    slug: "how-vpns-work",
    title: "How VPNs Work",
    summary: "What a VPN hides and doesn't, when it helps, and free VPN risks, with a visualizer.",
    category: "Online safety",
    tags: ["vpn", "what is a vpn", "do i need a vpn", "free vpn", "public wifi", "vpn privacy", "https", "isp tracking", "vpn travel", "choose a vpn", "ip address"],
    minutes: 11
  },
  {
    slug: "philosophy-basics",
    title: "Philosophy Basics: The Big Questions, Explained",
    summary: "Branches, key thinkers, ethics theories and famous thought experiments, made simple",
    category: "Life skills",
    tags: ["philosophy", "ethics", "trolley problem", "ship of theseus", "brain in a vat", "socrates", "plato", "aristotle", "kant", "utilitarianism", "logic", "epistemology"],
    minutes: 15
  },
  {
    slug: "stoicism-basics",
    title: "Stoicism for Everyday Life: A Beginner's Guide",
    summary: "Dichotomy of control, the four virtues and daily Stoic habits, with a worry sorter",
    category: "Life skills",
    tags: ["stoicism", "stoic", "marcus aurelius", "epictetus", "seneca", "meditations", "dichotomy of control", "journaling", "negative visualization", "philosophy", "anxiety", "mindset"],
    minutes: 12
  },
  {
    slug: "how-the-economy-works",
    title: "How the Economy Works: A Plain-English Guide",
    summary: "Supply and demand, inflation, the Fed, GDP and recessions, with a live graph",
    category: "Money",
    tags: ["economy", "economics", "supply and demand", "inflation", "cpi", "interest rates", "federal reserve", "gdp", "recession", "unemployment", "prices", "fed"],
    minutes: 15
  },
  {
    slug: "night-sky-astronomy",
    title: "Stargazing for Beginners: Read the Night Sky",
    summary: "Moon phases, the North Star, seasonal constellations and gear, with a Moon calculator",
    category: "Science",
    tags: ["stargazing", "astronomy", "night sky", "moon phase", "north star", "big dipper", "constellations", "planets", "light pollution", "binoculars", "telescope", "orion"],
    minutes: 14
  },
  {
    slug: "us-government-basics",
    title: "How the US Government Works: A Nonpartisan Guide",
    summary: "The Constitution, three branches, checks and balances, and how a bill becomes law",
    category: "Life skills",
    tags: ["us government", "civics", "constitution", "three branches", "checks and balances", "how a bill becomes law", "congress", "supreme court", "midterm elections", "electoral college", "veto", "federalism"],
    minutes: 15
  },
  {
    slug: "critical-thinking",
    title: "Critical Thinking Basics",
    summary: "Separate claims from evidence, check sources, and spot fallacies and biases.",
    category: "Life skills",
    tags: ["critical thinking", "logical fallacies", "fake news", "fact check", "lateral reading", "SIFT", "cognitive bias", "confirmation bias", "misinformation", "evaluate sources", "straw man", "ad hominem"],
    minutes: 14
  },
  {
    slug: "logic-and-sets",
    title: "Logic and Sets: An Intro to Discrete Math",
    summary: "AND, OR, NOT, if-then, truth tables, sets, unions, intersections and Venn diagrams.",
    category: "Math",
    tags: ["logic", "truth tables", "venn diagram", "sets", "union", "intersection", "discrete math", "if then", "contrapositive", "de morgan", "boolean logic", "set notation"],
    minutes: 15
  },
  {
    slug: "read-charts-and-graphs",
    title: "How to Read Charts and Spot Misleading Ones",
    summary: "Read any chart, and catch truncated axes, bad averages and false causation.",
    category: "Math",
    tags: ["read charts", "graphs", "misleading graphs", "truncated y-axis", "data literacy", "correlation causation", "bar chart", "line chart", "pie chart", "per capita", "percentage points", "statistics"],
    minutes: 14
  },
  {
    slug: "how-ai-works",
    title: "How AI Chatbots Actually Work",
    summary: "Training, tokens and next-word prediction: what's really inside ChatGPT and Claude.",
    category: "Computer help",
    tags: ["how ai works", "chatgpt", "large language model", "llm", "tokens", "hallucination", "artificial intelligence", "machine learning", "ai explained", "temperature", "claude", "gemini"],
    minutes: 12
  },
  {
    slug: "javascript-basics",
    title: "JavaScript Basics: Your First Steps",
    summary: "Variables, if/else, loops, functions and the DOM, with a live code runner.",
    category: "Programming",
    tags: ["javascript", "js", "learn javascript", "coding for beginners", "programming", "variables", "loops", "functions", "dom", "web development", "console.log"],
    minutes: 20
  },
  {
    slug: "sql-basics",
    title: "SQL Basics: Ask Questions of Your Data",
    summary: "SELECT, WHERE, ORDER BY, GROUP BY and JOIN, with a live query playground.",
    category: "Programming",
    tags: ["sql", "learn sql", "database", "select", "where", "group by", "join", "queries", "mysql", "postgresql", "sqlite", "data analysis"],
    minutes: 20
  },
  {
    slug: "excel-pivot-tables",
    title: "Pivot Tables in Excel and Google Sheets",
    summary: "Summarize big lists in clicks: rows, columns, values, sum, count, filter, refresh.",
    category: "Programming",
    tags: ["pivot table", "excel", "google sheets", "pivottable", "spreadsheet", "summarize data", "sum", "count", "average", "data analysis", "refresh pivot table"],
    minutes: 15
  },
  {
    slug: "ai-prompting-basics",
    title: "How to Write Good AI Prompts",
    summary: "Get better answers from ChatGPT, Claude and Gemini with clear, specific prompts.",
    category: "Computer help",
    tags: ["ai prompts", "chatgpt", "claude", "gemini", "prompt engineering", "ai chatbot", "how to use ai", "write better prompts", "ai privacy", "hallucination", "artificial intelligence"],
    minutes: 12
  },
  {
    slug: "project-management-basics",
    title: "Project Management Basics",
    summary: "Set goals, scope tasks, build a timeline, run a kanban board and manage risks.",
    category: "Life skills",
    tags: ["project management", "kanban", "gantt chart", "critical path", "SMART goals", "scope creep", "RACI", "risk register", "status update", "project plan", "timeline", "work breakdown structure"],
    minutes: 15
  },
  {
    slug: "public-speaking",
    title: "Public Speaking Basics",
    summary: "Plan a clear talk, open strong, practice, calm nerves and handle Q&A.",
    category: "Life skills",
    tags: ["public speaking", "presentation", "speech", "stage fright", "fear of public speaking", "talk outline", "words per minute", "body language", "slides", "Q&A", "toast", "how to give a speech"],
    minutes: 15
  },
  {
    slug: "how-the-immune-system-works",
    title: "How the Immune System Works",
    summary: "White blood cells, antibodies, fever, memory cells and how vaccines train your body.",
    category: "Science",
    tags: ["immune system", "immunity", "white blood cells", "antibodies", "t cells", "b cells", "vaccines", "fever", "inflammation", "memory cells", "biology", "germs"],
    minutes: 12
  },
  {
    slug: "periodic-table-basics",
    title: "Periodic Table Basics",
    summary: "Atoms, protons and electrons, groups and periods, and valence electrons.",
    category: "Science",
    tags: ["periodic table", "chemistry", "atoms", "elements", "protons", "neutrons", "electrons", "atomic number", "isotopes", "ions", "valence electrons", "metals"],
    minutes: 12
  }
];
