const btnNav = document.querySelector('.hamburger');
const navMobile = document.querySelector('.header__img__navMobile');

const showNav = () => {
	btnNav.classList.toggle('is-active');
	navMobile.classList.toggle('header__img__navMobile--active');
};

btnNav.addEventListener('click', showNav);
