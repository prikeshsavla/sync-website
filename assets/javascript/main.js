var main = {
    init: function () {
        this.initSmoothScroll();
    },
    initSmoothScroll: function () {

        $(document).on("click", 'a[href^="#"]', function (e) {
            var target = this.hash, $target = $(target);
            if ($(this).attr('href').split("#").shift().replace("/", "") == window.location.pathname.replace("/", "")) {
                e.preventDefault();
                $('html, body').stop().animate({scrollTop: $target.offset().top}, 1000);
            }
        });

        $(document).on("click", 'a[data-scroll]', function (e) {
            var target = this.hash, $target = $(target);
            if ($(this).attr('href').split("#").shift().replace("/", "") == window.location.pathname.replace("/", "")) {
                e.preventDefault();
                $('html, body').stop().animate({scrollTop: $target.offset().top}, 1000);
            }
        });

    }
};


jQuery(document).ready(function ($) {
    main.init();
});