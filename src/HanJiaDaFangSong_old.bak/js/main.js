var HanJiaDaFangSong_data = {
	gameMsg: [{
		name: '纷腾抽红包',
		gameId: '16021215165731000002',
		gameURL: window.location.origin + '/Wanba/active/xinnianhuodong/xinyunhongbao/index.html?UserID=' + (searchObj().UserID || searchObj().userID) + '&ReturnURL=' + escape(window.parent.location.href),
	},{
		name: '圣剑抓娃娃',
		gameId: '16021215165349000001',
		gameURL: window.location.origin + '/Wanba/active/shengJianWaWaJi/loadingPage/index.html?UserID=' + (searchObj().UserID || searchObj().userID) + '&ReturnURL=' + escape(window.parent.location.href),
	},{
		name: '云游戏',
		gameId: '17140309181021000002',
		gameURL: window.location.origin + '/Wanba/EPG/v1.0.0/apk_action.jsp?appName=com.cloud.cyber&className=com.cybercloud.MainActivity&CyberURL=CyberAppID=1&CyberSideCode=CS00002&UserID=' + (searchObj().UserID || searchObj().userID) + '&ReturnURL=' + escape(window.parent.location.href),
	},{
		name: '爱游戏活动',
		gameId: '16021215165842000003',
		gameURL: window.location.origin + "/Wanba/EPG/v1.0.0/apk_action.jsp?appName=com.egame.tv&className=com.egame.tv.activitys.PreLancherActivity&RECOMMEND=%7BrecordType:'2',gameid:'',aid:'0',linkurl:'http%3a%2f%2f192.168.6.104%3a8088%2fhd%2ftv_hbWzry%2findex.html',downloadfrom:'1',actioncode:'1',name:''%7D&UserID=" + (searchObj().UserID || searchObj().userID) + '&ReturnURL=' + escape(window.parent.location.href),
	}],
	// oldKeyFnc: '',
	//游戏列表初始化
	initList: function (num){
		num = num || 0
		HanJiaDaFangSong_data.gameMsg.map(function(item, index){
			getEl('.content').children[index].gameMsg = item
			if(num === index)
				getEl('.content').children[index].className = 'focusFlag'
			else
				getEl('.content').children[index].className = ''
		})

		getEl('.toHallBtn').className = num === 'toHallBtn' ? 'toHallBtn focusFlag' : 'toHallBtn'
	},
	//键盘事件
	keyFnc: function (e){
		switch(e.keyCode){
			case 37:
			HanJiaDaFangSong_focusNum > 0 && HanJiaDaFangSong_data.initList(--HanJiaDaFangSong_focusNum)
			break
			case 38:
			try{
				HanJiaDaFangSong_focusNum = Number(document.cookie.split('HanJiaDaFangSong_focusNum=')[1].split(';')[0])
			}catch(e){}
			HanJiaDaFangSong_data.initList(HanJiaDaFangSong_focusNum)
			break
			case 39:
			HanJiaDaFangSong_focusNum < 3 && HanJiaDaFangSong_data.initList(++HanJiaDaFangSong_focusNum)
			break
			case 40:
			HanJiaDaFangSong_focusNum = 'toHallBtn'
			HanJiaDaFangSong_data.initList(HanJiaDaFangSong_focusNum)
			break
			case 13:
			if(typeof(HanJiaDaFangSong_focusNum) === 'number'){
				toSendPage('game_' + getEl('.focusFlag').gameMsg.gameId, '寒假大放送', '跳转游戏：' + getEl('.focusFlag').gameMsg.name,function(){

					window.parent.location.href = getEl('.focusFlag').gameMsg.gameURL

				})
			}else{
				toSendPage('returnHall_', '寒假大放送', '关闭页面进入大厅',function(){
					try{
						window.parent.HanJiaDaFangSong_oldKeyFnc()
						// window.parent.onkeydown = HanJiaDaFangSong_data.oldKeyFnc
						window.parent.document.body.removeChild(window.parent.document.querySelector('.HanJiaDaFangSong_iframe'))
					}catch(e){}
				})
			}
			break
			case 32:
			case 8:
			toSendPage('returnHall_', '寒假大放送', '关闭页面进入大厅',function(){
				try{
					window.parent.HanJiaDaFangSong_oldKeyFnc()
					// window.parent.onkeydown = HanJiaDaFangSong_data.oldKeyFnc
					window.parent.document.body.removeChild(window.parent.document.querySelector('.HanJiaDaFangSong_iframe'))
				}catch(e){}
			})
			break
		}

		typeof(HanJiaDaFangSong_focusNum) === 'number' && (document.cookie = 'HanJiaDaFangSong_focusNum=' + HanJiaDaFangSong_focusNum)

		return true
	},
	//键盘事件
	loadFnc: function (){
		toSendPage('page', '寒假大放送')
		HanJiaDaFangSong_data.initList(HanJiaDaFangSong_focusNum)
		// HanJiaDaFangSong_data.oldKeyFnc = window.parent.onkeydown
		window.parent.onkeydown = HanJiaDaFangSong_data.keyFnc
	},
}

var HanJiaDaFangSong_focusNum = 0
try{
	HanJiaDaFangSong_focusNum = Number(document.cookie.split('HanJiaDaFangSong_focusNum=')[1].split(';')[0])
}catch(e){}

// console.log(window.onkeydown)
// console.log(window.parent.onkeydown)


window.addEventListener('load', HanJiaDaFangSong_data.loadFnc)
window.addEventListener('onload', HanJiaDaFangSong_data.loadFnc)

