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


/*功能点2：视频列表选页*/
$(function(){
    var p=$("#sort");
    p.children("a").click(function(e){
        e.preventDefault();
        $(this).siblings("a").removeClass("active");
        $(this).addClass("active");
        var id=$(this).attr("href");
        p.siblings("div").css("z-index",1);
        p.siblings(id).css("z-index",100);
    });
});

/*功能点3：相关评论*/
//添加评论

    $("#submit").click(function(e){
        e.preventDefault();
        var comm=$("#comment").val();

        $.ajax({
            type:"POST",
            url:"/video/commentInsert",
            data:{"comm":comm},
            sucess:function(result){
            if(result.msg==1){  //没有拿到result  提交评论后textarea没清空
                $("#comment").val("");
            }
         }
        })
    });

////查询评论
$(function(){
    $.ajax({
        type:"GET",
        url:"/video/commentSel",
        success:function(commList){
            var html="";
            for(var i=0;i<commList.length;i++){
                html+=`
                 <li><img src="imgs/video/user.gif" /><span>${commList[i].comm}</span></li>
                `;
            }
            $("#commentList").html(html);
        }
    });
});


