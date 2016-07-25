
"use strict";

var Setting = require('../config/Setting.js');
var Path 	= require('path');
var Log4js = require('log4js');
var fs = require('fs');
var logger = {
	logger: null,
	
	getLogger: function (/*String*/ categoryName) {
		return this.logger;
	},

	//------------------------------------------------------------
	initLogConfig: function(/*String*/ logHome, /*String*/ logLevel) {
	    if(!fs.existsSync(logHome)){
	        fs.mkdirSync(logHome);
	    }
		var logPath = Path.join(logHome,Setting.APPNAME+"Node_"+Setting.USER);
		var logLevel = logLevel;
		var configure = {
			appenders: [{
				level: logLevel,
				category: "server", 
				type: "dateFile", 
				filename: logPath,
				pattern: "_yyyyMMdd.log",
				alwaysIncludePattern: true, 
				layout: {
					type: 'pattern',
					pattern: "[%d] [%5.5p] %c - %m"
				}
			}, {
				type: "console",
				layout: {
					type: 'pattern',
					pattern: "[%d] [%[%5.5p%]] %c - %m"
				}
			}],
			replaceConsole: false // replace console.log file
		};
		Log4js.clearAppenders();
		Log4js.configure(configure);
		this.logger = Log4js.getLogger('server');
		this.logger.debug('Logger file: ' + logPath +' | logger level: ' + logLevel);
	}
};
module.exports = logger;