var gulp = require('gulp'),
    plugins = require("gulp-load-plugins")()
;

var config = {
    ts: [
        'app/**/*.ts',
        '!app/bower_components/**/*.ts',
        'typings/tsd.d.ts'
    ],
    templates: [
        'app/**/*.html'
    ],
    typings: [
    ],
    styles: ['app/components/**/*.scss']
};

gulp.task('default', ['tpl', 'ts', 'styles']);

gulp.task("ts", function () {
    return gulp.src(config.ts)
        .pipe(plugins.tsc({
            "module": "umd",
            target: "ES5",
            noImplicitAny: true,
            experimentalDecorators: true,
            sourceMap: true,
            out: "app.compiled.js"
        }))
        .pipe(gulp.dest("app/"));
});

gulp.task("tpl", function () {
    return gulp.src(config.templates)
        .pipe(plugins.angularTemplatecache({
            filename: "app.templates.js",
            module: "ng-components.templates",
            standalone: true,
            root: "app"
        }))
        .pipe(gulp.dest('app/'));
});

gulp.task('styles', function () {
    return gulp.src(config.styles)
        .pipe(plugins.sass({ onError: function (e) { console.error(e); } }))
        // Optionally add autoprefixer
        .pipe(plugins.autoprefixer("last 2 versions", "> 1%", "ie 8"))
        .pipe(plugins.concat("components.css"))
        .pipe(gulp.dest('app/styles'));
});

gulp.task('watch', function (cb) {
    gulp.watch(config.styles, ['styles'], function(){
        gulp.run(['styles']);
    });

    gulp.watch(config.templates, ['tpl'], function(){
        gulp.run(['tpl']);
    });

    gulp.watch(config.ts, ['ts'], function(){
        gulp.run(['ts']);
    });
});
