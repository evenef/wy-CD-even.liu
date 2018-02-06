var data = {
	packageMsg: [{
		className: 'ChangWanTing',
		name: '畅玩厅',
		productId: '16021215165731000002',
		packageURL: window.location.origin + '/Wanba/active/ChangWanTing/index.html',
	},{
		className: 'park',
		name: '游乐园',
		productId: '16021215165349000001',
		packageURL: window.location.origin + '/Wanba/active/park/index.html',
	},{
		className: 'starLand',
		name: '星乐园',
		productId: '17140309181021000002',
		packageURL: window.location.origin + '/Wanba/active/starLand/index.html',
	},{
		className: 'chessRoom',
		name: '棋牌屋',
		productId: '16021215165842000003',
		packageURL: window.location.origin + '/Wanba/active/chessRoom/index.html',
	}]
}

var focusNum = 0
try{
	focusNum = Number(window.localStorage.focusNum) || 0
}catch(e){}

window.onload = function(){
	toSendPage('page', '新春大联欢')
	initList(focusNum)
	window.onkeydown = keyFnc
}
//游戏列表初始化
function initList(num){
	num = num || 0
	data.packageMsg.map(function(item, index){
		getEl('.' + item.className + 'Wrap').packageMsg = item
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
		if(focusNum > 1){
			focusNum -= 2
			initList(focusNum)
		}
		break
		case 38:
		(focusNum === 1 || focusNum === 3) && initList(--focusNum)
		break
		case 39:
		if(focusNum <= 1){
			focusNum += 2
			initList(focusNum)
		}
		break
		case 40:
		(focusNum === 0 || focusNum === 2) && initList(++focusNum)
		break
		case 13:
		toSendPage('package_' + getEl('.focusFlag').packageMsg.productId, '新春大联欢', '跳转套餐包：' + getEl('.focusFlag').packageMsg.name,function(){
			window.location.href = getEl('.focusFlag').packageMsg.packageURL + '?UserID=' + (searchObj().UserID || searchObj().userID) + '&ReturnURL=' + escape(window.location.href)
		})
		// startActivity(getEl('.focusFlag').packageMsg.productId, searchObj().UserID)
		break
		case 32:
		case 8:
		window.localStorage.focusNum = focusNum = 0
		window.location.href = unescape(searchObj().ReturnURL)
		break
	}

	window.localStorage.focusNum = focusNum
}


