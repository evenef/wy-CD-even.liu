<%@page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@include file="config/addr_config.jsp" %>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <meta name="page-view-size" content="1280*720"/>
    <title>启动</title>
    <style>
        body {
            margin: 0px;
            padding: 0px;
            width: 1280px;
            height: 720px;
            overflow: hidden;
        }

        #area61_0 {
            position: absolute;
            background: url(images/tips.png) no-repeat;
            width: 1280px;
            height: 152px;
            text-align: center;
            line-height: 152px;
            color: #FFF;
            font-size: 38px;
            top: 284px;
        }
    </style>
</head>

<body>
<img width="1280" height="720" src="images/wb.jpg"/>

<div id="area61_0" style="display:none;">app正在安装,请稍后...</div>
</body>
</html>
<script type="text/javascript" src="js/focus_logic.js"></script>
<script type="text/javascript">
    var ReturnURL = focus_logic.getParameter("ReturnURL") == null ? document.referrer : focus_logic.getParameter("ReturnURL");
    ReturnURL = unescape(ReturnURL);
    try {
        var epg_userid = focus_logic.getParameter("UserID") == null ? Authentication.CTCGetConfig("UserID") : focus_logic.getParameter("UserID");
        focus_logic.setCookie("epg_userid", epg_userid);

        /*var appName = "com.utstar.appstoreapplication.activity";
         if (STBAppManager.isAppInstalled(appName)){
         STBAppManager.restartAppByName(appName);
         }*/

    } catch (e) {
    }

    focus_logic.setCookie("ReturnURL", ReturnURL);
    focus_logic.setCookie("content_left", "");
    focus_logic.setCookie("ad_flag", "1");
    focus_logic.delCookie("AUTOCEPHALY_index");


    //用户数据
    var UserID = focus_logic.getCookie("epg_userid");
    var mac;
    var _stb_areaid;
    var epgDoman = "";
    var epgToken = "";
    try {
        mac = Authentication.CTCGetConfig("mac");
        _stb_areaid = Authentication.CTCGetConfig("areaid");
        epgDoman = Authentication.CTCGetConfig("EPGDomain");
        epgToken = Authentication.CTCGetConfig("UserToken");
    } catch (e) {
    }

    var key = "08:00:27:6a:ad:b3";
    var epg_userid = '18632188238';
    var stb_areaid = "999";
    var vspcode = 'HBDX_HWYH_HBIPTV';

    if (key != undefined && key != "" && key != null) {
        key = mac;
    }
    if (UserID != undefined && UserID != "" && UserID != null) {
        epg_userid = UserID;
    }
    if (_stb_areaid != undefined && _stb_areaid != "" && _stb_areaid != null) {
        stb_areaid = _stb_areaid;
    }

    var video_data;//视频专区
    var search_data;//搜索

    var get_ip = "<%=get_ip%>";
    var currentVersion;
    var lastVersion;
    var is_installing = false;

    window.onload = function () {
        // pageConsole('href', document.location.href)
        var gameId = focus_logic.getParameter("gameId");
        // pageConsole('gameId', gameId)

        if (gameId == undefined || gameId == '') {
            loadData();
        } else {
            var _params = getParams(gameId);
            // pageConsole('getParams(gameId)', JSON.stringify(_params))
            // pageConsole('is_app_installed', is_app_installed(_params))
            if (is_app_installed(_params)) {
                startActivity(_params);
                // setTimeout(function(){
                    loadData();
                // }, 10000)
            }
        }

    };





    function pageConsole(title, param){
        if(!document.querySelector('#tempWrap')){
            var div = document.createElement('div')
            div.id = 'tempWrap'
            document.body.appendChild(div)
        }
        var wrap = document.querySelector('#tempWrap')

        wrap.innerHTML += '<p style="color: rgba(255,255,255,1);line-height: 24px;word-break: break-all;">' + (title || '') + ' /// ' + (param || '') + '</p>'
        document.body.style.position = 'absolute'
        wrap.style.width = '1180px'
        wrap.style.paddingLeft = '100px'
        wrap.style.position = 'absolute'
        wrap.style.bottom = '200px'
        wrap.style.fontSize = '20px'
        wrap.style.zIndex = '999'
        wrap.style.backgroundColor = 'rgba(0,0,0,.5)'
    }
















    function startActivity(params) {
        var appName = "com.utstar.appstoreapplication.activity";
        var className = "com.utstar.appstoreapplication.activity.StartAppActivity";

        try{
            params = JSON.stringify(params)
        }catch(e){}

        var intentMessage = "{\"intentType\":0,\"appName\":\"" + appName + "\", \"className\":\"" + className + "\"," +"\"extra\":[" + params + "]}";
        // pageConsole('intentMessage', intentMessage)
        STBAppManager.startAppByIntent(intentMessage);
    }

    function getParams(gameId) {
        var params = {"turnType": "1", "normalItemData": {"id": "" + gameId}};
        var mes_obj = {};
        mes_obj["areaId"] = _stb_areaid;
        mes_obj["epgUserId"] = UserID;
        mes_obj["epgToken"] = epgToken;
        mes_obj["isDispath"] = true;
        mes_obj["serviceUrl"] = get_ip;
        mes_obj["action"] = 0;
        mes_obj["params"] = params;
        return mes_obj;
    }

    function is_app_installed(_params) {
        var appName = "com.utstar.appstoreapplication.activity";
        try {
            if (STBAppManager.isAppInstalled(appName)) {
                var current = getCurrentVersion();
                var last = getLastVersion();
//                document.getElementById("_test").innerHTML="Current:" + current + "/Last:" + last;
                if (current < last) {
                    installWB(_params);
                    return false;
                } else {
                    return true;
                }
            } else {
                installWB(_params);
                return false;
            }
        } catch (e) {
            return false;
        }
    }

    function getCurrentVersion() {
        focus_logic.getDataByAjax(get_ip + "getUserVersion.do?epgId=" + epg_userid, parserCurrentVersion);
        return currentVersion;
    }

    function parserCurrentVersion(result) {
        try {
            var vserionResult = eval('(' + result + ')');
            var _rltcode = vserionResult.rltcode + ""; // 判断网络是否连通
            if ("0" == _rltcode) {
                currentVersion = vserionResult.object == undefined || vserionResult.object == "" || vserionResult.object == "null" ? 320 : parseInt(vserionResult.object);
            } else {
                currentVersion = 320;
            }
        }
        catch (e) {
            console.log(e);
            currentVersion = 320;
        }
    }

    function getLastVersion() {
        focus_logic.getDataByAjax("get_data/get_data.jsp?action=updateVersion&url=" + get_ip + "wbupdate/update.do&apkvcode=" + currentVersion + "&zipvcode=0&userName=" + epg_userid, parserLastVersion);
        return lastVersion;
    }

    function parserLastVersion(result) {
        try {
            var vserionResult = eval('(' + result + ')');
            var _rltcode = vserionResult.rltcode + ""; // 判断网络是否连通
            if ("0" == _rltcode && vserionResult.object != undefined) {
                lastVersion = parseInt(vserionResult.object.versioncode);
            } else {
                lastVersion = currentVersion;
            }
        } catch (e) {
            console.log(e);
        }
        if (lastVersion == undefined || lastVersion == "") {
            lastVersion = currentVersion;
        }
    }

    function parserSave(result) {
        console.log(result);
    }

    function installWB(_params) {
        if (!is_installing) {
            sava_params(_params);
            var ip = window.location.protocol + "//" + window.location.host
            if (window.location.port != undefined || window.location.port != "") {
            } else {
                ip = ip + ":" + window.location.port;
            }
            try {
                focus_logic.getDataByAjax(get_ip + "saveUserVersion.do?epgId=" + epg_userid + "&versionCode=3200", parserSave);
            } catch (e) {
            }
            STBAppManager.installApp(ip + "/uploadServer/upload/applist/HeBeiDianXinIPTV/GameBar_hbwx_release.apk");
//                    STBAppManager.installApp("http://192.168.5.3:8080/uploadServer/upload/applist/HeBeiDianXinIPTV/GameBar_hbdx_debug.apk");
            is_installing = true;
            //设置超时时间
            setTimeout(function () {
                is_installing = false;
                loadData();
            }, 10000);
        }
        $("area61_0").style.display = "block";
        setTimeout(function () {
            $("area61_0").style.display = "none";
        }, 10000);
        return false;
    }

    function sava_params(params) {
        focus_logic.getDataByAjax("get_data/get_data.jsp?action=savaParams&url=" + get_ip + "mine/handleParams.do" + "&macAddr=" + key + "&params=" + escape(params), load_sava_info);
    }

    function load_sava_info(result) {
        console.log(result);
    }
    function loadData() {
        focus_logic.getDataByAjax("get_data/get_data.jsp?action=regesit&url=" + get_ip + "mine/addAccount.do&wbversion=310&vspcode=" + vspcode + "&key=" + key + "&epg_userid=" + epg_userid + "&areaid=" + stb_areaid + "&type=1", epg_regesiter);
    }
    function epg_regesiter(result) {
        is_regesiter = eval('(' + result + ')');
        if (is_regesiter.object.account) {
            load_account = is_regesiter.object.account;
            focus_logic.getDataByAjax("get_data/get_data.jsp?action=load&url=" + get_ip + "mine/login.do&account=" + load_account, load_page)
        }
    }
    function load_page(result) {
        var load_result = eval('(' + result + ')');
        if (load_result.rltmsg == "success") {
            focus_logic.setCookie("login_cookie", load_result.login_cookie);
            focus_logic.setCookie("isFristEnter", true);
            setTimeout(function () {
                window.location.href = "index.jsp?action=" + escape(load_result.object.action);
            }, 1);
        }
    }
</script>