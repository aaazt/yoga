/*功能点1： 异步请求页头和页尾*/
$("#header").load("header.html",function(){
    if(sessionStorage["loginUname"]==undefined){

    }else{
        $("#welcome").html("欢迎回来瑜伽网 ："+"<a href='personal.html' title='去个人中心'>"+sessionStorage['loginUname']+"</a>");
        $("#exit").css("display","inline");
        $("#without").css("display","none");
    }
});
$("#footer").load("footer.html");

/*功能2：banner图片轮播*/
(function(){
    var i=1;
    var task=function(){
        i>4&&(i=1);
        $("#bannerImg>li,#bannerSpot>li>i").removeClass("active");
        $("#bannerImg>li:eq("+(i-1)+"),#bannerSpot>li>i:eq("+(i-1)+")").addClass("active");
        i++;
    };
    var timer=setInterval(task,2500);

    $(function(){
        $("#bannerImg>li").mouseover(function(){
            clearInterval(timer);
            timer=null;
        });
        $("#bannerImg>li").mouseout(function(){
            timer=setInterval(task,2500);
        });
    });
})();

/*功能3：收藏心形图片效果*/
$(function(){
    $("#yogaClassLow,#yuLeJiLow").on("click",".praise-img",function(){
        var img=$(this).attr("src");
        var i=img.indexOf(".");
        var n=img.substring(i-1,i);
        var count=$(".add-num").html();
        if(n==1){
            $(this).attr("src","imgs/index/like.png");
            count--;
        }else{
            $(this).attr("src","imgs/index/like1.png");
            count++;
        }
        $(".add-num").html(count)
    });
});

/*功能4：隐藏底部固定图片*/
$(function(){
    $("a.close").click(function(){
        $(this).parent("#fixed").css("display","none");
    });
});


/*功能5：瑜课堂：异步请求课堂列表*/
$.ajax({
    type:"GET",
    url:"/index/ygClass",
    success:function(classList){
        var html="";
        for(var i=0;i<classList.length;i++){
            var c=classList[i];
            html+=`
                <div class="ygClass">
                    <div class="like">
                        <span class="add-num"><em>${c.ccount}</em></span>
                        <img src="imgs/index/like.png"  class="praise-img" alt="练瑜伽，就上瑜伽网">
                    </div>
                    <a href="${c.curl}" title="${c.cmsg}" target="_blank" class="shade">
                        <i></i>
                        <p>${c.cmsg}<b></b></p>
                    </a>
                    <img src="imgs/index/${c.cpic}" >
                </div>
            `;
        }
        $("#yogaClassLow").html(html);
    }
});


/*功能6：瑜乐记*/

$.ajax({
    type:"GET",
    url:"/index/yuLeJi",
    //async:false,
    success:function(yuLeJiList){
        var html="";
        for(var i=0;i<yuLeJiList.length;i++){
            var y=yuLeJiList[i];
            html+=`
                <div class="yuLeJiMsg">
                    <h3>${y.ytitle}</h3>
                    <b></b>
                    <p>${y.ymsg}</p>
                    <div class="yljLike">
                        <img src="imgs/index/like.png"  class="praise-img" alt="练瑜伽，就上瑜伽网">
                    </div>
                </div>
                <div class="yuLeJiImg">
                    <a href="${y.yurl}"><img src="imgs/index/${y.ypic}"></a>
                </div>
            `;
        }
        $("#yuLeJiLow").html(html);
    }
});

/*功能7：瑜伽仕*/

$.ajax({
    type:"GET",
    url:"/index/tutor",
    success:function(tutorList){
        var html="";
        for(var i=0;i<tutorList.length;i++){
            var t=tutorList[i];
            html+=`
                <li><a href="${t.turl}"><img src="imgs/index/${t.tpic}" ></a></li>
            `;
        }
        $("#tutorImg").html(html);
    }
});

/*功能8：瑜伽圈*/
  //最新大会
$.ajax({
    type:"GET",
    url:"index/eventNew",
    success:function(eventList) {
        var html = "";
        for (var i = 0; i < eventList.length; i++) {
            var e = eventList[i];
            html += `
                <a href="${e.eurl}" target="_blank">
                            <span class="time">${new Date(e.edata).toLocaleDateString()}</span>
                            <p class="title">${e.etitle}</p>
                            <img src="imgs/index/fi.png">
                 </a>
            `;
        }
        $("#newEvent").html(html);
    }
});

//往期大会
$.ajax({
    type:"GET",
    url:"index/eventOld",
    success:function(eventList) {
        var html = "";
        for (var i = 0; i < eventList.length; i++) {
            var e = eventList[i];
            html += `
                <a href="${e.eurl}" target="_blank">
                            <span class="time">${new Date(e.edata).toLocaleDateString()}</span>
                            <p class="title">${e.etitle}</p>
                            <img src="imgs/index/fi.png">
                 </a>
            `;
        }
        $("#oldEvent").html(html);
    }
});
/*功能点9：留言框开始*/
    //控制页面样式
$(function(){
    $("#conMenu").click(function(){
        $(this).css("opacity","0").next("#consult").css("opacity","1");
    });
    $("#close").click(function(){
        $(this).parent().css("opacity","0").prev("#conMenu").css("opacity","1");
    });
});
    //发送用户留言
$("#consultSubmit").click(function(){
    function getQueryObject(url) {
        url = url == null ? window.location.href : url;
        var search = url.substring(url.lastIndexOf("?") + 1);
        var obj = {};
        var reg = /([^?&=]+)=([^?&=]*)/g;
        search.replace(reg, function (rs, $1, $2) {
            var name = decodeURIComponent($1);
            var val = decodeURIComponent($2);
            val = String(val);
            obj[name] = val;
            return rs;
        });
        return obj;
    }

    $.ajax({
        type:"POST",
        url:"/consult",
        data:getQueryObject(),
        success:function(data){
            console.log(data.msg)
        }
    });
});
/*留言框结束*/