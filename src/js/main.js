let swiper = new Swiper(".nftBoxSwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    // loop: true,
    // autoplay: {
    //     delay: 2500
    // },
    // speed: 1000,
    navigation: {
        nextEl: ".arrow-next",
        prevEl: ".arrow-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});


let swiper1 = new Swiper(".equipmentsBottom", {
    spaceBetween: 10,
    slidesPerView: 8,
    freeMode: true,
    watchSlidesProgress: true,
});
let swiper2 = new Swiper(".equipmentsTop", {
    spaceBetween: 10,
    navigation: {
        nextEl: ".equipments__arrow-next",
        prevEl: ".equipments__arrow-prev",
    },
    thumbs: {
        swiper: swiper1,
    },
});