var gulp = require('gulp'),
    pluginsFactory = require("gulp-load-plugins"),
    plugins = pluginsFactory()
;

var config = {
    app: {
        src: [
            'app/**/*.ts',
            '!app/bower_components/**/*.ts'
        ],
        templates: [
            'app/**/*.html'
        ],
        typings: [
            'typings/tsd.d.ts'
        ]
    }
};

gulp.task('default', ['tpl', 'ts']);

function makeTypescriptSources(sources) {
    return sources.map(function (item) {
        return item.replace(".js", ".ts");
    });
}

gulp.task("ts", function () {
    return gulp.src(makeTypescriptSources(config.app.src).concat(config.app.typings))
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
    return gulp.src(config.app.templates)
        .pipe(plugins.angularTemplatecache({
            filename: "app.templates.js",
            module: "ng-components.templates",
            standalone: true,
            root: "app"
        }))
        .pipe(gulp.dest('app/'));
});