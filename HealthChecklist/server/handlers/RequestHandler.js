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

var QueryPatients = function(action, req, res) {
	var params = JSON.stringify(req.query);

	//test code start
	var patientList = [];
	for (var i=0; i<1000; i++) {
		var patient = {};
		patient.name = 'ZhangSan_' + i;
		patient.gender = 'Male';
		patient.age = '1980-01-01';
		patient.checktime = '2016-01-01';
		patient.comment = 'good_' + i;
		patientList.push(patient);

	}
	var result = {};
	result.patients = patientList;

	res.writeHead(200, {
		"Content-Type": "text/html;charset=UTF-8"
	});
	res.write(JSON.stringify(result));
	res.end();
	//test code end

	// MysqlAccessor.QueryCheckList(params,res);
};
exports.QueryPatients = QueryPatients;

//-------------------------------------------------------------------

var CreateOneCheck = function(action, req, res) {
	var checkContent = JSON.stringify(req.body);
	console.log(checkContent);
	req.body.applyInfo.order_username;
	req.body.applyInfo.order_phone;
	req.body.applyInfo.order_birthday;
	req.body.applyInfo.male;
	req.body.applyInfo.female;
	// var param = {};
	// param.checkuid = '0001';
	// param.patientuid = '0001';
	// param.checkcontent = '{"bla":"bla" }';
	// param.checktime = '2016-01-01';
	// MysqlAccessor.CreateOneCheck(param,res);
};
exports.CreateOneCheck = CreateOneCheck;

//-------------------------------------------------------------------

var UpdateOneCheck = function(action, req, res) {
	var params = JSON.stringify(req.body);
};
exports.UpdateOneCheck = UpdateOneCheck;

//-------------------------------------------------------------------

var GetOneCheck = function(action, req, res) {
	var params = JSON.stringify(req.query);
};
exports.GetOneCheck = GetOneCheck;

//-------------------------------------------------------------------

var DeleteOneCheck = function(action, req, res) {
	var params = JSON.stringify(req.body);
};
exports.DeleteOneCheck = DeleteOneCheck;

//-------------------------------------------------------------------

var UserRegister = function(action, req, res) {
	var params = JSON.stringify(req.body);
	MysqlAccessor.UserInfoRegister(params,res);
	console.log('UserRegister: ' + params);
};
exports.UserRegister = UserRegister;