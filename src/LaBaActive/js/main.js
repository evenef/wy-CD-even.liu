var focusNum = 0

window.onload = function(){
	toSendPage('page', '腊八活动')
	initList(focusNum)
	window.onkeydown = keyFnc
}
//游戏列表初始化
function initList(num){
	num = num || 0
	var arr = [{
		className: 'cc',
		name: '虫虫大冒险',
		gameId: 544,
	},{
		className: 'atm',
		name: '奥特曼',
		gameId: 498,
	},{
		className: 'fj',
		name: '超级飞机侠',
		gameId: 501,
	},{
		className: 'sd',
		name: '速度激情',
		gameId: 383,
	},{
		className: 'wd',
		name: '豌豆特攻',
		gameId: 534,
	},{
		className: 'js',
		name: '奔跑吧僵尸',
		gameId: 503,
	}]
	arr.map(function(item, index){
		getEl('.' + item.className + 'Wrap').gameMsg = item
		if(num === index)
			getEl('.' + item.className + 'Wrap').className = item.className + 'Wrap focusFlag'
		else
			getEl('.' + item.className + 'Wrap').className = item.className + 'Wrap'
	})
}
//键盘事件
function keyFnc(e){
	switch(e.keyCode){
		case 37:
		focusNum && initList(--focusNum)
		break
		case 39:
		focusNum < 5 && initList(++focusNum)
		break
		case 13:
		toSendPage('LaBaActive_game' + getEl('.focusFlag').gameMsg.gameId, '腊八活动', '跳转游戏详情：' + getEl('.focusFlag').gameMsg.name)
		startActivity(getEl('.focusFlag').gameMsg.gameId, searchObj().UserID)
		break
		case 32:
		case 8:
		window.location.href = unescape(searchObj().ReturnURL)
		break
	}
}


