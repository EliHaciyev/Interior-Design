$(document).ready(function(){
  $(".header-slider").owlCarousel({

    items:1,
    loop:true,
    smartSpeed:600,
    margin:3,

  });


$('.slider-next').click(function() {
    $(".header-slider").trigger('next.owl.carousel');
});

$('.slider-prev').click(function() {
    $(".header-slider").trigger('next.owl.carousel');
})

Fancybox.bind("[data-fancybox]", {
  // Your custom options
});

});