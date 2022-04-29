$(".allmenu").click(function(){
    $("nav").toggleClass("on");
    $(".closewrap").toggleClass("active");
})
$(".closewrap").click(function(){
    $("nav").removeClass("on");
    $(this).removeClass("active");
})

$(".search").click(function(){
    $(".searchmenu").addClass("on");
    $("main").hide();
});
$(".close").click(function(){
    $(".searchmenu").removeClass("on");
    $("main").show();
});
$(".banner").slick({
    "arrows" : false,
    "dots" : true,
});
$(".topper").click(function(){
    $("html,body").stop().animate({
        "scrollTop" : 0
    })
});