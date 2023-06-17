////////////////////////////////////////zmienne do strony
let $btnNavMobile;
let $navMobile;
let $navLinksMobile;
let $navDesktop;
let $footerYear;
///////////////////////////////////////

const main = () => {
	prepareDOMElements();
	prepareDOMEvens();
	handleCurrentYear();
};

const prepareDOMElements = () => {
	//zmienne do nawigacji mobilnej
	$btnNavMobile = document.querySelector('.hamburger');
	$navMobile = document.querySelector('.header__img__navMobile');
	$navLinksMobile = document.querySelectorAll(
		'.header__img__navMobile__body__link'
	);
	//zmienne do nawigacji desktop
	$navDesktop = document.querySelector('.header__img__navDesktop__navigaction');
	// zmienna do roku w footer
	$footerYear = document.querySelector('.footerYear');
};

const prepareDOMEvens = () => {
	$btnNavMobile.addEventListener('click', showNav);
	window.addEventListener('scroll', addBacground);
};
///////////////////////////////////////////////////////Funkcje

const handleCurrentYear = () => {
	const year = new Date().getFullYear();
	console.log(year);
	$footerYear.innerText = year;
};

const showNav = () => {
	$btnNavMobile.classList.toggle('is-active');
	$navMobile.classList.toggle('header__img__navMobile--active');
	document.body.classList.toggle('sticky-body');
	$navLinksMobile.forEach((item) => {
		item.addEventListener('click', () => {
			$navMobile.classList.remove('header__img__navMobile--active');
			$btnNavMobile.classList.remove('is-active');
			document.body.classList.remove('sticky-body');
		});
	});
};


const addBacground = () => {
	if (window.scrollY >= 250) {
		$navDesktop.classList.add('addBackground');
	} else {
		$navDesktop.classList.remove('addBackground');
	}
};

////////////////////////////////////////////////////////Funkcja Main

document.addEventListener('DOMContentLoaded', main);
