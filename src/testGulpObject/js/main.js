
toKeepStayTipsWin()

function toKeepStayTipsWin(){
	console.log('win in')
	console.log('win in')
	console.log('win in')

	initTheKeepStayWin()
}

function initTheKeepStayWin(){
	var wrap = document.createElement('div'),
	content = document.createElement('div')

	content.style.width = '200px'
	content.style.height = '200px'
	content.style.background = '#f99'

	document.body.append(wrap)
	wrap.appendChild(content)
}

// function setEleStyle(ele, obj){
// 	if(ele && obj){
// 		for(var key in obj){
// 			obj[key]
// 		}
// 	}
// }