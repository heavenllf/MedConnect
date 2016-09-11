var healthBackground={
	init:function(){
		document.addEventListener("deviceReady",healthBackground.deviceReady,false);
	}
	,
	deviceReady:function()
	{
		console.log("background device ready");
		// Android customization
		cordova.plugins.backgroundMode.setDefaults({ title:'test',ticker:'backgroud',text:'Doing heavy tasks.'});
		// Enable background mode
		cordova.plugins.backgroundMode.enable();

		// Called when background mode has been activated
		cordova.plugins.backgroundMode.onactivate = function () {
        setTimeout(function () {
            // Modify the currently displayed notification
            cordova.plugins.backgroundMode.configure({
                text:'Running in background for more than 5s now.'
            });
            console.log("running in backgroud");
            healthNotification.schedule();
        	}, 5000);
		}
		cordova.plugins.notification.local.on("click", function (id, state, json) {
			  alert('ID: ' + id + (json == '' ? '' : '\nData: ' + json));
			});
	}
};
healthBackground.init();