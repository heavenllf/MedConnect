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
	var params = req.query;

	//test code start
	// var patientList = [];
	// for (var i=0; i<1000; i++) {
	// 	var patient = {};
	// 	patient.name = 'ZhangSan_' + i;
	// 	patient.uid = patient.name;
	// 	patient.gender = 'Male';
	// 	patient.age = '1980-01-01';
	// 	patient.checktime = '2016-01-01';
	// 	patient.comment = 'good_' + i;
	// 	patientList.push(patient);

	// }
	// var result = {};
	// result.patients = patientList;

	// res.writeHead(200, {
	// 	"Content-Type": "text/html;charset=UTF-8"
	// });
	// res.write(JSON.stringify(result));
	// res.end();
	//test code end
	console.log(req.header('Host'));
	console.log(JSON.stringify(params));
	MysqlAccessor.QueryCheckList(params,res);
};
exports.QueryPatients = QueryPatients;

//-------------------------------------------------------------------

var CreateOneCheck = function(action, req, res) {
	var checkContent = req.body;
	console.log(JSON.stringify(checkContent));
	var params = {};
	params.user = req.body.applyInfo.order_username;
	params.phone = req.body.applyInfo.order_phone;
	params.birthday = req.body.applyInfo.order_birthday;
	params.doctorUID = req.body.doctorUID;
	params.content = checkContent;
	if(req.body.applyInfo.male) {
		params.gender = 'M';
	} else {
		params.gender = 'F';
	}

	MysqlAccessor.CreateOneCheck(params,res);
};
exports.CreateOneCheck = CreateOneCheck;

//-------------------------------------------------------------------

var UpdateOneCheck = function(action, req, res) {
	var params = {};
	params.checkUID = req.body.checkUID;
	params.checkContent = req.body;

	console.log('UpdateOneCheck' + JSON.stringify(params));
	MysqlAccessor.UpdateOneCheck(params,res);
};
exports.UpdateOneCheck = UpdateOneCheck;

//-------------------------------------------------------------------

var GetOneCheck = function(action, req, res) {
	var params = req.query;
	console.log('GetOneCheck' + JSON.stringify(params));
	MysqlAccessor.GetOneCheck(params,res);
};
exports.GetOneCheck = GetOneCheck;

//-------------------------------------------------------------------

var DeleteOneCheck = function(action, req, res) {
	var params = req.body;
	console.log('DeleteOneCheck' + JSON.stringify(params));
	MysqlAccessor.DeleteOneCheck(params,res);
};
exports.DeleteOneCheck = DeleteOneCheck;

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