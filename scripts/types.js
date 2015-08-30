var Item = function (text) {
    this.text = text;
    this.state = ko.observable(false);
};

var Slide = function (objective, title, description, items) {
    var self = this;

    this.objective = objective;
    this.title = title;
    this.description = description;
    this.items = items;
    this.isComplete = ko.computed(function () {
        return self.items.filter(function (t) {
            return t.state();
        }).length === self.items.length;
    });

    this.isPrevious = function (slide, slides) {
        return slides.indexOf(slide) > slides.indexOf(self);
    };

    this.isNext = function (slide, slides) {
        return slides.indexOf(slide) < slides.indexOf(self);
    };

    this.isCurrent = function (slide) {
        return self === slide;
    };
};
