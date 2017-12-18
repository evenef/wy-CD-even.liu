<%@page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ page import="java.io.BufferedReader"%>
<%@ page import="java.io.InputStreamReader"%>
<%@ page import="java.net.HttpURLConnection"%>
<%@ page import="java.net.URL"%>
<%@page import="java.io.OutputStream"%>
<%@page import="net.sf.json.JSONArray"%>
<%@page import="net.sf.json.JSONObject"%>


<%!String requestAction = "";

	public String getHttpClient(String tmpUrl, String str) {
		StringBuilder result = new StringBuilder();
		try {
			URL url = new URL(tmpUrl);
			HttpURLConnection connection = (HttpURLConnection) url
					.openConnection();

			connection.setRequestProperty("Cookie", str);
			connection.setRequestMethod("POST");
			connection.setUseCaches(false);
			connection.connect();
			BufferedReader reader = new BufferedReader(new InputStreamReader(
					connection.getInputStream(), "UTF-8"));
			String lines = "";
			String responseCookie = connection.getHeaderField("Set-Cookie");// 取到所用的Cookie
			while ((lines = reader.readLine()) != null) {
				result.append(lines);
			}
			reader.close();
			connection.disconnect();
		} catch (Exception e) {
			e.printStackTrace();
		}
		return result.toString();
	}
	
	public String getHttpClient_forLogin(String tmpUrl, String str) {
		StringBuilder result = new StringBuilder();
		String responseCookie = "";
		try {
			URL url = new URL(tmpUrl);
			HttpURLConnection connection = (HttpURLConnection) url
					.openConnection();

			connection.setRequestProperty("Cookie", str);
			connection.setUseCaches(false);
			connection.connect();
			BufferedReader reader = new BufferedReader(new InputStreamReader(
					connection.getInputStream(), "UTF-8"));
			String lines = "";
			responseCookie = connection.getHeaderField("Set-Cookie");// 取到所用的Cookie
			//System.out.println(get_cookie_value(responseCookie));
			while ((lines = reader.readLine()) != null) {
				result.append(lines);
			}
			reader.close();
			connection.disconnect();
		} catch (Exception e) {
			e.printStackTrace();
		}
		JSONObject obj = JSONObject.fromObject(result.toString());
		obj.put("login_cookie",get_cookie_value(responseCookie));
		return obj.toString();
	}
	
	public String get_cookie_value(String str){
		String value = "";
		if(str!=null){
			String[] cookies = str.split(";");
			for(int i=0;i<cookies.length;i++){
				String key = cookies[i].toString().split("=")[0];
				if("JSESSIONID".equals(key)){
					value = cookies[i].toString().split("=")[1];
				}
			}
		}
		return value;
	}
	
	
%>

<%


	String cookie_str = "";
	Cookie[] c = request.getCookies();
	// System.out.println(JSONArray.fromObject(c));
	if(c!=null){
		for(int i=0;i<c.length;i++){
			if("login_cookie".equals(c[i].getName())){
				cookie_str = "JSESSIONID="+c[i].getValue();
			}
		}
	}
	//System.out.println("------------"+cookie_str);
	//cookie_str = "JSESSIONID=22657D9ACD8B18BC74332C81E66C2998-n1";
    //cookie_str = "JSESSIONID=FF071E02F6404626272C79B898A40F26";
	requestAction = request.getParameter("action").toString();
	if (requestAction.equals("regesit")) {
		String tmpUrl = (request.getParameter("url") == null) ? "0"
				: request.getParameter("url").toString();
		String key = (request.getParameter("key") == null) ? "0"
				: request.getParameter("key").toString();
		String epg_userid = (request.getParameter("epg_userid") == null) ? "0"
				: request.getParameter("epg_userid").toString();
		String vspcode = (request.getParameter("vspcode") == null) ? "0"
				: request.getParameter("vspcode").toString();
		String url = tmpUrl + "?wbversion=310" + "&vspcode=" + vspcode
				+ "&key=" + key + "&epg_userid=" + epg_userid
				+ "&areaid=999&type=1";
		//System.out.println(url);
		System.out.println("regesit:"+url);
		out.println(getHttpClient(url, cookie_str));
	} else if (requestAction.equals("load")) {
		String tmpUrl = (request.getParameter("url") == null) ? "0"
				: request.getParameter("url").toString();
		String load_account = (request.getParameter("account") == null) ? "0"
				: request.getParameter("account").toString();
		String url = tmpUrl + "?account=" + load_account;
        System.out.println("load:" + url);
		out.println(getHttpClient_forLogin(url, cookie_str));
	} else if (requestAction.equals("getHot")) {
		String tmpUrl = (request.getParameter("url") == null) ? "0"
				: request.getParameter("url").toString();
		String url = tmpUrl + "?page=1";
		// System.out.println(url);
		out.println(getHttpClient(url, cookie_str));
	}else if (requestAction.equals("search")) {
		String tmpUrl = (request.getParameter("url") == null) ? "0"
				: request.getParameter("url").toString();
		String pageNum=(request.getParameter("page") == null) ? "0"
				: request.getParameter("page").toString();
		String key=(request.getParameter("key") == null) ? ""
				: request.getParameter("key").toString();
		String number=(request.getParameter("number") == null) ? "0"
				: request.getParameter("number").toString();		
		String url = tmpUrl +"?key="+key+ "&page="+pageNum+"&number="+number;
		System.out.println(url);
		out.println(getHttpClient(url, cookie_str));
	}else if(requestAction.equals("getAdd")){
		String tmpUrl = (request.getParameter("url") == null) ? "0"
				: request.getParameter("url").toString();
		String url = tmpUrl;
		System.out.println(url);
		out.println(getHttpClient(url, cookie_str));
	}else if(requestAction.equals("getMsg")){
		String tmpUrl = (request.getParameter("url") == null) ? "0"
				: request.getParameter("url").toString();
		String pageNum = (request.getParameter("page") == null) ? "0"
		: request.getParameter("page").toString();
		String number = (request.getParameter("number") == null) ? "0"
		: request.getParameter("number").toString();
		String url = tmpUrl+"?page="+pageNum+"&number="+number;
		System.out.println(url);
		out.println(getHttpClient(url, cookie_str));
	}else if(requestAction.equals("savaParams")){
		String tmpUrl = (request.getParameter("url") == null) ? "0"
				: request.getParameter("url").toString();
		String macAddr = (request.getParameter("macAddr") == null) ? "0"
		: request.getParameter("macAddr").toString();
		String params = (request.getParameter("params") == null) ? "0"
		: request.getParameter("params").toString();
		String url = tmpUrl+"?macAddr="+macAddr+"&params="+params;
		System.out.println(url);
		out.println(getHttpClient(url, cookie_str));
	}else if(requestAction.equals("getBg")){
		String tmpUrl = (request.getParameter("url") == null) ? "0"
				: request.getParameter("url").toString();
		String type = (request.getParameter("type") == null) ? "0"
		: request.getParameter("type").toString();
		String url = tmpUrl+"?type="+type;
		System.out.println(url);
		out.println(getHttpClient(url, cookie_str));
	}else if(requestAction.equals("cloudID")){
		String tmpUrl = (request.getParameter("url") == null) ? ""
				: request.getParameter("url").toString();
		String spId = (request.getParameter("spId") == null) ? ""
		: request.getParameter("spId").toString();
        String epgId = (request.getParameter("epgId") == null) ? ""
		: request.getParameter("epgId").toString();
        String contentId = (request.getParameter("contentId") == null) ? ""
		: request.getParameter("contentId").toString();
        String productId = (request.getParameter("productId") == null) ? ""
		: request.getParameter("productId").toString();
		String url = tmpUrl+"?spId="+spId + "&epgId=" + epgId + "&contentId=" + contentId + "&productId=" + productId;
		System.out.println(url);
		out.println(getHttpClient(url, cookie_str));
	}else if(requestAction.equals("shopOrderList")){
        String tmpUrl = (request.getParameter("url") == null) ? ""
				: request.getParameter("url").toString();
        String typeStr = (request.getParameter("type") == null) ? "0"
                : request.getParameter("type").toString();
        String productId = (request.getParameter("productId") == null) ? ""
                : request.getParameter("productId").toString();
        String shopOrderList_UserID = (request.getParameter("UserID") == null) ? ""
                : request.getParameter("UserID").toString();
        String url = tmpUrl + "?type=" + typeStr + "&PRODUCTID=" + productId + "&UserID=" + shopOrderList_UserID;
        //System.out.println(getHttpClient(url, cookie_str));
        System.out.println(url);
        out.println(getHttpClient(url, cookie_str));
    }else if(requestAction.equals("reChange")){
        String tmpUrl = (request.getParameter("url") == null) ? ""
				: request.getParameter("url").toString();
        String typeStr = (request.getParameter("type") == null) ? "0"
                : request.getParameter("type").toString();
        String userId = (request.getParameter("userid") == null) ? ""
                : request.getParameter("userid").toString();
        String productId = (request.getParameter("productId") == null) ? ""
                : request.getParameter("productId").toString();
        String continueType = (request.getParameter("continueType") == null) ? "0"
                : request.getParameter("continueType").toString();
        String gameId = (request.getParameter("gameId") == null) ? ""
                : request.getParameter("gameId").toString();
        String thirdCode = (request.getParameter("thirdCode") == null) ? "1"
                : request.getParameter("thirdCode").toString();
        String bsReturnURL = (request.getParameter("bsReturnURL") == null) ? ""
                : request.getParameter("bsReturnURL").toString();
        String url = tmpUrl + "?type=" + typeStr + "&userid=" + userId 
                + "&productId=" + productId + "&continueType=" + continueType
                + "&gameId=" + gameId + "&contentId=" + gameId + "&thirdCode=" + thirdCode + "&bsReturnURL=" + bsReturnURL;
        System.out.println(url);
        out.println(getHttpClient(url, cookie_str));
    }else if(requestAction.equals("orderList")){
        String tmpUrl = (request.getParameter("url") == null) ? ""
				: request.getParameter("url").toString();
        String parms = (request.getParameter("parms") == null) ? ""
                : request.getParameter("parms").toString();
		String data = (request.getParameter("data") == null) ? ""
		: request.getParameter("data").toString();
        String url = tmpUrl + "?Result=1&parms=" + parms+"&data="+data;
		System.out.println("orderList:"+url);
        out.println(getHttpClient(url, cookie_str));
    }else if(requestAction.equals("getDrawNum")){
        String tmpUrl = (request.getParameter("url") == null) ? ""
				: request.getParameter("url").toString();
        String userId = (request.getParameter("userId") == null) ? ""
                : request.getParameter("userId").toString();
		String actType = (request.getParameter("actType") == null) ? ""
		: request.getParameter("actType").toString();
        String typeStr = (request.getParameter("type") == null) ? ""
		: request.getParameter("type").toString();
        String url = tmpUrl + "?userId=" + userId + "&actType=" + actType + "&type=" + typeStr;
		System.out.println("getDrawNum:"+url);
        out.println(getHttpClient(url, cookie_str));
    }else if(requestAction.equals("saveCoin")){
        String tmpUrl = (request.getParameter("url") == null) ? ""
				: request.getParameter("url").toString();
        String userId = (request.getParameter("userId") == null) ? ""
                : request.getParameter("userId").toString();
		String actType = (request.getParameter("actType") == null) ? ""
		: request.getParameter("actType").toString();
        String typeStr = (request.getParameter("type") == null) ? ""
		: request.getParameter("type").toString();
        String status = (request.getParameter("status") == null) ? ""
		: request.getParameter("status").toString();
        String url = tmpUrl + "?userId=" + userId + "&status=" + status + "&actType=" + actType + "&type=" + typeStr;
		System.out.println("saveCoin:"+url);
        out.println(getHttpClient(url, cookie_str));
    }else if(requestAction.equals("getPalyNum")){
        String tmpUrl = (request.getParameter("url") == null) ? ""
				: request.getParameter("url").toString();
        String userId = (request.getParameter("userId") == null) ? ""
                : request.getParameter("userId").toString();
        String actType = (request.getParameter("actType") == null) ? ""
                : request.getParameter("actType").toString();
        String coinType = (request.getParameter("coinType") == null) ? ""
                : request.getParameter("coinType").toString();
        String url = tmpUrl + "?userId=" + userId + "&actType=" + actType + "&coinType=" + coinType;
		System.out.println("getPalyNum:"+url);
        out.println(getHttpClient(url, cookie_str));
    }else if(requestAction.equals("getAwardMsg")){
        String tmpUrl = (request.getParameter("url") == null) ? ""
				: request.getParameter("url").toString();
        String userId = (request.getParameter("userId") == null) ? ""
		: request.getParameter("userId").toString();
        String num = (request.getParameter("num") == null) ? ""
        : request.getParameter("num").toString();
		String actType = (request.getParameter("actType") == null) ? ""
		: request.getParameter("actType").toString();
        String url = tmpUrl + "?userId=" + userId + "&num=" + num + "&actType=" + actType;
		System.out.println("getAwardMsg:"+url);
        out.println(getHttpClient(url, cookie_str));
    }else if(requestAction.equals("exchange")){
        String tmpUrl = (request.getParameter("url") == null) ? ""
				: request.getParameter("url").toString();
        String userId = (request.getParameter("userId") == null) ? ""
                : request.getParameter("userId").toString();
        String awardType = (request.getParameter("awardType") == null) ? ""
		: request.getParameter("awardType").toString();
		String actType = (request.getParameter("actType") == null) ? ""
		: request.getParameter("actType").toString();
        String typeStr = (request.getParameter("type") == null) ? ""
		: request.getParameter("type").toString();
        String needNum = (request.getParameter("needNum") == null) ? ""
		: request.getParameter("needNum").toString();
        String coinType = (request.getParameter("coinType") == null) ? ""
		: request.getParameter("coinType").toString();
        String url = tmpUrl + "?userId=" + userId + "&needNum=" + needNum + "&awardType=" + awardType + "&actType=" + actType + "&type=" + typeStr + "&coinType=" + coinType;
		System.out.println("exchange:"+url);
        out.println(getHttpClient(url, cookie_str));
    }else if(requestAction.equals("savePhone")){
        String tmpUrl = (request.getParameter("url") == null) ? ""
				: request.getParameter("url").toString();
        String userId = (request.getParameter("userId") == null) ? ""
                : request.getParameter("userId").toString();
        String number = (request.getParameter("number") == null) ? ""
                : request.getParameter("number").toString();
        String url = tmpUrl + "?userId=" + userId + "&number=" + number;
        System.out.println("savePhone:"+url);
        out.println(getHttpClient(url, cookie_str));
    }else if(requestAction.equals("getFishNum")){
        String tmpUrl = (request.getParameter("url") == null) ? ""
				: request.getParameter("url").toString();
        String userId = (request.getParameter("userId") == null) ? ""
                : request.getParameter("userId").toString();
        String actType = (request.getParameter("actType") == null) ? ""
                : request.getParameter("actType").toString();
        String coinType = (request.getParameter("coinType") == null) ? ""
                : request.getParameter("coinType").toString();
        String palyNum = (request.getParameter("palyNum") == null) ? ""
                : request.getParameter("palyNum").toString();
        String url = tmpUrl + "?userId=" + userId + "&actType=" + actType + "&coinType=" + coinType + "&palyNum=" + palyNum;
        System.out.println("getFishNum:"+url);
        out.println(getHttpClient(url, cookie_str));
    }else if(requestAction.equals("userFishing")){
        String tmpUrl = (request.getParameter("url") == null) ? ""
				: request.getParameter("url").toString();
        String userId = (request.getParameter("userId") == null) ? ""
                : request.getParameter("userId").toString();
        String actType = (request.getParameter("actType") == null) ? ""
                : request.getParameter("actType").toString();
        String coinType = (request.getParameter("coinType") == null) ? ""
                : request.getParameter("coinType").toString();
        String palyNum = (request.getParameter("palyNum") == null) ? ""
                : request.getParameter("palyNum").toString();
        String url = tmpUrl + "?userId=" + userId + "&actType=" + actType + "&coinType=" + coinType + "&palyNum=" + palyNum;
        System.out.println("userFishing:"+url);
        out.println(getHttpClient(url, cookie_str));
    }
%>