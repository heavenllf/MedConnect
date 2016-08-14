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

var QueryCheckList = function (params, res) {

	var sql = '';
	if(params.IsNameQuery) {
		sql = 'select p.REAL_NAME, p.GENDER, p.AGE, p.PATIENT_UID, c.EVALUATION_TIME, c.EVALUATION_UID from ' + 
			  ' clinicalevaluatetbl as c, patienttbl as p where c.PATIENT_UID = p.PATIENT_UID and ' +
			  ' p.REAL_NAME like "%' + params.patientName + "%" ;
	} else {
		if (params.Age === '') {

		} else if(params.Age === '') {

		} else {

		}

		sql = 'select p.REAL_NAME, p.GENDER, p.AGE, p.PATIENT_UID, c.EVALUATION_TIME, c.EVALUATION_UID from ' + 
			  ' clinicalevaluatetbl as c, patienttbl as p where c.PATIENT_UID = p.PATIENT_UID and ' +
			  ' c.EVALUATION_TIME < ' + params.endTime + ' and c.EVALUATION_TIME > ' + params.startTime ;
	}  

	var conn = GetConnection();
	var resultSet = [];
	conn.query(sql, function(err, rows, fields) {
		if (err) throw err;
		for (var i=0; i<rows.length; i++) {
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
	var sql = 'insert into clinicalevaluatetbl(EVALUATION_UID, PATIENT_UID, EVALUATION, EVALUATION_TIME) values(?, ?, ?, ?) ';
	var param = [params.checkuid, params.patientuid, params.checkcontent,params.checktime];
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
exports.CreateOneCheck = CreateOneCheck;

//---------------------------------------------------------------------------------------------

var UpdateOneCheck = function(params, res) {
	var conn = GetConnection();
	var sql = 'update clinicalevaluatetbl set EVALUATION = ? where EVALUATION_UID = ? ';
	var param = [params.checkcontent,params.checkuid];
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
		result['checkcontent'] = rows[0].EVALUATION;
		// res.writeHead(200, {
		// 	"Content-Type": "text/html;charset=UTF-8"
		// });
		// res.write(JSON.stringify(result));
		// res.end();
		// conn.end();
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
		
		// res.writeHead(200, {
		// 	"Content-Type": "text/html;charset=UTF-8"
		// });
		// res.write(JSON.stringify({result:result}));
		// res.end(function(err){});
		// conn.end();
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

};
exports.UserInfoRegister = UserInfoRegister;

//---------------------------------------------------------------------------------------------

var UserLogin = function(params, res) {
	console.log(uuid.v4());
};
exports.UserLogin = UserLogin;

//---------------------------------------------------------------------------------------------