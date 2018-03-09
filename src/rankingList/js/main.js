var urlStr = window.location.origin
if(/localhost/.test(window.location.origin) || /127\.0\.0\.1/.test(window.location.origin)){
	urlStr = 'http://172.18.104.11:1080'
}
var data = {
	rankURL: urlStr + '/wbManager/ranking/getRankList.do',
	list: []
}

var focusNum = 0
// try{
// 	focusNum = Number(document.cookie.split('focusNum=')[1].split(';')[0])
// }catch(e){}


// window.addEventListener('load', loadFnc)
// window.addEventListener('onload', loadFnc)

window.onload = loadFnc


//加载
function loadFnc(){
	toSendPage('page', '排行榜')
	init()
	initList(focusNum)
	window.onkeydown = keyFnc
}
function init(){
	var arr = document.getElementsByClassName('group')
	for(var e = 0;e < arr.length;e++){
		if(e === 'length')
			break
		for(var i = 0;i < arr[e].children.length;i++){
			data.list.push(arr[e].children[i])
		}
	}

	ajaxFnc('load')
	ajaxFnc('new')
	ajaxFnc('praise')

	function ajaxFnc(typeName){
		ajax({
			url: data.rankURL,
			type: 'get',
			data: {
				page: 1,
				pageSize: 4,
				code: typeName === 'load' ? 1 : (typeName === 'new' ? 2 : 3)
			},
			success: function(param){
				param = JSON.parse(param)
				data.list.map(function(item, index){
					if(typeName === 'praise' && index < 4){
						item.gameMsg = param.object[index]
						createItem(item)
					}else if(typeName === 'new' && index > 4 && index < 9){
						item.gameMsg = param.object[index - 5]
						createItem(item)
					}else if(typeName === 'load' && index > 9 && index < 14){
						item.gameMsg = param.object[index - 10]
						createItem(item)
					}

					function createItem(obj){
						obj.innerHTML = ''
						if(!obj.gameMsg)
							return
						var div = document.createElement('div'),
						img = document.createElement('img'),
						name = document.createElement('span'),
						downnum = document.createElement('span'),
						star = document.createElement('span')
						obj.appendChild(div)
						obj.gameMsg.address && div.appendChild(img)
						div.appendChild(name)
						div.appendChild(downnum)
						div.appendChild(star)

						img.src = obj.gameMsg.address
						name.className = 'name'
						name.innerHTML = obj.gameMsg.gname
						downnum.className = 'downnum'
						var num = 0
						num = obj.gameMsg.downnum
						num = num >= 1000 ? (parseInt(num / 1000) + '000+') : (num >= 10 ? (parseInt(num / 10) + '0+') : '10+')
						downnum.innerHTML = num
						star.className = 'star'
						star.innerHTML = '<span>' + obj.gameMsg.praise + '</span>'
						for(var i = 0;i < 5;i++){
							star.innerHTML += '<i ' + (obj.gameMsg.star / 2 >= i + 1 ? 'class="h"' : '') + '></i>'
						}
					}

					// if((index + 1) % 5 !== 0){
					// 	item.innerHTML = ''
					// 	var div = document.createElement('div'),
					// 	img = document.createElement('img'),
					// 	name = document.createElement('span'),
					// 	downnum = document.createElement('span'),
					// 	star = document.createElement('span')
					// 	item.appendChild(div)
					// 	div.appendChild(img)
					// 	div.appendChild(name)
					// 	div.appendChild(downnum)
					// 	div.appendChild(star)

					// 	img.src = item.gameMsg.address
					// 	name.className = 'name'
					// 	name.innerHTML = item.gameMsg.gname
					// 	downnum.className = 'downnum'
					// 	downnum.innerHTML = item.gameMsg.downnum
					// 	star.className = 'star'
					// 	star.innerHTML = '<span>' + item.gameMsg.praise + '</span>'
					// }
				})
			}
		})
	}
}
//游戏列表初始化
function initList(num){
	var res = {}
	num = num || 0
	data.list.map(function(item, index){
		if(num === index && !/focusFlag/.test(item.className)){
			item.className += ' focusFlag'
			res = item
		}else if(num !== index)
			item.className = item.className.replace(/ focusFlag/g, '')
	})
	if(/item/.test(res.className))
		return res.gameMsg
	else
		return true
}
//键盘事件
function keyFnc(e){
	switch(e.keyCode){
		case 37:
		focusNum >= 5 && (focusNum -= 5)
		while(!initList(focusNum)){
			focusNum--
		}
		break
		case 38:
		focusNum % 5 && --focusNum
		while(!initList(focusNum)){
			focusNum--
		}
		break
		case 39:
		focusNum < data.list.length - 5 && (focusNum += 5)
		while(!initList(focusNum)){
			focusNum--
		}
		break
		case 40:
		focusNum < data.list.length && focusNum % 5 !== 4 && ++focusNum
		while(!initList(focusNum)){
			focusNum++
		}
		break
		case 13:
		if(focusNum % 5 !== 4){
			toSendPage('game_' + getEl('.focusFlag').gameMsg.gid, '排行榜', '跳转游戏：' + getEl('.focusFlag').gameMsg.gname,function(){

				startActivity(getEl('.focusFlag').gameMsg.gid)

			})
		}else{
			var jdg = getEl('.focusFlag').parentElement.className,
			title = '',
			name = '',
			url = ''
			switch(true){
				case /load/.test(jdg):
				title = 'load'
				name = '下载'
				url = '#'
				break
				case /new/.test(jdg):
				title = 'new'
				name = '新游'
				url = '#'
				break
				case /praise/.test(jdg):
				title = 'praise'
				name = '好评'
				url = '#'
				break
			}
			window.location.href = url
			toSendPage('goRankPage_' + title, '排行榜', '跳转排行榜：' + name,function(){

				window.location.href = url

			})
		}
		break
		case 32:
		case 8:
		toSendPage('return_', '排行榜', '离开排行榜',function(){
			window.location.href = unescape(searchObj().ReturnURL)
		})
		break
	}

	typeof(focusNum) === 'number' && (document.cookie = 'focusNum=' + focusNum)
}






