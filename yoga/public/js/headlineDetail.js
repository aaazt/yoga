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

/*功能点2： 图片切换*/
$("#page li").click(function(){
    var i=$(this).html();
    var path="imgs/headline/show0"+i+".jpg";
    $("#slide").attr("src",path);
});

$("#main .prev").click(function(e){
    e.preventDefault();
    var i= $("#slide").attr("src").split(".")[0].split("0")[1];
    i--;
    i<1&&(i=1);
    var path="imgs/headline/show0"+i+".jpg";
    $("#slide").attr("src",path);
});
$("#main .next").click(function(e){
    e.preventDefault();
    var i= $("#slide").attr("src").split(".")[0].split("0")[1];
    i++;
    i>7&&(i=7);
    var path="imgs/headline/show0"+i+".jpg";
    $("#slide").attr("src",path);
});
