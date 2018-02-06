var strURL = window.location.host
if(/127\.0\.0\.1/.test(strURL) || /localhost/.test(strURL))
  strURL = '172.18.104.17:9088'
// strURL = '172.18.104.55:8080'

window.$w = -1
var imgArr = []
var returnPageFnc = function(){
  window.location.href = unescape(searchObj().ReturnURL)
}

window.onload = function(){
  toSendPage('page', '加载等待页')
  initPage()
  anmtFnc()
  window.onkeydown = keyFnc

  install("40005",//spId
    //userName
    searchObj().UserID,
    //contentId
    "1720071715353737300049",
    //productId
    "16021215165731000002",
    //appName
    "com.holyblade.activity.catchdoll",
    //className
    "com.holyblade.activity.catchdoll.ActivityEntrance",
    //downloadUrl
    // "http://192.168.5.3:8080/uploadServer/upload/apk/ShangHaiShengJian/ZhuaWawa/CatchDoll_hebeidianxin.apk",
    "http://" + window.location.host + "/uploadServer/upload/apk/ShangHaiShengJian/ZhuaWawa/CatchDoll_hebeidianxin.apk",
    function(result){
      // console.log('%c回调 ' + result,'color:#f0f')
      if(result === '0'){

        // window.isStart = true

        // setTimeout(function(){
          window.location.href = unescape(searchObj().ReturnURL)
        // },200)
      }else if(result === '-1'){
        window.location.href = unescape(searchObj().ReturnURL)
      }
    })
}

//页面初始化
function initPage(obj){
  var wrap = getEl('.bgImgWrap').children
  for(var i = 0;i < wrap.length;i++){
    imgArr.push(wrap[i])
  }
  imgArr[0] && swiperFnc()

  //进度条
  // setInterval(progressInit,200)
  // progressInit()

  // setTimeout(function(){
  //   window.isStart = true
  // }, 20000)
}

//轮播
function swiperFnc(){
  // setTimeout(setInter,3000)
}
function setInter(){
  setTimeout(function(){
    imgArr[0].style.left = imgArr[0].offsetLeft - 1280 + 'px'
    imgArr[1].style.left = imgArr[1].offsetLeft - 1280 + 'px'
    if(imgArr[0].offsetLeft > -1280){
      setInter()
    }else{
      var temp = imgArr.shift()
      temp.style.left = '1280px'
      imgArr.push(temp)
      swiperFnc()
    }
  },5)
}
//动画
function anmtFnc(){
  var arr = []
  for(var val in getEl('.anmtWrap').children){
    val <= getEl('.anmtWrap').children.length - 2 && arr.push(getEl('.anmtWrap').children[val])
  }
  window.intervalIndex = 0
  // window.intervalJdg = 0
  setInterval(function(){
    // !intervalJdg && intervalIndex++
    // intervalJdg && intervalIndex--
    intervalIndex++
    arr.map(function(item, index){
      item.className = '';
      (index === intervalIndex) && (item.className = 'visib')
    })
    intervalIndex >= arr.length - 1 && (intervalIndex = 0)
    // intervalIndex >= arr.length - 1 && (intervalIndex = intervalJdg = arr.length - 1)
    // intervalIndex <= 0 && (intervalIndex = intervalJdg = 0)
  },120)
}

//键盘事件
function keyFnc(e){
  switch(e.keyCode){
    case 37:
    break
    case 38:
    break
    case 39:
    break
    case 40:
    break
    case 13:
    break
    case 32:
    case 8:
    window.location.href = unescape(searchObj().ReturnURL)
    break
  }
}

// 显示安装进度条
function progressInit(){
  window.$w === -1 && (window.$w = .3)

  var width = getEl('.progressLine').children[0].style.width
  width = Number(width.replace('%', ''))

  window.isStart && ($w = 3)

  getEl('.progressLine').children[0].style.width = width + $w + '%'

  !window.isStart && $w > 0.01 && width > 50 && ($w = $w * .992)

  if(width >= 100){
    returnPageFnc()
    return
  }else{

    width >= 90 && ($w = 0)
  }
}


/**
 * Created by UTstarcom on 2018/1/24.
 */
 function install(spId,
  userName,
  contentId,
  productId,
  appName,
  className,
  downloadUrl,
  callback) {
  try {
    if (!STBAppManager.isAppInstalled(appName)) {
      // console.log('%c未安装','color:#f0f')
      !download.isUse && download(downloadUrl);
      download.isUse = true
      setTimeout(function(){
        install(spId , userName , contentId , productId , appName , className , downloadUrl, callback)
      }, 3000);
    } else {
      // console.log('%c已安装','color:#f0f')
      var intentMessage = "{\"intentType\":0,\"appName\":\"" + appName + "\", \"className\":\"" + className + "\"," + "\"extra\":[" + "{\"name\":\"SPID\",\"value\":\"" + spId + "\"}," + "{\"name\":\"epgId\",\"value\":\"" + userName + "\"}," + "{\"name\":\"contentId\",\"value\":\"" + contentId + "\"}," + "{\"name\":\"productId\",\"value\":\"" + productId + "\"}" + "]}";
      STBAppManager.startAppByIntent(intentMessage);
      callback("0");
    }
  } catch (e) {
    // console.log('%c出错','color:#f0f')
    callback("-1");
  }
}

function download(downloadUrl) {
  // console.log('%c开始下载','color:#f0f')
  var intentMessage = "{\"intentType\":0,\"appName\":\"com.utstar.appstoreapplication.activity\"," + "\"className\":\"com.utstar.appstoreapplication.activity.windows.main.UpdateActivity\"," + "\"extra\":[" + "{\"name\":\"DOWNLOAD_URL\"," + "\"value\":\"" + downloadUrl + "\"}" + "]}";
  STBAppManager.startAppByIntent(intentMessage);
  // console.log('%c下载结束','color:#f0f')
}





// /**
//  * Created by UTstarcom on 2018/1/24.
//  */
// var checkTimer;
// function install(spId, userName, contentId, productId, appName, className, downloadUrl, callback) {
//     try {
//         if (!STBAppManager.isAppInstalled(appName)) {
//             download(downloadUrl);
//             //checkTimer = setInterval(checkInstalled(spId , userName , contentId , productId , appName , className ,callback), 3000)
//         } else {
//             var intentMessage =
//                 "{\"intentType\":0,\"appName\":\"" + appName + "\", \"className\":\"" + className + "\"," +
//                 "\"extra\":[" +
//                 "{\"name\":\"SPID\",\"value\":\"" + spId + "\"}," +
//                 "{\"name\":\"epgId\",\"value\":\"" + userName + "\"}," +
//                 "{\"name\":\"contentId\",\"value\":\"" + contentId + "\"}," +
//                 "{\"name\":\"productId\",\"value\":\"" + productId + "\"}" +
//                 "]}";
//             STBAppManager.startAppByIntent(intentMessage);
//             callback("0");
//         }
//     } catch (e) {
//         callback("-1");
//     }
// }

// function download(downloadUrl) {
//     var intentMessage =
//         "{\"intentType\":0,\"appName\":\"com.utstar.appstoreapplication.activity\"," +
//         "\"className\":\"com.utstar.appstoreapplication.activity.windows.main.UpdateActivity\"," +
//         "\"extra\":[" +
//         "{\"name\":\"DOWNLOAD_URL\"," +
//         "\"value\":\"" + downloadUrl + "\"}" +
//         "]}";
//     STBAppManager.startAppByIntent(intentMessage);
// }

// function checkInstalled(spId, userName, contentId, productId, appName, className, callback) {
//     try {
//         console.log("checkInstall:" + STBAppManager.isAppInstalled(appName));
//         if (STBAppManager.isAppInstalled(appName)) {
//             var intentMessage =
//                 "{\"intentType\":0,\"appName\":\"" + appName + "\", \"className\":\"" + className + "\"," +
//                 "\"extra\":[" +
//                 "{\"name\":\"SPID\",\"value\":\"" + spId + "\"}," +
//                 "{\"name\":\"epgId\",\"value\":\"" + userName + "\"}," +
//                 "{\"name\":\"contentId\",\"value\":\"" + contentId + "\"}," +
//                 "{\"name\":\"productId\",\"value\":\"" + productId + "\"}" +
//                 "]}";
//             STBAppManager.startAppByIntent(intentMessage);
//             callback("0");
//             checkTimer.cancel();
//         }
//     } catch (e) {
//         callback("-1");
//     }
// }