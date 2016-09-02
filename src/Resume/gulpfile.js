/// <binding AfterBuild='moveToOut' />
var gulp = require('gulp'),
    rimraf = require("rimraf"),
    concat = require("gulp-concat"),
    cssmin = require("gulp-cssmin"),
    uglify = require("gulp-uglify");

var webroot = "./wwwroot/";

var paths = {
    js: webroot + "js/**/*.js",
    minJs: webroot + "js/**/*.min.js",
    css: webroot + "css/**/*.css",
    minCss: webroot + "css/**/*.min.css",
    concatJsDest: webroot + "js/site.min.js",
    concatCssDest: webroot + "css/site.min.css"
};

gulp.task("clean:js", function (cb) {
    rimraf(paths.concatJsDest, cb);
});

gulp.task("clean:css", function (cb) {
    rimraf(paths.concatCssDest, cb);
});

gulp.task("clean", ["clean:js", "clean:css"]);

gulp.task("min:js", function () {
    return gulp.src([paths.js, "!" + paths.minJs], { base: "." })
        .pipe(concat(paths.concatJsDest))
        .pipe(uglify())
        .pipe(gulp.dest("."));
});

gulp.task("min:css", function () {
    return gulp.src([paths.css, "!" + paths.minCss])
        .pipe(concat(paths.concatCssDest))
        .pipe(cssmin())
        .pipe(gulp.dest("."));
});

gulp.task("min", ["min:js", "min:css"]);

gulp.task('moveToOut', function (done) {
    gulp.src([
      'node_modules/angular2/bundles/js',
      'node_modules/angular2/bundles/angular2.*.js*',
      'node_modules/angular2/bundles/angular2-polyfills.js',
      'node_modules/angular2/bundles/http.*.js*',
      'node_modules/angular2/bundles/router.*.js*',
      'node_modules/es6-shim/es6-shim.min.js*',
      'node_modules/angular2/es6/dev/src/testing/shims_for_IE.js',
      'node_modules/systemjs/dist/*.*',
      'node_modules/jquery/dist/jquery.*js',
      'node_modules/bootstrap/dist/js/bootstrap*.js',
      'node_modules/rxjs/bundles/Rx.js',
      'node_modules/jasmine-core/lib/jasmine-core/jasmine.js',
      'node_modules/jasmine-core/lib/jasmine-core/boot.js',
      'node_modules/jasmine-core/lib/jasmine-core/jasmine-html.js',      
    ]).pipe(gulp.dest('./wwwroot/libs/'));

    gulp.src([
      'node_modules/bootstrap/dist/css/bootstrap.*css',
      'node_modules/jasmine-core/lib/jasmine-core/jasmine.css'
    ]).pipe(gulp.dest('./wwwroot/libs/css'));

    gulp.src([
      'node_modules/bootstrap/dist/fonts/*.*'
    ]).pipe(gulp.dest('./wwwroot/libs/fonts'));

    gulp.src([
      'Build/**/*.js',
      'Build/**/*.js.map'
    ]).pipe(gulp.dest('./wwwroot/js/app/'));

    gulp.src([
      'Scripts/**/*.ts'
    ]).pipe(gulp.dest('./wwwroot/js/Scripts/'));
});