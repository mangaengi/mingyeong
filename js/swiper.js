/* 
		var swiper = new Swiper(".project_Swiper", {
				spaceBetween: 30,
				loop: true,
				pagination: {
						el: ".swiper-pagination",
						clickable: true,
				},
		});

 */

/* froject 스와이퍼 */
let swiper = new Swiper(".frobox1", {
	slidesPerView: 3,
	centeredSlides: false,
	loop: true,
	spaceBetween: 15,
	pagination: {
		el: ".swiper-pagination",
		type: "fraction",
	},
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	breakpoints: {
        920: {
            slidesPerView: 3,
        },
        600: {
            slidesPerView: 2,
        },
        0: {
            slidesPerView: 1,
        },
    },

});
