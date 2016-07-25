 
module.exports = { 
    //PORT
    PORT        : '8888',
    //web folder
    ROOT        : '/views/',
	//session time (Milliseconds)
	EXPIRES		: 20 * 60 * 1000,
	// AUTHENTICATE (digest/ticket)
	AUTHENTICATE: "digest",
	// app name
    COOKIE:'',
    //default log home
    LOG_HOME: 'C:/NodeServer',
    //default log level
    LOG_LEVEL: 'info',
};