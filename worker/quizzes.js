// Certification quizzes. Kept on the server so answers can't be read from the page.
// a = index of the correct option (0-based). pass = correct answers needed.

export default {
  "no-internet": {
    title: "Fix “Connected, No Internet”",
    pass: 4,
    questions: [
      { q: "Every device on your Wi-Fi can't load websites. Where is the problem most likely?",
        o: ["This computer's settings", "The router or internet provider", "The website you're visiting", "Your browser"], a: 1,
        e: "If nothing works on any device, the shared part — the router or the provider — is the likely cause." },
      { q: "What's the safe way to restart a router?",
        o: ["Press the small reset hole", "Unplug it for about 30 seconds, then plug it back in", "Turn off Wi-Fi on your computer", "Change the Wi-Fi password"], a: 1,
        e: "Unplugging restarts it. The reset hole wipes all its settings, which is a different thing." },
      { q: "On hotel Wi-Fi you're connected, but nothing loads. What should you try first?",
        o: ["Reset network settings", "Open neverssl.com to bring up the sign-in page", "Change your DNS server", "Restart the hotel router"], a: 1,
        e: "Public Wi-Fi often needs you to accept terms on a sign-in page before anything works." },
      { q: "What does DNS do?",
        o: ["Encrypts your Wi-Fi", "Turns website names into addresses", "Speeds up downloads", "Stores your Wi-Fi password"], a: 1,
        e: "DNS looks up the address behind a name like example.com. If it fails, no site loads." },
      { q: "What does a Windows network reset remove?",
        o: ["Your documents and photos", "Saved Wi-Fi networks and VPN settings", "All installed apps", "Your Windows account"], a: 1,
        e: "Your files are safe. You'll just need to re-enter Wi-Fi passwords and reinstall any VPN." }
    ]
  },

  "printer-offline": {
    title: "Fix a Printer That Says “Offline”",
    pass: 4,
    questions: [
      { q: "What should you check first when a printer says it's offline?",
        o: ["That it's on, awake and showing no errors", "The printer's warranty", "Whether Windows is activated", "Which brand of ink it uses"], a: 0,
        e: "Sleep mode, paper jams and error lights often make a printer report itself as offline." },
      { q: "Why can a single stuck print job cause problems?",
        o: ["It uses up ink", "It can block everything behind it in the queue", "It deletes the printer driver", "It changes the Wi-Fi network"], a: 1,
        e: "Jobs print in order, so one stuck job holds up the rest. Clearing the queue fixes it." },
      { q: "On Windows, what is the Print Spooler?",
        o: ["A type of USB cable", "The service that handles printing", "A paper tray", "The printer's Wi-Fi chip"], a: 1,
        e: "It's the background service that sends jobs to printers. Restarting it often brings printers back online." },
      { q: "You see “Printer (Copy 1)” in your list. What should you do?",
        o: ["Keep both copies", "Remove the duplicates and add the printer again", "Rename it", "Make Copy 1 the default"], a: 1,
        e: "Duplicate entries often point at an old address. Remove them all and re-add the printer once." },
      { q: "Your printer goes offline again every few days. What's the long-term fix?",
        o: ["Buy a new printer", "Reserve a fixed IP address for it in your router", "Print less often", "Turn off Wi-Fi at night"], a: 1,
        e: "Its address keeps changing, so your computer looks in the wrong place. A reserved IP stops that." }
    ]
  },

  "free-up-disk-space": {
    title: "Free Up Disk Space",
    pass: 4,
    questions: [
      { q: "What's a good rule of thumb for free space on your main drive?",
        o: ["At least 1%", "At least 15% of the drive", "Exactly 50 GB", "None is needed"], a: 1,
        e: "Keeping around 15% free leaves room for updates and the temporary files your system needs." },
      { q: "In Windows' Temporary files list, which box deletes your whole Downloads folder?",
        o: ["Temporary files", "Downloads", "Windows Update Cleanup", "Delivery Optimization Files"], a: 1,
        e: "The Downloads box empties the folder entirely, so only tick it if you've checked what's in there." },
      { q: "What's the downside of removing Windows.old?",
        o: ["Windows gets slower", "You can no longer roll back to your previous version", "Your files are deleted", "Windows Update stops working"], a: 1,
        e: "It's a backup of your old Windows. Removing it is safe, but it's your only way back." },
      { q: "Which of these should you never delete files from by hand?",
        o: ["Downloads", "Desktop", "System folders like Windows or System32", "Videos"], a: 2,
        e: "System folders are core parts of the operating system. Deleting from them can stop it starting." },
      { q: "What's the safe way to move photos off your computer?",
        o: ["Delete them and hope they're in the cloud", "Copy them somewhere else and check they open before deleting", "Compress the Windows folder", "Move them to the Recycle Bin"], a: 1,
        e: "Always confirm the copy works first, and keep two copies of anything you can't replace." }
    ]
  },

  "slow-computer": {
    title: "Speed Up a Slow Computer",
    pass: 4,
    questions: [
      { q: "On Windows, which clears out stuck processes most thoroughly?",
        o: ["Shut down", "Restart", "Sleep", "Lock"], a: 1,
        e: "Fast Startup means Shut down saves part of the system. Restart always starts completely fresh." },
      { q: "Which tool shows what's using your CPU and memory on Windows?",
        o: ["File Explorer", "Task Manager", "Control Panel", "Notepad"], a: 1,
        e: "Task Manager (Ctrl + Shift + Esc) lists every app and how much it's using. On a Mac it's Activity Monitor." },
      { q: "Disabling an app in Startup apps will…",
        o: ["Uninstall it", "Stop it opening automatically when you sign in", "Delete its files", "Make the app itself faster"], a: 1,
        e: "The app stays installed; you just open it yourself when you need it." },
      { q: "Which upgrade usually helps an old computer the most?",
        o: ["A bigger monitor", "Replacing a spinning hard drive with an SSD", "A new keyboard", "More USB ports"], a: 1,
        e: "Old hard drives are the biggest bottleneck in older computers. An SSD can make them feel new." },
      { q: "A pop-up says your computer is infected and asks you to call a number. What is it?",
        o: ["A real Windows alert", "A scam you should ignore", "Your antivirus working", "A browser update"], a: 1,
        e: "Real security software never asks you to call a phone number. Close the page." }
    ]
  },

  "second-monitor": {
    title: "Fix a Second Monitor That Isn't Detected",
    pass: 4,
    questions: [
      { q: "Your monitor says “No signal”. What should you check first?",
        o: ["The graphics driver", "The monitor's input or source setting", "Windows Update", "The screen resolution"], a: 1,
        e: "Monitors only show one input at a time. It's often just set to the wrong port." },
      { q: "On Windows, which shortcut opens display options like Extend?",
        o: ["Win + P", "Ctrl + Alt + Delete", "Win + D", "Alt + Tab"], a: 0,
        e: "Win + P opens the Project menu: PC screen only, Duplicate, Extend and Second screen only." },
      { q: "Can an HDMI splitter give you two separate screens?",
        o: ["Yes, always", "No — it shows the same picture on both", "Only with HDMI 2.1", "Only on a Mac"], a: 1,
        e: "Splitters copy the signal. For two different screens you need a dock or a multi-display adapter." },
      { q: "How many external displays does a MacBook with a base M1 or M2 chip support?",
        o: ["One", "Two", "Three", "None"], a: 0,
        e: "Base M1 and M2 MacBooks support a single external display. Newer and Pro/Max chips support more." },
      { q: "Which shortcut restarts the graphics driver on Windows?",
        o: ["Win + Ctrl + Shift + B", "Win + L", "Ctrl + Shift + Esc", "Win + Shift + S"], a: 0,
        e: "The screen flickers and Windows beeps as the driver restarts. Nothing else is closed." }
    ]
  },

  "disk-usage-100": {
    title: "Fix 100% Disk Usage in Windows 11",
    pass: 4,
    questions: [
      { q: "Where do you find out which app is using the disk?",
        o: ["File Explorer", "Task Manager, sorted by the Disk column", "Control Panel", "The Recycle Bin"], a: 1,
        e: "Ctrl + Shift + Esc opens Task Manager. Sorting by Disk puts the busiest app at the top." },
      { q: "Your PC hits 100% disk right after starting up, then settles after 15 minutes. What does that mean?",
        o: ["The drive is failing", "Normal startup and update work", "You have a virus", "You need more RAM"], a: 1,
        e: "Windows catches up on background tasks after starting or updating. It's only a problem if it doesn't settle." },
      { q: "Which type of drive is most likely to get stuck at 100%?",
        o: ["A solid-state drive (SSD)", "An old spinning hard drive (HDD)", "A USB stick", "A cloud drive"], a: 1,
        e: "Hard drives are slow enough that normal Windows background work can max them out." },
      { q: "A drive health check says “Caution”. What should you do first?",
        o: ["Disable SysMain", "Back up your files", "Rebuild the search index", "Ignore it"], a: 1,
        e: "A failing drive can stop working without warning. Protect your files before anything else." },
      { q: "What does turning off SysMain do?",
        o: ["Stops Windows updates", "Stops Windows preloading apps into memory", "Deletes temporary files", "Turns off the antivirus"], a: 1,
        e: "SysMain preloads apps to speed them up. On slow drives it can keep the disk busy, and it's safe to turn off." }
    ]
  },

  "windows-setup-every-startup": {
    title: "Stop Setup Screens Appearing Every Startup",
    pass: 4,
    questions: [
      { q: "Why might Windows keep showing setup screens after you close them?",
        o: ["Your PC has a virus", "It treats setup as unfinished if you don't click through to the end", "The screen is broken", "Your internet is slow"], a: 1,
        e: "Closing or skipping out early leaves setup marked as incomplete, so Windows asks again." },
      { q: "Where are the setup reminder options in Settings?",
        o: ["System › Notifications › Additional settings", "Accounts › Sign-in options", "Apps › Startup", "Network & internet › Wi-Fi"], a: 0,
        e: "The three reminder options live at the bottom of the Notifications page under Additional settings." },
      { q: "What do the reg add commands in this guide change?",
        o: ["Your privacy choices", "Whether these two reminder screens are shown", "Windows Update settings", "Your password"], a: 1,
        e: "They only switch off the two reminder screens and can be undone at any time." },
      { q: "The screens come back after every fix. What could be resetting your choices?",
        o: ["A “debloat” or PC tune-up tool", "Your keyboard", "The wallpaper", "Bluetooth"], a: 0,
        e: "Tweaking and cleaner tools often reset Windows settings at startup." },
      { q: "A new user account doesn't show the screens, but yours does. What does that suggest?",
        o: ["Your user profile is damaged", "Windows needs reinstalling", "The PC needs more memory", "Your monitor is faulty"], a: 0,
        e: "If a fresh profile is fine, the problem is in your old profile. Move your files to the new one." }
    ]
  },

  "no-sign-in-box": {
    title: "Fix a Missing Sign-In Box on the Lock Screen",
    pass: 4,
    questions: [
      { q: "What's the first thing to try when there's no sign-in box?",
        o: ["Reset Windows", "Click the screen or press Space, Enter or Ctrl + Alt + Delete", "Unplug the power", "Uninstall updates"], a: 1,
        e: "Often the box is just hidden. A click or key press brings it up." },
      { q: "You have a second monitor plugged in but switched off. Why does that matter?",
        o: ["It drains power", "The sign-in box may be showing on that screen", "It slows Windows down", "It doesn't matter"], a: 1,
        e: "Windows can put the sign-in box on another connected display, even one that's off." },
      { q: "How do you open Windows' recovery menu from the lock screen?",
        o: ["Press F1", "Hold Shift and click Power › Restart", "Double-click the clock", "Press Win + R"], a: 1,
        e: "Shift + Restart takes you to the blue “Choose an option” recovery screen." },
      { q: "What might the recovery menu ask for on many Windows 11 laptops?",
        o: ["Your Wi-Fi password", "A BitLocker recovery key", "Your email address", "A product key"], a: 1,
        e: "BitLocker is often on by default. With a Microsoft account, the key is at account.microsoft.com/devices/recoverykey." },
      { q: "What does “Reset this PC” with “Keep my files” remove?",
        o: ["Your documents and photos", "Installed apps and their settings", "Nothing at all", "Your Microsoft account"], a: 1,
        e: "Your personal files stay, but apps and their settings are removed and need reinstalling." }
    ]
  },

  "windows-september-2026-update": {
    title: "Windows 11 September 2026 Update Problems",
    pass: 4,
    questions: [
      { q: "Your USB headset has no sound and shows “Code 10” after the September update. What helped some people?",
        o: ["Switching the device to stereo (2-channel)", "Turning off Wi-Fi", "Resetting the BIOS", "Changing the wallpaper"], a: 0,
        e: "Some users got sound back by switching from surround to stereo in Sound settings." },
      { q: "Which kind of apps crash after KB5124010?",
        o: ["All web browsers", "Mostly older apps using Windows' built-in Dolby Digital (AC-3) decoder", "Only Microsoft Office", "Only antivirus apps"], a: 1,
        e: "Apps with their own decoder, like VLC, aren't affected." },
      { q: "Where do you uninstall a Windows update?",
        o: ["Control Panel › Fonts", "Settings › Windows Update › Update history › Uninstall updates", "Task Manager › Startup", "File Explorer › This PC"], a: 1,
        e: "Update history lists installed updates, and Uninstall updates is under Related settings." },
      { q: "Why pause updates after removing a problem update?",
        o: ["To save battery", "So Windows doesn't reinstall it straight away", "To speed up the PC", "It's required to uninstall"], a: 1,
        e: "Windows reinstalls missing updates automatically unless they're paused." },
      { q: "Should you stop installing Windows updates altogether?",
        o: ["Yes, forever", "No — pause briefly, then update once a fix is out", "Only on weekends", "Only if you have AMD graphics"], a: 1,
        e: "Updates fix security holes. Pause for a week or two at most, then update again." }
    ]
  },

  "iphone-update-requested": {
    title: "Fix iPhone Stuck on “Update Requested”",
    pass: 4,
    questions: [
      { q: "What does “Update Requested” mean?",
        o: ["The update failed", "Your iPhone is waiting in Apple's queue to download", "Your iPhone isn't supported", "The update is installing"], a: 1,
        e: "It's asked Apple's servers for the update and is waiting its turn, which takes longer on release days." },
      { q: "Where can you delete a stuck update?",
        o: ["Settings › General › iPhone Storage", "Settings › Wi-Fi", "The App Store", "Photos"], a: 0,
        e: "The update appears in the iPhone Storage list, named after the iOS version. Tap it, then Delete Update." },
      { q: "What does Reset Network Settings remove?",
        o: ["Photos and apps", "Saved Wi-Fi networks, passwords and VPN settings", "Your Apple ID", "Everything on the phone"], a: 1,
        e: "Your data isn't touched, but you'll need to reconnect to Wi-Fi." },
      { q: "What's the most reliable way to update when it keeps getting stuck?",
        o: ["Use mobile data", "Update with a computer using Finder or the Apple Devices app", "Turn on Low Power Mode", "Restart ten times"], a: 1,
        e: "Updating through a computer skips the iPhone's own download completely." },
      { q: "What does “Offload Unused Apps” do?",
        o: ["Deletes apps and their data", "Removes apps you don't use but keeps their data", "Moves apps to iCloud Drive", "Updates your apps"], a: 1,
        e: "Offloaded apps come back exactly as they were when you reinstall them." }
    ]
  },

  "pixel-wifi-bluetooth": {
    title: "Fix Pixel Wi-Fi and Bluetooth Not Working",
    pass: 4,
    questions: [
      { q: "Where is the Pixel option that resets Wi-Fi and Bluetooth?",
        o: ["Settings › System › Reset options", "Settings › Display", "Settings › Apps", "Settings › Battery"], a: 0,
        e: "Reset options › Reset Bluetooth & Wi-Fi forgets saved networks and pairings without touching your data." },
      { q: "Wi-Fi works in Safe Mode but not normally. What does that tell you?",
        o: ["The hardware is broken", "A downloaded app is interfering", "You need a new router", "The update installed correctly"], a: 1,
        e: "Safe Mode turns off downloaded apps, so one of them is the likely cause." },
      { q: "The Wi-Fi switch is greyed out and won't stay on. What's most likely?",
        o: ["A wrong Wi-Fi password", "A hardware fault in the wireless chip", "A full storage", "A dirty screen"], a: 1,
        e: "A switch that won't turn on usually points to hardware. Contact Pixel support about a repair." },
      { q: "Some posts suggest putting the phone on ice to fix Wi-Fi. Should you?",
        o: ["Yes, it's a permanent fix", "No — condensation can cause water damage", "Only overnight", "Only in summer"], a: 1,
        e: "Cooling may help briefly if the chip is failing, but moisture can permanently damage the phone." },
      { q: "What must you do before a factory reset?",
        o: ["Remove the SIM card", "Back up your phone and know your Google password", "Turn off Bluetooth", "Charge to 100%"], a: 1,
        e: "A factory reset erases everything, so back up first and make sure you can sign back in." }
    ]
  },

  "take-screenshot": {
    title: "How to Take a Screenshot",
    pass: 4,
    questions: [
      { q: "Which Windows shortcut lets you drag to capture part of the screen?",
        o: ["Win + Shift + S", "Ctrl + C", "Alt + F4", "Win + L"], a: 0,
        e: "Win + Shift + S opens the snipping toolbar; the capture is copied to your clipboard." },
      { q: "Which Mac shortcut captures the whole screen?",
        o: ["⌘ + Shift + 3", "⌘ + Q", "⌘ + Tab", "⌘ + Space"], a: 0,
        e: "⌘ Shift 3 saves a picture of the whole screen to your desktop." },
      { q: "On a Mac, how do you capture one window after pressing ⌘ + Shift + 4?",
        o: ["Press Space, then click the window", "Press Esc", "Press Enter twice", "Double-click the desktop"], a: 0,
        e: "Space turns the pointer into a camera that captures whichever window you click." },
      { q: "Where does Windows save screenshots taken with Win + PrtScn?",
        o: ["Pictures › Screenshots", "The desktop", "Documents", "The Recycle Bin"], a: 0,
        e: "Full-screen shots with Win + PrtScn are saved automatically in Pictures › Screenshots." },
      { q: "Why might a screenshot of a streaming video come out black?",
        o: ["Your screen is broken", "The app blocks captures on purpose", "The battery is low", "The file is too big"], a: 1,
        e: "Streaming and some secure apps block screenshots to protect content." }
    ]
  },

  "find-wifi-password": {
    title: "How to Find Your Wi-Fi Password",
    pass: 4,
    questions: [
      { q: "Where is the original Wi-Fi password usually printed?",
        o: ["On the router's sticker", "On the power cable", "On your bill only", "Inside the router"], a: 0,
        e: "Most routers have the default network name and password on a sticker on the back or bottom." },
      { q: "Which Windows command shows a saved Wi-Fi password?",
        o: ["netsh wlan show profile name=\"NetworkName\" key=clear", "ipconfig /all", "ping router", "dir /wifi"], a: 0,
        e: "The password appears next to Key Content." },
      { q: "On a recent Mac, which app stores Wi-Fi passwords?",
        o: ["Passwords", "Photos", "Notes", "Finder"], a: 0,
        e: "The Passwords app has a Wi-Fi section. Older Macs use Keychain Access." },
      { q: "Is the router admin password the same as the Wi-Fi password?",
        o: ["Yes, always", "No — one logs in to settings, the other connects devices", "Only on Apple routers", "Only if you changed it"], a: 1,
        e: "They're different, though both are often on the sticker." },
      { q: "What happens if you hold the router's reset button?",
        o: ["Only the Wi-Fi password changes", "All settings are wiped back to factory defaults", "Nothing", "The internet gets faster"], a: 1,
        e: "A reset restores the sticker password but also erases every other setting." }
    ]
  },

  "recover-unsaved-word-document": {
    title: "Recover an Unsaved Word Document",
    pass: 4,
    questions: [
      { q: "Where is “Recover Unsaved Documents” in Word for Windows?",
        o: ["File › Info › Manage Document", "Insert › Pictures", "View › Zoom", "Home › Styles"], a: 0,
        e: "It's also at the bottom of File › Open's recent list." },
      { q: "Which file extension do Word's AutoRecover backups use on Windows?",
        o: [".asd", ".jpg", ".exe", ".zip"], a: 0,
        e: "Search your PC for *.asd files to find AutoRecover copies." },
      { q: "What does AutoSave need to work?",
        o: ["The file saved in OneDrive or SharePoint", "A printer", "Two monitors", "An internet browser open"], a: 0,
        e: "AutoSave only works for files stored in OneDrive or SharePoint." },
      { q: "Why should you act quickly after losing a document?",
        o: ["Unsaved drafts are deleted after a few days", "Word charges a fee later", "Your computer locks", "The file gets bigger"], a: 0,
        e: "Word cleans up unsaved drafts automatically after about four days." },
      { q: "What's a good AutoRecover interval?",
        o: ["Every 1–5 minutes", "Once a day", "Never", "Every 2 hours"], a: 0,
        e: "Shorter intervals mean less lost work after a crash." }
    ]
  },

  "no-sound": {
    title: "Fix No Sound on Your Computer",
    pass: 4,
    questions: [
      { q: "Which of these has its own separate volume?",
        o: ["The computer, the app and the speakers", "Only the computer", "Only the app", "Only the mouse"], a: 0,
        e: "Any of the three can be muted or turned down independently." },
      { q: "You plugged in a monitor by HDMI and lost sound. Why?",
        o: ["The monitor took over as the output device", "HDMI blocks sound", "The speakers broke", "The internet disconnected"], a: 0,
        e: "Choose your speakers again in the output device menu." },
      { q: "Where can you mute individual apps on Windows?",
        o: ["Volume mixer", "Task Manager", "File Explorer", "Control Panel › Fonts"], a: 0,
        e: "Right-click the speaker icon and open Volume mixer." },
      { q: "Which Windows setting can stop sound working entirely on some devices?",
        o: ["Audio enhancements", "Dark mode", "Night light", "Screen saver"], a: 0,
        e: "Turning off audio enhancements fixes some driver problems." },
      { q: "Headphones work but the built-in speakers don't. What does that suggest?",
        o: ["The speakers may be faulty", "Windows needs reinstalling", "The internet is down", "The volume is too high"], a: 0,
        e: "If one output works, the computer's sound system is fine; the speakers are the issue." }
    ]
  },

  "phone-storage-full": {
    title: "Phone Storage Full? Free Up Space",
    pass: 4,
    questions: [
      { q: "What usually uses the most space on a phone?",
        o: ["Contacts", "Photos, videos and chat apps", "Wallpapers", "Alarms"], a: 1,
        e: "Media and messaging apps are almost always the biggest." },
      { q: "What does “Offload App” on iPhone do?",
        o: ["Deletes the app and its data", "Removes the app but keeps its data", "Moves the app to iCloud Drive", "Hides the app"], a: 1,
        e: "Reinstalling an offloaded app brings it back with your data." },
      { q: "Why empty “Recently Deleted” in Photos?",
        o: ["Deleted photos still use space until it's emptied", "It speeds up Wi-Fi", "It's required by Apple", "It backs up your photos"], a: 0,
        e: "Deleted photos are kept for 30 days and still count against storage." },
      { q: "On Android, which is safe to clear without losing app data?",
        o: ["Cache", "Storage/data", "The app itself", "Your Google account"], a: 0,
        e: "Clearing storage or data resets the app; cache is just temporary files." },
      { q: "Which Google Photos option removes only phone copies of backed-up photos?",
        o: ["Free up space", "Delete all", "Archive", "Share"], a: 0,
        e: "Free up space deletes local copies that are already safely backed up." }
    ]
  },

  "phone-wont-charge": {
    title: "Phone Won't Charge? Fix It",
    pass: 4,
    questions: [
      { q: "What's the first thing to test when a phone won't charge?",
        o: ["A different cable, charger and socket", "A factory reset", "A new phone", "A software update"], a: 0,
        e: "Cables fail far more often than phones do." },
      { q: "What should you use to clean lint out of a charging port?",
        o: ["A wooden toothpick, with the phone off", "A metal paperclip", "Water", "Blowing into it"], a: 0,
        e: "Metal can short the contacts and breath adds moisture." },
      { q: "Your phone stops charging at 80%. What's most likely?",
        o: ["A battery-protection setting", "A broken port", "A virus", "A full storage"], a: 0,
        e: "Optimised or adaptive charging holds at 80% to protect the battery." },
      { q: "A moisture warning appears when you plug in. What should you do?",
        o: ["Unplug and let the phone dry for several hours", "Override it", "Use a hair dryer on high heat", "Charge it faster"], a: 0,
        e: "Charging a wet port can cause damage. Let it dry fully." },
      { q: "Below what iPhone Maximum Capacity is a battery usually considered worn?",
        o: ["About 80%", "99%", "50%", "10%"], a: 0,
        e: "Around 80% capacity, Apple considers a battery worn and it can be replaced." }
    ]
  },

  "block-spam-calls": {
    title: "How to Stop Spam Calls",
    pass: 4,
    questions: [
      { q: "Why doesn't blocking one spam number help for long?",
        o: ["Scammers use fake numbers that keep changing", "Blocking expires after a day", "Phones can only block one number", "It does help forever"], a: 0,
        e: "Spoofed numbers change constantly, so automatic filtering works better." },
      { q: "What does “Silence Unknown Callers” do on iPhone?",
        o: ["Sends numbers not in your contacts to voicemail", "Blocks everyone", "Deletes voicemails", "Turns off the ringer completely"], a: 0,
        e: "Callers not in your contacts go to voicemail without ringing." },
      { q: "What should you do if you answer a robocall?",
        o: ["Hang up without pressing anything or saying yes", "Press 1 to be removed", "Ask them to stop", "Give your name"], a: 0,
        e: "Any response tells them your number is active." },
      { q: "Which US site stops legitimate telemarketers calling?",
        o: ["donotcall.gov", "facebook.com", "weather.gov", "youtube.com"], a: 0,
        e: "Registered numbers should stop getting sales calls within 31 days." },
      { q: "How do you make sure important callers still ring?",
        o: ["Save their numbers to your contacts", "Turn off your phone", "Block all numbers", "Change your number"], a: 0,
        e: "Contacts always ring, even with unknown-caller filtering on." }
    ]
  },

  "find-lost-phone": {
    title: "Find a Lost or Stolen Phone",
    pass: 4,
    questions: [
      { q: "Where can you find a lost iPhone from any computer?",
        o: ["icloud.com/find", "google.com", "apple.com/store", "youtube.com"], a: 0,
        e: "Sign in with your Apple Account to see its location." },
      { q: "Where can you find a lost Android phone from any computer?",
        o: ["google.com/android/find", "android.com/store", "gmail.com/phone", "play.google.com"], a: 0,
        e: "Sign in with the Google account that's on the phone." },
      { q: "What does marking a phone as lost do?",
        o: ["Locks it and shows your message and number", "Erases it immediately", "Turns it off", "Cancels your contract"], a: 0,
        e: "An honest finder can see how to reach you." },
      { q: "Your phone was stolen and you can see it on the map. What should you do?",
        o: ["Give the location to the police, don't go yourself", "Go and get it", "Post the address online", "Erase it immediately"], a: 0,
        e: "Confronting a thief is risky; let the police handle it." },
      { q: "Why lock the phone before erasing it?",
        o: ["Erasing stops you tracking it", "Locking is required to erase", "Erasing makes it ring", "Locking changes your number"], a: 0,
        e: "Once erased, you can no longer see where it is." }
    ]
  },

  "spot-scam-messages": {
    title: "How to Spot a Scam Email or Text",
    pass: 4,
    questions: [
      { q: "A text says your bank account is locked and gives a link. What should you do?",
        o: ["Tap the link quickly", "Open your bank's app or call the number on your card", "Reply with your details", "Forward it to friends"], a: 1,
        e: "Always contact the company through a route you know is genuine." },
      { q: "Someone calls asking you to read out a code you just received by text. What is it?",
        o: ["A normal security check", "A scam to take over your account", "Your bank being helpful", "A delivery confirmation"], a: 1,
        e: "No legitimate company asks for a code sent to you." },
      { q: "Which payment method is a red flag?",
        o: ["Gift cards", "Paying a known bill in your bank's app", "Card payment on a site you typed in", "Direct debit you set up"], a: 0,
        e: "Gift cards, crypto and wire transfers can't be recovered, so scammers love them." },
      { q: "How can you check where a link really goes on a computer?",
        o: ["Hover over it without clicking", "Click it", "Copy it into an email", "Read the sender's name"], a: 0,
        e: "The real address appears when you hover." },
      { q: "You gave your password to a fake site. What first?",
        o: ["Change it on the real site and anywhere you reused it", "Wait and see", "Delete the email", "Restart your computer"], a: 0,
        e: "Change it immediately and turn on two-step verification." }
    ]
  },

  "two-factor-authentication": {
    title: "Turn On Two-Step Verification",
    pass: 4,
    questions: [
      { q: "Which account should you protect with 2FA first?",
        o: ["Your email account", "A game account", "A newsletter", "A shopping list app"], a: 0,
        e: "Email can reset all your other passwords, so it matters most." },
      { q: "What are backup codes for?",
        o: ["Signing in if you lose your phone", "Speeding up your internet", "Sharing with friends", "Paying bills"], a: 0,
        e: "Keep them somewhere other than your phone." },
      { q: "Which 2FA method is most secure?",
        o: ["An authenticator app or security key", "Text messages", "No 2FA", "Email codes only"], a: 0,
        e: "Texts can be intercepted through SIM-swap scams." },
      { q: "Someone asks you for a 2FA code. What should you do?",
        o: ["Never share it", "Read it to them", "Email it", "Post it"], a: 0,
        e: "Real companies never ask for these codes." },
      { q: "Will you have to type a code every single time you sign in?",
        o: ["No, trusted devices are remembered", "Yes, always", "Only on Sundays", "Only on phones"], a: 0,
        e: "You're usually only asked on new devices." }
    ]
  },

  "stop-browser-popups": {
    title: "Stop Pop-Up Ads and Fake Virus Warnings",
    pass: 4,
    questions: [
      { q: "What usually causes ads popping up near the clock?",
        o: ["Website notifications you allowed", "A broken screen", "Low battery", "Windows updates"], a: 0,
        e: "They're notification permissions, usually tricked out of you with a fake Allow button." },
      { q: "Where do you remove notification permissions in Chrome?",
        o: ["Settings › Privacy and security › Site settings › Notifications", "Bookmarks", "History", "Downloads"], a: 0,
        e: "Remove or block any site you don't recognise." },
      { q: "A pop-up says your PC is infected and to call a number. What is it?",
        o: ["A tech-support scam", "A real Microsoft warning", "Your antivirus", "A Windows update"], a: 0,
        e: "Close it; real companies never show a phone number like this." },
      { q: "What does resetting your browser keep?",
        o: ["Bookmarks and saved passwords", "Bad extensions", "Changed search engine", "Notification spam"], a: 0,
        e: "It resets settings and disables extensions but keeps your bookmarks and passwords." },
      { q: "What should you click when a site asks to send notifications?",
        o: ["Block, unless you really want them", "Allow always", "Allow then restart", "Ignore forever"], a: 0,
        e: "Blocking prevents this problem in the first place." }
    ]
  },

  "back-up-computer": {
    title: "How to Back Up Your Computer",
    pass: 4,
    questions: [
      { q: "How many places besides the computer should important files be kept?",
        o: ["Two", "None", "Only one, on the same drive", "Ten"], a: 0,
        e: "Ideally one at home and one online." },
      { q: "Which built-in tool backs up a Mac to an external drive?",
        o: ["Time Machine", "Spotlight", "Preview", "Siri"], a: 0,
        e: "Time Machine backs up hourly and keeps older versions." },
      { q: "Which Windows tool keeps hourly copies of files on an external drive?",
        o: ["File History", "Paint", "Notepad", "Task Manager"], a: 0,
        e: "Find it in Control Panel › System and Security › File History." },
      { q: "Why test restoring a file?",
        o: ["To make sure the backup actually works", "To delete old files", "It speeds up the PC", "It's required by law"], a: 0,
        e: "An untested backup might not be working." },
      { q: "Why isn't cloud sync alone a complete backup?",
        o: ["Deleted or damaged files can sync too", "The cloud is always slower", "It costs too much", "It only works at night"], a: 0,
        e: "Versioned backups on an external drive cover this gap." }
    ]
  },

  "bluetooth-headphones": {
    title: "Fix Bluetooth Headphones That Won't Connect",
    pass: 4,
    questions: [
      { q: "Why might headphones refuse to connect to your computer?",
        o: ["They're already connected to your phone", "The screen is too bright", "The keyboard is unplugged", "Wi-Fi is too fast"], a: 0,
        e: "Most headphones reconnect to the last device used." },
      { q: "What does pairing mode usually look like?",
        o: ["A flashing blue or white light", "A solid red light", "No lights at all", "The headphones turning off"], a: 0,
        e: "Hold the power or Bluetooth button until the light flashes." },
      { q: "Your headphones appear twice in Windows. Which gives better music quality?",
        o: ["Headphones", "Headset", "Both the same", "Neither"], a: 0,
        e: "“Headset” uses a lower-quality mode for the microphone." },
      { q: "Connected but no sound. What should you check?",
        o: ["That they're selected as the output device", "The printer", "Your password", "Screen resolution"], a: 0,
        e: "Pick them in the sound output menu." },
      { q: "Why does call audio sound worse than music?",
        o: ["Bluetooth switches to a lower-quality mode when the mic is used", "Calls are always muted", "The battery is low", "Music is louder"], a: 0,
        e: "Using the computer's built-in mic avoids this." }
    ]
  },

  "transfer-photos-to-computer": {
    title: "Transfer Photos from Phone to Computer",
    pass: 4,
    questions: [
      { q: "What do you need to tap on an iPhone when you connect it to a computer?",
        o: ["Trust (or Allow)", "Delete", "Reset", "Airplane mode"], a: 0,
        e: "The computer can't see photos until you trust it." },
      { q: "What should you choose on Android after plugging in?",
        o: ["File transfer", "Charging only", "MIDI", "Airplane mode"], a: 0,
        e: "File transfer lets the computer see the phone's storage." },
      { q: "Where are Android camera photos stored?",
        o: ["DCIM › Camera", "Downloads", "Music", "Android › Data"], a: 0,
        e: "DCIM stands for Digital Camera Images." },
      { q: "Why might the computer not see the phone at all?",
        o: ["The cable only charges", "The photos are too big", "The phone is too new", "Wi-Fi is off"], a: 0,
        e: "Some cheap cables can't carry data." },
      { q: "How do you avoid HEIC files on Windows?",
        o: ["Set the iPhone's Transfer to Mac or PC to Automatic", "Turn off the camera", "Use airplane mode", "Delete the photos"], a: 0,
        e: "The iPhone then converts photos to JPEG while copying." }
    ]
  },

  "external-drive-not-showing": {
    title: "Fix an External Drive That Won't Show Up",
    pass: 4,
    questions: [
      { q: "Where can you see drives that don't appear in File Explorer?",
        o: ["Disk Management", "Paint", "Calculator", "Photos"], a: 0,
        e: "Right-click Start › Disk Management." },
      { q: "A drive appears in Disk Management with no letter. What do you do?",
        o: ["Assign a drive letter", "Format it", "Throw it away", "Restart the router"], a: 0,
        e: "Change Drive Letter and Paths › Add." },
      { q: "Which format works on both Windows and Mac?",
        o: ["exFAT", "APFS", "NTFS", "HFS+"], a: 0,
        e: "exFAT is readable and writable on both." },
      { q: "What does formatting a drive do?",
        o: ["Erases everything on it", "Speeds it up only", "Backs it up", "Nothing"], a: 0,
        e: "Only format empty or backed-up drives." },
      { q: "A drive clicks and isn't detected anywhere. What should you do?",
        o: ["Stop using it and seek data recovery if needed", "Keep plugging it in", "Shake it", "Format it repeatedly"], a: 0,
        e: "Repeated attempts can destroy failing drives." }
    ]
  },

  "speed-up-wifi": {
    title: "Speed Up Slow Home Wi-Fi",
    pass: 4,
    questions: [
      { q: "Speed is slow even right next to the router. What's the likely cause?",
        o: ["Your internet plan or connection", "Router placement", "Walls", "Distance"], a: 0,
        e: "Contact your provider if it's slow at the router itself." },
      { q: "Where is the best place for a router?",
        o: ["Central, high and in the open", "In a cupboard", "Next to the microwave", "On the floor behind the TV"], a: 0,
        e: "Obstacles and interference weaken the signal." },
      { q: "What's the difference between 2.4 GHz and 5 GHz?",
        o: ["2.4 reaches further; 5 is faster but shorter range", "They're identical", "5 GHz reaches further", "2.4 GHz is always faster"], a: 0,
        e: "Use 5 GHz when you're close to the router." },
      { q: "What's best for a big house with dead zones?",
        o: ["A mesh Wi-Fi system", "Turning the router off at night", "More passwords", "A longer power cable"], a: 0,
        e: "Mesh units work together to cover the whole home." },
      { q: "What's always fastest for a desktop that never moves?",
        o: ["An Ethernet cable", "2.4 GHz Wi-Fi", "Bluetooth", "Mobile hotspot"], a: 0,
        e: "A cable avoids Wi-Fi's distance and interference." }
    ]
  },

  "smart-home-together": {
    title: "Make Your Smart Home Devices Work Together",
    pass: 4,
    questions: [
      { q: "What's the first step to a smart home that works together?",
        o: ["Choose one main platform", "Buy more devices", "Use a different app for each brand", "Turn off Wi-Fi"], a: 0,
        e: "One main app ties everything together." },
      { q: "What does the Matter logo mean?",
        o: ["The device works with all major smart home platforms", "It's waterproof", "It needs no power", "It only works with Alexa"], a: 0,
        e: "Matter devices can join Apple Home, Google Home, Alexa and more." },
      { q: "What keeps automations running when you're away?",
        o: ["A hub, like a HomePod, Nest Hub or Echo", "Your phone's flashlight", "A USB stick", "Nothing is needed"], a: 0,
        e: "The hub runs automations at home." },
      { q: "Why give devices clear, unique names?",
        o: ["So voice assistants don't get confused", "It speeds up Wi-Fi", "It's required for Matter", "It saves power"], a: 0,
        e: "Names like “Kitchen light” work best." },
      { q: "Can a Matter device work with two platforms at once?",
        o: ["Yes, using the share or pairing option", "No, never", "Only on Sundays", "Only with a cable"], a: 0,
        e: "Matter supports multiple platforms at the same time." }
    ]
  },

  "track-expenses-automatically": {
    title: "Track Your Spending Automatically",
    pass: 4,
    questions: [
      { q: "What makes automatic expense tracking possible?",
        o: ["Paying mostly by card or phone", "Paying only in cash", "Writing receipts by hand", "Closing your bank account"], a: 0,
        e: "Card and phone payments are recorded by your bank automatically." },
      { q: "What's the simplest place to start?",
        o: ["Your bank's own app", "A paid financial advisor", "A notebook", "Social media"], a: 0,
        e: "Most banking apps categorise spending for free." },
      { q: "What file format do banks use for downloading transactions?",
        o: ["CSV", "MP3", "JPEG", "ZIP"], a: 0,
        e: "CSV files open in any spreadsheet." },
      { q: "Can a reputable budgeting app move money out of your account?",
        o: ["No, connections are usually read-only", "Yes, always", "Only on weekends", "Only cash"], a: 0,
        e: "They can see transactions but not move money." },
      { q: "How often should you review your spending?",
        o: ["About 10 minutes once a week", "Once a year", "Every hour", "Never"], a: 0,
        e: "A short weekly check-in is what changes habits." }
    ]
  },

  "laptop-battery-drain": {
    title: "Make Your Laptop Battery Last Longer",
    pass: 4,
    questions: [
      { q: "What's usually the biggest battery user on a laptop?",
        o: ["The screen", "The keyboard", "The speakers", "The USB ports"], a: 0,
        e: "Lowering brightness helps most." },
      { q: "Where does Windows show which apps used the most battery?",
        o: ["Settings › System › Power & battery › Battery usage", "File Explorer", "Paint", "Device Manager"], a: 0,
        e: "It covers the last 24 hours or 7 days." },
      { q: "Which Windows command creates a battery health report?",
        o: ["powercfg /batteryreport", "ipconfig", "chkdsk", "ping"], a: 0,
        e: "Compare full charge capacity with design capacity." },
      { q: "What does “Service recommended” on a Mac battery mean?",
        o: ["The battery is worn and should be replaced", "It's fully charged", "It needs an update", "It's overheating right now"], a: 0,
        e: "A replacement restores battery life." },
      { q: "Does dark mode save battery on every laptop?",
        o: ["Mainly on OLED screens", "Yes, always a lot", "Never", "Only when plugged in"], a: 0,
        e: "On LCD screens the difference is small." }
    ]
  },

  "fix-running-toilet": {
    title: "How to Fix a Running Toilet",
    pass: 4,
    questions: [
      { q: "What are the two most common causes of a running toilet?",
        o: ["A leaky flapper or the water level set too high", "A broken seat or lid", "Low water pressure or old pipes", "A full septic tank"], a: 0,
        e: "Both are inside the tank and easy to fix." },
      { q: "How do you test the flapper for leaks?",
        o: ["Add food colouring to the tank and wait 15 minutes", "Flush ten times", "Listen with a phone", "Pour salt in the bowl"], a: 0,
        e: "Colour in the bowl means the flapper is leaking." },
      { q: "Where should the water level stop?",
        o: ["About an inch below the top of the overflow tube", "Above the overflow tube", "At the very bottom", "At the rim of the bowl"], a: 0,
        e: "Or at the fill line marked inside the tank." },
      { q: "What must you do before replacing the flapper?",
        o: ["Turn off the water valve and flush to empty the tank", "Remove the whole toilet", "Call the water company", "Nothing"], a: 0,
        e: "Turning the valve clockwise shuts off the supply." },
      { q: "How much slack should the flapper chain have?",
        o: ["About a finger's width", "None, it should be tight", "Several inches", "It doesn't matter"], a: 0,
        e: "Too tight or too loose both stop the flapper sealing." }
    ]
  },

  "unclog-drain": {
    title: "Unclog a Drain Without Harsh Chemicals",
    pass: 4,
    questions: [
      { q: "What usually blocks bathroom sinks and showers?",
        o: ["Hair", "Sand", "Paper", "Coins"], a: 0,
        e: "A plastic drain snake pulls it out." },
      { q: "Which plunger is for toilets?",
        o: ["A flange plunger", "A cup plunger", "Any spoon", "A kitchen whisk"], a: 0,
        e: "The flange seals into the toilet's outlet." },
      { q: "Why block the overflow hole when plunging?",
        o: ["So the pressure goes down to the clog", "To stop smells", "To keep water hot", "It isn't needed"], a: 0,
        e: "Otherwise the pressure escapes through the overflow." },
      { q: "Why not pour boiling water down every drain?",
        o: ["It can damage plastic pipes and crack porcelain", "It's too slow", "It freezes", "It's always fine"], a: 0,
        e: "Use hot, not boiling, water." },
      { q: "Several drains are slow at once. What does that suggest?",
        o: ["A blockage in the main line; call a plumber", "One sink is dirty", "Low water pressure", "Nothing serious"], a: 0,
        e: "Multiple slow drains point further down the system." }
    ]
  },

  "outlet-not-working": {
    title: "Fix an Outlet That Stopped Working",
    pass: 4,
    questions: [
      { q: "When should you stop and call an electrician?",
        o: ["Burning smell, scorch marks or a hot outlet", "The outlet is behind a sofa", "You want a new lamp", "The plug is white"], a: 0,
        e: "These are signs of a dangerous fault." },
      { q: "Which outlets usually have Test and Reset buttons?",
        o: ["GFCI outlets in bathrooms, kitchens and outdoors", "All bedroom outlets", "Light switches", "USB chargers"], a: 0,
        e: "A tripped GFCI can cut power to other outlets too." },
      { q: "How do you reset a tripped breaker?",
        o: ["Push it fully to OFF, then back to ON", "Tap it gently", "Leave it in the middle", "Unscrew it"], a: 0,
        e: "Tripped breakers often rest in the middle position." },
      { q: "A breaker trips every time you use one appliance. What's likely?",
        o: ["That appliance is faulty", "The breaker is fine", "The house needs rewiring", "The outlet is too clean"], a: 0,
        e: "Test the appliance elsewhere or replace it." },
      { q: "How often should you test GFCI outlets?",
        o: ["About once a month", "Never", "Every ten years", "Only during storms"], a: 0,
        e: "Press Test, it should click off, then press Reset." }
    ]
  },

  "jump-start-car": {
    title: "How to Jump-Start a Car Safely",
    pass: 4,
    questions: [
      { q: "Which clamp do you connect first?",
        o: ["Red to + on the dead battery", "Black to the good battery", "Black to bare metal", "Red to the good battery"], a: 0,
        e: "Red to dead, red to good, black to good, black to metal." },
      { q: "Where does the last black clamp go?",
        o: ["Bare, unpainted metal on the dead car, away from the battery", "The dead battery's negative", "The good battery's positive", "The tyre"], a: 0,
        e: "This keeps any spark away from battery gas." },
      { q: "What should you never do once clamps are connected?",
        o: ["Let the clamps touch each other", "Start the working car", "Wait a few minutes", "Close the windows"], a: 0,
        e: "Touching clamps can cause sparks and damage." },
      { q: "In what order do you remove the cables?",
        o: ["The reverse of how you connected them", "Any order", "Red ones first", "Leave them on"], a: 0,
        e: "Start with the black clamp on bare metal." },
      { q: "After a jump, how long should you drive?",
        o: ["At least 20–30 minutes", "One minute", "Don't drive at all", "Until the fuel runs out"], a: 0,
        e: "This lets the alternator recharge the battery." }
    ]
  },

  "recycle-right": {
    title: "How to Sort Your Recycling Properly",
    pass: 4,
    questions: [
      { q: "Who decides what your recycling bin accepts?",
        o: ["Your local town or waste collector", "The product maker", "The national government only", "The supermarket"], a: 0,
        e: "Rules depend on the local sorting facility." },
      { q: "Should you put recycling inside a plastic bag?",
        o: ["No, bags jam sorting machines", "Yes, always", "Only on Mondays", "Only for glass"], a: 0,
        e: "Put items in loose." },
      { q: "Why should batteries never go in the household bin?",
        o: ["They can start fires in trucks and sorting centres", "They're too heavy", "They're worth money", "They're biodegradable"], a: 0,
        e: "Use a battery drop-off point." },
      { q: "What does the number inside the recycling triangle tell you?",
        o: ["The type of plastic", "That it's definitely recyclable", "The price", "How old it is"], a: 0,
        e: "Check locally which types are accepted." },
      { q: "Not sure if something is recyclable?",
        o: ["Look it up, or put it in the rubbish", "Put it in recycling and hope", "Burn it", "Bury it"], a: 0,
        e: "Wish-cycling contaminates whole loads." }
    ]
  },

  "percentages": {
    title: "Percentages Made Easy",
    pass: 4,
    questions: [
      { q: "What is 25% as a decimal?",
        o: ["0.25", "2.5", "25", "0.025"], a: 0,
        e: "Divide by 100: 25 ÷ 100 = 0.25." },
      { q: "What is 15% of 60?",
        o: ["6", "9", "12", "15"], a: 1,
        e: "10% is 6, 5% is 3, so 15% is 9." },
      { q: "A price goes from $50 to $40. What's the percent change?",
        o: ["10% decrease", "20% decrease", "25% decrease", "20% increase"], a: 1,
        e: "(40 − 50) ÷ 50 = −0.2, a 20% decrease." },
      { q: "What do you multiply a price by to take 30% off?",
        o: ["0.3", "0.7", "1.3", "3"], a: 1,
        e: "You pay the remaining 70%, so multiply by 0.70." },
      { q: "“20% off, then an extra 10% off” is a total discount of…",
        o: ["30%", "28%", "32%", "10%"], a: 1,
        e: "0.8 × 0.9 = 0.72, so you pay 72%: a 28% discount." }
    ]
  },

  "fractions": {
    title: "Fractions in 10 Minutes",
    pass: 4,
    questions: [
      { q: "In 3/8, what does the 8 tell you?",
        o: ["How many parts you have", "How many equal parts make a whole", "The answer", "How many wholes there are"], a: 1,
        e: "The bottom number (denominator) is how many equal parts make one whole." },
      { q: "What is 12/16 simplified?",
        o: ["6/8", "3/4", "2/3", "4/3"], a: 1,
        e: "Divide top and bottom by 4: 12/16 = 3/4." },
      { q: "What is 1/2 + 1/3?",
        o: ["2/5", "5/6", "1/6", "2/6"], a: 1,
        e: "Common bottom 6: 3/6 + 2/6 = 5/6." },
      { q: "What is 2/3 × 3/4?",
        o: ["6/12 = 1/2", "5/7", "8/9", "2/4"], a: 0,
        e: "Top × top = 6, bottom × bottom = 12, and 6/12 = 1/2." },
      { q: "What is 1/2 ÷ 1/4?",
        o: ["1/8", "2", "1/2", "4"], a: 1,
        e: "Flip and multiply: 1/2 × 4/1 = 4/2 = 2. Two quarters fit in a half." }
    ]
  },

  "order-of-operations": {
    title: "Order of Operations (PEMDAS)",
    pass: 4,
    questions: [
      { q: "What is 2 + 3 × 4?",
        o: ["20", "14", "24", "9"], a: 1,
        e: "Multiply first: 3 × 4 = 12, then 2 + 12 = 14." },
      { q: "What is 12 ÷ 3 × 2?",
        o: ["2", "8", "6", "4"], a: 1,
        e: "Same level, so left to right: 12 ÷ 3 = 4, then × 2 = 8." },
      { q: "What is (5 − 2)² + 1?",
        o: ["10", "26", "8", "12"], a: 0,
        e: "Brackets: 3. Power: 9. Then + 1 = 10." },
      { q: "What is 10 − 4 + 3?",
        o: ["3", "9", "17", "13"], a: 1,
        e: "Left to right: 10 − 4 = 6, then 6 + 3 = 9." },
      { q: "What is −3²?",
        o: ["9", "−9", "6", "−6"], a: 1,
        e: "The power applies to 3 first (9), then the minus: −9." }
    ]
  },

  "solve-for-x": {
    title: "Solve for x: Algebra Basics",
    pass: 4,
    questions: [
      { q: "Solve x − 4 = 9.",
        o: ["5", "13", "36", "−5"], a: 1,
        e: "Add 4 to both sides: x = 13." },
      { q: "Solve 5x = 35.",
        o: ["7", "30", "40", "175"], a: 0,
        e: "Divide both sides by 5: x = 7." },
      { q: "Solve 2x + 3 = 11.",
        o: ["7", "4", "5.5", "8"], a: 1,
        e: "Subtract 3: 2x = 8. Divide by 2: x = 4." },
      { q: "What's the golden rule for equations?",
        o: ["Do the same thing to both sides", "Always add first", "Move numbers to the left", "Multiply by x"], a: 0,
        e: "Doing the same to both sides keeps the equation balanced." },
      { q: "Solve x/3 + 1 = 5.",
        o: ["12", "6", "4", "18"], a: 0,
        e: "Subtract 1: x/3 = 4. Multiply by 3: x = 12." }
    ]
  },

  "pythagorean-theorem": {
    title: "The Pythagorean Theorem",
    pass: 4,
    questions: [
      { q: "Which triangles does a² + b² = c² work for?",
        o: ["Any triangle", "Right triangles only", "Equilateral triangles only", "Triangles with equal sides"], a: 1,
        e: "It needs one 90° angle." },
      { q: "What is the hypotenuse?",
        o: ["The shortest side", "The side opposite the right angle", "Any side", "The base"], a: 1,
        e: "It's the longest side, opposite the right angle." },
      { q: "A right triangle has short sides 6 and 8. How long is the hypotenuse?",
        o: ["14", "10", "48", "7"], a: 1,
        e: "36 + 64 = 100, and √100 = 10." },
      { q: "Hypotenuse 13, one side 5. What's the other side?",
        o: ["8", "12", "18", "√194"], a: 1,
        e: "169 − 25 = 144, and √144 = 12." },
      { q: "Builders check a corner is square by measuring which pattern?",
        o: ["1-2-3", "3-4-5", "2-2-2", "5-5-5"], a: 1,
        e: "3² + 4² = 5², so a 3-4-5 triangle has a perfect right angle." }
    ]
  },

  "mean-median-mode": {
    title: "Mean, Median, Mode and Range",
    pass: 4,
    questions: [
      { q: "What is the mean of 4, 6 and 11?",
        o: ["6", "7", "21", "11"], a: 1,
        e: "4 + 6 + 11 = 21, and 21 ÷ 3 = 7." },
      { q: "What is the median of 9, 1, 5, 3, 7?",
        o: ["5", "3", "9", "25"], a: 0,
        e: "Sorted: 1, 3, 5, 7, 9. The middle value is 5." },
      { q: "What is the median of 2, 4, 6, 10?",
        o: ["4", "5", "6", "5.5"], a: 1,
        e: "The middle two are 4 and 6; halfway is 5." },
      { q: "Which average is best for house prices in an area with a few mansions?",
        o: ["Mean", "Median", "Mode", "Range"], a: 1,
        e: "The median isn't pulled up by a few extreme values." },
      { q: "What is the range of 3, 8, 15, 6?",
        o: ["12", "8", "15", "32"], a: 0,
        e: "15 − 3 = 12." }
    ]
  },

  "probability-basics": {
    title: "Probability Basics",
    pass: 4,
    questions: [
      { q: "What's the probability of rolling a 3 on a normal die?",
        o: ["1/3", "1/6", "1/2", "3/6"], a: 1,
        e: "One way out of six equally likely outcomes." },
      { q: "What's the chance of flipping heads twice in a row?",
        o: ["1/2", "1/4", "1/3", "2/4"], a: 1,
        e: "Independent events: 1/2 × 1/2 = 1/4." },
      { q: "What's the chance of rolling a 5 or a 6?",
        o: ["1/36", "1/3", "1/6", "5/6"], a: 1,
        e: "1/6 + 1/6 = 2/6 = 1/3." },
      { q: "A coin lands heads 6 times in a row. The next flip is…",
        o: ["More likely tails", "More likely heads", "Still 50/50", "Impossible to predict at all"], a: 2,
        e: "Each flip is independent; the coin has no memory." },
      { q: "If the chance of rain is 30%, what's the chance it stays dry?",
        o: ["30%", "70%", "60%", "100%"], a: 1,
        e: "1 − 0.3 = 0.7, or 70%." }
    ]
  },

  "compound-interest": {
    title: "Compound Interest Explained",
    pass: 4,
    questions: [
      { q: "What makes compound interest different from simple interest?",
        o: ["It's paid on your interest too", "It's always a higher rate", "It's only for loans", "It's paid once"], a: 0,
        e: "Interest earns interest, so growth snowballs." },
      { q: "Using the rule of 72, how long does money take to double at 8%?",
        o: ["8 years", "9 years", "12 years", "72 years"], a: 1,
        e: "72 ÷ 8 = 9 years." },
      { q: "Which matters most for compound growth?",
        o: ["How often it compounds", "Time and the interest rate", "The bank's name", "The day you start"], a: 1,
        e: "Monthly vs yearly compounding makes a small difference; years and rate make a huge one." },
      { q: "A $2,000 credit card balance at 24% a year, with nothing paid, roughly doubles in…",
        o: ["1 year", "3 years", "10 years", "24 years"], a: 1,
        e: "72 ÷ 24 = 3 years." },
      { q: "In A = P(1 + r/n)^(nt), what is P?",
        o: ["The interest rate", "The starting amount", "The number of years", "The final amount"], a: 1,
        e: "P is the principal: the money you start with." }
    ]
  },

  "html-basics": {
    title: "HTML in 10 Minutes",
    pass: 4,
    questions: [
      { q: "Which is a correct closing tag for a paragraph?",
        o: ["<p/>", "</p>", "<\\p>", "<end p>"], a: 1,
        e: "Closing tags start with a forward slash: </p>." },
      { q: "Which attribute sets where a link goes?",
        o: ["src", "alt", "href", "link"], a: 2,
        e: "href holds the link's destination." },
      { q: "What is the alt attribute on an image for?",
        o: ["Making it bigger", "Describing it for people who can't see it", "Linking it", "Changing its colour"], a: 1,
        e: "Screen readers read alt text aloud; it also shows if the image fails to load." },
      { q: "Which tag makes a numbered list?",
        o: ["<ul>", "<ol>", "<li>", "<nl>"], a: 1,
        e: "<ol> is an ordered (numbered) list; <ul> is bulleted." },
      { q: "Where does the visible content of a page go?",
        o: ["<head>", "<title>", "<body>", "<meta>"], a: 2,
        e: "Everything visible goes inside <body>." }
    ]
  },

  "python-first-steps": {
    title: "Python: Your First Program",
    pass: 4,
    questions: [
      { q: "What does print(\"Hi\") do?",
        o: ["Prints on paper", "Shows Hi on the screen", "Saves a file", "Nothing"], a: 1,
        e: "print() displays its contents." },
      { q: "In Python, what does = do?",
        o: ["Checks if two things are equal", "Stores a value in a variable", "Adds numbers", "Ends a line"], a: 1,
        e: "= assigns. To compare, use ==." },
      { q: "Which numbers does range(2, 5) give?",
        o: ["2, 3, 4, 5", "2, 3, 4", "3, 4, 5", "5, 4, 3, 2"], a: 1,
        e: "It starts at 2 and stops before 5." },
      { q: "Why does indentation matter in Python?",
        o: ["It doesn't", "It shows which lines belong inside if statements and loops", "It makes code run faster", "It's only for comments"], a: 1,
        e: "Python uses indentation to group code into blocks." },
      { q: "What does print(f\"{2 + 3} apples\") show?",
        o: ["{2 + 3} apples", "5 apples", "2 + 3 apples", "An error"], a: 1,
        e: "Inside an f-string, the expression in braces is calculated: 5." }
    ]
  },

  "spreadsheet-formulas": {
    title: "Spreadsheet Formulas Every Beginner Needs",
    pass: 4,
    questions: [
      { q: "What must every spreadsheet formula start with?",
        o: ["#", "=", "+", "$"], a: 1,
        e: "The equals sign tells the spreadsheet it's a formula." },
      { q: "What does B2:B6 mean?",
        o: ["B2 and B6 only", "The cells from B2 down to B6", "B2 divided by B6", "Columns B to 6"], a: 1,
        e: "A colon makes a range." },
      { q: "Which formula counts cells that contain numbers?",
        o: ["=SUM()", "=COUNT()", "=MAX()", "=TOTAL()"], a: 1,
        e: "COUNT counts numeric cells; COUNTA counts any non-empty cells." },
      { q: "What does =IF(A1>10, \"Big\", \"Small\") show when A1 is 4?",
        o: ["Big", "Small", "4", "FALSE"], a: 1,
        e: "The test is false, so it shows the third value." },
      { q: "What does the $ in $F$1 do?",
        o: ["Formats it as money", "Keeps the reference fixed when you copy the formula", "Hides the cell", "Adds tax"], a: 1,
        e: "It's an absolute reference; it won't shift when dragged." }
    ]
  },

  "git-basics": {
    title: "Git Basics in 15 Minutes",
    pass: 4,
    questions: [
      { q: "What is a commit?",
        o: ["A saved snapshot of your project", "A file", "A website", "A password"], a: 0,
        e: "Each commit is a snapshot you can return to." },
      { q: "What does git add do?",
        o: ["Saves the snapshot", "Stages changes for the next commit", "Uploads to GitHub", "Creates a branch"], a: 1,
        e: "add picks changes to include; commit saves them." },
      { q: "Which command uploads your commits to GitHub?",
        o: ["git pull", "git push", "git log", "git init"], a: 1,
        e: "push sends commits to the remote; pull fetches them." },
      { q: "Why use a branch?",
        o: ["To delete files", "To try changes without affecting main", "To speed up Git", "To share passwords"], a: 1,
        e: "Branches keep experimental work separate until you merge it." },
      { q: "What should you never commit?",
        o: ["HTML files", "Passwords and API keys", "README files", "Images"], a: 1,
        e: "Pushed secrets should be treated as public. Use .gitignore." }
    ]
  },

  "mental-math-tricks": {
    title: "Mental Math Tricks",
    pass: 4,
    questions: [
      { q: "What's the quickest way to do 5 × 64?",
        o: ["64 + 64 + 64 + 64 + 64", "640 ÷ 2", "64 × 10 + 5", "64 ÷ 5"], a: 1,
        e: "× 10 then halve: 640 ÷ 2 = 320." },
      { q: "Using “round and fix”, 58 + 29 is…",
        o: ["58 + 30 − 1 = 87", "58 + 30 + 1 = 89", "60 + 29 = 89", "58 − 1 = 57"], a: 0,
        e: "Add 30, then take back the extra 1: 87." },
      { q: "What is 11 × 43?",
        o: ["443", "473", "433", "4,343"], a: 1,
        e: "4 _(4+3)_ 3 = 473." },
      { q: "What is 65²?",
        o: ["4,225", "3,625", "4,265", "3,925"], a: 0,
        e: "6 × 7 = 42, then add 25: 4,225." },
      { q: "9 × 34 is the same as…",
        o: ["340 − 34", "340 + 34", "34 × 10 + 9", "340 − 9"], a: 0,
        e: "× 10 then subtract the number: 340 − 34 = 306." }
    ]
  },

  "touch-typing": {
    title: "Learn Touch Typing",
    pass: 4,
    questions: [
      { q: "Which keys are on the home row for your left hand?",
        o: ["Q W E R", "A S D F", "Z X C V", "1 2 3 4"], a: 1,
        e: "Left fingers rest on A, S, D and F." },
      { q: "What are the bumps on F and J for?",
        o: ["Decoration", "Finding home row without looking", "Marking broken keys", "Turning on caps lock"], a: 1,
        e: "Your index fingers can feel them and reset position." },
      { q: "To type a capital A, which Shift should you press?",
        o: ["Left Shift", "Right Shift", "Either, it doesn't matter", "Caps Lock"], a: 1,
        e: "A is a left-hand key, so use the opposite (right) Shift." },
      { q: "When learning, what should you focus on first?",
        o: ["Speed", "Accuracy", "Typing loudly", "Looking at the keys"], a: 1,
        e: "Accuracy first; speed follows once the movements are learned." },
      { q: "Roughly how fast does an average adult type?",
        o: ["10 wpm", "40 wpm", "120 wpm", "200 wpm"], a: 1,
        e: "Around 40 words per minute is typical." }
    ]
  },

  "unit-conversions": {
    title: "Metric and Imperial Conversions",
    pass: 4,
    questions: [
      { q: "How many metres are in 3.2 kilometres?",
        o: ["32", "320", "3,200", "32,000"], a: 2,
        e: "Kilo means × 1,000." },
      { q: "Roughly how many km is 5 miles?",
        o: ["3", "8", "10", "50"], a: 1,
        e: "× 1.6: about 8 km." },
      { q: "Approximately what is 20 °C in Fahrenheit?",
        o: ["40 °F", "68 °F", "52 °F", "100 °F"], a: 1,
        e: "20 × 9/5 + 32 = 68." },
      { q: "A rough way to turn kilograms into pounds is…",
        o: ["× 2.2", "÷ 2.2", "× 0.45", "+ 10"], a: 0,
        e: "1 kg ≈ 2.2 lb." },
      { q: "Why can US and UK recipes differ?",
        o: ["Different oven sizes", "Pints, cups and gallons are different sizes", "Different salt", "They don't differ"], a: 1,
        e: "A UK pint is 568 ml; a US pint is 473 ml." }
    ]
  },

  "budget-50-30-20": {
    title: "Make a Budget with the 50/30/20 Rule",
    pass: 4,
    questions: [
      { q: "In 50/30/20, what does the 20% go to?",
        o: ["Wants", "Needs", "Savings and extra debt payments", "Tax"], a: 2,
        e: "20% is for savings and paying debt faster." },
      { q: "Which is a “need”?",
        o: ["Streaming subscription", "Groceries", "Concert tickets", "A new games console"], a: 1,
        e: "Groceries are essential; the rest are wants." },
      { q: "What income should you budget from?",
        o: ["Your salary before tax", "Take-home pay after tax", "Your partner's pay", "Last year's bonus"], a: 1,
        e: "Budget from what actually reaches your account." },
      { q: "What does “pay yourself first” mean?",
        o: ["Buy something nice on payday", "Automatically move savings out on payday", "Pay off rent last", "Take cash out"], a: 1,
        e: "Saving automatically before spending makes it stick." },
      { q: "On $2,500 take-home a month, how much goes to wants under 50/30/20?",
        o: ["$500", "$750", "$1,250", "$300"], a: 1,
        e: "30% of $2,500 is $750." }
    ]
  },

  "binary-numbers": {
    title: "Binary Numbers Explained",
    pass: 4,
    questions: [
      { q: "What is binary 101 in decimal?",
        o: ["101", "5", "3", "7"], a: 1,
        e: "4 + 0 + 1 = 5." },
      { q: "What is decimal 12 in binary?",
        o: ["1100", "1010", "1001", "0110"], a: 0,
        e: "8 + 4 = 12, so 1100." },
      { q: "How many bits are in a byte?",
        o: ["2", "4", "8", "10"], a: 2,
        e: "A byte is 8 bits." },
      { q: "What is the largest number one byte can store?",
        o: ["128", "255", "256", "1,000"], a: 1,
        e: "11111111 = 255 (256 values counting 0)." },
      { q: "Why do computers use binary?",
        o: ["It's faster to type", "Their switches are either on or off", "It uses less electricity", "It was the only option in 2000"], a: 1,
        e: "Two states map naturally onto 1 and 0." }
    ]
  },

  "read-sheet-music": {
    title: "How to Read Sheet Music",
    pass: 4,
    questions: [
      { q: "What are the treble clef lines, bottom to top?",
        o: ["F A C E", "E G B D F", "G B D F A", "A C E G"], a: 1,
        e: "Every Good Boy Does Fine." },
      { q: "What do the treble clef spaces spell?",
        o: ["FACE", "CAGE", "BEAD", "ACEG"], a: 0,
        e: "F, A, C, E from bottom to top." },
      { q: "How many beats does a half note last in 4/4?",
        o: ["1", "2", "3", "4"], a: 1,
        e: "A half note is two beats; a whole note is four." },
      { q: "In 3/4 time, how many beats are in each bar?",
        o: ["3", "4", "7", "12"], a: 0,
        e: "The top number is beats per bar." },
      { q: "What does a sharp ♯ do?",
        o: ["Makes a note louder", "Raises it one half step", "Lowers it one half step", "Makes it shorter"], a: 1,
        e: "Sharp raises; flat lowers." }
    ]
  },

  "chess-basics": {
    title: "How to Play Chess",
    pass: 4,
    questions: [
      { q: "Which square should be in each player's bottom-right corner?",
        o: ["A dark square", "A light square", "It doesn't matter", "The king's square"], a: 1,
        e: "Light on the right." },
      { q: "Which piece can jump over other pieces?",
        o: ["Bishop", "Knight", "Queen", "Rook"], a: 1,
        e: "Only the knight jumps, moving in an L." },
      { q: "What is checkmate?",
        o: ["Capturing the king", "The king is attacked and can't escape", "Any check", "Running out of time"], a: 1,
        e: "No legal way out of check ends the game." },
      { q: "What usually happens when a pawn reaches the far side?",
        o: ["It's removed", "It becomes a queen (or another piece)", "It moves backwards", "The game ends"], a: 1,
        e: "It's promoted, almost always to a queen." },
      { q: "A player has no legal moves but isn't in check. What is it?",
        o: ["Checkmate", "Stalemate, a draw", "A win for them", "They skip a turn"], a: 1,
        e: "Stalemate ends the game as a draw." }
    ]
  },

  "credit-scores": {
    title: "How Credit Scores Work",
    pass: 4,
    questions: [
      { q: "What is the biggest factor in a FICO score?",
        o: ["Credit mix", "Payment history", "Income", "Age"], a: 1,
        e: "Payment history is about 35%." },
      { q: "What is credit utilisation?",
        o: ["How often you use your card", "The share of your credit limits you're using", "Your income", "The number of cards"], a: 1,
        e: "Balances divided by limits." },
      { q: "Does checking your own credit score lower it?",
        o: ["Yes, a lot", "Yes, slightly", "No", "Only once a year"], a: 2,
        e: "Checking your own score is a soft check." },
      { q: "What's the official site for free US credit reports?",
        o: ["creditkarma.com", "AnnualCreditReport.com", "freescore.com", "irs.gov"], a: 1,
        e: "AnnualCreditReport.com is authorised by federal law." },
      { q: "Should you carry a balance to build credit?",
        o: ["Yes, always", "No, paying in full is best", "Only on store cards", "Only in December"], a: 1,
        e: "Paying in full builds credit without paying interest." }
    ]
  },

  "ratios-and-proportions": {
    title: "Ratios and Proportions",
    pass: 4,
    questions: [
      { q: "What is 12 : 18 simplified?",
        o: ["2 : 3", "3 : 2", "6 : 9", "4 : 5"], a: 0,
        e: "Divide both by 6." },
      { q: "Share $60 in the ratio 1 : 2. How much is the bigger share?",
        o: ["$20", "$30", "$40", "$45"], a: 2,
        e: "3 parts, so one part is $20; two parts are $40." },
      { q: "A recipe for 2 needs 150 g rice. How much for 5?",
        o: ["300 g", "375 g", "450 g", "750 g"], a: 1,
        e: "Scale factor 2.5: 150 × 2.5 = 375 g." },
      { q: "On a 1 : 50,000 map, 2 cm is how far in real life?",
        o: ["100 m", "1 km", "10 km", "500 m"], a: 1,
        e: "2 × 50,000 = 100,000 cm = 1 km." },
      { q: "A paint mix is 1 : 4 colour to white. What fraction is colour?",
        o: ["1/4", "1/5", "4/5", "1/3"], a: 1,
        e: "1 part out of 5 parts in total." }
    ]
  },

  "exponents-scientific-notation": {
    title: "Exponents and Scientific Notation",
    pass: 4,
    questions: [
      { q: "What is 3⁴?",
        o: ["12", "81", "64", "7"], a: 1,
        e: "3 × 3 × 3 × 3 = 81." },
      { q: "What is 9⁰?",
        o: ["0", "1", "9", "90"], a: 1,
        e: "Any non-zero number to the power 0 is 1." },
      { q: "2³ × 2⁵ equals…",
        o: ["2⁸", "2¹⁵", "4⁸", "2²"], a: 0,
        e: "Same base: add the exponents." },
      { q: "What is 4,200,000 in scientific notation?",
        o: ["42 × 10⁵", "4.2 × 10⁶", "4.2 × 10⁵", "0.42 × 10⁷"], a: 1,
        e: "The decimal point moves 6 places left." },
      { q: "What is 3 × 10⁻² as a normal number?",
        o: ["300", "0.03", "0.3", "−300"], a: 1,
        e: "Move the decimal point 2 places left: 0.03." }
    ]
  },

  "area-and-volume": {
    title: "Area, Perimeter and Volume",
    pass: 4,
    questions: [
      { q: "What is the perimeter of a 6 m × 4 m rectangle?",
        o: ["24 m", "20 m", "10 m", "24 m²"], a: 1,
        e: "6 + 4 + 6 + 4 = 20 m." },
      { q: "What is the area of a triangle with base 10 and height 6?",
        o: ["60", "30", "16", "36"], a: 1,
        e: "½ × 10 × 6 = 30." },
      { q: "What units is area measured in?",
        o: ["Metres", "Square units, like m²", "Cubic units, like m³", "Litres"], a: 1,
        e: "Area counts squares; volume counts cubes." },
      { q: "How many litres are in 1 m³?",
        o: ["10", "100", "1,000", "1,000,000"], a: 2,
        e: "1 m³ = 1,000 litres." },
      { q: "What is the area of a circle with radius 2 (to 1 decimal place)?",
        o: ["6.3", "12.6", "4.0", "25.1"], a: 1,
        e: "π × 2² = 4π ≈ 12.6." }
    ]
  },

  "watts-and-energy-bills": {
    title: "Watts, kWh and Your Electricity Bill",
    pass: 4,
    questions: [
      { q: "What does a kilowatt-hour measure?",
        o: ["Voltage", "Energy used: 1,000 W for one hour", "Current", "Your fixed charge"], a: 1,
        e: "Power × time, the unit on your bill." },
      { q: "A 2,000 W heater runs for 3 hours. How many kWh?",
        o: ["6", "0.6", "600", "2"], a: 0,
        e: "2,000 × 3 ÷ 1,000 = 6 kWh." },
      { q: "Which usually costs the most to run?",
        o: ["LED bulb", "Laptop", "Space heater", "Phone charger"], a: 2,
        e: "Heating and cooling use the most power." },
      { q: "Watts equals…",
        o: ["Volts + amps", "Volts × amps", "Amps ÷ volts", "kWh × hours"], a: 1,
        e: "Power = voltage × current." },
      { q: "Why can a kettle use lots of watts but cost little?",
        o: ["It doesn't use electricity", "It only runs for a few minutes", "Kettles are free", "It runs at night"], a: 1,
        e: "Energy is power × time, and the time is short." }
    ]
  },

  "morse-code": {
    title: "Learn Morse Code",
    pass: 4,
    questions: [
      { q: "How long is a dash compared with a dot?",
        o: ["The same", "Twice as long", "Three times as long", "Half as long"], a: 2,
        e: "A dash is 3 units; a dot is 1." },
      { q: "What is E in Morse code?",
        o: ["−", "·", "· −", "· · ·"], a: 1,
        e: "E is a single dot, the most common letter." },
      { q: "What is SOS?",
        o: ["· · · − − − · · ·", "− − − · · · − − −", "· − · − · −", "− · − ·"], a: 0,
        e: "Three dots, three dashes, three dots." },
      { q: "Why are E and T so short?",
        o: ["They're vowels", "They're among the most common letters", "Alphabetical order", "Random choice"], a: 1,
        e: "Common letters got short codes to save time." },
      { q: "What's the gap between words?",
        o: ["1 unit", "3 units", "7 units", "10 units"], a: 2,
        e: "Words are separated by 7 units of silence." }
    ]
  },

  "latitude-longitude": {
    title: "Latitude and Longitude",
    pass: 4,
    questions: [
      { q: "Which is written first in coordinates?",
        o: ["Longitude", "Latitude", "Whichever is bigger", "Altitude"], a: 1,
        e: "Latitude first, then longitude." },
      { q: "What is the latitude of the equator?",
        o: ["0°", "90°", "180°", "45°"], a: 0,
        e: "The equator is 0° latitude." },
      { q: "In decimal coordinates, what does a negative longitude mean?",
        o: ["South", "West", "North", "East"], a: 1,
        e: "West of the Prime Meridian is negative." },
      { q: "Convert 30° 30′ 0″ to decimal.",
        o: ["30.3", "30.5", "30.30", "33"], a: 1,
        e: "30 minutes is half a degree." },
      { q: "About how long is one degree of latitude?",
        o: ["11 km", "111 km", "1,111 km", "60 km"], a: 1,
        e: "Roughly 111 km or 69 miles." }
    ]
  },

  "time-zones": {
    title: "Time Zones Made Simple",
    pass: 4,
    questions: [
      { q: "What is UTC?",
        o: ["A time zone in the US", "The reference time the world's offsets are based on", "Daylight saving time", "Tokyo time"], a: 1,
        e: "Every zone is written as an offset from UTC." },
      { q: "If it's 12:00 UTC, what time is it in a UTC+9 zone?",
        o: ["03:00", "21:00", "09:00", "12:09"], a: 1,
        e: "Add 9 hours: 21:00." },
      { q: "In summer, New York usually switches from UTC−5 to…",
        o: ["UTC−6", "UTC−4", "UTC+5", "UTC+0"], a: 1,
        e: "Clocks go forward an hour." },
      { q: "Which of these has a half-hour offset?",
        o: ["London", "India", "Tokyo", "Paris"], a: 1,
        e: "India is UTC+5:30." },
      { q: "What's the safest way to schedule a call across zones?",
        o: ["Assume they're in your zone", "Send a calendar invite and state the zone", "Use 12 pm always", "Ask them to guess"], a: 1,
        e: "Calendars convert automatically; writing the zone avoids mix-ups." }
    ]
  },

  "write-professional-email": {
    title: "Write a Professional Email",
    pass: 4,
    questions: [
      { q: "Which is the best subject line?",
        o: ["Hi", "Question", "Question about the March invoice", "URGENT!!!"], a: 2,
        e: "Specific subjects get opened and answered." },
      { q: "Where should the purpose of your email go?",
        o: ["The last line", "The first line", "The subject only", "An attachment"], a: 1,
        e: "Put your purpose up front so it isn't missed." },
      { q: "What does writing in ALL CAPS usually come across as?",
        o: ["Professional", "Shouting", "Friendly", "Clear"], a: 1,
        e: "Capitals read as shouting." },
      { q: "No reply after a few working days. What should you do?",
        o: ["Send the same email again as new", "Reply to your original with a short, polite nudge", "Call their manager", "Give up"], a: 1,
        e: "Replying keeps the context together." },
      { q: "A good target length for most emails is…",
        o: ["Five sentences or fewer", "At least a page", "One word", "Ten paragraphs"], a: 0,
        e: "Short emails get read and answered." }
    ]
  },

  "negative-numbers": {
    title: "Negative Numbers",
    pass: 4,
    questions: [
      { q: "Which is smaller: −7 or −2?",
        o: ["−7", "−2", "They're equal", "Can't tell"], a: 0,
        e: "−7 is further left on the number line." },
      { q: "What is −4 + 9?",
        o: ["−13", "5", "−5", "13"], a: 1,
        e: "Start at −4 and move 9 right." },
      { q: "What is 6 − (−2)?",
        o: ["4", "8", "−8", "−4"], a: 1,
        e: "Subtracting a negative is adding: 6 + 2." },
      { q: "What is −5 × −3?",
        o: ["−15", "15", "−8", "8"], a: 1,
        e: "Same signs give a positive." },
      { q: "What is −24 ÷ 6?",
        o: ["4", "−4", "−18", "30"], a: 1,
        e: "Different signs give a negative." }
    ]
  },

  "how-the-internet-works": {
    title: "How the Internet Works",
    pass: 4,
    questions: [
      { q: "What does DNS do?",
        o: ["Encrypts your data", "Turns website names into IP addresses", "Speeds up Wi-Fi", "Blocks ads"], a: 1,
        e: "It's the internet's phone book." },
      { q: "What is an IP address?",
        o: ["A website's name", "A device's numeric address on a network", "A password", "A type of cable"], a: 1,
        e: "Every device on the internet has one." },
      { q: "How does data travel across the internet?",
        o: ["As one big file", "In small packets passed between routers", "By satellite only", "Through phone calls"], a: 1,
        e: "Packets travel hop by hop and are reassembled." },
      { q: "What does the padlock / HTTPS mean?",
        o: ["The site is trustworthy", "The connection is encrypted", "The site is fast", "The site is free"], a: 1,
        e: "It means private, not necessarily safe." },
      { q: "Most international internet traffic travels through…",
        o: ["Satellites", "Undersea cables", "Radio towers", "Phone lines only"], a: 1,
        e: "Undersea fibre cables carry most of it." }
    ]
  },

  "newtons-laws": {
    title: "Newton's Three Laws of Motion",
    pass: 4,
    questions: [
      { q: "Why do you lurch forward when a bus brakes?",
        o: ["Gravity", "Inertia: your body keeps moving", "The bus pushes you", "Friction"], a: 1,
        e: "First law: objects keep moving unless a force stops them." },
      { q: "Using F = ma, what force accelerates a 50 kg mass at 2 m/s²?",
        o: ["25 N", "52 N", "100 N", "48 N"], a: 2,
        e: "50 × 2 = 100 N." },
      { q: "Pushing an empty trolley and a full one equally hard, which speeds up faster?",
        o: ["The full one", "The empty one", "Both the same", "Neither moves"], a: 1,
        e: "Less mass means more acceleration for the same force." },
      { q: "How does a rocket move upward?",
        o: ["It pushes on the air above", "It pushes gas down; the gas pushes it up", "Gravity reverses", "It's pulled by the Moon"], a: 1,
        e: "Third law: action and reaction." },
      { q: "What is the unit of force?",
        o: ["Kilogram", "Newton", "Joule", "Watt"], a: 1,
        e: "Force is measured in newtons." }
    ]
  },

  "how-loans-work": {
    title: "How Loan Payments Work",
    pass: 4,
    questions: [
      { q: "What is the principal?",
        o: ["The interest rate", "The amount you borrow", "The monthly fee", "The bank manager"], a: 1,
        e: "Principal is the borrowed amount." },
      { q: "Which number should you compare between loans?",
        o: ["Monthly payment only", "APR", "The bank's logo", "The loan term only"], a: 1,
        e: "APR includes interest and most fees." },
      { q: "Early in a loan, most of each payment goes to…",
        o: ["Principal", "Interest", "Fees", "Insurance"], a: 1,
        e: "The balance is highest, so interest is too." },
      { q: "What happens when you pay extra each month?",
        o: ["Nothing", "It reduces the principal and total interest", "It raises your rate", "It's added to the next month only"], a: 1,
        e: "Extra payments cut the balance, so less interest builds." },
      { q: "Stretching a loan over more years usually…",
        o: ["Lowers the total cost", "Lowers the monthly payment but raises the total cost", "Has no effect", "Lowers both"], a: 1,
        e: "More months of interest means more paid overall." }
    ]
  },

  "tie-a-tie": {
    title: "How to Tie a Tie",
    pass: 4,
    questions: [
      { q: "Which end of the tie does most of the moving?",
        o: ["The narrow end", "The wide end", "Both equally", "Neither"], a: 1,
        e: "You tie the knot with the wide end; the narrow end stays mostly still." },
      { q: "Where should the tip of your tie end up?",
        o: ["Mid-chest", "At your belt buckle", "Below your belt", "At your collar"], a: 1,
        e: "The tip should just touch the top of the belt buckle." },
      { q: "Which is the simplest, smallest knot?",
        o: ["Full Windsor", "Half Windsor", "Four-in-hand", "Bow tie"], a: 2,
        e: "The four-in-hand is the easiest and most common." },
      { q: "Which knot suits a wide spread collar best?",
        o: ["Four-in-hand", "Full Windsor", "No knot", "Any knot"], a: 1,
        e: "The large, symmetrical Windsor fills a spread collar." },
      { q: "What's the small fold just below the knot called?",
        o: ["The dimple", "The pleat", "The loop", "The tail"], a: 0,
        e: "Press a finger under the knot as you tighten to form the dimple." }
    ]
  },

  "clocks-go-back": {
    title: "Clocks Go Back: Fall-Back Checklist",
    pass: 4,
    questions: [
      { q: "When does daylight saving time end in 2026 in the US?",
        o: ["October 25", "November 1", "November 8", "December 1"], a: 1,
        e: "Sunday, November 1, 2026, at 2:00 a.m." },
      { q: "When the clocks fall back, what time does 2:00 a.m. become?",
        o: ["3:00 a.m.", "1:00 a.m.", "12:00 a.m.", "It stays 2:00 a.m."], a: 1,
        e: "Clocks go back one hour, so you gain an hour." },
      { q: "Which of these usually needs changing by hand?",
        o: ["Your phone", "Your laptop", "Your microwave", "Your smartwatch"], a: 2,
        e: "Connected devices update themselves; appliances usually don't." },
      { q: "How often should a smoke alarm be replaced?",
        o: ["Every year", "Every 10 years", "Never", "Every 30 years"], a: 1,
        e: "Replace smoke alarms that are 10 years old, even if they still beep." },
      { q: "Which state doesn't change its clocks?",
        o: ["Texas", "Hawaii", "Ohio", "Florida"], a: 1,
        e: "Hawaii and most of Arizona stay on standard time all year." }
    ]
  },

  "register-to-vote": {
    title: "How to Register to Vote",
    pass: 4,
    questions: [
      { q: "What's the official site to start registering in any state?",
        o: ["vote.gov", "votenow.com", "facebook.com", "register.org"], a: 0,
        e: "vote.gov is the official US government site and links to each state." },
      { q: "How much does it cost to register to vote?",
        o: ["$5", "$25", "Nothing, it's free", "Depends on the state"], a: 2,
        e: "Registration is always free. Never pay a site to register you." },
      { q: "Who sets voter registration deadlines?",
        o: ["The federal government", "Each state", "Your county clerk only", "There are no deadlines"], a: 1,
        e: "Each state sets its own deadline; some allow same-day registration." },
      { q: "You moved to a new state. What should you do?",
        o: ["Nothing", "Register in your new state", "Vote in your old state", "Call the White House"], a: 1,
        e: "Registration is tied to where you live." },
      { q: "Do you need your voter registration card to vote?",
        o: ["Yes, always", "No", "Only in November", "Only if you're over 65"], a: 1,
        e: "The card isn't required; some states ask for photo ID instead." }
    ]
  },

  "change-wifi-password": {
    title: "How to Change Your Wi-Fi Password",
    pass: 4,
    questions: [
      { q: "What's usually the easiest way to change Wi-Fi on a provider's router?",
        o: ["Call the police", "The provider's app", "Buy a new router", "Restart your phone"], a: 1,
        e: "Xfinity, Spectrum, AT&T and others have apps with Wi-Fi settings." },
      { q: "What happens to devices after you change the password?",
        o: ["Nothing", "They disconnect and need the new password", "They get faster", "They reset to factory settings"], a: 1,
        e: "Every device must rejoin with the new password." },
      { q: "Which security setting is best if available?",
        o: ["WEP", "Open", "WPA3", "None"], a: 2,
        e: "WPA3 is the newest; WPA2 if that's the only option." },
      { q: "A good Wi-Fi password is…",
        o: ["Your address", "password123", "Several random words, 12+ characters", "Your phone number"], a: 2,
        e: "Long, random words are strong and easy to type." },
      { q: "Is the router admin password the same as the Wi-Fi password?",
        o: ["Yes", "No", "Only on Xfinity", "Only on weekends"], a: 1,
        e: "The admin password changes settings; the Wi-Fi password joins the network." }
    ]
  },

  "set-up-voicemail": {
    title: "How to Set Up Voicemail",
    pass: 4,
    questions: [
      { q: "Who actually runs your voicemail box?",
        o: ["Apple or Google", "Your mobile carrier", "Your phone's maker", "Nobody"], a: 1,
        e: "Voicemail is a carrier service, which is why it needs a password." },
      { q: "On iPhone, where do you start setting up voicemail?",
        o: ["Settings › Wi-Fi", "Phone app › Voicemail › Set Up Now", "Messages app", "App Store"], a: 1,
        e: "The Voicemail tab in the Phone app has the Set Up Now button." },
      { q: "On most Android phones, how do you call your voicemail?",
        o: ["Press and hold 1", "Press 0", "Dial 911", "Shake the phone"], a: 0,
        e: "Pressing and holding 1 on the keypad calls voicemail." },
      { q: "What does visual voicemail do?",
        o: ["Records video messages", "Shows voicemails as a list you can tap", "Blocks spam", "Translates calls"], a: 1,
        e: "You can play messages in any order without calling in." },
      { q: "Forgot your voicemail password. Who can reset it?",
        o: ["Your carrier", "Apple only", "Nobody", "The caller"], a: 0,
        e: "Carriers can reset it in their app or by phone; iPhone also has an option in Settings." }
    ]
  },

  "back-up-android-phone": {
    title: "Back Up Your Android Phone",
    pass: 4,
    questions: [
      { q: "Where is Android's built-in backup setting on most phones?",
        o: ["Settings › Google › All services › Backup", "Settings › Display", "Play Store", "Camera app"], a: 0,
        e: "On some phones it's Settings › System › Backup." },
      { q: "Which app backs up your photos?",
        o: ["Gmail", "Google Photos", "Chrome", "Messages"], a: 1,
        e: "Photos are backed up separately by Google Photos." },
      { q: "How much Google storage is free?",
        o: ["1 GB", "15 GB", "100 GB", "Unlimited"], a: 1,
        e: "15 GB, shared with Gmail and Drive." },
      { q: "When does automatic backup usually run?",
        o: ["Every hour", "When idle, charging and on Wi-Fi", "Only when you open Settings", "Never"], a: 1,
        e: "Backups run roughly daily when the phone is idle and charging." },
      { q: "Which app needs its own separate backup?",
        o: ["WhatsApp", "Settings", "Contacts", "Calculator"], a: 0,
        e: "WhatsApp backs up chats itself, under Settings › Chats › Chat backup." }
    ]
  },

  "keyboard-not-typing": {
    title: "Keyboard Not Typing? Fix It",
    pass: 4,
    questions: [
      { q: "Your keyboard types @ when you press the quote key. What's wrong?",
        o: ["It's broken", "The keyboard layout is set to another language", "Caps Lock is on", "Low battery"], a: 1,
        e: "A UK/US layout mix-up swaps symbols like @ and \"." },
      { q: "What can holding Shift for 8 seconds turn on in Windows?",
        o: ["Dark mode", "Filter Keys", "Airplane mode", "Night light"], a: 1,
        e: "Filter Keys ignores quick key presses." },
      { q: "Number keys on the right don't type numbers. What should you press?",
        o: ["Caps Lock", "Num Lock", "Esc", "Delete"], a: 1,
        e: "Num Lock switches the number pad on and off." },
      { q: "What's the safest way to clean between keys?",
        o: ["Pour water on it", "Compressed air with the computer off", "A wet sponge", "A hair dryer on hot"], a: 1,
        e: "Turn it off, shake out crumbs, use compressed air." },
      { q: "How can you test if the keyboard itself is broken?",
        o: ["Restart the router", "Try another keyboard on the computer", "Change the wallpaper", "Uninstall your browser"], a: 1,
        e: "If another keyboard works, yours is the problem." }
    ]
  },

  "repair-drywall": {
    title: "How to Repair Drywall",
    pass: 4,
    questions: [
      { q: "What's best for nail holes?",
        o: ["Joint compound and tape", "Lightweight spackle", "A new drywall sheet", "Caulk"], a: 1,
        e: "Spackle dries fast and is ideal for small holes." },
      { q: "What do you use for a hole about 3 inches across?",
        o: ["Spackle only", "A self-adhesive mesh patch and joint compound", "Tape alone", "Nothing"], a: 1,
        e: "A mesh patch bridges the hole; compound hides it." },
      { q: "What should you check before cutting into a wall?",
        o: ["The weather", "Wires and pipes behind it", "The paint brand", "Your Wi-Fi"], a: 1,
        e: "Use a stud finder and turn off power to the area." },
      { q: "Why prime a patch before painting?",
        o: ["It's faster", "Fresh compound absorbs paint differently and shows", "Primer is cheaper", "To make it glossy"], a: 1,
        e: "Primer evens out the finish so the patch doesn't show." },
      { q: "What helps you spot bumps when sanding?",
        o: ["Music", "A flashlight shone across the wall", "Sunglasses", "A fan"], a: 1,
        e: "Low-angle light makes uneven spots cast shadows." }
    ]
  },

  "weather-alerts": {
    title: "Weather Watch vs Warning vs Advisory",
    pass: 4,
    questions: [
      { q: "A tornado WATCH means…",
        o: ["A tornado has been seen", "Conditions are right for tornadoes", "The danger has passed", "A tornado will definitely hit"], a: 1,
        e: "A watch means be ready; a warning means act now." },
      { q: "During a tornado warning, where should you go?",
        o: ["Upstairs by a window", "A small interior room on the lowest floor", "Outside to look", "Your car"], a: 1,
        e: "Lowest floor, interior room, no windows." },
      { q: "Which is the most urgent?",
        o: ["Advisory", "Watch", "Warning", "Special weather statement"], a: 2,
        e: "A warning means it's happening or about to." },
      { q: "What are a Category 3 hurricane's sustained winds?",
        o: ["74–95 mph", "96–110 mph", "111–129 mph", "157+ mph"], a: 2,
        e: "Category 3 and above are “major” hurricanes." },
      { q: "What should you do at a flooded road?",
        o: ["Drive through slowly", "Turn around", "Walk across", "Speed up"], a: 1,
        e: "Turn around, don't drown. A foot of water can float a car." }
    ]
  },

  "watch-football-without-cable": {
    title: "How to Watch Football Without Cable",
    pass: 4,
    questions: [
      { q: "What's the cheapest way to watch your local team's Sunday games?",
        o: ["Sunday Ticket", "A TV antenna", "NFL+", "Twitch"], a: 1,
        e: "Local CBS and Fox broadcasts are free over the air." },
      { q: "Where is Thursday Night Football streamed?",
        o: ["Netflix", "Peacock", "Prime Video", "Paramount+"], a: 2,
        e: "Thursday Night Football is on Amazon Prime Video (and Twitch)." },
      { q: "Which service streams Sunday Night Football?",
        o: ["Peacock", "Fox One", "ESPN", "Netflix"], a: 0,
        e: "SNF airs on NBC and streams on Peacock." },
      { q: "NFL Sunday Ticket is for…",
        o: ["Local games", "Out-of-market Sunday afternoon games", "Primetime games", "College games"], a: 1,
        e: "It shows Sunday afternoon games from outside your market." },
      { q: "What's the catch with NFL+?",
        o: ["It's only on phones and tablets", "It's only replays", "It's only college", "It needs cable"], a: 0,
        e: "NFL+ live games play on mobile devices, not TVs." }
    ]
  },

  "nfl-overtime-rules": {
    title: "NFL Overtime Rules Explained",
    pass: 4,
    questions: [
      { q: "How long is regular-season NFL overtime?",
        o: ["5 minutes", "10 minutes", "15 minutes", "Unlimited"], a: 1,
        e: "One 10-minute period; it can end in a tie." },
      { q: "A team kicks a field goal on the first OT drive. What happens?",
        o: ["They win", "The other team gets a possession", "The game ends in a tie", "They kick again"], a: 1,
        e: "Both teams are guaranteed a possession." },
      { q: "Can a playoff game end in a tie?",
        o: ["Yes", "No", "Only in the Super Bowl", "Only in the wild card round"], a: 1,
        e: "Playoff overtime continues until there's a winner." },
      { q: "After both teams have had the ball and it's still tied…",
        o: ["It's a tie", "Next score wins", "Coin toss decides", "Penalty kicks"], a: 1,
        e: "It becomes sudden death." },
      { q: "What can end overtime on the very first drive?",
        o: ["A field goal", "A punt", "A safety by the kicking team", "A timeout"], a: 2,
        e: "A safety on the opening drive wins it for the kicking team." }
    ]
  },

  "get-rid-of-fruit-flies": {
    title: "How to Get Rid of Fruit Flies",
    pass: 4,
    questions: [
      { q: "Why don't traps alone get rid of fruit flies?",
        o: ["Traps don't work", "New flies keep hatching from breeding spots", "Flies are immune", "Traps attract more flies"], a: 1,
        e: "Remove where they breed, or new ones hatch every week." },
      { q: "What does a drop of dish soap do in a vinegar trap?",
        o: ["Adds scent", "Breaks surface tension so flies sink", "Kills eggs", "Nothing"], a: 1,
        e: "Without soap, flies can land on the vinegar and fly away." },
      { q: "Which vinegar works best?",
        o: ["White vinegar", "Apple cider vinegar", "Balsamic glaze", "Rice vinegar"], a: 1,
        e: "Apple cider vinegar smells like ripe fruit." },
      { q: "How can you check if a drain is breeding flies?",
        o: ["Smell it", "Tape a clear bag over it overnight", "Pour in salt", "Listen to it"], a: 1,
        e: "Flies in the bag next morning mean the drain is a source." },
      { q: "How often should you refresh traps?",
        o: ["Every day or two", "Once a month", "Never", "Every hour"], a: 0,
        e: "Fresh bait keeps the traps attractive." }
    ]
  },

  "jcurses": {
    title: "JCurses Crash Course",
    pass: 8,
    questions: [
      { q: "Which two files from the download go into your project's lib folder?",
        o: ["jcurses.jar and the native library (.dll or .so)", "Only jcurses.jar", "The whole zip file, unextracted", "Only the .dll or .so file"], a: 0,
        e: "The jar holds the Java classes and the native library does the terminal work. Both must sit in the same folder." },
      { q: "Which file do you add to Eclipse's Build Path?",
        o: ["The .dll or .so file", "jcurses.jar", "Both files", "Neither, Eclipse finds them on its own"], a: 1,
        e: "Right-click jcurses.jar → Build Path → Add to Build Path. The native library just needs to sit next to it." },
      { q: "Why doesn't the green Run button in Eclipse work for JCurses programs?",
        o: ["Eclipse doesn't support Java 17", "JCurses only works on Linux", "Eclipse's Console isn't a real terminal", "You forgot to save"], a: 2,
        e: "JCurses needs a real terminal to draw on. Run it from Command Prompt, a Linux terminal, or Eclipse's Terminal view." },
      { q: "Where does Toolkit.printString(\"Hi\", 10, 3, color) put the text?",
        o: ["10 rows down, 3 columns in", "10 columns in, 3 rows down", "At pixel position (10, 3)", "On line 10 of your code"], a: 1,
        e: "Positions are (column, row) on the character grid, counted from the top-left corner (0, 0)." },
      { q: "In new CharColor(CharColor.BLACK, CharColor.GREEN), what is green?",
        o: ["The background", "The border", "The text color", "The cursor"], a: 2,
        e: "The first color is the background and the second is the text (foreground)." },
      { q: "What should be the last JCurses call in a drawing-mode program?",
        o: ["Toolkit.clearScreen()", "Toolkit.shutdown()", "System.out.println()", "Toolkit.readCharacter()"], a: 1,
        e: "shutdown() puts the terminal back to normal. Skip it and your terminal may act strangely afterward." },
      { q: "On Windows, which command runs a class called Hello?",
        o: ["java -cp bin;lib\\jcurses.jar Hello", "java -cp bin:lib/jcurses.jar Hello", "javac Hello.java jcurses.jar", "java Hello.jcurses"], a: 0,
        e: "Windows separates classpath entries with a semicolon. Linux uses a colon." },
      { q: "You run your program and get UnsatisfiedLinkError. What's the most likely cause?",
        o: ["A typo in printString", "The native library is missing from lib or doesn't match your Java (32 vs 64-bit)", "Your window is too small", "You used a Button without a Label"], a: 1,
        e: "That error means Java couldn't load the .dll or .so. Check it's next to jcurses.jar and matches your Java's bitness." },
      { q: "In widget mode, how does the user move between buttons and fields?",
        o: ["The mouse", "Arrow keys only", "The Tab key", "Typing the widget's name"], a: 2,
        e: "Tab moves focus between widgets and Enter activates the focused one, like a button." },
      { q: "What does Toolkit.readCharacter() do?",
        o: ["Reads a whole line after Enter", "Waits for a single key press and returns it", "Reads a character from a file", "Prints a character"], a: 1,
        e: "It returns an InputChar as soon as one key is pressed. That's what makes games and menus feel responsive." }
    ]
  },

  "change-a-tire": {
    title: "How to Change a Flat Tire",
    pass: 4,
    questions: [
      { q: "When should you loosen the lug nuts?",
        o: ["After the car is fully jacked up", "Before jacking, while the tire is still on the ground", "After removing the hubcap and jacking halfway", "Only once the spare is ready on the ground"], a: 1,
        e: "With the tire on the ground, the car's weight stops the wheel spinning while you turn the wrench." },
      { q: "Your flat is on the front left. Where does the wheel wedge go?",
        o: ["Front left", "Front right", "Rear right", "Rear left"], a: 2,
        e: "Wedge the tire diagonally opposite the flat." },
      { q: "Why tighten lug nuts in a star (criss-cross) pattern?",
        o: ["It pulls the wheel on evenly", "It's faster", "It stops the jack slipping", "It's needed only for donut spares"], a: 0,
        e: "Going across the wheel, not around it, seats the wheel evenly against the hub." },
      { q: "What speed does AAA say not to exceed on a donut spare?",
        o: ["35 mph", "65 mph", "No limit if it's inflated", "50 mph"], a: 3,
        e: "AAA says to stay under 50 mph; also follow the limit printed on your spare." },
      { q: "Where should you place the jack?",
        o: ["Under the bumper", "Under the oil pan", "On the car's jack point on the frame next to the flat", "Under the middle of the car"], a: 2,
        e: "Use the reinforced jack point on the frame next to the flat, shown in your owner's manual." }
    ]
  },

  "check-tire-pressure": {
    title: "How to Check and Fill Tire Pressure",
    pass: 4,
    questions: [
      { q: "Where do you find the pressure your tires should be filled to?",
        o: ["The max number on the tire sidewall", "The air machine's default setting", "Always 32 PSI", "The label on the driver's door edge or the owner's manual"], a: 3,
        e: "Use the car maker's cold pressure on the door-jamb label, not the sidewall maximum." },
      { q: "What does checking “cold” mean?",
        o: ["The car hasn't been driven for at least three hours", "Checking only in winter", "Checking with the AC on", "Waiting 10 minutes after driving"], a: 0,
        e: "NHTSA defines cold as not driven for at least three hours." },
      { q: "About how much does pressure drop when it gets 30°F colder?",
        o: ["About 1 PSI", "About 3 PSI", "About 10 PSI", "It doesn't change"], a: 1,
        e: "The rule of thumb is about 1 PSI per 10°F." },
      { q: "The tire pressure light flashes for about a minute, then stays on. What does that mean?",
        o: ["One tire is slightly high", "All tires are perfect", "The system itself has a fault", "The spare is flat"], a: 2,
        e: "Flashing then steady means a TPMS malfunction; have it checked." },
      { q: "How often does NHTSA recommend checking tire pressure?",
        o: ["Once a year", "At least once a month, including the spare", "Only when the light comes on", "Every oil change"], a: 1,
        e: "Check all tires, including the spare, at least monthly." }
    ]
  },

  "paint-a-room": {
    title: "How to Paint a Room",
    pass: 4,
    questions: [
      { q: "About how much wall does one gallon of interior paint cover per coat?",
        o: ["50 to 100 sq ft", "1,000 sq ft", "250 to 400 sq ft", "It depends only on the color"], a: 2,
        e: "Most cans list about 250 to 400 sq ft per gallon, depending on the wall." },
      { q: "In what order should you paint a room?",
        o: ["Ceiling, walls, trim", "Trim, walls, ceiling", "Walls, ceiling, trim", "Any order"], a: 0,
        e: "Work top down so drips land on unpainted surfaces." },
      { q: "When do you need a separate primer coat?",
        o: ["Always, on every wall", "Never with latex paint", "Only on ceilings", "On new drywall, stains or a big color change"], a: 3,
        e: "Bare drywall, stains, big color changes and glossy surfaces need primer." },
      { q: "Why roll a W pattern and keep a wet edge?",
        o: ["To use less paint", "To spread paint evenly and avoid lap marks", "To dry faster", "To skip cutting in"], a: 1,
        e: "The W spreads paint evenly; overlapping wet paint prevents lap marks." },
      { q: "Your house was built in 1965. What should you do before sanding old paint?",
        o: ["Test for lead and follow lead-safe practices", "Nothing special", "Just open a window", "Use a heat gun to remove it"], a: 0,
        e: "Homes built before 1978 may have lead paint; sanding creates dangerous dust." }
    ]
  },

  "change-furnace-filter": {
    title: "How to Change a Furnace Filter",
    pass: 4,
    questions: [
      { q: "Which way should the airflow arrow on a furnace filter point?",
        o: ["Toward the return duct and the room", "Up", "Toward the furnace, the way the air flows", "It doesn't matter"], a: 2,
        e: "Point it in the direction the air travels: toward the furnace." },
      { q: "Your old filter says 16x25x1. What does that number describe?",
        o: ["Its exact measured size", "Its nominal size, which is what you buy", "Its MERV rating", "Its price code"], a: 1,
        e: "It's the rounded nominal size. The real filter is slightly smaller." },
      { q: "What does a higher MERV rating mean?",
        o: ["The filter lasts longer", "The filter is washable", "The filter is thinner", "The filter catches more small particles"], a: 3,
        e: "MERV rates how well a filter traps particles; higher catches more." },
      { q: "What does ENERGY STAR recommend for 1-inch filters?",
        o: ["Check monthly and change at least every three months", "Change once a year", "Change only when the furnace stops", "Vacuum and reuse it"], a: 0,
        e: "Check monthly, change at least every three months or when dirty." },
      { q: "Which MERV does the EPA suggest if your system can handle it?",
        o: ["MERV 4", "MERV 8", "At least MERV 13", "Any filter is the same"], a: 2,
        e: "The EPA suggests at least MERV 13, or as high as your system allows." }
    ]
  },

  "clean-microwave": {
    title: "How to Clean a Microwave Fast",
    pass: 4,
    questions: [
      { q: "What does the lemon or vinegar water mainly do when you heat it?",
        o: ["Disinfects the door seal", "Fills the microwave with steam that softens dried-on food", "Polishes the turntable", "Recharges the magnetron"], a: 1,
        e: "The steam loosens baked-on food so it wipes off without scrubbing." },
      { q: "Why wait a few minutes before opening the door after steaming?",
        o: ["The microwave needs to cool its fan", "The door locks automatically", "Vinegar needs time to evaporate completely", "It keeps the steam working and lets very hot water settle so it's less likely to erupt"], a: 3,
        e: "Superheated water can erupt when disturbed; waiting lets it settle while the steam keeps softening grime." },
      { q: "What should you do before washing the glass turntable?",
        o: ["Let it cool completely", "Run it under cold water right away", "Heat it for one more minute", "Scrub it with steel wool"], a: 0,
        e: "Cold water on a hot glass tray can crack or shatter it." },
      { q: "Which is the FDA's advice for cleaning inside a microwave?",
        o: ["Bleach and a scouring pad", "Oven cleaner sprayed into the vents", "Water and a mild detergent, no abrasives", "Dry wiping only"], a: 2,
        e: "The FDA recommends water and mild detergent and warns against scouring pads, steel wool and abrasives." },
      { q: "Which of these is safe to leave in the microwave overnight to absorb smells?",
        o: ["A bowl of bleach", "An open box of baking soda, removed before you turn it on", "A foil-wrapped lemon", "Nothing should ever be left inside"], a: 1,
        e: "An open box of baking soda absorbs odors, but take it out before running the microwave." }
    ]
  },

  "fix-stripped-screw-hole": {
    title: "How to Fix a Stripped Screw Hole",
    pass: 4,
    questions: [
      { q: "What's the classic quick fix for a stripped screw hole in wood?",
        o: ["Pack it with toothpicks and wood glue", "Fill it with spackle", "Use a drywall anchor", "Drive the same screw faster"], a: 0,
        e: "Glue-dipped toothpicks give the threads fresh wood to grip." },
      { q: "A screw spins in drywall with no stud behind it. What should you use?",
        o: ["Toothpicks and glue", "A longer wood screw", "Super glue", "A drywall anchor or toggle bolt"], a: 3,
        e: "Drywall can't hold threads; use an anchor, or move to a stud." },
      { q: "Why should a longer hinge screw have the same head size as the original?",
        o: ["So it's cheaper", "A bigger head can stick up and make the door bind", "So it reaches the stud", "It doesn't matter"], a: 1,
        e: "A head that sticks up past the hinge can make the door bind." },
      { q: "How does the rubber band trick help?",
        o: ["It glues the screw in place", "It lubricates the threads", "It fills the worn head and adds grip for the screwdriver", "It makes the hole smaller"], a: 2,
        e: "The rubber fills the stripped grooves so the bit can grip." },
      { q: "For a badly chewed-up hole, what's the most permanent fix?",
        o: ["More toothpicks without glue", "Drill it out and glue in a wood dowel", "Tape over the hole", "Use a shorter screw"], a: 1,
        e: "A glued-in dowel gives solid new wood to drill a fresh pilot hole into." }
    ]
  },

  "clean-silver-jewelry": {
    title: "How to Clean Silver Jewelry",
    pass: 4,
    questions: [
      { q: "What is tarnish on silver?",
        o: ["Rust from iron in the metal", "A thin layer of silver sulfide from sulfur in the air and on skin", "Dried soap", "Scratches in the surface"], a: 1,
        e: "Silver reacts with sulfur compounds to form dark silver sulfide." },
      { q: "Which stamp usually means a piece is solid sterling silver?",
        o: ["14K", "GP", "925", "SS-plate"], a: 2,
        e: "Sterling is marked 925, .925 or Sterling." },
      { q: "In the baking soda and foil bath, what must the jewelry do?",
        o: ["Touch the aluminum foil", "Float above the foil", "Be wrapped in plastic", "Sit in cold water overnight"], a: 0,
        e: "The reaction that turns tarnish back into silver only works where the silver touches the aluminum." },
      { q: "Which piece should NOT go in the foil bath?",
        o: ["A plain sterling silver chain", "A plain sterling ring", "A solid silver bangle with no stones", "A pearl and silver necklace"], a: 3,
        e: "Pearls, soft stones, glued parts, plated and antiqued pieces should skip the bath." },
      { q: "Why avoid toothpaste for cleaning silver?",
        o: ["It's too acidic", "It's abrasive and leaves fine scratches", "It turns silver green", "It only works on gold"], a: 1,
        e: "Toothpaste is abrasive; a silver polishing cloth is gentler." }
    ]
  },

  "clear-cache": {
    title: "How to Clear Cache and Cookies",
    pass: 4,
    questions: [
      { q: "What happens when you clear your browser's cookies?",
        o: ["Your bookmarks are deleted", "You're signed out of most websites", "Your downloaded files are removed", "Nothing you would notice"], a: 1,
        e: "Cookies are what keep you signed in, so clearing them signs you out and resets site preferences." },
      { q: "Which is the safest thing to clear when a page looks broken?",
        o: ["Saved passwords", "Autofill data", "The cache (cached images and files)", "Site settings"], a: 2,
        e: "The cache holds only copies of website files. Clearing it loses nothing personal." },
      { q: "What does a hard refresh (Ctrl + F5, or Cmd + Shift + R on a Mac) do?",
        o: ["Reloads the page and skips the saved copy", "Deletes all your cookies", "Restarts the computer", "Clears your history"], a: 0,
        e: "A hard refresh fetches a fresh copy of the page without clearing anything else." },
      { q: "In Safari on a Mac, what does History › Clear History remove?",
        o: ["Only the list of pages you visited", "Only the cache", "Only saved passwords", "History plus the cookies and cached website data for that period"], a: 3,
        e: "Safari bundles them: clearing history also removes related cookies and website data." },
      { q: "Why should you be careful clearing data while browser sync is on?",
        o: ["It slows down your internet", "It can also clear that data on your other devices", "It uninstalls the browser", "It turns off your antivirus"], a: 1,
        e: "With sync on, clearing history or passwords while signed in can remove them from your other devices too." }
    ]
  },

  "get-rid-of-ants": {
    title: "How to Get Rid of Ants in the House",
    pass: 4,
    questions: [
      { q: "Why don't sprays usually solve an ant problem?",
        o: ["Ants are immune to all sprays", "They only kill the foragers you see, not the queens in the nest", "Sprays attract more ants", "Sprays only work outdoors"], a: 1,
        e: "Most of the colony and the queens stay in the nest; baits are carried back to reach them." },
      { q: "What should you wipe an ant trail with to remove the scent they follow?",
        o: ["Soapy water", "Sugar water", "Bleach mixed with ammonia", "Nothing; leave it"], a: 0,
        e: "Soapy water on a sponge removes the scent trail. (Never mix bleach and ammonia.)" },
      { q: "Where should you put bait stations?",
        o: ["Far from the trail so ants don't get scared", "Only on high shelves", "Next to a fresh layer of bug spray", "Right on or next to the trail and at entry points"], a: 3,
        e: "Put baits where ants already travel, and don't spray near them." },
      { q: "Why do UC experts say homemade liquid borax baits should be weak (about 0.5% to 1%)?",
        o: ["Stronger baits taste too sweet", "Strong borax attracts other insects", "Stronger baits kill workers before they share the bait with the colony", "Weak baits are illegal to sell"], a: 2,
        e: "A slow-acting, low-strength bait lets workers carry it home and share it before they die." },
      { q: "Which ant should you never spray, because spraying can make its colony split?",
        o: ["Pavement ant", "Argentine ant", "Pharaoh ant", "Fire ant"], a: 2,
        e: "Repellent sprays can cause pharaoh ant colonies to bud into several new ones; use baits." }
    ]
  },

  "clear-cache-iphone": {
    title: "Clear Cache on iPhone and Android",
    pass: 4,
    questions: [
      { q: "Where do you clear Safari's history and website data on an iPhone?",
        o: ["Inside Safari's address bar", "In the App Store", "Settings › Apps › Safari", "Photos › Recently Deleted"], a: 2,
        e: "Safari's data is cleared from the Settings app: Settings › Apps › Safari › Clear History and Website Data." },
      { q: "On Android, what's the difference between Clear cache and Clear storage?",
        o: ["Clear cache removes temporary files; Clear storage deletes all the app's data", "They do exactly the same thing", "Clear cache deletes the app; Clear storage keeps it", "Clear storage only removes photos"], a: 0,
        e: "Clear cache is safe. Clear storage resets the app completely and can delete things saved in it." },
      { q: "What does Offload App do on an iPhone?",
        o: ["Deletes the app and all its data", "Moves the app to an SD card", "Clears the app's cache only", "Removes the app but keeps its documents and data"], a: 3,
        e: "Offloading frees the space the app uses but keeps its documents and data for when you reinstall." },
      { q: "Will clearing the cache delete your photos or messages?",
        o: ["Yes, always", "No, the cache only holds temporary copies", "Only on Android", "Only if you're signed in"], a: 1,
        e: "Photos and messages are stored separately from the cache." },
      { q: "Before deleting and reinstalling WhatsApp, what should you do?",
        o: ["Clear Safari's history", "Turn on airplane mode", "Turn on the app's own chat backup", "Offload every other app"], a: 2,
        e: "Messaging apps keep chats on the phone, so back them up first or you could lose them." }
    ]
  },

  "mac-keyboard-shortcuts": {
    title: "Essential Mac Keyboard Shortcuts",
    pass: 4,
    questions: [
      { q: "What's the Mac version of Ctrl + C on Windows?",
        o: ["Option + C", "Command + C", "Control + C", "Fn + C"], a: 1,
        e: "Most Windows shortcuts use the same letter with Command (⌘) instead of Ctrl." },
      { q: "What's the difference between Command-W and Command-Q?",
        o: ["W closes the front window or tab; Q quits the whole app", "They both quit the app", "W saves; Q prints", "W minimizes; Q hides"], a: 0,
        e: "Command-W closes a window and the app stays open. Command-Q quits the app completely." },
      { q: "Which shortcut takes a screenshot of an area you drag to select?",
        o: ["Shift-Command-3", "Command-Space", "Option-Command-Esc", "Shift-Command-4"], a: 3,
        e: "Shift-Command-4 lets you drag to select an area. Shift-Command-3 captures the whole screen." },
      { q: "How do you open Spotlight search?",
        o: ["Command-Tab", "Command-F", "Command-Space", "Control-Command-Q"], a: 2,
        e: "Command-Space opens Spotlight, the fastest way to open apps, files and settings." },
      { q: "An app has frozen. Which shortcut opens Force Quit?",
        o: ["Option-Command-Esc", "Command-M", "Shift-Command-Z", "Command-H"], a: 0,
        e: "Option-Command-Esc opens the Force Quit window. Unsaved work in that app will be lost." }
    ]
  },

  "use-zoom": {
    title: "How to Use Zoom",
    pass: 4,
    questions: [
      { q: "You clicked a Zoom link and see “Please wait, the host will let you in soon.” What's happening?",
        o: ["Your internet is broken", "You're in the waiting room until the host admits you", "The meeting was cancelled", "You need a paid account"], a: 1,
        e: "The waiting room holds people until the host lets them in. You don't need to do anything." },
      { q: "Nobody can hear you. What should you check first?",
        o: ["Your screen brightness", "Whether you're sharing your screen", "Whether the microphone icon shows you're muted", "Your camera background"], a: 2,
        e: "A red line through the microphone means you're muted. Click Unmute." },
      { q: "When sharing your screen, why pick a single window instead of the whole screen?",
        o: ["It keeps pop-up messages and other windows private", "It makes the video faster", "It's the only option on a Mac", "It records the meeting"], a: 0,
        e: "Sharing one window means others can't see notifications or other apps." },
      { q: "How long can a meeting last on Zoom's free Basic plan?",
        o: ["10 minutes", "Unlimited", "2 hours", "40 minutes"], a: 3,
        e: "The free Basic plan allows meetings of up to 40 minutes with up to 100 participants." },
      { q: "What's the Windows shortcut to mute or unmute yourself in Zoom?",
        o: ["Ctrl + M", "Alt + A", "Alt + F4", "Windows + M"], a: 1,
        e: "Alt + A mutes and unmutes on Windows. On a Mac it's Command + Shift + A." }
    ]
  },

  "carve-a-pumpkin": {
    title: "How to Carve a Pumpkin",
    pass: 4,
    questions: [
      { q: "Why cut the lid from the back of the pumpkin?",
        o: ["It makes the pumpkin heavier", "It's the only way to remove seeds", "It keeps the top and stem intact and hides the cut", "It makes the pumpkin glow orange"], a: 2,
        e: "A back lid keeps the stem and top looking good, and heat escapes through it." },
      { q: "About how long does a carved pumpkin last, according to University of Illinois Extension?",
        o: ["7 to 10 days, depending on weather", "1 day", "About 2 months", "A full year"], a: 0,
        e: "Carved pumpkins last about 7 to 10 days depending on weather, less when it's warm." },
      { q: "When carving a design, what should you cut first?",
        o: ["The biggest shape", "The lid last", "It doesn't matter", "The small details"], a: 3,
        e: "Cutting big holes first weakens the wall, so do small details first." },
      { q: "What do pediatricians recommend for small children?",
        o: ["Let them carve with a kitchen knife", "Let them draw the face and scoop; adults do the cutting", "Keep them away from pumpkins entirely", "Give them the candle to hold"], a: 1,
        e: "Small kids decorate and scoop; adults handle cutting." },
      { q: "Which light makes a jack-o'-lantern last longer?",
        o: ["A real candle", "A battery LED light", "A gas lantern", "Sunlight through the lid"], a: 1,
        e: "A flame cooks the inside and speeds rot; LED lights don't." }
    ]
  },

  "make-a-website": {
    title: "Make Your First Website for Free",
    pass: 4,
    questions: [
      { q: "What must your home page file be called?",
        o: ["home.html", "main.html", "index.html", "Website.html"], a: 2,
        e: "Web servers, including GitHub Pages, look for index.html as the home page." },
      { q: "What's the job of CSS?",
        o: ["It controls colors, fonts, spacing and layout", "It stores your content", "It registers your domain", "It hosts your site"], a: 0,
        e: "HTML holds the content; CSS decides how it looks." },
      { q: "For a free GitHub Pages user site, what should the repository be named?",
        o: ["website", "my-site.com", "index", "yourusername.github.io"], a: 3,
        e: "A user site's repository must be named yourusername.github.io, in lowercase." },
      { q: "Which DNS record points www.yourdomain.com at GitHub Pages?",
        o: ["An MX record to github.com", "A CNAME record to yourusername.github.io", "A TXT record saying 'pages'", "No record is needed"], a: 1,
        e: "A www subdomain uses a CNAME record pointing to yourusername.github.io." },
      { q: "Your page appears online but has no styling. What's the likely cause?",
        o: ["GitHub Pages doesn't support CSS", "The domain hasn't been bought", "The link tag's href doesn't exactly match the CSS file name", "Images are too big"], a: 2,
        e: "File names are case-sensitive on the web, so Style.css and style.css are different files." }
    ]
  },

  "start-a-garden": {
    title: "How to Start a Vegetable Garden",
    pass: 4,
    questions: [
      { q: "How much direct sun do most vegetables need, according to NC State Extension?",
        o: ["About 2 hours", "Only morning shade", "Sun doesn't matter if you water", "At least 8 hours"], a: 3,
        e: "Most vegetables need at least 8 hours; leafy and root crops can manage with about 6." },
      { q: "Why keep a raised bed no wider than about 4 feet?",
        o: ["Lumber only comes in 4-foot lengths", "So you can reach the middle without stepping on the soil", "Wider beds don't get sun", "It's required by the USDA"], a: 1,
        e: "You should be able to reach the center from either side without compacting the soil." },
      { q: "What does your USDA Plant Hardiness Zone tell you?",
        o: ["Your average coldest winter temperature, which matters for perennials", "The exact day to plant tomatoes", "How much rain you get", "Your soil pH"], a: 0,
        e: "Zones are based on average extreme winter lows; use frost dates for vegetable timing." },
      { q: "About how much water do vegetables need each week?",
        o: ["About 1 gallon per plant per hour", "None once they sprout", "About 1 inch, from rain and watering combined", "6 inches"], a: 2,
        e: "About 1 inch per week, applied deeply and to the soil." },
      { q: "When should you plant garlic in fall?",
        o: ["Right after the first spring frost", "About 4 to 6 weeks before the ground freezes", "In midsummer", "Only after the ground is frozen solid"], a: 1,
        e: "Plant cloves 4 to 6 weeks before the ground freezes, pointed end up." }
    ]
  },

  "cook-chicken": {
    title: "How to Cook Chicken Safely (and Keep It Juicy)",
    pass: 4,
    questions: [
      { q: "What is the USDA's safe minimum internal temperature for chicken?",
        o: ["145°F", "155°F", "165°F", "180°F"], a: 2,
        e: "All chicken, including whole birds, parts and leftovers, should reach 165°F." },
      { q: "Why shouldn't you wash raw chicken?",
        o: ["It spreads bacteria around your sink and kitchen without removing them", "It makes it tough", "It washes off the flavor", "It's against the law"], a: 0,
        e: "Rinsing doesn't remove bacteria; it splashes them onto surfaces and other food." },
      { q: "Which is NOT a safe way to thaw chicken?",
        o: ["In the refrigerator", "In cold water, changed every 30 minutes", "In the microwave, then cook right away", "On the kitchen counter"], a: 3,
        e: "On the counter, the outside sits in the danger zone while the inside thaws." },
      { q: "Where should you check the temperature of a chicken breast?",
        o: ["The thinnest part", "The thickest part, not touching bone", "On the surface", "In the juices on the plate"], a: 1,
        e: "The thickest part is the last to cook; bone gives a falsely high reading." },
      { q: "Chicken thawed in cold water should be:",
        o: ["Refrozen raw", "Kept in the fridge for a week", "Cooked right away", "Rinsed before cooking"], a: 2,
        e: "Cold-water-thawed chicken should be cooked immediately." }
    ]
  },

  "cook-rice": {
    title: "How to Cook Perfect Rice",
    pass: 4,
    questions: [
      { q: "How much water does USA Rice suggest for 1 cup of long-grain white rice?",
        o: ["1 cup", "1¼ cups", "2 cups", "3 cups"], a: 2,
        e: "Long-grain white rice takes about 2 cups of water per cup of rice." },
      { q: "Why might you skip rinsing US enriched white rice?",
        o: ["Rinsing washes off the added vitamins and iron", "It makes the rice burn", "It doubles the cooking time", "It makes the rice too dry"], a: 0,
        e: "Enriched rice has nutrients added to the outside; rinsing washes them away." },
      { q: "What should you do right after the simmering time ends?",
        o: ["Stir it hard", "Add cold water", "Remove the lid and keep boiling", "Take it off the heat and let it rest, lid on, 5 to 10 minutes"], a: 3,
        e: "Resting with the lid on evens out the moisture before you fluff it." },
      { q: "Your rice is still crunchy but the water is gone. What's the fix?",
        o: ["Throw it out", "Add 2 to 4 Tbsp hot water, cover and cook a few more minutes on low", "Turn the heat to high uncovered", "Add more salt"], a: 1,
        e: "A little more water and a few more covered minutes softens it." },
      { q: "How long can cooked rice safely stay in the fridge?",
        o: ["1 week", "1 month", "3 to 4 days", "Overnight only, if left on the counter"], a: 2,
        e: "Refrigerate within 2 hours and eat within 3 to 4 days, per USDA leftovers guidance." }
    ]
  },

  "french-press-coffee": {
    title: "How to Make French Press Coffee",
    pass: 4,
    questions: [
      { q: "What's a good starting coffee-to-water ratio for French press?",
        o: ["1:5", "1:15", "1:30", "1:50"], a: 1,
        e: "1 gram of coffee to about 15 grams of water is a classic starting point." },
      { q: "What grind size works best?",
        o: ["Extra fine, like powder", "Fine, like table salt", "Coarse, like rock salt", "Whole beans"], a: 2,
        e: "A coarse grind keeps fine particles out of the cup and makes pressing easy." },
      { q: "No thermometer? How do you get water to about 200°F?",
        o: ["Use hot tap water", "Boil it for 5 minutes", "Microwave it for 30 seconds", "Boil it, then let it sit about 30 seconds"], a: 3,
        e: "Just off the boil, after about 30 seconds, is close to the ideal 195–205°F." },
      { q: "Your French press coffee tastes bitter. What should you try first?",
        o: ["Grind coarser or press on time", "Grind finer", "Steep longer", "Use hotter water"], a: 0,
        e: "Bitterness means over-extraction: go coarser, press at 4 minutes, and don't use boiling water." },
      { q: "Why pour the coffee out right after pressing?",
        o: ["It cools down faster", "Left on the grounds, it keeps brewing and turns bitter", "The glass can crack", "It loses caffeine"], a: 1,
        e: "Coffee sitting on the grounds keeps extracting and gets bitter." }
    ]
  },

  "airpods-noise-cancellation": {
    title: "Use AirPods Noise Cancellation, Transparency and Adaptive",
    pass: 4,
    questions: [
      { q: "What does Transparency mode do?",
        o: ["Blocks as much outside sound as possible", "Lets outside sound in so you can hear your surroundings", "Turns off the microphones", "Boosts the bass"], a: 1,
        e: "Transparency lets outside sound in, so you can hear traffic, announcements and people." },
      { q: "How do you switch listening modes on AirPods Pro without your phone?",
        o: ["Double-tap the case", "Say \"next mode\"", "Shake your head", "Press and hold the stem until you hear a chime"], a: 3,
        e: "Press and hold the stem's force sensor; each press moves to the next mode in your cycle." },
      { q: "Which of these does NOT have Adaptive mode?",
        o: ["AirPods Pro 2", "AirPods 4 with ANC", "Original AirPods Max", "AirPods 5"], a: 2,
        e: "The original AirPods Pro and original AirPods Max don't have Adaptive." },
      { q: "Noise cancellation on your AirPods Pro sounds weak and bass-light. What's a good first check?",
        o: ["Run the Ear Tip Fit Test or Acoustic Seal test", "Run them under the tap", "Turn on Airplane mode", "Buy new AirPods"], a: 0,
        e: "A poor seal lets noise in and drains bass. The fit or seal test tells you if you need a different tip size." },
      { q: "Which mode is the best choice when walking or cycling near traffic?",
        o: ["Noise Cancellation at full volume", "Transparency or Adaptive", "Off with music at max volume", "It doesn't matter"], a: 1,
        e: "You need to hear cars, bikes and sirens, so use Transparency or Adaptive at a moderate volume." }
    ]
  },

  "get-rid-of-hiccups": {
    title: "How to Get Rid of Hiccups",
    pass: 4,
    questions: [
      { q: "What causes the “hic” sound?",
        o: ["Your vocal cords snapping shut after the diaphragm spasms", "Your stomach growling", "Air leaving your nose", "Your heart skipping"], a: 0,
        e: "A diaphragm spasm pulls in air, and the vocal cords close suddenly, making the sound." },
      { q: "How long should you hold your breath to try to stop hiccups?",
        o: ["2 to 3 seconds", "2 minutes", "10 to 20 seconds", "As long as possible"], a: 2,
        e: "Cleveland Clinic suggests holding a deep breath about 10 to 20 seconds, repeated a few times." },
      { q: "If you breathe into a bag, what kind must it be?",
        o: ["Plastic", "Paper, and never over your head", "Any bag", "A zip-top bag"], a: 1,
        e: "Use a paper bag only. Never plastic, and never put it over your head." },
      { q: "When should you see a doctor about hiccups?",
        o: ["After 10 minutes", "Every time you get them", "Only if they happen at night", "If they last more than 48 hours or make it hard to eat, sleep or breathe"], a: 3,
        e: "Hiccups lasting over 48 hours, or that interfere with eating, sleeping or breathing, need a doctor." },
      { q: "Which of these is a common hiccup trigger?",
        o: ["Drinking water slowly", "Fizzy drinks and eating too fast", "Sleeping on your side", "Reading"], a: 1,
        e: "Carbonated drinks, alcohol, big meals and swallowing air are common triggers." }
    ]
  },

  "write-a-check": {
    title: "How to Write a Check",
    pass: 4,
    questions: [
      { q: "How do you write $125.50 on the amount line?",
        o: ["One hundred twenty-five dollars point five", "One hundred and twenty-five and 50/100", "One hundred twenty-five and 50/100", "125 and fifty"], a: 2,
        e: "Dollars in words, “and” only before the cents, and cents as a fraction over 100." },
      { q: "If the numbers and the words on a check don't match, which counts?",
        o: ["The numbers", "Whichever is larger", "The memo", "The words"], a: 3,
        e: "The written amount is the legal amount of the check." },
      { q: "What's the safest endorsement for depositing a check?",
        o: ["“For deposit only” with your signature", "Just your signature", "Leave it blank", "“Pay to the order of Cash”"], a: 0,
        e: "A restrictive “For deposit only” endorsement means it can only go into your account." },
      { q: "How do you void a check?",
        o: ["Tear off the corner", "Write VOID across the front in pen and note it in your register", "Sign the back", "Cross out the date"], a: 1,
        e: "Write VOID across the front, record it in your register, then shred it when it's no longer needed." },
      { q: "Why keep a check register?",
        o: ["A check may not clear for days, so your bank balance can look higher than it really is", "Banks require it by law", "It makes checks clear faster", "To get a lower fee"], a: 0,
        e: "Tracking outstanding checks stops you spending money that's already promised." }
    ]
  },

  "check-tax-refund-status": {
    title: "Where's My Refund? Check Your Tax Refund Status",
    pass: 4,
    questions: [
      { q: "Which three things do you need to use Where's My Refund?",
        o: ["Bank PIN, address and phone number", "Your tax preparer's ID", "Driver's license, W-2 and employer name", "SSN or ITIN, filing status and exact refund amount"], a: 3,
        e: "You need your SSN or ITIN, filing status and the exact refund amount in whole dollars." },
      { q: "How soon after e-filing a current-year return can you check its status?",
        o: ["24 hours", "4 weeks", "3 months", "Right after you click submit"], a: 0,
        e: "Status is available 24 hours after you e-file a current-year return (4 weeks for paper)." },
      { q: "What does the \"Refund Approved\" stage mean?",
        o: ["The IRS hasn't seen your return yet", "Your refund is approved and the tool shows when it should be sent", "The money is already in your bank", "You owe money"], a: 1,
        e: "Refund Approved means it's approved; Refund Sent comes next." },
      { q: "When should you call the IRS about a refund?",
        o: ["The day after filing", "Every week until it arrives", "Only if it's been over 21 days since e-filing, over 6 weeks since mailing, or the tool tells you to", "Never, under any circumstances"], a: 2,
        e: "Calling earlier won't help; phone agents see the same information as the tool." },
      { q: "If you got an extension on your 2025 return, what's the deadline to file it?",
        o: ["April 15, 2026", "December 31, 2026", "October 15, 2026", "There's no deadline"], a: 2,
        e: "Extension filers have until October 15, 2026 to file their 2025 return." }
    ]
  },

  "delete-facebook-account": {
    title: "Delete or Deactivate Your Facebook Account",
    pass: 4,
    questions: [
      { q: "You want to stop using Facebook but keep chatting on Messenger. What should you do?",
        o: ["Delete your account", "Deactivate and choose to keep using Messenger", "Uninstall the Facebook app", "Remove all your friends"], a: 1,
        e: "Only deactivation lets you keep Messenger. Deleting your account means you can't use Messenger." },
      { q: "How long do you have to cancel a Facebook deletion?",
        o: ["30 days", "7 days", "90 days", "There's no way to cancel"], a: 0,
        e: "Log in within 30 days and choose Cancel deletion." },
      { q: "What happens to Pages that only you control when you delete your account?",
        o: ["They're transferred to Facebook", "They become Instagram accounts", "They stay up forever", "They're deleted too"], a: 3,
        e: "Pages that only you control are deleted, so add another admin first if the Page should stay." },
      { q: "After you delete your account, can friends still see messages you sent them?",
        o: ["No, they vanish instantly", "Only if they're Pages", "Yes, they may, because copies are in their inboxes", "Only for 24 hours"], a: 2,
        e: "Messages you sent may still be visible to the people you sent them to." },
      { q: "How long does Facebook say it can take to delete everything you posted?",
        o: ["Up to 90 days from the start of deletion", "1 hour", "Exactly 30 days", "5 years"], a: 0,
        e: "Facebook says it can take up to 90 days from the beginning of the deletion process." }
    ]
  },

  "delete-instagram-account": {
    title: "Delete or Deactivate Your Instagram Account",
    pass: 4,
    questions: [
      { q: "What happens when you deactivate Instagram?",
        o: ["Your account is deleted after 30 days", "Only your messages are deleted", "Your profile is hidden until you log back in, and nothing is deleted", "Your followers are removed"], a: 2,
        e: "Deactivation hides your profile, photos, comments and likes; logging back in brings it all back." },
      { q: "After you request deletion, how long do you have to change your mind?",
        o: ["30 days", "7 days", "24 hours", "1 year"], a: 0,
        e: "Your account is hidden for 30 days. Logging in during that time cancels the deletion." },
      { q: "Where do you delete or deactivate Instagram?",
        o: ["Your phone's Settings app", "By emailing Instagram", "By uninstalling the app", "Meta's Accounts Center, under Deactivation or deletion"], a: 3,
        e: "Both options live in Accounts Center under Deactivation or deletion." },
      { q: "What should you do before deleting?",
        o: ["Nothing, Instagram keeps a backup for you", "Export (download) your information and check your photos open", "Change your username", "Unfollow everyone"], a: 1,
        e: "Once the account is permanently deleted, your photos can't be recovered, so download them first." },
      { q: "How often can you deactivate your Instagram account?",
        o: ["Once a day", "Once a week", "Once a year", "Only once ever"], a: 1,
        e: "Instagram only lets you deactivate once a week." }
    ]
  },

  "learn-spanish-basics": {
    title: "Learn Basic Spanish",
    pass: 4,
    questions: [
      { q: "How is the letter h pronounced in Spanish words like “hola”?",
        o: ["Like an English h", "It's silent", "Like a j", "Like a ch"], a: 1,
        e: "The Spanish h is always silent, so hola sounds like “OH-lah”." },
      { q: "Which number is “quince”?",
        o: ["5", "50", "15", "14"], a: 2,
        e: "Quince is 15. Catorce is 14, cinco is 5." },
      { q: "Which word for “the” goes with “día” (day)?",
        o: ["la", "las", "los", "el"], a: 3,
        e: "Día is a common exception: it ends in -a but is masculine, so it's el día." },
      { q: "You want to say “I'm tired.” Which is correct?",
        o: ["Estoy cansado.", "Soy cansado.", "Es cansado.", "Son cansado."], a: 0,
        e: "Feelings and temporary states use estar: estoy cansado." },
      { q: "Who should you usually address with “usted” instead of “tú”?",
        o: ["Your best friend", "A stranger or an older person", "A young child", "Your little brother"], a: 1,
        e: "Usted is the polite “you” for strangers, older people, customers and bosses." }
    ]
  },

  "play-piano-basics": {
    title: "Piano for Absolute Beginners",
    pass: 4,
    questions: [
      { q: "How do you find a C on the piano?",
        o: ["The white key just left of a group of two black keys", "The white key just right of a group of three black keys", "Any black key", "The key in the exact center"], a: 0,
        e: "C is the white key just to the left of any group of two black keys." },
      { q: "In piano fingering, which finger is number 1?",
        o: ["The pinky", "The index finger", "The thumb", "The middle finger"], a: 2,
        e: "Both hands use the same numbers: thumb is 1 and pinky is 5." },
      { q: "Which notes make a C major chord?",
        o: ["C, D, E", "C, F, A", "G, B, D", "C, E, G"], a: 3,
        e: "A triad skips every other white key: C, E and G." },
      { q: "In C position, where does your right thumb go?",
        o: ["On middle C", "On G", "On the lowest C", "On F"], a: 0,
        e: "Right thumb on middle C, with fingers 2 to 5 on D, E, F and G." },
      { q: "Which pair of white keys has no black key between them?",
        o: ["C and D", "E and F", "F and G", "G and A"], a: 1,
        e: "There's no black key between E and F (or between B and C)." }
    ]
  },

  "start-a-business": {
    title: "How to Start a Small Business in the US",
    pass: 4,
    questions: [
      { q: "How much does the IRS charge for an EIN?",
        o: ["$50", "$300", "Nothing, it's free", "It depends on your state"], a: 2,
        e: "EINs are free from the IRS. Beware of websites that charge for one." },
      { q: "Your fixed costs are $900 a month and each sale brings in $18 after its own costs. How many sales a month do you need to break even?",
        o: ["18", "50", "90", "900"], a: 1,
        e: "$900 ÷ $18 = 50 sales a month." },
      { q: "Which structure is created automatically, with no state filing, when you start selling on your own?",
        o: ["Sole proprietorship", "C corporation", "LLC", "S corporation"], a: 0,
        e: "If you start doing business by yourself, you're a sole proprietor automatically." },
      { q: "What's the main advantage of an LLC over a sole proprietorship?",
        o: ["No taxes at all", "You never need a bank account", "It can sell stock on the stock market", "It usually protects your personal assets from business debts"], a: 3,
        e: "An LLC generally keeps personal assets separate from business debts and lawsuits." },
      { q: "What is the self-employment tax rate?",
        o: ["7.65%", "10%", "15.3%", "25%"], a: 2,
        e: "Self-employment tax is 15.3%: 12.4% Social Security plus 2.9% Medicare, owed if net earnings are $400 or more." }
    ]
  },

  "find-cheap-flights": {
    title: "How to Find Cheap Flights",
    pass: 4,
    questions: [
      { q: "Under the DOT 24-hour rule, when must an airline let you cancel without penalty (or hold the fare)?",
        o: ["Any time before departure", "Within 24 hours of booking, if you booked at least 7 days before departure", "Only for first-class tickets", "Within 7 days of booking"], a: 1,
        e: "The rule applies to reservations made at least one week before departure." },
      { q: "What does the Google Flights date grid show?",
        o: ["Seat maps", "Airport security wait times", "Baggage fees", "Prices for different departure and return date combinations"], a: 3,
        e: "Click Dates to compare fares across date combinations." },
      { q: "Why can the cheapest fare end up costing more than a pricier one?",
        o: ["Bag, seat and other fees can add up", "Cheap fares are always fake", "Google adds a booking fee", "Prices are in different currencies"], a: 0,
        e: "Compare the true total, including carry-on, checked bag and seat fees." },
      { q: "Does searching in incognito mode reliably lower airfares?",
        o: ["Yes, always by about 10%", "Only on Tuesdays", "There's no good evidence it does", "Yes, but only for international flights"], a: 2,
        e: "Fares change because seats sell and airlines adjust to demand, not because of your cookies." },
      { q: "Your domestic flight is rescheduled to arrive 4 hours later and you decline the new flight. What are you entitled to?",
        o: ["Only a travel credit", "A refund to your original form of payment", "Cash compensation for the delay", "Nothing"], a: 1,
        e: "A change of 3+ hours on a domestic trip is significant, so you can get a refund. There's no federal cash compensation for delays." }
    ]
  },

  "stop-procrastinating": {
    title: "How to Stop Procrastinating",
    pass: 4,
    questions: [
      { q: "According to research, what mainly drives procrastination?",
        o: ["Laziness", "Poor math skills", "Avoiding unpleasant feelings the task brings up", "Having too much free time"], a: 2,
        e: "Procrastination is mostly short-term mood repair: avoiding the task makes a bad feeling go away for now." },
      { q: "In the standard Pomodoro Technique, how long is one focus session?",
        o: ["25 minutes", "10 minutes", "60 minutes", "90 minutes"], a: 0,
        e: "Work for 25 minutes, take a short break, and a longer break after four." },
      { q: "Which is an implementation intention (if-then plan)?",
        o: ["“I'll exercise more.”", "“When I get home from work, I'll put on my running shoes.”", "“I should really study.”", "“Someday I'll clean the garage.”"], a: 1,
        e: "It names exactly when and what you'll do, which makes starting automatic." },
      { q: "What did students who forgave themselves for procrastinating do before their next exams?",
        o: ["Procrastinated more", "Dropped the class", "Stopped studying", "Procrastinated less"], a: 3,
        e: "In Wohl, Pychyl and Bennett's 2010 study, self-forgiveness led to less procrastination next time." },
      { q: "Which change makes distractions harder to reach?",
        o: ["Keeping your phone face up next to you", "Opening every app you might need", "Putting your phone in another room", "Working only when you feel motivated"], a: 2,
        e: "Changing your surroundings beats relying on willpower." }
    ]
  },

  "write-cover-letter": {
    title: "How to Write a Cover Letter",
    pass: 4,
    questions: [
      { q: "How long should a typical cover letter be?",
        o: ["Two to three pages", "One page or less", "As long as your resume", "Exactly 100 words"], a: 1,
        e: "Keep it to one page, usually 250 to 400 words." },
      { q: "Which opening is strongest?",
        o: ["“My name is Jane and I am writing to apply.”", "“To Whom It May Concern, I want this job.”", "A specific result or reason you fit the role", "A list of your hobbies"], a: 2,
        e: "Lead with what makes you a fit, like a relevant result, not throat-clearing." },
      { q: "What's the best way to match your letter to a job posting?",
        o: ["Pick 2 or 3 key requirements and give proof for each", "Copy your whole resume into the letter", "Use the same letter for every job", "Talk about what the job will do for you"], a: 0,
        e: "Find the top requirements and back each with a specific example, ideally with a number." },
      { q: "You can't find the hiring manager's name. What greeting should you use?",
        o: ["To Whom It May Concern", "Hey there", "Dear Sir", "Dear Hiring Manager"], a: 3,
        e: "“Dear Hiring Manager” is fine; “To Whom It May Concern” feels dated." },
      { q: "What file format is usually best for sending a cover letter?",
        o: ["A photo of the printed letter", "PDF, unless the employer asks for Word", "A plain .zip file", "Whatever your word processor saves by default"], a: 1,
        e: "A PDF keeps your formatting intact. Use Word only if asked." }
    ]
  },

  "drawing-basics": {
    title: "Learn to Draw: The Basics",
    pass: 4,
    questions: [
      { q: "What does 'ghosting' a line mean?",
        o: ["Erasing it lightly", "Moving through the stroke in the air before drawing it", "Drawing with a white pencil", "Tracing over a photo"], a: 1,
        e: "Ghosting rehearses the motion so the real stroke is smooth." },
      { q: "In perspective drawing, where is the horizon line?",
        o: ["At the top of the page", "At the bottom of the page", "At your eye level", "Wherever the object is"], a: 2,
        e: "The horizon line is at the viewer's eye height." },
      { q: "In two-point perspective, how are vertical lines drawn?",
        o: ["Straight up and down", "Toward the left vanishing point", "Toward the right vanishing point", "Curved"], a: 0,
        e: "Verticals stay vertical; the two sets of horizontal edges go to the two vanishing points." },
      { q: "Where do the eyes usually sit on a head?",
        o: ["Near the top third", "About halfway down", "Near the chin", "Right at the hairline"], a: 1,
        e: "Eyes are about halfway down the head, a common beginner mistake." },
      { q: "What is the 'core shadow' on a shaded sphere?",
        o: ["The brightest spot", "The shadow on the table", "The darkest band where the form turns away from the light", "The light bouncing back from the table"], a: 2,
        e: "The core shadow is where the surface turns away from the light." }
    ]
  },

  "photography-basics": {
    title: "Photography Basics",
    pass: 4,
    questions: [
      { q: "Which f-stop lets in the MOST light and gives the blurriest background?",
        o: ["f/16", "f/8", "f/1.8", "f/11"], a: 2,
        e: "A small f-number means a big opening: more light and shallower depth of field." },
      { q: "Your photo of a running dog is blurry. Which change helps most?",
        o: ["A faster shutter speed like 1/500 s", "A slower shutter speed like 1/15 s", "A smaller aperture like f/16", "Lower ISO with nothing else changed"], a: 0,
        e: "Fast shutter speeds freeze motion." },
      { q: "What is the main downside of raising ISO?",
        o: ["The background gets blurrier", "More grain (noise)", "Moving subjects blur", "Colors turn black and white"], a: 1,
        e: "ISO amplifies the signal, which adds noise." },
      { q: "With the rule of thirds, where should you usually put the horizon?",
        o: ["Exactly through the middle", "At the very bottom edge", "Tilted for drama", "On the top or bottom third line"], a: 3,
        e: "Putting the horizon on a third line avoids cutting the photo in half." },
      { q: "On a phone, what's better than pinch-zooming?",
        o: ["Turning on digital zoom", "Using the phone's built-in lenses or walking closer", "Using flash", "Taking a screenshot and cropping"], a: 1,
        e: "Pinch zoom crops and loses detail; use real lenses or get closer." }
    ]
  },

  "video-editing-basics": {
    title: "Video Editing Basics",
    pass: 4,
    questions: [
      { q: "What is a J cut?",
        o: ["The video of the next clip starts before its audio", "The audio of the next clip starts before you see it", "A cut shaped like a letter J", "A fade to black"], a: 1,
        e: "In a J cut you hear the next clip before you see it." },
      { q: "What is b-roll?",
        o: ["The main footage of someone talking", "Extra footage laid over the main footage to show what's being discussed", "A blooper reel", "Background music"], a: 1,
        e: "B-roll covers A-roll to show, not tell, and hide jump cuts." },
      { q: "Your voice meter keeps hitting 0 dB and turning red. What's happening?",
        o: ["The audio is clipping and distorting", "The audio is perfect", "The music is too quiet", "Nothing, red is normal"], a: 0,
        e: "Peaks at 0 dB clip. Aim for about -12 to -6 dB." },
      { q: "What aspect ratio fits TikTok, Reels and YouTube Shorts?",
        o: ["16:9", "1:1", "4:3", "9:16"], a: 3,
        e: "Tall vertical video is 9:16, usually 1080x1920." },
      { q: "What frame rate should you usually export at?",
        o: ["Always 60 fps", "Always 24 fps", "The same rate you filmed at", "As low as possible"], a: 2,
        e: "Exporting at the recorded frame rate avoids stutter." }
    ]
  },

  "how-to-meditate": {
    title: "How to Meditate",
    pass: 4,
    questions: [
      { q: "Your mind wanders 20 times in 5 minutes. What does that mean?",
        o: ["You're doing it wrong", "You should stop meditating", "You should meditate longer to empty your mind", "It's normal; noticing and coming back is the practice"], a: 3,
        e: "Noticing and returning is the core exercise, like a rep at the gym." },
      { q: "What's a good posture for meditation?",
        o: ["Relaxed but alert, like sitting tall in a chair", "Slumped back on a couch", "Rigid and tense", "Standing on one leg"], a: 0,
        e: "Upright enough to stay alert, relaxed enough to be still." },
      { q: "How long should a beginner start with?",
        o: ["At least an hour", "2 to 5 minutes a day", "Only once a month", "30 minutes or it doesn't count"], a: 1,
        e: "Short daily sessions beat long occasional ones." },
      { q: "What do you do in a body scan?",
        o: ["Hold your breath as long as possible", "Tense every muscle at once", "Slowly move attention through the body, noticing sensations", "Count to 100 quickly"], a: 2,
        e: "A body scan moves attention region by region without trying to change anything." },
      { q: "What does NCCIH say about meditation and medical care?",
        o: ["It replaces medication", "Don't use it to replace care or delay seeing a provider", "It cures anxiety for everyone", "It has been proven risk-free for everyone"], a: 1,
        e: "Meditation can help, but shouldn't replace conventional care." }
    ]
  },

  "investing-basics": {
    title: "Investing for Beginners",
    pass: 4,
    questions: [
      { q: "What is an index fund?",
        o: ["A fund where a manager picks stocks to beat the market", "A fund that simply copies a market index like the S&P 500", "A savings account that pays a fixed interest rate", "A loan to the government"], a: 1,
        e: "An index fund tracks an index instead of picking winners, which keeps costs low." },
      { q: "Why does diversification lower risk?",
        o: ["It guarantees you can't lose money", "It makes your account FDIC insured", "One company failing has a small effect when you own many", "It lets you sell at the top of the market"], a: 2,
        e: "Spread across many companies, one going to zero barely dents your total." },
      { q: "Which of these should usually come before investing in stocks?",
        o: ["Buying a new car", "Paying off a 25% interest credit card", "Picking individual stocks", "Waiting for the market to drop"], a: 1,
        e: "Paying off high-interest debt is a guaranteed return that investing can't reliably beat." },
      { q: "$100,000 grows for 20 years at a 4% return. About how much more do you end with paying 0.25% in yearly fees instead of 1%?",
        o: ["About $28,000", "About $750", "About $2,800", "Nothing, fees don't compound"], a: 0,
        e: "About $209,000 versus $181,000. Fees also cost the growth that money would have earned." },
      { q: "What is dollar-cost averaging?",
        o: ["Buying only when prices are low", "Converting your money to dollars", "Investing the same amount on a regular schedule", "Selling a little every month"], a: 2,
        e: "A fixed amount on a schedule buys more shares when prices are low and fewer when high." }
    ]
  },

  "negotiate-salary": {
    title: "How to Negotiate Your Salary",
    pass: 4,
    questions: [
      { q: "When is usually the best time to negotiate pay?",
        o: ["Before your first interview", "After you have an offer, before you accept", "After you've started the job", "Never, it's rude"], a: 1,
        e: "Once they've decided they want you and before you sign, you have the most leverage." },
      { q: "Which free government source shows pay percentiles by state and metro area?",
        o: ["BLS Occupational Employment and Wage Statistics (OEWS)", "The IRS", "Social Security", "The Census Bureau's population clock"], a: 0,
        e: "OEWS shows 10th through 90th percentile wages by area." },
      { q: "You say a range of '$70k to $80k.' Where will offers usually land?",
        o: ["Near $80k", "Above $80k", "Near $70k, the bottom", "Exactly $75k"], a: 2,
        e: "Employers tend to hear the bottom of a range, so put your target there." },
      { q: "The company says salary is capped. What's a good next move?",
        o: ["Accept immediately", "Withdraw from the process", "Invent a competing offer", "Ask about a signing bonus, extra PTO, or a six-month review"], a: 3,
        e: "Other parts of the package are often more flexible than base pay." },
      { q: "What is 'anchoring'?",
        o: ["The first number on the table pulls the final number toward it", "Refusing to move from your number", "Asking for a long-term contract", "Negotiating only benefits"], a: 0,
        e: "The first number sets the reference point for the rest of the negotiation." }
    ]
  },

  "retirement-accounts": {
    title: "Retirement Accounts Explained",
    pass: 4,
    questions: [
      { q: "Your employer matches 50% of the first 6% of pay. How much should you contribute to get the full match?",
        o: ["3%", "6%", "12%", "50%"], a: 1,
        e: "You need to put in 6% of pay to get the full 3% match." },
      { q: "When does a Roth account tend to win over a traditional one?",
        o: ["When your tax rate is lower now than it will be in retirement", "When your tax rate is higher now", "Never, traditional always wins", "Only if you withdraw before 59½"], a: 0,
        e: "With Roth you pay tax now, so it wins when today's rate is lower." },
      { q: "What is the 2026 limit on your own 401(k) contributions if you're under 50?",
        o: ["$7,500", "$24,500", "$8,000", "$11,250"], a: 1,
        e: "The IRS set the 2026 401(k) employee limit at $24,500. $7,500 is the IRA limit." },
      { q: "What usually happens if you take money from a traditional IRA at age 40?",
        o: ["Nothing, it's your money", "It's tax-free", "It's taxed as income plus a 10% additional tax, unless an exception applies", "Your account is closed"], a: 2,
        e: "Withdrawals before 59½ usually owe income tax plus a 10% additional tax." },
      { q: "What can you take out of a Roth IRA at any time, tax- and penalty-free?",
        o: ["Your earnings", "Your employer's match", "Nothing until age 73", "The contributions you put in"], a: 3,
        e: "Roth IRA contributions can always come out; earnings follow the 59½ and 5-year rules." }
    ]
  },

  "strong-passwords": {
    title: "Strong Passwords and Password Managers",
    pass: 4,
    questions: [
      { q: "According to NIST, what makes a password strongest?",
        o: ["Required symbols and capitals", "Changing it every 90 days", "Length", "Using your birth year"], a: 2,
        e: "NIST says sites should require length (15+ characters alone) and not force composition rules or regular changes." },
      { q: "Why is reusing a password so dangerous?",
        o: ["Sites delete reused passwords", "A leak from one site lets attackers log in to your other accounts", "It makes your password shorter", "It turns off two-factor authentication"], a: 1,
        e: "Credential stuffing: attackers try leaked email and password pairs on other sites." },
      { q: "What makes a passphrase strong?",
        o: ["Words picked at random, like by a computer or dice", "A favorite song lyric", "Your pet's name plus 123", "Swapping a for @"], a: 0,
        e: "A phrase you choose is predictable; randomly chosen words are not." },
      { q: "Why are passkeys resistant to phishing?",
        o: ["They're very long passwords", "They change every day", "They're stored on the website", "They only work on the real website they were made for"], a: 3,
        e: "A passkey is tied to the real site, so a look-alike site can't use it." },
      { q: "Your password shows up in a breach. What should you do first?",
        o: ["Nothing, breaches don't matter", "Change it on that site and anywhere you reused it", "Add a 1 to the end", "Email the company your new password"], a: 1,
        e: "Change it to a new unique password everywhere you used it, then turn on two-factor or a passkey." }
    ]
  },

  "tax-brackets-explained": {
    title: "How Tax Brackets Work",
    pass: 4,
    questions: [
      { q: "A single filer has $60,000 of taxable income in 2026 and is in the 22% bracket. How much of it is taxed at 22%?",
        o: ["All $60,000", "Only the part above $50,400", "Only the first $12,400", "None of it"], a: 1,
        e: "Each rate applies only to the dollars inside its bracket, here the $9,600 above $50,400." },
      { q: "What is your effective tax rate?",
        o: ["The rate on your next dollar of income", "Your total tax divided by your income", "The highest bracket you reach", "The rate your state charges"], a: 1,
        e: "Effective rate is your overall average: total tax ÷ income." },
      { q: "What is the 2026 standard deduction for a single filer?",
        o: ["$12,400", "$24,150", "$32,200", "$16,100"], a: 3,
        e: "$16,100 for single (and married filing separately), $32,200 married jointly, $24,150 head of household." },
      { q: "You get a $1,000 raise that pushes you into a higher bracket. What happens?",
        o: ["You keep less money than before the raise", "All your income is taxed at the higher rate", "Only the dollars above the bracket line get the higher rate, so you keep most of the raise", "Your raise is taxed at 100%"], a: 2,
        e: "Brackets never make a raise lower your take-home pay." },
      { q: "Which saves you more: a $1,000 tax credit or a $1,000 deduction?",
        o: ["The credit", "The deduction", "They're always the same", "Neither affects your tax"], a: 0,
        e: "A credit cuts your tax bill dollar for dollar; a deduction only lowers taxable income." }
    ]
  },

  "how-vpns-work": {
    title: "How VPNs Work",
    pass: 4,
    questions: [
      { q: "With a VPN on, what can your internet provider (ISP) see?",
        o: ["Every page you read", "That you're connected to a VPN, but not which sites you visit", "Your passwords", "Nothing at all, not even that you're online"], a: 1,
        e: "The ISP sees encrypted traffic going to the VPN server." },
      { q: "Who can see which sites you visit when the VPN is on?",
        o: ["The VPN provider", "Only your Wi-Fi owner", "Nobody", "Only your ISP"], a: 0,
        e: "A VPN moves that view from your ISP to the VPN company." },
      { q: "What does HTTPS (the padlock) protect, with or without a VPN?",
        o: ["Which site you're visiting", "Your IP address", "The pages you read and what you type", "Cookies and ad tracking"], a: 2,
        e: "HTTPS encrypts the content between your browser and the site." },
      { q: "Which of these can a VPN NOT protect you from?",
        o: ["The coffee shop Wi-Fi seeing which sites you visit", "Your ISP seeing which sites you visit", "Websites seeing your real IP address", "Phishing sites and trackers when you log in"], a: 3,
        e: "A VPN doesn't stop scams, malware, cookies or a site knowing it's you when you sign in." },
      { q: "What's a common risk of free VPNs?",
        o: ["They're always illegal", "They may pay for themselves by tracking you or selling your data", "They make HTTPS stop working", "They delete your passwords"], a: 1,
        e: "Running servers costs money. If you're not paying, ask how the company makes money." }
    ]
  },

  "philosophy-basics": {
    title: "Philosophy Basics: The Big Questions, Explained",
    pass: 4,
    questions: [
      { q: "Which branch of philosophy studies what knowledge is and how we get it?",
        o: ["Metaphysics", "Epistemology", "Aesthetics", "Political philosophy"], a: 1,
        e: "Epistemology is the study of knowledge, like whether you can be sure you're not dreaming." },
      { q: "What makes an argument sound?",
        o: ["It has at least three premises", "It persuades most people", "It is valid and its premises are actually true", "Its conclusion is surprising"], a: 2,
        e: "Valid means the conclusion follows; sound means valid plus true premises." },
      { q: "Which theory judges an action mainly by its results, such as the most overall well-being?",
        o: ["Utilitarianism", "Deontology", "Virtue ethics", "Skepticism"], a: 0,
        e: "Utilitarianism, defended by Mill, is a form of consequentialism." },
      { q: "Who argued we should never treat people merely as a means to an end?",
        o: ["Aristotle", "John Stuart Mill", "Confucius", "Immanuel Kant"], a: 3,
        e: "This idea is central to Kant's duty-based ethics." },
      { q: "The ship of Theseus thought experiment is mainly about:",
        o: ["Whether lying is ever acceptable", "Identity over time", "How governments get their power", "Whether the outside world exists"], a: 1,
        e: "If every plank is replaced, is it the same ship? It's a puzzle about identity over time." }
    ]
  },

  "stoicism-basics": {
    title: "Stoicism for Everyday Life: A Beginner's Guide",
    pass: 4,
    questions: [
      { q: "Who founded Stoicism in Athens around 300 BCE?",
        o: ["Marcus Aurelius", "Seneca", "Zeno of Citium", "Epictetus"], a: 2,
        e: "Zeno taught at the Stoa Poikile, the painted porch, which gave the school its name." },
      { q: "According to the dichotomy of control, which of these is up to you?",
        o: ["How you respond when someone is rude", "What your coworkers think of you", "The weather tomorrow", "Whether you get the promotion"], a: 0,
        e: "Your judgments, choices and actions are in your control; other people's opinions and outcomes are not." },
      { q: "Which is NOT one of the four Stoic virtues?",
        o: ["Wisdom", "Courage", "Wealth", "Temperance"], a: 2,
        e: "The four are wisdom, courage, justice and temperance. Wealth is a 'preferred indifferent'." },
      { q: "What is negative visualization (premeditatio malorum)?",
        o: ["Ignoring bad news", "Briefly imagining losing something to reduce shock and build gratitude", "Writing down everything you dislike", "Refusing to plan ahead"], a: 1,
        e: "Kept brief and ending on gratitude, it prepares you and helps you appreciate what you have." },
      { q: "Which Stoic wrote the private notebook now called Meditations?",
        o: ["Epictetus", "Seneca", "Zeno", "Marcus Aurelius"], a: 3,
        e: "Marcus Aurelius, a Roman emperor, wrote it for himself, not for publication." }
    ]
  },

  "how-the-economy-works": {
    title: "How the Economy Works: A Plain-English Guide",
    pass: 4,
    questions: [
      { q: "If supply of coffee falls because of a bad harvest, what usually happens?",
        o: ["Price falls, quantity rises", "Price rises, quantity falls", "Both price and quantity rise", "Nothing changes"], a: 1,
        e: "A supply decrease shifts the supply curve left: higher price, lower quantity." },
      { q: "What does the Consumer Price Index (CPI) measure?",
        o: ["Changes in the price of a basket of goods and services households buy", "The total value of everything a country produces", "The interest rate banks charge each other", "The share of people out of work"], a: 0,
        e: "The BLS publishes CPI monthly; its 12-month change is the usual inflation figure." },
      { q: "What inflation rate does the Federal Reserve aim for over time?",
        o: ["0%", "5%", "10%", "2%"], a: 3,
        e: "The Fed targets 2% inflation over the longer run." },
      { q: "When the Fed raises interest rates, what is it usually trying to do?",
        o: ["Boost borrowing and spending", "Print more money", "Cool demand to ease inflation", "Lower the unemployment rate quickly"], a: 2,
        e: "Higher rates make borrowing costlier, slowing spending and inflation." },
      { q: "Who officially dates US recessions?",
        o: ["The Treasury Department", "The National Bureau of Economic Research (NBER)", "Congress", "The stock market"], a: 1,
        e: "NBER looks at many measures; 'two quarters of falling GDP' is only a rule of thumb." }
    ]
  },

  "night-sky-astronomy": {
    title: "Stargazing for Beginners: Read the Night Sky",
    pass: 4,
    questions: [
      { q: "How do you find Polaris using the Big Dipper?",
        o: ["Follow the handle's curve", "Go straight up from the bowl's bottom-left star", "Draw a line from Merak through Dubhe and go about five times that distance", "Look for the brightest star in the sky"], a: 2,
        e: "Merak and Dubhe are the pointer stars at the outer edge of the bowl." },
      { q: "In the Northern Hemisphere, a Moon lit on the right side is:",
        o: ["Waxing (growing)", "Waning (shrinking)", "Always full", "In eclipse"], a: 0,
        e: "Right side lit means waxing in the Northern Hemisphere; it's flipped in the Southern." },
      { q: "About how long is the cycle from one new Moon to the next?",
        o: ["7 days", "24.5 days", "35 days", "29.5 days"], a: 3,
        e: "The synodic month averages about 29.53 days." },
      { q: "Which clue usually means you're looking at a planet, not a star?",
        o: ["It twinkles strongly", "It shines with a steadier light near the ecliptic", "It's always directly overhead", "It's red and blinking"], a: 1,
        e: "Planets show a tiny disk, so they twinkle less, and they stay near the ecliptic." },
      { q: "How long does it take your eyes to fully adapt to the dark?",
        o: ["About 1 minute", "About 5 minutes", "About 20 to 30 minutes", "About 3 hours"], a: 2,
        e: "And a glance at a bright phone screen resets much of it, so use red light." }
    ]
  },

  "us-government-basics": {
    title: "How the US Government Works: A Nonpartisan Guide",
    pass: 4,
    questions: [
      { q: "Which branch interprets laws and can declare them unconstitutional?",
        o: ["Legislative", "Executive", "Judicial", "The states"], a: 2,
        e: "Judicial review was established in Marbury v. Madison (1803)." },
      { q: "How can Congress override a presidential veto?",
        o: ["A two-thirds vote in both the House and Senate", "A simple majority in the House", "A Supreme Court ruling", "A vote of three-fourths of the states"], a: 0,
        e: "Overrides need two-thirds of both chambers, and they are rare." },
      { q: "How long is a US senator's term?",
        o: ["2 years", "4 years", "8 years", "6 years"], a: 3,
        e: "Senators serve 6-year terms; House members serve 2 years." },
      { q: "What happens if the President does nothing with a bill and Congress adjourns within the 10 days?",
        o: ["It becomes law automatically", "It's a pocket veto and the bill dies", "It goes to the Supreme Court", "Congress votes again"], a: 1,
        e: "If Congress is in session it becomes law; if Congress has adjourned, it's a pocket veto." },
      { q: "When are the 2026 midterm elections?",
        o: ["Tuesday, November 3, 2026", "Monday, November 2, 2026", "Tuesday, November 10, 2026", "Tuesday, October 27, 2026"], a: 0,
        e: "Federal elections are on the Tuesday after the first Monday in November." }
    ]
  },

  "critical-thinking": {
    title: "Critical Thinking Basics",
    pass: 4,
    questions: [
      { q: "What is lateral reading?",
        o: ["Reading a whole website carefully from top to bottom", "Leaving the page and opening new tabs to see what other sources say about it", "Reading only the headline and first paragraph", "Skimming the comments under an article"], a: 1,
        e: "Fact-checkers leave the page quickly and read across other sources to judge it." },
      { q: "\"I wore my lucky socks and our team won, so the socks work.\" Which fallacy is this?",
        o: ["Straw man", "Bandwagon", "Post hoc", "Circular reasoning"], a: 2,
        e: "Post hoc assumes that because B followed A, A caused B." },
      { q: "What does the S in the SIFT method stand for?",
        o: ["Stop", "Search", "Share", "Source"], a: 0,
        e: "SIFT is Stop, Investigate the source, Find better coverage, Trace to the original context." },
      { q: "You keep watching a bad movie because you already paid for the ticket. Which bias is that?",
        o: ["Anchoring", "Availability", "Survivorship bias", "Sunk cost"], a: 3,
        e: "Sunk cost is continuing because of what you've already spent, not what happens next." },
      { q: "Which is the strongest kind of evidence?",
        o: ["One person's story", "A celebrity endorsement", "Many studies reviewed together", "A post with lots of shares"], a: 2,
        e: "A systematic review of many studies is stronger than an anecdote, and popularity is not evidence." }
    ]
  },

  "logic-and-sets": {
    title: "Logic and Sets: An Intro to Discrete Math",
    pass: 4,
    questions: [
      { q: "When is P → Q false?",
        o: ["When P is false and Q is true", "When both are false", "When P is true and Q is false", "When both are true"], a: 2,
        e: "An if-then is only broken when the hypothesis is true and the conclusion is false." },
      { q: "Which statement always has the same truth value as \"If P, then Q\"?",
        o: ["If Q, then P", "If not Q, then not P", "If not P, then not Q", "P and Q"], a: 1,
        e: "The contrapositive ¬Q → ¬P is always equivalent. The converse and inverse are not." },
      { q: "How many rows does a truth table with 3 letters have?",
        o: ["3", "6", "9", "8"], a: 3,
        e: "2 to the power of 3 is 8." },
      { q: "A = {1, 2, 3, 4} and B = {3, 4, 5, 6}. What is A ∩ B?",
        o: ["{3, 4}", "{1, 2, 3, 4, 5, 6}", "{1, 2}", "{5, 6}"], a: 0,
        e: "The intersection holds the elements in both sets." },
      { q: "18 students play a sport, 12 play an instrument and 5 do both. How many do at least one?",
        o: ["30", "25", "35", "23"], a: 1,
        e: "|A ∪ B| = 18 + 12 − 5 = 25." }
    ]
  },

  "read-charts-and-graphs": {
    title: "How to Read Charts and Spot Misleading Ones",
    pass: 4,
    questions: [
      { q: "Why is a bar chart with a y-axis starting at 50 usually misleading?",
        o: ["Bars look smaller than they are", "We judge bars by length, so small differences look huge", "Bar charts must always be blue", "It hides the title"], a: 1,
        e: "Bars should start at zero because their length should be proportional to the value." },
      { q: "A rate goes from 10% to 15%. Which statement is correct?",
        o: ["It rose 5 percent", "It rose 15 percentage points", "It rose 50 percent", "It doubled"], a: 2,
        e: "It rose 5 percentage points, which is a 50% increase over 10%." },
      { q: "City A has 900 thefts and 3 million people. City B has 300 thefts and 200,000 people. Which has the higher theft rate?",
        o: ["City A", "They are the same", "You can't tell from this", "City B"], a: 3,
        e: "City A: 30 per 100,000. City B: 150 per 100,000." },
      { q: "Ice cream sales and sunburns rise together. What's the most likely explanation?",
        o: ["Hot, sunny weather causes both", "Ice cream causes sunburns", "Sunburns make people buy ice cream", "It is impossible to explain"], a: 0,
        e: "A hidden third factor, summer weather, drives both. Correlation isn't causation." },
      { q: "One mansion on a street of modest homes makes which number misleading?",
        o: ["The median", "The mean", "The count of homes", "The street name"], a: 1,
        e: "Extreme values pull the mean; the median stays near the typical home." }
    ]
  }
};
