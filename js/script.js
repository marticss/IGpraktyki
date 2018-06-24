$( document ).ready(function() {
    $(".cookie-banner").css("top", 550)
});

$(".zamknij").click(function () {
   $(".cookie-banner").css("opacity",0)
});

$(document).ready(function () {
    $('.clients').slick({
        arrows: false,
        dots: true 
    });
});

$(window).scroll(function(){
    var offset = 100;
    var duration = 800;

    $(window).scroll(function(){
        if($(this).scrollTop() > offset){
            $(".backto").fadeIn(duration);
        }else{
            $(".backto").fadeOut(duration);
        }
    });
});
