(function () {

  /*  full page slider */
  $('.gallery').slick({
    arrows: true,
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1200,
    nextArrow: '<span class="slick-next"><img src="img/right.png" alt="arrow"></span>',
    prevArrow: '<span class="slick-prev"><img src="img/left.png" alt="arrow"></span>'
  });
  /*  full page slider */

  /*  news slider */
  $('.news-list').slick({
    arrows: false,
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0',
    speed: 750,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 2000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          speed: 750,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 900,
        settings: {
          dots: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 850,
        settings: {
          dots: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 769,
        settings: {
          dots: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          autoHeight: true
        }
      },
    ]
  });

  $('.news__arrows-left').click(function(){
    $('.news-list').slick('slickPrev');
  });

  $('.news__arrows-right').click(function(){
    $('.news-list').slick('slickNext');
  });

  //count and active slides
  $('.news-list').on('init', function(event, slick){
    slideCount = slick.slideCount;
    setSlideCount();
    setCurrentSlideNumber(slick.currentSlide);
  });

  $('.news-list').on('beforeChange', function(event, slick, currentSlide, nextSlide){
    setCurrentSlideNumber(nextSlide);
  });

  function setSlideCount() {
    let $el = $('.slide-count-wrap').find('.total');
    $el.text(slideCount);
  }

  function setCurrentSlideNumber(currentSlide) {
    let $el = $('.slide-count-wrap').find('.current');
    $el.text(currentSlide + 1);
  }
  //count and active slides

  let itemH = $('.news__item').innerHeight();

  /*/  news slider */

  /*  projects slider */

  $('.projects__viewport').slick({
    arrows: false,
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 1200,
    nextArrow: '<span class="slick-next"><img src="img/right.png" alt="arrow"></span>',
    prevArrow: '<span class="slick-prev"><img src="img/left.png" alt="arrow"></span>',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          speed: 500
        }
      },
      {
        breakpoint: 769,
        settings: {
          dots: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: '200px',
          variableWidth: false,
          speed: 500
        }
      },
      {
        breakpoint: 767,
        settings: {
          dots: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: '160px',
          variableWidth: false,
          speed: 500
        }
      },
      {
        breakpoint: 501,
        settings: {
          dots: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: '140px',
          variableWidth: false,
          speed: 500
        }
      },
      {
        breakpoint: 451,
        settings: {
          dots: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: '100px',
          variableWidth: false,
          speed: 500
        }
      },
      {
        breakpoint: 376,
        settings: {
          dots: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: '80px',
          variableWidth: false,
          speed: 500
        }
      }
    ]
  });
  $('.projects__viewport2').slick({
    arrows: false,
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 1200,
    nextArrow: '<span class="slick-next"><img src="img/right.png" alt="arrow"></span>',
    prevArrow: '<span class="slick-prev"><img src="img/left.png" alt="arrow"></span>',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          speed: 500
        }
      },
      {
        breakpoint: 769,
        settings: {
          dots: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: '200px',
          variableWidth: false,
          speed: 500
        }
      },
      {
        breakpoint: 767,
        settings: {
          dots: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: '160px',
          variableWidth: false,
          speed: 500
        }
      },
      {
        breakpoint: 501,
        settings: {
          dots: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: '140px',
          variableWidth: false,
          speed: 500
        }
      },
      {
        breakpoint: 451,
        settings: {
          dots: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: '100px',
          variableWidth: false,
          speed: 500
        }
      },
      {
        breakpoint: 376,
        settings: {
          dots: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: '80px',
          variableWidth: false,
          speed: 500
        }
      }
    ]
  });
  $('.projects__arrows-left').click(function(){
    $('.projects__viewport').slick('slickPrev');
  });

  $('.projects__arrows-right').click(function(){
    $('.projects__viewport').slick('slickNext');
  });

  $('.projects__arrows-left2').click(function(){
    $('.projects__viewport2').slick('slickPrev');
  });

  $('.projects__arrows-right2').click(function(){
    $('.projects__viewport2').slick('slickNext');
  });

  // $(document).find('.slick-cloned .projects__item').removeAttr('data-fancybox');

  /*/  projects slider */

  //fancy box loop images
  if(  $('[data-fancybox]').length > 0 ) {
    $('[data-fancybox]').fancybox({
      'loop': 'true',
      'scrolling': 'no',
      'iframe': {'scrolling': 'no'}
    });

    $().fancybox({
      selector : '[data-fancybox="gallery2"]',
      loop     : true
    });
  }

  $('#line4 svg').click(function(e){
    e.preventDefault();
  });

})();