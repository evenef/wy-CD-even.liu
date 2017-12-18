
var game_cl_index = "payBtn"
var data = {}
var isTimeOut = true

var urlStr = /127.0.0.1/.test(location.href) ? '172.18.104.70:8080' : location.host
urlStr = /file:\/\/\//.test(location.href) ? '172.18.104.70:8080' : urlStr

//初始化数据
function initData(obj) {
	data = {
		url: "http://" + urlStr + "/wbManager/shop/shopDetailedList.do",
		toPayURL: 'http://' + urlStr + '/wbManager/shop/cloudID.do',//鉴权接口
		spId: '40002',
		PRODUCTID: obj.PRODUCTID || "16021215165349000001",
		// contentCode: obj.contentCode || '1636120717094114390524',
		contentCode: obj.contentCode || '1728030722284142700018',
		number: obj.number || 100,
		page: obj.page || 1,
		UserID: obj.UserID || "",
		ReturnURL: obj.ReturnURL || "",
		name: "",
		IMG: "",
		list: [],
		isPay: false
	}
}
var currentPage = 0, //当前页
	dataArr = [] //游戏菜单数据

//加载
window.onload = function () {
	var obj = searchToObj(location.search.substring(1))

	//	obj = {}

	document.onkeydown = keyFnc //键盘事件
	initData(obj) //初始化数据
	toSendPage('page', '游乐园')//统计上报页面信息
	getReturnUrl() //获取返回页的ReturnURL
	// pageConsole(JSON.stringify(obj))
	ajaxInitList() //初始化菜单
}

//获取ReturnURL到cookie
function getReturnUrl() {
	var oldUrl = document.cookie.substring(document.cookie.indexOf("ReturnURL")).split(";")[0].split("=")[1]
	document.cookie = "ReturnURL" + "=" + (data.ReturnURL || oldUrl)
	data.ReturnURL = data.ReturnURL || oldUrl
}

//获取product信息
function searchToObj(searchStr) {
	var obj = {}
	searchStr.split("&").map(function(item) {
		obj[item.split("=")[0]] = item.split("=")[1]
	})
	return obj
}

//初始化菜单
function ajaxInitList() {
	ajax({ //数据获取
		url: data.url,
		type: "GET",
		dataType: "json",
		data: {
			// account: data.account,
			PRODUCTID: data.PRODUCTID,
			number: data.number,
			page: data.page,
			UserID: data.UserID,
		},
		success: function (resText, resXML) {
			data.list = JSON.parse(resText).object.list
			// pageConsole(resText.substring(0, 1000))
			var j = 0
			for (var i = 0; i < data.list.length; i++) {
				if ((i >= 8 && (i - 8) % 10 === 0) || i === 0) {
					dataArr[i ? ++j : 0] = []
				}
				dataArr[j].push(data.list[i])
			}
			initList(dataArr[currentPage])
		},
		fail: function (err) {
			console.log("%c获取信息失败!", "color: #f0f", err)
		}
	})
}

//class选择器
function getClass(className) {
	return document.getElementsByClassName(className)
}
//id选择器
function getId(id) {
	return document.getElementById(id)
}

//键盘事件
function keyFnc(event) {
	getClass(getClass("button_cl").length ? "button_cl" : "payBtn_cl")[0].style.zIndex = ""
	var buttonItem = getClass("buttonItem")
	// 37 ←	 38	↑	 39	→	 40	↓	13 in	8 return
	var arr = game_cl_index.split("-")
	var i = parseInt(arr[0]),
	j = parseInt(arr[1])
	if (data.UserID){
		switch (event.keyCode) {
			case 37:
			var rule_index = i + "-" + --j
			if (!getId(rule_index) && i === 1)
				rule_index = --i + "-" + j
			game_cl_index = getId(rule_index) ? rule_index : game_cl_index
			if (game_cl_index !== rule_index && game_cl_index !== "payBtn") {
				if (dataArr[currentPage - 1]) {
					game_cl_index = currentPage < 1 ? 0 : i + "-4"
					initList(dataArr[--currentPage])
				}
			}
			break
			case 38:
			game_cl_index = (game_cl_index === "payBtn") ? (getId("1-2") ? "1-2" : "0-0") : game_cl_index
			var rule_index = --i + "-" + j
			game_cl_index = getId(rule_index) ? rule_index : game_cl_index
			break
			case 39:
			var rule_index = i + "-" + ++j
			if (!getId(rule_index) && i === 1)
				rule_index = --i + "-" + j
			game_cl_index = getId(rule_index) ? rule_index : game_cl_index
			if (game_cl_index !== rule_index && game_cl_index !== "payBtn") {
				if (dataArr[currentPage + 1]) {
					game_cl_index = i + "-0"
					initList(dataArr[++currentPage])
				}
			}
			break
			case 40:
			var rule_index = ++i + "-" + j
			if(currentPage){
				for (var num = j; num >= 0; num--) {
					getId(i + "-" + num) && (rule_index = i + "-" + num)
					if (getId(rule_index))
						break
				}
			}
			game_cl_index = getId(rule_index) ? rule_index : "payBtn"
			break
			case 13:
			if(!isTimeOut)
				return
			console.log(getClass("payBtn_cl").length ? getClass("payBtn_cl")[0].className : getClass("button_cl")[0].attributes.game_id.value)
			if(getClass("payBtn_cl").length){
				toSendPage('toOrder', '游乐园', '跳转订购页')
				toPayFnc()
			}else{
				toSendPage('toGame' + getClass("button_cl")[0].attributes.game_id.value, '游乐园', '游戏：' + getClass("button_cl")[0].attributes.game_name.value)
				startActivity(getClass("button_cl")[0].attributes.game_id.value, data.UserID)
			}
			break
			case 8:
			location.href = data.ReturnURL
			break
			default:
			console.log(getClass("payBtn_cl").length ? getClass("payBtn_cl")[0].className : getClass("button_cl")[0].attributes.game_id.value)
		}
	}
	for (var val = 0; val < buttonItem.length; val++) {
		if (buttonItem[val].id == game_cl_index) {
			buttonItem[val].className += buttonItem[val].id === "payBtn" ? " payBtn_cl" : " button_cl"
		} else {
			buttonItem[val].className = "buttonItem"
		}
	}
	currentBoxMove()
}

//初始化游戏列表
function initList(arr) {
	var wrap = getClass("menu")[0]
	var list = getClass("gameList")[0]
	var middle
	var i = 0,
	j = 0
	list.innerHTML = ""
	if (currentPage < 1) { //首页菜单
		arr.forEach(function (item, index) {
			if (index > 0 && index < 7) {
				if (index === 1) {
					list.innerHTML += "<div class='middleWrap'><div class='middleUp'></div></div>"
					middle = getClass("middleUp")[0]
				}else if(index === 4){
					getClass("middleWrap")[0].innerHTML += "<div class='middleDown'></div>"
					middle = getClass("middleDown")[0]
				}
				// if(index === 1 || index === 3 || index === 4 || index === 6){
					addButtonItem(item, middle, (index === 1 || index === 3 || index === 4 || index === 6) ? "./img/product_green_bg.png" : "")
				// }else{
				// 	addButtonItem(item, middle, "")
				// }
				return
			}
			addButtonItem(item, list, "")
		})
		var buttonItem = getClass("buttonItem")
		for (var val = 0; val < buttonItem.length; val++) {
			if (j <= 3) {
				buttonItem[val].id = i + "-" + j++
			} else if (j > 3 && i < 1) {
				j = 1
				buttonItem[val].id = ++i + "-" + j++
			} else if (val < 8) {
				buttonItem[val].id = "0-4"
			}
		}
	} else { //非首页菜单
		arr.forEach(function (item, index) {
			if (index === 0) {
				list.innerHTML += "<div class='middleWrap' style='width:1450px'><div class='middleUp'></div></div>"
				middle = getClass("middleUp")[0]
			}else if(index === 5){
				getClass("middleWrap")[0].innerHTML += "<div class='middleDown'></div>"
				middle = getClass("middleDown")[0]
			}
			if (index % 2 && index <= 4 || !(index % 2) && index > 4) {
				addButtonItem(item, middle, "./img/product_green_bg.png")
			} else {
				addButtonItem(item, middle, "")
			}
			return
		})
		var buttonItem = getClass("buttonItem")
		for (var val = 0; val < buttonItem.length - 1; val++) {
			if (j <= 4) {
				buttonItem[val].id = i + "-" + j++
			} else if (i < 1) {
				j = 0
				buttonItem[val].id = ++i + "-" + j++
			}
		}
	}
	// currentBoxMove()
}

//创建游戏图标
function addButtonItem(obj, wrap, btnSrc) {
	obj.ADDRESS = obj.ADDRESS || ""
	btnSrc = btnSrc || "./img/product_bule_bg.png"
	obj.name = obj.name || "暂无"
	wrap.innerHTML += '<div class="buttonItem' + '" game_id="' + obj.ID + '" game_name="' + obj.name + '" style="background-image:url(\'' + obj.ADDRESS + '\')"><img src="' + btnSrc + '" alt="gameImg"><span class="gameName">' + obj.name + '</span></div>'
	// getId("currentBox").style.display = "block"
	// getId("currentBox").style.width = getClass(getClass("button_cl").length ? "button_cl" : "payBtn_cl")[0].clientWidth + "px"
	// getId("currentBox").style.height = getClass(getClass("button_cl").length ? "button_cl" : "payBtn_cl")[0].clientHeight + "px"
}

//ajax
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


function currentBoxMove(){
	var index = 40,
	listLeft = getClass("gameList")[0].offsetLeft,
	listTop = getClass("gameList")[0].offsetTop,
	middleLeft = getClass("middleWrap")[0].offsetLeft,
	middleTop = getClass("middleWrap")[0].offsetTop

	boxMove(getId("currentBox"), getClass(getClass("button_cl").length ? "button_cl" : "payBtn_cl")[0])
}


//box移动
function boxMove(box, eleAfter) {
	// console.log(eleAfter.id)
	box.style.display = eleAfter.id === "payBtn" ? "none" : "block"
	var listLeft = getClass("gameList")[0].offsetLeft,
	listTop = getClass("gameList")[0].offsetTop,
	middleLeft = getClass("middleWrap")[0].offsetLeft,
	middleTop = getClass("middleWrap")[0].offsetTop

	var wA = eleAfter.scrollWidth,
	hA = eleAfter.scrollHeight,
	wBox = box.scrollWidth,
	hBox = box.scrollHeight,
	w = (wA - wBox) / 1,
	h = (hA - hBox) / 1,
	xA = eleAfter.offsetLeft + (eleAfter.id === "payBtn" ? 0 : listLeft) + ((eleAfter.id === "0-0") || (eleAfter.id === "0-4") ? 0 : middleLeft) - (eleAfter.id === "payBtn" ? middleLeft : 0),
	yA = eleAfter.offsetTop + (eleAfter.id === "payBtn" ? 0 : listTop),
	xBox = box.offsetLeft,
	yBox = box.offsetTop,
	x = (xA - xBox) / 1,
	y = (yA - yBox) / 1
	var setTime = setInterval(function () {
		xBox += x
		yBox += y
		wBox += w
		hBox += h
		box.style.left = xBox + "px"
		box.style.top = yBox + "px"
		box.style.width = wBox + "px"
		box.style.height = hBox + "px"
		if (((x > 0 && xBox >= xA) || (x < 0 && xBox <= xA) || x === 0) && ((y > 0 && yBox >= yA) || (y < 0 && yBox <= yA) || y === 0)) {
			clearInterval(setTime)
			xBox = xA
			yBox = yA
			wBox = wA
			hBox = hA
			box.style.left = (xA) + "px"
			box.style.top = (yA) + "px"
			box.style.width = (wA) + "px"
			box.style.height = (hA) + "px"
		}
	}, 2)

	return eleAfter
}

function toPayFnc(){
	var dataSend = {
			spId: data.spId,
			epgId: data.UserID,
			contentId: data.contentCode,
			productId: data.PRODUCTID,
		}
	if(!isTimeOut){
		return
	}
	isTimeOut = false
	ajax({
		url: data.toPayURL,
		data: dataSend,
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





// function pageConsole(text){
// 	if(getId('pageDiv')){
// 		var div = getId('pageDiv')
// 	}else{
// 		var div = document.createElement('div')
// 		div.id = 'pageDiv'
// 		document.body.appendChild(div)
// 	}

// 	div.style.background = 'rgba(0,0,0,.7)'
// 	div.style.position = 'absolute'
// 	div.style.left = '50px'
// 	div.style.top = '0'
// 	div.style.color = '#fff'
// 	div.style.fontSize = '16px'

// 	var p = document.createElement('p')
// 	div.appendChild(p)
// 	p.innerHTML = text

// 	p.style.borderTop = '1px solid #f99'
// }