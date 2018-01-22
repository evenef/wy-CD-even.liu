var focusNum = 0,
isList = true,
toPayURL = 'http://' + window.location.host + '/wbManager/shop/cloudID.do',//鉴权接口
spId = '40003',
PRODUCTID = "17140309181021000002",
contentCode = '1732011215403626475399',//超能战机队
pointAX = 0

window.onload = function(){
	toSendPage('page', '雪球大作战专题')
	initList(focusNum)
	orderTestFnc()
	window.onkeydown = keyFnc
	startHandPoint()//雪球手标动画
	startSnow()//雪人动画
}
//游戏列表初始化
function initList(num){
	num = num || 0
	var arr = [{
		className: 'wdtg',
		name: '豌豆特攻3D',
		gameId: 534,
	},{
		className: 'wptg',
		name: '王牌特工',
		gameId: 605,
		// gameId: 605,
	},{
		className: 'jjfc',
		name: '机甲飞车',
		gameId: 604,
		// gameId: 604,
	},{
		className: 'xlyx',
		name: '驯龙英雄3D',
		gameId: 485,
	}]
	arr.map(function(item, index){
		getEl('.' + item.className + 'Wrap').gameMsg = item
		if(num === index)
			getEl('.' + item.className + 'Wrap').className = item.className + 'Wrap focusFlag'
		else
			getEl('.' + item.className + 'Wrap').className = item.className + 'Wrap'
	})

	getEl('.focusBox').style.left = getEl('.focusFlag').offsetLeft - 36 + 'px'
	getEl('.focusBox').style.display = 'block'
}
//point动画
function startHandPoint(){
	getEl('.focusBox').children[0].style.visibility = !pointAX ? 'visible' : 'hidden'
	getEl('.focusBox').children[1].style.visibility = pointAX ? 'visible' : 'hidden'
	pointAX = !pointAX
	setTimeout(startHandPoint,500)
}
//snow动画
function startSnow(){
	var arr = getEl('.snowBox').children
	for(var i = 0;i < arr.length;i++){
		if(arr[i].style.visibility){
			arr[i].style.visibility = ''
			arr[i < arr.length - 1 ? ++i : 0].style.visibility = 'visible'
			setTimeout(startSnow,300)
			return
		}
	}
	arr[0].style.visibility = 'visible'

	setTimeout(startSnow,200)
}
//键盘事件
function keyFnc(e){
	switch(e.keyCode){
		case 37:
		focusNum && isList && initList(--focusNum);
		!isList && tipsWinShow(false, true)
		break
		case 39:
		focusNum < 3 && isList && initList(++focusNum);
		!isList && tipsWinShow(false, false)
		break
		case 13:
		if(isList){
			toSendPage('snowBallFight_game' + getEl('.focusFlag').gameMsg.gameId, '雪球大作战专题', '跳转游戏详情：' + getEl('.focusFlag').gameMsg.name)
			startActivity(getEl('.focusFlag').gameMsg.gameId, searchObj().UserID)
		}else if(!isList && /focusFlag/.test(getEl('.enterBtn').className)){
			toSendPage('snowBallFight_order', '雪球大作战专题', '跳转订购页：星乐园')
			document.location.href = 'http://' + location.host + '/Wanba/EPG/Order/order.jsp?userID=' + searchObj().UserID + '&productId=' + PRODUCTID + '&contentCode=' + contentCode + '&backUrl=' + escape(document.location.href)
		}else if(!isList && /focusFlag/.test(getEl('.backBtn').className)){
			isList = true
			getEl('.tipsWin').style.display = ''
		}
		break
		case 32:
		case 8:
		if(isList){
			window.location.href = unescape(searchObj().ReturnURL)
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
		fail: function(){
			tipsWinShow(false, true)
		}
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


// //animate("选择器","动画","次数","时延")
// function animate(seletor, animation_name, count, delay) {
// 	var target = document.querySelectorAll(seletor)
// 	var timer = null;
// 	timer = setInterval( function() {
// 		target.forEach( function(x) {
// 			x.className += " animated " + animation_name;
// 			x.addEventListener("animationend", function(){
// 				x.className = x.className.replace(" animated " + animation_name, "");
// 			});
// 		} )
// 		count --;
// 		if( count <= 0 ) {
// 			clearInterval( timer );
// 		}
// 	}, delay)
// }
// //使用示例
// animate('.haha', "bounce", 2, 1000);