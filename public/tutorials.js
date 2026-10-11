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
    slug: "jcurses",
    title: "JCurses Crash Course",
    summary: "Build colorful, keyboard-driven Java programs that run in a terminal.",
    category: "Programming",
    tags: ["java", "terminal", "eclipse", "ui", "coding"],
    minutes: 10
  }
];
