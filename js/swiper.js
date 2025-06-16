
/* design 스와이퍼 */
let swiper = new Swiper(".design_1", {
	slidesPerView: 4,
	centeredSlides: false,
	loop: true,
    speed: 6000,
    autoplay: {
        delay: 1,
    },
    freemode: true,
	spaceBetween: 20,
	pagination: {
		el: ".swiper-pagination",
		type: "fraction",
	},
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	breakpoints: {
        769: {
            slidesPerView: 4,
        },
        600: {
            slidesPerView: 3,
        },
        0: {
            slidesPerView: 2,
        },

    },

});


/* 모바일 버튼 */
const mobtn = document.getElementById('mobtn');
const moslide = document.getElementById('moslide');
const closeButton = document.getElementById('closebtn');
const mobg = document.getElementById('mobg');
const molist = moslide.querySelectorAll('ul li');


mobtn.addEventListener('click', function() {
    moslide.classList.add('active');
    mobg.classList.add('active');
});

closeButton.addEventListener('click', function() {
    moslide.classList.remove('active');
    mobg.classList.remove('active');
});

mobg.addEventListener('click', function() {
	moslide.classList.remove('active');
	mobg.classList.remove('active');
});

molist.forEach(item => {
    item.addEventListener('click', function() {
        moslide.classList.remove('active');
        mobg.classList.remove('active');
    });
});

/* project 모달창 */

// 모달 열기 버튼들
document.querySelectorAll('.pormodal_openbtn').forEach(btn => {
    btn.addEventListener('click', () => {
        const targetSelector = btn.getAttribute('data-target');
        const modal = document.querySelector(targetSelector);
        modal.classList.add('show');
        document.body.style.overflow = 'hidden'; // 스크롤 차단
    });
});

// 닫기 버튼들
document.querySelectorAll('.pormodal_colsebtn ').forEach(btn => {
    btn.addEventListener('click', () => {
        btn.closest('.promodal').classList.remove('show');
        document.body.style.overflow = '';
    });
});

// 모달 배경 클릭 시 닫기
document.querySelectorAll('.promodal').forEach(modal => {
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('show');
            document.body.style.overflow = '';
        }
    });
});