module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        sass: {
            dist: {
                files: {
                    "styles/styles.css": "styles/styles.scss"
                }
            }
        },
        watch: {
            css: {
                files: "styles/**/*.scss",
                tasks: ["sass"]
            }
        }
    });

    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-sass");

    grunt.registerTask("default", ["build"]);
    grunt.registerTask("build", ["sass"]);
    grunt.registerTask("develop", ["watch"]);
};
