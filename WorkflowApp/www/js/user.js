
var loading = false;
var isvalidcode=false;
function login() {
    if (loading == false) {
        var userName = $("#userName").val();
        var password = $("#password").val();
        var flag = $("#rememberMe").is(':checked');
//    alert("userName = " + userName + ", password = " + password +", flag = " + flag);

        if (userName == undefined || userName == null || userName == "") {
            alert("请输入用户名!");
            return;
        }

        if (password == undefined || password == null || password == "") {
            alert("请输入密码!");
            return;
        }

        var localStorage = window.localStorage;
        localStorage.setItem("flag", flag);
        if (flag) {
            // 记住用户
            localStorage.setItem("userName", userName);
            localStorage.setItem("password", password);
        } else {
            // 清除用户
            localStorage.removeItem("userName");
            localStorage.removeItem("password");
        }
        var requestdata={"userName":userName,"password":password};
        $.mobile.loading("show", {text: "正在登录...", textVisible: true});
        $.ajax({
            //url: global.WEBSITE + "/PatientLoginActor?userName=" + userName + "&password=" + password,
			url: global.WEBSITE + "/PatientLoginActor",
            dataType: "json",
            type: "post",
			contextType: "application/json; charset=utf-8",
			data: requestdata,
            success: function (data) {
                if (data == "success") {
//                $.mobile.changePage("main.html");
                    window.location.href = "main.html";
					loading = true;
                } else {
                    $().toastmessage('showToast', {
                        text: '登录失败！',
                        sticky: false,
                        position: 'middle-center',
                        type: 'error'
                    });
                }

                $.mobile.loading("hide");
                loading = false;
            },
            error: function () {
                $().toastmessage('showToast', {
                    text: '访问服务器错误！',
                    sticky: false,
                    position: 'middle-center',
                    type: 'error'
                });
                $.mobile.loading("hide");
                loading = false;
            }
        });
    }

}

function logout() {
    if (confirm("确认退出？")) {
        window.location.href = "main.html";
        $.ajax({
            url: global.WEBSITE + "user/logout",
            dataType: "json",
            type: "post",
			contextType: "application/json; charset=utf-8",
            success: function (data) {
                if (data == "success") {
                    $().toastmessage('showToast', {
                        text: '成功退出！',
                        sticky: false,
                        position: 'middle-center',
                        type: 'success'
                    });
                }
            },
            error: function () {
                $().toastmessage('showToast', {
                    text: '访问服务器错误！',
                    sticky: false,
                    position: 'middle-center',
                    type: 'error'
                });
            }
        });
    }

}
function register() {
        var phoneNumber = $("#inputphonenumber").val();
        var pwd = $("#inputpwd").val();
        var code = $("#validatecode").val();
        if (phoneNumber == undefined || phoneNumber == null || phoneNumber == "") {
            alert("请输入手机号!");
            return;
        }
        if (code == undefined || code == null || code == "") {
            alert("无效验证码,请重新验证!");
            return;
        }
        if (pwd == undefined || pwd == null || pwd == "") {
            alert("请输入密码!");
            return;
        }


        $.mobile.loading("show", {text: "正在注册...", textVisible: true});

        var resdata={"phonenumber":phoneNumber,"password":pwd};
        $.ajax({
            url: global.WEBSITE + "/PatientRegisterActor",
            dataType: "json",
            type: "post",
			data: resdata,
			contextType: "application/json; charset=utf-8",
            success: function (data) {
                if (data == "success") {
//                $.mobile.changePage("main.html");
                    window.location.href = "main.html";
                } else {
                    $().toastmessage('showToast', {
                        text: '注册失败！',
                        sticky: false,
                        position: 'middle-center',
                        type: 'error'
                    });
                }

                $.mobile.loading("hide");
            },
            error: function () {
                $().toastmessage('showToast', {
                    text: '访问服务器错误！',
                    sticky: false,
                    position: 'middle-center',
                    type: 'error'
                });
                $.mobile.loading("hide");
            }
        });

}

function getvalidatecode() {

        $.mobile.loading("show", {text: "正在获取验证码...", textVisible: true});
        $.ajax({
            url: global.WEBSITE + "VerfyCodeActor/code/" + code ,
            dataType: "json",
            type: "post",
			contextType: "application/json; charset=utf-8",
            success: function (data) {
                if (data == "success") {
//                $.mobile.changePage("main.html");
                    //window.location.href = "main.html";
                } else {
                    $().toastmessage('showToast', {
                        text: '获取失败！',
                        sticky: false,
                        position: 'middle-center',
                        type: 'error'
                    });
                }

                $.mobile.loading("hide");
            },
            error: function () {
                $().toastmessage('showToast', {
                    text: '访问服务器错误！',
                    sticky: false,
                    position: 'middle-center',
                    type: 'error'
                });
                $.mobile.loading("hide");
            }
        });

}
function findpwd() {
	    var phoneNumber = $("#inputphonenumber").val();
        var password = $("#inputpwd").val();
		var newpassword = $("#newinputpwd").val();
        if (phoneNumber == undefined || phoneNumber == null || phoneNumber == "") {
            alert("请输入手机号!");
            return;
        }
        if (!isvalidcode) {
            alert("无效验证码,请重新验证!");
            return;
        }
        if (password == undefined || password == null || password == "") {
            alert("请输入密码!");
            return;
        }

        if (newpassword == undefined || newpassword == null || newpassword == "") {
            alert("请输入新密码!");
            return;
        }

        $.mobile.loading("show", {text: "正在...", textVisible: true});
        $.ajax({
            url: global.WEBSITE + "user/findpwd/phonenumber/" + phoneNumber + "/password/" + password+ "/newpassword/" + newpassword ,
            dataType: "json",
            type: "post",
			contextType: "application/json; charset=utf-8",
            success: function (data) {
                if (data == "success") {
//                $.mobile.changePage("main.html");
                    window.location.href = "main.html";
					isvalidcode=true;
                } else {
                    $().toastmessage('showToast', {
                        text: '注册失败！',
                        sticky: false,
                        position: 'middle-center',
                        type: 'error'
                    });
					isvalidcode=false;
                }

                $.mobile.loading("hide");
            },
            error: function () {
                $().toastmessage('showToast', {
                    text: '访问服务器错误！',
                    sticky: false,
                    position: 'middle-center',
                    type: 'error'
                });
				isvalidcode=false;
                $.mobile.loading("hide");
            }
        });

}
$(function () {
	var userName = window.localStorage.getItem("userName");
	var password = window.localStorage.getItem("password");
	if (userName != undefined && userName != null && userName != "") {
		$("#userName").val(userName);
	}
	if (password != undefined && password != null && password != "") {
		$("#password").val(password);
	}
	if (window.localStorage.getItem("flag") == "true") {
		$("#rememberMe").attr('checked', true);
	} else {
		$("#rememberMe").attr('checked', false);
	}
});

