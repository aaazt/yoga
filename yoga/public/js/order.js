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


var uid=sessionStorage["loginUid"];
var uname=sessionStorage["loginUname"];



/*功能点2：收货人信息*/
$(function(){
    var html="";
    console.log(uid)
    $.ajax({

        type:"POST",
        url:"/user/sel",
        data:{"uid":uid},
        success:function(data){
            html+=`
                     姓名：<span>${data[0].username}</span>  &nbsp;&nbsp;&nbsp;&nbsp;  手机号：<span>${uname}</span>
            `;
            $("#userMsg").html(html);
        }
    });

});

/*功能点3：购物订单*/

$(function(){
    $.ajax({
        type:"POST",
        url:"/storeCart/add",
        data:{uid:uid},
        success:function(cartList){
            if(cartList){
                var html="";
                $.each(cartList,function(i,obj){
                    var list=obj.productList[0];
                    html+=`
                <tr>
                    <td><img src="imgs/private/${list.ppic}" /></td>
                    <td>${list.pname}</td>
                    <td>有效期：90天</td>
                    <td><span class="price">¥${list.price}</span></td>
                    <td class="count">
                        <span>${obj.count}</span>
                    </td>
                    <td class="subtotal">¥${list.price*obj.count}</td>
                </tr>
                `;
                });
                $("#cartList").html(html);
                subSum();

            }else{
                $("#cart").html("<h3 id='goPrivate'>您还没有添加任何商品...<a href='private.html'>去看看</a></h3>");
            }

        }
    });
});

function subSum(){
    var subList=$(".subtotal");
    var total=0;
    for(var i=0;i<subList.length;i++){
        total+=parseInt(subList[i].innerHTML.split("¥")[1]);
    }
    $("#total i").html("¥"+total);
    $("#total b").html("¥"+(total-25));
}
