var Utility = require('../Utility.js');
var Setting = require('../Setting.js');
var Log = require('../Logger').getLogger();
var MysqlAccessor = require('../MysqlAccessor.js');

//-------------------------------------------------------------------
var GetRequestHandler = function(action, req, res) {
	//Log.info("Response to " + action);

	var param = JSON.stringify(req.query);
	RequestHandlerImp(action, param, res);
};
exports.GetRequestHandler = GetRequestHandler;

//-------------------------------------------------------------------
var PostRequestHandler = function(action, req, res) {
	//Log.info("Response to " + action);

	var param = JSON.stringify(req.body);
	RequestHandlerImp(action, param, res);
};
exports.PostRequestHandler = PostRequestHandler;


//-------------------------------------------------------------------
var VerifyCodeRequestHandler = function(action, req, res) {
	var code = "";
	for (var i = 0; i < 6; i++) {
		code += Math.floor(Math.random() * 10);
	}
	var phone = req.body.PhoneNumber;
	Utility.SendVerifyCode(code, phone);

	code = '123456';//for test
	req.body.VerifyCode = code;
	var param = JSON.stringify(req.body);
	RequestHandlerImp(action, param, res);
};
exports.VerifyCodeRequestHandler = VerifyCodeRequestHandler;


//-------------------------------------------------------------------

var UserRegister = function(action, req, res) {
	var params = req.body;
	MysqlAccessor.UserInfoRegister(params,res);
	console.log('UserRegister: ' + JSON.stringify(params));
};
exports.UserRegister = UserRegister;

//-------------------------------------------------------------------

var UserLogin = function(action, req, res) {
	var params = req.body;
	MysqlAccessor.UserLogin(params,res);
	console.log('UserLogin: ' + JSON.stringify(params));
};
exports.UserLogin = UserLogin;