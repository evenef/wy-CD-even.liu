function getId(e){return document.getElementById(e)}function getClass(e){return document.getElementsByClassName(e)}function getEl(e){return document.querySelector(e)}function ajax(e){(e=e||{}).type=(e.type||"GET").toUpperCase(),e.dataType=e.dataType||"json";var t=formatParams(e.data),a=new XMLHttpRequest;a.onreadystatechange=function(){if(4==a.readyState){var t=a.status;t>=200&&t<300?e.success&&e.success(a.responseText,a.responseXML):e.fail&&e.fail(t)}},"GET"==e.type?(a.open("GET",e.url+"?"+t,!0),a.send()):"POST"==e.type&&(a.open("POST",e.url,!0),a.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),a.send(t))}function formatParams(e){var t=[];for(var a in e)t.push(encodeURIComponent(a)+"="+encodeURIComponent(e[a]));return t.join("&")}function searchObj(){var e={};return location.search.substring(1).split("&").map(function(t){e[t.split("=")[0]]=t.split("=")[1]}),e}function getNowTime(){var e=(new Date).getYear()+1900,t=(new Date).getMonth()+1,a=(new Date).getDate(),i=(new Date).getHours(),n=(new Date).getMinutes(),o=(new Date).getSeconds();return t=t<10?"0"+t:t,a=a<10?"0"+a:a,i=i<10?"0"+i:i,n=n<10?"0"+n:n,o=o<10?"0"+o:o,""+e+t+a+"_"+i+n+o}function imgLoadFnc(e,t){for(var a=0;a<e.length;a++){var i=0,n=new Image;n.src=e[a],n.onload=function(){++i>=e.length&&t&&t()}}}function imgRoll(e,t,a){if(e=e[0],imgRoll&&a){e.style.backgroundImage="url('"+t[0]+"')";var i="small",n=20*e.scrollWidth/a;setInterval(function(){e.scrollWidth<=0&&(i="big1"),e.scrollWidth>=n/20*a&&(i="small"),"small"===i?e.style.width=e.scrollWidth-n+"px":"big"===i&&(e.style.width=e.scrollWidth+n+"px")},20)}}function setCookie(e,t,a){var i=new Date;i.setDate(i.getDate()+(a||0)),document.cookie=e+"="+escape(t)+(null==a?"":";expires="+i.toGMTString()),console.log(i.getDate())}function listItemChoose(e,t,a,i){if(/-/.test(a)){var n=parseInt(a.split("-")[0]),o=parseInt(a.split("-")[1]),r=a;switch(e){case"left":r=n+"-"+((s=getEl("."+t+n+"-"+(o-1)))?o-1:o),s&&changeClassName(t,i,r);break;case"up":r=((s=getEl("."+t+(n-1)+"-"+o))?n-1:n)+"-"+o,s&&changeClassName(t,i,r);break;case"right":if(s=getEl("."+t+n+"-"+(o+1)))r=n+"-"+(o+1);else for(;--n>=0;)if(s=getEl("."+t+n+"-"+(o+1))){r=n+"-"+(o+1);break}s&&changeClassName(t,i,r);break;case"down":var s=getEl("."+t+(n+1)+"-"+o);if(s)r=n+1+"-"+o;else for(;--o>=0;)if(s=getEl("."+t+(n+1)+"-"+o)){r=n+1+"-"+o;break}s&&changeClassName(t,i,r)}return r}}function toSendPage(e,t,a,i){var n=searchObj(),o=n.wayEUserName,r=n.UserID,s="page"===e?"http://"+location.host+"/wbManager/pageBrowsing.do":"http://"+location.host+"/wbManager/onClickEvent.do",l=getNowTime(),c=location.href.split("/index.html")[0].split("/").pop(),t=t||document.title,m="page"===e?"":e,a=a||"",p={epgUserName:r,wayEUserName:o,data:l,pageID:c,pageName:t,contentID:m?c+"_"+m:"",contentName:a};console.log("统计信息："+(a||"进入"+t),p),ajax({url:s,type:"post",data:p,success:function(e){e=JSON.parse(e),console.log("统计返回信息",e),i&&i(e)}})}function startActivity(e,t){var a="",i="",n="",o="",r="";try{Authentication.CTCGetConfig("mac"),a=Authentication.CTCGetConfig("areaid"),i=Authentication.CTCGetConfig("EPGDomain"),n=Authentication.CTCGetConfig("UserToken")}catch(e){}switch(!0){case/cardDraw/.test(location.href):o="卡牌抽奖",r="kapaichoujiang";break;case/exchangeStore/.test(location.href):o="兑换中心",r="duihuanzhongxin";break;case/registerCards/.test(location.href):o="卡牌签到",r="kapaiqiandao";break;case/christmasActivity/.test(location.href):o="圣诞活动",r="ShengDanHuoDong"}var s={turnType:"1",referPageName:o,referPageID:r,normalItemData:{id:""+e}},l=JSON.stringify({intentType:0,appName:"com.utstar.appstoreapplication.activity",className:"com.utstar.appstoreapplication.activity.StartAppActivity",extra:[{name:"epgDoman",value:i},{name:"areaId",value:a},{name:"epgUserId",value:t||searchObj().UserID},{name:"epgToken",value:n},{name:"isDispath",value:!0},{name:"action",value:"0"},{name:"params",value:s},{name:"referPageName",value:o},{name:"referPageID",value:r},{name:"serviceUrl",value:"http://"+document.location.host+"/wbManager/"}]});try{STBAppManager.startAppByIntent(l)}catch(e){console.log(l)}}function playMediaEPG(e,t,a,i){media_left=e,media_top=t,media_width=a,media_height=i,initMediaStr(),Authentication.CTCSetConfig("key_ctrl_ex","0"),initMediaPlay(media_left,media_top,media_width,media_height),mp.playFromStart()}function initMediaStr(){mediaStr='[{mediaUrl:"'+playUrl+'",',mediaStr+='mediaCode: "jsoncode1",',mediaStr+="mediaType:1,",mediaStr+="audioType:1,",mediaStr+="videoType:1,",mediaStr+="streamType:1,",mediaStr+="drmType:1,",mediaStr+="fingerPrint:0,",mediaStr+="copyProtection:1,",mediaStr+="allowTrickmode:1,",mediaStr+="startTime:0,",mediaStr+="endTime:20000,",mediaStr+='entryID:"jsonentry1"}]'}function initMediaPlay(e,t,a,i){var n=(mp=new MediaPlayer(1)).getNativePlayerInstanceID();mp.initMediaPlayer(n,0,1,0,0,0,0,0,1,0,0,0,0,0),mp.setSingleMedia(mediaStr),mp.setAllowTrickmodeFlag(0),mp.setNativeUIFlag(0),mp.setAudioTrackUIFlag(0),mp.setMuteUIFlag(0),mp.setAudioVolumeUIFlag(0),mp.setVideoDisplayArea(e,t,a,i),mp.setVideoDisplayMode(0),mp.refreshVideoDisplay()}function destoryMP(){var e=mp.getNativePlayerInstanceID();mp.stop(),mp.releaseMediaPlayer(e)}function pageConsole(e,t){if(!getEl("#tempWrap")){var a=document.createElement("div");a.id="tempWrap",document.body.appendChild(a)}var i=getEl("#tempWrap");i.innerHTML+='<p style="color: rgba(255,255,255,1);line-height: 24px;word-break: break-all;">'+(e||"")+(t||"")+"</p>",document.body.style.position="absolute",i.style.width="1080px",i.style.paddingLeft="200px",i.style.position="absolute",i.style.bottom="300px",i.style.fontSize="16px",i.style.zIndex="999",i.style.backgroundColor="rgba(0,0,0,.5)"}var utilObj={getId:getId,getClass:getClass,getEl:getEl,ajax:ajax,formatParams:formatParams,searchObj:searchObj,getNowTime:getNowTime,imgLoadFnc:imgLoadFnc,imgRoll:imgRoll,setCookie:setCookie,listItemChoose:listItemChoose,toSendPage:toSendPage,startActivity:startActivity,pageConsole:pageConsole,playMediaEPG:playMediaEPG,destoryMP:destoryMP};try{var mp="",playUrl="",userchannelid="",media_left=0,media_top=0,media_width=0,media_height=0,mediaStr=""}catch(e){pageConsole("错误报告：",e)}