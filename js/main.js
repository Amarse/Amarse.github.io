'use strict';

// 네비바 배경이 스크롤 될때 진하게 나오게 하는
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
  console.log(`window.scrollY: ${window.scrollY}`);
  console.log(`navBarHeight: ${navbarHeight}`);

  if (window.scrollY > navbarHeight) {
    navbar.classList.add('navbar--dark');
  } else {
    navbar.classList.remove('navbar--dark');
  }
});
