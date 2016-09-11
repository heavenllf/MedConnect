var healthNotification={
	init:function(){
		document.addEventListener("deviceReady",healthNotification.deviceReady,false);
	}
	,
	deviceReady:function()
	{
		console.log("notification device ready");
        // set some global defaults for all local notifications
        cordova.plugins.notification.local.setDefaults({
            ongoing : false, 
			autoClear: true
        });

	 	cordova.plugins.notification.local.on("click", function (notification ) {
            navigator.notification.alert(JSON.stringify(notification), null, 'Notification background click', 'Close');
        });

       cordova.plugins.notification.local.on("schedule", function (id, state, json) {
            navigator.notification.alert("Scheduled", null, 'Notification scheduled', 'Close');
        });

       cordova.plugins.notification.local.on("trigger", function (notification, state) {
            var message = 'Notification with ID is triggered: ' + notification.id + ' state: ' + state;
							navigator.notification.alert(message, function() { 
			    			cordova.plugins.notification.local.clear(notification.id, function() {
					        navigator.notification.alert("Notification cleared from notification center");
				    		}, 'Notification triggered', 'Close');
							});
		});
	}
	,
	schedule:function()
	{
        var now = new Date().getTime();
	    var _5_seconds_from_now = new Date(now + 5 * 1000);
	    navigator.notification.vibrate(1000);
	    window.plugin.notification.local.schedule({
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
	    	});
	}
	,
	notify:function(options)
	{
	    navigator.notification.vibrate(1000);
	    window.plugin.notification.local.schedule(options,function(){console.log("notify")});
	}
};
healthNotification.init();