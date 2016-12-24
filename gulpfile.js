'use strict';

var gulp = require("gulp");
var clean = require('gulp-clean');
var notify = require('gulp-notify');
var ts = require("gulp-typescript");
var livereload = require('gulp-livereload');
// var connect = require('gulp-connect');
var nodemon = require("gulp-nodemon");
var runSequence = require('run-sequence');
var merge = require('merge2');

var tsProject = ts.createProject("tsconfig.json");

gulp.task('clean', function() {
    return gulp.src('server/dist', { read: false })
        .pipe(clean());
});

gulp.task('build', function() {
    return tsProject.src()
        .pipe(tsProject())
        .js.pipe(gulp.dest("server/dist"));
});

gulp.task('default', function(callback) {
    runSequence('clean', 'build', callback);
});

gulp.task('watch', ['default'], function() {
    gulp.watch('server/src/*.ts', ['build']);
});

gulp.task('serve', ['default'], function() {

    //gulp.watch('server/src/**/*.ts', ['build']);

    livereload.listen();

    // connect.server({
    //     livereload: true
    // });

    nodemon({
        script: './server/dist/server.js',
        tasks: ['build'],
        ext: 'ts json', //den vazw ext: ts json .js gt exoume ts isws gia json to xreiastoume alla 9a exei confict me to serverAssets 9a dw.
        ignore: ['server/dist/**/*.js', 'public/', 'build/', 'frontend/', 'gulpfile.js', 'package.json', 'tsconfig.json']
    }).on('restart', function() {
        // when the app has restarted, run livereload.
        // console.log('-------- restarted -------')
        setTimeout(function() {
            gulp.src(['server/dist/server.js'])
                // .pipe(connect.reload())
                .pipe(livereload())
                .pipe(notify('Server restarted, reloading page...'));
        }, 1000);
        // gulp.src(['server/dist/server.js'])
        //     // .pipe(connect.reload())
        //     .pipe(livereload())
        //     .pipe(notify('Server restarted, reloading page...'));
    });
    // .on('start', function() { console.log('======= start event =======') });
});
