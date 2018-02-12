<%@page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@page import="net.sf.json.JSONArray" %>
<%@page import="net.sf.json.JSONObject" %>
<%@page import="java.util.*" %>
<%
  Map map = request.getParameterMap();
  JSONObject intentMessage_obj = new JSONObject();
  JSONArray extra_arr = new JSONArray();

  Set set = map.keySet();
  Iterator it = set.iterator();
  String parametername = "";

  intentMessage_obj.put("intentType", 0);

  while (it.hasNext()) {
  parametername = (String) it.next();
  String values[] = request.getParameterValues(parametername);

  if ("appName".equals(parametername) || "className".equals(parametername)) {
  if (values.length > 0) {
  intentMessage_obj.put(parametername, values[0]);
  } else {
  intentMessage_obj.put(parametername, "");
  }
  } else {
  JSONObject _obj = new JSONObject();
  _obj.put("name", parametername);
  if (values.length > 0) {
  _obj.put("value", values[0]);
  } else {
  _obj.put("value", "");
  }
  extra_arr.add(_obj);
  }

  }
  intentMessage_obj.put("extra", extra_arr);

%>

<html>
<head>
  <style>
  body {
    margin: 0px;
    padding: 0px;
    width: 1280px;
    height: 720px;
    overflow: hidden;
    background: rgba(0,0,0,.7);
  }

  #installing {
    position: absolute;
    width: 1280px;
    height: 720px;
    text-align: center;
    line-height: 153px;
    color: #FFF;
    font-size: 38px;
    top: 500px;
  }

  #log {
    position: absolute;
    width: 1280px;
    height: 720px;
    text-align: center;
    line-height: 153px;
    color: #FFF;
    font-size: 38px;
    top: 400px;
  }
</style>
</head>


<body style="background-repeat: no-repeat;background-size: 100%;">
  <div id="installing" style="display:none;">app正在下载游戏,请稍后...</div>
</body>
</html>

<script>

  var intentMessage_obj = <%=intentMessage_obj%>;
  var intentMessage = JSON.stringify(intentMessage_obj);

  try {
    if (STBAppManager.isAppInstalled(intentMessage_obj.appName)) {
      STBAppManager.startAppByIntent(intentMessage);
      back();
    } else {
      install(intentMessage_obj.appName);
      check(intentMessage_obj.appName);
    }
  } catch (e) {
    console.log(intentMessage)
  }

  window.onkeydown = function (event) {
    var key_code = event.which || event.keyCode;
    console.log("onkeydown:" + key_code);
    switch (key_code) {
      case 32:
      case 8:
      back();
      break;
    }
  };

  function back() {

    if(searchObj().ReturnURL){
      window.location.href = unescape(searchObj().ReturnURL)
      return
    }

    var backUrl = document.referrer;
    setTimeout(function () {
      if (backUrl.indexOf("apk_action.jsp") == -1) {
        window.location.href = backUrl;
      } else {
        window.location.href = "index.jsp";
      }
    }, 20);
  }

  function install(appName) {
    document.getElementById("installing").style.display = "block";
    if (appName == "com.egame.tv") {
      STBAppManager.installApp("http://192.168.5.156/uploadServer/upload/apk/COMEGAMETV/com.egame.tv-586-v5.8.6_104_20171123.release.apk");
    } else if (appName == "com.cloud.cyber") {
      STBAppManager.installApp("http://192.168.6.38:10590/CyberOTTD-0033_2.1.6.7491.apk");
    }
  }

  function check(appName) {
    if (!STBAppManager.isAppInstalled(appName)) {
      setTimeout("check('" + appName + "')", 1000);
    }else{
      back();
    }
  }


  function searchObj(){
    var str = window.location.search.substring(1)
    var arr = str.split('&')
    var obj = {}
    arr.map(function(item){
      var key = item.split('=')[0]
      var value = item.split('=')[1]
      obj[key] = value
    })
    return obj
  }

</script>