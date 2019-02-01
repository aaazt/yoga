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

var uname=sessionStorage["loginUname"];
$(function(){
    var html="";
    html+=`
            <li>
                <span>账号：</span>
                <em>${uname}</em>
            </li>
            <li>
                <span>密码：</span>
                <em>********</em>
                <a href="#">修改</a>
            </li>
            <li>
                <span>E-mail：</span>
                <em>${uname}@163.com</em>
                <a href="#">修改</a>
            </li>
            <li>
                <span>账号：</span>
                <em>
                    <input type="radio" checked/>女
                    <input type="radio"/>男
                </em>
            </li>
            <li>
                <span>生日：</span>
                <em>1993-01-26</em>
            </li>

            <li>
                <span>收货地址：</span>
                <em>
                    <textarea name="" id="address" cols="70" rows="2"></textarea>
                </em>
            </li>
            <li>
                <span>瑜伽宣言：</span>
                <em>
                    <textarea name="declaration" id="declaration" cols="70" rows="5" placeholder="TA 很懒，还没任何宣言..."></textarea>
                </em>
            </li>
`;
    $('#userList').html(html);
});

