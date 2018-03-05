var butNum = 0,
upBtnC = '',
gameId = 0,
videoCode = '',
FILM_ID = '',
CAT_ID = ''

window.onload = function(){
	toSendPage('page', '影游联动')
	initPage(butNum)
	controlVideo('onWatch')
	document.onkeydown = keyFnc

	// pageConsole('/// getEl("#get_play_url") /// ', getEl("#get_play_url"))

	getEl("#get_play_url").onload = function(){

		// pageConsole('/// frames /// ', window.frames)
		// pageConsole('/// get_play_url /// ', window.frames["get_play_url"])
		// pageConsole('/// get_play_url.body /// ', window.frames["get_play_url"].document.body)
		// pageConsole('/// #get_play_url /// ', window.frames["#get_play_url"])

		var textStr = window.frames["get_play_url"].document.body.innerText;

		// pageConsole('/// textStr /// ', textStr)

		var _mediaUrl = JSON.parse(textStr)
		playUrl = _mediaUrl.playurl;
		playMediaEPG(20, 146, 550, 265)

		getEl('.play_icon').style.display = 'none'
		getEl('#left_video_img').style.display = 'none'
	}
}

var butItems = []

//初始化页面
function initPage(num){
	butItems = []
	for(var i = 0;i < getEl('.list').children.length;i++){
		if(/item/.test(getEl('.list').children[i].className)){
			butItems.push(getEl('.list').children[i])
			getEl('.list').children[i].className = (i - 5) === num ? 'item item_focus' : 'item'
			getEl('.list').children[i].children[0].style.backgroundImage = getEl('.list').children[i].children[0].style.backgroundImage.replace(/focused/g, 'normal')
		}
	}
	if(typeof(num) === 'undefined')
		return
	switch(num){
		case 0:
		focusImgs('AoTeMan')
		break
		case 1:
		focusImgs('GuoBao')
		break
		case 2:
		focusImgs('KaiJia')
		break
		case 3:
		focusImgs('XiaoMoXian')
		break
		default:
		focusImgs()
		break
	}
}

//选择界面变化样式
function focusImgs(name, obj){
	name = name || ''
	obj = obj || {}
	obj = {
		butImg: obj.butImg || './img/ao_te_man_focused.png',
		logoImg: obj.logoImg || './img/ao_te_man_logo.png',
		bgImg: obj.bgImg || './img/ao_te_man_bgv.png',
		playImg: obj.playImg || './img/ao_te_man_img.png',
		videoImg: obj.videoImg || './img/ao_te_man_video.png'
	}
	getEl('.bg_ao_te_man').style.display = 'none'
	getEl('.show_img_ao_te_man').style.display = 'none'

	getEl('.bg_guo_bao_te_gong').style.display = 'none'
	getEl('.show_img_guo_bao_te_gong').style.display = 'none'

	getEl('.bg_kai_jia_yong_shi').style.display = 'none'
	getEl('.show_img_kai_jia_yong_shi').style.display = 'none'

	getEl('.bg_xiao_mo_xian').style.display = 'none'
	getEl('.show_img_xiao_mo_xian').style.display = 'none'
	switch(name){
		case 'AoTeMan':
		obj = {
			butImg: './img/ao_te_man_focused.png',
			logoImg: './img/ao_te_man_logo.png',
			bgImg: './img/ao_te_man_bgv.png',
			playImg: './img/ao_te_man_img.png',
			videoImg: './img/ao_te_man_video.png'
		}
		getEl('.bg_ao_te_man').style.display = 'block'
		getEl('.show_img_ao_te_man').style.display = 'block'
		break
		case 'GuoBao':
		obj = {
			butImg: './img/guo_bao_te_gong_focused.png',
			logoImg: './img/guo_bao_te_gong_logo.png',
			bgImg: './img/guo_bao_te_gong_bgv.png',
			playImg: './img/guo_bao_te_gong_img.png',
			videoImg: './img/guo_bao_te_gong_video.png'
		}
		getEl('.bg_guo_bao_te_gong').style.display = 'block'
		getEl('.show_img_guo_bao_te_gong').style.display = 'block'
		break
		case 'KaiJia':
		obj = {
			butImg: './img/kai_jia_yong_shi_focused.png',
			logoImg: './img/kai_jia_yong_shi_logo.png',
			bgImg: './img/kai_jia_yong_shi_bgv.png',
			playImg: './img/kai_jia_yong_shi_img.png',
			videoImg: './img/kai_jia_yong_shi_video.png'
		}
		getEl('.bg_kai_jia_yong_shi').style.display = 'block'
		getEl('.show_img_kai_jia_yong_shi').style.display = 'block'
		break
		case 'XiaoMoXian':
		obj = {
			butImg: './img/xiao_mo_xian_focused.png',
			logoImg: './img/xiao_mo_xian_logo.png',
			bgImg: './img/xiao_mo_xian_bgv.png',
			playImg: './img/xiao_mo_xian_img.png',
			videoImg: './img/xiao_mo_xian_video.png'
		}
		getEl('.bg_xiao_mo_xian').style.display = 'block'
		getEl('.show_img_xiao_mo_xian').style.display = 'block'
		break
	}
	getEl('.item_focus').children[0].style.backgroundImage = 'url(' + obj.butImg + ')'
	getEl('.item_focus').children[0].style.backgroundPosition = 'center'

	if(obj.playImg){
		getEl('.play_icon').style.display = 'block'
		getEl('#right_game_img').style.display = 'block'
		getEl('#right_game_img').src = obj.playImg
	}else{
		getEl('#right_game_img').style.display = 'none'
	}
	if(obj.videoImg){
		getEl('#left_video_img').style.display = 'block'
		getEl('#left_video_img').src = obj.videoImg
	}else{
		getEl('#left_video_img').style.display = 'none'
	}
}
//选择观影/游戏
function watchOrPlay(name){
	upBtnC = name
	getEl('.left_vedio').children[1].className = 'item'
	getEl('.right_game').children[0].className = 'item'
	if(upBtnC === 'watch'){
		getEl('.left_vedio').children[1].className = 'item itemC'
	}else if(upBtnC === 'play'){
		getEl('.right_game').children[0].className = 'item itemC'
	}
}

//键盘焦点移动
function keyFnc(e){
	switch(e.keyCode){
		case 37:
		if(!upBtnC && butNum){
			destoryMP()
			initPage(--butNum)
			controlVideo('onWatch')
		}else if(upBtnC)
			watchOrPlay('watch')
		break
		case 38:
		getEl('.item_focus').children[0].style.backgroundImage = getEl('.item_focus').children[0].style.backgroundImage.replace(/focused/g, 'normal')
		getEl('.item_focus').className = 'item'
		if(butNum <= 1){
			watchOrPlay('watch')
		}else{
			watchOrPlay('play')
		}
		break
		case 39:
		if(!upBtnC && butNum < 3){
			destoryMP()
			initPage(++butNum)
			controlVideo('onWatch')
		}else if(upBtnC)
			watchOrPlay('play')
		break
		case 40:
		watchOrPlay()

		butItems[butNum].className = 'item item_focus'
		butItems[butNum].children[0].style.backgroundImage = butItems[butNum].children[0].style.backgroundImage.replace(/normal/g, 'focused')
		break
		case 13:
		if(upBtnC && upBtnC === 'watch'){
			toSendPage('goToWatchBtn_' + gameId, '影游联动', '影游联动_点击观看影片_' + gameId, function(){

				controlVideo('goToWatch')
			})
		}else if(upBtnC && upBtnC === 'play'){
			// console.log(upBtnC, butNum)

			initGameData()

			toSendPage('playBtn_' + gameId, '影游联动', '影游联动_点击立即畅玩_' + gameId, function(){

				startActivity(gameId, searchObj().UserID)
			})
		}else{
			initGameData()

			toSendPage('playBtn_' + gameId, '影游联动', '影游联动_跳转游戏详情_' + gameId, function(){

				startActivity(gameId, searchObj().UserID)
			})
		}
		break
		case 32:
		case 8:
		var obj = searchObj()
		if(obj.ReturnURL)
			window.location.href = unescape(obj.ReturnURL)
		else
			console.log('%c没有找到ReturnURL', 'color: #f0f')
		break
	}
}
//初始化游戏资料
function initGameData(){
	switch(butNum){
		case 0://奥特曼旧时代奇迹
		gameId = 578
		videoCode = '1d36453fe1eb4f6ba6a22094e62ec22d'
		FILM_ID = '638027'
		// CAT_ID = '10000100000000090000000000004240'
		CAT_ID = ''
		CAT_ID = '10000100000000090000000000006895'
		break
		case 1://果宝特攻
		gameId = 580
		videoCode = '39855232d5c5402c9d4ff9845d6fb65f'
		FILM_ID = '637823'
		CAT_ID = ''
		CAT_ID = '10000100000000090000000000006897'
		break
		case 2://新铠甲勇士
		gameId = 581
		videoCode = 'cd24489404e64867bb5ba34481570f5a'
		FILM_ID = '637280'
		CAT_ID = ''
		CAT_ID = '10000100000000090000000000006898'
		break
		case 3://巴啦啦小魔仙
		gameId = 579
		videoCode = '4c6a6717340c43d08e52f8606af8c934'
		FILM_ID = '637770'
		CAT_ID = ''
		CAT_ID = '10000100000000090000000000006896'
		break
	}
}
//视频事件（播放、跳转）
function controlVideo(name){
	initGameData()
	try{
		var epgDoman = Authentication.CTCGetConfig("EPGDomain");
		if(name === 'goToWatch'){
			// var _url = epgDoman.substring(0,epgDoman.indexOf("Category.jsp")) + "Category.jsp?spVodPlayUrl="+escape("vod_detail.html?TYPE_ID=" + CAT_ID + "&FILM_ID=" + FILM_ID + "&ReturnURL=" + escape(window.location.href))

			var _url = epgDoman.substring(0,epgDoman.indexOf("Category.jsp")) + "Category.jsp?spVodPlayUrl="+escape("valueadded/tongqu_progDetail.html?SITCOM=1&refer_page=movieGame&TYPE_ID=" + CAT_ID + "&FILM_ID=" + FILM_ID + "&ReturnURL=" + escape(window.location.href))

			// setTimeout(function(){
				document.location.href = _url
			// }, 10000)
		}else if(name === 'onWatch'){

			var _url = epgDoman.substring(0,epgDoman.indexOf("Category.jsp")) + "vaitf/getVodPlayUrl.jsp"+"?code=" + videoCode;

			getEl('#get_play_url').src = _url

			// pageConsole('/// epgDoman /// ', epgDoman)
			// pageConsole('/// _url /// ', _url)

		}
	}catch(e){
		// pageConsole('epgDoman获取出错', e)
	}
}
