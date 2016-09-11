	var isInit = 0;
	var myScroll, pullUpEl, pullUpOffset, generatedCount = 0;

	/**
	 * 上拉刷新
	 * myScroll.refresh();		// 数据加载完成后，调用界面更新方法
	 */
	function pullUpAction() {
		setTimeout(loadData, 1000); // <-- Simulate network congestion, remove setTimeout from production!
	}

	/**
	 * 初始化iScroll控件
	 */
	function loaded() {
		if (myScroll != null) {
			myScroll.destroy();
		}

		pullUpEl = document.getElementById('pullUp');
		pullUpOffset = pullUpEl.offsetHeight;

		myScroll = new iScroll(
				'wrapperIndex',
				{
					//scrollbarClass: 'myScrollbar', /* 自定义样式 */
					useTransition : false, /* 此属性不知用意，本人从true改为false */
					//topOffset: pullDownOffset,
					onRefresh : function() {
						if (pullUpEl.className.match('loading')) {
							pullUpEl.className = '';
							pullUpEl.querySelector('.pullUpLabel').innerHTML = '上拉加载更多...';
						}
					},
					onScrollMove : function() {
						if (this.y < (this.maxScrollY - 5)
								&& !pullUpEl.className.match('flip')) {
							pullUpEl.className = 'flip';
							pullUpEl.querySelector('.pullUpLabel').innerHTML = '松手开始更新...';
							this.maxScrollY = this.maxScrollY;
						} else if (this.y > (this.maxScrollY + 5)
								&& pullUpEl.className.match('flip')) {
							pullUpEl.className = '';
							pullUpEl.querySelector('.pullUpLabel').innerHTML = '上拉加载更多...';
							this.maxScrollY = pullUpOffset;
						}
					},
					onScrollEnd : function() {
						if (pullUpEl.className.match('flip')) {
							pullUpEl.className = 'loading';
							pullUpEl.querySelector('.pullUpLabel').innerHTML = '加载中...';
							pullUpAction(); // Execute custom function (ajax call?)
						}
					}
					
				});
		
		if(isInit==0){
			//load datas
			loadData();
			isInit=1;
		}
	}

	var startNum = -1;
	var count = -1;
	function loadData() {
		showLoading();
		var params = {
			startNum : startNum,
			count : count
		};

		$.ajax({
			async : false,
			url : serverURL + '/ajax!jqmMobileDemoList', // 跨域URL
			type : 'get',
			dataType : 'jsonp',
			jsonp : 'jsoncallback', //默认callback
			data : params,
			timeout : 5000,
			beforeSend : function() { //jsonp 方式此方法不被触发。原因可能是dataType如果指定为jsonp的话，就已经不是ajax事件了
			},
			success : function(json) { //客户端jquery预先定义好的callback函数，成功获取跨域服务器上的json数据后，会动态执行这个callback函数 
				var jsonObject = eval("(" + json + ")");
				startNum = Number(jsonObject.startNum);
				count = Number(jsonObject.count);
				$("#contentList").append(jsonObject.str).listview(
						'refresh');
			},
			complete : function(XMLHttpRequest, textStatus) {
				setTimeout(function() { // <-- Simulate network congestion, remove setTimeout from production!			
					myScroll.refresh(); // 数据加载完成后，调用界面更新方法 Remember to refresh when contents are loaded (ie: on ajax completion)
					hideLoading();
					if (startNum >= count) {
						myAlert('已加载完全部信息');
					}
				}, 1500);
				
			},
			error : function(xhr) {
				//jsonp 方式此方法不被触发
				//请求出错处理 
				myAlert("请求出错(请检查相关度网络状况.)");
			}
		});

	}

	function update() {
		startNum = -1;
		count = -1;
		$("#contentList").html("");
		loadData();
		$("#contentList").listview('refresh');
		myScroll.refresh();
	}
	$(document).on('pageinit','#indexPage',function(){
		startNum = -1;
		count = -1;
		isInit==0;	
	});
	$(document).on('pagebeforeshow','#indexPage',function(){
		//加载iscroll
		setTimeout(loaded, 200);
	});
	$(document).on('pageshow','#indexPage',function(){

	});
var $page;
$(document).on("pagecreate", function(e) {
	$page = $(e.target);
	var pageId = $page.attr("id");
	//加载底部菜单
	createFooter($page,pageId);
	pageRefresh();
});
