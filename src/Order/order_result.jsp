<%@page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@include file="config/addr_config.jsp"%>
<%
    String parms = request.getParameter("parms")==null?"":request.getParameter("parms");
	String data = request.getParameter("data")==null?"":request.getParameter("data");
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
            background-color:rgba(0,0,0,0.5);
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
                    <div class="item">返回</div>
                </div>
                <div class="separate" style="top:74px;"></div>
            </div>
            <div id="line0" class="line" style="top:74px;display:none;">
                <div id="name0" class="name"></div>
                <div id="price0" class="price"></div>
                <div class="button">
                    <div class="item">购买</div>
                </div>
                <div class="separate" style="top:74px;"></div>
            </div>
            <div id="line1" class="line" style="top:148px;display:none;">
                <div id="name1" class="name"></div>
                <div id="price1" class="price"></div>
                <div class="button">
                    <div class="item">购买</div>
                </div>
                <div class="separate" style="top:74px;"></div>
            </div>
            <div id="line2" class="line" style="top:222px;display:none;">
                <div id="name2" class="name"></div>
                <div id="price2" class="price"></div>
                <div class="button">
                    <div class="item">购买</div>
                </div>
                <div class="separate" style="top:74px;"></div>
            </div>
            <div id="line3" class="line" style="top:296px;display:none;">
                <div id="name3" class="name"></div>
                <div id="price3" class="price"></div>
                <div class="button">
                    <div class="item">购买</div>
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
    <div id="mask" class="mask" style="display:block;">
        <div id="result" class="pop" style="display:block;">
            <div class="title">消费提示</div>
            <div id="buy_result_message" class="message"></div>
            <div id="area0_0" class="button">确定</div>
        </div>
    </div>
    <div id="test" style="position:absolute;left:15px;top:15px;font-size:28;color:#FFF;z-index:999;"></div>
</body>
</html>
<script type="text/javascript" src="js/focus_logic.js"></script>
<script type="text/javascript">

    var area0;

    window.onload = function(){
    
        focus_logic.getDataByAjax('get_data/get_data.jsp?action=orderList&url=<%=get_ip%>shop/orderList.do&parms=<%=parms%>&data=<%=data%>',loadOrderMessage);
    
        area0 = focus_logic.loadElements(1,1,"area0_","item item_focus","item",[-1,-1,-1,-1]);
        focus_logic.page.setCurrentFocus(0,0);
        
        area0.okEvent = function(){
            var _backUrl = focus_logic.getCookie("order_backUrl");
            window.location.href = _backUrl;
        }
        
        focus_logic.page.backEvent = function(){
            var _backUrl = focus_logic.getCookie("order_backUrl");
            window.location.href = _backUrl;
        }
        
        setTimeout("window.focus()",1);
        
    }
    
    function loadOrderMessage(result){
              
        result = result.trim();
        
        if(result.indexOf("onSuccess")>0){
            // 购买成功
            $("buy_result_message").innerHTML = "购买成功！快去体验吧";
        }else{
            // 购买失败
            $("buy_result_message").innerHTML = "购买失败！请稍后再试";
        }
        
    }

</script>