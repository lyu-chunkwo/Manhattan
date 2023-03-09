$(function () {


$(".party__accordion-content").css("display", "none");
  $(".party__item-box").click(function () {
    $(".party__item-box").not(this).removeClass("open");
    $(".party__item-box").not(this).next().slideUp(300);
    $(this).toggleClass("open");
    $(this).next().slideToggle(300);
  });


  $('.menu__list').slick({
prevArrow: '<button class="slick-btn slick-prev"><svg class="slick-svg" width="10" height="18"><use xlink: href="images/svg-sprite/sprite.svg#prev"></use></svg></button>',
    nextArrow: '<button class="slick-btn slick-next"><svg class="slick-svg" width="10" height="18"><use xlink: href="images/svg-sprite/sprite.svg#next"></use></svg></button>'
  });

  $(document).ready(function () {
  $('.top-content__tabs-items').not('.active').hide();
  $('.top-content__controls-item').on('click', function (e) {
    e.preventDefault();

    var tabItem = $(this).closest('.top-content__controls-item'),
      tabContentItem = $('.top-content__tabs-items'),
      tabItemPosition = tabItem.data('services');

    tabContentItem.filter('.top-content__tabs-items-' + tabItemPosition)
      .fadeIn()
      .siblings()
      .hide();

    $(e.currentTarget)
      .addClass('active')
      .siblings()
      .removeClass('active');
  });
});


  $(document).scroll(function () {
    var scrollTop = $(window).scrollTop();
    console.log(scrollTop);
    if (scrollTop >= 450) {
      $('.scroll').addClass("active");
    }
    else {
      $('.scroll').removeClass("active");
    }
  });


  $('.menu__btn').on('click', function () {
    $('.menu__list, .menu__btn').toggleClass('active');
    $('body').toggleClass('lock'); // ! No scroll
  });
});