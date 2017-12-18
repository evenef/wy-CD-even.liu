var data = {
	listArr: []
}
var isBtn = true

window.onload = function(){
	data.listArr = getFocusArr()
	initList()
	searchObj().orderCallback && orderCallbackFnc()

	window.onkeydown = keyFnc
}
//键盘事件
function keyFnc(e){
	var ele = getEl('.currentFocus'),
	index = 0
	data.listArr.map(function(item, i){
		ele === item && (index = i)
	})
	switch(e.keyCode){
		case 38://↑
		index && isBtn && initList(--index)
		break
		case 40://↓
		index < getEl('.orderBtns').children.length && isBtn && initList(++index)
		break
		case 13://enter
		if(isBtn && index){
			toOrder(getEl('.currentFocus').productId)
		}else if(isBtn){
			window.location.href = unescape(searchObj().backUrl)
		}else if(getEl('.orderTipsWin').style.display){
			getEl('.orderTipsWin').style.display = ''
			isBtn = true
		}
		break
		case 32://back
		case 8:
		if(isBtn){
			window.location.href = unescape(searchObj().backUrl)
		}else if(!isBtn && getEl('.orderTipsWin').style.display){
			getEl('.orderTipsWin').style.display = ''
			isBtn = true
		}
		break
	}
}
//获取焦点集合
function getFocusArr(){
	var arr = []
	arr.push(getEl('.return-btn'))
	for(var i = 0;i < getEl('.orderBtns').children.length;i++){
		arr.push(getEl('.orderBtns').children[i])
	}
	return arr
}
//列表初始化
function initList(num){
	getEl('.btn20').productId = '16021215165731000002'
	getEl('.btn26').productId = '17360111110144000009'
	num = num === undefined ? 1 : num
	data.listArr.map(function(item, index){
		item.className = item.className.replace(/ currentFocus/g, '')
		index === num && (item.className += ' currentFocus')
	})
}

//订购
function toOrder(_productId){
	var url = 'http://' + window.location.host + '/wbManager/shop/reChange.do',
	_path = window.location.href,
	_bsReturnURL = escape(_path + "?orderCallback=true")

	var data = {
		type: 0,
		userid: searchObj().userID,
		productId: _productId,
		continueType: 0,
		gameId: searchObj().contentCode,
		thirdCode: 1,
		contentId: searchObj().contentCode,
		bsReturnURL: _bsReturnURL
	}

	ajax({
		url: url,
		type: 'POST',
		data: data,
		success: function(param){
			param = JSON.parse(param)
			if(param.rltcode == '0')
				window.location.href = param.object.list
		}
	})
}
//支付回调函数
function orderCallbackFnc(){
	ajax({
		url: 'http://' + window.location.host + '/wbManager/shop/orderList.do',
		type: 'POST',
		data: {
			parms: searchObj().parms || '',
			data: searchObj().data || ''
		},
		success: function(param){
			getEl('.orderTipsWin').style.display = 'block'
			getEl('.orderTipsWin').children[2].innerHTML = '购买失败！请稍后再试'
			isBtn = false
			if(/onSuccess/.test(param)){
				getEl('.orderTipsWin').children[2].innerHTML = '购买成功！快去体验吧'
			}
		}
	})
}


// 圣剑畅玩厅
//   16021215165731000002（续包月） 
//   17360111110144000009（包1个月）