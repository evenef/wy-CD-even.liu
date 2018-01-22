<%@page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@include file="config/addr_config.jsp"%>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<meta name="page-view-size" content="1280*720"/>
	<title>启动</title>
	<style>
	body{
		margin:0px;
		padding:0px;
		width:1280px;
		height:720px;
		overflow:hidden;
	}
</style>
</head>

<body>
	<img width="1280" height="720" src="images/wb.jpg"/>
</body>
</html>
<script type="text/javascript" src="js/focus_logic.js"></script>
<script src="./js/hallUpdateTipsWin_main.js"></script>
<script type="text/javascript">
	var ReturnURL = focus_logic.getParameter("ReturnURL")==null?document.referrer:focus_logic.getParameter("ReturnURL");
	ReturnURL = unescape(ReturnURL);
	try{
		var epg_userid = focus_logic.getParameter("UserID")==null?Authentication.CTCGetConfig("UserID"):focus_logic.getParameter("UserID");
		focus_logic.setCookie("epg_userid",epg_userid);

		/*var appName = "com.utstar.appstoreapplication.activity";
		if (STBAppManager.isAppInstalled(appName)){
			STBAppManager.restartAppByName(appName);
		}*/
		
	}catch (e){}
	
	focus_logic.setCookie("ReturnURL",ReturnURL);
	focus_logic.setCookie("content_left","");
	focus_logic.setCookie("ad_flag","1");
	focus_logic.delCookie("AUTOCEPHALY_index");
	
	
	
	//用户数据
	var UserID = focus_logic.getCookie("epg_userid");
	var mac;
	var _stb_areaid;
	var epgDoman="";
	var epgToken="";
	try{
		mac = Authentication.CTCGetConfig("mac");
		_stb_areaid = Authentication.CTCGetConfig("areaid");
		epgDoman = Authentication.CTCGetConfig("EPGDomain");
		epgToken = Authentication.CTCGetConfig("UserToken");
	}catch (e){}
	
	var key="08:00:27:6a:ad:b3";
	var epg_userid='18632188238';
	var stb_areaid = "999";
	var vspcode='HBDX_HWYH_HBIPTV';
	
	if(key!=undefined && key!="" && key!=null){
		key = mac;
	}
	if(UserID!=undefined && UserID!="" && UserID!=null){
		epg_userid = UserID;
	}
	if(_stb_areaid!=undefined && _stb_areaid!="" && _stb_areaid!=null){
		stb_areaid = _stb_areaid;
	}
	
	var video_data;//视频专区
	var search_data;//搜索
	
	var get_ip = "<%=get_ip%>";
	
	window.onload = function(){
		hallUpdateTipsWinObj.hallUpdateTipsWinInitFnc(epg_userid, loadData)
		// loadData();
	};
	
	function loadData(){
		focus_logic.getDataByAjax("get_data/get_data.jsp?action=regesit&url="+get_ip+"mine/addAccount.do&wbversion=310&vspcode="+vspcode+"&key="+key+"&epg_userid="+epg_userid+"&areaid="+stb_areaid+"&type=1",epg_regesiter);
	}
	function epg_regesiter(result){
		is_regesiter= eval('('+result+')');
		if(is_regesiter.object.account){
			load_account=is_regesiter.object.account;
			focus_logic.getDataByAjax("get_data/get_data.jsp?action=load&url="+get_ip+"mine/login.do&account="+load_account,load_page)
		}
	}
	function load_page(result){
		var load_result= eval('('+result+')');
		if(load_result.rltmsg=="success"){
			focus_logic.setCookie("login_cookie",load_result.login_cookie);
			setTimeout(function(){
				window.location.href = "index.jsp?action="+escape(load_result.object.action);
			},1);
		}
	}
</script>