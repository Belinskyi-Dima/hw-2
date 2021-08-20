const {parallel, series} = require('gulp');
const {serv} = require("./gulp-task/serv.js");
const {watcher} = require("./gulp-task/watch.js");
const {scripts} = require("./gulp-task/scripts.js");
const {styles} = require("./gulp-task/styles.js");
const { images } = require("./gulp-tasks/images.js");



exports.default = parallel(serv, watcher, series(styles, scripts, images));
// exports.styles = styles;