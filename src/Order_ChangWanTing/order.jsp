<%@page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%
    String parms = request.getParameter("parms")==null?"":request.getParameter("parms");
	String data = request.getParameter("data")==null?"":request.getParameter("data");
	System.out.println("------------parms : "+parms);
	System.out.println("------------data : "+data);
%>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta name="page-view-size" content="1280*720">
    <title>orderTemp</title>
</head>
<body>
</body>
</html>
<script type="text/javascript">

window.location.href = window.location.href.replace(/order\.jsp/,'index.html') + '&parms=<%=parms%>&data=<%=data%>'
</script>
