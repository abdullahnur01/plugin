/* swiper initialization */
var swiper1 = new Swiper('.swiper1', {
    effect: "cards",
    grabCursor: true,
    loop: true,
    pagination: {
        el: ".swiper-pagination", //necessary
    },
});

var swiper2 = new Swiper('.swiper2', {
    grabCursor: true,
    effect: "creative",
    creativeEffect: {
        prev: {
            shadow: true,
            origin: "left center",
            translate: ["-5%", 0, -200],
            rotate: [0, 100, 0],
        },
        next: {
            origin: "right center",
            translate: ["5%", 0, -200],
            rotate: [0, -100, 0],
        },
    },
    loop: true,
    pagination: {
        el: ".swiper-pagination", //necessary
    },
});
var swiper3 = new Swiper('.swiper3', {
    speed: 600,
    parallax: true,
    spaceBetween: 200,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

$(document).ready(function () {
    initParalaxBg();
    var options = {
        effectWeight: 1.5,
        outerBuffer: 1.30,
        elementDepth: 100,
        smoothingMultiplier: 1.5,
        directions: [1, 1, -1, 1, 1, 1, 1, 1]
    };
    $("#logo-distort").logosDistort(options);
    $('.owl-carousel').owlCarousel({
        loop: true,
        center: true,
        margin: 10,
        stagePadding: 50,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        autoplaySpeed: 1000,
        nav: true,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });

});