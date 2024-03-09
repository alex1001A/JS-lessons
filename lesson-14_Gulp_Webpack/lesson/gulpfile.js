const {src, dest, watch, parallel} = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemap');

function Style() {
    return src('./src/scss/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(dest('./dist/css'));
}

function Js() {
    
}

function Html() {
    return src('./src/**/*.html')
    .pipe(dest('./dist'))
}

function Watcher() {
    watch('./src/scss/main.scss', Style)
    watch('./src/index.html', Html)
}

exports.default = parallel(Html, Style, Watcher)