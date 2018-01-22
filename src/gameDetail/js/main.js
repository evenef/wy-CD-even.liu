var strURL = window.location.host,
focNum = 0,
imgsWrapBaseTop = 0,
imgsFoc = 1
if(/127\.0\.0\.1/.test(strURL) || /localhost/.test(strURL))
  strURL = '172.18.104.17:9088'
// strURL = '172.18.104.55:8080'
var data = {
  getGameDetail: 'http://' + strURL + '/wbManager/common/getProductDetailInfo.do',//游戏详情获取接口
  loginURL: 'http://' + strURL + '/wbManager/mine/login.do?account=HBDX_HWYH_HBIPTV1a72eec3-dca5-4658-a5b1-c933792ade4a',//登录接口
  detail: {},//游戏详情
}

window.onload = function(){
  toSendPage('page', '游戏详情页')
  imgsWrapBaseTop = getEl('.imgsWrap').offsetTop
  initData()
  window.onkeydown = keyFnc
}
//数据初始化
function initData(){
  ajax({
    url: data.getGameDetail,
    type: 'post',
    data: {
      productId: 457,
      userName: searchObj().UserID || '000030',
      vspCode: 'HBDX_HWYH_HBIPTV'
    },
    success: function(param){
      param = param.replace(/172\.18\.104\.11/g, '172.18.104.14')//成都测试用
      param = JSON.parse(param)
      if(!param.rltcode){
        data.detail = param.object.detailinfo
        initPage(data.detail)
        focusCtrol('init')
        console.log(param)
      }
    },
    fail: function(err){
      console.log('%c获取游戏详情失败：' + err, 'color:#f0f')
    }
  })
}

//页面初始化
function initPage(obj){
  if(!obj.productid)
    return
  getEl('.gameImg').style.backgroundImage = 'url(' + obj.imageuri + ')'
  getEl('#gameName').innerHTML = obj.productname
  getEl('#loadCount').innerHTML = parseInt(obj.DOWNNUM) < 10000 ? '5000+' : parseInt(obj.DOWNNUM / 10000) + '万+'
  getEl('#apkSize').innerHTML = obj.apksize + ' M'
  getEl('#gameType').innerHTML = obj.producttype
  getEl('#gameDesc').innerHTML = obj.desc.length < 50 ? obj.desc : (obj.desc.substring(0, 50) + '……')
  var imgArr = obj.screenshotlist
  var imgWrap = getEl('.imgsWrap')
  imgWrap.innerHTML = ''
  imgArr.map(function(item){
    var div = document.createElement('div')
    div.style.backgroundImage = 'url(' + item.imageuri + ')'
    imgWrap.appendChild(div)
  })
  var recomArr = getEl('.recomWrap').children
  for(var key in getEl('.recomWrap').children){
    if('length' == key || key >= obj.relationlist.length)
      break
    getEl('.recomWrap').children[key].gameId = obj.relationlist[key].productid
    getEl('.recomWrap').children[key].gameName = obj.relationlist[key].productname
    getEl('.recomWrap').children[key].children[0].style.backgroundImage = 'url(' + obj.relationlist[key].imageuri + ')'
    getEl('.recomWrap').children[key].children[1].innerHTML = obj.relationlist[key].productname
  }
}

//键盘事件
function keyFnc(e){
  // console.log(e.keyCode)
  switch(e.keyCode){
    case 37:
    focusCtrol('left')
    break
    case 38:
    focusCtrol('up')
    break
    case 39:
    focusCtrol('right')
    break
    case 40:
    focusCtrol('down')
    break
    case 13:
    if(/skipGame/.test(getEl('.focusFlag').className)){
      toSendPage('openGame_' + data.detail.productid, '游戏详情页', '打开游戏_' + data.detail.productname, function(){
        console.log('%c打开游戏_' + data.detail.productname, 'color:#f0f')
      })
      console.log('%c打开游戏_' + data.detail.productname, 'color:#f0f')
    }else if(getEl('.focusFlag').gameId){
      toSendPage('toRecomGame_' + getEl('.focusFlag').gameId, '游戏详情页', '跳转推荐游戏_' + getEl('.focusFlag').gameName, function(){
        startActivity(getEl('.focusFlag').gameId, searchObj().UserID)
      })
      // startActivity(getEl('.focusFlag').gameId, searchObj().UserID)
      console.log('%c跳转推荐游戏_' + getEl('.focusFlag').gameName, 'color:#f0f')
    }
    break
    case 32:
    case 8:
    window.location.href = searchObj().ReturnURL
    break
  }
}

//焦点事件
function focusCtrol(ctr){
  var arr = []
  var imgLength = 0
  var gameLength = 0
  arr.push(getEl('.skipGame'))//打开按钮
  for(var i = 0;i < getEl('.imgsWrap').children.length;i++){//中部图片
    arr.push(getEl('.imgsWrap').children[i])
    imgLength = i + 1
  }
  for(var i = 0;i < getEl('.recomWrap').children.length;i++){//推荐游戏
    arr.push(getEl('.recomWrap').children[i])
    gameLength = i + 1
  }
  arr.map(function(item, index){
    item.className = item.className.replace(/ focusFlag/g, '')
    item.className = item.className.replace(/focusFlag/g, '')
  })
  switch(ctr){
    case 'init':
    focNum = 0
    break
    case 'left':
    if(focNum > imgLength)
      focNum = imgsFoc
    else if(focNum)
      focNum = 0
    break
    case 'right':
    if(!focNum)
      focNum = imgsFoc
    else if(focNum <= imgLength)
      focNum = imgLength + 1
    break
    case 'up':
    focNum > 1 && focNum !== imgLength + 1 && focNum--
    focNum && focNum <= imgLength && (imgsFoc = focNum)
    boxMove(focNum)
    break
    case 'down':
    focNum && focNum !== imgLength && focNum < imgLength + gameLength && focNum++
    focNum && focNum <= imgLength && (imgsFoc = focNum)
    boxMove(focNum)
    break
  }
  arr[focNum || 0].className += ' focusFlag'
}

//box移动
function boxMove(focNum){
  var box = getEl('.imgsWrap')
  if(focNum >= 2 && focNum <= getEl('.imgsWrap').children.length)
    box.style.top = imgsWrapBaseTop - 299 * (focNum - 2) + 'px'
  // if(focNum > 2 && box.offsetTop < 299 + (getEl('.imgsWrap').children.length - 2) * 299)
  //   box.style.top = box.offsetTop + 299 + 'px'
}





// //登录
// ajax({
//   url: data.loginURL,
//   type: 'post',
//   success: function(param){
//     console.log(param)
//   }
// })