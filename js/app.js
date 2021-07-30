$(function () {

  var header = $("#header"),
    introH = $("#intro").innerHeight(),
    scrollOffest = $(window).scrollTop();


  // fixed header
  $(window).on("scroll", function () {

    scrollOffset = $(this).scrollTop();

    checkScroll(scrollOffset);

  });


  function checkScroll(scrollOffest) {

    if (scrollOffset >= introH) {

      header.addClass('fixed');

    } else {
      header.removeClass('fixed');
    }

  }



  // smooth scroll

  $("[data-scroll]").on('click', function (event) {
    event.preventDefault();

    var $this = $(this),
      elementId = $(this).data('scroll'),
      elementOffset = $(elementId).offset().top;


    $("#nav, a").removeClass("active");
    $this.addClass("active");

    $("html, body").animate({
      scrollTop: elementOffset
    }, 950);

  });



  // nav toggle

  $("#nav_toggle").on("click", function (event) {

    event.preventDefault();

    $(this).toggleClass("active");
    $("#nav").toggleClass("active");

  });




  // collaps

  $("[data-collaps]").on("click", function (event) {
    event.preventDefault();

    var $this = $(this),
      elementId = $(this).data('collaps');

    $(this).toggleClass("active")
  })

  $("[data-slider]").slick({
    infinite: true,
    fade: false,
    slideToShow: 1,
    slideToScroll: 1
  });


});