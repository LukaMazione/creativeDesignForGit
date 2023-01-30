const nav = document.querySelector('.nav__items');
const navBtn = document.querySelector('.nav__btn');

const handleNav = () => {
	nav.classList.toggle('nav__items--active');
};

navBtn.addEventListener('click', handleNav);
