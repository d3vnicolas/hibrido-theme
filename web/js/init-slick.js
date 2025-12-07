require([
    'jquery',
    'slick',
    'domReady!'
], function($) {
    'use strict';

    const $carousel = $('.fashion-carousel .slick-carousel');
    const $bannerGrid = $('.banner-grid-wrapper .banner-grid');
    
    // Verifica se o carrossel já foi inicializado
    if ($carousel.hasClass('slick-initialized')) {
        $carousel.slick('unslick');
    }
    
    // Inicializa o Slick Slider
    $carousel.slick({
        autoplay: false,
        autoplaySpeed: 5000,
        infinite: true,
        fade: false,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        pauseOnHover: true,
        pauseOnFocus: true,
        adaptiveHeight: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    dots: true
                }
            }
        ]
    });
    
    $bannerGrid.slick({
        autoplay: true,
        autoplaySpeed: 5000,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    arrows: true,
                    dots: false,
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    centerMode: true,
                    centerPadding: '50px',
                    arrows: false,
                    dots: false
                }
            }
        ]
    });
});
