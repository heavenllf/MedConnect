var mysql = require('mysql');
var uuid = require('../node_modules/node-uuid/uuid');

var testMysql = function(param, res) {
	var conn = mysql.createConnection({
		host: 'localhost',
		user: 'sa',
		password: '123456',
		database: 'zhenghe_db',
		port: 3306
	});
	conn.connect();
	var result = {};
	conn.query('SELECT REAL_NAME,PHONE_NUMBER FROM PATIENTTBL', function(err, rows, fields) {
		if (err) throw err;
		result['patient_name'] = rows[0].REAL_NAME;
		result['phone_number'] = rows[0].PHONE_NUMBER;
		// res.writeHead(200, {
		// 	"Content-Type": "text/html;charset=UTF-8"
		// });
		// res.write(JSON.stringify(result));
		// res.end();
		// conn.end();
	});
};
exports.testMysql = testMysql;

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

	var sql = '';
	if (params.IsNameQuery) {
		sql = 'select p.REAL_NAME, p.GENDER, p.AGE, p.PATIENT_UID, c.EVALUATION_TIME, c.EVALUATION_UID from ' +
			' clinicalevaluatetbl as c, patienttbl as p where c.PATIENT_UID = p.PATIENT_UID and ' +
			' p.REAL_NAME like "%' + params.patientName + "%";
	} else {
		if (params.Age === '') {

		} else if (params.Age === '') {

		} else {

		}

		sql = 'select p.REAL_NAME, p.GENDER, p.AGE, p.PATIENT_UID, c.EVALUATION_TIME, c.EVALUATION_UID from ' +
			' clinicalevaluatetbl as c, patienttbl as p where c.PATIENT_UID = p.PATIENT_UID and ' +
			' c.EVALUATION_TIME < ' + params.endTime + ' and c.EVALUATION_TIME > ' + params.startTime;
	}

	var conn = GetConnection();
	var resultSet = [];
	conn.query(sql, function(err, rows, fields) {
		if (err) throw err;
		for (var i = 0; i < rows.length; i++) {
			var row;
			row['name'] = rows[i].REAL_NAME;
			row['gender'] = rows[i].GENDER;
			row['age'] = rows[i].AGE;
			row['checktime'] = rows[i].PHONE_NUMBER;
			row['checkuid'] = rows[i].EVALUATION_UID;
			row['patientuid'] = rows[i].PATIENT_UID;
			resultSet.push(row)
		}

		// res.writeHead(200, {
		// 	"Content-Type": "text/html;charset=UTF-8"
		// });
		// res.write(JSON.stringify({patients:resultSet}));
		// res.end(function(err){});
		// conn.end();
	});
};

exports.QueryCheckList = QueryCheckList;

//---------------------------------------------------------------------------------------------

var CreateOneCheck = function(params, res) {
	var conn = GetConnection();

	var sqlQueryPatient = 'select PATIENT_UID  from patienttbl  where REAL_NAME = ?  and GENDER = ? ';
	var param = [params.user, params.gender];
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
			var patientUID = uuid.v4();
			var sqlInsertPatient = 'insert into patienttbl(PATIENT_UID, REAL_NAME,  GENDER) values(?, ?, ?) ';
			var param = [patientUID, params.user,  params.gender];
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
	var param = [params.checkcontent, params.checkuid];
	conn.query(sql, param, function(err, result) {
		if (err) throw err;

		// res.writeHead(200, {
		// 	"Content-Type": "text/html;charset=UTF-8"
		// });
		// res.write(JSON.stringify({result:result}));
		// res.end(function(err){});
		// conn.end();
	});
};
exports.UpdateOneCheck = UpdateOneCheck;

//---------------------------------------------------------------------------------------------

var GetOneCheck = function(params, res) {
	var sql = 'select EVALUATION  from clinicalevaluatetbl  where EVALUATION_UID = ? ';
	var param = [params.checkuid];
	var result = {};
	var conn = GetConnection();
	conn.query(sql, param, function(err, rows, fields) {
		if (err) throw err;
		if (rows.length > 0) {
			result['checkcontent'] = rows[0].EVALUATION;
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
	var param = [params.checkuid];
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
					success: false
				}));
				console.log('UserLogin: failed!');
			}
		} else {
			res.write(JSON.stringify({
				success: false
			}));
			console.log('UserLogin: failed!');
		}
		res.end(function(err) {});
		conn.end();
	});
};
exports.UserLogin = UserLogin;

//---------------------------------------------------------------------------------------------