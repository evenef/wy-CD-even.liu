/*
  大厅升级温馨提示弹窗组件说明
  引入js后直接调用 hallUpdateTipsWinObj.hallUpdateTipsWinInitFnc 方法
  参数
  epgId：epgId，默认undefined
  callback：升级完毕后的回调方法，默认undefined
  */


  window.hallUpdateTipsWinObj = {
  // 原始onkeydown方法
  onkeydownFncTemp: document.onkeydown,
  epgId: '',
  goToHallFnc: '',
  index: 0,

  // 升级提示框接入方法
  // param 对象参数[默认false不初始化弹窗]
  // callback 回调
  hallUpdateTipsWinInitFnc: function(epgId, callback){
    if(!epgId)
      return
    // epgId参数初始化
    this.epgId = epgId || this.epgId
    this.goToHallFnc = callback || this.goToHallFnc

    this.pageConsole(window.location.href)
    if(this.index++ >= 10){
      this.pageConsole('10秒倒计时完毕，未检测到新版本，执行回调')
      // this.goToHallFnc && this.goToHallFnc()

      // console.log('judgeByAjax count ' + this.index)
    }else{
      // this.hallUpdateTipsWin(false)// 测试用
      // console.log('judgeByAjax count ' + this.index)


      var that = this
      this.ajax({
        url: 'http://' + window.location.host + '/wbManager/wbupdate/versionLatest.do',// 检查是否最新版本接口URL
        data: {
          epgId: epgId
        },
        success: function(res){
          res = JSON.parse(res)
          that.pageConsole('检测版本接口返回信息 : ' + res.object.isLatest)

          !res.rltcode && that.getCurrentVersion(res.object.isLatest, that.goToHallFnc)// 进入弹窗初始化阶段
        },
        fail: function(err){
          that.pageConsole('连接检查版本信息失败，执行回调 ' + err)
          // that.goToHallFnc && that.goToHallFnc()
        }
      })
    }
  },

  // 获取当前大厅版本
  getCurrentVersion: function(isQuit, callback){
    if(isQuit)
      this.hallUpdateTipsWin(isQuit, callback)
    else{
      var that = this
      this.ajax({
        url: 'http://' + window.location.host + '/wbManager/getUserVersion.do',// 获取当前大厅版本接口URL
        data: {
          epgId: epgId
        },
        success: function(res){
          res = JSON.parse(res)
          if(res.rltcode)
            return
          var version = res.object || 320
          version = parseInt(version)
          that.pageConsole('获取当前版本成功 : ' + version)

          !res.rltcode && that.hallUpdateTipsWin(version >= 323, callback)
        },
        fail: function(err){
          that.pageConsole('获取当前版本失败，执行回调 ' + err)
          // that.goToHallFnc && that.goToHallFnc()
        }
      })
    }
  },

  // 判断回调，替换/恢复原始onkeydown方法
  hallUpdateTipsWin: function (isQuit, callback){
    if(isQuit){
      if(this.searchObj().gameId){
        this.startActivity(this.searchObj().gameId)
        return
      }
      this.pageConsole('检测结果为最新版本，执行回调 ')
      // callback && callback()// 是最新，执行回调

      // document.onkeydown = this.onkeydownFncTemp
    }else if(this.timeMa){
      this.timeMa = false
      this.goToUpdate()
    }else{
      this.initHallUpdateTipsWin()// 不是最新，初始化窗口，且定义onkeydown
      var that = this
      document.onkeydown = function(e){
        if(e.keyCode === 13){
        }else if(e.keyCode === 32 || e.keyCode === 8){
          window.location.href = unescape(this.searchObj().ReturnURL)
          return
        }else{
          return
        }

        that.goToUpdate()

        var wrap = document.querySelector('.hallUpdateTipsWin')
        wrap.style.background = ''
        wrap.children[0].style.display = 'none'

        var p = wrap[1] || document.createElement('p')
        p.innerHTML = 'app正在安装,请稍后...'
        p.style.cssText += 'font-size: 38px;'
        p.style.cssText += 'color: #fff;'
        p.style.cssText += 'text-align: center;'
        p.style.cssText += 'line-height: 76px;'
        p.style.cssText += 'height: 76px;'
        p.style.cssText += 'margin-top: 320px;'
        p.style.cssText += 'background: rgba(0,0,0,.8)'

        if(wrap.children.length === 1)
          wrap.appendChild(p)
      }
    }
  },

  // 初始化弹窗
  initHallUpdateTipsWin: function (){
    try{
      document.body.removeChild(document.querySelector('.hallUpdateTipsWin'))
    }catch(e){}
    var wrap = document.createElement('div')
    wrap.className = 'hallUpdateTipsWin'
    wrap.style.cssText += 'width: 1280px;'
    wrap.style.cssText += 'height: 720px;'
    wrap.style.cssText += 'z-index: 9999;'
    wrap.style.cssText += 'position: absolute;'
    wrap.style.cssText += 'left: 0;top: 0;'
    wrap.style.cssText += 'background: rgba(0,0,0,.7) url(./img/hallUpdateTipsWin_bg.png) no-repeat center top;'
    wrap.style.cssText += 'background-size: 80%;'

    var btn = document.createElement('div')
    btn.style.cssText += 'width: 100%;'
    btn.style.cssText += 'height: 148px;'
    btn.style.cssText += 'background: url(./img/hallUpdateTipsWin_bt.png) no-repeat center;'
    btn.style.cssText += 'background-size: 283px 148px;'
    btn.style.cssText += 'position: absolute;'
    btn.style.cssText += 'left: 0;'
    btn.style.cssText += 'top: 500px;'

    document.body.appendChild(wrap)
    wrap.appendChild(btn)
  },

  // 升级
  goToUpdate: function(){
    if(this.timeMa)
      return
    this.index <= 1 && this.upDateFnc()
    this.timeMa = true
    var that = this
    setTimeout(function(){
      that.hallUpdateTipsWinInitFnc(that.epgId)
    }, 1000)
  },
  upDateFnc: function(){
    var that = this
    this.ajax({
      url: 'http://' + window.location.host + '/wbManager/saveUserVersion.do',
      data: {
        epgId: that.epgId,
        versionCode: 3200
      },
      success: function(param){
        that.pageConsole('3200版本接口连接成功 ' + param)
      },
      fail: function(err){
        that.pageConsole('3200版本接口连接失败 ' + err)
      }
    })
    try{
      this.saveParams()

      this.pageConsole('开始升级')
      STBAppManager.installApp('http://' + window.location.host + "/uploadServer/upload/applist/HeBeiDianXinIPTV/GameBar_hbwx_release.apk");
    }catch(e){
      this.pageConsole('升级接口调用失败 ' + e)
    }
  },
  saveParams: function(){
    var mac = "",
    referPageName = "",
    referPageID = "",
    UserID = this.searchObj().UserID,
    gameId = this.searchObj().gameId
    try {
      mac = Authentication.CTCGetConfig("mac")
    } catch (e) {}
    var params = {
      turnType: '1',
      referPageID: 'epgHome',
      referPageName: 'epg首页',

      normalItemData: {
        id: gameId
      }
    }
    var that = this
    this.ajax({
      url: 'http://' + window.location.host + '/wbManager/mine/handleParams.do',
      data: {
        macAddr: mac,
        params: JSON.stringify(params)
      },
      success: function(param){
        that.pageConsole('上报epg首页、gameId信息成功 : ' + param)
      },
      fail: function(err){
        that.pageConsole('上报epg首页、gameId信息失败 : ' + err)
      }
    })
  },

  //************************对象内util方法******************************

  //ajax 参数{url, type, dataType, data, success, fail}
  ajax: function(options) {
    options = options || {}
    options.type = (options.type || "GET").toUpperCase()
    options.dataType = options.dataType || "json"
    var params = this.formatParams(options.data)
    var xhr = new XMLHttpRequest()
    xhr.onreadystatechange = function(){
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
  },
  //格式化参数，将object转化为url参数
  formatParams: function(param){
    var arr = []
    for (var name in param) {
      arr.push(encodeURIComponent(name) + "=" + encodeURIComponent(param[name]))
    }
    return arr.join("&")
  },
  //发送统计数值
  //type可能值：'page'-页面统计，其他-contentID值
  //pageName：页面中文名
  //contentName：点击按钮中文名
  //callback：回调
  toSendPage: function(type, pageName, contentName, callback){
    var searchStr = this.searchObj(),
    wayEUserName = searchStr.wayEUserName,
    epgUserName = searchStr.UserID,
    url = type === 'page' ? ('http://' + location.host + '/wbManager/pageBrowsing.do') : ('http://' + location.host + '/wbManager/onClickEvent.do'),
    date = this.getNowTime(),
    pageID = 'ShouYe',
    pageName = pageName || document.title,
    contentID = type === 'page' ? '' : type,
    contentName = contentName || ''
    var obj = {
      epgUserName: epgUserName,
      wayEUserName: wayEUserName,
      data: date,
      pageID: pageID,
      pageName: pageName,
      contentID: contentID ? pageID + '_' + contentID : '',
      contentName: contentName
    }
    console.log('统计信息：' + (contentName || '进入' + pageName), obj)
    this.ajax({
      url: url,
      type: 'post',
      data: obj,
      success: function(param){
        param = JSON.parse(param)
        console.log('统计返回信息', param)
        callback && callback(param)
      }
    })
  },
  //获取location.search信息
  searchObj: function(){
    var obj = {}
    location.search.substring(1).split("&").map(function(item) {
      obj[item.split("=")[0]] = item.split("=")[1]
    })
    return obj
  },
  //获取当前时间
  getNowTime: function(){
    var time = '',
    year = (new Date()).getYear() + 1900,
    month = (new Date()).getMonth() + 1,
    date = (new Date()).getDate(),
    hour = (new Date()).getHours(),
    minute = (new Date()).getMinutes(),
    second = (new Date()).getSeconds()

    month = month < 10 ? ('0' + month) : month
    date = date < 10 ? ('0' + date) : date
    hour = hour < 10 ? ('0' + hour) : hour
    minute = minute < 10 ? ('0' + minute) : minute
    second = second < 10 ? ('0' + second) : second

    time = '' + year + month + date + '_' + hour + minute + second
    return time
  },
  //跳转游戏详情
  startActivity: function(gameId){
    var appName = "com.utstar.appstoreapplication.activity",
    className = "com.utstar.appstoreapplication.activity.StartAppActivity",
    mac = "",
    _stb_areaid = "",
    epgDoman = "",
    epgToken = "",
    referPageName = "",
    referPageID = "",
    UserID = this.searchObj().UserID
    try {
      mac = Authentication.CTCGetConfig("mac");
      _stb_areaid = Authentication.CTCGetConfig("areaid");
      epgDoman = Authentication.CTCGetConfig("EPGDomain");
      epgToken = Authentication.CTCGetConfig("UserToken");
    } catch (e) {}
    switch(true){
      case /cardDraw/.test(location.href): referPageName = '卡牌抽奖';referPageID = 'kapaichoujiang';break;
      case /exchangeStore/.test(location.href): referPageName = '兑换中心';referPageID = 'duihuanzhongxin';break;
      case /registerCards/.test(location.href): referPageName = '卡牌签到';referPageID = 'kapaiqiandao';break;
      case /movieGame/.test(location.href): referPageName = '影游联动';referPageID = 'YingYouLianDong';break;
    }
    var params = {
      "turnType": "1",
      "referPageID": referPageID,
      "referPageName": referPageName,

      "normalItemData": {
        "id": "" + gameId
      }
    }

    var intentMessage = JSON.stringify({
      intentType: 0,
      appName: appName,
      className: className,
      extra: [
      {name: "epgDoman",value: epgDoman},
      {name: "areaId",value: _stb_areaid},
      {name: "epgUserId",value: UserID},
      {name: "epgToken",value: epgToken},
      {name: "isDispath",value: true},
      {name: "action",value: "0"},
      {name: "params",value: params},
      {name: "referPageName",value: referPageName},
      {name: "referPageID",value: referPageID},
      {name: "serviceUrl",value: 'http://' + document.location.host + '/wbManager/'}
      ]
    })
    try {
      STBAppManager.startAppByIntent(intentMessage);
    } catch (e) {
      console.log(intentMessage)
    }
  },
  //页面打印消息（测试用）
  //title打印标题
  //param打印消息
  pageConsole: function(title, param){
    if(!document.querySelector('#tempWrap')){
      var div = document.createElement('div')
      div.id = 'tempWrap'
      document.body.appendChild(div)
    }
    var wrap = document.querySelector('#tempWrap')

    wrap.innerHTML += '<p style="color: rgba(255,255,255,1);line-height: 24px;word-break: break-all;">' + (title || '') + (param || '') + '</p>'
    document.body.style.position = 'absolute'
    wrap.style.width = '1080px'
    wrap.style.paddingLeft = '200px'
    wrap.style.position = 'absolute'
    wrap.style.bottom = '200px'
    wrap.style.fontSize = '16px'
    wrap.style.zIndex = '99999999'
    wrap.style.backgroundColor = 'rgba(0,0,0,.5)'
  }
}


// hallUpdateTipsWinObj.hallUpdateTipsWinInitFnc('epg123456')
