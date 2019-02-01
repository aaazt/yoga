/*功能点1： 异步请求页头和页尾*/
$("#header").load("header.html",function(){
    if(sessionStorage["loginUname"]==undefined){

    }else{
        $("#welcome").html("欢迎回来瑜伽网 ："+"<a href='personal.html'title='去个人中心'>"+sessionStorage['loginUname']+"</a>");
        $("#exit").css("display","inline");
        $("#without").css("display","none");
    }
});
$("#footer").load("footer.html");
$("#asideRt").load("recommend.html");

/*功能点2： 点击分类项选择*/
$(function(){
    $(".list_item").children("a").click(function(){
        $(this).addClass("onfocus").siblings("a").removeClass("onfocus");
    });
});

/*功能点3：异步请求视频列表*/
$.ajax({
    type:"GET",
    url:"/video/list",
    success:function(videoList){
        var html="";
        for(var i=0;i<videoList.length;i++){
            var v=videoList[i];
            html+=`
                 <dl>
                    <dt>
                        <a href="${v.vurl}" title=" ${v.vmsg}" target="_blank">
                            <img src="imgs/video/${v.vpic}" >
                        </a>
                    </dt>
                    <dd>
                        <h4>
                            <a href="${v.vurl}" target="_blank">
                                ${v.vmsg}
                            </a>
                        </h4>
                        <p class="Broadcast">
                            播放：${v.vcount}
                        </p>
                    </dd>
                </dl>
            `;
        }
        $("#videoShow").html(html);
    }
});
