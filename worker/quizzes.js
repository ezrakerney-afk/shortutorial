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
