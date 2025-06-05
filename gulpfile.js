const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function compile() {
	return src('index.scss')
		.pipe(sass())
		.pipe(dest('dest'));
}

function watchWorker() {
	watch(['index.scss'], compile);
}

exports.default = series(compile, watchWorker);
