//全局配置
var global={
	WEBSITE:"http://localhost:8888/index",
	userId:''
}

//localStorage缓存
var ls = {
	setItem : function (key,value){
		localStorage.setItem(key,value)
	},
	getItem : function(key){
		return localStorage.getItem(key)
	}
}

//sessionStorage缓存
var ss = {
	setItem : function (key,value){
		//sessionStorage.setItem(key,value)
	},
	getItem : function(key){
		return sessionStorage.getItem(key)
	}
}
//json数据转换
function toObject(value){
	return $.parseJSON(value);
}

function toJson(value){
	return JSON.parse(value);
}

function toString(value){
	return JSON.stringify(value);
}

//在浏览器上显示组装路径
function showUrl(url){
	document.write(url);
}



//页面跳转与返回
function goTo(page) {
	showLoading();
	$.mobile.changePage(page, {
		transition : "slide"
	});
}

function goBack() {
	$.mobile.back();
}

//alert
function myAlert(text) {
	showMyAlert(text);
	setTimeout(hideLoading, 2000);
}

function showMyAlert(text) {
	$.mobile.loadingMessageTextVisible = true;
	$.mobile.showPageLoadingMsg("a", text, true);
}

//loading 加载提示
$( document ).on( "click", ".show-page-loading-msg", function() {
    var $this = $( this ),
        theme = $this.jqmData( "theme" ) || $.mobile.loader.prototype.options.theme,
        msgText = $this.jqmData( "msgtext" ) || $.mobile.loader.prototype.options.text,
        textVisible = $this.jqmData( "textvisible" ) || $.mobile.loader.prototype.options.textVisible,
        textonly = !!$this.jqmData( "textonly" );
        html = $this.jqmData( "html" ) || "";
    $.mobile.loading( "show", {
            text: msgText,
            textVisible: textVisible,
            theme: theme,
            textonly: textonly,
            html: html
    });
})

.on( "click", ".hide-page-loading-msg", function() {
    $.mobile.loading("hide");
});

function showLoading() {
	$.mobile.loading("show");
	//	$.mobile.loadingMessageTextVisible = true;
	//$.mobile.showPageLoadingMsg("a", "加载中...");
}

function hideLoading() {
	$.mobile.loading("hide");
	//$.mobile.hidePageLoadingMsg();
}

//页面刷新
function pageRefresh(){
	$.mobile.pageContainer.trigger("create");
}

// 通过url加载html内容
var urlLoadContent = function(url) {
	var content = "";
	$.ajax({
		url : url,
		type : 'GET',
		dataType : "html",
		async : false,
		success : function(html, textStatus, xhr) {
			content = html;
		},
		error : function(xhr, textStatus, errorThrown) {
			content = "";
		}
	});
	return content;
};
$.mobile.transitionFallbacks.slide = "none";
$.mobile.buttonMarkup.hoverDelay = "false";



function errpic(thepic) {
	thepic.src = "../img/no_pic.png"
}

function getUrlParam(string) {
	var obj = new Array();
	if (string.indexOf("?") != -1) {
		var string = string.substr(string.indexOf("?") + 1);
		var strs = string.split("&");
		for ( var i = 0; i < strs.length; i++) {
			var tempArr = strs[i].split("=");
			obj[i] = tempArr[1];
		}
	}
	return obj;
}

// =========================PhoneGap==================================
$(document).ready(function(){
	// 等待加载PhoneGap
	document.addEventListener("deviceready", onDeviceReady, false);
});
// PhoneGap加载完毕
function onDeviceReady() {
	// 按钮事件
	document.addEventListener("backbutton", eventBackButton, false); // 返回键
	//document.addEventListener("menubutton", eventMenuButton, false); // 菜单键
	//document.addEventListener("searchbutton", eventSearchButton, false); // 搜索键
}

// 返回键
function eventBackButton() {
	 if($.mobile.activePage.is('#homepage')){
		 myAlert('再点击一次退出!');
			document.removeEventListener("backbutton", eventBackButton, false); // 注销返回键
			document.addEventListener("backbutton", exitApp, false);//绑定退出事件
			// 3秒后重新注册
			var intervalID = window.setInterval(function() {
				window.clearInterval(intervalID);
				document.removeEventListener("backbutton", exitApp, false); // 注销返回键
				document.addEventListener("backbutton", eventBackButton, false); // 返回键
			}, 3000);
     }
     else {
         navigator.app.backHistory();
     }
	 	
}

function exitApp(){
	navigator.app.exitApp();
}

// 菜单键
function eventMenuButton() {
	myAlert('点击了 菜单 按钮!');
	goTo('menu.html');
}
// 搜索键
function eventSearchButton() {
	myAlert('点击了 搜索按钮!');
}
$(document).bind("mobileinit", function(){
	$.support.cors = true;
	$.mobile.allowCrossDomainPages = true;
	$.mobile.changePage.defaults.changeHash = false;
    $.mobile.hashListeningEnabled = false;
    $.mobile.pushStateEnabled = false;//for chrome version
    $.mobile.loader.prototype.options.text = "loading";
    $.mobile.loader.prototype.options.textVisible = false;
    $.mobile.loader.prototype.options.theme = "a";
    $.mobile.loader.prototype.options.html = "";
    $.support.touchOverflow = true;
    $.mobile.orientationChangeEnabled = false;
    $.mobile.buttonMarkup.hoverDelay = "false";
    $.mobile.defaultPageTransition = "slide";
});

