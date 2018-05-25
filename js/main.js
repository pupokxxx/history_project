jQuery(document).ready(function($) {
  $('ul.tabs li').click(function(e) {
    var tab_id = $(this).attr('data-tab');

    var items = $('ul.tabs li');

    if (items.length > 0) {
      Object.keys(items).forEach(function(element) {
        if (jQuery.isNumeric(element)) {
          var currentItem = $(items[element]);

          if (currentItem.attr('data-tab') != tab_id) {
            var findTabId = currentItem.attr('data-tab');
            $('#' + findTabId).removeClass('current');
            currentItem.removeClass('current');
          }
        }
      });
    }

    if ($('#' + tab_id).is('.current')) {
      $('#' + tab_id).removeClass('current');
    } else {
      $(this).addClass('current');
      $('#' + tab_id).addClass('current');
    }
  });

  /*$("#"+tab_id).toggle();*/

  $('#carousel1').slick({
    infinite: false,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    infinite: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  $('#carousel2').slick({
    infinite: false,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    infinite: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  $('#carousel3').slick({
    infinite: false,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    hidden: false,
    infinite: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  $('#nav-tab').on('shown.bs.tab', function(e) {
    //$('.slick-prev').trigger('click');
    $(window).trigger('resize');
    $('#carousel3').slick('setPosition');
    $('#carousel1').slick('setPosition');
    /*$('#nav-contact').resize();
    $('#nav-profile').resize();
    $('#nav-home').resize();*/
  });

  $(window).resize(function() {
    width = $(window).width();
    if (width <= 991) {
      $('#carousel4').slick({
        mobileFirst: true,
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        responsive: [{
            breakpoint: 1024,
            settings: 'unslick'
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      });
    }
  });

  $('#carousel5').slick({
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    hidden: false,
    infinite: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
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
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  //////////scroll header



        var offset = $('.menu').offset().top;
        var formOffset = $('.form-search').offset().top;
        var adverOffset = $('.advertising').offset().top;
    $(window).scroll(function(element) {

            var currentScroll = $(document).scrollTop();
            if (offset < currentScroll && window.screen.width > 1024) {
              $('.menu').addClass('fixed-top');
            } else {
              $('.menu').removeClass('fixed-top');
            }

            if (formOffset < currentScroll  && window.screen.width > 1024) {
              $('.form-search').addClass('fixed-top');
            } else {
              $('.form-search').removeClass('fixed-top');
            }

            if (adverOffset < currentScroll  && window.screen.width > 1024) {
              $('.advertising').addClass('fixed-top');
            } else {
              $('.advertising').removeClass('fixed-top');
            }

    });


      /*$(".control-file input[type=file]").change(function(){
           var filename = $(this).val().replace(/.*\\/, "");
           $("#filename").val(filename);
      });*/


});
