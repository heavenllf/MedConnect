var mysql = require('mysql');
var uuid = require('../node_modules/node-uuid/uuid');

//---------------------------------------------------------------------------------------------

var GetConnection = function() {
	var conn = mysql.createConnection({
		host: 'localhost',
		user: 'sa',
		password: '123456',
		database: 'zhenghe_db',
		port: 3306
	});
	conn.connect();

	return conn;
};



//---------------------------------------------------------------------------------------------

var UserInfoRegister = function(params, res) {
	var conn = GetConnection();
	var sqlQuery = 'select * from systemusertbl where USER_NAME = "' + params.Username + '" ';
	conn.query(sqlQuery, function(err, rows, fields) {
		if (err) throw err;
		if (rows.length > 0) {
			res.writeHead(200, {
				"Content-Type": "text/html;charset=UTF-8"
			});
			res.write(JSON.stringify({
				success: false
			}));
			res.end(function(err) {});
			conn.end();
			return;
		} else {
			var sqlInsertDoctor = 'insert into doctortbl(DOCTOR_UID, REAL_NAME, E_MAIL) values(?, ?, ?) ';
			var doctorUID = uuid.v4();
			var param = [doctorUID, params.Username, params.Email];
			conn.query(sqlInsertDoctor, param, function(err, result) {
				if (err) throw err;

				var sqlInsert = 'insert into systemusertbl(USER_UID, USER_NAME, PASSWORD, PHONE_NUMBER, E_MAIL, TYPE, PATIENT_UID, DOCTOR_UID) values(?, ?, ?, ?, ?, ?, ?, ?) ';
				var param = [uuid.v4(), params.Username, params.Password, '', params.Email, 'p', '', doctorUID];
				conn.query(sqlInsert, param, function(err, result) {
					if (err) throw err;

					res.writeHead(200, {
						"Content-Type": "text/html;charset=UTF-8"
					});
					res.write(JSON.stringify({
						success: true
					}));
					res.end(function(err) {});
					conn.end();
				});
			});
		}
	});
};
exports.UserInfoRegister = UserInfoRegister;

//---------------------------------------------------------------------------------------------


var UserLogin = function(params, res) {
	console.log(new Date().Format("yyyy-MM-dd hh:mm:ss"));
	var conn = GetConnection();
	var sql = 'select USER_NAME,PASSWORD,USER_UID,DOCTOR_UID from systemusertbl where USER_NAME = "' + params.Username + '" ';
	conn.query(sql, function(err, rows, fields) {
		if (err) throw err;
		res.writeHead(200, {
			"Content-Type": "text/html;charset=UTF-8"
		});
		if (rows.length > 0) {
			if (params.Password === rows[0].PASSWORD) {

				res.write(JSON.stringify({
					success: true,
					userUID: rows[0].USER_UID,
					doctorUID: rows[0].DOCTOR_UID
				}));
				console.log('UserLogin: success!');
			} else {

				res.write(JSON.stringify({
					success: false,
					message: '密码错误！'
				}));
				console.log('UserLogin: failed!');
			}
		} else {
			res.write(JSON.stringify({
				success: false,
				message: '您输入的用户不存在！'
			}));
			console.log('UserLogin: failed!');
		}
		res.end(function(err) {});
		conn.end();
	});
};
exports.UserLogin = UserLogin;

//---------------------------------------------------------------------------------------------