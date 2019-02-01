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

/*功能点2： 根据上页所选商品加载商品详情*/
$(function(){
    var url=location.href;
    var id=url.split("=")[1];
    $.ajax({
        type:"POST",
        url:"/detail",
        data:{"pid":id},
        success:function(detailList){
            var html1="";
            var html2="";
            var html3="";
            for(var i=0;i<detailList.length;i++){
                var d=detailList[i];
                html1+=`
                        <div id="bigImg" class="lf">
                            <img width="560px" src="imgs/private/${d.ppic}" />
                        </div>
                        <ul class="rt">
                            <li style="padding-top:0"><h2>${d.pname}</h2></li>
                            <li>学习价：<b>${d.price}</b> 元</li>
                            <li>
                                <a href="videoIntr.html">免费试看</a>
                                <a id="buy" href="storeCart.html?pid=${d.pid}" style="background-color: #44B549">立即购买</a>
                            </li>
                            <li>有效期：<span id="selected">90天</span><span>180天</span><span>365天</span></li>
                            <li>课程平均时长：<i>${d.pclass}</i></li>
                            <li class="user">
                                <div><p>用户评分</p>${d.grade}分</div>
                                <div><p>购买次数</p>${d.pcount}</div>
                                <div><p>名师提问</p>${d.quiz}</div>
                            </li>
                        </ul>
                `;
                var msg=d.pinfo.split("/");
                html2+=`
                <h3>课程大纲</h3>
                    <ul>`
                    for(var i=0;i<msg.length;i++){
                        html2+=`
                        <li>
                           <a href="#" title="${msg[i]}" target="_blank">${msg[i]}</a>
                        </li>
                        `;
                    }
                 html2+=`
                    </ul>
                `;
                html3+=`
                <img src="imgs/private/${d.picbig}" />
                `;
            }
            $("#top").html(html1);
            $("#productTop").html(html2);
            $("#productPic").html(html3);
        }
    });
});


/*功能点3： 未登录不能查看购物车*/
$("#top").on("click","#buy",function(e){
    if(sessionStorage["loginUname"]==undefined){
        alert("请先登录！");
        e.preventDefault();
    }
});


