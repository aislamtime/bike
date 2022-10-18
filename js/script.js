'use strict';

const iconMenu = document.querySelector('.icon-menu');
const menuBody = document.querySelector('.menu__body');

iconMenu.addEventListener('click', menu);

function menu() {
	iconMenu.classList.toggle('_active');
	menuBody.classList.toggle('_active');
}

//=================================================================
function bg() {
	const bg = document.querySelectorAll('.bg');
	for (let i = 0; i < bg.length; i++) {
		if (bg[i].querySelector('img')) {
			bg[i].style.backgroundImage =
				'url(' + bg[i].querySelector('img').getAttribute('src') + ')';
		}
	}
}
bg();
//=================================================================
const isMobile = {
	Android: function () {
		return navigator.userAgent.match(/Android/i);
	},
	BlackBerry: function () {
		return navigator.userAgent.match(/BlackBerry/i);
	},
	ios: function () {
		return navigator.userAgent.match(/iPhone|iPad|iPod/i);
	},
	Opera: function () {
		return navigator.userAgent.match(/Opera Mini/i);
	},
	Windows: function () {
		return navigator.userAgent.match(/TEMobile/i);
	},
	any: function () {
		return (
			isMobile.Android() ||
			isMobile.BlackBerry() ||
			isMobile.ios() ||
			isMobile.Opera() ||
			isMobile.Windows()
		);
	},
};

const item = document.querySelectorAll('.item');

if (isMobile.any()) {
	for (let i = 0; i < item.length; i++) {
		item[i].classList.add('_mobile');
	}
} else {
	for (let i = 0; i < item.length; i++) {
		item[i].classList.add('_pc');
	}
}
//=================================================================
//SLIDER=================================================================
$(document).ready(function () {
	if ($('.slider__body').length > 0) {
		$('.slider__body').slick({
			autoplay: true,
			infinity: true,
			dots: true,
			arrows: false,
			accessibility: false,
			sliderToShow: 1,
			autoplaySpeed: 3000,
			adaptiveHeight: true,
			nextArrow: '<button type="button" class="slick-next"></button>',
			prevArrow: '<button type="button" class="slick-prev"></button>',
			responsive: [
				{
					breakpoint: 768,
					settings: {},
				},
			],
		});
	}
});
//=================================================================
