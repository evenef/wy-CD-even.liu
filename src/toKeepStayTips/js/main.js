var onkeydownFncTemp = document.onkeydown
var toKeepStayTipsWinInitFnc = function(callback){
	callback && (window.toKeepStayTipsWinCallback = callback);
	ajax({
		// url: 'http://172.18.104.91:8080/wbManager/detention/getDetentionRec.do',
		url: 'http://' + window.location.host + ':8080/wbManager/detention/getDetentionRec.do',
		success: function(param){
			param = JSON.parse(param)
			if(!param.rltcode){
				dataArr[0] = param.object.large[0]
				// dataArr[0].address = dataArr[0].address.replace(/172\.18\.104\.11/, '172.18.104.14')
				param.object.small.map(function(item, index){
					dataArr[index + 1] = item
					// dataArr[index + 1].address = dataArr[index + 1].address.replace(/172\.18\.104\.11/, '172.18.104.14')
				})
			}
			toKeepStayTipsWin(true)
			document.onkeydown = function(e) {
				toKeepStayTipsWin(true, e.keyCode)
			}
			toSendPage('toKeepStayTipsWin', '大厅挽留弹窗', '弹出大厅挽留弹窗');
		}
	})
}
var dataArr = [{
	hava_name: '仙侠大战',
	productid: 111,
	address: './img/Catch1E66.jpg'
},{
	hava_name: '仙侠大战仙侠大战',
	productid: 222,
	address: './img/Catch1E66.jpg'
},{
	hava_name: '侠大战大战',
	productid: 333,
	address: './img/Catch1E66.jpg'
},{
	hava_name: '仙侠大战',
	productid: 444,
	address: './img/Catch1E66.jpg'
},{
	hava_name: '大战仙侠大战',
	productid: 555,
	address: './img/Catch1E66.jpg'
}]

function toKeepStayTipsWin(isVisible, keyCode){
	if(!isVisible)
		return
	if(document.querySelector('.keepStayTipsWin')){
		var wrap = document.querySelector('.keepStayTipsWin'),
		flagNum = 0
		for(var i = 0;i < wrap.children.length;i++){
			wrap.children[i] === document.querySelector('.keepStayTipsFocus') && (flagNum = i - 3)
		}
	}
	window.keepStayTipsFlag = window.keepStayTipsFlag ? keepStayTipsFlag : 'item_0'
	switch(keyCode){
		//左
		case 37:
		flagNum === -1 && (keepStayTipsFlag = 'stay');
		(flagNum === 1 || flagNum === 2) && (keepStayTipsFlag = 'item_0');
		(flagNum === 3 || flagNum === 4) && (keepStayTipsFlag = 'item_' + (parseInt(keepStayTipsFlag.split('_')[1]) - 2));
		break
		//上
		case 38:
		(flagNum === -1 || flagNum === -2) && (keepStayTipsFlag = 'item_2');
		(flagNum === 2 || flagNum === 4) && (keepStayTipsFlag = 'item_' + (parseInt(keepStayTipsFlag.split('_')[1]) - 1));
		break
		//右
		case 39:
		flagNum === 0 && (keepStayTipsFlag = 'item_1');
		(flagNum === 1 || flagNum === 2) && (keepStayTipsFlag = 'item_' + (parseInt(keepStayTipsFlag.split('_')[1]) + 2));
		flagNum === -2 && (keepStayTipsFlag = 'quit');
		break
		//下
		case 40:
		(flagNum === 0 || flagNum === 2 || flagNum === 4) && (keepStayTipsFlag = 'stay');
		(flagNum === 1 || flagNum === 3) && (keepStayTipsFlag = 'item_' + (parseInt(keepStayTipsFlag.split('_')[1]) + 1));
		break
		//确定
		case 13:
		/item_/.test(keepStayTipsFlag) && (contentID = 'game_' + document.querySelector('.keepStayTipsFocus').gameMsg.productid);
		/stay/.test(keepStayTipsFlag) && (contentID = 'stay');
		/quit/.test(keepStayTipsFlag) && (contentID = 'quit');
		toSendPage(contentID, '大厅挽留弹窗', /game/.test(contentID) ? '跳转推荐游戏_' + document.querySelector('.keepStayTipsFocus').gameMsg.hava_name : (contentID === 'stay' ? '大厅挽留弹窗_我再看看按钮' : '大厅挽留弹窗_休息一下按钮'));//PV、UV上报
		/game/.test(contentID) && startActivity(document.querySelector('.keepStayTipsFocus').gameMsg.productid);//方法已改进，自动获取UserID
		/quit/.test(contentID) && window.toKeepStayTipsWinCallback && window.toKeepStayTipsWinCallback();
		if(/stay/.test(keepStayTipsFlag)){
			document.body.removeChild(document.querySelector('.keepStayTipsWin'))
			keepStayTipsFlag = 'item_0'
			document.onkeydown = onkeydownFncTemp
			return '关闭弹窗'
		}
		break
		//返回、backspace[PC]
		case 32:
		case 8:
		document.body.removeChild(document.querySelector('.keepStayTipsWin'))
		keepStayTipsFlag = 'item_0'
		document.onkeydown = onkeydownFncTemp
		toSendPage('stay', '大厅挽留弹窗', '大厅挽留弹窗_关闭弹窗回到大厅')
		return '关闭弹窗'
		break
	}

	initKeepStayTipsWin(keepStayTipsFlag)
	return '键盘事件完成'
}

//窗口初始化
function initKeepStayTipsWin(kepStayWinFlag){
	try{
		document.body.removeChild(document.querySelector('.keepStayTipsWin'))
	}catch(e){}
	kepStayWinFlag = kepStayWinFlag || 'item_0'
	var img = document.createElement('img'),
	wrap = document.createElement('div'),
	imgTemp_1 = document.createElement('img'),
	imgTemp_2 = document.createElement('img'),
	x = 354,
	y = 175,
	btnStay = createBtnBox(434, 534, 'stay', kepStayWinFlag === 'stay'),
	btnQuit = createBtnBox(640, 534, 'quit', kepStayWinFlag === 'quit'),
	item_0 = createItemBox('blue', x, y, true, 26, kepStayWinFlag === 'item_0', dataArr[0] || {}),
	item_1 = createItemBox('green', x + 194, y, false, 22, kepStayWinFlag === 'item_1', dataArr[1] || {}),
	item_2 = createItemBox('green', x + 194, y + 167, false, 22, kepStayWinFlag === 'item_2', dataArr[2] || {}),
	item_3 = createItemBox('blue', x + 388, y, false, 22, kepStayWinFlag === 'item_3', dataArr[3] || {}),
	item_4 = createItemBox('blue', x + 388, y + 167, false, 22, kepStayWinFlag === 'item_4', dataArr[4] || {})

	//缓存焦点图片
	imgTemp_1.src = './img/butkk-h.png'
	imgTemp_2.src = './img/butxx-h.png'

	//窗口底图样式
	wrap.className = 'keepStayTipsWin'
	wrap.style.cssText += 'margin: 0;'
	wrap.style.cssText += 'padding: 0;'
	wrap.style.cssText += 'width: 1280px;'
	wrap.style.cssText += 'height: 720px;'
	wrap.style.cssText += 'position: absolute;'
	wrap.style.cssText += 'left: 0;top: 0;'
	wrap.style.cssText += 'background: rgba(0,0,0,.7) url(./img/k.png) no-repeat 316px 98px;'
	wrap.style.cssText += 'background-size: 648px 436px;'
	wrap.style.cssText += 'z-index: 9999;'

	//鸣人样式
	img.src = './img/r.png'
	img.style.cssText += 'width: 205px;'
	img.style.cssText += 'height: 306px;'
	img.style.cssText += 'position: absolute;'
	img.style.cssText += 'left: 176px;top: 224px;'

	document.body.appendChild(wrap)
	wrap.appendChild(img)
	wrap.appendChild(btnStay)
	wrap.appendChild(btnQuit)
	wrap.appendChild(item_0)
	wrap.appendChild(item_1)
	wrap.appendChild(item_2)
	wrap.appendChild(item_3)
	wrap.appendChild(item_4)
}
//初始化按钮
function createBtnBox(left, top, btnName, isFocus){
	var objNode = document.createElement('div')

	objNode.style.cssText += 'width: 206px;'
	objNode.style.cssText += 'height: 92px;'
	objNode.style.cssText += 'background: url(./img/' + (btnName === 'quit' ? 'butxx' : 'butkk' ) + (isFocus ? '-h' : '') + '.png) no-repeat;'
	objNode.style.cssText += 'background-size: 100% 100%;'
	objNode.style.cssText += 'position: absolute;'
	objNode.style.cssText += 'left: ' + left + 'px;top: ' + top + 'px;'
	isFocus && (objNode.className = 'keepStayTipsFocus')

	return objNode
}
//推荐游戏图标
function createItemBox(fontColor, left, top, isBig, radius, isFocus, obj){
	var objNode = document.createElement('div'),
	span = document.createElement('span')

	objNode.style.cssText += 'width: ' + (isFocus ? 202 : 184) + 'px;'
	objNode.style.cssText += 'height: ' + (isBig ? (isFocus ? 356 : 324) : (isFocus ? 173 : 157)) + 'px;'
	objNode.style.cssText += 'background: url(' + obj.address + ') no-repeat center;'
	objNode.style.cssText += 'background-size: cover;'
	objNode.style.cssText += 'position: absolute;'
	objNode.style.cssText += 'left: ' + (left - (isFocus ? 9 : 0) || 0) + 'px;top: ' + (top - (isFocus ? (isBig ? 16 : 8) : 0) || 0) + 'px;'
	objNode.style.cssText += 'border-radius: ' + (radius || 0) + 'px;'
	objNode.style.cssText += isFocus ? 'box-shadow: 0 0 7px 7px rgba(255,255,255,.9);' : ''
	objNode.style.cssText += isFocus ? 'z-index: 1;' : ''
	objNode.gameMsg = obj
	isFocus && (objNode.className = 'keepStayTipsFocus')

	span.style.cssText += 'width: ' + (isFocus ? 202 : 184) + 'px;'
	span.style.cssText += 'height: ' + (isFocus ? 52 : 48) + 'px;'
	span.style.cssText += 'line-height: ' + (isFocus ? 60 : 54) + 'px;'
	span.style.cssText += 'box-sizing: border-box;'
	span.style.cssText += 'padding: 0 15px;'
	span.style.cssText += 'overflow: hidden;'
	span.style.cssText += 'text-overflow: ellipsis;'
	span.style.cssText += 'white-space: nowrap;'
	span.style.cssText += 'letter-spacing: 2px;'
	span.style.cssText += 'text-align: center;'
	span.style.cssText += 'font-family: "Microsoft YaHei";'
	span.style.cssText += 'font-size: ' + (isFocus ? 24 : 20) + 'px;'
	span.style.cssText += 'background: url(./img/product_' + fontColor + '_bg.png) no-repeat center;'
	span.style.cssText += 'background-size: cover;'
	span.style.cssText += 'position: absolute;'
	span.style.cssText += 'left: 0;'
	span.style.cssText += 'bottom: 0;'
	span.style.cssText += 'border-bottom-left-radius: ' + (radius || 0) + 'px;'
	span.style.cssText += 'border-bottom-right-radius: ' + (radius || 0) + 'px;'
	span.style.cssText += 'color: #fff;'
	span.innerHTML = obj.hava_name

	objNode.appendChild(span)

	return objNode
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
		xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")
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
//发送统计数值
//type可能值：'page'-页面统计，其他-contentID值
//pageName：页面中文名
//contentName：点击按钮中文名
//callback：回调
function toSendPage(type, pageName, contentName, callback){
	var searchStr = searchObj(),
	wayEUserName = searchStr.wayEUserName,
	epgUserName = searchStr.UserID,
	url = type === 'page' ? ('http://' + location.host + '/wbManager/pageBrowsing.do') : ('http://' + location.host + '/wbManager/onClickEvent.do'),
	date = getNowTime(),
	pageID = 'ShouYe',
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
		case /movieGame/.test(location.href): referPageName = '影游联动';referPageID = 'YingYouLianDong';break;
	}
	var params = {
		"turnType": "1",
		"referPageID": referPageID,
		"referPageName": referPageName,

		"normalItemData": {
			"id": "" + gameId
		}
	}

	var intentMessage = JSON.stringify({
		intentType: 0,
		appName: appName,
		className: className,
		extra: [
		{name: "epgDoman",value: epgDoman},
		{name: "areaId",value: _stb_areaid},
		{name: "epgUserId",value: searchObj().UserID},
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
	}
}
