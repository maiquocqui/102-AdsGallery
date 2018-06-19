'use strict';

$(document).ready(function () {
    // header script
    if ($(window).width() < 1200) {}
    if ($(window).width() < 768) {}

    $('.btn-showmenu').click(function () {
        $(this).toggleClass('active');
        $('.overlay').toggleClass('active');
        $('.menu').toggleClass('open');
    });

    $(window).bind('scroll', function () {
        if ($(window).scrollTop() > 100) {
            $('header').addClass('minimal');
        } else {
            $('header').removeClass('minimal');
        }
    });

    $('.search-toggle').click(function () {
        $(this).toggleClass('active');
        $('.search-wrap').fadeToggle(300);
    });

    $('.scroll-indicator').click(function () {
        $('body , html').animate({
            scrollTop: $('main').offset().top - $('header').outerHeight()
        }, 500);
    });

    // footer fix
    if ($(window).width() > 991) {
        $('main').css('margin-bottom', $('footer').outerHeight());
    }

    // news slick
    $('.news-slick').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        speed: 500
    });

    $('.product-slide').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        fade: true,
        asNavFor: '.product-nav'
    });
    $('.product-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.product-slide',
        dots: false,
        arrows: true,
        centerMode: false,
        focusOnSelect: true
    });

    // partner slick
    $('.dstream-partner').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        dots: false
    });

    // News masonry
    $('.news-list').masonry({
        // options
        itemSelector: '.news-item'
        // columnWidth: 200
    });

    // page clone
    $('.pages').clone().insertBefore('.product-list');
});