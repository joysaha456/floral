

jQuery(function ($) {
    "use strict";

    // cartToggle
    $(".cartToggle , .cartToggle-close , .jkcard-wrapper-overlay").on('click', function (e) {
        e.preventDefault();
        $(".jkaddcard-wrp").toggleClass('cartToggle-wrapper-show');
    });

    // Mobile Menu Toggle Button jQuery
    if ($('#menu-btn').length) {
        $("#menu-btn").click(function () {
            $(".navitems").toggleClass("mobile-menu-show");
        });
    }


    // productCarousel
    if ($('#carouselSlideSync').length) {
        var carouselSlideSync = $("#carouselSlideSync");
        var carouselNavSync = $("#carouselNavSync");
        var slidesPerPage = 4; // globaly define number of elements per page
        var syncedSecondary = true;
        carouselSlideSync.owlCarousel({
            items: 1,
            slideSpeed: 2000,
            nav: false,
            autoplay: true,
            dots: false,
            loop: true,
            responsiveRefreshRate: 200,
            navText: ['<svg width="100%" height="100%" viewBox="0 0 11 20"><path style="fill:none;stroke-width: 1px;stroke: #000;" d="M9.554,1.001l-8.607,8.607l8.607,8.606"/></svg>', '<svg width="100%" height="100%" viewBox="0 0 11 20" version="1.1"><path style="fill:none;stroke-width: 1px;stroke: #000;" d="M1.054,18.214l8.606,-8.606l-8.606,-8.607"/></svg>'],
        }).on('changed.owl.carousel', syncPosition);

        carouselNavSync
            .on('initialized.owl.carousel', function () {
                carouselNavSync.find(".owl-item").eq(0).addClass("current");
            })
            .owlCarousel({
                items: slidesPerPage,
                dots: false,
                nav: $(window).width() > 1100 ? true : false,
                smartSpeed: 200,
                slideSpeed: 500,
                slideBy: 1, //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel
                responsiveRefreshRate: 100
            }).on('changed.owl.carousel', syncPosition2);

        function syncPosition(el) {
            //if you set loop to false, you have to restore this next line
            //var current = el.item.index;
            //if you disable loop you have to comment this block
            var count = el.item.count - 1;
            var current = Math.round(el.item.index - (el.item.count / 2) - .5);

            if (current < 0) {
                current = count;
            }
            if (current > count) {
                current = 0;
            }
            //end block

            carouselNavSync
                .find(".owl-item")
                .removeClass("current")
                .eq(current)
                .addClass("current");
            var onscreen = carouselNavSync.find('.owl-item.active').length - 1;
            var start = carouselNavSync.find('.owl-item.active').first().index();
            var end = carouselNavSync.find('.owl-item.active').last().index();

            if (current > end) {
                carouselNavSync.data('owl.carousel').to(current, 100, true);
            }
            if (current < start) {
                carouselNavSync.data('owl.carousel').to(current - onscreen, 100, true);
            }
        }

        function syncPosition2(el) {
            if (syncedSecondary) {
                var number = el.item.index;
                carouselSlideSync.data('owl.carousel').to(number, 100, true);
            }
        }

        carouselNavSync.on("click", ".owl-item", function (e) {
            e.preventDefault();
            var number = $(this).index();
            carouselSlideSync.data('owl.carousel').to(number, 300, true);
        });
    }




    // dropdown toggleClass
    $(function () {
        if ($(window).width() < 768) {
            $('.navitems li > a').on('click', function (e) {
                e.preventDefault();
                let parentElement = $(this).parent('li');
                parentElement.find("> ul").slideToggle(500);
                $('.navitems li').removeClass('active');
                parentElement.addClass('active');
            });
        }
    });



    if ($('.fltestmonial-sliders').length) {
        $('.fltestmonial-sliders').owlCarousel({
            loop: true,
            margin: 30,
            nav: $(window).width() > 1024 ? true : false,
            dots: false,
            autoplay: true,
            autoplayHoverPause: true,
            navText: ["<span class='ni ni-chevron-left'></span>", "<span class='ni ni-chevron-right'></span>"],
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1024: {
                    items: 1
                },
                1200: {
                    items: 1
                }
            }
        });
    }

    if ($('.newitems-sliders').length) {
        $('.newitems-sliders').owlCarousel({
            loop: true,
            margin: 30,
            nav: true,
            dots: false,
            autoplay: true,
            autoplayHoverPause: true,
            navText: ["<span class='ni ni-chevron-left'></span>", "<span class='ni ni-chevron-right'></span>"],
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 3
                },
                1000: {
                    items: 4
                }
            }
        });
    }



    if ($('.product-cardwrp').length) {
        $('.product-cardwrp').owlCarousel({
            loop: true,
            margin: 30,
            nav: $(window).width() > 1024 ? true : false,
            dots: false,
            autoplay: true,
            autoplayHoverPause: true,
            navText: ["<span class='ni ni-chevron-left'></span>", "<span class='ni ni-chevron-right'></span>"],
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1000: {
                    items: 1
                }
            }
        });
    }


    // custom TAB
    if ($('.clickme').length) {
        $('.clickme a').click(function () {
            $('.clickme a').removeClass('activeTab');
            $(this).addClass('activeTab');
            var tagid = $(this).data('tag');
            $('.list').removeClass('active').addClass('hide');
            $('#' + tagid).addClass('active').removeClass('hide');
        });
    }


});