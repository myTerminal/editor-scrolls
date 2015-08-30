var Viewmodel = function () {
    var self = this;

    var dummyEpisode = {
        slides: [
            new Slide("", "", "", [
                new Item("")
            ])
        ]
    };

    this.episodeIndex = 0;

    this.mode = ko.observable(GameModes["title"]);

    this.mode.subscribe(function (v) {
        if ([GameModes.game, GameModes.title].indexOf(v) > -1) {
            self.isLoading(true);
            setTimeout(function () {
                self.isLoading(false);
            }, 5000);
        }
    });

    this.isLoading = ko.observable(false);

    this.characters = ko.observableArray([
        {
            name: "Vim user",
            description: "Works with the world's most popular text-editor and dares to remember weird shortcuts.<br /><br />Gets annoyed when in proximity of Emacs users."
        },
        {
            name: "Sublime Text user",
            description: "Habitual of a tabbed interface with a mini-map towards the right of the editor.<br /><br />Customizes shortcuts, chains them to perform complex operations from quickly.<br /><br />Works within a graphical interface."
        },
        {
            name: "Notepad++ user",
            description: "Had been using Notepad on Microsoft Windows until came across Notepad++ that is free, efficient editor that also maintains an undo history.<br /><br />Does not care about the editor he/she works with as far as it retains the comfort level of Notepad."
        }
    ]);
    
    this.episode = ko.observable(dummyEpisode);
    
    this.currentSlide = ko.observable(this.episode().slides[0]);

    this.nextQuest = ko.computed(function () {
        var currentSlideIndex = self.episode().slides.indexOf(self.currentSlide()),
            nextSlide = self.episode().slides[currentSlideIndex + 1];

        return nextSlide ?
            nextSlide.objective :
            "";
    });

    // Stats
    
    this.stats = {
        character: ko.observable(self.characters()[0]),
        health: ko.observable(100),
        mana: ko.observable(100)
    };

    this.experience = {
        level: ko.observable(self.episodeIndex),
        progress: ko.computed(function () {
            var watchedSlides = self.episode().slides.filter(function (s) {
                return s.items.filter(function (t) {
                    return t.state();
                }).length === s.items.length;
            }).length;

            return watchedSlides * 100 / self.episode().slides.length;
        })
    };

    this.experience.progress.subscribe(function (v) {
        if (v >= 100) {
            self.experience.level(self.episodeIndex + 1);
        } else {
            self.experience.level(self.episodeIndex);
        }
    });

    // Messages

    this.isLevelComplete = ko.computed(function () {
        return self.episode().slides.filter(function (s) {
            return !s.isComplete();
        }).length === 0;
    });

    this.isLevelUp = ko.computed(function () {
        return self.experience.level() > self.episodeIndex;
    });

    this.shouldShowObjectiveCompleteMessage = ko.computed(function () {
        return self.currentSlide().isComplete();
    });

    // Methods

    this.reset = function () {
        self.mode(GameModes["title"]);

        self.episode().slides.forEach(function (s) {
            s.items.forEach(function (t) {
                t.state(false);
            });
        });
        
        self.episode(dummyEpisode);
        self.currentSlide(self.episode().slides[0]);
    };

    this.startEpisode = function (index) {
        self.episodeIndex = index;
        self.episode(episodes[index]);
        self.currentSlide(self.episode().slides[0]);
        self.mode(GameModes["game"]);
    };
    
    this.moveToNext = function () {
        var isCurrentSlideOver = self.currentSlide().items.filter(function (t) {
            return t.state();
        }).length === self.currentSlide().items.length;

        if (isCurrentSlideOver) {
            // Move to next slide
            var currentItemIndex = self.episode().slides.indexOf(self.currentSlide());

            self.currentSlide(self.episode().slides[currentItemIndex + 1]);
        } else {
            // Move to the next item in current slide
            var nextItem = self.currentSlide().items.filter(function (t) {
                return !t.state();
            })[0];

            nextItem.state(true);
        }
    };
};
