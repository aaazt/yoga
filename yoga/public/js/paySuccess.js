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

/*功能点2： 页面跳转*/
var p=document.querySelector("#successful>p");
function task(){
    var n=parseInt(p.innerHTML);
    if(n>1){
        n--;
        p.innerHTML=n+" 秒 后 自 动 关 闭";
    }else{
        close();
    }
}
var timer=setInterval(task,1000);
function stop(){
    clearInterval(timer);
    timer=null;
}
