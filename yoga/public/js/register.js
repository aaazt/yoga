
$("#footer").load("footer.html");

 //创建 [用户名,密码] 正则验证

    var regUname=/^0?(13|14|15|16|17|18)[0-9]{9}$/; //用于验证手机号
    var regUpwd=/^[0-9a-zA-Z]{6}$/; //用于验证密码

    var userName=$("#uname");
    var userPassword=$("#upwd");
    var userAgainPassword=$("#againPwd");
    var submitBtn=$("#LoginSubmit");

 //为uname和upwd输入框绑定失去焦点事件
    var valiName;
    var valiPwd;
    var vali=function(reg,txt){
        if(reg.test(txt.val())){
            txt.css("border","1px solid #CBCBCB");
            return true;
        }else{
            txt.css("border","1px solid #f00");
            return false;
        }
    };
    userName.blur(function(){
        valiName=vali(regUname,$(this));
    });
    userPassword.blur(function(){
        valiPwd=vali(regUpwd,$(this));

    });

//为againPwd输入框绑定失去焦点事件

    userAgainPassword.blur(function(){
        if(userAgainPassword.val()===userPassword.val()){
            userAgainPassword.css("border","1px solid #CBCBCB");
            return true;
       }else{
            userAgainPassword.css("border","1px solid #f00");
            return false;
        }
    });

/*提交注册信息*/
    submitBtn.click(function(){
    if(valiName&&valiPwd){
        /*判断当前手机号是否已经注册*/
        $.ajax({
            type:'POST',
            url:'/register_reg',
            data:{uname:userName.val()},
            success:function(result){
                if(result.code===200){
                    /*提交注册*/
                    $.ajax({
                             type:'POST',
                             url:'/register_add',
                             data:{
                                 uname:userName.val(),
                                 upwd:userPassword.val()
                             },
                             success:function(consequence){
                                if(consequence.code===200){
                                    location.href="login.html";
                                }else{
                                    alert("注册失败 ！"+consequence.msg);
                                }
                             }
                         });
                }else{
                    alert("注册失败 ！"+result.msg);
                }
            }
        });
    }else{
        alert("请完善信息后再提交 ！");
    }
});

