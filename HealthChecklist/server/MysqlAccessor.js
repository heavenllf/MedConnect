var mysql = require('mysql');
var uuid = require('../node_modules/node-uuid/uuid');

// var testMysql = function(param, res) {
// 	var conn = mysql.createConnection({
// 		host: 'localhost',
// 		user: 'sa',
// 		password: '123456',
// 		database: 'zhenghe_db',
// 		port: 3306
// 	});
// 	conn.connect();
// 	var result = {};
// 	conn.query('SELECT REAL_NAME,PHONE_NUMBER FROM PATIENTTBL', function(err, rows, fields) {
// 		if (err) throw err;
// 		result['patient_name'] = rows[0].REAL_NAME;
// 		result['phone_number'] = rows[0].PHONE_NUMBER;
// 		// res.writeHead(200, {
// 		// 	"Content-Type": "text/html;charset=UTF-8"
// 		// });
// 		// res.write(JSON.stringify(result));
// 		// res.end();
// 		// conn.end();
// 	});
// };
// exports.testMysql = testMysql;

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

var QueryCheckList = function(params, res) {
	var mixAge = 0,
		maxAge = 1000;
	if (params.age === '0～10岁') {
		mixAge = 0;
		maxAge = 10;
	} else if (params.age === '11～20岁') {
		mixAge = 11;
		maxAge = 20;
	} else if (params.age === '21～30岁') {
		mixAge = 21;
		maxAge = 30;
	} else if (params.age === '31～40岁') {
		mixAge = 31;
		maxAge = 40;
	} else if (params.age === '41～50岁') {
		mixAge = 41;
		maxAge = 50;
	} else if (params.age === '51～60岁') {
		mixAge = 51;
		maxAge = 60;
	} else if (params.age === '61～70岁') {
		mixAge = 61;
		maxAge = 70;
	} else if (params.age === '71～  ') {
		mixAge = 71;
	} else {

	}

	var sql = '';
	if (params.patientName) {
		if (params.startTime && params.endTime) {
			sql = 'select p.REAL_NAME, p.GENDER, p.AGE, p.PATIENT_UID, c.EVALUATION_TIME, c.EVALUATION_UID from ' +
				' clinicalevaluatetbl as c, patienttbl as p, doctortbl as d, patientdoctorrelationtbl as dp where ' +
				'd.DOCTOR_UID = dp.DOCTOR_UID and dp.PATIENT_UID = p.PATIENT_UID and c.PATIENT_UID = p.PATIENT_UID  ' +
				' and d.DOCTOR_UID = "' + params.doctorUID + '" ' +
				' and p.REAL_NAME like "%' + params.patientName + '%" ' + 
				' and p.AGE >= ' + mixAge + ' and  p.AGE <= ' + maxAge +
				' and c.EVALUATION_TIME < "' + params.endTime + '" and c.EVALUATION_TIME > "' + params.startTime + '" ';
		} else {
			sql = 'select p.REAL_NAME, p.GENDER, p.AGE, p.PATIENT_UID, c.EVALUATION_TIME, c.EVALUATION_UID from ' +
				' clinicalevaluatetbl as c, patienttbl as p, doctortbl as d, patientdoctorrelationtbl as dp where ' +
				' d.DOCTOR_UID = dp.DOCTOR_UID and dp.PATIENT_UID = p.PATIENT_UID and c.PATIENT_UID = p.PATIENT_UID  ' +
				' and d.DOCTOR_UID = "' + params.doctorUID + '" ' +
				' and p.AGE >= ' + mixAge + ' and  p.AGE <= ' + maxAge +
				' and p.REAL_NAME like "%' + params.patientName + '%" ';
		}

	} else {
		if (params.startTime && params.endTime) {

			sql = 'select p.REAL_NAME, p.GENDER, p.AGE, p.PATIENT_UID, c.EVALUATION_TIME, c.EVALUATION_UID from ' +
				' clinicalevaluatetbl as c, patienttbl as p, doctortbl as d, patientdoctorrelationtbl as dp where ' +
				' d.DOCTOR_UID = dp.DOCTOR_UID and dp.PATIENT_UID = p.PATIENT_UID and c.PATIENT_UID = p.PATIENT_UID ' +
				' and d.DOCTOR_UID = "' + params.doctorUID + '" ' +
				' and p.AGE >= ' + mixAge + ' and  p.AGE <= ' + maxAge +
				' and c.EVALUATION_TIME < "' + params.endTime + '" and c.EVALUATION_TIME > "' + params.startTime + '" ';
		} else {
			sql = 'select p.REAL_NAME, p.GENDER, p.AGE, p.PATIENT_UID, c.EVALUATION_TIME, c.EVALUATION_UID from ' +
				' clinicalevaluatetbl as c,  patienttbl as p, doctortbl as d, patientdoctorrelationtbl as dp where ' +
				' d.DOCTOR_UID = dp.DOCTOR_UID and dp.PATIENT_UID = p.PATIENT_UID and c.PATIENT_UID = p.PATIENT_UID ' +
				' and p.AGE >= ' + mixAge + ' and  p.AGE <= ' + maxAge +
				' and d.DOCTOR_UID = "' + params.doctorUID + '" ';
		}

	}

	console.log(sql);
	var conn = GetConnection();
	var resultSet = [];
	conn.query(sql, function(err, rows, fields) {
		if (err) throw err;
		for (var i = 0; i < rows.length; i++) {
			var row = {};
			row['name'] = rows[i].REAL_NAME;
			row['gender'] = rows[i].GENDER;
			row['age'] = rows[i].AGE;
			row['checktime'] = rows[i].EVALUATION_TIME.Format("yyyy-MM-dd hh:mm:ss");
			row['checkuid'] = rows[i].EVALUATION_UID;
			row['patientuid'] = rows[i].PATIENT_UID;
			resultSet.push(row)
		}

		res.writeHead(200, {
			"Content-Type": "text/html;charset=UTF-8"
		});
		res.write(JSON.stringify({
			patients: resultSet
		}));
		res.end(function(err) {});
		conn.end();
	});
};

exports.QueryCheckList = QueryCheckList;

//---------------------------------------------------------------------------------------------

var CreateOneCheck = function(params, res) {
	var conn = GetConnection();

	var sqlQueryPatient = 'select PATIENT_UID  from patienttbl  where REAL_NAME = ?  and BIRTHDAY = ? ';
	var param = [params.user, params.birthday];
	var result = {};
	var conn = GetConnection();
	conn.query(sqlQueryPatient, param, function(err, rows, fields) {
		if (err) throw err;
		if (rows.length > 0) {
			console.log('have patient ');
			var patientUID = rows[0].PATIENT_UID;
			var createTime = new Date().Format("yyyy-MM-dd hh:mm:ss");
			var sqlInsertEvaluation = 'insert into clinicalevaluatetbl(EVALUATION_UID, PATIENT_UID, EVALUATION, EVALUATION_TIME) values(?, ?, ?, ?) ';
			var param = [uuid.v4(), patientUID, JSON.stringify(params.content), createTime];
			conn.query(sqlInsertEvaluation, param, function(err, result) {
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
		} else {
			var currentYear = (new Date()).getFullYear();
			var patientAge = currentYear - (new Date(params.birthday)).getFullYear();
			console.log('Age: ' + patientAge);
			var patientUID = uuid.v4();
			var sqlInsertPatient = 'insert into patienttbl(PATIENT_UID, REAL_NAME, GENDER, AGE, BIRTHDAY) values(?, ?, ?, ?, ?) ';
			var param = [patientUID, params.user, params.gender, patientAge, params.birthday];
			console.log('no patient ');
			conn.query(sqlInsertPatient, param, function(err, result) {
				if (err) throw err;

				var sqlRelation = 'insert into patientdoctorrelationtbl(DOCTOR_UID, PATIENT_UID, RELATION_TYPE) values(?, ?, ?) ';
				var param = [params.doctorUID, patientUID, 'C'];
				conn.query(sqlRelation, param, function(err, result) {
					if (err) throw err;

					var sqlInsertEvaluation = 'insert into clinicalevaluatetbl(EVALUATION_UID, PATIENT_UID, EVALUATION, EVALUATION_TIME) values(?, ?, ?, ?) ';
					var createTime = new Date().Format("yyyy-MM-dd hh:mm:ss");
					var param = [uuid.v4(), patientUID, JSON.stringify(params.content), createTime];
					conn.query(sqlInsertEvaluation, param, function(err, result) {
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
			});
		}
	});

};
exports.CreateOneCheck = CreateOneCheck;

//---------------------------------------------------------------------------------------------

var UpdateOneCheck = function(params, res) {
	var conn = GetConnection();
	var sql = 'update clinicalevaluatetbl set EVALUATION = ? where EVALUATION_UID = ? ';
	var param = [JSON.stringify(params.checkContent), params.checkUID];
	conn.query(sql, param, function(err, result) {
		if (err) throw err;

		res.writeHead(200, {
			"Content-Type": "text/html;charset=UTF-8"
		});
		res.write(JSON.stringify({success: true}));
		res.end(function(err){});
		conn.end();
	});
};
exports.UpdateOneCheck = UpdateOneCheck;

//---------------------------------------------------------------------------------------------

var GetOneCheck = function(params, res) {
	var sql = 'select EVALUATION  from clinicalevaluatetbl  where EVALUATION_UID = ? ';
	var param = [params.checkUID];
	var result = {};
	var conn = GetConnection();
	conn.query(sql, param, function(err, rows, fields) {
		if (err) throw err;
		if (rows.length > 0) {
			result.checkContent = rows[0].EVALUATION;
		}

		res.writeHead(200, {
			"Content-Type": "text/html;charset=UTF-8"
		});
		res.write(JSON.stringify(result));
		res.end();
		conn.end();
		console.log(result);
	});
};
exports.GetOneCheck = GetOneCheck;

//---------------------------------------------------------------------------------------------

var DeleteOneCheck = function(params, res) {
	var conn = GetConnection();
	var sql = 'delete from clinicalevaluatetbl where EVALUATION_UID = ? ';
	var param = [params.checkUID];
	conn.query(sql, param, function(err, result) {
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
};
exports.DeleteOneCheck = DeleteOneCheck;

//---------------------------------------------------------------------------------------------

var CreatePatientInfo = function(params, res) {

};
exports.CreatePatientInfo = CreatePatientInfo;

//---------------------------------------------------------------------------------------------

var UpdatePatientInfo = function(params, res) {

};
exports.UpdatePatientInfo = UpdatePatientInfo;

//---------------------------------------------------------------------------------------------

var DeletePatientInfo = function(params, res) {

};
exports.DeletePatientInfo = DeletePatientInfo;

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