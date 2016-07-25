var Setting = require('../config/Setting.js');

var BaseHandler = require('../services/handlers/BaseHandler.js');
var RequestHandler = require('../services/handlers/RequestHandler.js');

//Dispatch HTTP request
module.exports = function(app){

	app.get(Setting.ROOT + 'SampleActor', function(req, res){ RequestHandler.GetRequestHandler('SampleActor',req, res); });
	app.post(Setting.ROOT + 'SampleActor', function(req, res){ RequestHandler.PostRequestHandler('SampleActor',req, res); });
	app.post(Setting.ROOT + 'PatientLoginActor', function(req, res){ RequestHandler.PostRequestHandler('PatientLoginActor',req, res); });
	app.post(Setting.ROOT + 'PatientRegisterActor', function(req, res){ RequestHandler.PostRequestHandler('PatientRegisterActor',req, res); });
	app.post(Setting.ROOT + 'VerfyCodeActor', function(req, res){ RequestHandler.VerifyCodeRequestHandler('VerfyCodeActor',req, res); });

	app.get('*', function(req, res){ BaseHandler.GeneralHandler(req, res); });
};
