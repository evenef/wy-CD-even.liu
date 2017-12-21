var focusNum = 0,
isList = true,
toPayURL = 'http://' + window.location.host + '/wbManager/shop/cloudID.do',//鉴权接口
spId = '40005',
PRODUCTID = "16021215165731000002",
contentCode = '1720071715353737300049'

window.onload = function(){
	initList(focusNum)
	orderTestFnc()
	window.onkeydown = keyFnc
}
//游戏列表初始化
function initList(num){
	num = num || 0
	var arr = [{
		className: 'zzx',
		name: '猪猪侠',
		gameId: 529,
	},{
		className: 'xll',
		name: '熊来了',
		gameId: 514,
	},{
		className: 'wz',
		name: '王者与荣耀',
		gameId: 576,
	},{
		className: 'qq',
		name: '球球大作战',
		gameId: 586,
	},{
		className: 'atm',
		name: '奥特曼',
		gameId: 498,
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
		focusNum && focusNum !== 3 && isList && initList(--focusNum);
		!isList && tipsWinShow(false, true)
		break
		case 38:
		if(focusNum >= 3 && isList){
			focusNum === 3 && (focusNum = 1);
			focusNum === 4 && (focusNum = 2);
			initList(focusNum)
		}
		break
		case 39:
		focusNum < 4 && focusNum !== 2 && isList && initList(++focusNum);
		!isList && tipsWinShow(false, false)
		break
		case 40:
		if(focusNum <= 2 && isList){
			!focusNum && (focusNum = 3);
			focusNum === 1 && (focusNum = 3);
			focusNum === 2 && (focusNum = 4);
			initList(focusNum)
		}
		break
		case 13:
		if(isList){
			startActivity(getEl('.focusFlag').gameMsg.gameId, searchObj().UserID)
		}else if(!isList && /focusFlag/.test(getEl('.enterBtn').className)){
			document.location.href = 'http://' + location.host + '/Wanba/EPG/Order/order.jsp?userID=' + searchObj().UserID + '&productId=' + PRODUCTID + '&contentCode=' + contentCode + '&backUrl=' + escape(document.location.href)
		}else if(!isList && /focusFlag/.test(getEl('.backBtn').className)){
			isList = true
			getEl('.tipsWin').style.display = ''
		}
		break
		case 32:
		case 8:
		if(isList){
			window.location.href = searchObj().ReturnURL
		}else{
			isList = true
			getEl('.tipsWin').style.display = ''
		}
		break
	}
}
//验证是否订购
function orderTestFnc(){
	ajax({
		url: toPayURL,
		data: {
			spId: spId || '',
			epgId: searchObj().UserID || '',
			productId: PRODUCTID || '',
			contentId: contentCode || '',
		},
		success: function(param){
			param = JSON.parse(param)
			if(!param.rltcode && param.object.list.error_code == 0){
				// tipsWinShow(true)
			}else{
				tipsWinShow(false, true)
			}
		},
		// fail: function(){
		// 	tipsWinShow(false, true)
		// }
	})
}
//提示框初始化
function tipsWinShow(isHidden, isEnter){
	if(isHidden)
		return
	isList = false
	getEl('.tipsWin').style.display = 'block'
	getEl('.tipsWin').children[0].className = 'enterBtn' + (isEnter ? ' focusFlag' : '')
	getEl('.tipsWin').children[1].className = 'backBtn' + (!isEnter ? ' focusFlag' : '')
}