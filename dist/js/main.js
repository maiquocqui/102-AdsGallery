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
});