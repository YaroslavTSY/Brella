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

if (functions.animItems.length > 0) {
	window.addEventListener('scroll', functions.animOnScroll)
	functions.offset
	setTimeout(() => {
		functions.animOnScroll
	}, 300);
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








