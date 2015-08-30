var episodes = [
    {
        title: "Introduction & Setting up inventory",
        slides: [
            new Slide("Editor Scrolls tutorial", "Tutorial", "Let's get you started with Editor Scrolls", [
                new Item("Health and mana are shown to the bottom right."),
                new Item("You lose health when you take hits, if you take hits that is."),
                new Item("Your mana will drain when you use your special abilities."),
                new Item("Experience bar is to the bottom left."),
                new Item("You gain experience as you complete objectives, ultimately leveling up at the end of the episode."),
                new Item("Objectives are shown to the left."),
                new Item("Play safe out there in Editor Scrolls. Wish you luck!"),
                new Item(""),
            ]),
            new Slide("Prepare inventory", "Obtaining Emacs", "Let's download Emacs to your system", [
                new Item("One can obtain Emacs from the offical GNU website."),
                new Item("Once downloaded, extract the archive and run the executable <i>runemacs.exe</i> from within the <i>bin</i> directory."),
                new Item("Fortunate beings using linux can just type <br /> <code>sudo apt-get install emacs24</code><br />to install version 24."),
                new Item("Once done, we're ready to start Emacs!"),
                new Item(""),
            ]),
            new Slide("Emacs training", "Learning Emacs", "Does not matter if you own a space-ship or a text-editor, you need to learn how to use it first, before you can take it out for a spin...", [
                new Item("The first step after you start Emacs as I recommend is to go through the <i>Emacs Tutorial</i> and the <i>Emacs Guided Tour</i>.<br />"),
                new Item("You can find two links at the Emacs startup screen, the one that comes up when you start Emacs.<br />You can also get to that screen when you press <br /><code>C-h C-a</code>"),
                new Item("This may take you days, weeks, or even months. Take it slow, I'm sure it will be worth the patience."),
                new Item("There are a lot of websites there on the internet from people who are ready to help you with Emacs, one of which is the ergoemacs website: http://ergoemacs.org/emacs/emacs.html"),
                new Item("Last but not the least: Emacs, as they call it is a self-documenting text-editor and it has integrated help to rescue you when you get stuck."),
                new Item("")
            ]),
            new Slide("Customize your load-out", "Configuring Emacs", "Emacs can be configured to an unimaginable extent", [
                new Item("There are a variety of starter packs available for you to use."),
                new Item("Many people out there share their configuration over GitHub so that you can use it as a reference, and well, contribute if you're inspired enough."),
                new Item("There are videos available on YouTube (there's a couple of them by me) to help you get started."),
                new Item("In case you want to do it all on your own, you can do it at your own pace and with your own style..."),
                new Item(""),
            ]),
        ]
    }
];
