$('.owl-carousel').owlCarousel({
    loop:true,
    margin:12,
    nav:false,
    responsive:{
        0:{
            items:3
        },
        600:{
            items:4
        },
        1000:{
            items:5
        },

        1800:{
            items: 7
        },

        2200:{
            items: 10
        }
    }
})