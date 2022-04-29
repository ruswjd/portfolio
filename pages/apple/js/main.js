
function mobile(){
    $("nav").css({"display" : "none"})
    $(".sub").css({"display" : "none"})
    $(".allmenu").click(function(){
        $("nav").stop().slideToggle();
        $("header").toggleClass("on")
        $(this).toggleClass("on")
    })
    $(".snb li").click(function(){
        $(this).find(".sub").stop().slideToggle();
    })
}
function pc(){
    $("nav").css({"display" : "block"})
    $(".sub").css({"display" : "block"})
}
let width = $(window).width();
if(width < 834){
    mobile();
}else{
    pc();
}
$(window).resize(function(){
    let width2 = $(window).width();
    if(width2 < 834){
        mobile();
    }else{
        pc();
    }
})