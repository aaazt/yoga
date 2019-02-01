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


/*功能点2：异步请求私课列表*/
$.ajax({
    type:"GET",
    url:"/private",
    success:function(privateList){
        var html="";
        for(var i=0;i<privateList.length;i++){
            var p=privateList[i];
            html+=`
                <dl class="classShow">
                    <dt>
                        <a href="detail.html?did=${p.pid}" title="${p.pname}" target="_blank" class="Recommend">
                            <img src="imgs/private/${p.ppic}" alt="${p.pname}">
                        </a>
                    </dt>
                    <dd>
                        <h3>
                            <a href="detail.html?did=${p.pid}" title="${p.pname}" target="_blank">${p.pname}</a>
                        </h3>
                    </dd>
                </dl>
                `;
        }
        $("#classInformation").html(html);

    }
});

/*功能点3：添加购物车表*/


var uid=sessionStorage["loginUid"];
$("#classInformation").on("click",".classShow",function(){
    var pid=$(this).children("dt").children("a").attr("href").split("=")[1];
    $.ajax({
        type:"POST",
        url:"/storeCart/update",
        data:{"pid":pid,"uid":uid},
        success:function(result){
            console.log(result)
            console.log("插表成功")
        }
    });
});



