var data = {
	gameMsg: [{
		name: '纷腾抽红包',
		gameId: '16021215165731000002',
		gameURL: window.location.origin + '/Wanba/active/xinnianhuodong/xinyunhongbao/index.html?UserID=' + searchObj().UserID + '&ReturnURL=' + searchObj().ReturnURL,
	},{
		name: '圣剑抓娃娃',
		gameId: '16021215165349000001',
		gameURL: window.location.origin + '/Wanba/active/' + (/192\.168\.5\.3:8080/.test(window.location.href) ? '' : 'shengJianWaWaJi/') + 'loadingPage/index.html?UserID=' + searchObj().UserID + '&ReturnURL=' + searchObj().ReturnURL,
	},{
	// 	name: '云游戏',
	// 	gameId: '17140309181021000002',
	// 	gameURL: window.location.origin + '/Wanba/EPG/v1.0.0/apk_action.jsp?appName=com.cloud.cyber&className=com.cybercloud.MainActivity&CyberURL=CyberAppID=1&CyberSideCode=CS00002&UserID=' + searchObj().UserID + '&ReturnURL=' + searchObj().ReturnURL,
	// },{
		name: '爱游戏活动',
		gameId: '16021215165842000003',
		gameURL: window.location.origin + "/Wanba/EPG/v1.0.0/apk_action.jsp?appName=com.egame.tv&className=com.egame.tv.activitys.PreLancherActivity&RECOMMEND=%7BrecordType:'2',gameid:'',aid:'0',linkurl:'http%3a%2f%2f192.168.6.104%3a8088%2fhd%2ftv_hbWzry%2findex.html',downloadfrom:'1',actioncode:'1',name:''%7D&UserID=" + searchObj().UserID + '&ReturnURL=' + searchObj().ReturnURL,
	}],
}

var focusNum = 0
// try{
// 	focusNum = Number(document.cookie.split('focusNum=')[1].split(';')[0])
// }catch(e){}


window.addEventListener('load', loadFnc)
window.addEventListener('onload', loadFnc)


//加载
function loadFnc(){
	toSendPage('page', '寒假大放送')
	initList(focusNum)
	window.onkeydown = keyFnc

	timeOutInit()//关闭页面倒计时
}
//游戏列表初始化
function initList(num){
	num = num || 0
	data.gameMsg.map(function(item, index){
		getEl('.content').children[index].gameMsg = item
		if(num === index)
			getEl('.content').children[index].className = 'focusFlag'
		else
			getEl('.content').children[index].className = ''
	})

	getEl('.toHallBtn').className = num === 'toHallBtn' ? 'toHallBtn focusFlag' : 'toHallBtn'
	getEl('.returnBtn').className = num === 'returnBtn' ? 'returnBtn focusFlag' : 'returnBtn'
}
//键盘事件
function keyFnc(e){
	switch(e.keyCode){
		case 37:
		focusNum > 0 && initList(--focusNum)
		focusNum === 'returnBtn' && (focusNum = 'toHallBtn') && initList(focusNum)
		break
		case 38:
		try{
			if(typeof(focusNum) !== 'number')
				focusNum = Number(document.cookie.split('focusNum=')[1].split(';')[0])
		}catch(e){}
		initList(focusNum)
		break
		case 39:
		focusNum < getEl('.content').children.length - 1 && initList(++focusNum)
		focusNum === 'toHallBtn' && (focusNum = 'returnBtn') && initList(focusNum)
		break
		case 40:
		focusNum = 'toHallBtn'
		initList(focusNum)
		break
		case 13:
		if(typeof(focusNum) === 'number'){
			toSendPage('game_' + getEl('.focusFlag').gameMsg.gameId, '寒假大放送', '跳转游戏：' + getEl('.focusFlag').gameMsg.name,function(){

				window.location.href = getEl('.focusFlag').gameMsg.gameURL

			})
		}else{
			toSendPage('returnHall_', '寒假大放送', '关闭页面进入大厅',function(){
				
				window.location.href = unescape(searchObj().ReturnURL)
			})
		}
		break
		case 32:
		case 8:
		toSendPage('returnHall_', '寒假大放送', '关闭页面进入大厅',function(){
			window.location.href = unescape(searchObj().ReturnURL)
		})
		break
	}

	typeof(focusNum) === 'number' && (document.cookie = 'focusNum=' + focusNum)
}

function timeOutInit(){
	var num = Number(getEl('.timeOutWrap').innerHTML)
	setTimeout(function(){
		getEl('.timeOutWrap').style.display = num ? 'block' : 'none'
		if(num){
			getEl('.timeOutWrap').innerHTML = num ? num - 1 : 0
			timeOutInit()
		}else{
			window.location.href = unescape(searchObj().ReturnURL)
		}
	},1000)
}






