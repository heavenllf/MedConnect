
function sendToServerImp(method, url, data) {
	var xhr = new XMLHttpRequest();
	xhr.open(method,url);
	xhr.setRequestHeader("Content-Type","application/json;charset=UTF-8");
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4 && xhr.status === 200) {
			var type = xhr.getResponseHeader("Content-Type");
			var content = xhr.responseText;
			var output = document.getElementById("result");
			output.innerHTML = content;
		}
	}
	xhr.send(data);
}

function objectToParamStr(data) {
	if (typeof(data) !== 'object') {
		return null;
	}

	var arr = [];
	for (i in data) {
		var param = i.toString();
		param += '=';
		param += data[i].toString();
		arr.push(param);
	}
	return arr.join('&');
}

function getFromServer(action,data) {
	var method = 'GET';
	var url = '/index/';
	url += action;
	url += '?';
	url += objectToParamStr(data);
	sendToServerImp(method, url, null);
}

function postToServer(action,data) {
	var method = 'POST';
	var url = '/index/';
	url += action;
	sendToServerImp(method, url, JSON.stringify(data));
}

function getFromServerSample() {
	var data = {method:'GET', result:'This is get method'};
	getFromServer('SampleActor',data);
}

function postToServerSample() {
	var data = {method:'POST', result:'This is post method'};
	postToServer('SampleActor',data);
}

function patientLogin() {
	var data = {User:'13681515669',PassWord:'12345678'};
	postToServer('PatientLoginActor',data);
}

function patientRegister() {
	var data = {User:'13681515669',PhoneNumber:'13681515669',PassWord:'12345678',VerifyCode:'123456',InviteCode:'123456'};
	postToServer('PatientRegisterActor',data);
}

function sendVerifyCode() {
	var data = {User:'13681515669',PhoneNumber:'13681515669',VerifyCode:'123456'};
	postToServer('VerfyCodeActor',data);
}