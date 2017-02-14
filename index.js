/* global module require __dirname */

module.exports = function (url) {
    var appName = "editor-scrolls",
        path = require("path"),
        express = require("express"),
        app = express(),
        bodyParser = require("body-parser"),
        fs = require("fs");

    app.use(express.static(path.join(__dirname, 'public')));
    app.use(bodyParser.json());

    app.listen(url, function () {
        console.log(appName, "started on", url);
    });
};
