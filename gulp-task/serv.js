const browserSync = require('browser-sync').create();

const serv = () => {
	browserSync.init({
		server: {
			baseDir: "./"
		},
		// browser: "fireFox", браузер по умолчанию
	});
};
exports.serv = serv;
exports.bs = browserSync;