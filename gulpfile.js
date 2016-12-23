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

gulp.task('serve', ['typescript'], function() {

    gulp.watch('server/src/**/*.ts', ['typescript']);

    nodemon({
        // the script to run the app
        script: './server/dist/server.js',
        tasks: ['default'],
        ext: 'ts json', //den vazw ext: ts json .js gt exoume ts isws gia json to xreiastoume alla 9a exei confict me to serverAssets 9a dw.
        ignore: ['public/', 'build/', 'frontend/', 'gulpfile.js', 'package.json', 'tsconfig.json']
    }).on('restart', function() {
        // when the app has restarted, run livereload.
        gulp.src('./server/dist/server.js')
            .pipe(livereload())
            .pipe(notify('Server restarted, reloading page...'));
    });
});
