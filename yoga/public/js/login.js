/*功能1：异步请求页尾*/
$("#footer").load("footer.html");

/*功能2：发起异步请求，进行登录验证*/
$("#LoginSubmit").click(function(){
    $.ajax({
        type:"POST",
        url:"/user/login",
        data:{
            uname:$("#uname").val(),
            upwd:$("#upwd").val()
        },
        success:function(result){
            if(result.code===200){
                //在客户端记录登录的uname和uid供后续的页面继续使用
                sessionStorage["loginUname"]=$("#uname").val();
                sessionStorage["loginUid"]=result.uid;
                location.href="index.html";
            }else{
                alert('登录失败！错误原因：'+result.msg);
            }
        }
    });
});
