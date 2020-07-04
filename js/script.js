"use strict"
//login register
const x = document.getElementById('login')
const y = document.getElementById('register')
const z = document.getElementById('btn')

function login() {
    x.style.left = "50px";
    y.style.left = "450px";
    z.style.left = "0px";
}

function register() {
    x.style.left = "-400px";
    y.style.left = "50px";
    z.style.left = "110px";
}

$(function () {
    //password toggle eye
    $(".toggle-password").click(function () {

        $(this).toggleClass("fa-eye fa-eye-slash");
        var input = $($(this).attr("toggle"));
        if (input.attr("type") == "password") {
            input.attr("type", "text");
        } else {
            input.attr("type", "password");
        }
    });

    $(".toggle-password-r").click(function () {

        $(this).toggleClass("fa-eye fa-eye-slash");
        var input = $($(this).attr("toggle"));
        if (input.attr("type") == "password") {
            input.attr("type", "text");
        } else {
            input.attr("type", "password");
        }
    });


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

    //$('.login_register_click').click(function () {
    //  $('.login_register_body').removeClass('login_hidden');
    //});

});
