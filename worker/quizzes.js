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
  }
};
