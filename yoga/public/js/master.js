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
    $("#masterInformation").find("a").click(function(e){
        e.preventDefault();
        $(this).addClass("active").siblings("a").removeClass("active");
    });
});

/*功能点3：异步请求名师列表*/
$.ajax({
    type:"GET",
    url:"/master",
    success:function(masterList){
        var html="";
        for(var i=0;i<masterList.length;i++){
            var master=masterList[i];
            html+=`
                <dl>
                    <dt>
                        <a href="${master.murl}"  target="_blank">
                            <img src="imgs/master/${master.mpic}" alt="${master.mmsg}">
                        </a>
                    </dt>
                    <dd>
                        <h4>
                            <a href="${master.murl}" target="_blank">${master.mname}</a>
                        </h4>
                        <p>${master.mmsg}</p>
                    </dd>
                </dl>
                `;
        }
        $("#masterShow").html(html);

    }
});



