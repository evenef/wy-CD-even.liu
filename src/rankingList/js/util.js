var utilObj = {
	getId: getId,//id获取元素
	getClass: getClass,//class获取元素集合
	getEl: getEl,//获取匹配的第一个元素
	ajax: ajax,//ajax 参数{url, type, dataType, data, success, fail}
	formatParams: formatParams,//格式化参数，将object转化为url参数
	searchObj: searchObj,//获取location.search信息
	getNowTime: getNowTime,//获取当前时间
	imgLoadFnc: imgLoadFnc,//预加载图片
	imgRoll: imgRoll,//图片左右翻转
	setCookie: setCookie,//设置cookie
	getCookie: getCookie,//获取cookie
	listItemChoose: listItemChoose,//方向选择
	toSendPage: toSendPage,//发送统计数值
	startActivity: startActivity,//跳转游戏详情
	pageConsole: pageConsole,//页面打印消息（测试用）
	playMediaEPG: playMediaEPG,//调用EPG媒体播放
	destoryMP: destoryMP,//清除上一个EPG媒体播放
	toPayFnc: toPayFnc,//订购鉴权接口
}

//id获取元素
function getId(id) {
	return document.getElementById(id)
}
//class获取元素集合
function getClass(className) {
	return document.getElementsByClassName(className)
}
//获取匹配的第一个元素
function getEl(name) {
	return document.querySelector(name)
}
//ajax 参数{url, type, dataType, data, success, fail}
function ajax(options) {
	options = options || {}
	options.type = (options.type || "GET").toUpperCase()
	options.dataType = options.dataType || "json"
	var params = formatParams(options.data)
	var xhr = new XMLHttpRequest()
	xhr.onreadystatechange = function () {
		if (xhr.readyState == 4) {
			var status = xhr.status
			if (status >= 200 && status < 300) {
				options.success && options.success(xhr.responseText, xhr.responseXML)
			} else {
				options.fail && options.fail(status)
			}
		}
	}
	if (options.type == "GET") {
		xhr.open("GET", options.url + "?" + params, true)
		xhr.send()
	} else if (options.type == "POST") {
		xhr.open("POST", options.url, true)
		xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;charset=utf-8")
		xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
		//xhr.setRequestHeader("Cookie", document.cookie);	//针对某些老盒子ajax请求返回302的问题(导致获取不到数据)可以将此行注释打开,最好使用Authentication.CTCGetConfig("STBType")方法判断一下盒子型号再打开注释
		xhr.send(params)
	}
}
//格式化参数，将object转化为url参数
function formatParams(param) {
	var arr = []
	for (var name in param) {
		arr.push(encodeURIComponent(name) + "=" + encodeURIComponent(param[name]))
	}
	return arr.join("&")
}
//获取location.search信息
function searchObj() {
	var obj = {}
	location.search.substring(1).split("&").map(function(item) {
		obj[item.split("=")[0]] = item.split("=")[1]
	})
	return obj
}
//获取当前时间
function getNowTime(){
	var time = '',
	year = (new Date()).getYear() + 1900,
	month = (new Date()).getMonth() + 1,
	date = (new Date()).getDate(),
	hour = (new Date()).getHours(),
	minute = (new Date()).getMinutes(),
	second = (new Date()).getSeconds()

	month = month < 10 ? ('0' + month) : month
	date = date < 10 ? ('0' + date) : date
	hour = hour < 10 ? ('0' + hour) : hour
	minute = minute < 10 ? ('0' + minute) : minute
	second = second < 10 ? ('0' + second) : second

	time = '' + year + month + date + '_' + hour + minute + second
	return time
}
//预加载图片
function imgLoadFnc(imgUrlArr, callback) {
	for(var i = 0;i < imgUrlArr.length;i++){
		var index = 0
		var img = new Image()
		img.src = imgUrlArr[i]
		img.onload = function(){
			// console.log('图片' + index)
			index++
			if(index >= imgUrlArr.length){
				if(callback)
					callback()
			}
		}
	}
}
//图片左右翻转
//图片需放置在容器内，不可单独将img元素定位
//imgEle图片元素，urlArr每次翻转变化的图片集合，speed每从大到小变化一次的时长，单位ms
function imgRoll(imgEle, urlArr, speed){
	imgEle = imgEle[0]
	if(!imgRoll || !speed)
		return
	imgEle.style.backgroundImage = 'url(\'' + urlArr[0] + '\')'
	var timeIndex = 0
	var rollTo = "small"
	var changeW = imgEle.scrollWidth * 20 / speed
	var setIn = setInterval(function(){
		imgEle.scrollWidth <= 0 && (rollTo = "big1")
		imgEle.scrollWidth >= changeW / 20 * speed && (rollTo = "small")
		if(rollTo === "small")
			imgEle.style.width = imgEle.scrollWidth - changeW + 'px'
		else if(rollTo === "big")
			imgEle.style.width = imgEle.scrollWidth + changeW + 'px'
	},20)
}
//设置cookie
//keyName属性名
//value属性值
//expiredays过期时间(整数，单位：天)
function setCookie(keyName, value, expiredays){
	var exdate = new Date()
	exdate.setDate(exdate.getDate() + (expiredays || 0))
	document.cookie = keyName + "=" + escape(value)+ ((expiredays == null) ? "" : ";expires=" + exdate.toGMTString())
	// console.log(exdate.getDate())
}
function getCookie(keyName){
	var coo = document.cookie.replace(/\s/g, '')
	var arr = coo.split(';')
	var obj = {}
	arr.map(function(item){
		obj[item.split('=')[0]] = item.split('=')[1]
	})
	return obj[keyName]
}
//方向选择
//toward方向left/right/up/down
//classNameFont子项类名前缀
//chooseNum子项类名编号
//choosedClassStr选中的元素类名
function listItemChoose(toward, classNameFont, chooseNum, choosedClassStr){
	if(!/-/.test(chooseNum)){
		return
	}
	var i = parseInt(chooseNum.split('-')[0])
	var j = parseInt(chooseNum.split('-')[1])
	var currentClassName = chooseNum
	switch(toward){
		case 'left':
		var tryEle = getEl('.' + classNameFont + i + '-' + (j - 1))
		currentClassName = i + '-' + (tryEle ? (j - 1) : j)
		tryEle && changeClassName(classNameFont, choosedClassStr, currentClassName)
		break
		case 'up':
		var tryEle = getEl('.' + classNameFont + (i - 1) + '-' + j)
		currentClassName = (tryEle ? (i - 1) : i) + '-' + j
		tryEle && changeClassName(classNameFont, choosedClassStr, currentClassName)
		break
		case 'right':
		var tryEle = getEl('.' + classNameFont + i + '-' + (j + 1))
		if(tryEle){
			currentClassName = i + '-' + (j + 1)
		}else{
			while(--i >= 0){
				tryEle = getEl('.' + classNameFont + i + '-' + (j + 1))
				if(tryEle){
					currentClassName = i + '-' + (j + 1)
					break
				}
			}
		}
		tryEle && changeClassName(classNameFont, choosedClassStr, currentClassName)
		break
		case 'down':
		var tryEle = getEl('.' + classNameFont + (i + 1) + '-' + j)
		if(tryEle){
			currentClassName = (i + 1) + '-' + j
		}else{
			while(--j >= 0){
				tryEle = getEl('.' + classNameFont + (i + 1) + '-' + j)
				if(tryEle){
					currentClassName = (i + 1) + '-' + j
					break
				}
			}
		}
		tryEle && changeClassName(classNameFont, choosedClassStr, currentClassName)
		break
	}
	return currentClassName
}
//发送统计数值
//type可能值：'page'-页面统计，其他-contentID值
//pageName：页面中文名
//contentName：点击按钮中文名
//callback：回调
function toSendPage(type, pageName, contentName, callback){
	var searchStr = searchObj(),
	wayEUserName = searchStr.wayEUserName,
	epgUserName = searchStr.UserID || UserID,
	url = type === 'page' ? ('http://' + location.host + '/wbManager/pageBrowsing.do') : ('http://' + location.host + '/wbManager/onClickEvent.do'),
	date = getNowTime(),
	pageID = location.href.split('/index.html')[0].split('/').pop(),
	pageName = pageName || document.title,
	contentID = type === 'page' ? '' : type,
	contentName = contentName || ''

	var obj = {
		epgUserName: epgUserName,
		wayEUserName: wayEUserName,
		data: date,
		pageID: pageID,
		pageName: pageName,
		contentID: contentID ? pageID + '_' + contentID : '',
		contentName: contentName
	}

	console.log('统计信息：' + (contentName || '进入' + pageName), obj)

	ajax({
		url: url,
		type: 'post',
		data: obj,
		success: function(param){
			param = JSON.parse(param)
			console.log('统计返回信息', param)
			callback && callback(param)
		}
	})
}
//跳转游戏详情
function startActivity(gameId) {
	var appName = "com.utstar.appstoreapplication.activity",
	className = "com.utstar.appstoreapplication.activity.StartAppActivity",
	mac = "",
	_stb_areaid = "",
	epgDoman = "",
	epgToken = "",
	referPageName = "",
	referPageID = ""
	try {
		mac = Authentication.CTCGetConfig("mac");
		_stb_areaid = Authentication.CTCGetConfig("areaid");
		epgDoman = Authentication.CTCGetConfig("EPGDomain");
		epgToken = Authentication.CTCGetConfig("UserToken");
	} catch (e) {
	}
	switch(true){
		case /cardDraw/.test(location.href): referPageName = '卡牌抽奖';referPageID = 'kapaichoujiang';break;
		case /exchangeStore/.test(location.href): referPageName = '兑换中心';referPageID = 'duihuanzhongxin';break;
		case /registerCards/.test(location.href): referPageName = '卡牌签到';referPageID = 'kapaiqiandao';break;
		case /christmasActivity/.test(location.href): referPageName = '圣诞活动';referPageID = 'ShengDanHuoDong';break;
		case /YuanDanActive/.test(location.href): referPageName = '元旦活动';referPageID = 'YuanDanHuoDong';break;
	}
	var params = {
		"turnType": "1",
		"referPageName": referPageName,
		"referPageID": referPageID,

		"normalItemData": {
			"id": "" + gameId
		}
	};
	var intentMessage = JSON.stringify({
		intentType: 0,
		appName: appName,
		className: className,
		extra: [
		{name: "epgDoman",value: epgDoman},
		{name: "areaId",value: _stb_areaid},
		{name: "epgUserId",value: searchObj().userID || searchObj().UserID},
		{name: "epgToken",value: epgToken},
		{name: "isDispath",value: true},
		{name: "action",value: "0"},
		{name: "params",value: params},
		{name: "referPageName",value: referPageName},
		{name: "referPageID",value: referPageID},
		{name: "serviceUrl",value: 'http://' + document.location.host + '/wbManager/'}
		]
	})
	try {
		STBAppManager.startAppByIntent(intentMessage);
	} catch (e) {
		console.log(intentMessage)
		// console.log(JSON.parse(intentMessage))
	}
}






try{
	var mp = "";
	//调用EPG媒体播放
	function playMediaEPG(_left,_top,_width,_height){
		media_left = _left;
		media_top = _top;
		media_width = _width;
		media_height = _height;
		initMediaStr();
		Authentication.CTCSetConfig("key_ctrl_ex","0");
		initMediaPlay(media_left,media_top,media_width,media_height);
		mp.playFromStart();
	}
	var playUrl = "";
	var userchannelid = "";
	var media_left = 0,
	media_top = 0,
	media_width = 0,
	media_height = 0;
	var mediaStr = ''
	function initMediaStr(){
		mediaStr = '[{mediaUrl:"' + playUrl + '",';
		mediaStr += 'mediaCode: "jsoncode1",';
		mediaStr += 'mediaType:1,';
		mediaStr += 'audioType:1,';
		mediaStr += 'videoType:1,';
		mediaStr += 'streamType:1,';
		mediaStr += 'drmType:1,';
		mediaStr += 'fingerPrint:0,';
		mediaStr += 'copyProtection:1,';
		mediaStr += 'allowTrickmode:1,';
		mediaStr += 'startTime:0,';
		mediaStr += 'endTime:20000,';
		mediaStr += 'entryID:"jsonentry1"}]';
	}
	function initMediaPlay(_left,_top,_width,_height){
		mp = new MediaPlayer(1);
		var instanceId = mp.getNativePlayerInstanceID();
		var playListFlag = 0;
		var videoDisplayMode = 1,useNativeUIFlag = 1;
		var height = 0,width = 0,left = 0,top = 0;
		var muteFlag = 0;
		var subtitleFlag = 0;
		var videoAlpha = 0;
		var cycleFlag = 0;
		var randomFlag = 0;
		var autoDelFlag = 0;
		mp.initMediaPlayer(instanceId, playListFlag, videoDisplayMode, height, width, left, top, muteFlag, useNativeUIFlag, subtitleFlag, videoAlpha, cycleFlag, randomFlag, autoDelFlag);
		mp.setSingleMedia(mediaStr);
		mp.setAllowTrickmodeFlag(0);
		mp.setNativeUIFlag(0);
		mp.setAudioTrackUIFlag(0);
		mp.setMuteUIFlag(0); 
		mp.setAudioVolumeUIFlag(0);
		mp.setVideoDisplayArea(_left,_top,_width,_height);
		mp.setVideoDisplayMode(0);
		mp.refreshVideoDisplay();
	}
	//清除上一个EPG媒体播放
	function destoryMP(){
		var instanceId = mp.getNativePlayerInstanceID();
		mp.stop();
		// mp.pause();
		mp.releaseMediaPlayer(instanceId);
	}
}catch(e){
	pageConsole('错误报告：', e)
}

//页面打印消息（测试用）
//title打印标题
//param打印消息
function pageConsole(title, param){
	if(!getEl('#tempWrap')){
		var div = document.createElement('div')
		div.id = 'tempWrap'
		document.body.appendChild(div)
	}
	var wrap = getEl('#tempWrap')

	wrap.innerHTML += '<p style="color: rgba(255,255,255,1);line-height: 24px;word-break: break-all;">' + (title || '') + (param || '') + '</p>'
	document.body.style.position = 'absolute'
	wrap.style.width = '1080px'
	wrap.style.paddingLeft = '200px'
	wrap.style.position = 'absolute'
	wrap.style.bottom = '200px'
	wrap.style.fontSize = '16px'
	wrap.style.zIndex = '999'
	wrap.style.backgroundColor = 'rgba(0,0,0,.5)'
}

//订购鉴权接口
//回调callback传参true（已订购）false（未订购）
//需要参数obj：spId、UserID、PRODUCTID、contentCode、callback
function toPayFnc(obj){
	ajax({
		url: obj.toPayURL,
		data: {
			spId: obj.spId || '',
			epgId: obj.UserID || '',
			productId: obj.PRODUCTID || '',
			contentId: obj.contentCode || '',
		},
		success: function(param){
			param = JSON.parse(param)
			if(!param.rltcode && param.object.list.error_code == 0){
				obj.callback(true)
			}else{
				obj.callback(false)
				document.location.href = 'http://' + location.host + '/Wanba/EPG/Order/order.jsp?userID=' + obj.UserID + '&productId=' + obj.PRODUCTID + '&contentCode=' + obj.contentCode + '&backUrl=' + escape(document.location.href)
			}
		}
	})
}



// 'http://192.168.5.3:8080/Wanba/EPG/Order/index.html?userID=epg010010101&productId=16021215165349000001&contentCode=1605120914333798479570&backUrl=http%3A//192.168.5.3%3A8080/Wanba/active/ChangWanTing/index.html%3FPRODUCTID%3D16021215165349000001%26ReturnURL%3D123%26UserID%3Depg010010101%26wayEUserName%3DwayEUserName'

//跳转点击观看
// var _url = epgDoman.substring(0,epgDoman.indexOf("Category.jsp")) + "Category.jsp?spVodPlayUrl="+escape("vod_TVDetail.html?TYPE_ID=" + CAT_ID[selectIndex] + "&FILM_ID=" + FILM_IDS[selectIndex] + "&ReturnURL=" + escape(window.location.href));

