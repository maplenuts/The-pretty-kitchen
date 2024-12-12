
$(document).ready(function () {

  var menuSoup = new Swiper(".menuSoup", {
    slidesPerView: 5,
    spaceBetween: 20,
    mousewheel: false,
    freeMode: true,
    centeredSlides: false,
    threshold: 10,
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  var menuMain = new Swiper(".menuMain", {
    slidesPerView: 5,
    spaceBetween: 20,
    mousewheel: false,
    freeMode: true,
    centeredSlides: false,
    threshold: 10,
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  var menuFry = new Swiper(".menuFry", {
    slidesPerView: 5,
    spaceBetween: 20,
    mousewheel: false,
    freeMode: true,
    centeredSlides: false,
    threshold: 10,
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  var menuFood = new Swiper(".menuFood", {
    slidesPerView: 5,
    spaceBetween: 20,
    mousewheel: false,
    freeMode: true,
    centeredSlides: false,
    threshold: 10,
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  var menuSide = new Swiper(".menuSide", {
    slidesPerView: 5,
    spaceBetween: 20,
    mousewheel: false,
    freeMode: true,
    centeredSlides: false,
    threshold: 10,
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  var menuAlcohol = new Swiper(".menuAlcohol", {
    slidesPerView: 5,
    spaceBetween: 20,
    mousewheel: false,
    freeMode: true,
    centeredSlides: false,
    threshold: 10,
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  $('.menuSoup').show().siblings().hide();
  $(".menuBtn li:nth-child(1)").click(function () {
    event.preventDefault();
    $(this).addClass("active");
    $(this).siblings().removeClass("active");
    $(".menus .menuSoup").fadeIn(300).siblings().hide();
  });
  $(".menuBtn li:nth-child(2)").click(function () {
    event.preventDefault();
    $(this).addClass("active");
    $(this).siblings().removeClass("active");
    $(".menus .menuMain").fadeIn(300).siblings().hide();
  });
  $(".menuBtn li:nth-child(3)").click(function () {
    event.preventDefault();
    $(this).addClass("active");
    $(this).siblings().removeClass("active");
    $(".menus .menuFry").fadeIn(300).siblings().hide();
  });
  $(".menuBtn li:nth-child(4)").click(function () {
    event.preventDefault();
    $(this).addClass("active");
    $(this).siblings().removeClass("active");
    $(".menus .menuFood").fadeIn(300).siblings().hide();
  });
  $(".menuBtn li:nth-child(5)").click(function () {
    event.preventDefault();
    $(this).addClass("active");
    $(this).siblings().removeClass("active");
    $(".menus .menuSide").fadeIn(300).siblings().hide();
  });
  $(".menuBtn li:nth-child(6)").click(function () {
    event.preventDefault();
    $(this).addClass("active");
    $(this).siblings().removeClass("active");
    $(".menus .menuAlcohol").fadeIn(300).siblings().hide();
  });

  $(".dongrae").show().siblings().hide();
  $(".franBtn li:nth-child(1)").click(function () {
    event.preventDefault();
    $(this).addClass("active");
    $(this).siblings().removeClass("active");
    $(".franInfo .dongrae").fadeIn(300).siblings().hide();
  });
  $(".franBtn li:nth-child(2)").click(function () {
    event.preventDefault();
    $(this).addClass("active");
    $(this).siblings().removeClass("active");
    $(".franInfo .seomyeon").fadeIn(300).siblings().hide();
  });
  $(".franBtn li:nth-child(3)").click(function () {
    event.preventDefault();
    $(this).addClass("active");
    $(this).siblings().removeClass("active");
    $(".franInfo .sasang").fadeIn(300).siblings().hide();
  });
  $(".franBtn li:nth-child(4)").click(function () {
    event.preventDefault();
    $(this).addClass("active");
    $(this).siblings().removeClass("active");
    $(".franInfo .myeongji").fadeIn(300).siblings().hide();
  });
  $(".franBtn li:nth-child(5)").click(function () {
    event.preventDefault();
    $(this).addClass("active");
    $(this).siblings().removeClass("active");
    $(".franInfo .gwangan").fadeIn(300).siblings().hide();
  });

})

