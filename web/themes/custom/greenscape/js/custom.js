(function ($, Drupal, once) {
  'use strict';

  Drupal.behaviors.customJsBehavior = {
    attach: function (context, settings) {
      // Preloader
      once('loaderBg', '.loader_bg', context).forEach(function (element) {
        setTimeout(function () {
          $(element).fadeToggle();
        }, 1500);
      });

      // jQuery Menu
      once('meanmenu', 'header nav', context).forEach(function (element) {
        $(element).meanmenu();
      });

      // Tooltip
      once('tooltip', '[data-toggle="tooltip"]', context).forEach(function (element) {
        $(element).tooltip();
      });

      // Sticky
      once('sticky', '.sticky-wrapper-header', context).forEach(function (element) {
        $(element).sticky({ topSpacing: 0 });
      });

      // Mouseover for megamenu
      once('megamenu', '.main-menu ul li.megamenu', context).forEach(function (element) {
        $(element).hover(
          function () {
            if (!$('#wrapper').hasClass('overlay')) {
              $('#wrapper').addClass('overlay');
            }
          },
          function () {
            $('#wrapper').removeClass('overlay');
          }
        );
      });

      // NiceScroll
      once('niceScroll', '.brand-box', context).forEach(function (element) {
        $(element).niceScroll({
          cursorcolor: "#9b9b9c",
        });
      });

      // NiceSelect
      once('niceSelect', 'select', context).forEach(function (element) {
        $(element).niceSelect();
      });

      // Scroll to Top
      once('scrollToTop', window).forEach(function () {
        $(window).on('scroll', function () {
          if ($(window).scrollTop() >= 100) {
            $("#back-to-top").addClass('b-show_scrollBut');
          } else {
            $("#back-to-top").removeClass('b-show_scrollBut');
          }
        });
      });

      once('backToTop', '#back-to-top', context).forEach(function (element) {
        $(element).on('click', function () {
          $('body, html').animate({ scrollTop: 0 }, 1000);
        });
      });

      // Contact form toggle
      once('showMap', '#showMap', context).forEach(function (element) {
        $(element).on('click', function (e) {
          e.preventDefault();
          $(".map_form_container").addClass("map_show");
          $(".contact_heading").text("Location");
        });
      });

      once('showForm', '#showForm', context).forEach(function (element) {
        $(element).on('click', function (e) {
          e.preventDefault();
          $(".map_form_container").removeClass("map_show");
          $(".contact_heading").text("Request A Call Back");
        });
      });

      // Form validation
      $.validator.setDefaults({
        submitHandler: function () {
          alert("submitted!");
        }
      });

      once('contactForm', '#contact-form', context).forEach(function (element) {
        $(element).validate({
          rules: {
            firstname: "required",
            email: {
              required: true,
              email: true
            },
            lastname: "required",
            message: "required",
            agree: "required"
          },
          messages: {
            firstname: "Please enter your firstname",
            email: "Please enter a valid email address",
            lastname: "Please enter your lastname",
            username: {
              required: "Please enter a username",
              minlength: "Your username must consist of at least 2 characters"
            },
            message: "Please enter your Message",
            agree: "Please accept our policy"
          },
          errorElement: "div",
          errorPlacement: function (error, element) {
            error.addClass("help-block");
            if (element.prop("type") === "checkbox") {
              error.insertAfter(element.parent("input"));
            } else {
              error.insertAfter(element);
            }
          },
          highlight: function (element, errorClass, validClass) {
            $(element).parents(".col-md-4, .col-md-12").addClass("has-error").removeClass("has-success");
          },
          unhighlight: function (element, errorClass, validClass) {
            $(element).parents(".col-md-4, .col-md-12").addClass("has-success").removeClass("has-error");
          }
        });
      });

      // Swiper sliders
      new Swiper('.heroslider', {
        spaceBetween: 30,
        centeredSlides: true,
        slidesPerView: 'auto',
        loop: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          dynamicBullets: true
        }
      });

      new Swiper('.swiper-product-filters', {
        slidesPerView: 3,
        slidesPerColumn: 2,
        spaceBetween: 30,
        breakpoints: {
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
            slidesPerColumn: 1,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
            slidesPerColumn: 1,
          },
          480: {
            slidesPerView: 1,
            spaceBetween: 10,
            slidesPerColumn: 1,
          }
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          dynamicBullets: true
        }
      });

      // Countdown
      once('countdown', '[data-countdown]', context).forEach(function (element) {
        var finalDate = $(element).data('countdown');
        $(element).countdown(finalDate, function (event) {
          $(element).html(event.strftime(''
            + '<div class="time-bar"><span class="time-box">%w</span> <span class="line-b">weeks</span></div>'
            + '<div class="time-bar"><span class="time-box">%d</span> <span class="line-b">days</span></div>'
            + '<div class="time-bar"><span class="time-box">%H</span> <span class="line-b">hr</span></div>'
            + '<div class="time-bar"><span class="time-box">%M</span> <span class="line-b">min</span></div>'
            + '<div class="time-bar"><span class="time-box">%S</span> <span class="line-b">sec</span></div>'
          ));
        });
      });

      // Deal slider
      once('dealSlider', '.deal-slider', context).forEach(function (element) {
        $(element).slick({
          dots: false,
          infinite: false,
          prevArrow: '.previous-deal',
          nextArrow: '.next-deal',
          speed: 500,
          slidesToShow: 3,
          slidesToScroll: 3,
          responsive: [{
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 2,
              infinite: true,
              dots: false
            }
          }, {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          }, {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }]
        });
      });

      // News slider
      once('newsSlider', '#news-slider', context).forEach(function (element) {
        $(element).slick({
          dots: false,
          infinite: false,
          prevArrow: '.previous',
          nextArrow: '.next',
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
          responsive: [{
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: false
            }
          }, {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }, {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }]
        });
      });

      // Fancybox
      once('fancybox', '.fancybox', context).forEach(function (element) {
        $(element).fancybox({
          maxWidth: 1200,
          maxHeight: 600,
          width: '70%',
          height: '70%',
        });
      });

      // Sidebar collapse
      once('sidebarCollapse', '#sidebarCollapse', context).forEach(function (element) {
        $(element).on('click', function () {
          $('#sidebar').toggleClass('active');
          $(this).toggleClass('active');
        });
      });

      // Blog carousel
      once('blogCarousel', '#blogCarousel', context).forEach(function (element) {
        $(element).carousel({
          interval: 5000
        });
      });
    }
  };
})(jQuery, Drupal, once);
