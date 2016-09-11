var pictureSource; //  getPicture:数据来源参数的一个常量
var destinationType; // getPicture中：设置getPicture的结果类型
document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
	pictureSource = navigator.camera.PictureSourceType;
	destinationType = navigator.camera.DestinationType;
}
var pickUrl;
function fromCamera(source){
    navigator.camera.getPicture(function(imageURI){
					appendImageshow(imageURI);
            }, function(){
                    if(source==navigator.camera.PictureSourceType.CAMERA)
                            console.log('加载照相机出错!');
                    else
                            console.log('加载相册出错!');
            }, {
                    quality : 50, 
                    destinationType : navigator.camera.DestinationType.FILE_URI,
                    sourceType : source
    });
}
function appendImageshow(imgSrc)
{
	var img="<img  style='width:60px;height:60px;' name='phoneImage' src='"+imgSrc+"' /> ";
	$("#divPhones").append(img);
	
}
(function() {
	// 事件绑定
	$("#choise").click(function() {
		fromCamera(navigator.camera.PictureSourceType.SAVEDPHOTOALBUM); 
	});
	$("#upload").click(function() {
		navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
		    destinationType: navigator.camera.DestinationType.DATA_URL
		 }); 
	});
	function onSuccess(imageData) {
		var imgSrc="data:image/jpeg;base64," + imageData;
		appendImageshow(imgSrc);
	}

	function onFail(message) {
	    alert('Failed because: ' + message);
	}
})();
$(document).on("pageinit", function() {
    $(".photopopup").on({
        popupbeforeposition: function() {
            var maxHeight = $(window).height() - 60 + "px";
            $(".photopopup img").css( "max-height", maxHeight );
        }
    });
});