/*名师介绍,分享,提问分页*/
$(function(){
    $("#details_lf").children("a").click(function(e){
        e.preventDefault();
        var id= $(this).attr("href");
        $(this).siblings("a").removeClass("active");
        $(this).addClass("active");
        $(id).siblings("div").css("z-index",1);
        $(id).css("z-index",100);
    });
});


/*投票*/
$(function(){
    var v=$("#vote");
    var n=v.html();
    v.parent("span").next("a").one("click",function(e){
        e.preventDefault();
        n++;
        v.html(n);
    });
});
