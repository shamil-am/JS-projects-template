$(document).ready(function () {

    $(document).scroll(() => {
        let diff = window.scrollY;
        if (diff > 170) {
            $(".row.bottom").slideDown().addClass("active-sticky");
            let pad = $(document).width() - 1140;
            $(".active-sticky").css("padding-left", pad/2);
            $(".active-sticky").css("padding-right", pad/2);
        }else{
            $(".active-sticky").css("padding-left", 0);
            $(".active-sticky").css("padding-right", 0);
            $(".row.bottom").removeClass("active-sticky");
        }
    });

    $(window).resize(function () { 
        if ($(document).width() > 1140) {
            let pad = $(document).width() - 1140; 
            $(".active-sticky").css("padding-left", pad/2);
            $(".active-sticky").css("padding-right", pad/2);
        }
    });

$("#collabse-button").click( () => {
    $(".collabse-menu").slideToggle();
})

$(".under-menu-opener").click( (e) => {
    e.preventDefault();
    $(e.currentTarget).next('.under-menu').slideToggle();
})

$('.carousel-main').slick({
    arrows: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1500,
    draggable: false,
    nextArrow: $('#next'),
    prevArrow: $('#prev')
});


$("#video-play").click( (e) => {
    e.preventDefault();
    $("iframe").attr("src","https://www.youtube.com/embed/LFBxRxwY4Qw?autoplay=1");
    $(".videoscreen").fadeIn();
    $(".clinic-frame").fadeIn();
    $(".close-video").fadeIn();
})
$(".close-video").click( (e) => {
    e.preventDefault();
    $(".videoscreen").fadeOut();
    $("iframe").attr("src","");
    $(".clinic-frame").fadeOut();
    $(".close-video").hide();
})

}); //ready