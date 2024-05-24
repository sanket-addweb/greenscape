(function ($, Drupal, once) {
  Drupal.behaviors.owlCarouselBehavior = {
    attach: function (context, settings) {
      once('owlCarouselBehavior', '.owl-carousel', context).forEach(function (element) {
        $(element).owlCarousel({
          loop: true,
          margin: 35,
          nav: true,
          center: true,
          responsive: {
            0: {
              items: 1,
              margin: 0
            },
            575: {
              items: 1,
              margin: 0
            },
            768: {
              items: 3,
              margin: 0
            },
            1000: {
              items: 3
            }
          }
        });
      });
    }
  };
})(jQuery, Drupal, once);
