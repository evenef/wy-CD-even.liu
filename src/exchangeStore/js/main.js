
document.documentElement.style.fontSize = '66.6666666666666667px'

var urlStr = /localhost/.test(location.href) ? '172.18.104.17:9088' : location.host
urlStr = /file:\/\/\//.test(location.href) ? '172.18.104.17:9088' : urlStr

var data = {
	getAwardListUrl: "http://" + urlStr + "/wbManager/userCentre/getAwards.do",//获取奖品列表【接口】
	getAllCardsUrl: "http://" + urlStr + "/wbManager/userCentre/findAllCard.do",//获取所有卡牌信息【接口】
	getUserCardsUrl: "http://" + urlStr + "/wbManager/userCentre/findUserCardInfo.do",//获取用户拥有的卡牌信息【接口】
	exchangeUrl: "http://" + urlStr + "/wbManager/userCentre/exchangeAward.do",//兑奖【接口】
	recordUrl: "http://" + urlStr + "/wbManager/userCentre/userExRec.do",//兑奖记录【接口】
	getCountUrl: "http://" + urlStr + "/wbManager/userCentre/getUserCardSignNum.do",//获取用户剩余签到次数【接口】
	getDrawNum: "http://" + urlStr + "/wbManager/userCentre/getUserCardDrawNum.do",//获取剩余抽奖次数【接口】
	extractCardsUrl: 'extractCardsUrl',//卡牌抽奖跳转【链接】
	regCardsUrl: 'regCardsUrl',//卡牌签到跳转【链接】
	epgUserName: "epg010010101",
	userCardsObj: {},
	awardsList: [],
	cardsList: [],
	recordText: []
}
var chooseNum = "0-0",
chooseBtn = '',
chooseClassName = chooseNum,
imgUrlArr = [],
useKey = true,
isdown = false,
isInit = true,
isInitData = true



window.onload = function(){
	var obj = getSearchAndCookie()//获取返回链接
	obj.UserID && (data.epgUserName = obj.UserID)
	data.extractCardsUrl = location.href.replace(/exchangeStore/, 'cardDraw')
	data.regCardsUrl = location.href.replace(/exchangeStore/, 'registerCards')
	toSendPage('page', '兑换中心（卡牌活动）')//页面访问统计
	initData()//初始化页面
	document.onkeydown = keyFnc
}

//初始化签到次数
function initRegCount(){
	ajax({
		url: data.getCountUrl,
		type: 'post',
		data: {
			userId: data.epgUserName
		},
		success: function(param){
			param = JSON.parse(param)
			console.log("%cparam", "color:#f0f", param)
			if(!param.rltcode && param.object){
				getEl('.regCards').children[1].style.display = 'block'
			}else{
				getEl('.regCards').children[1].style.display = ''
			}
		}
	})
}

//初始化抽奖次数
function initDrawCount(){
	ajax({
		url: data.getDrawNum,
		type: 'post',
		data: {
			userId: data.epgUserName
		},
		success: function(param){
			param = JSON.parse(param)
			console.log("%cparam", "color:#f0f", param)
			if(!param.rltcode && param.object){
				getEl('.extractCards').children[1].style.display = 'block'
			}else{
				getEl('.extractCards').children[1].style.display = ''
			}
		}
	})
}

//初始化数据
function initData(){
	if(!isInitData){
		return
	}
	//所有奖品
	initAwards()
	//所有卡牌
	ajax({
		url: data.getAllCardsUrl,
		success: function(param){
			param = JSON.parse(param)
			// console.log('卡牌',param)
			if(!param.rltcode)
				data.cardsList = param.object
			imgUrlArr = []
			data.cardsList.map(function(item){
				imgUrlArr.push(item.RES_IMG)
			})
			imgLoadFnc(imgUrlArr)
		}
	})

	//签到次数
	initRegCount()
	//抽奖次数
	initDrawCount()

	isInitData = false
	setTimeout(function(){
		isInitData = true
	},3000)
}
//初始化奖品
function initAwards(){
	//所有奖品
	ajax({
		url: data.getAwardListUrl,
		success: function(param){
			param = JSON.parse(param)
			// console.log('奖品',param)
			if(!param.rltcode)
				data.awardsList = param.object
			if(data.awardsList[0]){
				initList(data.awardsList)
				isInit && moveBottomBtn('up')
				isInit = false

				if(/\d-\d/.test(chooseClassName) && getEl('.award' + chooseClassName)){
					getEl('.award' + chooseClassName).className += ' currentChooseAward'
					isdown = false
				}
				useKey = isdown ? false : true
			}
		}
	})
	//用户卡牌
	ajax({
		url: data.getUserCardsUrl,
		data: {
			userId: data.epgUserName
		},
		success: function(param){
			param = JSON.parse(param)
			// console.log('用户卡牌',param)
			if(!param.rltcode)
				data.userCardsObj = param.object
		}
	})

	if(/\d-\d/.test(chooseClassName) && getEl('.award' + chooseClassName)){
		getEl('.award' + chooseClassName).className += ' currentChooseAward'
		isdown = false
	}else{
		if(/\d-\d/.test(chooseClassName))
			moveBottomBtn('', 1)
		else
			moveBottomBtn('reset')
	}
	useKey = isdown ? false : true
}
//初始化奖品列表
function initList(arr){
	if(!arr || !arr[0]){
		console.log('列表为空')
		return
	}
	var upWrap = getEl('.listUpper')
	var lowWrap = getEl('.listLower')
	upWrap.innerHTML = ''
	lowWrap.innerHTML = ''
	arr.map(function(item, index) {
		var li = document.createElement('li')
		var img = document.createElement('img')
		img.src = item.RES_IMG
		li.awardMsg = item
		li.appendChild(img)
		li.innerHTML += '<div></div><span>' + '剩余：' + item.SURPLUS_NUM + '</span><p>' + item.AWARD_NAME + '</p>'
		if(index < 5 || (index >= 10 && !(index % 2))){
			li.className = 'award award0-' + upWrap.children.length + ' '
			upWrap.appendChild(li)
		}else{
			li.className = 'award award1-' + lowWrap.children.length + ' '
			lowWrap.appendChild(li)
		}
	})

	if(getEl('.listUpper').children.length > 5){
		getEl('.rightSide').style.display = 'block'
	}
}
//键盘事件
// 37 ←    38 ↑    39 →    40 ↓   13 in   8 back(*********返回键待定************)
function keyFnc(event){
	if(/\d-\d/.test(chooseClassName)){
		var i = parseInt(chooseClassName.split('-')[0])
		var j = parseInt(chooseClassName.split('-')[1])
	}
	switch(event.keyCode){
		case 37:
		if(useKey){
			chooseClassName = chooseNum = chooseBtn = listItemChoose('left', 'award', chooseClassName, 'currentChooseAward')
			listMove(chooseClassName)
		}else if(chooseClassName === 'exchange'){
			if(!getEl('.exchangeBtn-e')){
				getEl('.toDrawBtn').className = 'toDrawBtn toDrawBtn-h'
				getEl('.toRegBtn').className = 'toRegBtn'
				getEl('.exchangeBtn').className = 'exchangeBtn exchangeBtn-e'
			}else if(getEl('.toRegBtn-h') && !getEl('.exchangeBtn-qs')){
				getEl('.toDrawBtn').className = 'toDrawBtn'
				getEl('.toRegBtn').className = 'toRegBtn'
				getEl('.exchangeBtn').className = 'exchangeBtn'
			}
		}else if(chooseClassName === 'closeWin'){
			getEl('.toDrawBtn').className = 'toDrawBtn toDrawBtn-h'
			getEl('.toRegBtn').className = 'toRegBtn'
		}else if(isdown){
			moveBottomBtn('left')
			break
		}
		break
		case 38:
		if(getEl('.logWin').style.display){
			var arr = getEl('.logText').children
			var index = 0
			for(var i = arr.length - 1; i >= 0 ; i--){
				if(arr[i].style.display && index < 8){
					arr[i].style.display = ''
					index++
				}
			}
		}
		if(useKey){
			chooseClassName = chooseNum = chooseBtn = listItemChoose('up', 'award', chooseClassName, 'currentChooseAward')
			listMove(chooseClassName)
		}else if(isdown){
			moveBottomBtn('up')
			useKey = true
			break
		}
		break
		case 39:
		if(useKey){
			chooseClassName = chooseNum = chooseBtn = listItemChoose('right', 'award', chooseClassName, 'currentChooseAward')
			listMove(chooseClassName)
		}else if(chooseClassName === 'exchange'){
			if(!getEl('.exchangeBtn-e')){
				getEl('.toDrawBtn').className = 'toDrawBtn'
				getEl('.toRegBtn').className = 'toRegBtn toRegBtn-h'
				getEl('.exchangeBtn').className = 'exchangeBtn exchangeBtn-e'
			}else if(getEl('.toDrawBtn-h') && !getEl('.exchangeBtn-qs')){
				getEl('.toDrawBtn').className = 'toDrawBtn'
				getEl('.toRegBtn').className = 'toRegBtn'
				getEl('.exchangeBtn').className = 'exchangeBtn'
			}
		}else if(chooseClassName === 'closeWin'){
			getEl('.toDrawBtn').className = 'toDrawBtn'
			getEl('.toRegBtn').className = 'toRegBtn toRegBtn-h'
		}else if(isdown){
			moveBottomBtn('right')
			break
		}
		break
		case 40:
		if(getEl('.logWin').style.display){
			var arr = getEl('.logText').children
			var index = 0
			for(var i = 0; i < arr.length - (arr.length % 8 ? arr.length % 8 : 8); i++){
				if(!arr[i].style.display && index < 8){
					arr[i].style.display = 'none'
					index++
				}
			}
		}
		if(useKey){
			if(i < 1 && getEl('.listLower').children.length){
				chooseClassName = chooseNum = chooseBtn = listItemChoose('down', 'award', chooseClassName, 'currentChooseAward')
				listMove(chooseClassName)
			}else{
				getEl('.currentChooseAward') && (getEl('.currentChooseAward').className = getEl('.currentChooseAward').className.replace(/ currentChooseAward/g, ''))
				if(j < 2){
					moveBottomBtn('', 1)
				}else if(j === 2){
					moveBottomBtn('', 2)
				}else if(j >= 3){
					moveBottomBtn('', 3)
				}
				useKey = false
				isdown = true
			}
		}
		break
		case 13:
		// console.log(chooseClassName)
		if(/-/.test(chooseClassName)){
			var el = getEl('.currentChooseAward').awardMsg
			toSendPage('exchangeStore_' + el.FK_AWARD_ID, '兑换中心（卡牌活动）', '奖品：' + el.AWARD_NAME)

			if(getEl('.award' + chooseClassName).awardMsg.SURPLUS_NUM){
				tipsWinOpen('exchange', getEl('.award' + chooseClassName))
			}else{
				tipsWinOpen('empty')
				chooseClassName = 'exchange'
			}
		}else if(chooseClassName === 'exchange'){
			if(!getEl('.exchangeBtn-e') && !getEl('.exchangeBtn-qs')){
				tipsWinOpen('success', getEl('.exchangeWin').awardMsg)
				chooseClassName = 'closeWin'
			}else if(getEl('.toDrawBtn-h')){
				toSendPage('exchangeStore_' + chooseClassName, '兑换中心（卡牌活动）', '前往抽奖', function(){
					document.location.href = data.extractCardsUrl
				})
			}else if(getEl('.toRegBtn-h')){
				toSendPage('exchangeStore_' + chooseClassName, '兑换中心（卡牌活动）', '前往签到', function(){
					document.location.href = data.regCardsUrl
				})
			}
		}else if(chooseClassName === 'closeWin' && !getEl('.awardsEmpty').style.display && !getEl('.exchangeWin').style.display){
			getEl('.tipsWin').style.display = ''
			chooseClassName = chooseBtn
			initAwards()
		}else if(chooseClassName === 'closeWin' && (getEl('.toDrawBtn-h') || getEl('.toRegBtn-h'))){
			if(getEl('.toDrawBtn-h')){
				toSendPage('exchangeStore_' + chooseClassName, '兑换中心（卡牌活动）', '前往抽奖', function(){
					document.location.href = data.extractCardsUrl
				})
			}else if(getEl('.toRegBtn-h')){
				toSendPage('exchangeStore_' + chooseClassName, '兑换中心（卡牌活动）', '前往签到', function(){
					document.location.href = data.regCardsUrl
				})
			}
		}else if(chooseClassName === 'awardsExplain'){
			toSendPage('exchangeStore_' + chooseClassName, '兑换中心（卡牌活动）', '兑换说明')
			tipsWinOpen('explain')
		}else if(chooseClassName === 'awardsLog'){
			toSendPage('exchangeStore_' + chooseClassName, '兑换中心（卡牌活动）', '兑换记录')
			tipsWinOpen('log')
		}else if(chooseClassName === 'regCards'){
			toSendPage('exchangeStore_' + chooseClassName, '兑换中心（卡牌活动）', '卡牌签到', function(){
				document.location.href = data.regCardsUrl
			})
		}else if(chooseClassName === 'extractCards'){
			toSendPage('exchangeStore_' + chooseClassName, '兑换中心（卡牌活动）', '卡牌抽奖', function(){
				document.location.href = data.extractCardsUrl
			})
		}
		break
		case 32:
		case 8:
		if(useKey || isdown){
			history.back(-1)
			// document.location.href = document.cookie.split('ReturnURL=')[1].split(';')[0]
			break
		}
		getEl('.tipsWin').style.display = ''
		getEl('.toDrawBtn').className = 'toDrawBtn'
		getEl('.toRegBtn').className = 'toRegBtn'
		chooseClassName = chooseBtn
		initAwards()
		break
	}
}

//列表移动效果
function listMove(chooseNum){
	if(!/-/.test(chooseNum)){
		return
	}
	var i = parseInt(chooseNum.split('-')[0])
	var j = parseInt(chooseNum.split('-')[1])
	var maxNum = getEl('.listUpper').children.length > getEl('.listLower').children.length ? getEl('.listUpper').children.length : getEl('.listLower').children.length
	if(j > 4){
		getEl('.listUpper').style.left = -203 - (j - 5) * 213 + 'px'
		getEl('.listLower').style.left = -203 - (j - 5) * 213 + 'px'
	}else{
		getEl('.listUpper').style.left = ''
		getEl('.listLower').style.left = ''
	}
	if(j >= maxNum - 1 && j >= 5){
		getEl('.rightSide').style.display = ''
	}else if(getEl('.listUpper').children.length > 5){
		getEl('.rightSide').style.display = 'block'
	}
}
//点击弹出提示窗口
function tipsWinOpen(name, obj){
	getEl('.tipsWin').style.display = 'block'
	for(var i = 0;i < getEl('.tipsWin').children.length;i++){
		getEl('.tipsWin').children[i].style.display = ''
	}
	useKey = false
	isdown = false
	switch(name){
		case 'exchange':
		getEl('.exchangeWin').style.display = 'block'
		getEl('.exchangeWin').awardMsg = obj.awardMsg
		getEl('#exchange_img').src = obj.awardMsg.RES_IMG
		getEl('#exchange_name').innerHTML = obj.awardMsg.AWARD_NAME
		getEl('.useCards').innerHTML = ''

		for(var key in obj.parentElement.children){
			if(obj.parentElement.children[key] === obj){
				getEl('#exchange_img').style.backgroundImage = key % 2 ? 'url(../img/bg05.png)' : ''
			}
		}

		var arrPRODUCT = []
		for(var key in obj.awardMsg){
			if(/FK_PRODUCT_ID/.test(key)){
				var imgSrc = ''
				data.cardsList.map(function(item){
					item.FK_CARD_ID === obj.awardMsg[key] && (imgSrc = item.RES_IMG)
				})
				obj.awardMsg[key] !== '-1' && arrPRODUCT.push({
					scole: key.replace('FK_PRODUCT_ID_', ''),
					name: obj.awardMsg[key.replace('FK_PRODUCT_ID_', 'PRODUCT_NAME_')],
					id: obj.awardMsg[key],
					needNum: parseInt(obj.awardMsg[key.replace('FK_PRODUCT_ID_', 'NEED_COIN_')]),
					imgSrc: imgSrc,
				})
			}
		}
		arrPRODUCT.sort(function(a, b){
			return a.scole > b.scole
		})
		getEl('.exchangeBtn').className = 'exchangeBtn'
		chooseClassName = 'exchange'
		arrPRODUCT.map(function(item, index){
			index && getEl('.useCards').appendChild(document.createElement('i'))
			var div = document.createElement('div')
			var hasNum = parseInt(data.userCardsObj[item.id])
			!hasNum && (getEl('.exchangeBtn').className = 'exchangeBtn exchangeBtn-qs')
			div.innerHTML = '<div class="cardItem"><div style="background-image:url(' + item.imgSrc + ')"><span>' + item.name + '</span></div><p>数量：<span' + (hasNum >= item.needNum ? ' style="color:#fff;"' : '') + '>' + (hasNum >= 0 ? hasNum : 0) + '</span>/' + item.needNum + '</p></div>'
			getEl('.useCards').appendChild(div)

			if(hasNum < item.needNum){
				chooseClassName = 'closeWin'
				// console.log('aaaaaaaaa',obj.awardMsg)
				getEl('.exchangeBtn').className = 'exchangeBtn exchangeBtn-qs'
				// tipsWinOpen('success', obj.awardMsg)
			}
			getEl('.exchangeBtn-qs') && (getEl('.toDrawBtn').className = 'toDrawBtn toDrawBtn-h')
		})

		break
		case 'success':
				// console.log('obj', obj)
		ajax({
			url: data.exchangeUrl,
			type: 'post',
			data: {
				userId: data.epgUserName,
				awardName: obj.AWARD_NAME,
				fkAwardId: obj.FK_AWARD_ID,
				number: 1,
				awardType: obj.AWARD_TYPE
			},
			success: function(param){
				// console.log('param',param)
				param = JSON.parse(param)
				if(!param.rltcode){
					switch(param.object){
						case '0'://奖品数量不足
						console.log('所需道具不足')
						break
						case '1'://兑换成功
						getEl('#awardName').innerHTML = obj.AWARD_NAME
						getEl('.successWin').style.display = 'block'
						break
						case '2'://所需道具不足
						console.log('所需道具不足')
						break
						case '3'://找不到对应奖品
						console.log('找不到对应奖品')
						break
					}
				}
			}
		})
		break
		case 'empty':
		getEl('.awardsEmpty').style.display = 'block'
		console.log('所需道具不足 empty block')
		break
		case 'explain':
		getEl('.explainWin').style.display = 'block'
		chooseClassName = 'closeWin'
		break
		case 'log':
		getEl('.logText').innerHTML = ''
		ajax({
			url: data.recordUrl,
			type: 'post',
			data: {
				userId: data.epgUserName
			},
			success: function(param){
				param = JSON.parse(param)
				// console.log(param)
				if(!param.rltcode){
					data.recordText = param.object
				}
				data.recordText.map(function(item){
					var p = document.createElement('p')
					var date = item.exchange_time.split(' ')[0]
					var time = item.exchange_time.split(' ')[1].split('.')[0]
					p.innerHTML += '<span>' + date + '</span>'
					p.innerHTML += '<span>' + time + '</span>'
					p.innerHTML += '<span>兑换 ' + item.res_name + ' * ' + item.award_num + '个</span>'
					getEl('.logText').appendChild(p)
				})
			}
		})
		getEl('.logWin').style.display = 'block'
		chooseClassName = 'closeWin'
		break
	}
}

//移动选择下方按钮
//toward方向，num选择图标的顺序号(需选择的序号，1开始，有此项toward失效)
function moveBottomBtn(toward, num){
	var arr = [],
	wrap = getEl('.footLeft').children
	for(var i = 0;i < wrap.length;i++){
		arr.push(wrap[i])
		i === wrap.length - 1 && (wrap = getEl('.footRight').children)
	}
	for(var i = 0;i < wrap.length;i++){
		arr.push(wrap[i])
	}
	if(toward === 'reset'){
		num = arr.indexOf(getEl('.' + chooseClassName))
	}
	arr.map(function(item, index){
		isdown = true
		if(num > 0){
			if(index === parseInt(num)){
				item.className += ' ' + item.className + '-h'
				chooseClassName = chooseBtn = item.className.split(' ')[0]
			}else{
				item.className = item.className.replace(/ \S+-h/g, '')
			}
		}else{
			if(toward === 'left' && index > 1 && /-h/.test(item.className)){
				arr[index - 1].className += ' ' + arr[index - 1].className + '-h'
				item.className = item.className.replace(/ \S+-h/g, '')
				chooseClassName = chooseBtn = arr[index - 1].className.split(' ')[0]
			}
			else if(toward === 'right' && index < arr.length - 1 && /-h/.test(item.className)){
				arr[index + 1].className += ' ' + arr[index + 1].className + '-h'
				item.className = item.className.replace(/ \S+-h/g, '')
				toward = ''
				chooseClassName = chooseBtn = arr[index + 1].className.split(' ')[0]
			}
			else if(toward === 'up'){
				item.className = item.className.replace(/ \S+-h/g, '')
				chooseClassName = chooseBtn = chooseNum
				getEl('.award' + chooseClassName).className += ' currentChooseAward'
				isdown = false
			}
		}
	})
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
	if(obj.ReturnURL)
		document.cookie = "ReturnURL=" + obj.ReturnURL
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
		if (i % 10 === 0) {
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
function initGameItem(wrapId, listArr, page) {
	page = page || 0
	var wrap = getId(wrapId)
	var listArr = initDataArr(listArr)[page]
	if (listArr) {
		wrap.innerHTML = ""
		listArr.map(function(item,index) {
			wrap.innerHTML += '<div class="item item' + (index <= 4 ? '0-' : '1-') + (index <= 4 ? index : index - 5) + '"><img src="' + item.IMG_ADDR + '" alt="gift img"><span>' + item.AWARD_NAME + '</span><p>剩余：<span>' + item.SURPLUS_NUM + '</span></p><div class="price"><span>' + item.NEED_COIN + '</span></div></div>'
		})
	} else {
		console.log("%c载入的列表为空，请检查", "color: #f0f")
	}
}
//列表对象选择
function chooseItemFnc(chooseItemStr) {
	var chooseItem = {}
	if(!chooseItemStr.split("-")[1]){
		chooseItem = getClass(chooseItemStr)[0]
	}
	else{
		chooseItem = getClass("item" + chooseItemStr.split("-")[0] + "-" + chooseItemStr.split("-")[1])[0]
		chooseItem = chooseItem ? chooseItem : getClass("item0-" + chooseItemStr.split("-")[1])[0]
	}
	chooseInit(chooseItem)
	return chooseItem
}
//改变选择对象样式
function chooseInit(chooseItem) {
	chooseItem.children[3].style.background = 'url("./img/but-h.png")'
	var items = getClass("item")
	for(var i = 0; i < items.length; i++){
		if(items[i] !== chooseItem)
			items[i].children[3].style.background = ''
	}
}

//确认选择
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
		case /cardDraw/.test(location.href): referPageName = '卡牌抽奖';referPageID = 'kapaichoujiang';break;
		case /exchangeStore/.test(location.href): referPageName = '兑换中心';referPageID = 'duihuanzhongxin';break;
		case /registerCards/.test(location.href): referPageName = '卡牌签到';referPageID = 'kapaiqiandao';break;
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











//预加载图片
function imgLoadFnc(imgUrlArr, callback) {
	for(var i = 0;i < imgUrlArr.length;i++){
		var index = 0
		var img = new Image()
		img.src = imgUrlArr[i]

		img.onload = function(){
			index++
			// console.log("加载图片数量" + index)
			if(index >= imgUrlArr.length){
				// console.log("加载完毕，执行回调")
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
	// console.log(imgEle)
	imgEle = imgEle[0]
	if(!imgRoll || !speed)
		return

	imgEle.style.backgroundImage = 'url(' + urlArr[0] + ')'
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
function setCookie(c_name,value,expiredays)
{
	var exdate=new Date()
	exdate.setDate(exdate.getDate()+expiredays)
	document.cookie = c_name + "=" + escape(value)+ ((expiredays==null) ? "" : ";expires=" + exdate.toGMTString())
}

//方向选择
//toward方向，classNameFont子项类名前缀，chooseNum子项类名编号，choosedClassStr选中的元素类名
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
		// var tryEle = getEl('.' + classNameFont + (i + 1) + '-' + j)
		// currentClassName = (tryEle ? (i + 1) : i) + '-' + j
		tryEle && changeClassName(classNameFont, choosedClassStr, currentClassName)
		break
	}
	return currentClassName
}
//选择列表项改变当前class
//itemClass需要选择的集合类名，choosedClassStr选中元素的类名，regNum选中元素的编号
function changeClassName(itemClass, choosedClassStr, regNum){
	var items = getClass(itemClass)
	var currentItem = {}
	for(var i = 0;i < items.length;i++){
		var reg = new RegExp(' ' + itemClass + regNum + ' ')
		if(reg.test(items[i].className)){
			items[i].className += ' ' + choosedClassStr
			currentItem = items[i]
		}else{
			items[i].className = items[i].className.replace(RegExp(' ' + choosedClassStr, 'g'), '')
		}
	}
	return currentItem
}
//替换类名(单个元素)
function replaceClassName(beforeClass, reClass, addClass){
	if(addClass)
		getEl(beforeClass).className += addClass
	else
		getEl(beforeClass).replace(RegExp(beforeClass, 'g'), reClass)
}

//对象中查询key
function getKeyInObj(value, obj){
	var result = ''
	for(var key in obj){
		obj[key] === value && (result = key)
	}
	return result
}

//获取时间
function getNowTime(){
	var time = ''
	var year = (new Date()).getYear() + 1900
	var month = (new Date()).getMonth() + 1
	var date = (new Date()).getDate()
	var hour = (new Date()).getHours()
	var minute = (new Date()).getMinutes()
	var second = (new Date()).getSeconds()
	month = month < 10 ? ('0' + month) : month
	date = date < 10 ? ('0' + date) : date
	hour = hour < 10 ? ('0' + hour) : hour
	minute = minute < 10 ? ('0' + minute) : minute
	second = second < 10 ? ('0' + second) : second

	time = '' + year + month + date + '_' + hour + minute + second
	return time
}


//发送统计数值
//type可能值：page-页面统计，其他-contentID值（前缀"pageID_"）
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
		epgUserName: data.epgUserName,
		wayEUserName: wayEUserName,
		data: date,
		pageID: pageID,
		pageName: pageName,
		contentID: contentID,
		contentName: contentName
	}
	console.log('页面统计信息', obj)
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

//页面打印消息function
function pageConsole(title, param){
	if(!getEl('#tempWrap')){
		document.getElementsByTagName('body')[0].innerHTML += '<div id="tempWrap"></div>'
	}
	var wrap = getEl('#tempWrap')

	wrap.innerHTML += '<p style="color: rgba(255,255,255,1);">' + title + param + '</p>'
	document.getElementsByTagName('body')[0].style.position = 'relative'
	// wrap.style.maxHeight = '400px'
	wrap.style.position = 'absolute'
	wrap.style.left = '0'
	wrap.style.bottom = '450px'
	wrap.style.fontSize = '12px'
	wrap.style.zIndex = '999999999'
	wrap.style.backgroundColor = 'rgba(0,0,0,.5)'
}
