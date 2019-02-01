/*功能点1： 异步请求页头和页尾*/
$("#header").load("header.html",function(){
    if(sessionStorage["loginUname"]==undefined){

    }else{
        $("#welcome").html("欢迎回来瑜伽网："+sessionStorage["loginUname"]);
        $("#exit").css("display","inline");
        $("#without").css("display","none");
    }
});
$("#footer").load("footer.html");
$("#asideRt").load("recommend.html");

/*功能2： 点击分类项选择*/
$(function(){
    $("#classify").children("li").click(function(){
        $(this).addClass("active").siblings("li").removeClass("active");
    });
});

/*功能3：异步请求头条列表*/
$.ajax({
    type:"GET",
    url:"/headline",
    success:function(headlineList){
        var html="";
        for(var i=0;i<headlineList.length;i++){
            var h=headlineList[i];
            html+=`
                  <li>
                    <div class="infoMsg">
                            <h2><a href="${h.hurl}" title="${h.hname}" target="_blank">${h.hname}</a></h2>
                            <p class="summary">${h.hmsg}</p>
                            <p class="rt"><span class="infoCount"> &nbsp;<a href="${h.hurl}" target="_blank">${h.hcount} </a> 条评论</span></p>
                        </div>
                    <div class="infoImg">
                            <a href="${h.hurl}" title="${h.hname}" target="_blank">
                                <img src="imgs/headline/${h.hpic}" >
                            </a>
                        </div>
                </li>
            `;
        }
        $("#information").html(html);
    }
});
