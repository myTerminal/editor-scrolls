var viewmodel = null;

$(document).ready(function () {
    viewmodel = new Viewmodel();
    ko.applyBindings(viewmodel);

    $("body").on("keydown", function (e) {
        if (viewmodel.mode() === GameModes.title) {
            viewmodel.mode(GameModes.menu);
            return;
        }

        if (e.keyCode === 40) {
            if (viewmodel.isLevelComplete()) {
                viewmodel.reset();
            } else {
                viewmodel.moveToNext();
            }
        }
    });
});
