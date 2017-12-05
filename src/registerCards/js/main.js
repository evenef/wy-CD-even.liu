
document.documentElement.style.fontSize = '66.6666666666666667px'

var urlStr = /127.0.0.1/.test(location.href) ? '172.18.104.70:8080' : location.host
urlStr = /file:\/\/\//.test(location.href) ? '172.18.104.70:8080' : urlStr

var data = {
	getAllCardsUrl: "http://" + urlStr + "/wbManager/userCentre/findAllCard.do",//获取所有卡牌信息【接口】
	getUserCardsUrl: "http://" + urlStr + "/wbManager/userCentre/findUserCardInfo.do",//获取用户拥有的卡牌信息【接口】
	getCountUrl: "http://" + urlStr + "/wbManager/userCentre/getUserCardSignNum.do",//获取用户剩余签到次数【接口】
	getTimeUrl: "http://" + urlStr + "/wbManager/userCentre/getCardSignTime.do",//获取签到重置时间【接口】
	registerUrl: "http://" + urlStr + "/wbManager/userCentre/userCardSignIn.do",//点击签到【接口】
	recordUrl: "http://" + urlStr + "/wbManager/userCentre/userSignRec.do",//兑奖记录【接口】
	recommendGamesUrl: "http://" + urlStr + "/wbManager/userCentre/getCardSingRec.do",//获取推荐游戏列表【接口】
	exchangeStoreUrl: 'exchangeStoreUrl',//兑换奖品跳转【链接】
	moreGamesUrl: 'moreGamesUrl',//更多活动跳转【链接】
	epgUserName: "",
	userCardsObj: {},
	cardsList: [],
	recordText: [],
	gameLink: ''
}
var chooseNum = "0-0",
chooseBtn = 'registerBtn',
chooseClassName = chooseBtn,
imgUrlArr = [],
// userCardsList = [],
isList = false,
isBtn = true,
isInitData = true


window.onload = function(){
	var obj = getSearchAndCookie()//获取返回链接
	obj.UserID && (data.epgUserName = obj.UserID)
	data.exchangeStoreUrl = location.href.replace(/registerCards/, 'exchangeStore')
	data.moreGamesUrl = location.href.replace(/registerCards/, 'cardDraw')
	toSendPage('page', '卡牌签到')//页面访问统计
	initData()//初始化页面
	document.onkeydown = keyFnc


	// var set = setInterval(function(){
	// 	if(userCardsList[0]){
	// 		getEl('.showCardBox').children[0].src = userCardsList[Math.floor(Math.random() * userCardsList.length)].RES_IMG
	// 		clearInterval(set)
	// 	}
	// },500)
}

//初始化数据
function initData(){
	if(!isInitData){
		return
	}
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

			//所有卡牌
			ajax({
				url: data.getAllCardsUrl,
				success: function(paramCard){
					paramCard = JSON.parse(paramCard)
					// console.log('所有卡牌',paramCard)
					if(!paramCard.rltcode){
						data.cardsList = paramCard.object
						initList(data.cardsList)
					}
					imgUrlArr = []
					// userCardsList = []
					// data.cardsList.map(function(item){
					// 	imgUrlArr.push(item.RES_IMG)
					// 	data.userCardsObj[item.FK_CARD_ID] > 0 && userCardsList.push(item)
					// })
					imgLoadFnc(imgUrlArr)
				}
			})

		}
	})

	isInitData = false
	setTimeout(function(){
		isInitData = true
	},3000)
}

//初始化卡牌列表
function initList(arr){
	if(!arr || !arr[0]){
		console.log('列表为空')
		return
	}
	arr = arr.sort(function(a, b){
		return a.CARD_POSITION - b.CARD_POSITION
	})
	isList = false
	isBtn = false
	if(!/\d-\d/.test(chooseClassName) && chooseClassName !== 'gameLink'){
		getEl('.' + chooseClassName) && (getEl('.' + chooseClassName).className += ' ' + getEl('.' + chooseClassName).className + '-h')
		isBtn = true
	}else if(/\d-\d/.test(chooseClassName)){
		isList = true
	}

	getEl('.listContent').innerHTML = ''
	var i = -1
	arr.map(function(item, index) {
	var wrap = getEl('.listContent')

		var li = document.createElement('li')
		wrap.appendChild(li)
		if(index % 4 == 0){
			i++
		}
		li.className = 'cardItem cardItem' + i + '-' + (index % 4) + ' '
		if(isList && chooseClassName.split('-')[0] == i && chooseClassName.split('-')[1] == index % 4){
			li.className += ' currentChooseCard'
		}

		var num = data.userCardsObj[item.FK_CARD_ID]

		var div = document.createElement('div')
		var img = document.createElement('img')
		var span_1 = document.createElement('span')

		if(Number(num)){
			img.src = item.RES_IMG
		}else{
			img.src = 'img/img06-c.png'
		}
		span_1.innerHTML = item.GAME_NAME
		div.appendChild(img)
		div.appendChild(span_1)
		li.appendChild(div)

		var span_2 = document.createElement('span')
		span_2.innerHTML = '剩余：' + (num ? num : 0)
		li.appendChild(span_2)

		// li.innerHTML = '<div>' + (Number(num) ? ('<img src="' + item.RES_IMG + '"/>') : '<img src="./img/img06-c.png"/>') + '<span>' + item.GAME_NAME + '</span></div><span>' + '剩余：' + (num ? num : 0) + '</span>'
		var p = document.createElement('p')
		p.className = 'cardStar'
		for(var k = 0; k < 5; k++){
			var stari = document.createElement('i')
			stari.className = k < item.CARD_STAR ? 'star' : ''
			p.appendChild(stari)
		}
		li.appendChild(p)
		li.cardMsg = item
	})

	if(getEl('.listContent').children.length > 8){
		getEl('.lowerSide').style.display = 'block'
	}else{
		getEl('.lowerSide').style.display = ''
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
		if(isList && j){
			chooseClassName = chooseNum = chooseBtn = listItemChoose('left', 'cardItem', chooseClassName, 'currentChooseCard')
			listMove(chooseClassName)
		}else if(isList && !j){
			var items = getClass('cardItem')
			for(var i = 0;i < items.length;i++){
				items[i].className = items[i].className.replace(/ currentChooseCard/g, '')
			}
			moveLeftBtn('up')
		}else if(isBtn){
			moveLeftBtn('left')
			break
		}else if(chooseClassName === 'gameLink'){
			if(getEl('.gameItem'))
				moveRecGames('left')
		}
		break
		case 38:
		if(getEl('.registerLogWin').style.display){
			var arr = getEl('.logText').children
			var index = 0
			for(var i = arr.length - 1; i >= 0 ; i--){
				if(arr[i].style.display && index < 8){
					arr[i].style.display = ''
					index++
				}
			}
		}
		if(isList){
			chooseClassName = chooseNum = chooseBtn = listItemChoose('up', 'cardItem', chooseClassName, 'currentChooseCard')
			listMove(chooseClassName)
		}else if(isBtn){
			moveLeftBtn('up')
			break
		}
		break
		case 39:
		if(isList){
			chooseClassName = chooseNum = chooseBtn = listItemChoose('right', 'cardItem', chooseClassName, 'currentChooseCard')
			listMove(chooseClassName)
		}else if(isBtn){
			moveLeftBtn('right')
			break
		}else if(chooseClassName === 'gameLink'){
			if(getEl('.gameItem'))
				moveRecGames('right')
		}
		break
		case 40:
		if(getEl('.registerLogWin').style.display){
			var arr = getEl('.logText').children
			var index = 0
			for(var i = 0; i < arr.length - (arr.length % 8); i++){
				if(!arr[i].style.display && index < 8){
					arr[i].style.display = 'none'
					index++
				}
			}
		}
		if(isList){
			chooseClassName = chooseNum = chooseBtn = listItemChoose('down', 'cardItem', chooseClassName, 'currentChooseCard')
			listMove(chooseClassName)
		}else if(isBtn){
			moveLeftBtn('', 2)
			break
		}
		break
		case 13:
		// var setIntervalTime = setInterval(function(){
		// 	if(/\d-\d/.test(chooseClassName) && !isList){
		// 		clearInterval(setIntervalTime)
		// 		debugger
		// 	}
		// },100)
			if(/-/.test(chooseClassName)){

				var el = getEl('.currentChooseCard').cardMsg
				toSendPage('registerCards_' + el.FK_CARD_ID, '卡牌签到', '卡牌：' + el.CARD_NAME + '-' + el.GAME_NAME)//按钮访问统计

				tipsWinOpen('cardMsgWin', getEl('.cardItem' + chooseClassName))
			}
			else if(chooseClassName === 'gameLink'){
				if(data.gameLink){
					toSendPage('registerCards_toSeeGame_' + data.gameLink.FK_CARD_ID, '卡牌签到', '去看看游戏：' + data.gameLink.GAME_NAME)//跳转游戏详情访问统计
					console.log('跳转游戏详情gameLink', data.gameLink)
					startActivity(data.gameLink.FK_GAME_ID, data.epgUserName)
				}else{
					var obj = getEl('.gameItem-h') ? getEl('.gameItem-h').gameMsg : getEl('.currentChooseCard').cardMsg
					console.log(obj)
					toSendPage('registerCards_toSeeGame_' + obj.productid, '卡牌签到', '去看看游戏：' + obj.hava_name)//跳转游戏详情访问统计
					console.log('跳转游戏详情page', obj.FK_GAME_ID || obj.productid)
					startActivity(obj.FK_GAME_ID || obj.productid, data.epgUserName)
				}
				// 获取该地址的类名：gameItem-h、currentChooseCard
				// document.location.href = data.gameLink
			}
			else if(chooseClassName === 'moreBtn'){
				toSendPage('registerCards_' + chooseClassName, '卡牌签到', '更多活动', function(){
					document.location.href = data.moreGamesUrl
				})
			}
			else if(chooseClassName === 'exchangeBtn'){
				toSendPage('registerCards_' + chooseClassName, '卡牌签到', '兑换奖品', function(){
					document.location.href = data.exchangeStoreUrl
				})
			}
			else if(chooseClassName === 'closeWin'){
				getEl('.tipsWin').style.display = ''
				chooseClassName = chooseBtn
				if(/\d-\d/.test(chooseClassName)){
					isList = true
				}

				initData()
			}
			else if(chooseClassName === 'registerBtn'){
				toSendPage('registerCards_' + chooseClassName, '卡牌签到', '签到抽卡')
				tipsWinOpen('registerBtn')
			}
			else if(chooseClassName === 'registerLogBtn'){
				toSendPage('registerCards_' + chooseClassName, '卡牌签到', '签到记录')
				tipsWinOpen('registerLogBtn')
			}
			break
		case 8:
		// if((isList || isBtn) && document.cookie){
		// 	document.location.href = document.cookie.split('ReturnURL=')[1].split(';')[0]
		// 	break

		if(isList || isBtn){
			// console.log('back page')
			history.back(-1)
			break
		}else if(getEl('.gameItem-h')){
			getEl('.registerNullWin').innerHTML = ''
			while(getEl('.timeNotReadyWin').children[1]){
				getEl('.timeNotReadyWin').removeChild(getEl('.timeNotReadyWin').children[1])
			}
		}
		data.gameLink = ''
		getEl('.tipsWin').style.display = ''
		chooseClassName = chooseBtn
		if(/\d-\d/.test(chooseClassName)){
			isList = true
			isBtn = false
		}else if(chooseClassName !== 'gameLink'){
			isBtn = true
			isList = false
		}
		initData()
		break
	}
}

//卡牌列表移动效果
function listMove(chooseNum){
	if(!/-/.test(chooseNum)){
		return
	}
	var i = parseInt(chooseNum.split('-')[0])
	var maxRow = getEl('.listContent').children.length / 4
	if(i > 1){
		getEl('.listContent').style.top = (i - 1) * - 250 + 'px'
	}else{
		getEl('.listContent').style.top = ''
	}
	if(maxRow <= 2 || i >= maxRow - 1){
		getEl('.lowerSide').style.display = ''
	}else{
		getEl('.lowerSide').style.display = 'block'
	}
}

//点击弹出提示窗口
function tipsWinOpen(name, obj){
	getEl('.tipsWin').style.display = 'block'
	for(var i = 0;i < getEl('.tipsWin').children.length;i++){
		getEl('.tipsWin').children[i].style.display = ''
	}
	isList = false
	isBtn = false
	switch(name){
		case 'cardMsgWin':
		getEl('.showCardMsgWin').style.display = 'block'
		getEl('.showCardMsgWin').cardMsg = obj.cardMsg
		getEl('#cardImg').src = Number(data.userCardsObj[obj.cardMsg.FK_CARD_ID]) ? obj.cardMsg.RES_IMG : 'img/img06-c.png'
		for(var i = 0; i < 5; i++){
			getEl('#cardName').innerHTML = obj.cardMsg.GAME_NAME
			getEl('.showCardMsgWin').children[2].children[i].className = i < obj.cardMsg.CARD_STAR ? 'star' : ''
		}

		chooseClassName = 'gameLink'
		break

		case 'registerBtn':
		ajax({
			url: data.getCountUrl,
			type: 'post',
			data: {
				userId: data.epgUserName
			},
			success: function(param){
				param = JSON.parse(param)
				if(!param.rltcode){
					switch(param.object){
						case 0://次数不足
						getEl('.registerNullWin').style.display = 'block'
						getRecGames('registerNullWin', initRecommendList)
						chooseClassName = 'gameLink'
						break
						default:
						ajax({
							url: data.getTimeUrl,
							type: 'post',
							data: {
								userId: data.epgUserName
							},
							success: function(param){
								param = JSON.parse(param)
								if(!param.rltcode){
									if(param.object){//时间未到
										var min = parseInt(param.object / 1000 / 60)
										var sec = parseInt(param.object / 1000 % 60)
										min = min > 9 ? min : '0' + min
										sec = sec > 9 ? sec : '0' + sec
										getEl('.timeNotReadyWin').style.display = 'block'
										getRecGames('timeNotReadyWin', initRecommendList)

										getEl('.timeNotReadyWin').innerHTML += '<div id="timeOutText"><span>00</span><span>' + min + '</span><span>' + sec + '</span></div>'
										timeOutMachine(getEl('#timeOutText'))

										chooseClassName = 'gameLink'
									}else{
										successRegisterFnc()
									}
								}
							}
						})
						break
					}
				}
			}
		})
		break
		
		case 'registerLogBtn':
		getEl('.logText').innerHTML = ''
		ajax({
			url: data.recordUrl,
			type: 'post',
			data: {
				userId: data.epgUserName
			},
			success: function(param){
				param = JSON.parse(param)
				if(!param.rltcode){
					data.recordText = param.object
				}
				data.recordText.map(function(item){
					var p = document.createElement('p')
					var date = item.get_time.split(' ')[0]
					var time = item.get_time.split(' ')[1].split('.')[0]
					p.innerHTML += '<span>' + date + '</span>'
					p.innerHTML += '<span>' + time + '</span>'
					p.innerHTML += '<span>签到一次</span>'
					getEl('.logText').appendChild(p)
				})
			}
		})
		getEl('.registerLogWin').style.display = 'block'
		chooseClassName = 'closeWin'
		break
	}
}

//移动选择左侧按钮
//toward方向，num选择图标的顺序号(需选择的序号，1开始，有此项toward失效)
function moveLeftBtn(toward, num){
	var arr = [],
	wrap = getEl('.btnBox').children
	arr.push(getEl('.registerBtn'))
	for(var i = 0;i < wrap.length;i++){
		arr.push(wrap[i])
	}
	if(toward === 'reset'){
		num = arr.indexOf(getEl('.' + chooseClassName))
	}
	isBtn = true
	isList = false
	arr.map(function(item, index){
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
			else if(toward === 'right' && index && index < arr.length - 1 && /-h/.test(item.className)){
				arr[index + 1].className += ' ' + arr[index + 1].className + '-h'
				item.className = item.className.replace(/ \S+-h/g, '')
				toward = ''
				chooseClassName = chooseBtn = arr[index + 1].className.split(' ')[0]
			}
			else if(toward === 'right' && (index >= arr.length - 1 || !index) && /-h/.test(item.className)){
				item.className = item.className.replace(/ \S+-h/g, '')
				getEl('.cardItem' + chooseNum).className += ' currentChooseCard'

				chooseClassName = chooseBtn = chooseNum
				isBtn = false
				isList = true
			}
			else if(toward === 'up'){
				item.className = item.className.replace(/ \S+-h/g, '')
				chooseClassName = chooseBtn = 'registerBtn'
				getEl('.registerBtn').className += ' registerBtn-h'
			}
		}
	})
}

//获取推荐游戏列表
function getRecGames(className, callback){
	ajax({
		url: data.recommendGamesUrl,
		success: function(param){
			param = JSON.parse(param)
			if(!param.rltcode){
				callback(param.object, className)
			}
		}
	})
}
//初始化推荐游戏列表
function initRecommendList(data, className){
	getEl('.registerNullWin').innerHTML = ''
	while(getEl('.timeNotReadyWin').children[1]){
		getEl('.timeNotReadyWin').removeChild(getEl('.timeNotReadyWin').children[1])
	}
	data = data || []
	var ul = document.createElement('ul')
	ul.className = 'gameBox'
	getEl('.' + className).appendChild(ul)
	data.map(function(item, index){
		var li = document.createElement('li')
		li.className = index ? 'gameItem' : 'gameItem gameItem-h'
		li.innerHTML = '<div><img src="' + item.address + '"/><span>' + item.hava_name + '</span></div>'
		li.gameMsg = item
		ul.appendChild(li)
	})
}
//推荐游戏列表选择
function moveRecGames(toward){
	var items = getClass('gameItem')
	var num = 0
	for (var i = 0; i < items.length; i++) {
		if(/-h/.test(items[i].className)){
			num = i
		}
		items[i].className = 'gameItem'
	}
	switch(toward){
		case 'left':
		if(!num)
			items[num].className = 'gameItem gameItem-h'
		else
			items[num - 1].className = 'gameItem gameItem-h'
		break
		case 'right':
		if(num >= 3)
			items[num].className = 'gameItem gameItem-h'
		else
			items[num + 1].className = 'gameItem gameItem-h'
		break
	}
}
//签到成功
function successRegisterFnc(){
	getEl('.tipsWin').style.display = ''
	var imgArr = [],
	cardi = 0,
	card = {},
	startTime = new Date()
	if(data.cardsList[0]){
		cardi = Math.floor(Math.random() * data.cardsList.length)
		var set = setInterval(function(){
			getEl('.showCardBox').children[0].src = data.cardsList[cardi++].RES_IMG
			cardi >= data.cardsList.length && (cardi = 0)
		},250)
		setTimeout(function(){
			var set_wait = setInterval(function(){
				if(!card.GAME_NAME)
					return
				getEl('.tipsWin').style.display = 'block'
				for (var i = 0; i < 5; i++) {
					i < card.CARD_STAR && (getEl('#successCardStar').children[i].className = 'star')
				}
				getEl('#successCardImg').src = card.RES_IMG
				getEl('#successCardName').innerHTML = card.GAME_NAME

				getEl('.successWin').style.display = 'block'
				getEl('.successWin-bg').className = 'successWin-bg'
				setTimeout(function(){
					getEl('.successWin-bg').className = 'successWin-bg successWin-bg-h'
				},500)

				getEl('.showCardBox').children[0].src = card.RES_IMG
				clearInterval(set)
				clearInterval(set_wait)

				// pageConsole('本次获取数据用时：', new Date() - startTime + 'ms' + '；游戏名 ' + card.GAME_NAME)

				data.gameLink = card
				chooseClassName = 'gameLink'
				initData()
			},500)
		},1800)
	}

console.log('registerUrl',data.registerUrl)
	ajax({
		url: data.registerUrl,
		type: 'post',
		data: {
			userId: data.epgUserName
		},
		success: function(param){
			param = JSON.parse(param)
			if(!param.rltcode){
				var index = 0
				for (var i = 0; i < data.cardsList.length; i++) {
					if(data.cardsList[i].FK_CARD_ID === param.object.soleSign)
						index = i
				}
				card = data.cardsList[index]
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
	console.log(imgEle)
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
			// callback && callback()
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

//倒计时
function timeOutMachine(wrap, callback){
	setTimeout(function(){
		var minute = parseInt(wrap.children[1].innerHTML),
		second = parseInt(wrap.children[2].innerHTML)
		if(minute || second){
			if(second){
				second--
			}else{
				minute && minute--
				second = 59
			}
			minute = minute > 9 ? minute : '0' + minute
			second = second > 9 ? second : '0' + second
			wrap.children[1].innerHTML = minute
			wrap.children[2].innerHTML = second
			timeOutMachine(wrap, callback)
		}else{
			callback()
		}
	},1000)
}


//页面打印消息function
function pageConsole(title, param){
	if(!getEl('#tempWrap')){
		var div = document.createElement('div')
		div.id = 'tempWrap'
		document.body.appendChild(div)
	}
	var wrap = getEl('#tempWrap')

	wrap.innerHTML += '<p style="color: rgba(255,255,255,1);">' + (title || '') + (param || '') + '</p>'
	document.getElementsByTagName('body')[0].style.position = 'relative'
	// wrap.style.maxHeight = '400px'
	wrap.style.width = '80%'
	wrap.style.position = 'absolute'
	wrap.style.left = '20%'
	wrap.style.bottom = '450px'
	wrap.style.fontSize = '16px'
	wrap.style.zIndex = '999999999'
	wrap.style.backgroundColor = 'rgba(0,0,0,.5)'
}
