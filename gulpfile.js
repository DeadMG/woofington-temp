const gulp = require('gulp');
const exec = require('child_process').exec;
const htmlreplace = require('gulp-html-replace');
const _ = require("underscore");
const fs = require('fs-extra');
const rename = require("gulp-rename");
const path = require("path");

gulp.task('clean', function () {
    // Deletes contents as well, like rm -rf
    fs.removeSync('./build');
});

gulp.task('default', ['build-typescript'], function () {
	const time = Date.now();
	
	const files = [
        "./node_modules/react/umd/react.development.js",
        "./node_modules/react-dom/umd/react-dom.development.js",
        "./node_modules/react-dom/umd/react-dom-server.browser.development.js",
        "./node_modules/react-dom/umd/react-dom-test-utils.development.js",
        "./node_modules/react-dom-factories/index.js",
        "./node_modules/react-transition-group/dist/react-transition-group.js",
        "./node_modules/redux/dist/redux.js",
        "./node_modules/react-redux/dist/react-redux.js",
		'build/typescript.js'
	];
		
	gulp.src(files)
	    .pipe(rename(function(path) {
			path.basename += "-" + time;
		}))
	    .pipe(gulp.dest('./build'));
	
    gulp.src('./index.html')
        .pipe(htmlreplace({ resources: _.map(files, file => path.basename(file, '.js') + "-" + time + path.extname(file)) }))
        .pipe(gulp.dest('./build'));
});

gulp.task('build-typescript', ['clean'], function (cb) {
    exec('"node_modules/.bin/tsc" --project tsconfig.json', function (err, stdout, stderr) {
        if (stdout) console.log(stdout);
        if (stderr) console.log(stderr);
        cb(err);
    });
});
