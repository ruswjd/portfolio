let c = $("html,body").outerWidth();

$("button").click(function(){
    if(c<738){
        $(this).parent("ul").find(".sub").slideToggle().parents("ul").siblings().find(".sub").slideUp();
        $(this).addClass("active").parent("ul").siblings().children("button").removeClass();
    }
});
$(".up").click(function(){
    $("html,body").stop().animate({
        "scrollTop" : 0
    });
});

let a = $("main").offset().top;

$("header").mousewheel(function(e,d){
    if(d<0){
        $("html,body").stop().animate({
            "scrollTop" : a
        },1000);
    }
});

$(window).scroll(function(){
    let b = $(this).scrollTop();
    if(b>=100){
        $(".up").fadeIn();
    }else{
        $(".up").fadeOut();
    }
})
$("button").click(function(){
    if(c>=738){
        let d = $(this).parent("ul").index();
        $(this).addClass("active").parent("ul").siblings().children("button").removeClass();
        $(this).parent("ul").find(".sub").addClass("active").parent("ul").siblings().find(".sub").removeClass("active")
        if(d == 0){
            $(".sub").slideUp();
            $(this).parents("ul").find(".sub").stop().slideDown();
            $(this).parents("ul").next().find(".sub").stop().slideDown();
        }else if(d == 1){
            $(".sub").slideUp();
            $(this).parents("ul").find(".sub").stop().slideDown();
            $(this).parents("ul").prev().find(".sub").stop().slideDown();
        }else if(d == 2){
            $(".sub").slideUp();
            $(this).parents("ul").find(".sub").stop().slideDown();
            $(this).parents("ul").next().find(".sub").stop().slideDown();
        }else if(d == 3){
            $(".sub").slideUp();
            $(this).parents("ul").find(".sub").stop().slideDown();
            $(this).parents("ul").prev().find(".sub").stop().slideDown();
        }else if(d == 4){
            $(".sub").slideUp();
            $(this).parents("ul").find(".sub").stop().slideDown();
            $(this).parents("ul").next().find(".sub").stop().slideDown();
        }else if(d == 5){
            $(".sub").slideUp();
            $(this).parents("ul").find(".sub").stop().slideDown();
            $(this).parents("ul").prev().find(".sub").stop().slideDown();
        }else if(d == 6){
            $(".sub").slideUp();
            $(this).parents("ul").find(".sub").stop().slideDown();
            $(this).parents("ul").next().find(".sub").stop().slideDown();
        }else if(d == 7){
            $(".sub").slideUp();
            $(this).parents("ul").find(".sub").stop().slideDown();
            $(this).parents("ul").prev().find(".sub").stop().slideDown();
        }
    }
});