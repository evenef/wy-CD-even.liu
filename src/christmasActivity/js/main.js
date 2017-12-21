var imgUrlArr = []
var indexTemp = 1
while(indexTemp <= 6){
	imgUrlArr.push('./img/bg' + indexTemp + '.jpg')
	imgUrlArr.push('./img/img0' + indexTemp + '.png')
	imgUrlArr.push('./img/img0' + indexTemp++ + '-h.png')
}
var data = {
	game_1: {name: '愤怒的小鸡', gameID: '524', productID: '1734041716504814484434'},
	game_2: {name: '球球大作战', gameID: '586', productID: '1725110120251261404417'},
	game_3: {name: '萌兔闯迷宫', gameID: '409', productID: '1602122713233711497355'},
	game_4: {name: '投篮王', gameID: '558', productID: '1717080317542248034356'},
	game_5: {name: '熊来了', gameID: '514', productID: '1728030722412089600033'},
	game_6: {name: '奔跑吧僵尸', gameID: '503', productID: '1732011215323903275354'}
}

var itemIndex = 0
window.onload = function(){
	toSendPage('page', '圣诞活动')
	window.onkeydown = keyFnc
	imgLoadFnc(imgUrlArr)
}

//键盘事件
function keyFnc(e){
	var i = parseInt(getEl('ul').className.substring(7))
	switch(e.keyCode){
		case 37:
		getEl('ul').className = i > 1 ? 'active_' + --i : getEl('ul').className
		break
		case 39:
		getEl('ul').className = i < 6 ? 'active_' + ++i : getEl('ul').className
		break
		case 13:
		toSendPage('christmasActivity_game' + data['game_' + i].gameID, '圣诞活动', '跳转游戏详情：' + data['game_' + i].name)
		startActivity(data['game_' + i].gameID, searchObj().UserID)
		break
		case 32:
		case 8:
		document.location.href = unescape(searchObj().ReturnURL)
		break
	}
}