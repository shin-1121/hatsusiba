$(function () {
    $("#js-navbar_btn").click(function () {
        $('body').toggleClass("show");
    });
});

$(function () {
    $("#js-gnav-btn").click(function () {
        $('body').toggleClass("show");
    });
});

$(function () {
    var loader = $('.loader-wrap');

    //ページの読み込みが完了したらアニメーションを非表示
    $(window).on('load', function () {
        loader.fadeOut();

    });

    //ページの読み込みが完了してなくても3秒後にアニメーションを非表示にする
    setTimeout(function () {
        loader.fadeOut();
    }, 3000);
});

var swiper = new Swiper('.swiper-container', {
    effect: 'slide',


    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    loop: true,
    effect: "fade",
    autoplay: {
        delay: 3000,
        disableOnInteraction: true
    },
    speed: 1000,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});
var slider2 = new Swiper('.slider2', {
    slidesPerView: 3,
    spaceBetween: 20,

    navigation: {
        nextEl: '.swiper-button-next_2',
        prevEl: '.swiper-button-prev_2',
    },
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: true
    },
    breakpoints: {
        320: {
            slidesPerView: 1,

        },
        // 368px以上の場合
        368: {
            slidesPerView: 2,
        },
        // 520px以上の場合
        520: {
            slidesPerView: 3,

        },
        // 1200px以上の場合
        1200: {
            slidesPerView: 3,
        }
    },


});

$(function () {
    $('.list_title').click(function () {
        $(this).next('dd').slideToggle();
        $(this).find(".accordion_btn").toggleClass('open');

    });
});
