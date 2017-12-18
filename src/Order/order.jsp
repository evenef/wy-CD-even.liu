<%@page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@include file="config/addr_config.jsp"%>
<%
    String userID = request.getParameter("userID")==null?"":request.getParameter("userID");
    String backUrl = request.getParameter("backUrl")==null?"":request.getParameter("backUrl");
    String productId = request.getParameter("productId")==null?"":request.getParameter("productId");
    String contentCode = request.getParameter("contentCode")==null?"":request.getParameter("contentCode");
%>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta name="page-view-size" content="1280*720">
    <title>订购</title>
    <style>
    
        .bg{
            position:absolute;
            left:0px;
            top:0px;
            width:1280px;
            height:720px;
            background:url("images/order/order_bg.png") no-repeat;
        }

        .title{
            position:absolute;
            left:81px;
            top:142px;
            font-size:28px;
            color:#FFF;
            font-weight:bold;
        }

        .select{
            position:absolute;
            left:80px;
            top:210px;
            width:712px;
            height:373px;
            background:url("images/order/order_left_bg.png") no-repeat;
        }

        .select .line{
            position:absolute;
            top:0px;
        }

        .select .line .name{
            position:absolute;
            left:30px;
            width:300px;
            height:74px;
            color:#F2F2F2;
            font-size:20px;
            /*font-weight:bold;*/
            line-height:74px;
        }

        .select .line .price{
            position:absolute;
            left:351px;
            width:170px;
            height:74px;
            color:#F2F2F2;
            font-size:20px;
            /*font-weight:bold;*/
            line-height:74px;
        }

        .select .line .button .item{
            position:absolute;
            left:570px;
            top:12px;
            width:107px;
            height:49px;
            color:#FFF;
            font-size:20px;
            font-weight:800;
            text-align:center;
            line-height:49px;
            background:url("images/order/button.png") no-repeat;
        }

        .select .line .button .item_focus{
            margin-left:-3px;
            margin-top:-3px;
            width:113px;
            height:55px;
            line-height:55px;
            background:url("images/order/button_focus.png") no-repeat;
        }

        .select .separate{
            position:absolute;
            left:2px;
            top:74px;
            width:706px;
            height:0px;
            border: 1px solid #9183a1;
        }

        .notice{
            position:absolute;
            left:825px;
            top:210px;
            width:381px;
            height:373px;
            background:url("images/order/order_right_bg.png") no-repeat;
        }

        .notice .topic{
            position:absolute;
            left:-28px;
            top:8px;
            width:444px;
            height:69px;
            background:url("images/order/order_notice_title.png") no-repeat;
            z-index:10;
        }

        .notice .topic .message{
            position:absolute;
            left:0px;
            top:0px;
            width:444px;
            height:69px;
            color:#FFF;
            font-weight:bold;
            font-size:20px;
            line-height:49px;
            text-align:center;
        }

        .notice .content{
            position:absolute;
            left:15px;
            top:75px;
            width:350px;
            height:280px;
            color:#F2F2F2;
            overflow:hidden;
        }

        .mask{
            position:absolute;
            left:0px;
            top:0px;
            width:1280px;
            height:720px;
            background-color:rgba(0,0,0,0.8);
            z-index:20;
        }

        .mask .pop{
            position:absolute;
            left:415px;
            top:185px;
            width:550px;
            height:350px;
            background-color:#00F;
            border: 3px solid #FFF;
            border-radius:8px;
            z-index:30;
        }

        .mask .pop .title{
            position:absolute;
            top:30px;
            left:0px;
            width:550px;
            color:#FFF;
            font-weight:bold;
            font-size:28px;
            text-align:center;
        }

        .mask .pop .message{
            position:absolute;
            left:0px;
            top:0px;
            width:550px;
            height:350px;
            color:#FFF;
            font-weight:bold;
            font-size:28px;
            text-align:center;
            line-height:350px;
        }
        
        .mask .pop .item{
            position:absolute;
            left:215px;
            top:255px;
            width:100px;
            height:50px;
            background-color:#F2F2F2;
            border: 3px solid #FFF;
            border-radius:8px;
            color:#000;
            font-size:18px;
            font-weight:bold;
            text-align:center;
            line-height:50px;
            z-index:40;
        }
        
        .mask .pop .item_focus{
            background-color:#FF0;
        }

        .mask .pop .button{
            position:absolute;
            left:215px;
            top:255px;
            width:100px;
            height:50px;
            background-color:#FF0;
            border: 3px solid #FFF;
            border-radius:8px;
            color:#000;
            font-size:18px;
            font-weight:bold;
            text-align:center;
            line-height:50px;
            z-index:40;
        }

    </style>
</head>
<body>

    <div class="bg">
        <div class="title">订购以下任何产品都能玩此游戏</div>
        <div class="select">
            <div class="line" style="font-weight:800;color:#FFF;">
                <div class="name">产品名称</div>
                <div class="price">价格</div>
                <div class="button">
                    <div id="area0_0" class="item">返回</div>
                </div>
                <div class="separate" style="top:74px;"></div>
            </div>
            <div id="line0" class="line" style="top:74px;display:none;">
                <div id="name0" class="name"></div>
                <div id="price0" class="price"></div>
                <div class="button">
                    <div id="area1_0" class="item">购买</div>
                </div>
                <div class="separate" style="top:74px;"></div>
            </div>
            <div id="line1" class="line" style="top:148px;display:none;">
                <div id="name1" class="name"></div>
                <div id="price1" class="price"></div>
                <div class="button">
                    <div id="area1_1" class="item">购买</div>
                </div>
                <div class="separate" style="top:74px;"></div>
            </div>
            <div id="line2" class="line" style="top:222px;display:none;">
                <div id="name2" class="name"></div>
                <div id="price2" class="price"></div>
                <div class="button">
                    <div id="area1_2" class="item">购买</div>
                </div>
                <div class="separate" style="top:74px;"></div>
            </div>
            <div id="line3" class="line" style="top:296px;display:none;">
                <div id="name3" class="name"></div>
                <div id="price3" class="price"></div>
                <div class="button">
                    <div id="area1_3" class="item">购买</div>
                </div>
                <div class="separate" style="top:74px;"></div>
            </div>
        </div>
        <div class="notice">
            <div class="topic">
                <div class="message">消费提醒</div>
            </div>
            <div id="content" class="content">
                <!--
                <div>1、<span style="color:#FFFF00">计费规则</span>：</div>
                <div>2、<span style="color:#FFFF00">如何退订</span>：</div>
                -->
            </div>
        </div>
    </div>
    <div id="mask" class="mask" style="display:none;">
        <div id="sure" class="pop" style="display:none;">
            <div class="message" style="font-size:28px;">是否确认购买？</div>
            <div id="area2_0" class="item" style="left:115px;">取消</div>
            <div id="area2_1" class="item" style="left:315px;">确定</div>
        </div>
        <div id="result" class="pop" style="display:none;">
            <div class="title">消费提示</div>
            <div id="buy_result_message" class="message"></div>
            <div id="area3_0" class="button">确定</div>
        </div>
    </div>
</body>
</html>
<script type="text/javascript" src="js/focus_logic.js"></script>
<script type="text/javascript">

    var area0;
    var orderDataList = [];
    var curAreaIndex = 0;
    var curDomIndex = 0;
    var params_userID = ""; // params
    var params_backUrl = ""; // params
    var params_productId = ""; // params
    var params_contentCode = ""; // params

    window.onload = function(){
        getParams();
        loadElement();
        setTimeout("window.focus()",1);
    }
    
    function getParams(){
        
        params_userID = "<%=userID%>";
        if("" == params_userID){
            params_userID = focus_logic.getCookie("order_userID");
        }else{
            if(null != focus_logic.getCookie("order_userID")){
                focus_logic.delCookie("order_userID");
            }
            focus_logic.setCookie("order_userID",params_userID);
        }
        
        params_backUrl = "<%=backUrl%>";
        if("" == params_backUrl){
            params_backUrl = focus_logic.getCookie("order_backUrl");
        }else{
            if(null != focus_logic.getCookie("order_backUrl")){
                focus_logic.delCookie("order_backUrl");
            }
            focus_logic.setCookie("order_backUrl",params_backUrl);
        }
        
        params_productId = "<%=productId%>";
        if("" == params_productId){
            params_productId = focus_logic.getCookie("order_productId");
        }else{
            if(null != focus_logic.getCookie("order_productId")){
                focus_logic.delCookie("order_productId");
            }
            focus_logic.setCookie("order_productId",params_productId);
        }
        
        params_contentCode = "<%=contentCode%>";
        if("" == params_contentCode){
            params_contentCode = focus_logic.getCookie("order_contentCode");
        }else{
            if(null != focus_logic.getCookie("order_contentCode")){
                focus_logic.delCookie("order_contentCode");
            }
            focus_logic.setCookie("order_contentCode",params_contentCode);
        }
        
    }

    function loadElement(){

        area0 = focus_logic.loadElements(1,1,"area0_","item item_focus","item",[-1,-1,-1,-1]);
        area1 = focus_logic.loadElements(5,1,"area1_","item item_focus","item",[0,-1,-1,-1]);
        area2 = focus_logic.loadElements(1,2,"area2_","item item_focus","item",[-1,-1,-1,-1]);
        //area3 = focus_logic.loadElements(1,1,"area3_","button","button",[-1,-1,-1,-1]);

        loadData();
        loadDefault();
        setAreaAttr();
        
        if(orderDataList.length > 0 && 0 == curAreaIndex){
            focus_logic.page.setCurrentFocus(1,0);
        }else{
            focus_logic.page.setCurrentFocus(curAreaIndex,curDomIndex);
        }
        
    }
    
    function loadData(){
        
        loadOrderDataList();             
        
    }
    
    function loadOrderDataList(){
        var ip = window.location.protocol + "//" + window.location.host;
        focus_logic.getDataByAjax("get_data/get_data.jsp?action=shopOrderList&url="+ip+"/wbManager/shop/shopOrderList.do&type=0&productId="+params_productId+"&UserID="+params_userID,loadOrderDataListEvent);
        
    }
    
    function loadOrderDataListEvent(result){
                
        var _result = eval("(" + result + ")");
        
        console.log("shopOrderList:");
        console.log(_result);
        
        if(-5 == _result.rltcode){
            regesit();
            loadOrderDataList();
            return -1;
        }
        
        var _max = 4;
        var _size = 0;
        if(0 == _result.rltcode){
            var _object = _result.object;
            _size = _object.size>_max?_max:_object.size;
            orderDataList = _object.list.infos;
            console.log(orderDataList);
        }
        
        for(var _i=_size;_i<_max;_i++){
            $("line" + _i).style.display = "none";
        }
        
        for(var _i=0;_i<_size;_i++){
            var _name = orderDataList[_i].zfname;
            var _price = orderDataList[_i].price;
            $("name" + _i).innerHTML = _name;
            $("price" + _i).innerHTML = _price;
            $("line" + _i).style.display = "block";
        }
        
        if(_size > 0){
            area0.areaDirections[2] = 1;
        }
        area1.domsCount = _size; // 设置区域数量
        
    }

    function loadDefault(){

        var _focusInfo = focus_logic.getFocus([0,0,1]);

        curAreaIndex = _focusInfo.curAreaIndex;
        curDomIndex = _focusInfo.areaInfo[curAreaIndex].curDomIndex;

    }

    function setAreaAttr(){

        area0.okEvent = function(){
            
            window.location.href = params_backUrl;
            
        }
        
        area0.focusEvent = function(){
            
            $("content").innerHTML = "";
            
        }
        
        area1.okEvent = function(){
            
            /*
            $("mask").style.display = "block";
            $("sure").style.display = "block";
            focus_logic.savePageInfo(false,true);
            focus_logic.page.setCurrentFocus(2,0);
            */
            buy(orderDataList[area1.curDomIndex].serviceId); // 调取购买接口
            
        }
        
        area1.focusEvent = function(){
            
            $("content").innerHTML = orderDataList[area1.curDomIndex].orderInfo;
            
        }
        
        area2.doms[0].okEvent = function(){
            
            hiddenMask();
            
        }
        
        area2.doms[1].okEvent = function(){
            
            buy(orderDataList[area1.curDomIndex].serviceId); // 调取购买接口
            
        }

        /*
        area3.okEvent = function(){
            
            refresh();
            
        }
        */
        
        focus_logic.page.backEvent = function(){
            window.location.href = params_backUrl;
        }

    }
    
    function buy(_productId){
        
        // var _userID = focus_logic.getCookie("epg_userID");
        var _userID = params_userID;
        var _contentCode = params_contentCode;
        //var _productId = params_productId;
        var _href = window.location.href;
        var _index = _href.indexOf("order.jsp");
        var _path = _href.substring(0,_index);
        var _bsReturnURL = escape(_path + "order_result.jsp?tmp=");
        //var _bsReturnURL = escape("http://192.168.5.3:8080/wbManager/shop/orderList.do?Result=123");
        var ip = window.location.protocol + "//" + window.location.host;
        focus_logic.getDataByAjax("get_data/get_data.jsp?action=reChange&url="+ip+"/wbManager/shop/reChange.do&productId="+_productId+"&userid="+_userID+"&gameId="+_contentCode+"&bsReturnURL="+_bsReturnURL,loadOrderDataLink);
        
    }
    
    function loadOrderDataLink(result){
        
        var _result = eval("(" + result + ")");
        var _rltcode = _result.rltcode;
        if("0" == _rltcode + ""){
            focus_logic.getFocus(); // 清除记忆的焦点
            window.location.href = _result.object.list;
        }
        
    }
    
    function hiddenMask(){
        
        $("mask").style.display = "none";
        $("sure").style.display = "none";
        
        var _focusInfo = focus_logic.getFocus([1,0,1]);
        curAreaIndex = _focusInfo.curAreaIndex;
        curDomIndex = _focusInfo.areaInfo[curAreaIndex].curDomIndex;
        focus_logic.page.setCurrentFocus(curAreaIndex,curDomIndex);
        
    }
    
    function refresh(){
        
        window.location.href = window.location.href;
        
    }
    
    function regesit(){
                    
        var epg_userid = params_userID;
        focus_logic.setCookie("epg_userid",epg_userid);
        focus_logic.setCookie("ad_flag","1");
        focus_logic.delCookie("AUTOCEPHALY_index");
        
        //用户数据
        var UserID = epg_userid;
        var mac;
        var _stb_areaid;
        var epgDoman="";
        var epgToken="";
        try{
            //@test
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
        
        var ip = window.location.protocol + "//" + window.location.host;
        focus_logic.getDataByAjax("get_data/get_data.jsp?action=regesit&url="+ip+"/wbManager/mine/addAccount.do&wbversion=310&vspcode="+vspcode+"&key="+key+"&epg_userid="+epg_userid+"&areaid="+stb_areaid+"&type=1",epg_regesiter);
        
    }
    
    function epg_regesiter(result){
        
         is_regesiter= eval('('+result+')');
         
         console.log("regesiter:");
         console.log(is_regesiter);
         
         if(is_regesiter.object.account){
             load_account=is_regesiter.object.account;
             var ip = window.location.protocol + "//" + window.location.host;
             focus_logic.getDataByAjax("get_data/get_data.jsp?action=load&url="+ip+"/wbManager/mine/login.do&account="+load_account,load_page)
         }
         
    }
    
    function load_page(result){
        var load_result= eval('('+result+')');
        
        console.log("load:");
        console.log(load_result);
        
        if(load_result.rltmsg=="success"){
            focus_logic.setCookie("login_cookie",load_result.login_cookie);
        }
    }
    
</script>