$("body").css("display","none");


$(document).ready(function () {
  $(`a[href="about.html"]`).addClass("non-pseudo");
  $(`a[href="contact.html"]`).addClass("non-pseudo");
  $("body").css("display","block");
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
});

$(".under-menu-opener").click( (e) => {
    e.preventDefault();
    $(e.currentTarget).next('.under-menu').slideToggle();
});

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
     $(".nume").counterUp({delay:10,time:1000});

});
$(".close-video").click( (e) => {
    e.preventDefault();
    $(".videoscreen").fadeOut();
    $("iframe").attr("src","");
    $(".clinic-frame").fadeOut();
    $(".close-video").hide();
});

$('.doctor-carousel').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  nextArrow: $('#expert-next'),
  prevArrow: $('#expert-prev'),
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
      }
    }

  ]
});

$('.feedback-carousel').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  nextArrow: $('#patient-next'),
  prevArrow: $('#patient-prev'),
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
      }
    }

  ]
});
  
$('.news-carousel').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  nextArrow: $('#news-next'),
  prevArrow: $('#news-prev'),
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
      }
    }

  ]
});

$('main').append(`<div id="to-top">
  <a href="#"><i class="fas fa-arrow-up"></i></a>
 </div>`);

 $("#to-top").css({
   "height": "50px",
   "width": "50px",
   "background-color": "#396df0ab",
   "position": "fixed",
   "bottom": "5%",
   "right": "0",
   "border-top-left-radius": "30px",
   "border-bottom-left-radius": "30px",
   "display": "none"
 });

 $("#to-top  i").css({
  "font-size": "24px",
  "color": "#ffffff",
  "position": "absolute",
  "top": "50%",
  "left": "50%",
  "transform": "translate(-50%,-50%)",
  "padding": "14px"
});
$("html").css("scroll-behavior","smooth");

$(document).scroll(() => {
  let diff = window.scrollY;
  if (diff > 100) {
      $("#to-top").fadeIn();
  }else{
    $("#to-top").fadeOut();
  }
});

// last fn

let a = 0;
$(window).scroll(function() {

  let oTop = $('.statistic').offset().top - window.innerHeight;
  if (a == 0 && $(window).scrollTop() > oTop) {
    $('.nume').each(function() {
      var $this = $(this),
        countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
          countNum: countTo
        },
        {
          duration: 2000,
          easing: 'swing',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
          }
        });
    });
    a = 1;
  }
});




$("#email-form").validate({
  errorPlacement: function(error, element) {
    $( "#email-form" ).effect( "shake" );
    error.insertAfter(element);
  },
  submitHandler: function(form) {
      form.submit();
  }
});

$( "#booking-date" ).datepicker();
}); //ready