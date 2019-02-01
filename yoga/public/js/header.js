
/*功能1：navMenu 下拉菜单*/
(function(){
    var menu=$("#navMenu>li");
    menu.mouseenter(function(){
        $(this).children("ul").css("display","block");
        $(this).children("a").addClass("hover");
        $(this).children("a").children("b").css("border-bottom-color"," #53A634").css("border-right-color","#53A634");
    });
    menu.mouseleave(function(){
        $(this).children("ul").css("display","none");
        $(this).children("a").removeClass("hover");
        $(this).children("a").children("b").css("border-bottom-color","#404040").css("border-right-color","#404040");
    });
})();

/*功能2：退出当前账号*/
(function(){
    $("#exit").click(function(){
        $("#welcome").css("display","none");
        $(this).css("display","none");
        $("#without").css("display","inline");
        //样式已做，功能未做
    });
})();

