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
    slug: "jcurses",
    title: "JCurses Crash Course",
    summary: "Build colorful, keyboard-driven Java programs that run in a terminal.",
    category: "Programming",
    tags: ["java", "terminal", "eclipse", "ui", "coding"],
    minutes: 10
  }
];
