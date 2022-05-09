// mobile menu

const openMenu = document.querySelector('.open-menu');
const mobileMenu = document.querySelector('.desktopmenu');
const closeMenu = document.querySelector('.close-menu');

function show() {
  mobileMenu.style.display = 'flex';
  mobileMenu.style.top = '0';
  document.querySelector('.main').classList.add('blur');
  document.querySelector('.logo').classList.add('blur');
  openMenu.classList.add('blur');
}

openMenu.addEventListener('click', show);

