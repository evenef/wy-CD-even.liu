toKeepStayTipsWin(true)

document.onkeydown = (e) => {
	toKeepStayTipsWin(true, e.keyCode)
}

function toKeepStayTipsWin(isVisible, keyCode){
	if(!isVisible)
		return

	initKeepStayTipsWin()
}



//窗口初始化
function initKeepStayTipsWin(){
	try{
		document.body.removeChild(document.querySelector('.keepStayTipsWin'))
	}catch(e){}
	var img = document.createElement('img'),
	wrap = document.createElement('div'),
	imgTemp_1 = document.createElement('img'),
	imgTemp_2 = document.createElement('img'),
	x = 354,
	y = 175,
	btnStay = createBtnBox(434, 534, 'stay', false),
	btnQuit = createBtnBox(640, 534, 'stay', false),
	item_0 = createItemBox('blue', x, y, true, 26, false),
	item_1 = createItemBox('green', x + 194, y, false, 22, true),
	item_2 = createItemBox('green', x + 194, y + 167, false, 22, false),
	item_3 = createItemBox('blue', x + 388, y, false, 22, false),
	item_4 = createItemBox('blue', x + 388, y + 167, false, 22, false)

	//缓存焦点图片
	imgTemp_1.src = './img/butkk-h.png'
	imgTemp_2.src = './img/butxx-h.png'

	//窗口底图样式
	wrap.className = 'keepStayTipsWin'
	wrap.style.cssText += 'margin: 0;'
	wrap.style.cssText += 'padding: 0;'
	wrap.style.cssText += 'width: 1280px;'
	wrap.style.cssText += 'height: 720px;'
	wrap.style.cssText += 'position: absolute;'
	wrap.style.cssText += 'left: 0;top: 0;'
	wrap.style.cssText += 'background: rgba(0,0,0,.7) url(./img/k.png) no-repeat 316px 98px;'
	wrap.style.cssText += 'background-size: 648px 436px;'
	wrap.style.cssText += 'z-index: 9999;'

	//鸣人样式
	img.src = './img/r.png'
	img.style.cssText += 'width: 205px;'
	img.style.cssText += 'height: 306px;'
	img.style.cssText += 'position: absolute;'
	img.style.cssText += 'left: 176px;top: 224px;'

	document.body.appendChild(wrap)
	wrap.appendChild(img)
	wrap.appendChild(btnStay)
	wrap.appendChild(btnQuit)
	wrap.appendChild(item_0)
	wrap.appendChild(item_1)
	wrap.appendChild(item_2)
	wrap.appendChild(item_3)
	wrap.appendChild(item_4)
}
//初始化按钮
function createBtnBox(left, top, btnName, isFocus){
	var objNode = document.createElement('div')

	objNode.style.cssText += 'width: 206px;'
	objNode.style.cssText += 'height: 92px;'
	objNode.style.cssText += 'background: url(./img/' + (btnName === 'quit' ? 'butxx' : 'butkk' ) + (isFocus ? '-h' : '') + '.png) no-repeat;'
	objNode.style.cssText += 'background-size: 100% 100%;'
	objNode.style.cssText += 'position: absolute;'
	objNode.style.cssText += 'left: ' + left + 'px;top: ' + top + 'px;'

	return objNode
}
//推荐游戏图标
function createItemBox(fontColor, left, top, isBig, radius, isFocus, obj){
	var obj = {
		name: '仙侠大战仙侠大战',
		gameId: 123456,
		bgImg: './img/Catch1E66.jpg'
	}
	var objNode = document.createElement('div'),
	span = document.createElement('span')

	objNode.style.cssText += 'width: ' + (isFocus ? 202 : 184) + 'px;'
	objNode.style.cssText += 'height: ' + (isBig ? (isFocus ? 356 : 324) : (isFocus ? 173 : 157)) + 'px;'
	objNode.style.cssText += 'background: url(' + obj.bgImg + ') no-repeat center;'
	objNode.style.cssText += 'background-size: cover;'
	objNode.style.cssText += 'position: absolute;'
	objNode.style.cssText += 'left: ' + (left - (isFocus ? 9 : 0) || 0) + 'px;top: ' + (top - (isFocus ? (isBig ? 16 : 8) : 0) || 0) + 'px;'
	objNode.style.cssText += 'border-radius: ' + (radius || 0) + 'px;'
	objNode.style.cssText += isFocus ? 'box-shadow: 0 0 7px 7px rgba(255,255,255,.9);' : ''
	objNode.style.cssText += isFocus ? 'z-index: 1;' : ''

	span.style.cssText += 'width: ' + (isFocus ? 202 : 184) + 'px;'
	span.style.cssText += 'height: ' + (isFocus ? 52 : 48) + 'px;'
	span.style.cssText += 'line-height: ' + (isFocus ? 60 : 54) + 'px;'
	span.style.cssText += 'box-sizing: border-box;'
	span.style.cssText += 'padding: 0 15px;'
	span.style.cssText += 'overflow: hidden;'
	span.style.cssText += 'text-overflow: ellipsis;'
	span.style.cssText += 'white-space: nowrap;'
	span.style.cssText += 'letter-spacing: 2px;'
	span.style.cssText += 'text-align: center;'
	span.style.cssText += 'font-family: "Microsoft YaHei";'
	span.style.cssText += 'font-size: ' + (isFocus ? 24 : 20) + 'px;'
	span.style.cssText += 'background: url(./img/product_' + fontColor + '_bg.png) no-repeat center;'
	span.style.cssText += 'background-size: cover;'
	span.style.cssText += 'position: absolute;'
	span.style.cssText += 'left: 0;'
	span.style.cssText += 'bottom: 0;'
	span.style.cssText += 'border-bottom-left-radius: ' + (radius || 0) + 'px;'
	span.style.cssText += 'border-bottom-right-radius: ' + (radius || 0) + 'px;'
	span.style.cssText += 'color: #fff;'
	span.innerHTML = obj.name

	objNode.appendChild(span)

	return objNode
}
//ajax 参数{url, type, dataType, data, success, fail}
function ajax(options) {
	options = options || {}
	options.type = (options.type || "GET").toUpperCase()
	options.dataType = options.dataType || "json"
	var params = formatParams(options.data)
	var xhr = new XMLHttpRequest()
	xhr.onreadystatechange = function () {
		if (xhr.readyState == 4) {
			var status = xhr.status
			if (status >= 200 && status < 300) {
				options.success && options.success(xhr.responseText, xhr.responseXML)
			} else {
				options.fail && options.fail(status)
			}
		}
	}
	if (options.type == "GET") {
		xhr.open("GET", options.url + "?" + params, true)
		xhr.send()
	} else if (options.type == "POST") {
		xhr.open("POST", options.url, true)
		xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")
		xhr.send(params)
	}
}
//格式化参数，将object转化为url参数
function formatParams(param) {
	var arr = []
	for (var name in param) {
		arr.push(encodeURIComponent(name) + "=" + encodeURIComponent(param[name]))
	}
	return arr.join("&")
}