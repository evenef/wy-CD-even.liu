var userid_set = ''
// userid_set = 'stbtest01'
// userid_set = 'gdtest1'
var data = {
	// orderURL: 'http://172.18.104.83:8080/wbManager/shop/reChange.do',//订购接口
	orderURL: 'http://' + window.location.host + '/wbManager/shop/reChange.do',//订购接口
	orderListURL: 'http://' + window.location.host + '/wbManager/shop/orderList.do',//支付回调接口
	// orderResultURL: 'http://172.18.104.83:8080/wbManager/orderResult.do',//订购上报接口
	orderResultURL: 'http://' + window.location.host + '/wbManager/orderResult.do',//订购上报接口
	productId20: '16021215165731000002',//连续包月
	productId26: '17360111110144000009',//单包月
	productName: '',//套餐包中文名称
	productTitleName: '',//套餐包英文名称
	productBgImg: '',//背景图
	listArr: []
}
var isBtn = true
var isBtnCurNum = 0

initProductBg(searchObj().productId)

window.onload = function(){
	toSendPage('page', '新版订购页_' + data.productName)
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

			toSendPage(data.productTitleName + '_' + getEl('.currentFocus').orderType,
				'新版订购页_' + data.productName + '_点击' + getEl('.currentFocus').orderName,
				'点击' + getEl('.currentFocus').orderName,
				function(){
					toOrder(getEl('.currentFocus').productId)
				})

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
	getEl('.btn20').productId = data.productId20
	getEl('.btn20').orderType = 'orderMuchMonths'
	getEl('.btn20').orderName = '连续包月'
	getEl('.btn26').productId = data.productId26
	getEl('.btn26').orderType = 'orderOneMonth'
	getEl('.btn26').orderName = '单包月'
	num = num === undefined ? 1 : parseInt(num)
	data.listArr.map(function(item, index){
		item.className = item.className.replace(/ currentFocus/g, '')
		index === num && (item.className += ' currentFocus')
	})
}

//订购
function toOrder(_productId){
	var url = data.orderURL,
	_path = window.location.href.replace(/index\.html/, 'order.jsp')
	
	_path = _path.replace(/&orderCallback=true.*/, '')

	var _bsReturnURL = escape(_path + "&orderCallback=true")


	var dataTemp = {
		type: 0,
		// userid: 'gdtest1',
		userid: userid_set || searchObj().userID,
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
		data: dataTemp,
		success: function(param){
			param = JSON.parse(param)
			if(param.rltcode == '0' && param.object.list){
				window.location.href = param.object.list
			}
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

	// pageConsole('href///' + window.location.href + '///')
	// pageConsole('parms///' + searchObj().parms + '///')
	// pageConsole('data///' + searchObj().data + '///')

	if(!searchObj().data){
		// pageConsole('data///' + searchObj().data + '///')
		// getEl('.orderTipsWin').children[2].innerHTML = '取消购买！'
		// getEl('.orderTipsWin').style.display = 'block'
		// isBtn = false
		return
	}

	ajax({
		url: data.orderListURL,
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
			getEl('.orderTipsWin').children[2].innerHTML = '购买失败！请稍后再试'

			try{
				var price = unescape(searchObj().data)
				price = JSON.parse(price).order_amount
				price = parseInt(price) / 100
				price += ''
			}catch(e){
				var price = ''
			}

			if(/onSuccess/.test(param)){
				getEl('.orderTipsWin').children[2].innerHTML = '购买成功！快去体验吧'
				orderResult(true, price, function(param){
					param = JSON.parse(param)
					if(!param.rltcode){}
				})
			}else{
				orderResult(false, price)
			}
			
			getEl('.orderTipsWin').style.display = 'block'
			isBtn = false
		},
		fail: function(err, responseText, responseXML){
			// pageConsole('接口请求失败 : ', err + ' / ' + responseText)
		}
	})
}

//订购状态上报
function orderResult(isOrder, price, cb){
	ajax({
		url: data.orderResultURL,
		type: 'post',
		data: {
			epgUserName: userid_set || searchObj().userID,//用户名
			// epgUserGroup: 'default',//用户分组
			// wayEUserName: '',//玩吧平台用户名
			// wayEUserGroup: '',//玩吧平台用户分组
			// stbType: '',//盒子型号
			// versionName: '',//版本号
			data: getNowTime(),//当前时间
			tradeNo: '',//订单号
			pageID: 'Order_ChangWanTing',//页面ID
			pageName: '畅玩厅订购页',//页面名
			// referPageID: '',//上级页面ID
			// referPageName: '',//上级页面名
			productID: getCookie('isBtnCurNum') == 1 ? data.productId20 : data.productId26,//产品包ID
			productName: '畅玩厅',//产品包名称
			productType: getCookie('isBtnCurNum') == 1 ? '1' : '0',//订购类型: 0:单包月; 1:连续包月; 2:PPV订购
			price: price,//价格
			resultCode: isOrder ? 0 : 1,//0:订购成功; 1:订购失败; 2:订购取消; 3:订购超时
			action: 1,//操作类型: 1:表示订购; 0:表示退订
			// message: '',//返回结果说明
		},
		success: function(param){
			cb && cb(param)
		}
	})
}

function initProductBg(id){
	data.productId20 = id
	switch(id){
		// 圣剑畅玩厅
		case '16021215165731000002':
		data.productId26 = '17360111110144000009'
		data.productName = '畅玩厅'
		data.productTitleName = 'ChangWanTing'
		data.productBgImg = 'url(img/bg.jpg)'
		break
		// 星乐园
		case '17140309181021000002':
		data.productId26 = '17140309180825000001'
		data.productName = '星乐园'
		data.productTitleName = 'starLand'
		data.productBgImg = 'url(img/starLand.jpg)'
		break
		// 游乐园
		case '16021215165349000001':
		data.productId26 = '17360111105802000008'
		data.productName = '游乐园'
		data.productTitleName = 'park'
		data.productBgImg = 'url(img/park.jpg)'
		break
		// 棋牌屋
		case '16021215165842000003':
		data.productId26 = '17360111110430000010'
		data.productName = '棋牌屋'
		data.productTitleName = 'chessRoom'
		data.productBgImg = 'url(img/chessRoom.jpg)'
		break
	}
	getEl('.content').style.backgroundImage = data.productBgImg
}



// 圣剑畅玩厅
//   16021215165731000002（续包月） 
//   17360111110144000009（包1个月）
//   
//   http://192.168.5.3:8080/Wanba/EPG/Order/index.html?userID=79612&productId=16021215165731000002&contentCode=1728030722284142700018&backUrl=http%3A//192.168.5.3%3A8080/Wanba/active/park/index.html%3FPRODUCTID%3D16021215165731000002%26number%3D100%26page%3D1%26UserID%3D79612


// gdtest1
// parms   Nzk2MDQsMTcxNDAzMDkxODEwMjEwMDAwMDIsd2JkZzAwMDAxNjY3OA==
// data   {"result_code":"SUCCESS","result_desc":"æ¯ä»æå","order_amount":"774.0","attach":"","finish_time":"20171220222906","random_str":"c951e080850c465080096658e00ca804","out_trade_no":"1701122022290271930953","payment_type":""}


	// "live_mode": "false",
