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
    $("#guildChoose").children("li").click(function(){
        $(this).siblings("li").removeClass("active");
        $(this).addClass("active");
    });
});

/*功能3：异步请求会馆列表*/
$.ajax({
    type:"GET",
    url:"/guild",
    success:function(guildList){
        var html="";
        for(var i=0;i<guildList.length;i++){
            var g=guildList[i];
            html+=`
                 <dl>
                    <dt>
                        <a href="${g.gurl}" title="${g.gname}" target="_blank">
                            <img src="imgs/guild/${g.gpic}" alt="${g.gname}">
                        </a>
                    </dt>
                    <dd>
                        <h4>
                            <a href="${g.gurl}" title="${g.gname}" target="_blank" >
                                <i class="club-list"></i>
                                ${g.gname}
                            </a>
                        </h4>
                        <p>
                            ${g.gmsg}
                        </p>
                    </dd>
                </dl>
            `;
        }
        $("#guildShows").html(html);
    }
});

