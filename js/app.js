import Swiper, { Navigation } from 'swiper';
import * as functions from "./modules/functions.js";

functions.isWebp();
functions.isMobile;


//! Checking Mobile or PC device
if (functions.isMobile.any()) {
	document.body.classList.add('_touch');
} else {
	document.body.classList.add('_pc');
}

window.addEventListener('load', functions.pageTheme)
window.addEventListener('load', functions.animCounter);

let login = document.querySelector('.login')
login.addEventListener("click", function (e) {
	login.classList.toggle('_active');
})

const iconMenu = document.querySelector('.menu__icon');
const headerContent = document.querySelector('.header__content');
if (iconMenu) {
	iconMenu.addEventListener('click', function (e) {
		document.body.classList.toggle('_lock');
		iconMenu.classList.toggle('_active');
		headerContent.classList.toggle('_active');
	});
}

const animItems = document.querySelectorAll('._anim-item');

if (animItems.length > 0) {
	window.addEventListener('scroll', animOnScroll);
	function animOnScroll() {
		for (let index = 0; index < animItems.length; index++) {
			const animItem = animItems[index];
			const animItemHeight = animItem.offsetHeight;
			const animItemOffset = offset(animItem).top;
			const animStart = 4;

			let animItemPoint = window.innerHeight - animItemHeight / animStart;

			if (animItemHeight > window.innerHeight) {
				animItemPoint = window.innerHeight - window.innerHeight / animStart;
			}

			if ((scrollY > animItemOffset - animItemPoint) && scrollY < (animItemOffset + animItemHeight)) {
				animItem.classList.remove('_not-active');
			} else {
				if (!animItem.classList.contains('_anim-no-hide')) {
					animItem.classList.add('_not-active')
				}
			}

		}
	}
	function offset(el) {
		const rect = el.getBoundingClientRect(),
			scrollLeft = window.scrollX || document.documentElement.scrollLeft,
			scrollTop = window.scrollY || document.documentElement.scrollTop;
		return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
	}
	setTimeout(() => {
		animOnScroll();
	}, 300);
}

window.onload = function () {
	const swiperSponsor = new Swiper('.swiper', {
		// configure Swiper to use modules
		modules: [Navigation],
		loop: true,
		navigation: {
			enabled: true,
			nextEl: '.sponsor__button-next',
			prevEl: '.sponsor__button-prev',
		},
		breakpoints: {
			1200: {
				slidesPerView: 5,
				navigation: {
					enabled: true,
				}
			},
			992: {
				slidesPerView: 4,
				navigation: {
					enabled: true,
				}
			},
			768: {
				slidesPerView: 3,
				navigation: {
					enabled: true,
				}
			},
			576: {
				slidesPerView: 2,
				navigation: {
					enabled: true,
				}
			},
			0: {
				enabled: true,
				slidesPerView: 1,
				loop: true,
				autoHeight: true,
				navigation: {
					enabled: true,
					nextEl: '.sponsor__button-next',
					prevEl: '.sponsor__button-prev',
				},
			}
		}
	});
}

// let nav = document.getElementById("nav");
// let pointer = document.getElementById("pointer");
// let links = document.getElementsByClassName("menu__link");

// pointer.style.width = "100px";

// for (let i = 0; i < links.length; i++) {
// 	let current = links[i];
// 	current.dataset.order = i * 100 + "%";
// 	current.addEventListener('hover', movePointer);
// }

// function movePointer(e) {
// 	let order = e.currentTarget.dataset.order;
// 	pointer.style.transform = "translate3d(" + order + ",0,0)";
// 	pointer.style.width = this.current.width;
// }








