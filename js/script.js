$(function () {
    "use strict"

    //Student Counter
    $('.counter').counterUp({
        delay: 19,
        time: 1919
    });

    //Testimonial Slider
    $('.testimonial_slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        dots: true,

        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 993,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    //Logo Typing Effect Create By MSI:313
    //msiTyping("#logo_typing", 250, 0);

    //Mix Available Batch
    var containerEl = document.querySelector('.schedule_box');

    var mixer = mixitup(containerEl);



});
