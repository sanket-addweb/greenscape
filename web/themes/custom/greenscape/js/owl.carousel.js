$('.owl-carousel').owlCarousel({
  loop:true,
  margin:35,
  nav:true,
  center: true,
  responsive:{
    0:{
        items:1,
        margin:0
    },
    575:{
      items:1,
      margin:0
    },
    768:{
      items:3,
      margin:0
    },
    1000:{
      items:3
    }
  }
})