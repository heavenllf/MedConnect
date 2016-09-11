//captureAudio方法成功执行后回调函数  
function captureSuccess(mediaFiles) {  
    var i, len;  
    for (i = 0, len = mediaFiles.length; i < len; i += 1) {  
       //业务逻辑  
        navigator.notification.alert(mediaFiles[i].fullPath + " " +mediaFiles[i].name);  
    }         
}  
  
//captureAudio方法执行失败后回调函数  
function captureError(error) {  
    var msg = 'capture 发生错误: ' + error.code;  
    navigator.notification.alert(msg, null, 'error');  
}  
function captureAudio()
{
	navigator.device.captureAudio(captureSuccess,captureError,{limit:1});
}
(function(){
	$("#audio").click(function(){
		catureAudio();
	});
})();