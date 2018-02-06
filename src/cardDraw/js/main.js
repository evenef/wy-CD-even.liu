
// document.documentElement.style.fontSize = '66.6666666666666667px'

var urlStr = /localhost/.test(location.href) ? '172.18.104.240:8080' : location.host
urlStr = /file:\/\/\//.test(location.href) ? '172.18.104.240:8080' : urlStr


var data = {
	getAwardListUrl: "http://" + urlStr + "/wbManager/userCentre/getAwards.do",//获取奖品列表【接口】
	getAllCardsUrl: "http://" + urlStr + "/wbManager/userCentre/findAllCard.do",//获取所有卡牌列表【接口】
	getUserCardsUrl: "http://" + urlStr + "/wbManager/userCentre/findUserCardInfo.do",//用户卡牌列表【接口】
	getDrawNum: "http://" + urlStr + "/wbManager/userCentre/getUserCardDrawNum.do",//获取剩余抽奖次数【接口】
	getDrawTime: "http://" + urlStr + "/wbManager/userCentre/getCardDrawTime.do",//获取抽奖重置时间【接口】
	cardDrawUrl: "http://" + urlStr + "/wbManager/userCentre/userCardDraw.do",//点击抽奖【接口】
	exchangeLogUrl: "http://" + urlStr + "/wbManager/userCentre/userExRec.do",//兑奖记录【接口】
	exchangeUrl: "http://" + urlStr + "/wbManager/userCentre/exchangeAward.do",//兑奖【接口】
	getGamesUrl: "http://" + urlStr + "/wbManager/userCentre/getCardDrawRec.do",//获取推荐游戏【接口】
	myCardUrl: 'myCardUrl',//我的卡牌跳转【链接】
	// epgUserName: "epg010010101",
	epgUserName: "",
	drawNum: 0,//剩余抽奖次数
	drawTime: 3600000,//抽奖倒计时
	userCardsObj: {},
	awardsList: [],
	cardsList: [],
	recordText: [],
	awardIdArr: ["award-pg0001", "award-pg0002", "award-pg0003", "award-pg0004", "award-pg0005"]//右侧展示奖品ID，排列顺序从上到下
	// awardIdArr: ["award0001", "award0002", "award0003", "award0004", "award0005"]//右侧展示奖品ID，排列顺序从上到下
}

if(/127.0.0.1/.test(location.href) || /file:\/\/\//.test(location.href)){
	data.awardIdArr = ["award0001", "award0002", "award0003", "award0004", "award0005"]
}


var chooseNum = "0-0",
chooseBtn = 'drawBtn',
chooseClassName = chooseBtn,
// chooseClassName = chooseNum,
imgUrlArr = [],
isList = false,
isBtn = true,
// isInit = true,
isInitData = true



window.onload = function(){
	var obj = getSearchAndCookie()//获取返回链接
	obj.UserID && (data.epgUserName = obj.UserID)
	data.myCardUrl = location.pathname.replace(/cardDraw/, 'registerCards')

	toSendPage('page', '卡牌抽奖')//页面访问统计
	document.onkeydown = keyFnc
	initData()//初始化页面

	getEl('.' + chooseClassName) && (getEl('.' + chooseClassName).className += ' ' + chooseClassName + '-h')
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
			console.log('卡牌',param)
			if(!param.rltcode)
				data.cardsList = param.object
			imgUrlArr = []
			data.cardsList.map(function(item){
				imgUrlArr.push(item.RES_IMG)
			})
			setTimeout(function(){
				imgLoadFnc(imgUrlArr)
			},2000)
		}
	})

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
			console.log('奖品',param)
			if(!param.rltcode)
				data.awardsList = param.object
			if(data.awardsList[0]){
				initList(data.awardsList)
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
			console.log('用户卡牌', param)
			if(!param.rltcode)
				data.userCardsObj = param.object
		}
	})
	//剩余抽奖次数
	ajax({
		url: data.getDrawNum,
		data: {
			userId: data.epgUserName
		},
		success: function(param){
			param = JSON.parse(param)
			console.log('剩余抽奖次数',param)
			if(!param.rltcode){
				data.drawNum = param.object
				getEl('.countBox').innerHTML = '<span>' + data.drawNum + '</span>'
				data.drawNum > 0 && (getEl('.drawBtn').children[1].style.display = 'block')
				data.drawNum <= 0 && (getEl('.drawBtn').children[1].style.display = '')
			}
		}
	})
	//抽奖重置时间
	ajax({
		url: data.getDrawTime,
		data: {
			userId: data.epgUserName
		},
		success: function(param){
			param = JSON.parse(param)
			console.log('抽奖重置时间',param)
			if(!param.rltcode){
				data.drawTime = param.object
				var minute = 0,
				second = 0
				minute = Math.floor(data.drawTime / 60 / 1000)
				second = Math.ceil(data.drawTime / 1000 % 60)
				minute = minute > 9 ? minute : '0' + minute
				second = second > 9 ? second : '0' + second
				getEl('.timeBox').innerHTML = '<span>' + minute + ':' + second + '</span>'

				timeOutMachine(getEl('.timeBox').children[0], function(){
					console.log('time is ok')
				})
			}
		}
	})
}
//初始化奖品列表
function initList(arr){
	if(!arr || !arr[0]){
		console.log('列表为空')
		return
	}
	var wrap = getEl('.awardList'),
	newArr = []
	wrap.innerHTML = ''
	data.awardIdArr.map(function(id, index) {
		arr.map(function(item){
			item.FK_AWARD_ID === id && newArr.push(item)
		})
	})
	console.log('newArr',newArr)
	newArr.map(function(item, index){
		// console.log('item',item)
		var li = document.createElement('li')
		li.className ='btn awardItem awardItem' + parseInt((index ? ++index : index) / 2) + '-' + parseInt(index % 2) + (index ? ' ' : ' awardItem0-1 ')
		li.innerHTML = '<div></div><img src="img/default.png" alt="" style="background-image:url(\'' + item.RES_IMG + '\');"/><span>' + (index ? '奖品展示' : '大奖展示') + '：' + item.AWARD_NAME + '</span>'
		li.awardMsg = item
		wrap.appendChild(li)
	})

	getEl('.' + (/\d-\d/.test(chooseClassName) ? 'awardItem' : '') + chooseClassName).className += ' ' + (/\d-\d/.test(chooseClassName) ? 'awardItem' : chooseClassName) + '-h'
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
		if(getEl('.noDrawWin').style.display && chooseClassName === 'closeWin'){
			if(getEl('.gameItem')){
				var items = getClass('gameItem'),
				num = items.length
				while(num-- - 1){
					if(/-h/.test(items[num].className)){
						items[num--].className = 'gameItem'
						items[num].className = 'gameItem gameItem-h'
						break
					}
				}
			}
		}
		if(isList && j && chooseClassName !== '0-1'){
			chooseClassName = chooseNum = chooseBtn = listItemChoose('left', 'awardItem', chooseClassName, 'awardItem-h')
		}else if(isBtn){
			moveBottomBtn('left')
			break
		}else if(isBtn || isList){
			if(getEl('.awardItem-h')){
				getEl('.awardItem-h').className = getEl('.awardItem-h').className.replace(/ awardItem-h/g, '')
				moveBottomBtn('', 0)
			}

			// getClass('awardItem')
		}
		break
		case 38:
		if(getEl('.myAwardWin').style.display){
			var arr = getEl('#logContent').children
			var index = 0
			for(var i = arr.length - 1; i >= 0 ; i--){
				if(arr[i].style.display && index < 8){
					arr[i].style.display = ''
					index++
				}
			}
		}
		if(isList){
			chooseClassName = chooseNum = chooseBtn = listItemChoose('up', 'awardItem', chooseClassName, 'awardItem-h')
		}else if(isBtn){
			moveBottomBtn('up')
			break
		}
		break
		case 39:
		if(getEl('.noDrawWin').style.display && chooseClassName === 'closeWin'){
			if(getClass('gameItem-h')[0].nextSibling){
				getClass('gameItem-h')[0].nextSibling.className += ' gameItem-h'
				getClass('gameItem-h')[0].className = 'gameItem'
			}
		}
		if(isList){
			chooseClassName = chooseNum = chooseBtn = listItemChoose('right', 'awardItem', chooseNum, 'awardItem-h')
		}else if(isBtn){
			moveBottomBtn('right')
			break
		}
		break
		case 40:
		if(getEl('.myAwardWin').style.display){
			var arr = getEl('#logContent').children
			var index = 0
			for(var i = 0; i < arr.length - (arr.length % 8 ? arr.length % 8 : 8); i++){
				if(!arr[i].style.display && index < 8){
					arr[i].style.display = 'none'
					index++
				}
			}
		}
		if(isList){
			if(i < 2 && getEl('.awardList').children.length){
				chooseClassName = chooseNum = chooseBtn = listItemChoose('down', 'awardItem', chooseClassName, 'awardItem-h')
			}else{
				getEl('.awardItem-h') && (getEl('.awardItem-h').className = getEl('.awardItem-h').className.replace(/ awardItem-h/g, ''))
				if(j){
					moveBottomBtn('', 3)
				}else{
					moveBottomBtn('', 2)
				}
				isList = false
				isBtn = true
			}
		}
		break
		case 13:
		// console.log(chooseClassName)

		if(/-/.test(chooseClassName)){
			var msg = getEl('.awardItem' + chooseClassName).awardMsg
			toSendPage('cardDraw_' + msg.FK_AWARD_ID, '卡牌抽奖', '奖品：' + msg.AWARD_NAME)

			tipsWinOpen('exchange', getEl('.awardItem' + chooseClassName))
		}else if(chooseClassName === 'exchangeBtn'){

			tipsWinOpen('success', getEl('.awardItem-h').awardMsg)
			// getEl('.tipsWin').style.display = ''
			// chooseClassName = chooseBtn
			// isList = true
			// isBtn = false
			// initAwards()

		}else if(chooseClassName === 'success'){
			for(var i = 0;i < getEl('.tipsWin').children.length;i++){
				getEl('.tipsWin').children[i].style.display = ''
			}

			getEl('.tipsWin').style.display = ''
			chooseClassName = chooseBtn
			isList = true
			isBtn = false
			initAwards()
		}else if(chooseClassName === 'closeWin'){

			if(getEl('.noDrawWin').style.display){
				if(getEl('.gameItem-h')){
					var el = getEl('.gameItem-h')
					var name = el.children[0].children[1].innerHTML
						// startActivity(getEl('.gameItem-h').gameId, data.epgUserName)
					toSendPage('cardDraw_package_' + el.gameId, '卡牌抽奖', '推荐套餐包：' + name, function(){
						console.log(getEl('.gameItem-h').pkgid)

						console.log('pkgid',getEl('.gameItem-h').pkgid)
						// startActivity(getEl('.gameItem-h').pkgid, data.epgUserName)
						var urlStr = ''
						getEl('.gameItem-h').pkgid === '16021215165349000001' && (urlStr = 'park')
						getEl('.gameItem-h').pkgid === '16021215165731000002' && (urlStr = 'ChangWanTing')
						getEl('.gameItem-h').pkgid === '16021215165842000003' && (urlStr = 'chessRoom')
						getEl('.gameItem-h').pkgid === '17140309181021000002' && (urlStr = 'starLand')
						window.location.href = 'http://' + window.location.host + '/Wanba/active/' + urlStr + '/index.html?UserID=' + searchObj().UserID + '&ReturnURL=' + escape(window.location.href)
					})
				}
				break
			}

			if(getEl('.drawWin').style.display){
				if(getEl('.cardBtn').gameId){
					toSendPage('cardDraw_toSeeGame_game' + getEl('.cardBtn').gameId, '卡牌抽奖', '抽奖获得卡牌去看看游戏：' + getEl('#successCardName').innerHTML)
					console.log('gameId',getEl('.cardBtn').gameId)
					startActivity(getEl('.cardBtn').gameId, data.epgUserName)
				}
				break
			}

			if(getEl('.explainWin').style.display || getEl('.exchangeExplainWin').style.display || getEl('.myAwardWin').style.display){
				for(var i = 0;i < getEl('.tipsWin').children.length;i++){
					getEl('.tipsWin').children[i].style.display = ''
				}
				getEl('.tipsWin').style.display = ''
				chooseClassName = chooseBtn
				isBtn = true
			}
			// initAwards()
		}else if(chooseClassName === 'explain'){
			toSendPage('cardDraw_activityExplain', '卡牌抽奖', '活动说明')
			tipsWinOpen('explain')
		}else if(chooseClassName === 'exhcangeExplain'){
			toSendPage('cardDraw_exhcangeExplain', '卡牌抽奖', '兑换说明')
			tipsWinOpen('exhcangeExplain')
		}else if(chooseClassName === 'myCard'){
			toSendPage('cardDraw_myCard', '卡牌抽奖', '我的卡牌', function(){
				document.location.href = data.myCardUrl + '?UserID=' + searchObj().UserID + '&ReturnURL=' + escape(document.location.href)
			})
		}else if(chooseClassName === 'drawBtn'){
			tipsWinOpen('drawBtn')
		}else if(chooseClassName === 'myAward'){
			toSendPage('cardDraw_myAward', '卡牌抽奖', '我的奖品')
			tipsWinOpen('myAward')
		}

		break
		case 8:
		for(var i = 0;i < getEl('.tipsWin').children.length;i++){
			getEl('.tipsWin').children[i].style.display = ''
		}
		if(isList || isBtn){
			// history.back(-1)
			// document.location.href = document.cookie.split('ReturnURL=')[1].split(';')[0]
			window.location.href = unescape(searchObj().ReturnURL || searchObj().ReturnULR)
			break
		}
		getEl('.tipsWin').style.display = ''
		chooseClassName = chooseBtn
			// console.log('chooseBtn',chooseBtn)
			if(/\d-\d/.test(chooseClassName)){
				isList = true
				isBtn = false
			}else{
				isList = false
				isBtn = true
			}
		initAwards()
		break
	}
}

//点击弹出提示窗口
function tipsWinOpen(name, obj){
	// console.log(name, obj.awardMsg)
	getEl('.tipsWin').style.display = 'block'
	isList = false
	isBtn = false
	switch(name){
		case 'exchange':
		// console.log(obj.awardMsg)
		getEl('#awardShowImg').src = obj.awardMsg.RES_IMG
		getEl('#awardShowName').innerHTML = obj.awardMsg.AWARD_NAME
		getEl('.needCards').innerHTML = ''

		if(obj.awardMsg.FK_PRODUCT_ID_A && obj.awardMsg.FK_PRODUCT_ID_A != '-1'){
			var li = document.createElement('li')
			var objTemp = temp(obj.awardMsg.FK_PRODUCT_ID_A)
			console.log(data.userCardsObj[objTemp.FK_CARD_ID], obj.awardMsg.NEED_COIN_A)
			li.innerHTML +='<i></i><div><img src="' + objTemp.RES_IMG + '"/><span>' + objTemp.GAME_NAME + '</span></div><span>数量： <span style="' + (data.userCardsObj[objTemp.FK_CARD_ID] >= obj.awardMsg.NEED_COIN_A ? '' : 'color:#ff4e4d;') + '">' + (data.userCardsObj[objTemp.FK_CARD_ID] || 0) + '</span> / ' + obj.awardMsg.NEED_COIN_A + '</span>'
			getEl('.needCards').appendChild(li)
		}
		if(obj.awardMsg.FK_PRODUCT_ID_B && obj.awardMsg.FK_PRODUCT_ID_B != '-1'){
			var li = document.createElement('li')
			var objTemp = temp(obj.awardMsg.FK_PRODUCT_ID_B)
			li.innerHTML +='<i></i><div><img src="' + objTemp.RES_IMG + '"/><span>' + objTemp.GAME_NAME + '</span></div><span>数量： <span style="' + (data.userCardsObj[objTemp.FK_CARD_ID] >= obj.awardMsg.NEED_COIN_B ? '' : 'color:#ff4e4d;') + '">' + (data.userCardsObj[objTemp.FK_CARD_ID] || 0) + '</span> / ' + obj.awardMsg.NEED_COIN_B + '</span>'
			getEl('.needCards').appendChild(li)
		}
		if(obj.awardMsg.FK_PRODUCT_ID_C && obj.awardMsg.FK_PRODUCT_ID_C != '-1'){
			var li = document.createElement('li')
			var objTemp = temp(obj.awardMsg.FK_PRODUCT_ID_C)
			li.innerHTML +='<i></i><div><img src="' + objTemp.RES_IMG + '"/><span>' + objTemp.GAME_NAME + '</span></div><span>数量： <span style="' + (data.userCardsObj[objTemp.FK_CARD_ID] >= obj.awardMsg.NEED_COIN_C ? '' : 'color:#ff4e4d;') + '">' + (data.userCardsObj[objTemp.FK_CARD_ID] || 0) + '</span> / ' + obj.awardMsg.NEED_COIN_C + '</span>'
			getEl('.needCards').appendChild(li)
		}
		if(obj.awardMsg.FK_PRODUCT_ID_D && obj.awardMsg.FK_PRODUCT_ID_D != '-1'){
			var li = document.createElement('li')
			var objTemp = temp(obj.awardMsg.FK_PRODUCT_ID_D)
			li.innerHTML +='<i></i><div><img src="' + objTemp.RES_IMG + '"/><span>' + objTemp.GAME_NAME + '</span></div><span>数量： <span style="' + (data.userCardsObj[objTemp.FK_CARD_ID] >= obj.awardMsg.NEED_COIN_D ? '' : 'color:#ff4e4d;') + '">' + (data.userCardsObj[objTemp.FK_CARD_ID] || 0) + '</span> / ' + obj.awardMsg.NEED_COIN_D + '</span>'
			getEl('.needCards').appendChild(li)
		}

		console.log(obj.awardMsg)
		var i = 0
		var items = getEl('.needCards').children
		getEl('.exchangeWin').children[2].className = 'enterBtn'
		while(i < items.length){
			if(items[i++].children[2].children[0].style.color)
				getEl('.exchangeWin').children[2].className += ' enterBtn-e'
		}

		function temp(FK_CARD_ID){
			var obj
			data.cardsList.map(function(item){
				if(item.FK_CARD_ID === FK_CARD_ID){
					obj = item
				}
			})
			return obj
		}

		getEl('.exchangeWin').style.display = 'block'
		chooseClassName = 'exchangeBtn'
		break
		case 'success':
		// console.log(obj)
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
				param = JSON.parse(param)
				if(!param.rltcode){
					console.log('param', param)
					switch(param.object){
						case '1'://兑换成功
						getEl('.exchangeWin').style.display = ''
						getEl('#awardName').innerHTML = obj.AWARD_NAME
						getEl('.successWin').style.display = 'block'
						chooseClassName = 'success'
						break



						case '0'://奖品数量不足
						console.log('奖品数量不足')
						// getEl('.awardsEmpty').style.display = 'block'
						
						// getEl('.tipsWin').style.display = ''
						getEl('.exchangeWin').style.display = ''
						getEl('.awardsEmpty').style.display = 'block'
						chooseClassName = 'closeWin'
						break
						case '2'://所需道具不足
						console.log('所需道具不足')
						
						// getEl('.tipsWin').style.display = ''
						// chooseClassName = chooseBtn
						// isList = true
						// isBtn = false
						// initAwards()
						break
						case '3'://找不到对应奖品
						console.log('找不到对应奖品')

						getEl('.tipsWin').style.display = ''
						chooseClassName = chooseBtn
						isList = true
						isBtn = false
						initAwards()
						break
						default:
						// getEl('.tipsWin').style.display = ''
						// chooseClassName = chooseBtn
						// isList = true
						// isBtn = false
						// initAwards()
					}
				}
			}
		})
		// getEl('.tipsWin').style.display = ''
		// chooseClassName = chooseBtn
		// isList = true
		// isBtn = false
		// initAwards()
		break
		case 'drawBtn':
		ajax({
			url: data.cardDrawUrl,
			type: 'post',
			data: {
				userId: data.epgUserName
			},
			success: function(param){
				param = JSON.parse(param)
				if(!param.rltcode && Number(param.object.gameId) > 0){
					getEl('#successCardImg').src = param.object.cardImg
					data.cardsList.map(function(item){
						if(item.FK_CARD_ID === param.object.soleSign){
							getEl('#successCardName').innerHTML = item.GAME_NAME
							var i = item.CARD_STAR
							getEl('#successCardStar').innerHTML = '<span>稀有度：</span>'
							getEl('.cardBtn').gameId = item.FK_GAME_ID
							while(i--){
								getEl('#successCardStar').innerHTML += '<i></i>'
							}
						}
					})
					getEl('.drawWin').style.display = 'block'
					chooseClassName = 'closeWin'
				}else if(Number(param.object.gameId) < 0){
					switch(param.object.gameId){
						case '-1'://次数不足
						getEl('.noDrawTips').style.backgroundImage = 'url(./img/time1_v2.png)'
						break
						case '-2'://时间未到
						getEl('.noDrawTips').style.backgroundImage = ''
						break
					}
					getEl('.noDrawWin').style.display = 'block'
					chooseClassName = 'closeWin'

					ajax({
						url: data.getGamesUrl,
						success: function(param){
							param = JSON.parse(param)
							if(!param.rltcode){
								getEl('.gameList').innerHTML = ''
								param.object.map(function(item, index){
									var li = document.createElement('li')
									li.className = 'gameItem ' + (index ? '' : 'gameItem-h')
									li.pkgid = item.pkgid
									li.innerHTML += '<div><img src="' + item.pkgimg + '"/><span>' + item.pkgname + '</span></div>'
									getEl('.gameList').appendChild(li)
								})
							}
						}
					})
				}
			}
		})
		break
		case 'explain':
		if(getEl('.explainWin')) {
			getEl('.explainWin').style.display = 'block'
			chooseClassName = 'closeWin'
		}else{
			isBtn = true
		}
		break
		case 'exhcangeExplain':
		if(getEl('.exchangeExplainWin')) {
			getEl('.exchangeExplainBox').innerHTML = ''
			var i = -1
			while(++i < data.awardIdArr.length){
				data.awardsList.map(function(item){
					if(item.FK_AWARD_ID === data.awardIdArr[i]){
						var li = document.createElement('li')
						li.innerHTML += '<div class="awardTitle"><div><img src="' + (item.RES_IMG ? item.RES_IMG : '') + '"/></div></div><i></i>'

						if(item.FK_PRODUCT_ID_A && item.FK_PRODUCT_ID_A != '-1'){
							var obj = temp(item.FK_PRODUCT_ID_A)
							li.innerHTML +='<div class="needCardItem"><img src="' + (obj ? obj.RES_IMG : '') + '"><span>数量：' + item.NEED_COIN_A + '</span></div>'
						}

						if(item.FK_PRODUCT_ID_B && item.FK_PRODUCT_ID_B != '-1'){
							var obj = temp(item.FK_PRODUCT_ID_B)
							li.innerHTML +='<i></i><div class="needCardItem"><img src="' + (obj ? obj.RES_IMG : '') + '"><span>数量：' + item.NEED_COIN_B + '</span></div>'
						}

						if(item.FK_PRODUCT_ID_C && item.FK_PRODUCT_ID_C != '-1'){
							var obj = temp(item.FK_PRODUCT_ID_C)
							li.innerHTML +='<i></i><div class="needCardItem"><img src="' + (obj ? obj.RES_IMG : '') + '"><span>数量：' + item.NEED_COIN_C + '</span></div>'
						}

						if(item.FK_PRODUCT_ID_D && item.FK_PRODUCT_ID_D != '-1'){
							var obj = temp(item.FK_PRODUCT_ID_D)
							li.innerHTML +='<i></i><div class="needCardItem"><img src="' + (obj ? obj.RES_IMG : '') + '"><span>数量：' + item.NEED_COIN_D + '</span></div>'
						}
						getEl('.exchangeExplainBox').appendChild(li)

						function temp(FK_CARD_ID){
							var obj
							data.cardsList.map(function(item){
								if(item.FK_CARD_ID === FK_CARD_ID){
									obj = item
								}
							})
							return obj
						}
					}
				})
			}
			getEl('.exchangeExplainWin').style.display = 'block'
			chooseClassName = 'closeWin'
		}else{
			isBtn = true
		}
		break
		case 'myAward':
		getEl('#logContent').innerHTML = ''
		ajax({
			url: data.exchangeLogUrl,
			type: 'post',
			data: {
				userId: data.epgUserName
			},
			success: function(param){
				param = JSON.parse(param)
				if(!param.rltcode){
					
					data.recordText = param.object
					data.recordText.map(function(item){
						var p = document.createElement('p')
						var date = item.exchange_time.split(' ')[0]
						var time = item.exchange_time.split(' ')[1].split('.')[0]
						p.innerHTML += '<span>' + date + '</span>'
						p.innerHTML += '<span>' + time + '</span>'
						p.innerHTML += '<span>兑换 ' + item.res_name + ' * ' + item.award_num + '个</span>'
						getEl('#logContent').appendChild(p)
					})
				}
			}
		})
		getEl('.myAwardWin').style.display = 'block'
		chooseClassName = 'closeWin'
		break
	}
}

//移动选择按钮
//toward方向，num选择图标的顺序号(需选择的序号，1开始，有此项toward失效)
function moveBottomBtn(toward, num){
	var arr = [],
	wrap = getClass('btn'),
	itemIndex = 0
	for(var i = 0;i < 5;i++){
		arr.push(wrap[i]);
		/-h/.test(wrap[i].className) && (itemIndex = i)
	}
	// if(toward === 'reset'){
	// 	num = arr.indexOf(getEl('.' + chooseClassName))
	// }
	// debugger
	arr.map(function(item, index){
		isBtn = true
		if(num > 0 || num === 0){
			if(index === parseInt(num)){
				chooseClassName = chooseBtn = item.className.split(' ')[1]
				item.className += ' ' + chooseClassName + '-h'
				isList = false
			}else{
				item.className = item.className.replace(/ \S+-h/g, '')
			}
		}else{
			if(toward === 'left' && index && /-h/.test(item.className)){
				arr[index - 1].className += ' ' + arr[index - 1].className.split(' ')[1] + '-h'
				item.className = item.className.replace(/ \S+-h/g, '')
				chooseClassName = chooseBtn = arr[index - 1].className.split(' ')[1]
			}
			else if(toward === 'right' && index < arr.length - 1 && /-h/.test(item.className)){
				arr[index + 1].className += ' ' + arr[index + 1].className.split(' ')[1] + '-h'
				item.className = item.className.replace(/ \S+-h/g, '')
				toward = ''
				chooseClassName = chooseBtn = arr[index + 1].className.split(' ')[1]
			}
			else if(toward === 'up' && itemIndex){
				item.className = item.className.replace(/ \S+-h/g, '')
				console.log(chooseNum)
				chooseClassName = chooseBtn = chooseNum = itemIndex > 2 ? '2-1' : '2-0'
				// if(getEl('.awardItem' + chooseClassName)){
					getEl('.awardItem' + chooseClassName).className += ' awardItem-h'
					isBtn = false
					isList = true
				// }
				// else{
					// chooseClassName = chooseBtn
					// console.log(chooseClassName)
				// }
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
	var obj = {}
	obj = document.querySelector(name)
	return obj
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
		case /cardDraw/.test(location.pathname): referPageName = '卡牌抽奖';referPageID = 'kapaichoujiang';break;
		case /exchangeStore/.test(location.pathname): referPageName = '兑换中心';referPageID = 'duihuanzhongxin';break;
		case /registerCards/.test(location.pathname): referPageName = '卡牌签到';referPageID = 'kapaiqiandao';break;
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
//itemClass需要选择的集合类名，choosedClassStr选中元素的类名，regNum选中元素的编号(编号类名前后均需空格)
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

//倒计时
function timeOutMachine(wrap, callback){
	setTimeout(function(){
		var minute = parseInt(wrap.textContent.split(':')[0]),
		second = parseInt(wrap.textContent.split(':')[1])
		if(minute || second){
			if(second){
				second--
			}else{
				minute && minute--
				second = 59
			}
			minute = minute > 9 ? minute : '0' + minute
			second = second > 9 ? second : '0' + second
			wrap.innerHTML = minute + ':' + second
			timeOutMachine(wrap, callback)
		}else{
			callback()
		}
	},1000)
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


// //页面打印消息function
// function pageConsole(title, param){
// 	if(!getEl('#tempWrap')){
// 		var div = document.createElement('div')
// 		div.id = 'tempWrap'
// 		document.getElementsByTagName('body')[0].append(div)
// 	}
// 	var wrap = getEl('#tempWrap')

// 	wrap.innerHTML += '<tr style="color: rgba(255,255,255,1);"><td style="border:1px solid #99f;text-align:right;">' + title + '</td><td style="border:1px solid #99f;word-break: break-all;">' + param + '</td></tr>'

// 	// var p = document.createElement('p')
// 	// p.innerHTML = title + '：' + param
// 	// // document.getElementsByTagName('body')[0].style.position = 'relative'
// 	// // wrap.style.maxHeight = '400px'
// 	// wrap.append(p)
// 	wrap.style.position = 'absolute'
// 	wrap.style.left = '0'
// 	wrap.style.top = '0'
// 	// // wrap.style.bottom = '450px'
// 	// wrap.style.zIndex = '999999999'

// 	wrap.style.backgroundColor = 'rgba(0,0,0,.5)'
// 	wrap.style.fontSize = '16px'
// }

// //页面打印消息function
// function pageConsole(title, param){
// 	if(!getEl('#tempWrap')){
// 		var div = document.createElement('div')
// 		div.id = 'tempWrap'
// 		document.getElementsByTagName('body')[0].append(div)
// 	}
// 	var wrap = getEl('#tempWrap')

// 	wrap.innerHTML += '<p style="color: rgba(255,255,255,1);">' + title + param + '</p>'
// 	document.getElementsByTagName('body')[0].style.position = 'relative'
// 	// wrap.style.maxHeight = '400px'
// 	wrap.style.position = 'absolute'
// 	wrap.style.left = '0'
// 	// wrap.style.bottom = '450px'
// 	wrap.style.fontSize = '16px'
// 	wrap.style.zIndex = '999999999'
// 	wrap.style.backgroundColor = 'rgba(0,0,0,.5)'
// }
