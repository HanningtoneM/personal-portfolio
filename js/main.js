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

function close() {
  mobileMenu.style.top = '-100%';
  document.querySelector('.main').classList.remove('blur');
  document.querySelector('.logo').classList.remove('blur');
  openMenu.classList.remove('blur');
}

openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', close);

document.querySelectorAll('.dmenu').forEach((dmenu) => {
  dmenu.addEventListener('click', () => {
    mobileMenu.style.display = 'none';
    document.querySelector('.main').classList.remove('blur');
    document.querySelector('.logo').classList.remove('blur');
    openMenu.classList.remove('blur');
  });
});
