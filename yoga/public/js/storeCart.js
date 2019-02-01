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
/*功能点2：添加购物车*/

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
                    <td><input class="check" type="checkbox" checked /></td>
                    <td><img src="imgs/private/${list.ppic}" /></td>
                    <td>${list.pname}</td>
                    <td>有效期：90天</td>
                    <td><span class="price">¥${list.price}</span></td>
                    <td class="count">
                        <a >-</a>
                        <input type="text" value="${obj.count}"/>
                        <a >+</a>
                    </td>
                    <td class="subtotal">¥${list.price*obj.count}</td>
                    <td class="pid"><a href="${list.pid}" class="delete">删除</a></td>
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

/*功能点3：计算总价*/
function subSum(){
    //for(var i=0;i<check.length;i++){
    //    if(check[i].prop("checked")==true){
    //        console.log(i)
    //    }
    //}
        var subList=$(".subtotal");
        var total=0;
        for(var i=0;i<subList.length;i++){
            total+=parseInt(subList[i].innerHTML.split("¥")[1]);
        }
        $("#total b").html("¥"+total);

}

/*功能点4：商品数量加减*/
$(function(){
    $("#cartList").on('click','.count>a',function(){
        var self=this;
        var input=$(this).html()=='-'?$(this).next("input"): $(this).prev("input");
        var n=input.val();
        if($(this).html()=='+'){
            n++;
        }else if(n>1){
            n--;
        }
        input.val(n);
        var pid=$(this).parent("td.count").siblings(".pid").find("a").attr("href");
        $.ajax({
            type:"POST",
            url:"/storeCart/count",
            data:{uid:uid,pid:pid,count:n},
            success:function(){
                var count=$(self).siblings("input").val();
                var price=$(self).parent("td").prev("td").children("span").html().split("¥")[1];
                var subtotal=price*count;
                $(self).parent("td").next("td").html("¥"+subtotal);
                subSum();
            }
        });
    });
});

/*功能点5：商品删除*/
$(function(){
    $("#cartList").on("click",".delete",function(e){
        e.preventDefault();
        var self=this;
        var pid=$(this).attr("href");
        $.ajax({
            type:"POST",
            url:"/storeCart/delete",
            data:{uid:uid,pid:pid},
            success:function(){
                $(self).parent().parent().remove();
                subSum();
                if($(".subtotal").length==0){
                    $("#cart").html("<h3 id='goPrivate'>您的购物车已没有任何商品...<a href='private.html'>去看看</a></h3>");
                }
            }
        });
    });
});

/*功能点6：获取用户信息*/
$("#consigneeForm input[type='tel']").val(uname);
$("#consigneeForm input[type='email']").val(uname+"@163.com");
$("#username").blur(function(){
    var username=$("#username").val();
   $.ajax({
       type:"POST",
       url:"/user/update",
       data:{"username":username,"uid":uid}
   });
});









