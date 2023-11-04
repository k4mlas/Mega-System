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
let $nameError;
let $emailError;
let $textError;
let $errorInfo;
let $popup;
let $popupBtn;
let $errorsNumbers;
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
	$errorInfo = document.querySelectorAll('.contact__form__body__box__error');
	$popup = document.querySelector('.popup');
	$popupBtn = document.querySelector('.popup__btn');
};

const prepareDOMEvens = () => {
	$btnNavMobile.addEventListener('click', showNav);
	window.addEventListener('scroll', addBacground);
	$formBtn.addEventListener('click', (e) => {
		e.preventDefault();
		checkForm([$name, $email, $text]);
		checkEmail();
		checkName();
		errors([$name, $email, $text]);
	});
	$popupBtn.addEventListener('click', (e) => {
		e.preventDefault();
		closeForm();
	});
	// $popupBtn.addEventListener('click', closePopup);
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

const showError = (error) => {
	error.nextElementSibling.style.visibility = 'visible';
	error.classList.add('errorInput');
};

const hideError = (error) => {
	error.nextElementSibling.style.visibility = 'hidden';
	error.classList.remove('errorInput');
};

const checkEmail = () => {
	const reg =
		/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	if (reg.test($email.value)) {
		hideError($email);
	} else {
		showError($email);
	}
};

const checkName = () => {
	if ($name.value.length == 0) {
		showError($name);
	} else if ($name.value.length > 0 && $name.value.length < 3) {
		$name.nextElementSibling.style.visibility = 'visible';
		$name.nextElementSibling.innerText = 'Wpisz minimum 3 znaki';
		$name.classList.add('errorInput');
	} else {
		hideError($name);
	}
};

const errors = (numb) => {
	$errorsNumbers = 0;
	numb.forEach((el) => {
		if (el.classList.contains('errorInput')) {
			$errorsNumbers++;
		}
	});
	if ($errorsNumbers == 0) {
		$popup.style.display = 'flex';
	}
};
const checkForm = (inputs) => {
	inputs.forEach((el) => {
		if (el.value === '') {
			showError(el);
		} else {
			hideError(el);
		}
	});
};

const closeForm = () => {
	$name.value = '';
	$email.value = '';
	$text.value = '';
	$popup.style.display = 'none';
};

////////////////////////////////////////////////////////Funkcja Main

document.addEventListener('DOMContentLoaded', main);
