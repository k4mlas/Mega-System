////////////////////////////////////////zmienne do strony
let $btnNavMobile;
let $navMobile;
let $navLinksMobile;
///////////////////////////////////////

const main = () => {
	prepareDOMElements();
	prepareDOMEvens();
};

const prepareDOMElements = () => {
	//zmienne do nawigacji mobilnej
	$btnNavMobile = document.querySelector('.hamburger');
	$navMobile = document.querySelector('.header__img__navMobile');
	$navLinksMobile = document.querySelectorAll('.header__img__navMobile__body__link');
};

const prepareDOMEvens = () => {
	$btnNavMobile.addEventListener('click', showNav);
};
///////////////////////////////////////////////////////Funkcje

const showNav = () => {
	$btnNavMobile.classList.toggle('is-active');
	$navMobile.classList.toggle('header__img__navMobile--active');
	document.body.classList.toggle('sticky-body');
	$navLinksMobile.forEach((item) => {
		item.addEventListener('click', () => {
			$navMobile.classList.remove('header__img__navMobile--active');
			$btnNavMobile.classList.remove('is-active');
		});
	});
};

////////////////////////////////////////////////////////Funkcja Main

document.addEventListener('DOMContentLoaded', main);
