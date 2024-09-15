$('#program').slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  speed : 900,
  arrows: false,
  dots : true,
  autoplay: true,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3, 
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    } 
  ]

});

$('#facts').slick({
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  speed : 900,
  arrows: false,
  dots : true,
  autoplay : true,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2, 
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    } 
  ]
});


$('.client-scroll').slick({
  infinite: false,
  slidesToShow: 6,
  slidesToScroll: 1,
  speed : 900,
  arrows: false,
  dots : false,
  

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4, 
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay : true,
      }
    } 
  ]
});

$('.campus-slider-date').slick({
  infinite: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  speed : 900,
  arrows: false,
  dots : false,
});

 $('a.prev').click(function(e) {
   e.preventDefault();
   $(".campus-slider-date").slick('slickPrev');
 });

  $('a.next').click(function(e) {
   e.preventDefault();
   $(".campus-slider-date").slick('slickNext');
 });

$('.open-down').click(function(e){
	 $(this).parent().find('ul').slideToggle(); 
})

var height = $(window).outerHeight();

$('.banner-slide-height').height(height);

$('.icon-mo a').click(function(e){
      e.preventDefault();
      $('.mobile-menu-right').addClass('active');
})

$('.close-mi a').click(function(e){
      e.preventDefault();
      $('.mobile-menu-right').removeClass('active');
});

 
function he(){
     var highest = new Array();

$('.height-sec').each(function(){

        if(!highest[$(this).data('x')] || parseInt($(this).outerHeight()) > highest[$(this).data('x')] )
            highest[$(this).data('x')] = parseInt($(this).outerHeight());                

});

$('.height-sec').height(highest.undefined);

}


he();

$(window).resize(function(){
     he()
});