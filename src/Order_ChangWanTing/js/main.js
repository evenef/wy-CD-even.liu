var data = {
	listArr: []
}
var isBtn = true
var isBtnCurNum = 0

window.onload = function(){
	// pageConsole('href', window.location.href)
	data.listArr = getFocusArr()
	initList(getCookie('isBtnCurNum'))
	searchObj().orderCallback && orderCallbackFnc()
	// orderCallbackFnc()

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
		}else if(isBtn || getEl('.orderTipsWin').children[2].innerHTML === '购买成功！快去体验吧'){
			setCookie('isBtnCurNum', '1')
			window.location.href = unescape(searchObj().backUrl)
			return
		}else if(getEl('.orderTipsWin').style.display){
			getEl('.orderTipsWin').style.display = ''
			isBtn = true
		}
		break
		case 32://back
		case 8:
		if(isBtn || getEl('.orderTipsWin').children[2].innerHTML === '购买成功！快去体验吧'){
			setCookie('isBtnCurNum', '1')
			window.location.href = unescape(searchObj().backUrl)
			return
		}else if(!isBtn && getEl('.orderTipsWin').style.display){
			getEl('.orderTipsWin').style.display = ''
			isBtn = true
		}
		break
	}
	if(index){
		isBtnCurNum = index
		setCookie('isBtnCurNum', isBtnCurNum)
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
	// getEl('.btn20').productId = '17140309181021000002'
	getEl('.btn20').productId = '16021215165731000002'
	getEl('.btn26').productId = '17360111110144000009'
	num = num === undefined ? 1 : parseInt(num)
	data.listArr.map(function(item, index){
		item.className = item.className.replace(/ currentFocus/g, '')
		index === num && (item.className += ' currentFocus')
	})
}

//订购
function toOrder(_productId){
	var url = 'http://' + window.location.host + '/wbManager/shop/reChange.do',
	_path = window.location.href.replace(/index\.html/, 'order.jsp'),
	_bsReturnURL = escape(_path + "&orderCallback=true")

	var data = {
		type: 0,
		// userid: 'gdtest1',
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
			if(param.rltcode == '0' && param.object.list)
				window.location.href = param.object.list
			// else
			// 	pageConsole('订购页响应错误：object.list为空或不存在', JSON.stringify(param))
		}
	})
}
//支付回调函数
function orderCallbackFnc(){
	// pageConsole('href', window.location.href)
	// pageConsole('parms', searchObj().parms)
	// pageConsole('data', unescape(searchObj().data))

	// var judgeData = unescape(searchObj().data)
	// getEl('.orderTipsWin').style.display = 'block'
	// getEl('.orderTipsWin').children[2].innerHTML = '购买失败！请稍后再试'
	// if(/SUCCESS/.test(JSON.parse(judgeData).result_code)){
	// 	getEl('.orderTipsWin').children[2].innerHTML = '购买成功！快去体验吧'
	// }

	ajax({
		url: 'http://' + window.location.host + '/wbManager/shop/orderList.do',
		type: 'POST',
		data: {
			Result: 1,
			parms: searchObj().parms || '',
			// parms: 'Nzk2MDIsMTYwMjEyMTUxNjU3MzEwMDAwMDIsd2JkZzAwMDAxNjQzNA==',//183
			data: unescape(searchObj().data) || ''
			// data: unescape('%7B%22result_code%22:%22SUCCESS%22,%22result_desc%22:%22%C3%A6%C2%94%C2%AF%C3%A4%C2%BB%C2%98%C3%A6%C2%88%C2%90%C3%A5%C2%8A%C2%9F%22,%22order_amount%22:%22774.0%22,%22attach%22:%22%22,%22finish_time%22:%2220171220144817%22,%22random_str%22:%220fdfddc2f10c46afb47abbf9fed8736a%22,%22out_trade_no%22:%221701122014481358516583%22,%22payment_type%22:%22%22%7D') || ''
		},
		success: function(param){
			// pageConsole('接口返回成功 : ', param.replace(/script/, ''))
			getEl('.orderTipsWin').style.display = 'block'
			getEl('.orderTipsWin').children[2].innerHTML = '购买失败！请稍后再试'
			isBtn = false
			if(/onSuccess/.test(param)){
				getEl('.orderTipsWin').children[2].innerHTML = '购买成功！快去体验吧'
			}
		},
		fail: function(err, responseText, responseXML){
			// pageConsole('接口请求失败 : ', err + '///' + responseText + '///' + responseXML)
		}
	})
}


// 圣剑畅玩厅
//   16021215165731000002（续包月） 
//   17360111110144000009（包1个月）
//   
//   http://192.168.5.3:8080/Wanba/EPG/Order/index.html?userID=79612&productId=16021215165731000002&contentCode=1728030722284142700018&backUrl=http%3A//192.168.5.3%3A8080/Wanba/active/park/index.html%3FPRODUCTID%3D16021215165731000002%26number%3D100%26page%3D1%26UserID%3D79612


// gdtest1
// parms   Nzk2MDQsMTcxNDAzMDkxODEwMjEwMDAwMDIsd2JkZzAwMDAxNjY3OA==
// data   {"result_code":"SUCCESS","result_desc":"æ¯ä»æå","order_amount":"774.0","attach":"","finish_time":"20171220222906","random_str":"c951e080850c465080096658e00ca804","out_trade_no":"1701122022290271930953","payment_type":""}