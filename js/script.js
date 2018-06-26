$(document).ready(function () {
    $(".cookie-banner").css("top", 550)
});

$(".zamknij").click(function () {
    $(".cookie-banner").css("opacity", 0)
});

$(document).ready(function () {
    $('.clients').slick({
        arrows: false,
        dots: true
    });
});

$(window).scroll(function () {
    var offset = 100;
    var duration = 800;

    $(window).scroll(function () {
        if ($(this).scrollTop() > offset) {
            $(".backto").fadeIn(duration);
        } else {
            $(".backto").fadeOut(duration);
        }
    });
});

$(function(){
    $(".form .contact-labels input").focusout(function(){
        var text_val = $(this).val();
        if(text_val = "") {
            $(this).removeClass("stay");
        } else{
            $(this).addClass("stay");
        }
    });
});

$(function(){
    $(".form2 .contact-labels2 input").focusout(function(){
        var text_val = $(this).val();
        if(text_val = "") {
            $(this).removeClass("stay2");
        } else{
            $(this).addClass("stay2");
        }
    });
});
