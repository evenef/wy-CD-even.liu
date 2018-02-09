// window.addEventListener('load', HanJiaDaFangSongLoad)
// window.addEventListener('onload', HanJiaDaFangSongLoad)

// console.log('v4')

// setTimeout(function(){
	// var HanJiaDaFangSong_oldKeyFnc = window.onload
	window.onload = HanJiaDaFangSongLoad
	// HanJiaDaFangSongLoad()
// },500)

function HanJiaDaFangSongLoad(){
	// setTimeout(function(){
		var ifra = document.createElement('iframe')
		ifra.className = 'HanJiaDaFangSong_iframe'
		ifra.src = './HanJiaDaFangSong/index.html?UserID=' + UserID
		ifra.frameborder = 'no'
		ifra.scrolling = 'no'
		ifra.width = '1280px'
		ifra.height = '720px'
		ifra.style.border = '0'
		ifra.style.position = 'absolute'
		ifra.style.left = '0'
		ifra.style.top = '0'
		ifra.style.zIndex = '99999999999999'
		document.body.appendChild(ifra)
	// },500)
}
