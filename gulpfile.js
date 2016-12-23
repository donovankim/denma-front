'use strict';

var gulp = require("gulp");
var ts = require("gulp-typescript");
var merge = require('merge2');

var tsProject = ts.createProject("tsconfig.json");

gulp.task("default", function() {
    return tsProject.src()
        .pipe(tsProject())
        .js.pipe(gulp.dest("server/dist"));
});

gulp.task('watch', ['default'], function() {
    gulp.watch('server/src/*.ts', ['default']);
});

gulp.task('serve', ['typescript'], function () {

    gulp.watch('./**/*.ts', ['typescript']);

    nodemon({
        script: 'server/dist/server.js',
        ext: 'js',
    }).on('restart', function () {
        setTimeout(function () {
            console.log("reload!");
            livereload.reload();
        }, 500);
    });

});
