var utilObj = {
	getId: getId,//id��ȡԪ��
	getClass: getClass,//class��ȡԪ�ؼ���
	getEl: getEl,//��ȡƥ��ĵ�һ��Ԫ��
	ajax: ajax,//ajax ����{url, type, dataType, data, success, fail}
	formatParams: formatParams,//��ʽ����������objectת��Ϊurl����
	searchObj: searchObj,//��ȡlocation.search��Ϣ
	getNowTime: getNowTime,//��ȡ��ǰʱ��
	imgLoadFnc: imgLoadFnc,//Ԥ����ͼƬ
	imgRoll: imgRoll,//ͼƬ���ҷ�ת
	setCookie: setCookie,//����cookie
	getCookie: getCookie,//��ȡcookie
	listItemChoose: listItemChoose,//����ѡ��
	toSendPage: toSendPage,//����ͳ����ֵ
	startActivity: startActivity,//��ת��Ϸ����
	pageConsole: pageConsole,//ҳ���ӡ��Ϣ�������ã�
	playMediaEPG: playMediaEPG,//����EPGý�岥��
	destoryMP: destoryMP,//�����һ��EPGý�岥��
	toPayFnc: toPayFnc,//������Ȩ�ӿ�
}

//id��ȡԪ��
function getId(id) {
	return document.getElementById(id)
}
//class��ȡԪ�ؼ���
function getClass(className) {
	return document.getElementsByClassName(className)
}
//��ȡƥ��ĵ�һ��Ԫ��
function getEl(name) {
	return document.querySelector(name)
}
//ajax ����{url, type, dataType, data, success, fail}
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
		//xhr.setRequestHeader("Cookie", document.cookie);	//���ĳЩ�Ϻ���ajax���󷵻�302������(���»�ȡ��������)���Խ�����ע�ʹ�,���ʹ��Authentication.CTCGetConfig("STBType")�����ж�һ�º����ͺ��ٴ�ע��
		xhr.send(params)
	}
}
//��ʽ����������objectת��Ϊurl����
function formatParams(param) {
	var arr = []
	for (var name in param) {
		arr.push(encodeURIComponent(name) + "=" + encodeURIComponent(param[name]))
	}
	return arr.join("&")
}
//��ȡlocation.search��Ϣ
function searchObj() {
	var obj = {}
	location.search.substring(1).split("&").map(function(item) {
		obj[item.split("=")[0]] = item.split("=")[1]
	})
	return obj
}
//��ȡ��ǰʱ��
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
//Ԥ����ͼƬ
function imgLoadFnc(imgUrlArr, callback) {
	for(var i = 0;i < imgUrlArr.length;i++){
		var index = 0
		var img = new Image()
		img.src = imgUrlArr[i]
		img.onload = function(){
			// console.log('ͼƬ' + index)
			index++
			if(index >= imgUrlArr.length){
				if(callback)
					callback()
			}
		}
	}
}
//ͼƬ���ҷ�ת
//ͼƬ������������ڣ����ɵ�����imgԪ�ض�λ
//imgEleͼƬԪ�أ�urlArrÿ�η�ת�仯��ͼƬ���ϣ�speedÿ�Ӵ�С�仯һ�ε�ʱ������λms
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
//����cookie
//keyName������
//value����ֵ
//expiredays����ʱ��(��������λ����)
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
//����ѡ��
//toward����left/right/up/down
//classNameFont��������ǰ׺
//chooseNum�����������
//choosedClassStrѡ�е�Ԫ������
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
//����ͳ����ֵ
//type����ֵ��'page'-ҳ��ͳ�ƣ�����-contentIDֵ
//pageName��ҳ��������
//contentName�������ť������
//callback���ص�
function toSendPage(type, pageName, contentName, callback){
	var searchStr = searchObj(),
	wayEUserName = searchStr.wayEUserName,
	epgUserName = searchStr.UserID,
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

	console.log('ͳ����Ϣ��' + (contentName || '����' + pageName), obj)

	ajax({
		url: url,
		type: 'post',
		data: obj,
		success: function(param){
			param = JSON.parse(param)
			console.log('ͳ�Ʒ�����Ϣ', param)
			callback && callback(param)
		}
	})
}
//��ת��Ϸ����
function startActivity(gameId, UserID) {
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
		case /cardDraw/.test(location.href): referPageName = '���Ƴ齱';referPageID = 'kapaichoujiang';break;
		case /exchangeStore/.test(location.href): referPageName = '�һ�����';referPageID = 'duihuanzhongxin';break;
		case /registerCards/.test(location.href): referPageName = '����ǩ��';referPageID = 'kapaiqiandao';break;
		case /christmasActivity/.test(location.href): referPageName = 'ʥ���';referPageID = 'ShengDanHuoDong';break;
		case /YuanDanActive/.test(location.href): referPageName = 'Ԫ���';referPageID = 'YuanDanHuoDong';break;
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
		{name: "epgUserId",value: UserID || searchObj().UserID},
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
	//����EPGý�岥��
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
	//�����һ��EPGý�岥��
	function destoryMP(){
		var instanceId = mp.getNativePlayerInstanceID();
		mp.stop();
		// mp.pause();
		mp.releaseMediaPlayer(instanceId);
	}
}catch(e){
	pageConsole('���󱨸棺', e)
}

//ҳ���ӡ��Ϣ�������ã�
//title��ӡ����
//param��ӡ��Ϣ
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

//������Ȩ�ӿ�
//�ص�callback����true���Ѷ�����false��δ������
//��Ҫ����obj��spId��UserID��PRODUCTID��contentCode��callback
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

//��ת����ۿ�
// var _url = epgDoman.substring(0,epgDoman.indexOf("Category.jsp")) + "Category.jsp?spVodPlayUrl="+escape("vod_TVDetail.html?TYPE_ID=" + CAT_ID[selectIndex] + "&FILM_ID=" + FILM_IDS[selectIndex] + "&ReturnURL=" + escape(window.location.href));

