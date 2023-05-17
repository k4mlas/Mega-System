const btnNav = document.querySelector('.hamburger');
const navMobile = document.querySelector('.header__img__navMobile');
const navLinks = document.querySelectorAll('.header__img__navMobile__link');

const showNav = () => {
	btnNav.classList.toggle('is-active');
	navMobile.classList.toggle('header__img__navMobile--active');
	navLinks.forEach((item) => {
		item.addEventListener('click', () => {
			navMobile.classList.remove('header__img__navMobile--active');
			btnNav.classList.remove('is-active');
		});
	});
};

btnNav.addEventListener('click', showNav);
