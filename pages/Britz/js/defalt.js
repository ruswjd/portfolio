$(".allbutton").click(function(){
    $("nav").stop().animate({
        "right" : "0"
    });
    $(".closewrap").show();
});
$(".closewrap").click(function(){
    $("nav").stop().animate({
        "right" : "-80%"
    });
    $(this).hide();
});

$(".arrow").click(function(){
    $(this).parents("li").find(".sub").stop().slideToggle()
});
$(".image").slick({
    "nextArrow" : ".next",
    "prevArrow" : ".prev"

});
$(".slider1").slick({
    "slidesToShow" : 2,
    "nextArrow" : ".right1",
    "prevArrow" : ".left1",
    "autoplay" : true,
    responsive:[
        {
            breakpoint : 991,
            settings: {
                slidesToShow : 3,
            },
        },
        {
            breakpoint : 658,
            settings: {
                slidesToShow : 2,
            }
        }

    ]

});
$(".slider2").slick({
    "slidesToShow" : 2,
    "nextArrow" : ".right2",
    "prevArrow" : ".left2",
    "autoplay" : true,
    responsive:[
        {
            breakpoint : 991,
            settings: {
                slidesToShow : 3,
            },
        },
        {
            breakpoint : 658,
            settings: {
                slidesToShow : 2,
            }
        }

    ]
});

$(".topper").click(function(){
    $("html,body").stop().animate({
        "scrollTop" : 0,
    });
});

$(window).resize(function(){
    let wid = $(window).width();
    let scr = $(window).scrollTop();
    if(wid < 770 || scr > 200){
        $(".top").hide();
    }else if(wid > 770 && scr < 200){
        $(".top").css({
            "display" : "flex",
        });
    }
});
$(window).scroll(function(){
    let wid = $(window).width();
    let scr = $(window).scrollTop();
    if(wid < 770 || scr > 200){
        $(".top").hide();
    }else if(wid > 770 && scr < 200){
        $(".top").css({
            "display" : "flex",
        });
    }
});
$(".gnb li").mouseover(function(){
    let wid = $(window).width();
    if(wid > 992){
        $(this).find(".sub").stop().show();
        $(this).siblings().find(".sub").stop().hide();
    }
});
$(".gnb li").mouseout(function(){
    let wid = $(window).width();
    if(wid > 992){
    $(".sub").hide();
    }
});