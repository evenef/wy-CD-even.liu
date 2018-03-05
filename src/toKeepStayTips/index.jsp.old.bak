<%@page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@include file="config/addr_config.jsp"%>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<meta name="page-view-size" content="1280*720"/>
	<title>首页</title>
	<style>
	body{
		margin:0px;
		padding:0px;
		width:1280px;
		height:720px;
	}
	.bg{
		position:absolute;
		width:1280px;
		height:720px;
		overflow:hidden;
	}
	.ping,.time{
		position:absolute;
		left:1156px;
		top:32px;
		width:24px;
		height:18px;
	}
	.time{
		top:30px;
		left:1190px;
		color:#b8c2f3;
		font-size:20px;
		font-weight:600;
	}
	.user_name,.user_money{
		position:absolute;
		left:780px;
		top:30px;
	}
	.head_img img,.money_img img{
		position:absolute;
		top:-8px;
		width:35px;
		height:35px;
		border-radius:50%;
		border:3px solid #00fefe;
		z-index:666;
	}
	.name,.money{
		position:absolute;
		left:24px;
		width:190px;
		height:26px;
		line-height:26px;
		border-radius:14px;
		background-color:#013d9f;
		text-align:center;
		color:#fff;
	}
	.user_money{
		left:1000px;
	}
	.money_img img{
		border:none;
		top:-6px;
	}
	.money{
		width:100px;
	}
	.loge{
		position:absolute;
		left:86px;
		top:80px;
		width:58px;
		height:30px;
	}
	.nav{
		position:absolute;
		top:70px;
		width:1280px;
		height:59px;
		background:url("images/nav_bg.png") no-repeat;
	}

	.nav .item{
		position:absolute;
		width:258px;
		height:145px;
		top:-70px;
		left:60px;
	}
	.nav #area0_1.item{
		width:209px;
		left:320px;
	}
	.nav #area0_2.item{
		width:209px;
		left:520px;
	}
	.nav #area0_3.item{
		width:209px;
		left:720px;
	}
	.nav #area0_4.item{
		width:175px;
		left:890px;
	}
	.nav #area0_5.item{
		width:175px;
		left:1020px;
	}
	.nav .item .nav_txt{
		position:absolute;
		top:77px;
		left:70px;
		width:165px;
		height:40px;
		background:url("images/nav_default00.png") no-repeat;
	}
	.nav #area0_1.item .nav_txt{
		left:20px;
		background:url("images/nav_default01.png") no-repeat;
	}
	.nav #area0_2.item .nav_txt{
		left:20px;
		background:url("images/nav_default02.png") no-repeat;
	}
	.nav #area0_3.item .nav_txt{
		left:20px;
		background:url("images/nav_default03.png") no-repeat;
	}
	.nav #area0_4.item .nav_txt{
		left:40px;
		background:url("images/nav_default04.png") no-repeat;
	}
	.nav #area0_5.item .nav_txt{
		left:40px;
		background:url("images/nav_default05.png") no-repeat;
	}

	.nav .item_focus{
		z-index:999;
		background:url("images/navimg01-h.png") no-repeat;
	}
	.nav .item_focus .nav_txt,.nav .item_selected .nav_txt{
		background:none !important;
	}
	.nav #area0_1.item_focus{
		background:url("images/navimg02-h.png") no-repeat;
	}
	.nav #area0_2.item_focus{
		background:url("images/navimg03-h.png") no-repeat;
	}
	.nav #area0_3.item_focus{
		background:url("images/navimg04-h.png") no-repeat;
	}
	.nav #area0_4.item_focus{
		background:url("images/navimg06-h.png") no-repeat;
	}
	.nav #area0_5.item_focus{
		background:url("images/navimg07-h.png") no-repeat;
	}

	.nav .item_selected{
		z-index:999;
		background:url("images/navimg01-v.png") no-repeat;
	}
	.nav #area0_1.item_selected{
		background:url("images/navimg02-v.png") no-repeat;
	}
	.nav #area0_2.item_selected{
		background:url("images/navimg03-v.png") no-repeat;
	}
	.nav #area0_3.item_selected{
		background:url("images/navimg04-v.png") no-repeat;
	}
	.nav #area0_4.item_selected{
		background:url("images/navimg06-v.png") no-repeat;
	}
	.nav #area0_5.item_selected{
		background:url("images/navimg07-v.png") no-repeat;
	}
	.content{
		position:absolute;
		left:0px;
		top:168px;
		width:7680px;
		height:460px;

	}
	.content>div{
		width:1280px;
	}
	.part_1{
		position:absolute;
		left:1280px;
	}
	.part_2{
		position:absolute;
		left:2560px;
	}
	.part_3{
		position:absolute;
		left:3840px;
	}
	.part_4{
		position:absolute;
		left:5120px;
	}
	.part_5{
		position:absolute;
		left:6400px;
	}

	/***********推荐页1***************/

	.part_0 .left_side{
		position:absolute;
		left:50px;
	}
	.part_0_content{
		position:absolute;
		left:0px;
		width:2560px;
		height:500px;
	}
	.part_0 .left_side .item img{
		width:184px;
		height:158px;
		border-radius:24px;
		//box-shadow:6px 6px 8px rgba(0,0,0,0.4);
	}
	.part_0 .left_side .item{
		position:absolute;
		width:184px;
		height:158px;
		border-radius:24px;
		box-shadow:6px 6px 8px rgba(0,0,0,0.4);
	}
	.part_0 .left_side .item{
		position:absolute;
		top:-20px;
	}
	#area1_1{
		top:150px;
	}
	#area1_2{
		top:320px;
	}
	.part_0 .left_side .item_focus{
		z-index:999;
		width:204px;
		height:174px;
		margin-top:-9px;
		margin-left:-11px;
		border-radius:32px;
		border:2px solid #00f8f8;
	}
	.part_0 .left_side .item_focus img{
		width:204px;
		height:174px;
	}
	/************第一屏右边************/
	.right_side{
		position:absolute;
		left:248px;
		top:-20px;
	}
	.part_0 .right_side img{
		position:absolute;
		width:576px;
		height:328px;
		border-radius:24px;
		//box-shadow:6px 6px 8px rgba(0,0,0,0.4);
	}
	.part_0 .type_1 img{
		width:378px;
		height:328px;
	}
	.part_0 .type_2 img{
		width:184px;
		height:328px;
	}
	.part_0 .type_3 img{
		width:184px;
		height:158px;
	}
	.part_0 .type_4 img{
		width:378px;
		height:498px;
	}
	.part_0 .type_5 img{
		width:378px;
		height:158px;
	}
	.part_0 .right_side .item1{
		position:absolute;
		top:170px;
	}
	.part_0 .right_side .item2{
		position:absolute;
		top:340px;
	}
	.part_0 .right_side .item3{
		position:absolute;
		left:196px;
		top:0px;
	}
	.part_0 .right_side .item4{
		position:absolute;
		left:196px;
		top:170px;
	}
	.part_0 .right_side .item5{
		position:absolute;
		left:196px;
		top:340px;
	}
	.part_0 .right_side .item6{
		position:absolute;
		left:392px;
		top:0px;
	}
	.part_0 .right_side .item7{
		position:absolute;
		left:392px;
		top:170px;
	}
	.part_0 .right_side .item8{
		position:absolute;
		left:392px;
		top:340px;
	}
	.part_0 .right_side .item9{
		position:absolute;
		left:588px;
		top:0px;
	}
	.part_0 .right_side .item10{
		position:absolute;
		left:588px;
		top:170px;
	}
	.part_0 .right_side .item11{
		position:absolute;
		left:588px;
		top:340px;
	}
	.part_0 .right_side .item12{
		position:absolute;
		left:784px;
		top:0px;
	}
	.part_0 .right_side .item13{
		position:absolute;
		left:784px;
		top:170px;
	}
	.part_0 .right_side .item14{
		position:absolute;
		left:784px;
		top:340px;
	}
	.part_0 .right_side .item15{
		position:absolute;
		left:980px;
		top:0px;
	}
	.part_0 .right_side .item16{
		position:absolute;
		left:980px;
		top:170px;
	}
	.part_0 .right_side .item17{
		position:absolute;
		left:980px;
		top:340px;
	}
	.part_0 .right_side .item18{
		position:absolute;
		left:1176px;
		top:0px;
	}
	.part_0 .right_side .item19{
		position:absolute;
		left:1176px;
		top:170px;
	}
	.part_0 .right_side .item20{
		position:absolute;
		left:1176px;
		top:340px;
	}
	.part_0 .right_side .item21{
		position:absolute;
		left:1372px;
		top:0px;
	}
	.part_0 .right_side .item22{
		position:absolute;
		left:1372px;
		top:170px;
	}
	.part_0 .right_side .item23{
		position:absolute;
		left:1372px;
		top:340px;
	}
	.part_0 .right_side .item24{
		position:absolute;
		left:1568px;
		top:0px;
	}
	.part_0 .right_side .item25{
		position:absolute;
		left:1568px;
		top:170px;
	}
	.part_0 .right_side .item26{
		position:absolute;
		left:1568px;
		top:340px;
	}
	.part_0 .right_side .item27{
		position:absolute;
		left:1764px;
		top:0px;
	}
	.part_0 .right_side .item28{
		position:absolute;
		left:1764px;
		top:170px;
	}
	.part_0 .right_side .item29{
		position:absolute;
		left:1764px;
		top:340px;
	}
	.part_0 .right_side .item30{
		position:absolute;
		left:1960px;
		top:0px;
	}
	.part_0 .right_side .item31{
		position:absolute;
		left:1960px;
		top:170px;
	}
	.part_0 .right_side .item32{
		position:absolute;
		left:1960px;
		top:340px;
	}
	.part_0  .item0_focus .type_0 img,.part_0  .item1_focus .type_0 img,.part_0  .item2_focus .type_0 img,.part_0  .item3_focus .type_0 img,.part_0  .item4_focus .type_0 img,.part_0  .item5_focus .type_0 img,.part_0  .item6_focus .type_0 img,.part_0  .item7_focus .type_0 img,
	.part_0  .item8_focus .type_0 img,.part_0  .item9_focus .type_0 img,.part_0  .item10_focus .type_0 img,.part_0  .item11_focus .type_0 img,.part_0  .item12_focus .type_0 img,.part_0  .item13_focus .type_0 img,.item14_focus .type_0 img,.item15_focus .type_0 img,
	.part_0  .item16_focus .type_0 img,.part_0  .item17_focus .type_0 img,.part_0  .item18_focus .type_0 img,.part_0  .item19_focus .type_0 img,.part_0  .item20_focus .type_0 img,.part_0  .item21_focus .type_0 img,.item22_focus .type_0 img,.item23_focus .type_0 img,
	.part_0  .item24_focus .type_0 img,.part_0  .item25_focus .type_0 img,.part_0  .item26_focus .type_0 img,.part_0  .item27_focus .type_0 img,.part_0  .item28_focus .type_0 img,.part_0  .item29_focus .type_0 img,.item30_focus .type_0 img,.item31_focus .type_0 img,
	.part_0  .item32_focus .type_0 img
	{
		width:616px;
		height:358px;
		z-index:666;
	}
	.part_0  .item0 .type_0 ,.part_0  .item1 .type_0 ,.part_0  .item2 .type_0 ,.part_0  .item3 .type_0 ,.part_0  .item4 .type_0 ,.part_0  .item5 .type_0 ,.part_0  .item6 .type_0 ,.part_0  .item7 .type_0 ,
	.part_0  .item8 .type_0 ,.part_0  .item9 .type_0 ,.part_0  .item10 .type_0 ,.part_0  .item11 .type_0 ,.part_0  .item12 .type_0 ,.part_0  .item13 .type_0 ,.item14 .type_0 ,.item15 .type_0 ,
	.part_0  .item16 .type_0 ,.part_0  .item17 .type_0 ,.part_0  .item18 .type_0 ,.part_0  .item19 .type_0 ,.part_0  .item20 .type_0 ,.part_0  .item21 .type_0 ,.item22 .type_0 ,.item23 .type_0 ,
	.part_0  .item24 .type_0 ,.part_0  .item25 .type_0 ,.part_0  .item26 .type_0 ,.part_0  .item27 .type_0 ,.part_0  .item28 .type_0 ,.part_0  .item29 .type_0 ,.item30 .type_0 ,.item31 .type_0 ,
	.part_0  .item32 .type_0
	{
		width:576px;
		height:328px;
		border-radius:28px;
		box-shadow:6px 6px 8px rgba(0,0,0,0.4);

	}
	.part_0  .item0 .type_1 ,.part_0  .item1 .type_1 ,.part_0  .item2 .type_1 ,.part_0  .item3 .type_1 ,.part_0  .item4 .type_1 ,.part_0  .item5 .type_1 ,.part_0  .item6 .type_1 ,.part_0  .item7 .type_1 ,
	.part_0  .item8 .type_1 ,.part_0  .item9 .type_1 ,.part_0  .item10 .type_1 ,.part_0  .item11 .type_1 ,.part_0  .item12 .type_1 ,.part_0  .item13 .type_1 ,.item14 .type_1 ,.item15 .type_1 ,
	.part_0  .item16 .type_1 ,.part_0  .item17 .type_1 ,.part_0  .item18 .type_1 ,.part_0  .item19 .type_1 ,.part_0  .item20 .type_1 ,.part_0  .item21 .type_1 ,.item22 .type_1 ,.item23 .type_1 ,
	.part_0  .item24 .type_1 ,.part_0  .item25 .type_1 ,.part_0  .item26 .type_1 ,.part_0  .item27 .type_1 ,.part_0  .item28 .type_1 ,.part_0  .item29 .type_1 ,.item30 .type_1 ,.item31 .type_1 ,
	.part_0  .item32 .type_1
	{
		width:378px;
		height:328px;
		border-radius:26px;
		box-shadow:6px 6px 8px rgba(0,0,0,0.4);

	}
	.part_0  .item0 .type_2 ,.part_0  .item1 .type_2 ,.part_0  .item2 .type_2 ,.part_0  .item3 .type_2 ,.part_0  .item4 .type_2 ,.part_0  .item5 .type_2 ,.part_0  .item6 .type_2 ,.part_0  .item7 .type_2 ,
	.part_0  .item8 .type_2 ,.part_0  .item9 .type_2 ,.part_0  .item10 .type_2 ,.part_0  .item11 .type_2 ,.part_0  .item12 .type_2 ,.part_0  .item13 .type_2 ,.item14 .type_2 ,.item15 .type_2 ,
	.part_0  .item16 .type_2 ,.part_0  .item17 .type_2 ,.part_0  .item18 .type_2 ,.part_0  .item19 .type_2 ,.part_0  .item20 .type_2 ,.part_0  .item21 .type_2 ,.item22 .type_2 ,.item23 .type_2 ,
	.part_0  .item24 .type_2 ,.part_0  .item25 .type_2 ,.part_0  .item26 .type_2 ,.part_0  .item27 .type_2 ,.part_0  .item28 .type_2 ,.part_0  .item29 .type_2 ,.item30 .type_2 ,.item31 .type_2 ,
	.part_0  .item32 .type_2
	{
		width:184px;
		height:328px;
		border-radius:26px;
		box-shadow:6px 6px 8px rgba(0,0,0,0.4);

	}
	.part_0  .item0 .type_3 ,.part_0  .item1 .type_3 ,.part_0  .item2 .type_3 ,.part_0  .item3 .type_3 ,.part_0  .item4 .type_3 ,.part_0  .item5 .type_3 ,.part_0  .item6 .type_3 ,.part_0  .item7 .type_3 ,
	.part_0  .item8 .type_3 ,.part_0  .item9 .type_3 ,.part_0  .item10 .type_3 ,.part_0  .item11 .type_3 ,.part_0  .item12 .type_3 ,.part_0  .item13 .type_3 ,.item14 .type_3 ,.item15 .type_3 ,
	.part_0  .item16 .type_3 ,.part_0  .item17 .type_3 ,.part_0  .item18 .type_3 ,.part_0  .item19 .type_3 ,.part_0  .item20 .type_3 ,.part_0  .item21 .type_3 ,.item22 .type_3 ,.item23 .type_3 ,
	.part_0  .item24 .type_3 ,.part_0  .item25 .type_3 ,.part_0  .item26 .type_3 ,.part_0  .item27 .type_3 ,.part_0  .item28 .type_3 ,.part_0  .item29 .type_3 ,.item30 .type_3 ,.item31 .type_3 ,
	.part_0  .item32 .type_3
	{
		width:184px;
		height:158px;
		border-radius:26px;
		box-shadow:6px 6px 8px rgba(0,0,0,0.4);

	}
	.part_0  .item0 .type_4 ,.part_0  .item1 .type_4 ,.part_0  .item2 .type_4 ,.part_0  .item3 .type_4 ,.part_0  .item4 .type_4 ,.part_0  .item5 .type_4 ,.part_0  .item6 .type_4 ,.part_0  .item7 .type_4 ,
	.part_0  .item8 .type_4 ,.part_0  .item9 .type_4 ,.part_0  .item10 .type_4 ,.part_0  .item11 .type_4 ,.part_0  .item12 .type_4 ,.part_0  .item13 .type_4 ,.item14 .type_4 ,.item15 .type_4 ,
	.part_0  .item16 .type_4 ,.part_0  .item17 .type_4 ,.part_0  .item18 .type_4 ,.part_0  .item19 .type_4 ,.part_0  .item20 .type_4 ,.part_0  .item21 .type_4 ,.item22 .type_4 ,.item23 .type_4 ,
	.part_0  .item24 .type_4 ,.part_0  .item25 .type_4 ,.part_0  .item26 .type_4 ,.part_0  .item27 .type_4 ,.part_0  .item28 .type_4 ,.part_0  .item29 .type_4 ,.item30 .type_4 ,.item31 .type_4 ,
	.part_0  .item32 .type_4
	{
		width:378px;
		height:498px;
		border-radius:26px;
		box-shadow:6px 6px 8px rgba(0,0,0,0.4);

	}
	.part_0  .item0 .type_5 ,.part_0  .item1 .type_5 ,.part_0  .item2 .type_5 ,.part_0  .item3 .type_5 ,.part_0  .item4 .type_5 ,.part_0  .item5 .type_5 ,.part_0  .item6 .type_5 ,.part_0  .item7 .type_5 ,
	.part_0  .item8 .type_5 ,.part_0  .item9 .type_5 ,.part_0  .item10 .type_5 ,.part_0  .item11 .type_5 ,.part_0  .item12 .type_5 ,.part_0  .item13 .type_5 ,.item14 .type_5 ,.item15 .type_5 ,
	.part_0  .item16 .type_5 ,.part_0  .item17 .type_5 ,.part_0  .item18 .type_5 ,.part_0  .item19 .type_5 ,.part_0  .item20 .type_5 ,.part_0  .item21 .type_5 ,.item22 .type_5 ,.item23 .type_5 ,
	.part_0  .item24 .type_5 ,.part_0  .item25 .type_5 ,.part_0  .item26 .type_5 ,.part_0  .item27 .type_5 ,.part_0  .item28 .type_5 ,.part_0  .item29 .type_5 ,.item30 .type_5 ,.item31 .type_5 ,
	.part_0  .item32 .type_5
	{
		width:378px;
		height:158px;
		border-radius:26px;
		box-shadow:6px 6px 8px rgba(0,0,0,0.4);

	}
	.part_0  .item0_focus .type_0 ,.part_0  .item1_focus .type_0 ,.part_0  .item2_focus .type_0 ,.part_0  .item3_focus .type_0 ,.part_0  .item4_focus .type_0 ,.part_0  .item5_focus .type_0 ,.part_0  .item6_focus .type_0 ,.part_0  .item7_focus .type_0 ,
	.part_0  .item8_focus .type_0 ,.part_0  .item9_focus .type_0 ,.part_0  .item10_focus .type_0 ,.part_0  .item11_focus .type_0 ,.part_0  .item12_focus .type_0 ,.part_0  .item13_focus .type_0 ,.item14_focus .type_0 ,.item15_focus .type_0 ,
	.part_0  .item16_focus .type_0 ,.part_0  .item17_focus .type_0 ,.part_0  .item18_focus .type_0 ,.part_0  .item19_focus .type_0 ,.part_0  .item20_focus .type_0 ,.part_0  .item21_focus .type_0 ,.item22_focus .type_0 ,.item23_focus .type_0 ,
	.part_0  .item24_focus .type_0 ,.part_0  .item25_focus .type_0 ,.part_0  .item26_focus .type_0 ,.part_0  .item27_focus .type_0 ,.part_0  .item28_focus .type_0 ,.part_0  .item29_focus .type_0 ,.item30_focus .type_0 ,.item31_focus .type_0 ,
	.part_0  .item32_focus .type_0
	{
		position:absolute;
		margin-left:-22px;
		margin-top:-17px;
		width:616px;
		height:358px;
		border:2px solid #00f8f8;
		border-radius:26px;
		z-index:999;

	}
	.part_0  .item0_focus .type_1 img,.part_0  .item1_focus .type_1 img,.part_0 .item2_focus .type_1 img,.part_0 .item3_focus .type_1 img,.part_0 .item4_focus .type_1 img,.part_0 .item5_focus .type_1 img,.part_0 .item6_focus .type_1 img,.part_0 .item7_focus .type_1 img,
	.part_0  .item8_focus .type_1 img,.part_0  .item9_focus .type_1 img,.part_0 .item10_focus .type_1 img,.part_0 .item11_focus .type_1 img,.part_0 .item12_focus .type_1 img,.part_0 .item13_focus .type_1 img,.part_0 .item14_focus .type_1 img,.part_0 .item15_focus .type_1 img,
	.part_0  .item16_focus .type_1 img,.part_0  .item17_focus .type_1 img,.part_0 .item18_focus .type_1 img,.part_0 .item19_focus .type_1 img,.part_0 .item20_focus .type_1 img,.part_0 .item21_focus .type_1 img,.part_0 .item22_focus .type_1 img,.part_0 .item23_focus .type_1 img,
	.part_0  .item24_focus .type_1 img,.part_0  .item25_focus .type_1 img,.part_0 .item26_focus .type_1 img,.part_0 .item27_focus .type_1 img,.part_0 .item28_focus .type_1 img,.part_0 .item29_focus .type_1 img,.part_0 .item30_focus .type_1 img,.part_0 .item31_focus .type_1 img,
	.part_0  .item32_focus .type_1 img
	{
		width:412px;
		height:358px;
		z-index:666;
	}
	.part_0  .item0_focus .type_1,.part_0  .item1_focus .type_1 ,.part_0 .item2_focus .type_1 ,.part_0 .item3_focus .type_1 ,.part_0 .item4_focus .type_1 ,.part_0 .item5_focus .type_1 ,.part_0 .item6_focus .type_1 ,.part_0 .item7_focus .type_1 ,
	.part_0  .item8_focus .type_1 ,.part_0  .item9_focus .type_1 ,.part_0 .item10_focus .type_1 ,.part_0 .item11_focus .type_1 ,.part_0 .item12_focus .type_1 ,.part_0 .item13_focus .type_1 ,.part_0 .item14_focus .type_1 ,.part_0 .item15_focus .type_1 ,
	.part_0  .item16_focus .type_1 ,.part_0  .item17_focus .type_1 ,.part_0 .item18_focus .type_1 ,.part_0 .item19_focus .type_1 ,.part_0 .item20_focus .type_1 ,.part_0 .item21_focus .type_1 ,.part_0 .item22_focus .type_1 ,.part_0 .item23_focus .type_1 ,
	.part_0  .item24_focus .type_1 ,.part_0  .item25_focus .type_1 ,.part_0 .item26_focus .type_1 ,.part_0 .item27_focus .type_1 ,.part_0 .item28_focus .type_1 ,.part_0 .item29_focus .type_1 ,.part_0 .item30_focus .type_1 ,.part_0 .item31_focus .type_1 ,
	.part_0  .item32_focus .type_1
	{
		position:absolute;
		margin-left:-19px;
		margin-top:-17px;
		width:412px;
		height:358px;
		border:2px solid #00f8f8;
		z-index:999;
	}
	.part_0 .item0_focus .type_2 img,.part_0 .item1_focus .type_2 img,.part_0 .item2_focus .type_2 img,.part_0 .item3_focus .type_2 img,.part_0 .item4_focus .type_2 img,.part_0 .item5_focus .type_2 img,.part_0 .item6_focus .type_2 img,.part_0 .item7_focus .type_2 img,
	.part_0 .item8_focus .type_2 img,.part_0 .item9_focus .type_2 img,.part_0 .item10_focus .type_2 img,.part_0 .item11_focus .type_2 img,.part_0 .item12_focus .type_2 img,.part_0 .item13_focus .type_2 img,.part_0 .item14_focus .type_2 img,.part_0 .item15_focus .type_2 img,
	.part_0 .item16_focus .type_2 img,.part_0 .item17_focus .type_2 img,.part_0 .item18_focus .type_2 img,.part_0 .item19_focus .type_2 img,.part_0 .item20_focus .type_2 img,.part_0 .item21_focus .type_2 img,.part_0 .item22_focus .type_2 img,.part_0 .item23_focus .type_2 img,
	.part_0 .item24_focus .type_2 img,.part_0 .item25_focus .type_2 img,.part_0 .item26_focus .type_2 img,.part_0 .item27_focus .type_2 img,.part_0 .item28_focus .type_2 img,.part_0 .item29_focus .type_2 img,.part_0 .item30_focus .type_2 img,.part_0 .item31_focus .type_2 img,
	.part_0 .item32_focus .type_2 img
	{
		width:204px;
		height:358px;
		z-index:666;
	}
	.part_0 .item0_focus .type_2 ,.part_0 .item1_focus .type_2 ,.part_0 .item2_focus .type_2 ,.part_0 .item3_focus .type_2 ,.part_0 .item4_focus .type_2 ,.part_0 .item5_focus .type_2 ,.part_0 .item6_focus .type_2 ,.part_0 .item7_focus .type_2 ,
	.part_0 .item8_focus .type_2 ,.part_0 .item9_focus .type_2 ,.part_0 .item10_focus .type_2 ,.part_0 .item11_focus .type_2 ,.part_0 .item12_focus .type_2 ,.part_0 .item13_focus .type_2 ,.part_0 .item14_focus .type_2 ,.part_0 .item15_focus .type_2 ,
	.part_0 .item16_focus .type_2 ,.part_0 .item17_focus .type_2 ,.part_0 .item18_focus .type_2 ,.part_0 .item19_focus .type_2 ,.part_0 .item20_focus .type_2 ,.part_0 .item21_focus .type_2 ,.part_0 .item22_focus .type_2 ,.part_0 .item23_focus .type_2 ,
	.part_0 .item24_focus .type_2 ,.part_0 .item25_focus .type_2 ,.part_0 .item26_focus .type_2 ,.part_0 .item27_focus .type_2 ,.part_0 .item28_focus .type_2 ,.part_0 .item29_focus .type_2 ,.part_0 .item30_focus .type_2 ,.part_0 .item31_focus .type_2 ,
	.part_0 .item32_focus .type_2
	{
		position:absolute;
		margin-left:-11px;
		margin-top:-17px;
		width:204px;
		height:358px;
		z-index:999;
		border:2px solid #00f8f8;
	}
	.item0_focus .type_3 img,.item1_focus .type_3 img,.item2_focus .type_3 img,.item3_focus .type_3 img,.item4_focus .type_3 img,.item5_focus .type_3 img,.item6_focus .type_3 img,.item7_focus .type_3 img,
	.item8_focus .type_3 img,.item9_focus .type_3 img,.item10_focus .type_3 img,.item11_focus .type_3 img,.item12_focus .type_3 img,.item13_focus .type_3 img,.item14_focus .type_3 img,.item15_focus .type_3 img,
	.item16_focus .type_3 img,.item17_focus .type_3 img,.item18_focus .type_3 img,.item19_focus .type_3 img,.item20_focus .type_3 img,.item21_focus .type_3 img,.item22_focus .type_3 img,.item23_focus .type_3 img,
	.item24_focus .type_3 img,.item25_focus .type_3 img,.item26_focus .type_3 img,.item27_focus .type_3 img,.item28_focus .type_3 img,.item29_focus .type_3 img,.item30_focus .type_3 img,.item31_focus .type_3 img,
	.item32_focus .type_3 img
	{
		width:204px;
		height:174px;
		z-index:666;
	}
	.part_0 .item0_focus .type_3 ,.part_0 .item1_focus .type_3 ,.part_0 .item2_focus .type_3 ,.part_0 .item3_focus .type_3 ,.part_0 .item4_focus .type_3 ,.part_0 .item5_focus .type_3 ,.part_0 .item6_focus .type_3 ,.part_0 .item7_focus .type_3 ,
	.part_0 .item8_focus .type_3 ,.part_0 .item9_focus .type_3 ,.part_0 .item10_focus .type_3 ,.part_0 .item11_focus .type_3 ,.part_0 .item12_focus .type_3 ,.part_0 .item13_focus .type_3 ,.part_0 .item14_focus .type_3 ,.part_0 .item15_focus .type_3 ,
	.part_0 .item16_focus .type_3 ,.part_0 .item17_focus .type_3 ,.part_0 .item18_focus .type_3 ,.part_0 .item19_focus .type_3 ,.part_0 .item20_focus .type_3 ,.part_0 .item21_focus .type_3 ,.part_0 .item22_focus .type_3 ,.part_0 .item23_focus .type_3 ,
	.part_0 .item24_focus .type_3 ,.part_0 .item25_focus .type_3 ,.part_0 .item26_focus .type_3 ,.part_0 .item27_focus .type_3 ,.part_0 .item28_focus .type_3 ,.part_0 .item29_focus .type_3 ,.part_0 .item30_focus .type_3 ,.part_0 .item31_focus .type_3 ,
	.part_0 .item32_focus .type_3
	{
		position:absolute;
		margin-left:-11px;
		margin-top:-10px;
		width:204px;
		height:174px;
		border:2px solid #00f8f8;
		z-index:999;
	}
	.item0_focus .type_4 img,.item1_focus .type_4 img,.item2_focus .type_4 img,.item3_focus .type_4 img,.item4_focus .type_4 img,.item5_focus .type_4 img,.item6_focus .type_4 img,.item7_focus .type_4 img,
	.item8_focus .type_4 img,.item9_focus .type_4 img,.item10_focus .type_4 img,.item11_focus .type_4 img,.item12_focus .type_4 img,.item13_focus .type_4 img,.item14_focus .type_4 img,.item15_focus .type_4 img,
	.item16_focus .type_4 img,.item17_focus .type_4 img,.item18_focus .type_4 img,.item19_focus .type_4 img,.item20_focus .type_4 img,.item21_focus .type_4 img,.item22_focus .type_4 img,.item23_focus .type_4 img,
	.item24_focus .type_4 img,.item25_focus .type_4 img,.item26_focus .type_4 img,.item27_focus .type_4 img,.item28_focus .type_4 img,.item29_focus .type_4 img,.item30_focus .type_4 img,.item31_focus .type_4 img,
	.item32_focus .type_4 img
	{

		width:412px;
		height:528px;
		z-index:666;
	}
	.part_0 .item0_focus .type_4 ,.part_0 .item1_focus .type_4 ,.part_0 .item2_focus .type_4 ,.part_0 .item3_focus .type_4 ,.part_0 .item4_focus .type_4 ,.part_0 .item5_focus .type_4 ,.part_0 .item6_focus .type_4 ,.part_0 .item7_focus .type_4 ,
	.part_0 .item8_focus .type_4 ,.part_0 .item9_focus .type_4 ,.part_0 .item10_focus .type_4 ,.part_0 .item11_focus .type_4 ,.part_0 .item12_focus .type_4 ,.part_0 .item13_focus .type_4 ,.part_0 .item14_focus .type_4 ,.part_0 .item15_focus .type_4 ,
	.part_0 .item16_focus .type_4 ,.part_0 .item17_focus .type_4 ,.part_0 .item18_focus .type_4 ,.part_0 .item19_focus .type_4 ,.part_0 .item20_focus .type_4 ,.part_0 .item21_focus .type_4 ,.part_0 .item22_focus .type_4 ,.part_0 .item23_focus .type_4 ,
	.part_0 .item24_focus .type_4 ,.part_0 .item25_focus .type_4 ,.part_0 .item26_focus .type_4 ,.part_0 .item27_focus .type_4 ,.part_0 .item28_focus .type_4 ,.part_0 .item29_focus .type_4 ,.part_0 .item30_focus .type_4 ,.part_0 .item31_focus .type_4 ,
	.part_0 .item32_focus .type_4
	{
		position:absolute;
		margin-left:-19px;
		margin-top:-17px;
		width:412px;
		height:528px;
		border:2px solid #00f8f8;
		z-index:999;
	}
	.item0_focus .type_5 img,.item1_focus .type_5 img,.item2_focus .type_5 img,.item3_focus .type_5 img,.item4_focus .type_5 img,.item5_focus .type_5 img,.item6_focus .type_5 img,.item7_focus .type_5 img,
	.item8_focus .type_5 img,.item9_focus .type_5 img,.item10_focus .type_5 img,.item11_focus .type_5 img,.item12_focus .type_5 img,.item13_focus .type_5 img,.item14_focus .type_5 img,.item15_focus .type_5 img,
	.item16_focus .type_5 img,.item17_focus .type_5 img,.item18_focus .type_5 img,.item19_focus .type_5 img,.item20_focus .type_5 img,.item21_focus .type_5 img,.item22_focus .type_5 img,.item23_focus .type_5 img,
	.item24_focus .type_5 img,.item25_focus .type_5 img,.item26_focus .type_5 img,.item27_focus .type_5 img,.item28_focus .type_5 img,.item29_focus .type_5 img,.item30_focus .type_5 img,.item31_focus .type_5 img,
	.item32_focus .type_5 img
	{

		width:412px;
		height:174px;
		z-index:666;
	}
	.part_0 .item0_focus .type_5 ,.part_0 .item1_focus .type_5 ,.part_0 .item2_focus .type_5 ,.part_0 .item3_focus .type_5 ,.part_0 .item4_focus .type_5 ,.part_0 .item5_focus .type_5 ,.part_0 .item6_focus .type_5 ,.part_0 .item7_focus .type_5 ,
	.part_0 .item8_focus .type_5 ,.part_0 .item9_focus .type_5 ,.part_0 .item10_focus .type_5 ,.part_0 .item11_focus .type_5 ,.part_0 .item12_focus .type_5 ,.part_0 .item13_focus .type_5 ,.part_0 .item14_focus .type_5 ,.part_0 .item15_focus .type_5 ,
	.part_0 .item16_focus .type_5 ,.part_0 .item17_focus .type_5 ,.part_0 .item18_focus .type_5 ,.part_0 .item19_focus .type_5 ,.part_0 .item20_focus .type_5 ,.part_0 .item21_focus .type_5 ,.part_0 .item22_focus .type_5 ,.part_0 .item23_focus .type_5 ,
	.part_0 .item24_focus .type_5 ,.part_0 .item25_focus .type_5 ,.part_0 .item26_focus .type_5 ,.part_0 .item27_focus .type_5 ,.part_0 .item28_focus .type_5 ,.part_0 .item29_focus .type_5 ,.part_0 .item30_focus .type_5 ,.part_0 .item31_focus .type_5 ,
	.part_0 .item32_focus .type_5
	{
		position:absolute;
		margin-left:-19px;
		margin-top:-10px;
		width:412px;
		height:174px;
		border:2px solid #00f8f8;
		z-index:999;
	}
	.type_3 .txt_bg_g,.type_3 .txt_bg_b{
		position:absolute;
		top:112px;
		width:184px;
		height:46px;
		background:url("images/txt_greenbg.png") no-repeat;
		border-bottom-right-radius:24px;
		border-bottom-left-radius:24px;
		text-align:center;
		line-height:46px;
		color:#fff;
		font-size:20px;
	}
	.type_2 .txt_bg_g,.type_2 .txt_bg_b{
		position:absolute;
		top:282px;
		width:184px;
		height:46px;
		background:url("images/txt_greenbg.png") no-repeat;
		border-bottom-right-radius:24px;
		border-bottom-left-radius:24px;
		text-align:center;
		line-height:46px;
		color:#fff;
		font-size:20px;
	}
	.type_1 .txt_bg_g,.type_1 .txt_bg_b,.type_4 .txt_bg_g,.type_4 .txt_bg_b,.type_5 .txt_bg_g,.type_5 .txt_bg_b{
		position:absolute;
		top:282px;
		width:379px;
		height:48px;
		background:url("images/txt_midbg_g.png") no-repeat;
		text-align:center;
		line-height:48px;
		color:#fff;
		font-size:20px;
		border-bottom-right-radius:28px;
		border-bottom-left-radius:28px;
	}
	.type_0 .txt_bg_g,.type_0 .txt_bg_b{
		position:absolute;
		top:269px;
		width:576px;
		height:60px;
		background:url("images/txt_bigbg_g.png") no-repeat;
		text-align:center;
		line-height:60px;
		color:#fff;
		font-size:20px;
		border-bottom-right-radius:28px;
		border-bottom-left-radius:28px;
	}
	.type_4 .txt_bg_g,.type_4 .txt_bg_b{
		top:450px;
	}
	.type_5 .txt_bg_g,.type_5 .txt_bg_b{
		top:110px;
	}
	.type_3 .txt_bg_b,.type_2 .txt_bg_b{
		background:url("images/txt_bluebg.png") no-repeat;
	}
	.type_1 .txt_bg_b,.type_4 .txt_bg_b,.type_5 .txt_bg_b{
		background:url("images/txt_midbg_b.png") no-repeat;
	}
	.type_0 .txt_bg_b{
		background:url("images/txt_bigbg_b.png") no-repeat;
	}
	.item0_focus .type_3 .txt_bg_b,.item1_focus .type_3 .txt_bg_b,.item2_focus .type_3 .txt_bg_b,.item3_focus .type_3 .txt_bg_b,.item4_focus .type_3 .txt_bg_b,.item5_focus .type_3 .txt_bg_b,.item6_focus .type_3 .txt_bg_b,.item7_focus .type_3 .txt_bg_b,
	.item8_focus .type_3 .txt_bg_b,.item9_focus .type_3 .txt_bg_b,.item10_focus .type_3 .txt_bg_b,.item11_focus .type_3 .txt_bg_b,.item12_focus .type_3 .txt_bg_b,.item13_focus .type_3 .txt_bg_b,.item14_focus .type_3 .txt_bg_b,.item15_focus .type_3 .txt_bg_b,
	.item16_focus .type_3 .txt_bg_b,.item17_focus .type_3 .txt_bg_b,.item18_focus .type_3 .txt_bg_b,.item19_focus .type_3 .txt_bg_b,.item20_focus .type_3 .txt_bg_b,.item21_focus .type_3 .txt_bg_b,.item22_focus .type_3 .txt_bg_b,.item23_focus .type_3 .txt_bg_b,
	.item24_focus .type_3 .txt_bg_b,.item25_focus .type_3 .txt_bg_b,.item26_focus .type_3 .txt_bg_b,.item27_focus .type_3 .txt_bg_b,.item28_focus .type_3 .txt_bg_b,.item29_focus .type_3 .txt_bg_b,.item30_focus .type_3 .txt_bg_b,.item31_focus .type_3 .txt_bg_b,
	.item32_focus .type_3 .txt_bg_b
	{
		left:0px;
		top:124px;
		width:204px;
		height:50px;
		z-index:1111;
		background-size:204px 50px;
	}
	.item0_focus .type_3 .txt_bg_g,.item1_focus .type_3 .txt_bg_g,.item2_focus .type_3 .txt_bg_g,.item3_focus .type_3 .txt_bg_g,.item4_focus .type_3 .txt_bg_g,.item5_focus .type_3 .txt_bg_g,.item6_focus .type_3 .txt_bg_g,.item7_focus .type_3 .txt_bg_g,
	.item8_focus .type_3 .txt_bg_g,.item9_focus .type_3 .txt_bg_g,.item10_focus .type_3 .txt_bg_g,.item11_focus .type_3 .txt_bg_g,.item12_focus .type_3 .txt_bg_g,.item13_focus .type_3 .txt_bg_g,.item14_focus .type_3 .txt_bg_g,.item15_focus .type_3 .txt_bg_g,
	.item16_focus .type_3 .txt_bg_g,.item17_focus .type_3 .txt_bg_g,.item18_focus .type_3 .txt_bg_g,.item19_focus .type_3 .txt_bg_g,.item20_focus .type_3 .txt_bg_g,.item21_focus .type_3 .txt_bg_g,.item22_focus .type_3 .txt_bg_g,.item23_focus .type_3 .txt_bg_g,
	.item24_focus .type_3 .txt_bg_g,.item25_focus .type_3 .txt_bg_g,.item26_focus .type_3 .txt_bg_g,.item27_focus .type_3 .txt_bg_g,.item28_focus .type_3 .txt_bg_g,.item29_focus .type_3 .txt_bg_g,.item30_focus .type_3 .txt_bg_g,.item31_focus .type_3 .txt_bg_g,
	.item32_focus .type_3 .txt_bg_g
	{
		left:0px;
		top:124px;
		width:204px;
		height:50px;
		z-index:1111;
		background-size:204px 50px;
	}
	.item0_focus .type_2 .txt_bg_g,.item1_focus .type_2 .txt_bg_g,.item2_focus .type_2 .txt_bg_g,.item3_focus .type_2 .txt_bg_g,.item4_focus .type_2 .txt_bg_g,.item5_focus .type_2 .txt_bg_g,.item6_focus .type_2 .txt_bg_g,.item7_focus .type_2 .txt_bg_g,
	.item8_focus .type_2 .txt_bg_g,.item9_focus .type_2 .txt_bg_g,.item10_focus .type_2 .txt_bg_g,.item11_focus .type_2 .txt_bg_g,.item12_focus .type_2 .txt_bg_g,.item13_focus .type_2 .txt_bg_g,.item14_focus .type_2 .txt_bg_g,.item15_focus .type_2 .txt_bg_g,
	.item16_focus .type_2 .txt_bg_g,.item17_focus .type_2 .txt_bg_g,.item18_focus .type_2 .txt_bg_g,.item19_focus .type_2 .txt_bg_g,.item20_focus .type_2 .txt_bg_g,.item21_focus .type_2 .txt_bg_g,.item22_focus .type_2 .txt_bg_g,.item23_focus .type_2 .txt_bg_g,
	.item24_focus .type_2 .txt_bg_g,.item25_focus .type_2 .txt_bg_g,.item26_focus .type_2 .txt_bg_g,.item27_focus .type_2 .txt_bg_g,.item28_focus .type_2 .txt_bg_g,.item29_focus .type_2 .txt_bg_g,.item30_focus .type_2 .txt_bg_g,.item31_focus .type_2 .txt_bg_g,
	.item32_focus .type_2 .txt_bg_g
	{
		left:0px;
		top:308px;
		width:204px;
		height:50px;
		z-index:1111;
		background-size:204px 50px;
	}
	.item0_focus .type_0 .txt_bg_g,.item1_focus .type_0 .txt_bg_g,.item2_focus .type_0 .txt_bg_g,.item3_focus .type_0 .txt_bg_g,.item4_focus .type_0 .txt_bg_g,.item5_focus .type_0 .txt_bg_g,.item6_focus .type_0 .txt_bg_g,.item7_focus .type_0 .txt_bg_g,
	.item8_focus .type_0 .txt_bg_g,.item9_focus .type_0 .txt_bg_g,.item10_focus .type_0 .txt_bg_g,.item11_focus .type_0 .txt_bg_g,.item12_focus .type_0 .txt_bg_g,.item13_focus .type_0 .txt_bg_g,.item14_focus .type_0 .txt_bg_g,.item15_focus .type_0 .txt_bg_g,
	.item16_focus .type_0 .txt_bg_g,.item17_focus .type_0 .txt_bg_g,.item18_focus .type_0 .txt_bg_g,.item19_focus .type_0 .txt_bg_g,.item20_focus .type_0 .txt_bg_g,.item21_focus .type_0 .txt_bg_g,.item22_focus .type_0 .txt_bg_g,.item23_focus .type_0 .txt_bg_g,
	.item24_focus .type_0 .txt_bg_g,.item25_focus .type_0 .txt_bg_g,.item26_focus .type_0 .txt_bg_g,.item27_focus .type_0 .txt_bg_g,.item28_focus .type_0 .txt_bg_g,.item29_focus .type_0 .txt_bg_g,.item30_focus .type_0 .txt_bg_g,.item31_focus .type_0 .txt_bg_g,
	.item32_focus .type_0 .txt_bg_g
	{
		left:0px;
		top:299px;
		width:616px;
		height:60px;
		z-index:1111;
		background-size:616px 60px;
	}
	.item0_focus .type_1 .txt_bg_g,.item1_focus .type_1 .txt_bg_g,.item2_focus .type_1 .txt_bg_g,.item3_focus .type_1 .txt_bg_g,.item4_focus .type_1 .txt_bg_g,.item5_focus .type_1 .txt_bg_g,.item6_focus .type_1 .txt_bg_g,.item7_focus .type_1 .txt_bg_g,
	.item8_focus .type_1 .txt_bg_g,.item9_focus .type_1 .txt_bg_g,.item10_focus .type_1 .txt_bg_g,.item11_focus .type_1 .txt_bg_g,.item12_focus .type_1 .txt_bg_g,.item13_focus .type_1 .txt_bg_g,.item14_focus .type_1 .txt_bg_g,.item15_focus .type_1 .txt_bg_g,
	.item16_focus .type_1 .txt_bg_g,.item17_focus .type_1 .txt_bg_g,.item18_focus .type_1 .txt_bg_g,.item19_focus .type_1 .txt_bg_g,.item20_focus .type_1 .txt_bg_g,.item21_focus .type_1 .txt_bg_g,.item22_focus .type_1 .txt_bg_g,.item23_focus .type_1 .txt_bg_g,
	.item24_focus .type_1 .txt_bg_g,.item25_focus .type_1 .txt_bg_g,.item26_focus .type_1 .txt_bg_g,.item27_focus .type_1 .txt_bg_g,.item28_focus .type_1 .txt_bg_g,.item29_focus .type_1 .txt_bg_g,.item30_focus .type_1 .txt_bg_g,.item31_focus .type_1 .txt_bg_g,
	.item32_focus .type_1 .txt_bg_g
	{
		left:0px;
		top:311px;
		width:412px;
		height:48px;
		z-index:1111;
		background-size:412px 48px;
	}
	.item0_focus .type_4 .txt_bg_g,.item1_focus .type_4 .txt_bg_g,.item2_focus .type_4 .txt_bg_g,.item3_focus .type_4 .txt_bg_g,.item4_focus .type_4 .txt_bg_g,.item5_focus .type_4 .txt_bg_g,.item6_focus .type_4 .txt_bg_g,.item7_focus .type_4 .txt_bg_g,
	.item8_focus .type_4 .txt_bg_g,.item9_focus .type_4 .txt_bg_g,.item10_focus .type_4 .txt_bg_g,.item11_focus .type_4 .txt_bg_g,.item12_focus .type_4 .txt_bg_g,.item13_focus .type_4 .txt_bg_g,.item14_focus .type_4 .txt_bg_g,.item15_focus .type_4 .txt_bg_g,
	.item16_focus .type_4 .txt_bg_g,.item17_focus .type_4 .txt_bg_g,.item18_focus .type_4 .txt_bg_g,.item19_focus .type_4 .txt_bg_g,.item20_focus .type_4 .txt_bg_g,.item21_focus .type_4 .txt_bg_g,.item22_focus .type_4 .txt_bg_g,.item23_focus .type_4 .txt_bg_g,
	.item24_focus .type_4 .txt_bg_g,.item25_focus .type_4 .txt_bg_g,.item26_focus .type_4 .txt_bg_g,.item27_focus .type_4 .txt_bg_g,.item28_focus .type_4 .txt_bg_g,.item29_focus .type_4 .txt_bg_g,.item30_focus .type_4 .txt_bg_g,.item31_focus .type_4 .txt_bg_g,
	.item32_focus .type_4 .txt_bg_g
	{
		left:0px;
		top:480px;
		width:412px;
		height:48px;
		z-index:1111;
		background-size:412px 48px;
	}
	.item0_focus .type_5 .txt_bg_g,.item1_focus .type_5 .txt_bg_g,.item2_focus .type_5 .txt_bg_g,.item3_focus .type_5 .txt_bg_g,.item4_focus .type_5 .txt_bg_g,.item5_focus .type_5 .txt_bg_g,.item6_focus .type_5 .txt_bg_g,.item7_focus .type_5 .txt_bg_g,
	.item8_focus .type_5 .txt_bg_g,.item9_focus .type_5 .txt_bg_g,.item10_focus .type_5 .txt_bg_g,.item11_focus .type_5 .txt_bg_g,.item12_focus .type_5 .txt_bg_g,.item13_focus .type_5 .txt_bg_g,.item14_focus .type_5 .txt_bg_g,.item15_focus .type_5 .txt_bg_g,
	.item16_focus .type_5 .txt_bg_g,.item17_focus .type_5 .txt_bg_g,.item18_focus .type_5 .txt_bg_g,.item19_focus .type_5 .txt_bg_g,.item20_focus .type_5 .txt_bg_g,.item21_focus .type_5 .txt_bg_g,.item22_focus .type_5 .txt_bg_g,.item23_focus .type_5 .txt_bg_g,
	.item24_focus .type_5 .txt_bg_g,.item25_focus .type_5 .txt_bg_g,.item26_focus .type_5 .txt_bg_g,.item27_focus .type_5 .txt_bg_g,.item28_focus .type_5 .txt_bg_g,.item29_focus .type_5 .txt_bg_g,.item30_focus .type_5 .txt_bg_g,.item31_focus .type_5 .txt_bg_g,
	.item32_focus .type_5 .txt_bg_g
	{
		left:0px;
		top:126px;
		width:412px;
		height:48px;
		z-index:1111;
		background-size:412px 48px;
	}
	.item0_focus .type_5 .txt_bg_b,.item1_focus .type_5 .txt_bg_b,.item2_focus .type_5 .txt_bg_b,.item3_focus .type_5 .txt_bg_b,.item4_focus .type_5 .txt_bg_b,.item5_focus .type_5 .txt_bg_b,.item6_focus .type_5 .txt_bg_b,.item7_focus .type_5 .txt_bg_b,
	.item8_focus .type_5 .txt_bg_b,.item9_focus .type_5 .txt_bg_b,.item10_focus .type_5 .txt_bg_b,.item11_focus .type_5 .txt_bg_b,.item12_focus .type_5 .txt_bg_b,.item13_focus .type_5 .txt_bg_b,.item14_focus .type_5 .txt_bg_b,.item15_focus .type_5 .txt_bg_b,
	.item16_focus .type_5 .txt_bg_b,.item17_focus .type_5 .txt_bg_b,.item18_focus .type_5 .txt_bg_b,.item19_focus .type_5 .txt_bg_b,.item20_focus .type_5 .txt_bg_b,.item21_focus .type_5 .txt_bg_b,.item22_focus .type_5 .txt_bg_b,.item23_focus .type_5 .txt_bg_b,
	.item24_focus .type_5 .txt_bg_b,.item25_focus .type_5 .txt_bg_b,.item26_focus .type_5 .txt_bg_b,.item27_focus .type_5 .txt_bg_b,.item28_focus .type_5 .txt_bg_b,.item29_focus .type_5 .txt_bg_b,.item30_focus .type_5 .txt_bg_b,.item31_focus .type_5 .txt_bg_b,
	.item32_focus .type_5 .txt_bg_b
	{
		left:0px;
		top:126px;
		width:412px;
		height:48px;
		z-index:1111;
		background-size:412px 48px;
	}
	/*******part1*******/
	.part_1 .type_0 img, .part_1 .type_1 img, .part_1 .type_2 img,.part_2 .type_0 img, .part_2 .type_1 img, .part_2 .type_2 img {
		width: 213px;
		height: 439px;
		border-radius: 26px;
	}
	.part_1 .type_0, .part_1 .type_1, .part_1 .type_2,.part_2 .type_0, .part_2 .type_1, .part_2 .type_2 {
		position:absolute;
		width: 213px;
		height: 439px;
		border-radius: 28px;
		box-shadow:6px 6px 8px rgba(0,0,0,0.4);
	}
	.part_1 .type_1 img,.part_2 .type_1 img{
		width: 439px;
		height: 213px;
	}
	.part_1 .type_1,.part_2 .type_1{
		width: 439px;
		height: 213px;
		box-shadow:6px 6px 8px rgba(0,0,0,0.4);
	}
	.part_1 .type_2 img,.part_2 .type_2 img{
		width: 213px;
		height: 213px;
	}
	.part_1 .type_2,.part_2 .type_2{
		width: 213px;
		height: 213px;
		box-shadow:6px 6px 8px rgba(0,0,0,0.4);
	}
	.part_1 .right_side .item0,.part_2 .right_side .item0{
		position:absolute;
		left:0px;
		top:0px;
	}
	.part_1 .right_side .item1,.part_2 .right_side .item1{
		position:absolute;
		left:0px;
		top:229px;
	}
	.part_1 .right_side .item2,.part_2 .right_side .item2{
		position:absolute;
		left: 228px;
		top: 0px;
	}
	.part_1 .right_side .item3,.part_2 .right_side .item3{
		position:absolute;
		left:228px;
		top:229px;
	}
	.part_1 .right_side .item4,.part_2 .right_side .item4{
		position:absolute;
		left:456px;
		top:0px;
	}
	.part_1 .right_side .item5,.part_2 .right_side .item5{
		position:absolute;
		left:456px;
		top:229px;
	}
	.part_1 .right_side .item6,.part_2 .right_side .item6{
		position:absolute;
		left:684px;
		top:0px;
	}
	.part_1 .right_side .item7,.part_2 .right_side .item7{
		position:absolute;
		left:684px;
		top:229px;
	}
	.part_1 .left_side .item_focus .type_2 img,.part_2 .left_side .item_focus .type_2 img{
		position:absolute;
		left:-12px;
		top:-12px;
		width:233px;
		height:233px;
		border:2px solid #00f8f8;
		z-index:666;
	}
	.part_1 .left_side .item_focus .type_1 img,.part_2 .left_side .item_focus .type_1 img{
		position:absolute;
		left:-22px;
		top:-12px;
		width:479px;
		height:233px;
		border:2px solid #00f8f8;
		z-index:666;
	}
	.part_1 .left_side .item_focus .type_0 img,.part_2 .left_side .item_focus .type_0 img{
		height:479px;
		width:233px;
		z-index:666;
	}
	.part_1 .left_side .item_focus .type_0 ,.part_2 .left_side .item_focus .type_0{
		position:absolute;
		top:-22px;
		left:-12px;
		height:479px;
		width:233px;
		border:2px solid #00f8f8;
		z-index:999;
		border-radius:28px;
	}
	.part_1 .item0_focus .type_2 img,.part_1 .item1_focus .type_2 img,.part_1 .item2_focus .type_2 img,.part_1 .item3_focus .type_2 img,.part_1 .item4_focus .type_2 img,
	.part_1 .item5_focus .type_2 img,.part_1 .item6_focus .type_2 img,.part_1 .item7_focus .type_2 img,
	.part_2 .item0_focus .type_2 img,.part_2 .item1_focus .type_2 img,.part_2 .item2_focus .type_2 img,.part_2 .item3_focus .type_2 img,.part_2 .item4_focus .type_2 img,
	.part_2 .item5_focus .type_2 img,.part_2 .item6_focus .type_2 img,.part_2 .item7_focus .type_2 img
	{
		width:233px;
		height:233px;
		z-index:666;
	}
	.part_1 .item0_focus .type_2,.part_1 .item1_focus .type_2,.part_1 .item2_focus .type_2,.part_1 .item3_focus .type_2,.part_1 .item4_focus .type_2,
	.part_1 .item5_focus .type_2,.part_1 .item6_focus .type_2,.part_1 .item7_focus .type_2,
	.part_2 .item0_focus .type_2,.part_2 .item1_focus .type_2,.part_2 .item2_focus .type_2,.part_2 .item3_focus .type_2,.part_2 .item4_focus .type_2,
	.part_2 .item5_focus .type_2,.part_2 .item6_focus .type_2,.part_2 .item7_focus .type_2
	{
		position:absolute;
		left:-12px;
		top:-12px;
		width:233px;
		height:233px;
		border:2px solid #00f8f8;
		z-index:999;
	}
	.part_1 .item0_focus .type_1 img,.part_1 .item1_focus .type_1 img,.part_1 .item2_focus .type_1 img,.part_1 .item3_focus .type_1 img,.part_1 .item4_focus .type_1 img,
	.part_1 .item5_focus .type_1 img,.part_1 .item6_focus .type_1 img,.part_1 .item7_focus .type_1 img,
	.part_2 .item0_focus .type_1 img,.part_2 .item1_focus .type_1 img,.part_2 .item2_focus .type_1 img,.part_2 .item3_focus .type_1 img,.part_2 .item4_focus .type_1 img,
	.part_2 .item5_focus .type_1 img,.part_2 .item6_focus .type_1 img,.part_2 .item7_focus .type_1 img
	{
		width:479px;
		height:233px;
		z-index:666;
	}
	.part_1 .item0_focus .type_1,.part_1 .item1_focus .type_1,.part_1 .item2_focus .type_1,.part_1 .item3_focus .type_1,.part_1 .item4_focus .type_1,
	.part_1 .item5_focus .type_1,.part_1 .item6_focus .type_1,.part_1 .item7_focus .type_1,
	.part_2 .item0_focus .type_1,.part_2 .item1_focus .type_1,.part_2 .item2_focus .type_1,.part_2 .item3_focus .type_1,.part_2 .item4_focus .type_1,
	.part_2 .item5_focus .type_1,.part_2 .item6_focus .type_1,.part_2 .item7_focus .type_1
	{
		position:absolute;
		left:-22px;
		top:-12px;
		width:479px;
		height:233px;
		border:2px solid #00f8f8;
		z-index:999;
	}
	.part_1 .item0_focus .type_0 img,.part_1 .item1_focus .type_0 img,.part_1 .item2_focus .type_0 img,.part_1 .item3_focus .type_0 img,.part_1 .item4_focus .type_0 img,
	.part_1 .item5_focus .type_0 img,.part_1 .item6_focus .type_0 img,.part_1 .item7_focus .type_0 img,
	.part_2 .item0_focus .type_0 img,.part_2 .item1_focus .type_0 img,.part_2 .item2_focus .type_0 img,.part_2 .item3_focus .type_0 img,.part_2 .item4_focus .type_0 img,
	.part_2 .item5_focus .type_0 img,.part_2 .item6_focus .type_0 img,.part_2 .item7_focus .type_0 img
	{
		height:479px;
		width:233px;
		z-index:666;
	}
	.part_1 .item0_focus .type_0,.part_1 .item1_focus .type_0,.part_1 .item2_focus .type_0,.part_1 .item3_focus .type_0,.part_1 .item4_focus .type_0,
	.part_1 .item5_focus .type_0,.part_1 .item6_focus .type_0,.part_1 .item7_focus .type_0,
	.part_2 .item0_focus .type_0,.part_2 .item1_focus .type_0,.part_2 .item2_focus .type_0,.part_2 .item3_focus .type_0,.part_2 .item4_focus .type_0,
	.part_2 .item5_focus .type_0,.part_2 .item6_focus .type_0,.part_2 .item7_focus .type_0
	{
		position:absolute;
		top:-22px;
		left:-12px;
		height:479px;
		width:233px;
		border:2px solid #00f8f8;
		z-index:888;
		border-radius:28px;
	}
	.type_0_txt, .type_1_txt, .type_2_txt{
		position: absolute;
		top: 165px;
		width:213px;
		height:48px;
		text-align:center;
		line-height:48px;
		color:#fff;
		background:url("images/part1_txtbg_g.png") no-repeat;
		border-bottom-left-radius:26px;
		border-bottom-right-radius:26px;
	}
	.type_1_1_txt {
		position: absolute;
		top: 165px;
		width:440px;
		height:55px;
		text-align:center;
		line-height:48px;
		color:#fff;
		background:url("images/part1_txtbg_g.png") no-repeat;
		background-size: 100%;
		border-bottom-left-radius:26px;
		border-bottom-right-radius:26px;
	}
	.part_1 .right_side .item0_focus .type_1_1_txt {
		position: absolute;
		top: 178px;
		width:479px;
		height:55px;
		text-align:center;
		line-height:48px;
		color:#fff;
		background:url("images/part1_txtbg_g.png") no-repeat;
		background-size: 100%;
		border-bottom-left-radius:26px;
		border-bottom-right-radius:26px;
	}
	.item0 .type_2_txt,.item1 .type_2_txt,.item4 .type_2_txt,.item5 .type_2_txt,
	.item0 .type_0_txt,.item1 .type_0_txt,.item4 .type_0_txt,.item5 .type_0_txt{
		background:url("images/part1_txtbg_b.png") no-repeat;
	}
	.part_1 .left_side .item_focus .type_2 .type_2_txt,.part_2 .left_side .item_focus .type_2 .type_2_txt{
		position:absolute;
		top:171px;
		left:-10px;
		width:233px;
		height:52px;
		z-index:999;
		background-size:233px 52px;
	}
	.part_1 .left_side .item_focus .type_2 .type_1_txt,.part_1 .left_side .item_focus .type_1 .type_1_txt{
		position:absolute;
		top:171px;
		left:-10px;
		width:233px;
		height:52px;
		z-index:999;
		background-size:233px 52px;
	}
	.part_1 .item0_focus .type_2 .type_2_txt,.part_1 .item1_focus .type_2 .type_2_txt,.part_1 .item2_focus .type_2 .type_2_txt,.part_1 .item3_focus .type_2 .type_2_txt,.part_1 .item4_focus .type_2 .type_2_txt,
	.part_1 .item5_focus .type_2 .type_2_txt,.part_1 .item6_focus .type_2 .type_2_txt,.part_1 .item7_focus .type_2 .type_2_txt,
	.part_2 .item0_focus .type_2 .type_2_txt,.part_2 .item1_focus .type_2 .type_2_txt,.part_2 .item2_focus .type_2 .type_2_txt,.part_2 .item3_focus .type_2 .type_2_txt,.part_2 .item4_focus .type_2 .type_2_txt,
	.part_2 .item5_focus .type_2 .type_2_txt,.part_2 .item6_focus .type_2 .type_2_txt,.part_2 .item7_focus .type_2 .type_2_txt
	{
		position:absolute;
		top:181px;
		left:0px;
		width:233px;
		height:52px;
		z-index:999;
		background-size:233px 52px;
	}
	.type_0_txt{
		top: 392px;
		text-align: center;
	}
	.part_1 .left_side .item_focus .type_0 .type_0_txt,.part_2 .left_side .item_focus .type_0 .type_0_txt{
		position:absolute;
		top:427px;
		left:0px;
		width:233px;
		height:52px;
		z-index:999;
		background-size:233px 52px;
	}
	.part_1 .item0_focus .type_0 .type_0_txt,.part_1 .item1_focus .type_0 .type_0_txt,.part_1 .item2_focus .type_0 .type_0_txt,.part_1 .item3_focus .type_0 .type_0_txt,.part_1 .item4_focus .type_0 .type_0_txt,
	.part_1 .item5_focus .type_0 .type_0_txt,.part_1 .item6_focus .type_0 .type_0_txt,.part_1 .item7_focus .type_0 .type_0_txt,
	.part_2 .item0_focus .type_0 .type_0_txt,.part_2 .item1_focus .type_0 .type_0_txt,.part_2 .item2_focus .type_0 .type_0_txt,.part_2 .item3_focus .type_0 .type_0_txt,.part_2 .item4_focus .type_0 .type_0_txt,
	.part_2 .item5_focus .type_0 .type_0_txt,.part_2 .item6_focus .type_0 .type_0_txt,.part_2 .item7_focus .type_0 .type_0_txt
	{
		position:absolute;
		top:427px;
		left:0px;
		width:233px;
		height:52px;
		z-index:999;
		background-size:233px 52px;
	}
	/***part2***/
	#area45_0.item img,#area46_0.item img{
		width:213px;
		height:213px;
		border-radius:26px;
	}
	#area45_0.item,#area46_0.item{
		position:absolute;
		border-radius:28px;
		width:213px;
		height:213px;
		box-shadow:6px 6px 8px rgba(0,0,0,0.4);
	}
	#area45_0.item_focus img,#area46_0.item_focus img{
		width:233px;
		height:233px;
	}
	#area45_0.item_focus,#area46_0.item_focus{
		position:absolute;
		left:-12px;
		top:-12px;
		position:absolute;
		width:233px;
		height:233px;
		border:2px solid #00f8f8;
		z-index:999;
	}
	.part_2 .type_1_txt{
		width:439px;
		height:56px;
		line-height:56px;
		background:url(images/txtbg_b.png);
	}
	.part_2 .item0 .type_1_txt,.part_2 .item1 .type_1_txt,.part_2 .item4 .type_1_txt,.part_2 .item5 .type_1_txt{
		background:url(images/txtbg_g.png);

	}
	.part_2 .item0_focus .type_1 .type_1_txt,.part_2 .item1_focus .type_1 .type_1_txt,.part_2 .item2_focus .type_1 .type_1_txt,.part_2 .item3_focus .type_1 .type_1_txt,.part_2 .item4_focus .type_1 .type_1_txt,
	.part_2 .item5_focus .type_1 .type_1_txt,.part_2 .item6_focus .type_1 .type_1_txt,.part_2 .item7_focus .type_1 .type_1_txt
	{
		position:absolute;
		top:178px;
		left:0px;
		width:479px;
		z-index:999;
		background-size:479px 56px;
	}
	/***part3_视频中心***/
	.videoCenter{position:absolute;left:36px;top:-16px;width:1250px;height:550px;}
/* .videoCenter .item{position:absolute;width:258px;height:240px;}
.videoCenter .item .videoCenterImg{position:absolute;top:10px;left:10px;width:258px;height:187px;box-shadow:6px 6px 8px rgba(0,0,0,0.4);border-radius:24px;}
.videoCenter .item .videoCenterTxt{position:absolute;top:187px;left:0px;width:258px;line-height:56px;font-size:22px;text-align:center;color:#dfdfdf;}
.videoCenter .item_focus{width:278px;height:207px;border:2px solid #00f8f8;border-radius:26px;box-shadow:6px 6px 8px rgba(0,0,0,0.4);}
.videoCenter .item_focus .videoCenterImg{top:0px;left:0px;width:278px;height:207px;box-shadow:none}
.videoCenter .item_focus .videoCenterTxt{top:195px;left:-10px;width:278px;line-height:46px;font-weight:bold;color:#fff;} */
.videoCenter .box_0 .item {position:absolute;width:493px;height:506px;padding:2px;}
.videoCenter .box_1 .item{position:absolute;width:493px;height:256px;padding:2px;}
.videoCenter .box_2 .item{position:absolute;width:249px;height:256px;padding:2px;}
.videoCenter .box_3 .item{position:absolute;width:249px;height:506px;padding:2px;}
.videoCenter .box_0 .item_focus{padding:0;border:2px solid #00f8f8;border-radius:26px;box-shadow:6px 6px 8px rgba(0,0,0,0.4);}
.videoCenter .box_1 .item_focus{padding:0;border:2px solid #00f8f8;border-radius:26px;box-shadow:6px 6px 8px rgba(0,0,0,0.4);}
.videoCenter .box_2 .item_focus{padding:0;border:2px solid #00f8f8;border-radius:26px;box-shadow:6px 6px 8px rgba(0,0,0,0.4);}
.videoCenter .box_3 .item_focus{padding:0;border:2px solid #00f8f8;border-radius:26px;box-shadow:6px 6px 8px rgba(0,0,0,0.4);}
.videoCenter .box_0 .item .videoCenterImg{position:absolute;width:477px;height:490px;top:10px;left:10px;border-radius:24px;box-shadow:6px 6px 8px rgba(0,0,0,0.4);}
.videoCenter .box_1 .item .videoCenterImg{position:absolute;width:477px;height:240px;top:10px;left:10px;border-radius:24px;box-shadow:6px 6px 8px rgba(0,0,0,0.4);}
.videoCenter .box_2 .item .videoCenterImg{position:absolute;width:233px;height:240px;top:10px;left:10px;border-radius:24px;box-shadow:6px 6px 8px rgba(0,0,0,0.4);}
.videoCenter .box_3 .item .videoCenterImg{position:absolute;width:233px;height:490px;top:10px;left:10px;border-radius:24px;box-shadow:6px 6px 8px rgba(0,0,0,0.4);}
.videoCenter .box_0 .item_focus .videoCenterImg{position:absolute;width:493px;height:506px;top:0px;left:0px;border-radius:24px;box-shadow:none;}
.videoCenter .box_1 .item_focus .videoCenterImg{position:absolute;width:493px;height:256px;top:0px;left:0px;border-radius:24px;box-shadow:none;}
.videoCenter .box_2 .item_focus .videoCenterImg{position:absolute;width:249px;height:256px;top:0px;left:0px;border-radius:24px;box-shadow:none;}
.videoCenter .box_3 .item_focus .videoCenterImg{position:absolute;width:249px;height:506px;top:0px;left:0px;border-radius:24px;box-shadow:none;}
/***part4_搜索***/
.searchAll{
	position:absolute;left:75px;top:0;width:1130px;height:492px;color:#f2f2f2;text-align:center;
	background:url(images/search_bg_0.png) no-repeat;
}
.searchButtonTitle{width:313px;line-height:60px;font-size:20px;font-weight:bold;border-top-left-radius:24px;border-top-right-radius:24px;background:url(images/search_titlebg.png)}
.searchBox{position:absolute;left:16px;top:76px;width:284px;height:52px;background:url(images/search_txt.png) no-repeat;}
.searchBox .search_txt{width:274px;line-height:52px;font-size:24px;text-align:left;margin-left:10px;}
.searchButtonNum{position:absolute;left:16px;top:148px;width:282px;height:330px;}
.searchButtonNum .item{position:absolute;width:79px;height:73px;background:url(images/keyboard_item.png) no-repeat;}
.searchButtonNum .item_focus{position:absolute;width:79px;height:73px;background:url(images/keyboard_focus.png) no-repeat;}
.searchButtonNum .num{position:absolute;top:3px;width:79px;color:#9b94ba;font-size:33px;text-align:center;}
.searchButtonNum .words{position:absolute;top:38px;width:79px;color:#FFF;font-size:21px;text-align:center;}
.searchButtonFocus{position:absolute;width:104px;height:104px;background:url(images/keyboard_open_bg.png) no-repeat;}
.searchButtonFocus .item{
	position:absolute;width:33px;height:33px;color:#FFF;text-align:center;font-size:25px;
	background:url(images/keyboard_open_item.png) no-repeat;
}
.searchButtonFocus .item_focus{background:url(images/keyboard_open_focus.png) no-repeat;}
.searchResult{position:absolute;left:325px;top:0;width:804px;height:492px;}
.searchResult .searchResultTitle{color:#b3add5;width:180px;line-height:67px;font-size:28px;}
.searchResult .item{position:absolute;width:101px;height:155px;}
.searchResult .item .searchResultImg{position:absolute;top:0px;left:0px;width:101px;height:100px;box-shadow:5px 5px 15px #333;}
.searchResult .item .searchResultTxt{position:absolute;top:120px;left:0px;width:101px;height:50px;font-size:16px;text-align:center;}
.searchResult .item_focus .searchResultImg{top:-7px;left:-7px;width:111px;height:110px;border:2px solid #00f8f8;border-radius:10px;}
.searchResult .item_focus .searchResultTxt{font-weight:bold;}
/***part5_系统***/
.userCenter{position:absolute;left:84px;}
.userCenter .item,._area34 .item #mailNum,.userCenter .item img{position:absolute;}
.userCenter .item img{left:12px;top:12px;box-shadow:6px 6px 8px rgba(0,0,0,0.4);;border-radius:24px;}
.userCenter .item_focus img{left:0px;top:0px;box-shadow:none}
.userCenter .item_focus{border:2px solid #00f8f8;box-shadow:6px 6px 8px rgba(0,0,0,0.4);border-radius:26px;}
._area34 .item #mailNum{left:133px;top:352px;color:#e3d4f5;font-size:27px;}
._area34 .item_focus #mailNum{left:132px;top:354px;font-size:30px;}
._area34 .item img,
._area36 .item img{width:213px;height:439px;}
._area34 .item_focus img,
._area36 .item_focus img{width:233px;height:459px;}
._area34 .item_focus,
._area36 .item_focus{width:233px;height:459px;}
._area35 .item img{width:439px;height:213px;}
._area35 .item_focus img{width:459px;height:233px;}
/******广告位******/
.ad_position{position:absolute;left:82px;top:36px;border:4px solid #7f997f;border-radius:24px;width:1120px;height:644px;background-color:rgba(0,0,0,0.6);}
/**********今日任务************/
.task{position:absolute;width:1280px;height:720px;background:url(images/task_bg.png) no-repeat;}
#area61_0{
	position:absolute;
	background:url(images/tips.png) no-repeat;
	width:1280px;
	height:152px;
	text-align:center;
	line-height:152px;
	color:#FFF;
	font-size:38px;
	top:284px;
}
#area62_0.item{
	position: absolute;
	background: url(images/kapai/home_jp.png) no-repeat;
	width: 169px;
	height: 91px;
	text-align: center;
	line-height: 115px;
	left: 480px;
}

#area62_0.item_focus {
	background: url(images/kapai/home_jp-h.png) no-repeat;
}

#area62_1.item {
	position: absolute;
	background: url(images/kapai/home_qd.png) no-repeat;
	width: 169px;
	height: 91px;
	text-align: center;
	line-height: 115px;
	left: 620px;
}

#area62_1.item_focus {
	background: url(images/kapai/home_qd-h.png) no-repeat;
}

#has_times.normal {
	display: none;
	position: absolute;
	background: url(images/kapai/dian.png) no-repeat;
	width: 18px;
	height: 18px;
	left: 134px;
	top: 20px;
}

#has_times.focus {
	left: 145px;
	top: 17px;
}

#award_icon.normal {
	display: none;
	position: absolute;
	background: url(images/kapai/dian.png) no-repeat;
	width: 18px;
	height: 18px;
	left: 134px;
	top: 20px;
}

#award_icon.focus {
	left: 145px;
	top: 17px;
}
</style>
</head>
<body>
	<div class="bg">
		<img style="position:absolute;" id="bg" src="images/bg.png" width="1280" height="720">
		<div class="user_name">
			<div class="head_img">
				<img src="images/icon02.png"/>
			</div>
			<div id="user_name" class="name">0</div>
		</div>
		<div class="user_money">
			<div class="money_img">
				<img src="images/money.png"/>
			</div>
			<div class="money">0</div>
		</div>
		<div class="ping"><img src="images/wifi.png"/></div>
		<div class="time" id="time_c">12:00</div>
		<div class="loge"><img src="images/logo.png"/></div>
		<div class="nav">
			<div id="area0_0" class="item">
				<div class="nav_txt"></div>
			</div>
			<div id="area0_1" class="item">
				<div class="nav_txt"></div>
			</div>
			<div id="area0_2" class="item">
				<div class="nav_txt"></div>
			</div>
			<div id="area0_3" class="item">
				<div class="nav_txt"></div>
			</div>
			<div id="area0_4" class="item">
				<div class="nav_txt"></div>
			</div>
			<div id="area0_5" class="item">
				<div class="nav_txt"></div>
			</div>
		</div>

		<div id="content" class="content" style="left:0px;">
			<div class="part_0" style="position:absolute;overflow:hidden;width:1280px;height:500px;padding-top:40px;top:-40px;">
				<div class="part_0_content" id="part_0_content" style="left:0px;">
					<!--左右箭头-->
					<img id="part_0_arrows_lt" src="images/arrows_lt.png" width="41" height="81" style="position:absolute; left:1290px; top:181px;display:block"/>
					<img id="part_0_arrows_rt" src="images/arrows_rt.png" width="41" height="81" style="position:absolute; left:1200px; top:181px;display:none"/>
					<div class="left_side">
						<div id="area1_0" class="item "><img src="images/con_nav0.png"/></div>
						<div id="area1_1" class="item "><img src="images/con_nav1.png"/></div>
						<div id="area1_2" class="item "><img src="images/con_nav2.png"/></div>
					</div>
					<div class="right_side">
						<div id="area2_0" class="item0">
							<div class="type_0" id="area2_div0" style="display:none">
								<img id="area2_img0" src="images/bg.png" />
								<div id="area2_txt" class="txt_bg_g"></div>
							</div>
						</div>
						<div id="area3_0" class="item1">
							<div class="type_3" id="area3_div0" style="display:none">
								<img id="area3_img0" src="images/bg.png" />
								<div id="area3_txt" class="txt_bg_g"> </div>
							</div>
						</div>
						<div id="area4_0" class="item2">
							<div class="type_3" id="area4_div0" style="display:none">
								<img id="area4_img0" src="images/bg.png" />
								<div id="area4_txt" class="txt_bg_b"> </div>
							</div>
						</div>
						<div id="area5_0" class="item3">
							<div class="type_3" id="area5_div0" style="display:none">
								<img id="area5_img0" src="images/bg.png" />
								<div id="area5_txt" class="txt_bg_g"> </div>
							</div>
						</div>
						<div id="area6_0" class="item4">
							<div class="type_3" id="area6_div0" style="display:none">
								<img id="area6_img0" src="images/bg.png" />
								<div id="area6_txt" class="txt_bg_g"> </div>
							</div>
						</div>
						<div id="area7_0" class="item5">
							<div class="type_3" id="area7_div0" style="display:none">
								<img id="area7_img0" src="images/bg.png" />
								<div id="area7_txt" class="txt_bg_b"> </div>
							</div>
						</div>
						<div id="area8_0" class="item6">
							<div class="type_3" id="area8_div0" style="display:none">
								<img id="area8_img0" src="images/bg.png" />
								<div id="area8_txt" class="txt_bg_g"> </div>
							</div>
						</div>
						<div id="area9_0" class="item7">
							<div class="type_3" id="area9_div0" style="display:none">
								<img id="area9_img0" src="images/bg.png" />
								<div id="area9_txt" class="txt_bg_g"> </div>
							</div>
						</div>
						<div id="area10_0" class="item8">
							<div class="type_3" id="area10_div0" style="display:none">
								<img id="area10_img0" src="images/bg.png" />
								<div id="area10_txt" class="txt_bg_b"> </div>
							</div>
						</div>
						<div id="area11_0" class="item9">
							<div class="type_3" id="area11_div0" style="display:none">
								<img id="area11_img0" src="images/bg.png" />
								<div id="area11_txt" class="txt_bg_g"> </div>
							</div>
						</div>
						<div id="area12_0" class="item10">
							<div class="type_3" id="area12_div0" style="display:none">
								<img id="area12_img0" src="images/bg.png" />
								<div id="area12_txt" class="txt_bg_g"> </div>
							</div>
						</div>
						<div id="area13_0" class="item11">
							<div class="type_3" id="area13_div0" style="display:none">
								<img id="area13_img0" src="images/bg.png" />
								<div id="area13_txt" class="txt_bg_b"> </div>
							</div>
						</div>
						<div id="area14_0" class="item12">
							<div class="type_3" id="area14_div0" style="display:none">
								<img id="area14_img0" src="images/bg.png" />
								<div id="area14_txt" class="txt_bg_g"> </div>
							</div>
						</div>
						<div id="area15_0" class="item13">
							<div class="type_3" id="area15_div0" style="display:none">
								<img id="area15_img0" src="images/bg.png" />
								<div id="area15_txt" class="txt_bg_g"> </div>
							</div>
						</div>
						<div id="area16_0" class="item14">
							<div class="type_3" id="area16_div0" style="display:none">
								<img id="area16_img0" src="images/bg.png" />
								<div id="area16_txt" class="txt_bg_b"> </div>
							</div>
						</div>
						<div id="area17_0" class="item15">
							<div class="type_3" id="area17_div0" style="display:none">
								<img id="area17_img0" src="images/bg.png" />
								<div id="area17_txt" class="txt_bg_g"> </div>
							</div>
						</div>
						<div id="area18_0" class="item16">
							<div class="type_3" id="area18_div0" style="display:none">
								<img id="area18_img0" src="images/bg.png" />
								<div id="area18_txt" class="txt_bg_g"> </div>
							</div>
						</div>
						<div id="area19_0" class="item17">
							<div class="type_3" id="area19_div0" style="display:none">
								<img id="area19_img0" src="images/bg.png" />
								<div id="area19_txt" class="txt_bg_b"> </div>
							</div>
						</div>
						<div id="area20_0" class="item18">
							<div class="type_3" id="area20_div0" style="display:none">
								<img id="area20_img0" src="images/bg.png" />
								<div id="area20_txt" class="txt_bg_g"> </div>
							</div>
						</div>
						<div id="area21_0" class="item19">
							<div class="type_3" id="area21_div0" style="display:none">
								<img id="area21_img0" src="images/bg.png" />
								<div id="area21_txt" class="txt_bg_g"> </div>
							</div>
						</div>
						<div id="area22_0" class="item20">
							<div class="type_3" id="area22_div0" style="display:none">
								<img id="area22_img0" src="images/bg.png" />
								<div id="area22_txt" class="txt_bg_b"> </div>
							</div>
						</div>
						<div id="area23_0" class="item21">
							<div class="type_3" id="area23_div0" style="display:none">
								<img id="area23_img0" src="images/bg.png" />
								<div id="area23_txt" class="txt_bg_g"> </div>
							</div>
						</div>
						<div id="area24_0" class="item22">
							<div class="type_3" id="area24_div0" style="display:none">
								<img id="area24_img0" src="images/bg.png" />
								<div id="area24_txt" class="txt_bg_g"> </div>
							</div>
						</div>
						<div id="area25_0" class="item23">
							<div class="type_3" id="area25_div0" style="display:none">
								<img id="area25_img0" src="images/bg.png" />
								<div id="area25_txt" class="txt_bg_b"> </div>
							</div>
						</div>
						<div id="area26_0" class="item24">
							<div class="type_3" id="area26_div0" style="display:none">
								<img id="area26_img0" src="images/bg.png" />
								<div id="area26_txt" class="txt_bg_g"> </div>
							</div>
						</div>
						<div id="area27_0" class="item25">
							<div class="type_3" id="area27_div0" style="display:none">
								<img id="area27_img0" src="images/bg.png" />
								<div id="area27_txt" class="txt_bg_g"> </div>
							</div>
						</div>
						<div id="area28_0" class="item26">
							<div class="type_3" id="area28_div0" style="display:none">
								<img id="area28_img0" src="images/bg.png" />
								<div id="area28_txt" class="txt_bg_b"> </div>
							</div>
						</div>
						<div id="area29_0" class="item27">
							<div class="type_3" id="area29_div0" style="display:none">
								<img id="area29_img0" src="images/bg.png" />
								<div id="area29_txt" class="txt_bg_g"> </div>
							</div>
						</div>
						<div id="area30_0" class="item28">
							<div class="type_3" id="area30_div0" style="display:none">
								<img id="area30_img0" src="images/bg.png" />
								<div id="area30_txt" class="txt_bg_g"> </div>
							</div>
						</div>
						<div id="area31_0" class="item29">
							<div class="type_3" id="area31_div0" style="display:none">
								<img id="area31_img0" src="images/bg.png" />
								<div id="area31_txt" class="txt_bg_b"> </div>
							</div>
						</div>
						<div id="area32_0" class="item30">
							<div class="type_3" id="area32_div0" style="display:none">
								<img id="area32_img0" src="images/bg.png" />
								<div id="area32_txt" class="txt_bg_g"> </div>
							</div>
						</div>
						<div id="area33_0" class="item31">
							<div class="type_3" id="area33_div0" style="display:none">
								<img id="area33_img0" src="images/bg.png" />
								<div id="area33_txt" class="txt_bg_g"> </div>
							</div>
						</div>
						<div id="area34_0" class="item32">
							<div class="type_3" id="area34_div0" style="display:none">
								<img id="area34_img0" src="images/bg.png" />
								<div id="area34_txt" class="txt_bg_b"> </div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="part_1">
				<div class="left_side" style="position:absolute;left:72px;toP:-20px;">
					<div id="area35_0" class="item">
						<div class="type_0" id="area35_div0" style="display:none">
							<img id="area35_img0" src="images/bg.png" />
							<div id="area35_type0_txt" class="type_0_txt">大话西游</div>
						</div>
						<div class="type_1" id="area35_div1" style="display:none">
							<img id="area35_img1" src="images/bg.png" />
							<div id="area35_type1_txt" class="type_1_txt">大话西游</div>
						</div>
						<div class="type_2" id="area35_div2" style="display:none">
							<img id="area35_img2" src="images/bg.png" />
							<div id="area35_type2_txt" class="type_2_txt">大话西游</div>
						</div>
					</div>
					<div id="area36_0" class="item" style="position:absolute;top:229px">
						<div class="type_1" id="area36_div1" style="display:none">
							<img id="area36_img1" src="images/bg.png" />
							<div id="area36_type1_txt" class="type_1_txt">大话西游</div>
						</div>
						<div class="type_2" id="area36_div2" style="display:none">
							<img id="area36_img2" src="images/bg.png" />
							<div id="area36_type2_txt" class="type_2_txt">大话西游</div>
						</div>
					</div>
				</div>
				<div class="right_side" style="position:absolute;left:300px;">
					<div id="area37_0" class="item0">
						<div class="type_0" id="area37_div0" style="display:none">
							<img id="area37_img0" src="images/bg.png" />
							<div id="area37_type0_txt" class="type_0_txt">大话西游</div>
						</div>
						<div class="type_1" id="area37_div1" style="display:none">
							<img id="area37_img1" src="images/bg.png" />
							<div id="area37_type1_txt" class="type_1_1_txt">大话西游</div>
						</div>
						<div class="type_2" id="area37_div2" style="display:none">
							<img id="area37_img2" src="images/bg.png" />
							<div id="area37_type2_txt" class="type_2_txt">大话西游</div>
						</div>
					</div>
					<div id="area38_0" class="item1">
						<div class="type_1" id="area38_div1" style="display:none">
							<img id="area38_img1" src="images/bg.png" />
							<div id="area38_type1_txt" class="type_1_txt">大话西游</div>
						</div>
						<div class="type_2" id="area38_div2" style="display:none">
							<img id="area38_img2" src="images/bg.png" />
							<div id="area38_type2_txt" class="type_2_txt">大话西游</div>
						</div>
					</div>
					<div id="area39_0" class="item2">
						<div class="type_0" id="area39_div0" style="display:none">
							<img id="area39_img0" src="images/bg.png" />
							<div id="area39_type0_txt" class="type_0_txt">大话西游</div>
						</div>
						<div class="type_1" id="area39_div1" style="display:none">
							<img id="area39_img1" src="images/bg.png" />
							<div id="area39_type1_txt" class="type_1_txt">大话西游</div>
						</div>
						<div class="type_2" id="area39_div2" style="display:none">
							<img id="area39_img2" src="images/bg.png" />
							<div id="area39_type2_txt" class="type_2_txt">大话西游</div>
						</div>
					</div>
					<div id="area40_0" class="item3">
						<div class="type_1" id="area40_div1" style="display:none">
							<img id="area40_img1" src="images/bg.png" />
							<div id="area40_type1_txt" class="type_1_txt">大话西游</div>
						</div>
						<div class="type_2" id="area40_div2" style="display:none">
							<img id="area40_img2" src="images/bg.png" />
							<div id="area40_type2_txt" class="type_2_txt">大话西游</div>
						</div>
					</div>
					<div id="area41_0" class="item4">
						<div class="type_0" id="area41_div0" style="display:none">
							<img id="area41_img0" src="images/bg.png" />
							<div id="area41_type0_txt" class="type_0_txt">大话西游</div>
						</div>
						<div class="type_1" id="area41_div1" style="display:none">
							<img id="area41_img1" src="images/bg.png" />
							<div id="area41_type1_txt" class="type_1_txt">大话西游</div>
						</div>
						<div class="type_2" id="area41_div2" style="display:none">
							<img id="area41_img2" src="images/bg.png" />
							<div id="area41_type2_txt" class="type_2_txt">大话西游</div>
						</div>
					</div>
					<div id="area42_0" class="item5">
						<div class="type_1" id="area42_div1" style="display:none">
							<img id="area42_img1" src="images/bg.png" />
							<div id="area42_type1_txt" class="type_1_txt">大话西游</div>
						</div>
						<div class="type_2" id="area42_div2" style="display:none">
							<img id="area42_img2" src="images/bg.png" />
							<div id="area42_type2_txt" class="type_2_txt">大话西游</div>
						</div>
					</div>
					<div id="area43_0" class="item6">
						<div class="type_0" id="area43_div0" style="display:none">
							<img id="area43_img0" src="images/bg.png" />
							<div id="area43_type0_txt" class="type_0_txt">大话西游</div>
						</div>
						<div class="type_2" id="area43_div2" style="display:none">
							<img id="area43_img2" src="images/bg.png" />
							<div id="area43_type2_txt" class="type_2_txt">大话西游</div>
						</div>
					</div>
					<div id="area44_0" class="item7">
						<div class="type_2" id="area44_div2" style="display:none">
							<img id="area44_img2" src="images/bg.png" />
							<div id="area44_type2_txt" class="type_2_txt">大话西游</div>
						</div>
					</div>
				</div>
			</div>
			<div class="part_2">
				<div class="left_side" style="position:absolute;left:72px;top:-20px;">
					<div id="area45_0" class="item">
						<img id="area45_img2" class="type_2" src="images/icon_ctr.png" style="display:block"/>
					</div>
					<div id="area46_0" class="item" style="position:absolute;top:229px">
						<img id="area46_img2" class="type_2" src="images/icon_hand.png" style="display:block"/>
					</div>
				</div>
				<div class="right_side" style="position:absolute;left:300px;">
					<div id="area47_0" class="item0">
						<div class="type_0" id="area47_div0" style="display:none">
							<img id="area47_img0" src="images/bg.png" />
							<div id="area47_type0_txt" class="type_0_txt">大话西游</div>
						</div>
						<div class="type_1" id="area47_div1" style="display:none">
							<img id="area47_img1" src="images/bg.png" />
							<div id="area47_type1_txt" class="type_1_txt">大话西游</div>
						</div>
						<div class="type_2" id="area47_div2" style="display:none">
							<img id="area47_img2" src="images/bg.png" />
							<div id="area47_type2_txt" class="type_2_txt">大话西游</div>
						</div>
					</div>
					<div id="area48_0" class="item1">
						<div class="type_1" id="area48_div1" style="display:none">
							<img id="area48_img1" src="images/bg.png" />
							<div id="area48_type1_txt"class="type_1_txt">大话西游</div>
						</div>
						<div class="type_2" id="area48_div2" style="display:none">
							<img id="area48_img2" src="images/bg.png" />
							<div id="area48_type2_txt" class="type_2_txt">大话西游</div>
						</div>
					</div>
					<div id="area49_0" class="item2">
						<div class="type_0" id="area49_div0" style="display:none">
							<img id="area49_img0" src="images/bg.png" />
							<div id="area49_type0_txt" class="type_0_txt">大话西游</div>
						</div>
						<div class="type_1" id="area49_div1" style="display:none">
							<img id="area49_img1" src="images/bg.png" />
							<div id="area49_type1_txt"class="type_1_txt">大话西游</div>
						</div>
						<div class="type_2" id="area49_div2" style="display:none">
							<img id="area49_img2" src="images/bg.png" />
							<div id="area49_type2_txt" class="type_2_txt">大话西游</div>
						</div>
					</div>
					<div id="area50_0" class="item3">
						<div class="type_1" id="area50_div1" style="display:none">
							<img id="area50_img1" src="images/bg.png" />
							<div id="area50_type1_txt"class="type_1_txt">大话西游</div>
						</div>
						<div class="type_2" id="area50_div2" style="display:none">
							<img id="area50_img2" src="images/bg.png" />
							<div id="area50_type2_txt" class="type_2_txt">大话西游</div>
						</div>
					</div>
					<div id="area51_0" class="item4">
						<div class="type_0" id="area51_div0" style="display:none">
							<img id="area51_img0" src="images/bg.png" />
							<div id="area51_type0_txt" class="type_0_txt">大话西游</div>
						</div>
						<div class="type_1" id="area51_div1" style="display:none">
							<img id="area51_img1" src="images/bg.png" />
							<div id="area51_type1_txt" class="type_1_txt">大话西游</div>
						</div>
						<div class="type_2" id="area51_div2" style="display:none">
							<img id="area51_img2" src="images/bg.png" />
							<div id="area51_type2_txt" class="type_2_txt">大话西游</div>
						</div>
					</div>
					<div id="area52_0" class="item5">
						<div class="type_1" id="area52_div1" style="display:none">
							<img id="area52_img1" src="images/bg.png" />
							<div id="area52_type1_txt" class="type_1_txt">大话西游</div>
						</div>
						<div class="type_2" id="area52_div2" style="display:none">
							<img id="area52_img2" src="images/bg.png" />
							<div id="area52_type2_txt" class="type_2_txt">大话西游</div>
						</div>
					</div>
					<div id="area53_0" class="item6">
						<div class="type_0" id="area53_div0" style="display:none">
							<img id="area53_img0" src="images/bg.png" />
							<div id="area53_type0_txt" class="type_0_txt">大话西游</div>
						</div>
						<div class="type_2" id="area53_div2" style="display:none">
							<img id="area53_img2" src="images/bg.png" />
							<div id="area53_type2_txt" class="type_2_txt">大话西游</div>
						</div>
					</div>
					<div id="area54_0" class="item7">
						<div class="type_2" id="area54_div2" style="display:none">
							<img id="area54_img2" src="images/bg.png" />
							<div id="area54_type2_txt" class="type_2_txt">大话西游</div>
						</div>
					</div>
				</div>
			</div>
			<div class="part_3">
				<div class="videoCenter">
					<div class="box_0">
						<div class="item" style="top:-10px;left:-10px;" id="area55_0">
							<img id="area55_img_0" class="videoCenterImg" src="images/bg.png"/>
						</div>
					</div>
					<div class="box_1">
						<div class="item" style="top:-10px;left:477px;" id="area63_0">
							<img id="area63_img_0" class="videoCenterImg" src="images/bg.png"/>
						</div>
					</div>
					<div class="box_2">
						<div class="item" style="top:240px;left:477px;" id="area64_0">
							<img id="area64_img_0" class="videoCenterImg" src="images/bg.png"/>
						</div>
						<div class="item" style="top:240px;left:721px;" id="area64_1">
							<img id="area64_img_1" class="videoCenterImg" src="images/bg.png"/>
						</div>
					</div>
					<div class="box_3">
						<div class="item" style="top:-10px;left:964px;" id="area65_0">
							<img id="area65_img_0" class="videoCenterImg" src="images/bg.png"/>
						</div>
					</div>
				</div>
			</div>
			<div class="part_4">
				<div class="searchAll">
					<div class="searchButtonTitle">支持"拼音首字母"搜索</div>
					<div class="searchBox">
						<img src="images/search.png" width="35px" height="43px" style="position:absolute;top:5px;left:245px;"/>
						<div id="search_txt" class="search_txt"></div>
					</div>
					<div class="searchButtonNum">
						<div class="item" style="left:0px;top:0px;" id="area56_0">
							<div class="num">1</div>
							<div class="words"></div>
						</div>
						<div class="item" style="left:101px;top:0px;" id="area56_1">
							<div class="num">2</div>
							<div class="words">ABC</div>
						</div>
						<div class="item" style="left:203px; top:0px;" id="area56_2">
							<div class="num">3</div>
							<div class="words">DEF</div>
						</div>
						<div class="item" style="left:0px;top:85px;" id="area56_3">
							<div class="num">4</div>
							<div class="words">GHI</div>
						</div>
						<div class="item" style="left:101px;top:85px;" id="area56_4">
							<div class="num">5</div>
							<div class="words">JKL</div>
						</div>
						<div class="item" style="left:203px;top:85px;" id="area56_5">
							<div class="num">6</div>
							<div class="words">MNO</div>
						</div>
						<div class="item" style="left:0px;top:170px;" id="area56_6">
							<div class="num">7</div>
							<div class="words">PQRS</div>
						</div>
						<div class="item" style="left:101px;top:170px;" id="area56_7">
							<div class="num">8</div>
							<div class="words">TUV</div>
						</div>
						<div class="item" style="left:203px;top:170px;" id="area56_8">
							<div class="num">9</div>
							<div class="words">WXYZ</div>
						</div>
						<div class="item" style="left:0px;top:255px;" id="area56_9">
							<div style="background:url(images/clear.png) no-repeat; width:27px; height:27px; position:absolute; left: 27px; top: 24px;"></div>
							<div class="words"></div>
						</div>
						<div class="item" style="left:101px;top:255px;" id="area56_10">
							<div style="color:#FFF;position:absolute;font-size:34px;left:31px;top:14px;">0</div>
							<div class="words"></div>
						</div>
						<div class="item" style="left:203px;top:255px;" id="area56_11">
							<div style="background:url(images/delete.png) no-repeat;width:27px;height:27px;position:absolute;left:27px;top:24px;"></div>
							<div class="words"></div>
						</div>
					</div>
					<div id="searchButtonFocus" class="searchButtonFocus" style="position:absolute;visibility:hidden;left:3px;top:132px;">
						<div id="area57_0" class="item" style="top:36px;left:36px;"></div>
						<div id="area57_1" class="item" style="top:36px;left:3px;"></div>
						<div id="area57_2" class="item" style="top:3px;left:36px;"></div>
						<div id="area57_3" class="item" style="top:36px;left:69px;"></div>
						<div id="area57_4" class="item" style="top:69px;left:36px;"></div>
					</div>
					<div class="searchResult">
						<div class="searchResultTitle">搜索结果:</div>
						<div id="searchResultNull" style="position:absolute;left:22px;top:90px;font-size:20px;display:none;color:#a19dc1;">暂无结果，请重新搜索</div>
						<div class="item" style="top:95px;left:40px;" id="area58_0">
							<img id="area58_img_0" class="searchResultImg" src="images/search_0.png"/>
							<div id="area58_txt_0" class="searchResultTxt">幻神天下</div>
						</div>
						<div class="item" style="top:95px;left:160px;" id="area58_1">
							<img id="area58_img_1" class="searchResultImg" src="images/search_0.png"/>
							<div id="area58_txt_1" class="searchResultTxt">幻神天下</div>
						</div>
						<div class="item" style="top:95px;left:280px;" id="area58_2">
							<img id="area58_img_2" class="searchResultImg" src="images/search_0.png"/>
							<div id="area58_txt_2" class="searchResultTxt">幻神天下</div>
						</div>
						<div class="item" style="top:95px;left:400px;" id="area58_3">
							<img id="area58_img_3" class="searchResultImg" src="images/search_0.png"/>
							<div id="area58_txt_3" class="searchResultTxt">幻神天下</div>
						</div>
						<div class="item" style="top:95px; left:520px;" id="area58_4">
							<img id="area58_img_4" class="searchResultImg" src="images/search_0.png"/>
							<div id="area58_txt_4" class="searchResultTxt">幻神天下</div>
						</div>
						<div class="item"  style="top:95px; left:640px;" id="area58_5">
							<img id="area58_img_5" class="searchResultImg" src="images/search_0.png"/>
							<div id="area58_txt_5" class="searchResultTxt">幻神天下</div>
						</div>
						<div class="item" style="top:266px;left:40px;" id="area58_6">
							<img id="area58_img_6" class="searchResultImg" src="images/search_0.png"/>
							<div id="area58_txt_6" class="searchResultTxt">幻神天下</div>
						</div>
						<div class="item" style="top:266px;left:160px;" id="area58_7">
							<img id="area58_img_7" class="searchResultImg" src="images/search_0.png"/>
							<div id="area58_txt_7" class="searchResultTxt">幻神天下</div>
						</div>
						<div class="item" style="top:266px;left:280px;" id="area58_8">
							<img id="area58_img_8" class="searchResultImg" src="images/search_0.png"/>
							<div id="area58_txt_8" class="searchResultTxt">幻神天下</div>
						</div>
						<div class="item" style="top:266px;left:400px;" id="area58_9">
							<img id="area58_img_9" class="searchResultImg" src="images/search_0.png"/>
							<div id="area58_txt_9" class="searchResultTxt">幻神天下</div>
						</div>
						<div class="item" style="top:266px;left:520px;" id="area58_10">
							<img id="area58_img_10" class="searchResultImg" src="images/search_0.png"/>
							<div id="area58_txt_10" class="searchResultTxt">幻神天下</div>
						</div>
						<div class="item" style="top:266px;left:640px;" id="area58_11">
							<img id="area58_img_11" class="searchResultImg" src="images/search_0.png"/>
							<div id="area58_txt_11" class="searchResultTxt">幻神天下</div>
						</div>
					</div>
				</div>
			</div>
			<div class="part_5">
				<div class="userCenter">
					<div class="_area34">
						<div id="area59_0" class="item">
							<img src="images/userCenterMail.png" />
							<div id="mailNum">(0)</div>
						</div>
						<div id="area59_1" class="item" style="left:226px;">
							<img src="images/userCenterBuy.png" />
						</div>
					</div>
					<div class="_area35" style="display:none">
						<%--<div id="area60_0" class="item" style="left:452px;">--%>
							<%--<img src="images/userCenterUpgrade.png" />--%>
							<%--</div>--%>
							<div id="area60_1" class="item" style="left:452px;top:226px;">
								<img src="images/userCenterOpinion.png" />
							</div>
						</div>
						<div class="_area36" style="display:none">
							<%--<div id="area61_0" class="item" style="left:904px;">--%>
								<%--<img src="images/userCenterDisclaimer.png" />--%>
								<%--</div>--%>
							</div>
						</div>
					</div>
				</div>
				<div id="notic" style="position:absolute;width:1280px;height:720px;background-color:rgba(0,0,0,0.6);display:none;z-index:1111;">
					<div class="ad_position">
						<div><img id="notic_pic" style="position:absolute;left:24px;top:14px;width:1070px;height:536px;" src="images/bg.png"/></div>
						<div id="area60_0" class="item" style="position:absolute;left:490px;top:570px;width:138px;height:51px;background:url(images/ad_bg.png) no-repeat;color:#fff;text-align:center;line-height:51px;font-size:24px;">下一页</div>
						<div style="position:absolute;left:960px;top:600px;width:140px;color:#fff;"><span id="time" style="color:#7a62c0;font-weight:600">5</span>s后自动关闭</div>
					</div>
				</div>
				<div class="task" style="display:none;">
					<div style=" position:absolute;left:132px;top:110px;width:198px;height:144px;border:2px solid #fff;border-radius:6px;"><img style="width:198px;height:144px;border-radius:4px;" src="images/bg.png"/></div>
					<div style="position:absolute;left:356px;top:160px;color:#fff;font-size:30px;">通过保卫萝卜第五关</div>
					<div style="position:absolute;left:862px;top:120px;width:269px;height:113px;"><img  src="images/go_play.png"/></div>
				</div>
			</div>
			<div id="back_notice" style="position:absolute;left:568px;top:628px;width:200px;height:48px;line-height:48px;text-align:center;color:#fff;font-size:26px;color:#fff;font-weight:600;display:none;background-color:rgba(0,0,0,0.6);border-radius:12px">再按一次返回</div>
			<div id="area61_0" style="display:none;">app正在安装,请稍后...</div>
			<div id="_test" style="position:absolute;left:40px;top:40px;color:#FFF;"></div>

			<div id="area62_0" class="item">
				<div id="award_icon" class="normal"></div>
			</div>
			<div id="area62_1" class="item">
				<div id="has_times" class="normal"></div>
			</div>
		</body>
		</html>
		<script type="text/javascript" src="js/focus_logic.js"></script>
		<script type="text/javascript" src="js/Tween.js"></script>
		<script type="text/javascript" src="js/main.js"></script>
		<script>
			var area0_save_index;
			var type_save=1;
			var page2_temp=page3_temp=0;
			var words_list = [[],["B","A","2","C"],["E","D","3","F"],["H","G","4","I"],["K","J","5","L"],["N","M","6","O"],["Q","P","7","R","S"],["U","T","8","V"],["X","W","9","Y","Z"],[],[],[]];
			var area0MoveArea = [1,35,45,55,56,59];
			var epgUrl = '';
			var get_ip = "<%=get_ip%>";
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
	var epg_userid='00032';
	var stb_areaid = "999";
	var vspcode='HBDX_HWYH_HBIPTV';

	if(mac!=undefined && mac!="" && mac!=null){
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
	var search_key="";
	var ad_img=0;
	var screen_index = 0;
	var timer;
	var ad_flag = focus_logic.getCookie("ad_flag");
	focus_logic.delCookie("ad_flag");
	var is_installing = false;
	var cur_focus_info = [0,0];
	var scroll_id = "content";
	var part_0_page_total = 1;

	var back_flag=0;//两次返回
	var isFristEnter=false;//两次返回

	window.onload = function(){
		var ReturnURL = focus_logic.getCookie("ReturnURL");
		isFristEnter = eval(focus_logic.getCookie("isFristEnter"));
//		document.getElementById("_test").innerHTML = "isFristEnter:" + isFristEnter;
var endIndex = ReturnURL.indexOf("?",7);
if(endIndex != -1){
	epgUrl = ReturnURL.substring(0,endIndex);
}
if(ad_flag!=null){
	timer=setInterval(function(){
		time=$("time").innerHTML;
		time--;
		$("time").innerHTML=time;
		if(time==0){
			$("notic").style.display="none";
			focus_logic.page.setCurrentFocus(0,0);
			clearInterval(timer);
			try{
				var appName = "com.utstar.appstoreapplication.activity";
				if(STBAppManager.isAppInstalled(appName)){
					huo_dong();
				}
			}catch (e){}
		}
	},1000);
}
loadElement();

		$("user_name").innerHTML=UserID;//绑定用户ID
		init();
		setTimeout("window.focus()",1);
		displayAwardIcon();
	};

	function init(){
		var left = focus_logic.getCookie("content_left");
		console.log("left:" + left)
		try {
			if(left != "" && left != undefined && left != "0px"){
				if(left.indexOf("px")<0){
					left = left + "px";
				}
				document.getElementById("part_0_content").style.left = left;
			}
		} catch (e) {
		}
	}

	function loadElement(){
		area0 = focus_logic.loadElements(1,6,"area0_","item item_focus","item",[62,-1,1,-1]);
		area1 = focus_logic.loadElements(3,1,"area1_","item item_focus","item",[0,-1,-1,2]);

		area2 = focus_logic.loadElements(1,1,"area2_","item0 item0_focus","item0",[0,1,3,5]);
		area3 = focus_logic.loadElements(1,1,"area3_","item1 item1_focus","item1",[2,1,4,6]);
		area4 = focus_logic.loadElements(1,1,"area4_","item2 item2_focus","item2",[3,1,-1,7]);

		area5 = focus_logic.loadElements(1,1,"area5_","item3 item3_focus","item3",[0,2,6,8]);
		area6 = focus_logic.loadElements(1,1,"area6_","item4 item4_focus","item4",[5,3,7,9]);
		area7 = focus_logic.loadElements(1,1,"area7_","item5 item5_focus","item5",[6,4,-1,10]);

		area8 = focus_logic.loadElements(1,1,"area8_","item6 item6_focus","item6",[0,5,9,11]);
		area9 = focus_logic.loadElements(1,1,"area9_","item7 item7_focus","item7",[8,6,10,12]);
		area10 = focus_logic.loadElements(1,1,"area10_","item8 item8_focus","item8",[9,7,-1,13]);

		area11 = focus_logic.loadElements(1,1,"area11_","item9 item9_focus","item9",[0,8,12,14]);
		area12 = focus_logic.loadElements(1,1,"area12_","item10 item10_focus","item10",[11,9,13,15]);
		area13 = focus_logic.loadElements(1,1,"area13_","item11 item11_focus","item11",[12,10,-1,16]);

		area14 = focus_logic.loadElements(1,1,"area14_","item12 item12_focus","item12",[0,11,15,17]);
		area15 = focus_logic.loadElements(1,1,"area15_","item13 item13_focus","item13",[14,12,16,18]);
		area16 = focus_logic.loadElements(1,1,"area16_","item14 item14_focus","item14",[15,13,-1,19]);

		area17 = focus_logic.loadElements(1,1,"area17_","item15 item15_focus","item15",[0,14,18,20]);
		area18 = focus_logic.loadElements(1,1,"area18_","item16 item16_focus","item16",[17,15,19,21]);
		area19 = focus_logic.loadElements(1,1,"area19_","item17 item17_focus","item17",[18,16,-1,22]);

		area20 = focus_logic.loadElements(1,1,"area20_","item18 item18_focus","item18",[0,17,21,23]);
		area21 = focus_logic.loadElements(1,1,"area21_","item19 item19_focus","item19",[20,18,22,24]);
		area22 = focus_logic.loadElements(1,1,"area22_","item20 item20_focus","item20",[21,19,-1,25]);

		area23 = focus_logic.loadElements(1,1,"area23_","item21 item21_focus","item21",[0,20,24,26]);
		area24 = focus_logic.loadElements(1,1,"area24_","item22 item22_focus","item22",[23,21,25,27]);
		area25 = focus_logic.loadElements(1,1,"area25_","item23 item23_focus","item23",[24,22,-1,28]);

		area26 = focus_logic.loadElements(1,1,"area26_","item24 item24_focus","item24",[0,23,27,29]);
		area27 = focus_logic.loadElements(1,1,"area27_","item25 item25_focus","item25",[26,24,28,30]);
		area28 = focus_logic.loadElements(1,1,"area28_","item26 item26_focus","item26",[27,25,-1,31]);

		area29 = focus_logic.loadElements(1,1,"area29_","item27 item27_focus","item27",[0,26,30,32]);
		area30 = focus_logic.loadElements(1,1,"area30_","item28 item28_focus","item28",[29,27,31,33]);
		area31 = focus_logic.loadElements(1,1,"area31_","item29 item29_focus","item29",[30,28,-1,34]);

		area32 = focus_logic.loadElements(1,1,"area32_","item30 item30_focus","item30",[0,29,33,35]);
		area33 = focus_logic.loadElements(1,1,"area33_","item31 item31_focus","item31",[32,30,34,35]);
		area34 = focus_logic.loadElements(1,1,"area34_","item32 item32_focus","item32",[33,31,-1,35]);
		/************part1***************/
		area35 = focus_logic.loadElements(1,1,"area35_","item item_focus","item",[[0,1],1,36,37]);
		area36 = focus_logic.loadElements(1,1,"area36_","item item_focus","item",[35,32,-1,38]);
		area37 = focus_logic.loadElements(1,1,"area37_","item0 item0_focus","item0",[[0,1],35,38,39]);
		area38 = focus_logic.loadElements(1,1,"area38_","item1 item1_focus","item1",[37,36,-1,40]);
		area39 = focus_logic.loadElements(1,1,"area39_","item2 item2_focus","item2",[[0,1],37,40,41]);
		area40 = focus_logic.loadElements(1,1,"area40_","item3 item3_focus","item3",[39,38,-1,42]);
		area41 = focus_logic.loadElements(1,1,"area41_","item4 item4_focus","item4",[[0,1],39,42,43]);
		area42 = focus_logic.loadElements(1,1,"area42_","item5 item5_focus","item5",[41,40,-1,44]);
		area43 = focus_logic.loadElements(1,1,"area43_","item6 item6_focus","item6",[[0,1],41,44,45]);
		area44 = focus_logic.loadElements(1,1,"area44_","item7 item7_focus","item7",[43,42,-1,46]);
		/************part2***************/
		area45 = focus_logic.loadElements(1,1,"area45_","item item_focus","item",[[0,2],43,46,47]);
		area46 = focus_logic.loadElements(1,1,"area46_","item item_focus","item",[45,43,-1,48]);
		area47 = focus_logic.loadElements(1,1,"area47_","item0 item0_focus","item0",[[0,2],45,48,49]);
		area48 = focus_logic.loadElements(1,1,"area48_","item1 item1_focus","item1",[47,46,-1,50]);
		area49 = focus_logic.loadElements(1,1,"area49_","item2 item2_focus","item2",[[0,2],47,50,51]);
		area50 = focus_logic.loadElements(1,1,"area50_","item3 item3_focus","item3",[49,48,-1,52]);
		area51 = focus_logic.loadElements(1,1,"area51_","item4 item4_focus","item4",[[0,2],49,52,53]);
		area52 = focus_logic.loadElements(1,1,"area52_","item5 item5_focus","item5",[51,50,-1,54]);
		area53 = focus_logic.loadElements(1,1,"area53_","item6 item6_focus","item6",[[0,2],51,54,55]);
		area54 = focus_logic.loadElements(1,1,"area54_","item7 item7_focus","item7",[53,52,-1,55]);

		area55 = focus_logic.loadElements(1,1,"area55_","item item_focus","item",[[0,3],53,-1,63]);

		area56 = focus_logic.loadElements(4,3,"area56_","item item_focus","item",[[0,4],[65,0],-1,58]);
		area57 = focus_logic.loadElements(1,5,"area57_","item item_focus","item",[-1,-1,-1,-1]);
		area58 = focus_logic.loadElements(2,6,"area58_","item item_focus","item",[[0,4],[56,2],-1,59]);
		area59 = focus_logic.loadElements(1,2,"area59_","item item_focus","item",[[0,5],[58,5],-1,-1]);

		area60 = focus_logic.loadElements(1,1,"area60_","item","item",[-1,-1,-1,-1]);
		area61 = focus_logic.loadElements(1,1,"area61_"," "," ",[-1,-1,-1,-1]);
		area62 = focus_logic.loadElements(1,2,"area62_","item item_focus","item",[-1,-1,0,-1]);
		
		area63 = focus_logic.loadElements(1,1,"area63_","item item_focus","item",[[0,3],55,64,65]);
		area64 = focus_logic.loadElements(1,2,"area64_","item item_focus","item",[63,55,-1,65]);
		area65 = focus_logic.loadElements(1,1,"area65_","item item_focus","item",[[0,3],63,-1,56]);
		focusObj = focus_logic.getFocus([0,0,1]);
		var _curAreaIndex = focusObj.curAreaIndex;
		var _curAreaInfo = focusObj.areaInfo[_curAreaIndex];
		area0_save_index=focusObj.areaInfo[0].curDomIndex;
		focus_logic.page.setCurrentFocus(_curAreaIndex,_curAreaInfo.curDomIndex);
		focus_logic.page.setAreaMembership(0,1);
		setAreaAttr();
		set_scroll();
		loadData();
		Refresh_time();
		area62.doms[0].okEvent=function(){
			focus_logic.savePageInfo();
			var ip = window.location.host;
			var returnURL = "http://" + ip + window.location.pathname;
			focus_logic.setCookie("content_left","1px");
			document.getElementById("award_icon").style.display = "none";
			window.location.href = "http://" + ip + "/Wanba/active/exchangeStore/index.html?UserID=" + epg_userid + "&ReturnULR=" + returnURL;
		};
		area62.doms[1].okEvent=function(){
			focus_logic.savePageInfo();
			var ip = window.location.host;
			var returnURL = "http://" + ip + window.location.pathname;
			focus_logic.setCookie("content_left","1px");
			window.location.href = "http://" + ip + "/Wanba/active/registerCards/index.html?UserID=" + epg_userid + "&ReturnULR=" + returnURL;
		}
		updateStatus();
	}

	function displayAwardIcon(){
		if(isFristEnter){
			document.getElementById("award_icon").style.display = "block";
		}
		focus_logic.setCookie("isFristEnter",false);
	}

	function updateStatus(){
		var url = "http://"+window.location.host +"/wbManager/userCentre/getUserCardSignNum.do?userId=" + epg_userid;
		focus_logic.getDataByAjax(url,update);
	}

	function update(result){
		try {
			console.log(result);
            //
            var rlt= eval('('+result+')');
            if(rlt.rltcode == 0 && rlt.object>0){
            	document.getElementById("has_times").style.display = "block";
            }
          } catch (e) {
          }
        }

        function setAreaAttr(){
        	area0.focusEvent = function(){
        		$("content").style.left = "-"+parseInt(area0.curDomIndex)*1280+"px";
        		area0.doms[area0.curDomIndex].moveRule = [-1,-1,[area0MoveArea[area0.curDomIndex],0],-1];
        	}
        	focus_logic.page.backEvent = function(){
        		var ReturnURL = focus_logic.getCookie("ReturnURL");
        		var func=function(){
        			if(ReturnURL!=null && ReturnURL!=""){
        				$("back_notice").style.display="none";
        				onClick("exit","exit");
        				focus_logic.delCookie("content_left");
        				window.location.href = ReturnURL;					
        			}						
        		}
        		toKeepStayTipsWinInitFnc(func);
			/*if(back_flag == 1){
				if(ReturnURL!=null && ReturnURL!=""){
					$("back_notice").style.display="none";
					onClick("exit","exit");
					focus_logic.delCookie("content_left");
					window.location.href = ReturnURL;					
				}
			}else{
				$("back_notice").style.display="block";
			}
			
			back_flag = 1;
			setTimeout(function(){
				back_flag = 0;
				$("back_notice").style.display="none";
			},2000);
			*/

		}
		area0.doms[area0_save_index].blurClassName = "item item_selected";
		pre=area0_save_index;
		area0.focusEvent=function(type){
			area0.doms[area0.curDomIndex].blurClassName = "item item_selected";
			if(pre!=area0.curDomIndex){
				area0.doms[pre].element.className = "item";
					//area0.doms[area0.curDomIndex].blurClassName = "item item_selected";
					pre=area0.curDomIndex;

					change_screen(area0.curDomIndex);
				}
				if(type=="inside" && area0.curDomIndex == 0){
					$("part_0_content").style.left = "0px";
				}

			};
			area1.okEvent = function(){
				focus_logic.savePageInfo();
				var _a=1;
				if(area1.curDomIndex==1){
					_a=3;
					onClick("zui_xin_huo_dong","zui_xin_huo_dong");
					window.location.href="specil_list/index2.html?ReturnURL=../index.jsp&UserID="+epg_userid ;
					return ;
				}else if(area1.curDomIndex==2){
					_a=2;
				}
				var appName = "com.utstar.appstoreapplication.activity";
				var className = "com.utstar.appstoreapplication.activity.StartAppActivity";

				var intentMessage = "{\"intentType\":0,\"appName\":\"" + appName + "\", \"className\":\"" + className + "\"," +
				"\"extra\":["+
				"{\"name\":\"epgDoman\",\"value\":\"" + epgDoman + "\"},"+
				"{\"name\":\"areaId\",\"value\":\"" + _stb_areaid + "\"},"+
				"{\"name\":\"serviceUrl\",\"value\":\""+get_ip+"\"}," +
				"{\"name\":\"epgUserId\",\"value\":\"" + UserID + "\"},"+
				"{\"name\":\"epgToken\",\"value\":\"" + epgToken + "\"},"+
				"{\"name\":\"isDispath\",\"value\":" + true + "},"+
				"{\"name\":\"action\",\"value\":\"" + _a + "\"}"+
				"]}";
				var mes_obj = {};
				mes_obj["areaId"] = _stb_areaid;
				mes_obj["epgUserId"] = UserID;
				mes_obj["epgToken"] = epgToken;
				mes_obj["isDispath"] = true;
				mes_obj["serviceUrl"] = get_ip;
				mes_obj["action"] = area1.curDomIndex+1;
				mes_obj["params"] = "";
				var mes_str = JSON.stringify(mes_obj);
				if(!is_app_installed(mes_str)) return;
				try{
					STBAppManager.startAppByIntent(intentMessage);
					onClick(""+_a,""+_a);
				}catch (e){console.log(intentMessage)}
			}
			if(type_save==1){
				area17.focusEvent=area18.focusEvent=area19.focusEvent=function(){
					part_0_change_screen(1);
				}
				area14.focusEvent=area15.focusEvent=area16.focusEvent=function(){
					if(screen_index!=0){
						part_0_change_screen(0);
					}
				}
			}else if(type_save==2){
				area16.moveDirectionEvent=area17.moveDirectionEvent=function(direction){
					if(direction==3){
						part_0_change_screen(1);
					}else if(direction==1){
						part_0_change_screen(0);
					}
				}
			}
			else if(type_save==3){
				area14.moveDirectionEvent=function(direction){
					if(direction==3){
						part_0_change_screen(1);
					}else if(direction==1){
						part_0_change_screen(0);
					}
				}
			}
			else if(type_save==4||type_save==5){
				area35.areaDirections[1]=29;
				area17.moveDirectionEvent=function(direction){
					if(direction==3){
						part_0_change_screen(1);
					}else if(direction==1){
						part_0_change_screen(0);
					}
				}
			}


			area29.moveDirectionEvent = area30.moveDirectionEvent =area31.moveDirectionEvent =area32.moveDirectionEvent = area33.moveDirectionEvent =area34.moveDirectionEvent=function(direction){
				if(direction==3){
					if((focus_logic.page.curAreaIndex==29||focus_logic.page.curAreaIndex==30||focus_logic.page.curAreaIndex==31)&&flag_arr.indexOf(30)==-1) return;
					change_screen(1);
					checke_nav_focus();
				}

			}
			area35.moveDirectionEvent = area36.moveDirectionEvent = function(direction){
				if(direction==1){
					change_screen(0);
					checke_nav_focus();
					$("part_0_content").style.left="0px";
				}

			}
			area43.moveDirectionEvent = area44.moveDirectionEvent= function(direction){
				if(direction==3){
					change_screen(2);
				//focus_logic.page.setCurrentFocus(43,0);
				checke_nav_focus();
			}
		}
		area45.moveDirectionEvent = area46.moveDirectionEvent =function(direction){
			if(direction==1){
				change_screen(1);
				checke_nav_focus();
			}
		}
		area45.okEvent = function(){
			focus_logic.savePageInfo();
			var appName = "com.utstar.appstoreapplication.activity";
			var className = "com.utstar.appstoreapplication.activity.StartAppActivity";

			var intentMessage = "{\"intentType\":0,\"appName\":\"" + appName + "\", \"className\":\"" + className + "\"," +
			"\"extra\":["+
			"{\"name\":\"epgDoman\",\"value\":\"" + epgDoman + "\"},"+
			"{\"name\":\"serviceUrl\",\"value\":\""+get_ip+"\"}," +
			"{\"name\":\"areaId\",\"value\":\"" + _stb_areaid + "\"},"+
			"{\"name\":\"epgUserId\",\"value\":\"" + UserID + "\"},"+
			"{\"name\":\"epgToken\",\"value\":\"" + epgToken + "\"},"+
			"{\"name\":\"isDispath\",\"value\":" + true + "},"+
			"{\"name\":\"action\",\"value\":\"" + 8 + "\"}"+
			"]}";
			var mes_obj = {};
			mes_obj["areaId"] = _stb_areaid;
			mes_obj["epgUserId"] = UserID;
			mes_obj["epgToken"] = epgToken;
			mes_obj["isDispath"] = true;
			mes_obj["serviceUrl"] = get_ip;
			mes_obj["action"] = 8;
			mes_obj["params"] = "";
			var mes_str = JSON.stringify(mes_obj);
			if(!is_app_installed(mes_str)) return;
			try{
				STBAppManager.startAppByIntent(intentMessage);
				onClick("yao_kong_qi","yao_kong_qi");
			}catch (e){console.log(intentMessage)}
		}
		area46.okEvent = function(){
			focus_logic.savePageInfo();
			var appName = "com.utstar.appstoreapplication.activity";
			var className = "com.utstar.appstoreapplication.activity.StartAppActivity";

			var intentMessage = "{\"intentType\":0,\"appName\":\"" + appName + "\", \"className\":\"" + className + "\"," +
			"\"extra\":["+
			"{\"name\":\"epgDoman\",\"value\":\"" + epgDoman + "\"},"+
			"{\"name\":\"serviceUrl\",\"value\":\""+get_ip+"\"}," +
			"{\"name\":\"areaId\",\"value\":\"" + _stb_areaid + "\"},"+
			"{\"name\":\"epgUserId\",\"value\":\"" + UserID + "\"},"+
			"{\"name\":\"epgToken\",\"value\":\"" + epgToken + "\"},"+
			"{\"name\":\"isDispath\",\"value\":" + true + "},"+
			"{\"name\":\"action\",\"value\":\"" + 9 + "\"}"+
			"]}";
			var mes_obj = {};
			mes_obj["areaId"] = _stb_areaid;
			mes_obj["epgUserId"] = UserID;
			mes_obj["epgToken"] = epgToken;
			mes_obj["serviceUrl"] = get_ip;
			mes_obj["isDispath"] = true;
			mes_obj["action"] = 9;
			mes_obj["params"] = "";
			var mes_str = JSON.stringify(mes_obj);
			if(!is_app_installed(mes_str)) return;
			try{
				STBAppManager.startAppByIntent(intentMessage);
				onClick("shoubin","shoubin")
			}catch (e){console.log(intentMessage)}
		}
		area51.moveDirectionEvent = area52.moveDirectionEvent=area53.moveDirectionEvent = area54.moveDirectionEvent =function(direction){
			if(direction==3){
				if((focus_logic.page.curAreaIndex==51 && area53.isShow==1)||(focus_logic.page.curAreaIndex==52 && (area53.isShow==1 || area54.isShow==1))) return;
				change_screen(3);
				checke_nav_focus();
				focus_logic.page.setCurrentFocus(54,0);
			}
		}
		area53.focusEvent=function(){
			var temp=53;
			while(eval("area"+temp).isShow==0){
				temp--;

			}
			if(temp!=53)focus_logic.page.setCurrentFocus(temp,0);
		}
		/*area55.doms[0].moveDirectionEvent =function(direction){
			if(direction==1){
				change_screen(2);
				checke_nav_focus();
			}else if(direction==3){
				if(area55.curDomIndex==(area55.domsCount-1)){
					change_screen(4);
					checke_nav_focus();
				}
			}
		};
		area55.doms[4].moveDirectionEvent=function(direction){
				if(direction==1){
					change_screen(2);
					checke_nav_focus();
					area55.doms[4].moveRule=[-1,[54,0],-1,-1];
				}else if(direction==3){
					if(area55.curDomIndex==(area55.domsCount-1)){
						change_screen(4);
						checke_nav_focus();
					}
				}
			};
		area55.moveDirectionEvent = function(direction){
			if(direction==3){
				if(area55.curDomIndex==(area55.domsCount-1)){
					change_screen(4);
					checke_nav_focus();
				}
			}
		};
		area55.doms[3].moveDirectionEvent=area55.doms[7].moveDirectionEvent=function(direction){
			if(direction==3){
				change_screen(4);
				checke_nav_focus();
				focus_logic.page.setCurrentFocus(56,0);
			}
		};*/
		area55.moveDirectionEvent =function(direction){
			if(direction==1){
				change_screen(2);
				checke_nav_focus();
			}
			else if(direction==3&&area63.domsCount==0){
				change_screen(4);
				checke_nav_focus();	
			}
		}
		area63.moveDirectionEvent=function(direction){
			if(direction==3&&area65.domsCount==0){
				change_screen(4);
				checke_nav_focus();
			}
		}
		area64.moveDirectionEvent=function(direction){
			if(direction==3&&area65.domsCount==0){
				change_screen(4);
				checke_nav_focus();
			}
		}
		area65.moveDirectionEvent=function(direction){
			if(direction==3){
				change_screen(4);
				checke_nav_focus();
			}
		}
		/* area55.focusEvent = function(type){
			if(type == "cross" && area55.preAreaIndex==56){
				focus_logic.page.setCurrentFocus(55,area55.domsCount-1);
			}
		} */
		area55.okEvent = function(){
			focus_logic.savePageInfo();
			var link = video_data.object.list[area55.curDomIndex].address;
			/******点击上报********/
			var tmp_data = video_data.object.list[area55.curDomIndex];
			var type=8;
			var contentName=tmp_data.name;
			var contentId=0;
			var parentType=area0.curDomIndex;
			var pageIndex=1;
			var position=this.curIndex;

			click_info(contentName,contentId,type,parentType,pageIndex,position);

			var link_url = link.replace('{epgUrl}',epgUrl);
			var tmp_returnUrl = "http://"+location.host+location.pathname;
			if(link_url != "" && link_url!=undefined){
				if(link_url.indexOf("?")==-1){
					focus_logic.setCookie("content_left",document.getElementById("part_0_content").style.left);
					window.location.href = link_url+"?ReturnURL="+tmp_returnUrl+"&UserID="+epg_userid+"&UserToken="+epgToken;
				}else{
					var url_1 = link_url.substring(0,link_url.indexOf("?"));
					var url_2 = link_url.substring(link_url.indexOf("?")+1);
					focus_logic.setCookie("content_left",document.getElementById("part_0_content").style.left);
					window.location.href = url_1+"?ReturnURL="+tmp_returnUrl+"&UserID="+epg_userid+"&UserToken="+epgToken+"&"+url_2;
				}
			}
		}
		area63.okEvent = function(){
			focus_logic.savePageInfo();
			var link = video_data.object.list[1].address;
			/******点击上报********/
			var tmp_data = video_data.object.list[1];
			var type=8;
			var contentName=tmp_data.name;
			var contentId=0;
			var parentType=area0.curDomIndex;
			var pageIndex=1;
			var position=this.curIndex;

			click_info(contentName,contentId,type,parentType,pageIndex,position);

			var link_url = link.replace('{epgUrl}',epgUrl);
			var tmp_returnUrl = "http://"+location.host+location.pathname;
			if(link_url != "" && link_url!=undefined){
				if(link_url.indexOf("?")==-1){
					focus_logic.setCookie("content_left",document.getElementById("part_0_content").style.left);
					window.location.href = link_url+"?ReturnURL="+tmp_returnUrl+"&UserID="+epg_userid+"&UserToken="+epgToken;
				}else{
					var url_1 = link_url.substring(0,link_url.indexOf("?"));
					var url_2 = link_url.substring(link_url.indexOf("?")+1);
					focus_logic.setCookie("content_left",document.getElementById("part_0_content").style.left);
					window.location.href = url_1+"?ReturnURL="+tmp_returnUrl+"&UserID="+epg_userid+"&UserToken="+epgToken+"&"+url_2;
				}
			}
		}
		area64.okEvent = function(){
			focus_logic.savePageInfo();
			var link = video_data.object.list[area64.curDomIndex+2].address;
			/******点击上报********/
			var tmp_data = video_data.object.list[area64.curDomIndex+2];
			var type=8;
			var contentName=tmp_data.name;
			var contentId=0;
			var parentType=area0.curDomIndex;
			var pageIndex=1;
			var position=this.curIndex+2;

			click_info(contentName,contentId,type,parentType,pageIndex,position);

			var link_url = link.replace('{epgUrl}',epgUrl);
			var tmp_returnUrl = "http://"+location.host+location.pathname;
			if(link_url != "" && link_url!=undefined){
				if(link_url.indexOf("?")==-1){
					focus_logic.setCookie("content_left",document.getElementById("part_0_content").style.left);
					window.location.href = link_url+"?ReturnURL="+tmp_returnUrl+"&UserID="+epg_userid+"&UserToken="+epgToken;
				}else{
					var url_1 = link_url.substring(0,link_url.indexOf("?"));
					var url_2 = link_url.substring(link_url.indexOf("?")+1);
					focus_logic.setCookie("content_left",document.getElementById("part_0_content").style.left);
					window.location.href = url_1+"?ReturnURL="+tmp_returnUrl+"&UserID="+epg_userid+"&UserToken="+epgToken+"&"+url_2;
				}
			}
		}
		area65.okEvent = function(){
			focus_logic.savePageInfo();
			var link = video_data.object.list[4].address;
			/******点击上报********/
			var tmp_data = video_data.object.list[4];
			var type=8;
			var contentName=tmp_data.name;
			var contentId=0;
			var parentType=area0.curDomIndex;
			var pageIndex=1;
			var position=this.curIndex+4;

			click_info(contentName,contentId,type,parentType,pageIndex,position);

			var link_url = link.replace('{epgUrl}',epgUrl);
			var tmp_returnUrl = "http://"+location.host+location.pathname;
			if(link_url != "" && link_url!=undefined){
				if(link_url.indexOf("?")==-1){
					focus_logic.setCookie("content_left",document.getElementById("part_0_content").style.left);
					window.location.href = link_url+"?ReturnURL="+tmp_returnUrl+"&UserID="+epg_userid+"&UserToken="+epgToken;
				}else{
					var url_1 = link_url.substring(0,link_url.indexOf("?"));
					var url_2 = link_url.substring(link_url.indexOf("?")+1);
					focus_logic.setCookie("content_left",document.getElementById("part_0_content").style.left);
					window.location.href = url_1+"?ReturnURL="+tmp_returnUrl+"&UserID="+epg_userid+"&UserToken="+epgToken+"&"+url_2;
				}
			}
		}
		area56.doms[0].moveDirectionEvent=area56.doms[3].moveDirectionEvent=area56.doms[6].moveDirectionEvent=area56.doms[9].moveDirectionEvent=function(direction){
			if(direction==1){
				change_screen(3);
				checke_nav_focus();
			}
		}
		area56.okEvent = function(){
			if(area56.curDomIndex>0 && area56.curDomIndex<9){
				area56.doms[area56.curDomIndex].element.style.visibility = "hidden";
				focus_logic.page.setCurrentFocus(57,0);
				$("searchButtonFocus").style.left = parseInt(area56.doms[area56.curDomIndex].element.style.left)+3+"px";
				$("searchButtonFocus").style.top = parseInt(area56.doms[area56.curDomIndex].element.style.top)+132+"px";
				if(words_list[area56.curDomIndex].length==4){
					area57.doms[0].moveRule = [[57,2],[57,1],[57,0],[57,3]];
				}else{
					area57.doms[0].moveRule = [[57,2],[57,1],[57,4],[57,3]];
				}
				for(var i=0;i<5;i++){
					if(i<words_list[area56.curDomIndex].length){
						area57.doms[i].element.innerHTML = words_list[area56.curDomIndex][i];
						//area57.doms[i].element.style.visibility = "visible";
					}else{
						area57.doms[i].element.innerHTML = "";
						//area57.doms[i].element.style.visibility = "hidden";
					}
				}
				$("searchButtonFocus").style.visibility = "visible";
				$("searchButtonFocus").style.display = "block";
			}else if(area56.curDomIndex==0){
				var tmpStr = $("search_txt").innerHTML;
				$("search_txt").innerHTML = tmpStr+1;
				search_key=$("search_txt").innerHTML;
				area58.pageNumber = 1;
				focus_logic.getDataByAjax("get_data/get_data.jsp?action=search&url="+get_ip+"search/getProductListByKey.do"+"&key="+search_key+"&page=1&number=12&userName=" + epg_userid,load_search);
			}else if(area56.curDomIndex==9){
				$("search_txt").innerHTML = "";
				area58.pageNumber = 1;
				focus_logic.getDataByAjax("get_data/get_data.jsp?action=search&url="+get_ip+"search/getRecommendProductList.do&page=1&number=6&userName=" + epg_userid,load_search_rec);
			}else if(area56.curDomIndex==10){
				var tmpStr = $("search_txt").innerHTML;
				$("search_txt").innerHTML = tmpStr+0;
				search_key=$("search_txt").innerHTML;
				area58.pageNumber = 1;
				focus_logic.getDataByAjax("get_data/get_data.jsp?action=search&url="+get_ip+"search/getProductListByKey.do"+"&key="+search_key+"&page=1&number=12&userName=" + epg_userid,load_search);
			}else if(area56.curDomIndex==11){
				var tmpStr = $("search_txt").innerHTML;
				$("search_txt").innerHTML = tmpStr.substring(0,tmpStr.length-1);
				if(!!$("search_txt").innerHTML){
					search_key = $("search_txt").innerHTML;
					area58.pageNumber = 1;
					focus_logic.getDataByAjax("get_data/get_data.jsp?action=search&url="+get_ip+"search/getProductListByKey.do"+"&key="+search_key+"&page=1&number=12&userName=" + epg_userid,load_search);
				}else{
					area58.pageNumber = 1;
					focus_logic.getDataByAjax("get_data/get_data.jsp?action=search&url="+get_ip+"search/getRecommendProductList.do&page=1&number=6&userName=" + epg_userid,load_search_rec);
				}

			}
		}
		area57.domsCount = 5;
		area57.doms[0].moveRule = [[57,2],[57,1],[57,4],[57,3]];
		area57.okEvent = function(){
			$("searchButtonFocus").style.display = "none";
			focus_logic.page.setCurrentFocus(56,area56.curDomIndex);
			area56.doms[area56.curDomIndex].element.style.visibility = "visible";
			var tmpStr = $("search_txt").innerHTML;
			$("search_txt").innerHTML = tmpStr+words_list[area56.curDomIndex][area57.curDomIndex];
			search_key=$("search_txt").innerHTML;
			area58.pageNumber = 1;
			focus_logic.getDataByAjax("get_data/get_data.jsp?action=search&url="+get_ip+"search/getProductListByKey.do"+"&key="+search_key+"&page=1&number=12&userName=" + epg_userid,load_search);
		}
		area57.focusEvent = function(type){
			if(type=="inside" && area57.curDomIndex!=0){
				setTimeout("area57.okEvent()",200);
			}
		}
		area57.backEvent = function(){
			$("searchButtonFocus").style.display = "none";
			focus_logic.page.setCurrentFocus(56,area56.curDomIndex);
			area56.doms[area56.curDomIndex].element.style.visibility = "visible";
		}
		area58.pageTurnEvent=function(){
			focus_logic.getDataByAjax("get_data/get_data.jsp?action=search&url="+get_ip+"search/getProductListByKey.do"+"&key="+search_key+"&page="+area58.pageNumber+"&number=12&userName=" + epg_userid,load_search);
		}
		area58.okEvent = function(){
			focus_logic.savePageInfo();
			focus_logic.setCookie("search_key",search_key);
			var tmp_data = search_data.object.list[area58.curDomIndex];

			var appName = "com.utstar.appstoreapplication.activity";
			var className = "com.utstar.appstoreapplication.activity.StartAppActivity";

			delete tmp_data.imageuri;
			var data = JSON.stringify(tmp_data);

			var intentMessage = "{\"intentType\":0,\"appName\":\"" + appName + "\", \"className\":\"" + className + "\"," +
			"\"extra\":["+
			"{\"name\":\"epgDoman\",\"value\":\"" + epgDoman + "\"},"+
			"{\"name\":\"serviceUrl\",\"value\":\""+get_ip+"\"}," +
			"{\"name\":\"areaId\",\"value\":\"" + _stb_areaid + "\"},"+
			"{\"name\":\"epgUserId\",\"value\":\"" + UserID + "\"},"+
			"{\"name\":\"epgToken\",\"value\":\"" + epgToken + "\"},"+
			"{\"name\":\"isDispath\",\"value\":" + true + "},"+
			"{\"name\":\"action\",\"value\":\"" + 11 + "\"},"+
			"{\"name\":\"params\",\"value\":" + data + "}"+
			"]}";
			var mes_obj = {};
			mes_obj["areaId"] = _stb_areaid;
			mes_obj["epgUserId"] = UserID;
			mes_obj["epgToken"] = epgToken;
			mes_obj["isDispath"] = true;
			mes_obj["action"] = 11;
			mes_obj["serviceUrl"] = get_ip;
			mes_obj["params"] = tmp_data;
			var mes_str = JSON.stringify(mes_obj);
			if(!is_app_installed(mes_str)) return;
			try{
				if(tmp_data.turnType != 2001 && tmp_data.turnType != "2001"){
					STBAppManager.startAppByIntent(intentMessage);
					onClick(tmp_data.productid,"")
					checkGame(tmp_data.productid);
				}else{
					var link = tmp_data.link;
					var link_url = link.replace('{epgUrl}',epgUrl);
					var tmp_returnUrl = "http://"+location.host+location.pathname;
					if(link_url != "" && link_url!=undefined){
						if(link_url.indexOf("?")==-1){
							focus_logic.setCookie("content_left",document.getElementById("part_0_content").style.left);
							window.location.href = link_url+"?ReturnURL="+tmp_returnUrl+"&UserID="+epg_userid+"&UserToken="+epgToken;
						}else{
							var url_1 = link_url.substring(0,link_url.indexOf("?"));
							var url_2 = link_url.substring(link_url.indexOf("?")+1);
							focus_logic.setCookie("content_left",document.getElementById("part_0_content").style.left);
							window.location.href = url_1+"?ReturnURL="+tmp_returnUrl+"&UserID="+epg_userid+"&UserToken="+epgToken+"&"+url_2;
						}
					}
				}
			}catch (e){console.log(intentMessage)}

		}
		area58.moveDirectionEvent = function(direction){
			if(direction==3){
				if(area58.curDomIndex==5 || area58.curDomIndex==11 || area58.curDomIndex==(area58.domsCount-1)){
					change_screen(5);
					checke_nav_focus();
				}
			}else if(direction==0){
				if(area58.pageNumber==1){
					area58.areaDirections[0] = [0,4];
				}else{
					area58.areaDirections[0] = -1;
				}
			}
		}
		area59.doms[0].moveDirectionEvent=function(direction){
			if(direction==1){
				change_screen(4);
				checke_nav_focus();
			}
		}
		area59.doms[0].okEvent=function(){
			//focus_logic.getDataByAjax("get_data/get_data.jsp?action=getMsg&url="+get_ip+"activity/sysMsg.do"+"&page="+1+"&number="+10,load_Msg);
			focus_logic.savePageInfo();
			var appName = "com.utstar.appstoreapplication.activity";
			var className = "com.utstar.appstoreapplication.activity.StartAppActivity";

			var intentMessage = "{\"intentType\":0,\"appName\":\"" + appName + "\", \"className\":\"" + className + "\"," +
			"\"extra\":["+
			"{\"name\":\"epgDoman\",\"value\":\"" + epgDoman + "\"},"+
			"{\"name\":\"areaId\",\"value\":\"" + _stb_areaid + "\"},"+
			"{\"name\":\"serviceUrl\",\"value\":\""+get_ip+"\"}," +
			"{\"name\":\"epgUserId\",\"value\":\"" + UserID + "\"},"+
			"{\"name\":\"epgToken\",\"value\":\"" + epgToken + "\"},"+
			"{\"name\":\"isDispath\",\"value\":" + true + "},"+
			"{\"name\":\"action\",\"value\":\"" + 10 + "\"}"+
			"]}";
			var mes_obj = {};
			mes_obj["areaId"] = _stb_areaid;
			mes_obj["epgUserId"] = UserID;
			mes_obj["epgToken"] = epgToken;
			mes_obj["isDispath"] = true;
			mes_obj["serviceUrl"] = get_ip;
			mes_obj["action"] = 10;
			mes_obj["params"] = "";
			var mes_str = JSON.stringify(mes_obj);
			if(!is_app_installed(mes_str)) return;
			try{
				STBAppManager.startAppByIntent(intentMessage);
			}catch (e){console.log(intentMessage)}
		}
		area59.doms[1].okEvent=function(){
			focus_logic.savePageInfo();
			focus_logic.setCookie("content_left",document.getElementById("part_0_content").style.left);
			window.location.href="hand_buy.jsp";
				//window.location.href="yasewang/portal.html";
			}
			area60.okEvent=function(){
				$("time").innerHTML=5;
				ad_img++;
				if($("area60_0").innerHTML=="关闭"){
					clearInterval(timer);
					$("notic").style.display="none";
					focus_logic.page.setCurrentFocus(0,0);
					try{
						var appName = "com.utstar.appstoreapplication.activity";
						if(STBAppManager.isAppInstalled(appName)){
							huo_dong();
						}
					}catch (e){}
					return;
				}
				if(ad_img==ad_data.object.img.length-1){
					$("area60_0").innerHTML="关闭";

				}
				$("notic_pic").src=ad_data.object.img[ad_img];
			}
			area60.backEvent = function(){
				clearInterval(timer);
				$("notic").style.display="none";
				focus_logic.page.setCurrentFocus(0,0);
				try{
					var appName = "com.utstar.appstoreapplication.activity";
					if(STBAppManager.isAppInstalled(appName)){
						huo_dong();
					}
				}catch (e){}
			}

		}

		function set_scroll(){
			var _i = focus_logic.page.curAreaIndex;
			if(_i<=44&&_i>=35){
				screen_index = 1;
			}
			else if(_i>=45&&_i<=54){
				screen_index = 2;
			}
			else if(55==_i||_i==63||_i==64||_i==65){
				screen_index = 3;
			}
			else if(_i>=56&&_i<=58){
				screen_index = 4;
			}
			else if(_i>=59&&_i<=61){
				screen_index = 5;
			}
			else{
				screen_index = 0;
			}
			if(_i != 0){
				$("area0_"+screen_index).className = "item item_selected";
			}
			$("content").style.left = -screen_index*1280+"px";
		//show_logo();
		set_move_logic();
		tween = getInstance({duration:5,interval:5,callBack:callBack},"Expo.easeInOut");
		tween.update(function(val){
			$(scroll_id).style.left = val+"px";
		});
	}
	function change_screen(_screen_index){
		area0.areaDirections[2]=-1;
		var left = parseInt($("content").style.left);
		screen_index = _screen_index;
		var target = -1280*screen_index-left;
		scroll_id = "content";
		tween.move(left,target);
	}
	function part_0_change_screen(_screen_index){
		area0.areaDirections[2]=-1;
		var left = parseInt($("part_0_content").style.left);
		screen_index = "0_"+_screen_index;
		var target = -1180*_screen_index-left;
		scroll_id = "part_0_content";
		tween.move(left,target);
	}
	function set_move_logic(){
		if(screen_index==0){
			area0.areaDirections = [62,-1,1,-1];
		}else if(screen_index==1){
			area0.areaDirections = [62,-1,35,-1];
		}else if(screen_index==2){
			area0.areaDirections = [62,-1,45,-1];
		}else if(screen_index==3){
			area0.areaDirections = [62,-1,55,-1];
		}else if(screen_index==4){
			area0.areaDirections = [62,-1,56,-1];
		}else if(screen_index==5){
			area0.areaDirections = [62,-1,59,-1];
		}else if(screen_index=="0_0"){
			area0.areaDirections = [62,-1,1,-1];
		}else if(screen_index=="0_1"){
			area0.areaDirections = [62,-1,17,-1];
		}
	}
	function callBack(){
		set_move_logic();
	}
	function loadData(){
		if(ad_flag!=null){
			focus_logic.getDataByAjax("get_data/get_data.jsp?action=getAdd&url="+get_ip+"advertise/advertiseList.do&userName=" + epg_userid,load_ad)
		}
		focus_logic.getDataByAjax("get_data/get_data.jsp?action=getNewIndex&url="+get_ip+"hot/recommend/getRecommConfig.do&typeId=1&userName=" + epg_userid,load_newIndex);
		focus_logic.getDataByAjax("get_data/get_data.jsp?action=getHot&url="+get_ip+"shop/shopHomeList.do&page=1&userName=" + epg_userid,load_jinpin);
		//focus_logic.getDataByAjax("get_data/get_data.jsp?action=getHot&url="+get_ip+"shop/shopHomeList.do&page=1",load_tuijianData);
		focus_logic.getDataByAjax("get_data/get_data.jsp?action=getHot&url="+get_ip+"lobby/getLobbyAllProductList.do&page=1&userName=" + epg_userid,load_game);
		focus_logic.getDataByAjax("get_data/get_data.jsp?action=getHot&url="+get_ip+"GameVideo/getAllVideoList.do&page=1&userName=" + epg_userid,load_video);
		search_key = focus_logic.getCookie("search_key");
		focus_logic.delCookie("search_key");
		if(search_key==null || search_key=="" || search_key=="null"){
			area58.pageNumber = 1;
			focus_logic.getDataByAjax("get_data/get_data.jsp?action=search&url="+get_ip+"search/getRecommendProductList.do&page=1&number=6&userName=" + epg_userid,load_search_rec);
		}else{
			area58.pageNumber = focusObj.areaInfo[58].pageNumber;
			$("search_txt").innerHTML = search_key;
			focus_logic.getDataByAjax("get_data/get_data.jsp?action=search&url="+get_ip+"search/getProductListByKey.do"+"&key="+search_key+"&page="+area58.pageNumber+"&number=12&userName=" + epg_userid,load_search);
		}
		setInterval(function(){
			focus_logic.getDataByAjax("get_data/get_data.jsp?action=getMsg&url="+get_ip+"activity/sysMsg.do"+"&page="+1+"&number="+999+"&userName=" + epg_userid,load_Msg);
		},5000);
	}
	/************开始绑定数据***************/

	function load_newIndex(result){
		new_indexData=eval('('+result+')');
		load_tuijianData();
		 //load_pic(test_data1,page2_temp,35);
		}
		function load_jinpin(result){
			test_data1=eval('('+result+')');
			load_pic(test_data1,page2_temp,35);
		}
		function load_game(result){
			test_data2=eval('('+result+')');
			load_pic(test_data2,page3_temp,47);
		}
		function load_video(result){
			video_data=eval('('+result+')');
			var tmp_size=video_data.object.size>5?5:video_data.object.size;
			if(tmp_size==0){
				area55.setDataCount(0);
				area63.setDataCount(0);
				area64.setDataCount(0);
				area65.setDataCount(0);
			}
			else if(tmp_size==1){
				area55.setDataCount(1);
				area63.setDataCount(0);
				area64.setDataCount(0);
				area65.setDataCount(0);
				$("area55_img_0").src = video_data.object.list[0].img;
				area55.doms[0].moveRule=[-1,-1,-1,[56,0]];
				area56.doms[0].moveRule=area56.doms[3].moveRule=area56.doms[6].moveRule=area56.doms[9].moveRule=[-1,[55,0],-1,-1];
			}else if(tmp_size==2){
				area55.setDataCount(1);
				area63.setDataCount(1);
				area64.setDataCount(0);
				area65.setDataCount(0);
				$("area55_img_0").src = video_data.object.list[0].img;
				$("area63_img_0").src = video_data.object.list[1].img;
				area63.doms[0].moveRule=[-1,-1,-1,[56,0]];
				area56.doms[0].moveRule=area56.doms[3].moveRule=area56.doms[6].moveRule=area56.doms[9].moveRule=[-1,[63,0],-1,-1];
			}else if(tmp_size==3){
				area55.setDataCount(1);
				area63.setDataCount(1);
				area64.setDataCount(1);
				area65.setDataCount(0);
				$("area55_img_0").src = video_data.object.list[0].img;
				$("area63_img_0").src = video_data.object.list[1].img;
				$("area64_img_0").src = video_data.object.list[2].img;
				area63.doms[0].moveRule=[-1,-1,-1,[56,0]];
				area64.doms[0].moveRule=[-1,-1,-1,[56,0]];
				area56.doms[0].moveRule=area56.doms[3].moveRule=area56.doms[6].moveRule=area56.doms[9].moveRule=[-1,[63,0],-1,-1];
			}
			else if(tmp_size==4){
				area55.setDataCount(1);
				area63.setDataCount(1);
				area64.setDataCount(2);
				area65.setDataCount(0);
				$("area55_img_0").src = video_data.object.list[0].img;
				$("area63_img_0").src = video_data.object.list[1].img;
				$("area64_img_0").src = video_data.object.list[2].img;
				$("area64_img_1").src = video_data.object.list[3].img;
				area63.doms[0].moveRule=[-1,-1,-1,[56,0]];
				area64.doms[1].moveRule=[-1,-1,-1,[56,0]];
				area56.doms[0].moveRule=area56.doms[3].moveRule=area56.doms[6].moveRule=area56.doms[9].moveRule=[-1,[63,0],-1,-1];
			}
			else if(tmp_size==5){
				area55.setDataCount(1);
				area63.setDataCount(1);
				area64.setDataCount(2);
				area65.setDataCount(1);
				$("area55_img_0").src = video_data.object.list[0].img;
				$("area63_img_0").src = video_data.object.list[1].img;
				$("area64_img_0").src = video_data.object.list[2].img;
				$("area64_img_1").src = video_data.object.list[3].img;
				$("area65_img_0").src = video_data.object.list[4].img;
			}
		//load_video_pic(video_data);
	}
	/* function load_video_pic(_data){
		for(var i=0;i<area55.domsCount&&i<8;i++){
			if(_data.object.list[i].img != ""){
				$("area55_img_"+i).src = _data.object.list[i].img;
			}
		}

	} */
	function load_search(result){
		search_data=eval('('+result+')');
		area58.setDataCount(search_data.object.size,"area58_");
		area58.setAttrForDomsTxt(search_data.object.list,"productname","productname",0,"area58_txt_");
		load_search_pic(search_data);
	}
	function load_search_pic(_data){
		for(var i=0;i<area58.domsCount&&i<12;i++){
			if(_data.object.list[i].imageuri != ""){
				$("area58_img_"+i).src = _data.object.list[i].imageuri;
			}
		}

	}
	function load_search_rec(result){
		search_data=eval('('+result+')');
		area58.setDataCount(search_data.object.list.length,"area58_");
		area58.setAttrForDomsTxt(search_data.object.list,"productname","productname",0,"area58_txt_");
		load_search_pic(search_data);
	}
	function load_tuijianData(){
		var temp_i;
		var first_in=true;
		var type_arr
		if(type_save==1)type_arr=[0,3,3,3,3,3,3,3,3,3,2,3,2,3,3,3,3,3,3,3,2,3,2,3];
		else if(type_save==2)type_arr=[1,5,3,3,5,3,3,2,5,2,1,3,3,3,3,5,3,3,2,3];
		else if(type_save==3)type_arr=[4,3,3,5,3,3,4,3,3,5,3,3,4,2,3];
		else if(type_save==4)type_arr=[0,3,3,3,1,5,4,1,5,4];
		else type_arr=[4,5,5,5,3,3,3,4,5,5,5,4];
		flag_arr=[];
		if(type_arr.length<new_indexData.object.size){
			i_max=type_arr.length;
		}else{
			i_max=new_indexData.object.size;
		}
		for(var i=0;i<i_max;i++){
			if(first_in){
				temp_i=i;
				first_in=false;
			}else{
				while(flag_arr.indexOf(temp_i)!=-1){
					temp_i++;
				}
			}
			$("area"+(temp_i+2)+"_div0").style.display="block";
			$("area"+(temp_i+2)+"_div0").className="type_"+type_arr[i];
			$("area"+(temp_i+2)+"_img0").src=new_indexData.object.list[i].imgurl;
			$("area"+(temp_i+2)+"_txt").innerHTML=new_indexData.object.list[i].objname;
			var tmp_data = new_indexData.object.list[i];
			focus_logic.page.areas[temp_i+2]["tmp_data"] = tmp_data;
			focus_logic.page.areas[temp_i+2].okEvent = function(){
				focus_logic.savePageInfo();
				/******点击上报********/
				var tmp_data = focus_logic.page.areas[focus_logic.page.curAreaIndex]["tmp_data"];;
				var type=tmp_data.type;

				var contentName=tmp_data.objname;
				var contentId=tmp_data.objid;
				var parentType=area0.curDomIndex;
				var pageIndex=(this.curIndex>=17&&this.curIndex<=34)?2:1;
				var position=this.curIndex;

				click_info(contentName,contentId,type,parentType,pageIndex,position);

				var appName = "com.utstar.appstoreapplication.activity";
				var className = "com.utstar.appstoreapplication.activity.StartAppActivity";
				/*var count = 0;
				for(var i=0;i<4;i++){
					if(focus_logic.page.curAreaIndex>(_offset+1+i*2) && (data_1.object.list[i].type==1 || data_1.object.list[i].type==5)){
						count = count+1;
					}
				}
				var _num = focus_logic.page.areas[focus_logic.page.curAreaIndex].type==0?focus_logic.page.curAreaIndex:(focus_logic.page.curAreaIndex-1);
				var _in = (_num-_offset)/2-count;
				*/
				var tmp_data = focus_logic.page.areas[focus_logic.page.curAreaIndex]["tmp_data"];

				if(tmp_data.imgurl != undefined){
					delete tmp_data.imgurl;
				}
				var new_data={};
				new_data["type"]=tmp_data.type;
				new_data["row"]=1;
				new_data["turnType"]=tmp_data.type;
				new_data["type"]=tmp_data.type;
				new_data["normalItemData"]={"isBuy":false,"id":tmp_data.objid,"tag":1,"title":tmp_data.objname,"area":tmp_data.position,"floorimg":""};

				var data = JSON.stringify(new_data);

				var intentMessage = "{\"intentType\":0,\"appName\":\"" + appName + "\", \"className\":\"" + className + "\"," +
				"\"extra\":["+
				"{\"name\":\"epgDoman\",\"value\":\"" + epgDoman + "\"},"+
				"{\"name\":\"areaId\",\"value\":\"" + _stb_areaid + "\"},"+
				"{\"name\":\"serviceUrl\",\"value\":\""+get_ip+"\"}," +
				"{\"name\":\"epgUserId\",\"value\":\"" + UserID + "\"},"+
				"{\"name\":\"epgToken\",\"value\":\"" + epgToken + "\"},"+
				"{\"name\":\"isDispath\",\"value\":" + true + "},"+
				"{\"name\":\"action\",\"value\":\"" + 0 + "\"},"+
				"{\"name\":\"params\",\"value\":" + data + "}"+
				"]}";
				var mes_obj = {};
				mes_obj["areaId"] = _stb_areaid;
				mes_obj["epgUserId"] = UserID;
				mes_obj["epgToken"] = epgToken;
				mes_obj["isDispath"] = true;
				mes_obj["serviceUrl"] = get_ip;
				mes_obj["action"] = 0;
				mes_obj["params"] = tmp_data;
				var mes_str = JSON.stringify(mes_obj);
				if(!is_app_installed(mes_str)) return;
				try{
					if(tmp_data.type==-1 || tmp_data.type=="-1") return;
					if(tmp_data.type != 2001 && tmp_data.type != "2001"){
						STBAppManager.startAppByIntent(intentMessage);
						onClick(tmp_data.objid,"")
						checkGame(tmp_data.objid);
					}else{
						var type_tmp = tmp_data.type;

						var link = tmp_data.linkurl;
						var link_url = link.replace('{epgUrl}',epgUrl);
						var tmp_returnUrl = "http://"+location.host+location.pathname;
						if(link_url != "" && link_url!=undefined){
							if(link_url.indexOf("?")==-1){
								focus_logic.setCookie("content_left",document.getElementById("part_0_content").style.left);
								window.location.href = link_url+"?ReturnURL="+tmp_returnUrl+"&UserID="+epg_userid+"&UserToken="+epgToken;
							}else{
								var url_1 = link_url.substring(0,link_url.indexOf("?"));
								var url_2 = link_url.substring(link_url.indexOf("?")+1);
								focus_logic.setCookie("content_left",document.getElementById("part_0_content").style.left);
								window.location.href = url_1+"?ReturnURL="+tmp_returnUrl+"&UserID="+epg_userid+"&UserToken="+epgToken+"&"+url_2;
							}
						}
					}
				}catch (e){console.log(intentMessage)}
			}
			if(type_arr[i]==0){
				flag_arr.push(temp_i+1,temp_i+3,temp_i+4,temp_i+6,temp_i+7);
				temp_i=temp_i+1;
			}else if(type_arr[i]==1){
				flag_arr.push(temp_i+1,temp_i+3,temp_i+4);
				temp_i=temp_i+1;
			}else if(type_arr[i]==2){
				flag_arr.push(temp_i+1);
				temp_i=temp_i+1;
			}else if(type_arr[i]==4){
				flag_arr.push(temp_i+1,temp_i+2,temp_i+3,temp_i+4,temp_i+5);
				temp_i=temp_i+2;
			}else if(type_arr[i]==5){
				flag_arr.push(temp_i+3);
				temp_i=temp_i+1;
			}else{
				temp_i=temp_i+1;
			}

		}
		if(type_save==1){
			focus_logic.page.areas[2].areaDirections[2]=4;
			focus_logic.page.areas[2].areaDirections[3]=11;
			focus_logic.page.areas[4].areaDirections[0]=2;
			focus_logic.page.areas[7].areaDirections[0]=2;
			focus_logic.page.areas[10].areaDirections[0]=2;

			focus_logic.page.areas[11].areaDirections[1]=2;
			focus_logic.page.areas[12].areaDirections[1]=2;

			focus_logic.page.areas[15].areaDirections[3]=17;
			focus_logic.page.areas[17].areaDirections[2]=19;
			focus_logic.page.areas[19].areaDirections[0]=17;
			focus_logic.page.areas[20].areaDirections[2]=22;
			focus_logic.page.areas[22].areaDirections[0]=20;
			focus_logic.page.areas[24].areaDirections[1]=20;

			focus_logic.page.areas[27].areaDirections[3]=29;
			focus_logic.page.areas[29].areaDirections[2]=31;
			focus_logic.page.areas[31].areaDirections[0]=29;
			focus_logic.page.areas[32].areaDirections[2]=34;
			focus_logic.page.areas[34].areaDirections[0]=32;
		}else if(type_save==2){
			focus_logic.page.areas[2].areaDirections[2]=4;
			focus_logic.page.areas[2].areaDirections[3]=8;
			focus_logic.page.areas[4].areaDirections[0]=2;
			focus_logic.page.areas[4].areaDirections[3]=10;
			focus_logic.page.areas[8].areaDirections[1]=2;
			focus_logic.page.areas[9].areaDirections[1]=2;

			focus_logic.page.areas[10].areaDirections[1]=4;
			focus_logic.page.areas[10].areaDirections[3]=16;
			focus_logic.page.areas[12].areaDirections[2]=10;
			focus_logic.page.areas[12].areaDirections[3]=14;
			focus_logic.page.areas[14].areaDirections[2]=16;
			focus_logic.page.areas[16].areaDirections[0]=14;
			focus_logic.page.areas[16].areaDirections[1]=10;
			focus_logic.page.areas[16].areaDirections[3]=22;
			focus_logic.page.areas[17].areaDirections[2]=16;
			focus_logic.page.areas[20].areaDirections[2]=22;
			focus_logic.page.areas[20].areaDirections[3]=26;
			focus_logic.page.areas[22].areaDirections[0]=20;
			focus_logic.page.areas[22].areaDirections[1]=16;
			focus_logic.page.areas[25].areaDirections[0]=20;
			focus_logic.page.areas[26].areaDirections[1]=20;
			focus_logic.page.areas[27].areaDirections[1]=20;
			focus_logic.page.areas[28].areaDirections[3]=34;
			focus_logic.page.areas[30].areaDirections[2]=28;
			focus_logic.page.areas[30].areaDirections[3]=32;
			focus_logic.page.areas[32].areaDirections[2]=34;
			focus_logic.page.areas[34].areaDirections[0]=32;
			focus_logic.page.areas[34].areaDirections[1]=28;
		}else if(type_save==3){
			focus_logic.page.areas[2].areaDirections[2]=-1;
			focus_logic.page.areas[2].areaDirections[3]=8;
			focus_logic.page.areas[8].areaDirections[1]=2;
			focus_logic.page.areas[9].areaDirections[1]=2;
			focus_logic.page.areas[10].areaDirections[1]=2;
			focus_logic.page.areas[10].areaDirections[3]=14;
			focus_logic.page.areas[12].areaDirections[2]=10;
			focus_logic.page.areas[12].areaDirections[3]=14;
			focus_logic.page.areas[14].areaDirections[2]=-1;
			focus_logic.page.areas[14].areaDirections[3]=20;
			focus_logic.page.areas[20].areaDirections[1]=14;
			focus_logic.page.areas[21].areaDirections[1]=14;
			focus_logic.page.areas[22].areaDirections[1]=14;
			focus_logic.page.areas[22].areaDirections[3]=26;
			focus_logic.page.areas[24].areaDirections[2]=22;
			focus_logic.page.areas[24].areaDirections[3]=26;
			focus_logic.page.areas[26].areaDirections[2]=-1;
			focus_logic.page.areas[26].areaDirections[3]=32;
			focus_logic.page.areas[32].areaDirections[1]=26;
			focus_logic.page.areas[32].areaDirections[2]=34;
			focus_logic.page.areas[34].areaDirections[0]=32;
			focus_logic.page.areas[34].areaDirections[1]=26;
		}else if(type_save==4){
			focus_logic.page.areas[2].areaDirections[2]=4;
			focus_logic.page.areas[2].areaDirections[3]=11;
			focus_logic.page.areas[4].areaDirections[0]=2;
			focus_logic.page.areas[7].areaDirections[0]=2;
			focus_logic.page.areas[10].areaDirections[0]=2;
			focus_logic.page.areas[11].areaDirections[1]=2;
			focus_logic.page.areas[11].areaDirections[2]=13;
			focus_logic.page.areas[11].areaDirections[3]=17;
			focus_logic.page.areas[13].areaDirections[0]=11;
			focus_logic.page.areas[13].areaDirections[3]=17;
			focus_logic.page.areas[17].areaDirections[1]=11;
			focus_logic.page.areas[17].areaDirections[2]=-1;
			focus_logic.page.areas[17].areaDirections[3]=23;
			focus_logic.page.areas[23].areaDirections[1]=17;
			focus_logic.page.areas[23].areaDirections[2]=25;
			focus_logic.page.areas[23].areaDirections[3]=29;
			focus_logic.page.areas[25].areaDirections[0]=23;
			focus_logic.page.areas[25].areaDirections[1]=17;
			focus_logic.page.areas[25].areaDirections[3]=29;
			focus_logic.page.areas[29].areaDirections[1]=23;
			focus_logic.page.areas[29].areaDirections[2]=35;
			focus_logic.page.areas[29].areaDirections[3]=35;
		}else if(type_save==5){
			focus_logic.page.areas[2].areaDirections[2]=-1;
			focus_logic.page.areas[2].areaDirections[3]=8;
			focus_logic.page.areas[8].areaDirections[1]=2;
			focus_logic.page.areas[8].areaDirections[3]=14;
			focus_logic.page.areas[9].areaDirections[1]=2;
			focus_logic.page.areas[9].areaDirections[3]=15;
			focus_logic.page.areas[10].areaDirections[1]=2;
			focus_logic.page.areas[10].areaDirections[3]=16;
			focus_logic.page.areas[14].areaDirections[1]=8;
			focus_logic.page.areas[15].areaDirections[1]=9;
			focus_logic.page.areas[15].areaDirections[3]=17;
			focus_logic.page.areas[16].areaDirections[1]=10;
			focus_logic.page.areas[16].areaDirections[3]=17;
			focus_logic.page.areas[17].areaDirections[2]=-1;
			focus_logic.page.areas[17].areaDirections[3]=23;
			focus_logic.page.areas[23].areaDirections[1]=17;
			focus_logic.page.areas[23].areaDirections[3]=29;
			focus_logic.page.areas[24].areaDirections[1]=17;
			focus_logic.page.areas[24].areaDirections[3]=29;
			focus_logic.page.areas[25].areaDirections[1]=17;
			focus_logic.page.areas[25].areaDirections[3]=29;
			focus_logic.page.areas[29].areaDirections[1]=23;
			focus_logic.page.areas[29].areaDirections[2]=35;
			focus_logic.page.areas[29].areaDirections[3]=35;
		}

	}


	var currentVersion;
	var lastVersion;

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
			}, 60000);
		}
		cur_focus_info[0] = focus_logic.page.curAreaIndex;
		cur_focus_info[1] = focus_logic.page.areas[cur_focus_info[0]].curDomIndex;
		focus_logic.page.setCurrentFocus(38, 0);
		$("area61_0").style.display = "block";
		setTimeout(function () {
			focus_logic.page.setCurrentFocus(cur_focus_info[0], cur_focus_info[1]);
			$("area61_0").style.display = "none";
		}, 10000);
		return false;
	}

	function is_app_installed(_params) {
		var appName = "com.utstar.appstoreapplication.activity";
		try {
			if (STBAppManager.isAppInstalled(appName)) {
				var current = getCurrentVersion();
				var last = getLastVersion();
//                document.getElementById("_test").innerHTML="Current:" + current + "/Last:" + last;
if (current < last && current < 323) {
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

function sava_params(_params){
	focus_logic.getDataByAjax("get_data/get_data.jsp?action=savaParams&url="+get_ip+"mine/handleParams.do"+"&macAddr="+key+"&params="+escape(_params),load_sava_info);
}

function load_sava_info(result){
	console.log(result);
}

function checke_nav_focus(){
	area0.curDomIndex=screen_index;
	if(pre!=area0.curDomIndex){
		area0.doms[pre].element.className = "item";
		area0.doms[area0.curDomIndex].element.className = "item item_selected";
		pre=area0.curDomIndex;
	}
}
function load_pic(_content_data,_page_temp,_offset){
	var data_0 = get_data_0(_content_data);
	var data_1 = get_data_1(_content_data);
	var start_area = _offset;

	for(var i=0;i<data_1.object.size;i++){
		var curAreaID = i*2+_page_temp+_offset+1;
		while(focus_logic.page.areas[curAreaID]["isShow"]==0){
			curAreaID = curAreaID+2;
			_page_temp = _page_temp+2;
		}
		var type_tmp = data_1.object.list[i].type;
		var ItemData="normalItemData";
		if(type_tmp>3){
			type_tmp = type_tmp-4;
			ItemData = "SimpleItemData";
		}
		focus_logic.page.areas[curAreaID]["isShow"] = 1;

		var max_area_id;
			if(type_tmp==0){	//竖条
				focus_logic.page.areas[curAreaID]["isShow"] = 0;
				curAreaID = curAreaID-1;
				focus_logic.page.areas[curAreaID]["isShow"] = 1;
				focus_logic.page.areas[curAreaID]["type"] = 0;
				focus_logic.page.areas[curAreaID].areaDirections[2] = -1;
				if(curAreaID-1 >= _offset || curAreaID-1 == 46){
					focus_logic.page.areas[curAreaID-1].areaDirections[3] = curAreaID;
				}
				if(curAreaID-3 >= _offset && focus_logic.page.areas[curAreaID-3]["type"] == 1){
					focus_logic.page.areas[curAreaID-3].areaDirections[3] = curAreaID;
				}

				if(curAreaID>=2 && curAreaID<=34){
					max_area_id = 34;
				}else if(curAreaID>=35 && curAreaID<=44){
					max_area_id = 44;
				}else if(curAreaID>=47 && curAreaID<=54){
					max_area_id = 54;
				}
				if((curAreaID+3)<=max_area_id){
					focus_logic.page.areas[curAreaID+3].areaDirections[1] = curAreaID;
				}

			}else if(type_tmp==1){	//横条
				focus_logic.page.areas[curAreaID+2]["isShow"] = 0;
				focus_logic.page.areas[curAreaID]["type"] = 1;
				focus_logic.page.areas[curAreaID+1].areaDirections[2] = curAreaID;

				if(curAreaID>=2 && curAreaID<=34){
					max_area_id = 34;
				}else if(curAreaID>=35 && curAreaID<=44){
					max_area_id = 44;
				}else if(curAreaID>=47 && curAreaID<=54){
					max_area_id = 54;
				}
				if((curAreaID+4) <= max_area_id){
					focus_logic.page.areas[curAreaID+4].areaDirections[1] = curAreaID;
					focus_logic.page.areas[curAreaID].areaDirections[3] = curAreaID+4;
				}else{
					focus_logic.page.areas[curAreaID].areaDirections[3] = curAreaID+4;
				}
			}
			$('area'+curAreaID+'_div'+type_tmp).style.display="block";
			$('area'+curAreaID+'_img'+type_tmp).src = data_1.object.list[i][ItemData].img;
			$('area'+curAreaID+'_type'+type_tmp+"_txt").innerHTML = data_1.object.list[i][ItemData].title;
			var tmp_data = data_1.object.list[i];
			focus_logic.page.areas[curAreaID]["tmp_data"] = tmp_data;
			focus_logic.page.areas[curAreaID].okEvent = function(){
				focus_logic.savePageInfo();
				/******点击上报********/
				var tmp_data = focus_logic.page.areas[focus_logic.page.curAreaIndex]["tmp_data"];
				var type=tmp_data.type;
				var ItemData_save="normalItemData";
				if(type>3){
					ItemData_save = "SimpleItemData";
				}
				var contentName=tmp_data[ItemData_save].title;
				var contentId=tmp_data[ItemData_save].id;
				var parentType=area0.curDomIndex;
				var pageIndex=(this.curIndex>=39&&this.curIndex<=48)?2:1;
				var position=this.curIndex;

				click_info(contentName,contentId,type,parentType,pageIndex,position);

				var appName = "com.utstar.appstoreapplication.activity";
				var className = "com.utstar.appstoreapplication.activity.StartAppActivity";
				var count = 0;
				for(var i=0;i<4;i++){
					if(focus_logic.page.curAreaIndex>(_offset+1+i*2) && (data_1.object.list[i].type==1 || data_1.object.list[i].type==5)){
						count = count+1;
					}
				}
				var _num = focus_logic.page.areas[focus_logic.page.curAreaIndex].type==0?focus_logic.page.curAreaIndex:(focus_logic.page.curAreaIndex-1);
				var _in = (_num-_offset)/2-count;
				var tmp_data = focus_logic.page.areas[focus_logic.page.curAreaIndex]["tmp_data"];
				if(tmp_data.normalItemData != undefined){
					delete tmp_data.normalItemData.img;
				}else if(tmp_data.SimpleItemData != undefined){
					delete tmp_data.SimpleItemData.img;
				}
				var data = JSON.stringify(tmp_data);

				var intentMessage = "{\"intentType\":0,\"appName\":\"" + appName + "\", \"className\":\"" + className + "\"," +
				"\"extra\":["+
				"{\"name\":\"epgDoman\",\"value\":\"" + epgDoman + "\"},"+
				"{\"name\":\"areaId\",\"value\":\"" + _stb_areaid + "\"},"+
				"{\"name\":\"epgUserId\",\"value\":\"" + UserID + "\"},"+
				"{\"name\":\"serviceUrl\",\"value\":\""+get_ip+"\"}," +
				"{\"name\":\"epgToken\",\"value\":\"" + epgToken + "\"},"+
				"{\"name\":\"isDispath\",\"value\":" + true + "},"+
				"{\"name\":\"action\",\"value\":\"" + 0 + "\"},"+
				"{\"name\":\"params\",\"value\":" + data + "}"+
				"]}";
				var mes_obj = {};
				mes_obj["areaId"] = _stb_areaid;
				mes_obj["epgUserId"] = UserID;
				mes_obj["epgToken"] = epgToken;
				mes_obj["serviceUrl"] = get_ip;
				mes_obj["isDispath"] = true;
				mes_obj["action"] = 0;
				mes_obj["params"] = tmp_data;
				var mes_str = JSON.stringify(mes_obj);
				if(!is_app_installed(mes_str)) return;
				try{
					if(tmp_data.turnType==-1 || tmp_data.turnType=="-1") return;
					if(tmp_data.turnType==2||tmp_data.turnType==9||tmp_data.turnType==5){
						if(tmp_data.normalItemData != undefined){
							gotoProductList(tmp_data.normalItemData.id);
						}else if(tmp_data.SimpleItemData != undefined){
							gotoProductList(tmp_data.SimpleItemData.id);
						}
					}else if(tmp_data.turnType != 2001 && tmp_data.turnType != "2001"){
						STBAppManager.startAppByIntent(intentMessage);
						if(tmp_data.normalItemData != undefined){
							onClick(tmp_data.normalItemData.id,"");
							checkGame(tmp_data.normalItemData.id);
						}else if(tmp_data.SimpleItemData != undefined){
							onClick(tmp_data.SimpleItemData.id,"");
							checkGame(tmp_data.SimpleItemData.id);
						}
					}else{
						var type_tmp = tmp_data.type;
						var ItemData="normalItemData";
						if(type_tmp>3){
							ItemData = "SimpleItemData";
						}
						var link = tmp_data[ItemData].link;
						var link_url = link.replace('{epgUrl}',epgUrl);
						var tmp_returnUrl = "http://"+location.host+location.pathname;
						if(link_url != "" && link_url!=undefined){
							if(link_url.indexOf("?")==-1){
								focus_logic.setCookie("content_left",document.getElementById("part_0_content").style.left);
								window.location.href = link_url+"?ReturnURL="+tmp_returnUrl+"&UserID="+epg_userid+"&UserToken="+epgToken;
							}else{
								var url_1 = link_url.substring(0,link_url.indexOf("?"));
								var url_2 = link_url.substring(link_url.indexOf("?")+1);
								focus_logic.setCookie("content_left",document.getElementById("part_0_content").style.left);
								window.location.href = url_1+"?ReturnURL="+tmp_returnUrl+"&UserID="+epg_userid+"&UserToken="+epgToken+"&"+url_2;
							}
						}
					}
				}catch (e){console.log(intentMessage)}
			}
			if((data_1.object.size-1)==i && curAreaID<(max_area_id-1)){
				focus_logic.page.areas[curAreaID].areaDirections[3] = -1;
			}
		}
		_page_temp = 0;
		for(var i=0;i<data_0.object.size;i++){
			var curAreaID = i*2+_page_temp+_offset
			if(focus_logic.page.areas[curAreaID]["isShow"]==0){
				curAreaID = curAreaID+2;
				_page_temp = _page_temp+2;
			}
			while(focus_logic.page.areas[curAreaID]["isShow"]==1){
				curAreaID = curAreaID+2
				_page_temp = _page_temp+2;
			}

			var type_tmp = data_0.object.list[i].type;
			var ItemData="normalItemData";
			if(type_tmp>3){
				type_tmp = type_tmp-4;
				ItemData = "SimpleItemData";
			}
			focus_logic.page.areas[curAreaID]["isShow"] = 1;

			if(type_tmp==0){	//竖条
				focus_logic.page.areas[curAreaID].areaDirections[2] = -1;
				if(curAreaID-1 >= _offset){
					focus_logic.page.areas[curAreaID-1].areaDirections[3] = curAreaID;
				}
				if(focus_logic.page.areas[curAreaID].areaDirections[3] != -1){
					focus_logic.page.areas[curAreaID+3].areaDirections[1] = curAreaID;
				}
				focus_logic.page.areas[curAreaID+1]["isShow"] = 0;
				focus_logic.page.areas[curAreaID]["type"] = 0;
			}else if(type_tmp==1){	//横条
				focus_logic.page.areas[curAreaID+2]["isShow"] = 0;
				focus_logic.page.areas[curAreaID]["type"] = 1;
				focus_logic.page.areas[curAreaID+3].areaDirections[0] = curAreaID;
				var max_area_id;
				if(curAreaID>=2 && curAreaID<=34){
					max_area_id = 34;
				}else if(curAreaID>=35 && curAreaID<=44){
					max_area_id = 44;
				}else if(curAreaID>=47 && curAreaID<=54){
					max_area_id = 54;
				}
				if((curAreaID+4) <= max_area_id){
					focus_logic.page.areas[curAreaID+4].areaDirections[1] = curAreaID;
					focus_logic.page.areas[curAreaID].areaDirections[3] = curAreaID+4;
				}else{
					focus_logic.page.areas[curAreaID].areaDirections[3] = curAreaID+4;
				}
			}

			$('area'+curAreaID+'_div'+type_tmp).style.display="block";
			$('area'+curAreaID+'_img'+type_tmp).src = data_0.object.list[i][ItemData].img;
			$('area'+curAreaID+'_type'+type_tmp+"_txt").innerHTML = data_0.object.list[i][ItemData].title;
			var tmp_data = data_0.object.list[i];
			focus_logic.page.areas[curAreaID]["tmp_data"] = tmp_data;
			focus_logic.page.areas[curAreaID].okEvent = function(){
				focus_logic.savePageInfo();
				/******点击上报********/
				var tmp_data = focus_logic.page.areas[focus_logic.page.curAreaIndex]["tmp_data"];
				var type=tmp_data.type;
				var ItemData_save="normalItemData";
				if(type>3){
					ItemData_save = "SimpleItemData";
				}
				var contentName=tmp_data[ItemData_save].title;
				var contentId=tmp_data[ItemData_save].id;
				var parentType=area0.curDomIndex;
				var pageIndex=(this.curIndex>=39&&this.curIndex<=48)?2:1;
				var position=this.curIndex;

				click_info(contentName,contentId,type,parentType,pageIndex,position);

				var appName = "com.utstar.appstoreapplication.activity";
				var className = "com.utstar.appstoreapplication.activity.StartAppActivity";
				var count = 0;
				var count_1 = 0;
				for(var i=0;i<4&&i<data_0.object.list.length;i++){
					if(focus_logic.page.curAreaIndex>(_offset+i*2) && (data_0.object.list[i].type==1 || data_0.object.list[i].type==5 || focus_logic.page.areas[_offset+i*2].type==0)){
						count = count+1;
						count_1 = i;
					}
				}
				if(data_0.object.list[count_1].type==1){
					count = count-1;
				}
				var _in = (focus_logic.page.curAreaIndex-_offset)/2-count;
				var tmp_data = focus_logic.page.areas[focus_logic.page.curAreaIndex]["tmp_data"];
				if(tmp_data.normalItemData != undefined){
					delete tmp_data.normalItemData.img;
				}else if(tmp_data.SimpleItemData != undefined){
					delete tmp_data.SimpleItemData.img;
				}
				var data = JSON.stringify(tmp_data);

				var intentMessage = "{\"intentType\":0,\"appName\":\"" + appName + "\", \"className\":\"" + className + "\"," +
				"\"extra\":["+
				"{\"name\":\"epgDoman\",\"value\":\"" + epgDoman + "\"},"+
				"{\"name\":\"areaId\",\"value\":\"" + _stb_areaid + "\"},"+
				"{\"name\":\"epgUserId\",\"value\":\"" + UserID + "\"},"+
				"{\"name\":\"serviceUrl\",\"value\":\""+get_ip+"\"}," +
				"{\"name\":\"epgToken\",\"value\":\"" + epgToken + "\"},"+
				"{\"name\":\"isDispath\",\"value\":" + true + "},"+
				"{\"name\":\"action\",\"value\":\"" + 0 + "\"},"+
				"{\"name\":\"params\",\"value\":" + data + "}"+
				"]}";
				var mes_obj = {};
				mes_obj["areaId"] = _stb_areaid;
				mes_obj["epgUserId"] = UserID;
				mes_obj["epgToken"] = epgToken;
				mes_obj["isDispath"] = true;
				mes_obj["action"] = 0;
				mes_obj["serviceUrl"] = get_ip;
				mes_obj["params"] = tmp_data;
				var mes_str = JSON.stringify(mes_obj);
				if(!is_app_installed(mes_str)) return;
				try{
					if(tmp_data.turnType==-1 || tmp_data.turnType=="-1") return;
					if(tmp_data.turnType==2||tmp_data.turnType==9||tmp_data.turnType==5){
						if(tmp_data.normalItemData != undefined){
							gotoProductList(tmp_data.normalItemData.id);
						}else if(tmp_data.SimpleItemData != undefined){
							gotoProductList(tmp_data.SimpleItemData.id);
						}
					}else if(tmp_data.turnType != 2001 && tmp_data.turnType != "2001"){
						STBAppManager.startAppByIntent(intentMessage);
						if(tmp_data.normalItemData != undefined){
							onClick(tmp_data.normalItemData.id,"");
							checkGame(tmp_data.normalItemData.id);
						}else if(tmp_data.SimpleItemData != undefined){
							onClick(tmp_data.SimpleItemData.id,"");
							checkGame(tmp_data.SimpleItemData.id);
						}
					}else{
						var type_tmp = tmp_data.type;
						var ItemData="normalItemData";
						if(type_tmp>3){
							ItemData = "SimpleItemData";
						}
						var link = tmp_data[ItemData].link;
						var link_url = link.replace('{epgUrl}',epgUrl);
						var tmp_returnUrl = "http://"+location.host+location.pathname;
						if(link_url != "" && link_url!=undefined){
							if(link_url.indexOf("?")==-1){
								focus_logic.setCookie("content_left",document.getElementById("part_0_content").style.left);
								window.location.href = link_url+"?ReturnURL="+tmp_returnUrl+"&UserID="+epg_userid+"&UserToken="+epgToken;
							}else{
								var url_1 = link_url.substring(0,link_url.indexOf("?"));
								var url_2 = link_url.substring(link_url.indexOf("?")+1);
								focus_logic.setCookie("content_left",document.getElementById("part_0_content").style.left);
								window.location.href = url_1+"?ReturnURL="+tmp_returnUrl+"&UserID="+epg_userid+"&UserToken="+epgToken+"&"+url_2;
							}
						}
					}
				}catch (e){console.log(intentMessage)}
			}

		}

	}
	function get_data_0(tmp_data){
		var _d = new Object();
		_d["rltcode"] = tmp_data["rltcode"];
		_d["rltmsg"] = tmp_data["rltmsg"];
		_d["object"] = new Object();
		_d["object"]["list"] = new Array();
		for(var i=0;i<tmp_data["object"]["list"].length;i++){
			if(tmp_data["object"]["list"][i].row==0){
				_d["object"]["list"].push(tmp_data["object"]["list"][i]);
			}
		}
		_d["object"]["size"] = _d["object"]["list"]["length"];
		return _d;
	}

	function get_data_1(tmp_data){
		var _d = new Object();
		_d["rltcode"] = tmp_data["rltcode"];
		_d["rltmsg"] = tmp_data["rltmsg"];
		_d["object"] = new Object();
		_d["object"]["list"] = new Array();
		for(var i=0;i<tmp_data["object"]["list"].length;i++){
			if(tmp_data["object"]["list"][i].row==1){
				_d["object"]["list"].push(tmp_data["object"]["list"][i]);
			}
		}
		_d["object"]["size"] = _d["object"]["list"]["length"];
		return _d;
	}

	function click_info(_contentName,_contentId,_type,_parentType,_pageIndex,_position){
		var wanbaUserId=epg_userid;
		focus_logic.getDataByAjax("get_data/get_data.jsp?action=getClick&url="+get_ip+"userClick/addUserClick.do"+"&wanbaUserId="+wanbaUserId+"&contentName="+encodeURIComponent(_contentName)+"&contentId="+_contentId+"&type="+_type+"&parentType="+_parentType+"&pageIndex="+_pageIndex+"&position="+_position,load_click);
		onClick(_contentId,_contentName);
	}
	function load_click(result){
		//var click_result = eval('('+result+')');
		//console.log(click_result);

	}
	function Refresh_time(){
		var date = new Date();
		var hour = parseInt(date.getHours())<10?("0"+date.getHours()):date.getHours();
		var minutes = parseInt(date.getMinutes())<10?("0"+date.getMinutes()):date.getMinutes();
		$("time_c").innerHTML = hour+":"+minutes;
		setTimeout(Refresh_time,1000);
	}
	function huo_dong(){
		var appName = "com.utstar.appstoreapplication.activity";
		var className = "com.utstar.appstoreapplication.activity.StartAppActivity";

		var huo_dong_action = focus_logic.getParameter("action")==null?"":unescape(focus_logic.getParameter("action"));

		if(huo_dong_action=="" || huo_dong_action=="undefined" || huo_dong_action==undefined || huo_dong_action=="null") return;
		var arr = huo_dong_action.split(",");
//			var huo_dong_action_str = "";
var nextHuoDong = [];
for(var i=0;i<arr.length;i++){
	if(arr[i] == 7){
		var huodongURL = "<%=pobingURL%>";
		nextHuoDong[nextHuoDong.length] = huodongURL;
	}
			//if(arr[i]!=5 && arr[i]!=6){
				//huo_dong_action_str = huo_dong_action_str+arr[i]+",";
			//}
		}

		if(nextHuoDong.length == 0 || nextHuoDong == undefined){
			return;
		}

		var huo_dong_params = '';
		for (var i = 1; i < nextHuoDong.length; i++) {
			huo_dong_params += nextHuoDong[i];
			if(i<nextHuoDong.length-1){
				huo_dong_params += ",";
			}
		}
		var tmp_returnUrl = "http://"+location.host+location.pathname;
		var queryIndex = nextHuoDong.indexOf("?");
		var reqParams = "?ReturnURL="+tmp_returnUrl+"&UserID="+epg_userid+"&UserToken="+epgToken;
		if(queryIndex>0){
			var search = nextHuoDong[0].substring(nextHuoDong[0].indexOf("?"),nextHuoDong[0].length);
			reqParams = search + "&ReturnURL="+tmp_returnUrl+"&UserID="+epg_userid+"&UserToken="+epgToken;
		}
		if(huo_dong_params != ''){
			reqParams += "&";
			reqParams += escape(huo_dong_params);
		}
		focus_logic.setCookie("content_left",document.getElementById("part_0_content").style.left);
		window.location.href = nextHuoDong[0] + reqParams;

		//huo_dong_action_str = huo_dong_action_str.substring(0,huo_dong_action_str.length-1);
		//if(huo_dong_action_str == "" || huo_dong_action_str == undefined ||
		//    huo_dong_action_str == "undefined" || huo_dong_action_str == "null"){
		//    return;
		//}




		//var intentMessage = "{\"intentType\":0,\"appName\":\"" + appName + "\", \"className\":\"" + className + "\"," +
		//"\"extra\":["+
		//"{\"name\":\"epgDoman\",\"value\":\"" + epgDoman + "\"},"+
		//"{\"name\":\"areaId\",\"value\":\"" + _stb_areaid + "\"},"+
		//"{\"name\":\"epgUserId\",\"value\":\"" + UserID + "\"},"+
		//"{\"name\":\"epgToken\",\"value\":\"" + epgToken + "\"},"+
		//"{\"name\":\"isDispath\",\"value\":" + true + "},"+
		//"{\"name\":\"action\",\"value\":\"" + huo_dong_action_str + "\"}"+
		//"]}";
		//console.log(intentMessage);
		//try{
		//	STBAppManager.startAppByIntent(intentMessage);
		//}catch (e){console.log(intentMessage)}
	}
	function load_ad(result){
		ad_data= eval('('+result+')');
		if(ad_data.object.img.length<=0){
			clearInterval(timer);
			$("notic").style.display="none";
			try{
				var appName = "com.utstar.appstoreapplication.activity";
				if(STBAppManager.isAppInstalled(appName)){
					huo_dong();
				}
			}catch (e){}
			return;
		}else if(ad_data.object.img.length == 1){
			$("area60_0").innerHTML="关闭";
		}
		$("notic").style.display="block";
		$("notic_pic").src=ad_data.object.img[ad_img];
		focus_logic.page.setCurrentFocus(60,0);
	}
	function load_Msg(result){
		try{
			var msg_data=eval('('+result+')');
			var _l = 0;
			for(var i=0;i<msg_data.object.list.length;i++){
				var is_read = msg_data.object.list[i].isreaded;
				if(is_read==0 || is_read=="0"){
					_l = _l+1;
				}
			}
			$("mailNum").innerHTML="("+_l+")";
		}catch (e){}
	}

	function gotoProductList(contentID){
		try {
			var ip = window.location.host;
			if (window.location.port != undefined || window.location.port != "") {
			} else {
				ip = ip + ":" + window.location.port;
			}
			var returnURL = "http://" + ip + window.location.pathname;
			if(contentID == "16021215165349000001"){//游乐园
				focus_logic.setCookie("content_left",document.getElementById("part_0_content").style.left);
				window.location.href = "http://" + ip + "/Wanba/active/park/index.html?UserID=" + epg_userid + "&ReturnURL=" + returnURL + "&wayEUserName=wayEUserName";
				return true;
            }else if(contentID == "17140309181021000002"){//星乐园
            	focus_logic.setCookie("content_left",document.getElementById("part_0_content").style.left);
            	window.location.href = "http://" + ip + "/Wanba/active/starLand/index.html?UserID=" + epg_userid + "&ReturnURL=" + returnURL + "&wayEUserName=wayEUserName";
            	return true;
            }else if(contentID == "16021215165731000002"){//畅玩厅
            	focus_logic.setCookie("content_left",document.getElementById("part_0_content").style.left);
            	window.location.href = "http://" + ip + "/Wanba/active/ChangWanTing/index.html?UserID=" + epg_userid + "&ReturnURL=" + returnURL + "&wayEUserName=wayEUserName";
            	return true;
            }else if(contentID == "16021215165842000003"){//棋牌屋
            	focus_logic.setCookie("content_left",document.getElementById("part_0_content").style.left);
            	window.location.href = "http://" + ip + "/Wanba/active/chessRoom/index.html?UserID=" + epg_userid + "&ReturnURL=" + returnURL + "&wayEUserName=wayEUserName";
            	return true;
            }else{
            	return false;
            }
          } catch (e) {
          	return false;
          }
        }

        function checkGame(gameId) {
        	try {
        		focus_logic.getDataByAjax(get_ip + "userCentre/getPkgByGameId.do?gameId=" + gameId, parsePkgResult);
        	} catch (e) {
        	}
        }

        function parsePkgResult(result){
        	try {
        		var pkgResult = eval('(' + result + ')');
        		var rltCode = pkgResult.rltcode;
        		if(rltCode == 0){
        			var pkgInfo = pkgResult.object;
        			if(pkgInfo != undefined){
        				var productId = pkgInfo.productId
        				gotoProductList(productId);
        			}
        		}
        	} catch (e) {
        	}
        }

        function onClick(contentID,contentName){
        	try {
        		var date = getNowTime();
        		var url = "http://" + location.host + "/wbManager/onClickEvent.do";
        		var pageID="shouye";
        		var pageName="首页";
        		if("exit" == contentID){
        			pageID = "exit";
        			pageName = "exit";
        		}
        		var obj = {
        			epgUserName: epg_userid,
        			wayEUserName: "",
        			wayEUserGroup: "",
        			stbType: navigator.userAgent,
        			data: date,
        			pageID: pageID,
        			pageName: pageName,
        			contentID: contentID,
        			contentName: contentName
        		};

        		ajax({
        			url: url,
        			type: 'post',
        			data: obj,
        			success: function(param){
        				param = JSON.parse(param)
        				console.log('统计返回信息', param)
        			}
        		})
        	} catch (e) {
        		console.log(e);
        	}
        }

	//ajax 参数{url, type, dataType, data, success, fail}
	function ajax(options) {

		options = options || {}
		options.type = (options.type || "GET").toUpperCase()
		options.dataType = options.dataType || "json"
		var params = formatParams(options.data)
		var xhr = new XMLHttpRequest()
		xhr.onreadystatechange = function () {
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
	}

	function formatParams(param) {
		var arr = []
		for (var name in param) {
			arr.push(encodeURIComponent(name) + "=" + encodeURIComponent(param[name]))
		}
		return arr.join("&")
	}

	//获取时间
	function getNowTime(){
		var time = ''
		var year = (new Date()).getYear() + 1900
		var month = (new Date()).getMonth() + 1
		var date = (new Date()).getDate()
		var hour = (new Date()).getHours()
		var minute = (new Date()).getMinutes()
		var second = (new Date()).getSeconds()
		month = month < 10 ? ('0' + month) : month
		date = date < 10 ? ('0' + date) : date
		hour = hour < 10 ? ('0' + hour) : hour
		minute = minute < 10 ? ('0' + minute) : minute
		second = second < 10 ? ('0' + second) : second

		time = '' + year + month + date + '_' + hour + minute + second
		return time
	}

	function getParameter(name) {
		var value = undefined;
		try {
			var startIndex = window.location.search.indexOf("?");
			if (startIndex < 0) {
				return value;
			}
			var params = window.location.search.substring(startIndex + 1);
			var paramList = params.split("&");
			for (var i = 0; i < paramList.length; i++) {
				var paramStr = paramList[i];
				if (paramStr.indexOf("=") < 0) {
					continue;
				}
				var tmp = paramStr.split("=");
				var key = tmp[0];
				if (key == name) {
					value = tmp[1];
					break;
				}
			}
		} catch (e) {
			console.error(e);
		}
		return value;
	}

</script>