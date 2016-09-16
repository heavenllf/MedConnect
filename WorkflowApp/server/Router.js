var Setting = require('../server/Setting.js');

var BaseHandler = require('./handlers/BaseHandler.js');
var RequestHandler = require('./handlers/RequestHandler.js');

//Dispatch HTTP request
module.exports = function(app) {

	app.post(Setting.ROOT + 'RegisterActor', function(req, res) {
		RequestHandler.UserRegister('RegisterActor', req, res);
	});
	app.post(Setting.ROOT + 'LoginActor', function(req, res) {
		RequestHandler.UserLogin('LoginActor', req, res);
	});
	
    app.get('/',function(req,res){
        //check login
        res.redirect("views/index.html");
    })
	app.get('*', function(req, res) {
		BaseHandler.GeneralHandler(req, res);
	});
};