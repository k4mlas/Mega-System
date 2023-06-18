////////////////////////////////////////zmienne do strony
let $btnNavMobile;
let $navMobile;
let $navLinksMobile;
let $navDesktop;
let $footerYear;

let $name;
let $email;
let $text;
let $formBtn;
let $infoForm;
let $nameError;
let $emailError;
let $textError;
let $popup;
let $popupBtn;
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
	//zmienne do formularza
	$name = document.querySelector('#name');
	$email = document.querySelector('#mail');
	$text = document.querySelector('#msg');
	$formBtn = document.querySelector('.contact__form__body__btn');
	$infoForm - document.querySelector('.popup');
	$nameError = document.querySelector('#nameError');
	$emailError = document.querySelector('#emailError');
	$textError = document.querySelector('#textError');
	$popup = document.querySelector('.popup');
	$popupBtn = document.querySelector('.popup__btn');
};

const prepareDOMEvens = () => {
	$btnNavMobile.addEventListener('click', showNav);
	window.addEventListener('scroll', addBacground);
	$formBtn.addEventListener('click', formConact);
	$popupBtn.addEventListener('click', closePopup);
};
///////////////////////////////////////////////////////Funkcje

const handleCurrentYear = () => {
	const year = new Date().getFullYear();
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

const formConact = () => {
	if ($text.value != '' && $name.value != '' && $email.value != '') {
		showpop();
		$text.value = '';
		$email.value = '';
		$name.value = '';
		$nameError.style.visibility = 'hidden';
		$emailError.style.visibility = 'hidden';
		$textError.style.visibility = 'hidden';
	} else {
		checkForm();
	}
};

const checkForm = () => {
	if ($name.value == '') {
		$nameError.style.visibility = 'visible';
	} else {
		$nameError.style.visibility = 'hidden';
	}
	if ($email.value == '') {
		$emailError.style.visibility = 'visible';
	} else {
		$emailError.style.visibility = 'hidden';
	}
	if ($text.value == '') {
		$textError.style.visibility = 'visible';
	} else {
		$textError.style.visibility = 'hidden';
	}
};

const showpop = () => {
	$popup.style.display = 'flex';
};

const closePopup = () => {
	$popup.style.display = 'none';
};
////////////////////////////////////////////////////////Funkcja Main

document.addEventListener('DOMContentLoaded', main);
