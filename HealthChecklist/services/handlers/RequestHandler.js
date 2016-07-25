var Utility = require('../../common/Utility.js');
var Setting = require('../../config/Setting.js');
var Log = require('../../common/Logger').getLogger();

//-------------------------------------------------------------------
function RequestHandlerImp(action, param, res) {
	var result = "";
	try {
		// result = Utility.NodePluginProxy.RequestDealer(
		// 	action,
		// 	param,
		// 	function(result) {
		// 		res.writeHead(200, {
		// 			"Content-Type": "text/html;charset=UTF-8"
		// 		});
		// 		res.write(result);
		// 		res.end();
		// 	}
		// );
	} catch (err) {
		Log.error(err.stack);
	}
}

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