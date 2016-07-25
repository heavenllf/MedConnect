var Setting = require('../server/Setting.js');

var BaseHandler = require('./handlers/BaseHandler.js');
var RequestHandler = require('./handlers/RequestHandler.js');

//Dispatch HTTP request
module.exports = function(app){

	app.get(Setting.ROOT + 'QueryPatientsActor', function(req, res){ RequestHandler.QueryPatients('QueryPatientsActor',req, res); });
	app.get(Setting.ROOT + 'GetOneCheckActor', function(req, res){ RequestHandler.QueryPatients('GetOneCheckActor',req, res); });
	app.post(Setting.ROOT + 'CreateOneCheckActor', function(req, res){ RequestHandler.CreateOneCheckActor('CreateOneCheckActor',req, res); });
	app.post(Setting.ROOT + 'UpdateOneCheckActor', function(req, res){ RequestHandler.UpdateOneCheck('UpdateOneCheckActor',req, res); });
	app.post(Setting.ROOT + 'DeleteOneCheckActor', function(req, res){ RequestHandler.DeleteOneCheck('DeleteOneCheckActor',req, res); });

	app.get('*', function(req, res){ BaseHandler.GeneralHandler(req, res); });
};