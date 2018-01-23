var isTimeOut = true

var urlStr = /127.0.0.1/.test(location.href) ? '172.18.104.70:8080' : location.host
urlStr = /file:\/\/\//.test(location.href) ? '172.18.104.70:8080' : urlStr

var data = {}
//初始化数据
function initData(obj) {
	data = {
		url: "http://" + urlStr + "/wbManager/shop/shopDetailedList.do",
		toPayURL: 'http://' + urlStr + '/wbManager/shop/cloudID.do',//鉴权接口
		spId: '40003',
		PRODUCTID: obj.PRODUCTID || data.PRODUCTID || '17140309181021000002',
		// contentCode: obj.contentCode || '1732011215403626475399',
		contentCode: obj.contentCode || '1732011215403626475399',
		number: obj.number || data.number || 100,
		page: obj.page || data.page || 0,
		UserID: obj.UserID || data.UserID,

		ReturnURL: obj.ReturnURL || data.ReturnURL,
		list: obj.list ? (obj.list[0] ? obj.list : data.list) : data.list,
		isPay: false
	}
}
var chooseItemClass = "payMonths", currentGameID = 0

//页面初始化
window.onload = function () {
	// console.log(getSearchAndCookie())
	// console.log(document.cookie)
	initData(getSearchAndCookie())
	toSendPage('page', '星乐园')//统计上报页面信息

	// initGameItem("menu", data.list, data.page, ["0-0", "0-3"])
	// getClass("chooseBox")[0].style.display = "block"
	// document.onkeydown = keyFnc
	
	getData()
}

//ajax获取数据
function getData() {
	ajax({
		url: data.url || '',
		type: "GET",
		data: {
			PRODUCTID: data.PRODUCTID,
			number: data.number || 100,
			page: data.page || 1,
			UserID: data.UserID || '',
		},
		success: function (param) {
			param = JSON.parse(param)
			initData(param.object)
			initGameItem("menu", data.list, data.page, ["0-0", "0-3"])
			// getClass("chooseBox")[0].style.display = "block"
			document.onkeydown = keyFnc
			// currentGameID = getClass("item" + chooseItemClass)[0].id
		},
		fail: function (err) {
			console.log("%c获取信息失败!", "color: #f0f", err)
		}
	})
}
//键盘事件
// 37 ←    38 ↑    39 →    40 ↓   13 in   8 back
function keyFnc(event) {
	var i = parseInt(chooseItemClass.split("-")[0]),
	j = parseInt(chooseItemClass.split("-")[1]),
	oldChooseClass = chooseItemClass
	switch (event.keyCode) {
		case 37:
		// if(chooseItemClass === "payOneMonth"){
		// 	chooseItemClass = "payMonths"
		// }else if(j === 0 && data.page > 0) {
		if(j === 0 && data.page > 0) {
			j === 0 && (chooseItemClass = i + "-4")
			initGameItem("menu", data.list, --data.page, data.page ? false : ["0-0", "0-3"])
		}else{
			j > 0 && (chooseItemClass = i + "-" + (j - 1))
		}
		break
		case 38:
		if (chooseItemClass === "payMonths"){
			var m = 1
			for(var n = 2; n >= 0; n--){
				chooseItemClass = m + "-" + n
				if(getClass("item" + chooseItemClass)[0]){
					break
				}else{
					if(m > 0 && n <= 0){
						n = 2
						m--
					}
				}
			}
		// }else if (chooseItemClass === "payOneMonth"){
		// 	!data.page && (chooseItemClass = "0-3");
		// 	data.page && (chooseItemClass = "1-3")
		// 	var m = parseInt(chooseItemClass.split("-")[0])
		// 	for(var n = parseInt(chooseItemClass.split("-")[1]); n >= 0; n--){
		// 		chooseItemClass = m + "-" + n
		// 		if(getClass("item" + chooseItemClass)[0]){
		// 			break
		// 		}else{
		// 			if(m > 0 && n <= 0){
		// 				n = 4
		// 				m--
		// 			}
		// 		}
		// 	}
		}else{
			i > 0 && (chooseItemClass = (i - 1) + "-" + j)
		}
		break
		case 39:
		if (j === 4 && data.page < Math.ceil((data.list.length - 8) / 10)) {
			j === 4 && (chooseItemClass = i + "-0")
			initGameItem("menu", data.list, ++data.page)
		} else{
			if (j < 4) {
				data.page != Math.ceil((data.list.length - 8) / 10) && (chooseItemClass = i + "-" + (j + 1));
				(data.list.length - 8) / 10 === Math.ceil((data.list.length - 8) / 10) && (chooseItemClass = i + "-" + (j + 1));
				((data.list.length - 8) % 10 > 4 && data.page === Math.ceil((data.list.length - 8) / 10)) && (chooseItemClass = i + "-" + (j + 1));
				(j < ((data.list.length - 8) % 10 - 1) && (data.list.length - 8) % 10 <= 4 && data.page === Math.ceil((data.list.length - 8) / 10)) && (chooseItemClass = "0-" + (j + 1))
			}
			data.page && (chooseItemClass = getClass("item" + chooseItemClass)[0] ? chooseItemClass : ("0-" + (j + 1)))
			data.page && (chooseItemClass = getClass("item" + chooseItemClass)[0] ? chooseItemClass : ("0-" + (j - 1 >= 0 ? j - 1 : 0)))
		}
		break
		case 40:
		// if ((chooseItemClass === "0-0" && !data.page) || (i && j <= 2))
		// 	chooseItemClass = "payMonths"
		// else if ((chooseItemClass === "0-3" && !data.page) || (i && j > 2))
		// 	chooseItemClass = "payOneMonth"
		if(((chooseItemClass === "0-0" || chooseItemClass === "0-3") && !data.page) || i)
			chooseItemClass = "payMonths"
		else{
			var m = j
			while(j >= 0){
				chooseItemClass = (i + 1) + "-" + j--
				if(getClass("item" + chooseItemClass)[0])
					break
				else
					// chooseItemClass = m <= 2 ? "payMonths" : "payOneMonth"
					chooseItemClass = "payMonths"
			}
		}
		break
		case 13:
		if(!isTimeOut)
			return
		if(chooseItemClass != "payMonths"){
			toSendPage('toGame' + getClass('item' + chooseItemClass)[0].id, '星乐园', '游戏：' + getClass('item' + chooseItemClass)[0].children[1].innerHTML)
			startActivity(currentGameID, data.UserID)
		}else{
			toSendPage('toOrder', '星乐园', '跳转订购页')
			toPayFnc()
		}
		console.log("gameID", currentGameID)
		break
		case 8:
		// history.back(-1)
		// console.log("back")
		// console.log(data.ReturnURL)
		location.href = data.ReturnURL
		break
	}
	console.log(chooseItemClass)
	if(oldChooseClass !== chooseItemClass){
		getClass("chooseBox")[0].style.display = "block";
		// getClass("payOneMonth")[0].style.background = ""
		getClass("payMonths")[0].style.backgroundImage = ""
		if(chooseItemClass === "payMonths"){
			getClass("chooseBox")[0].style.display = "none"
			getClass(chooseItemClass)[0].style.backgroundImage = "url('./img/but-h.png')"
		}
		currentGameID = chooseMove("chooseBox", chooseItemClass).id
	}
}








//id获取元素
function getId(id) {
	return document.getElementById(id)
}
//class获取元素集合
function getClass(className) {
	return document.getElementsByClassName(className)
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
//格式化参数
function formatParams(param) {
	var arr = []
	for (var name in param) {
		arr.push(encodeURIComponent(name) + "=" + encodeURIComponent(param[name]))
	}
	return arr.join("&")
}
//获取、修改cookie
function getSearchAndCookie() {
	var obj = searchObj()
	// if(obj.ReturnURL)
	//     document.cookie = "ReturnURL=" + obj.ReturnURL
	return obj
}
//获取location.search信息
function searchObj() {
	var obj = {}
	location.search.substring(1).split("&").map(function(item) {
		obj[item.split("=")[0]] = item.split("=")[1]
	})
	return obj
}
//初始化游戏列表数据
function initDataArr(listArr) {
	var arr = [],
	j = 0
	for (var i = 0; i < listArr.length; i++) {
		if ((i >= 8 && (i - 8) % 10 === 0) || i === 0) {
			arr[i ? ++j : 0] = []
		}
		arr[j].push(listArr[i])
	}
	return arr
}
//初始化游戏图标
//wrapId容器id
//listArr游戏集合
//page当前页数（起始页数page=0）
//bigArr：bigItem的编号集合（默认false）["00","03"]
function initGameItem(wrapId, listArr, page, bigArr) {
	page = page || 0
	bigArr = bigArr || false
	var wrap = getId(wrapId)
	var listArr = initDataArr(listArr)[page]
	if (listArr) {
		var n = 0,
		m = 0
		wrap.innerHTML = ""
		for (var i = 0; i < listArr.length; i++) {
			if (m > 4) {
				n++
				m = 0
			}
			if (!page && n && (m == bigArr[0].split("-")[1] || m == bigArr[1].split("-")[1])) {
				getClass("item0" + "-" + m)[0].className += " bigItem"
				m++
			}
			wrap.innerHTML += '<div class="gameItem item' + n + '-' + (m++) + '" id="' + listArr[i].ID + '"><div class="gameItemImg" style="background-image:url(' + listArr[i].ADDRESS + ')"></div><span>' + listArr[i].name + '</span></div>'
		}
		if(page){
			for(var i = 0; i <= 1; i++){
				for(var j = 0; j <= 4; j++){
					document.getElementsByClassName("item" + i + "-" + j)[0] && (document.getElementsByClassName("item" + i + "-" + j)[0].style.left = 138 + 204 * j + "px")
				}
			}
		}
	} else {
		console.log("%c载入的列表为空，请检查", "color: f0f")
	}
}
//选择框移动事件
function chooseMove(boxClass, chooseItemStr) {
	var chooseItem = {}
	if(!chooseItemStr.split("-")[1]){
		chooseItem = getClass(chooseItemStr)[0]
	}else{
		chooseItem = getClass("item" + chooseItemStr.split("-")[0] + "-" + chooseItemStr.split("-")[1])[0]
		chooseItem = chooseItem ? chooseItem : getClass("item" + (chooseItemStr.split("-")[0] - 1) + "-" + chooseItemStr.split("-")[1])[0]
	}
	boxMove(getClass(boxClass)[0], chooseItem)
	return chooseItem
}
//box移动
function boxMove(box, eleAfter) {
	var wA = eleAfter.scrollWidth - 2,
	hA = eleAfter.scrollHeight - 2,
	wBox = box.scrollWidth,
	hBox = box.scrollHeight,
	w = (wA - wBox) / 1,
	h = (hA - hBox) / 1,
	xA = eleAfter.offsetLeft + 1,
	yA = eleAfter.offsetTop + 1,
	xBox = box.offsetLeft,
	yBox = box.offsetTop,
	x = (xA - xBox) / 1,
	y = (yA - yBox) / 1,
	radiusBox = wBox > 200 ? 75 : 42,
	radius = ((wA - wBox) > 10 ? 33 : ((wA - wBox) < -10 ? -33 : 0)) / 50
	var setTime = setInterval(function () {
		xBox += x
		yBox += y
		wBox += w
		hBox += h
		radiusBox += radius
		box.style.left = xBox + "px"
		box.style.top = yBox + "px"
		box.style.width = wBox + "px"
		box.style.height = hBox + "px"
		box.style.borderRadius = radiusBox + "px"
		if (((x > 0 && xBox >= xA) || (x < 0 && xBox <= xA) || x === 0) && ((y > 0 && yBox >= yA) || (y < 0 && yBox <= yA) || y === 0)) {
			clearInterval(setTime)
			xBox = xA
			yBox = yA
			wBox = wA
			hBox = hA
			radiusBox = wBox > 200 ? 75 : 42
			box.style.left = (xA) + "px"
			box.style.top = (yA) + "px"
			box.style.width = (wA) + "px"
			box.style.height = (hA) + "px"
			box.style.borderRadius = (wBox > 200 ? 75 : 42) + "px"
		}
	}, 2)
	return eleAfter
}

//确认选择跳转游戏详情
function startActivity(gameId, userId) {
	var appName = "com.utstar.appstoreapplication.activity";
	var className = "com.utstar.appstoreapplication.activity.StartAppActivity";
	
	var mac = "",
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
		case /park/.test(location.href): referPageName = '游乐园';referPageID = 'YouLeYuan';break;
		case /starLand/.test(location.href): referPageName = '星乐园';referPageID = 'XingLeYuan';break;
	}

	var params = {
		"turnType": "1",
		"referPageID": referPageID,
		"referPageName": referPageName,

		"normalItemData": {
			"id": "" + gameId
		}
	};

	var intentMessage = JSON.stringify({
		intentType: 0,
		appName: appName,
		className: className,
		extra: [{
			name: "epgDoman",
			value: epgDoman
		},{
			name: "areaId",
			value: _stb_areaid
		},{
			name: "epgUserId",
			value: userId
		},{
			name: "epgToken",
			value: epgToken
		},{
			name: "isDispath",
			value: true
		},{
			name: "action",
			value: "0"
		},{
			name: "params",
			value: params
		},{
			name: "referPageName",
			value: referPageName
		},{
			name: "referPageID",
			value: referPageID
		}]
	})
	try {
		STBAppManager.startAppByIntent(intentMessage);
	} catch (e) {
		console.log(intentMessage)
	}
}

function toPayFnc(){
	var pp = {
			spId: data.spId,
			epgId: data.UserID,
			contentId: data.contentCode,
			productId: data.PRODUCTID,
		}
		console.log(pp)
	if(!isTimeOut){
		return
	}
	isTimeOut = false
	ajax({
		url: data.toPayURL,
		data: pp,
		success: function(param){
			param = JSON.parse(param)
			if(!param.rltcode && param.object.list.error_code == 0){
				data.isPay = true
				var p = document.createElement('p')
				p.innerHTML = '暂时无需订购'
				document.body.appendChild(p)

				p.style.background = 'rgba(0,0,0,.5)'
				p.style.width = '240px'
				p.style.height = '50px'
				p.style.lineHeight = '50px'
				p.style.textAlign = 'center'
				p.style.borderRadius = '12px'
				p.style.color = '#fff'
				p.style.position = 'absolute'
				p.style.left = '520px'
				p.style.top = '350px'
				setTimeout(function(){
					document.body.removeChild(p)
					isTimeOut = true
				},3000)
			}else{
				data.isPay = false
				document.location.href = 'http://' + location.host + '/Wanba/EPG/Order/order.jsp?userID=' + data.UserID + '&productId=' + data.PRODUCTID + '&contentCode=' + data.contentCode + '&backUrl=' + escape(document.location.href)
			}
		}
	})
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
//获取location.search信息
function searchObj() {
	var obj = {}
	location.search.substring(1).split("&").map(function(item) {
		obj[item.split("=")[0]] = item.split("=")[1]
	})
	return obj
}
//发送统计数值
//type可能值：'page'-页面统计，其他-contentID值
//pageName：页面中文名
//contentName：点击按钮中文名
//callback：回调
function toSendPage(type, pageName, contentName, callback){
	var searchStr = searchObj(),
	wayEUserName = searchStr.wayEUserName,
	url = type === 'page' ? ('http://' + location.host + '/wbManager/pageBrowsing.do') : ('http://' + location.host + '/wbManager/onClickEvent.do'),
	date = getNowTime(),
	pageID = location.href.split('/index.html')[0].split('/').pop(),
	pageName = pageName || document.title,
	contentID = type === 'page' ? '' : type,
	contentName = contentName || ''

	var obj = {
		epgUserName: data.UserID,
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