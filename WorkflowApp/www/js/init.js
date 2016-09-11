document.addEventListener('deviceready', OnNotificationReady, false);
function OnNotificationReady()
{
    window.plugin.notification.local.onclick = function(id, state, json) {
    	 
        window.plugin.notification.local.cancelAll();
 
    };
}
$(document).ready(function(){
	$("#test").click(function(){
		setInterval(pushMsg,5000);
	});	
});
function pushMsg()
{
	console.log("test");
    var now = new Date().getTime();
    var _5_seconds_from_now = new Date(now + 5 * 1000);
    var options={
	    	id: 1,
	    	title: "这是一个健康问答通知",
	    	text:"问答通知", 
	    	every: "week",
	    	//sound:null,
	    	autoClear:false,
	    	badge:1,
	    	//icon: "",
	    	at:_5_seconds_from_now,
	    	json: JSON.stringify({ testId:"123" }),
	    	ongoing:false
	    	};
	healthNotification.notify(options);
}
