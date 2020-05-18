'use strict';

// 네비바 배경이 스크롤 될때 진하게 나오게 하는
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
  // console.log(`window.scrollY: ${window.scrollY}`);
  // console.log(`navBarHeight: ${navbarHeight}`);

  if (window.scrollY > navbarHeight) {
    navbar.classList.add('navbar--dark');
  } else {
    navbar.classList.remove('navbar--dark');
  }
});

//네비바 컨텐츠를 누르면 해당 세션에 가기
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (event) => {
  const target = event.target;
  const link = target.dataset.link;
  if (link == null) {
    return;
  }
  // console.log(event.target.dataset.link);
  scrollIntoView(link);
});

//네비바 토글
const navbarToggleBtn = document.querySelector('.navbar__toggle-btn');
navbarToggleBtn.addEventListener('click', () => {
  navbarMenu.classList.toggle('open');
});

// contact 버튼을 르면 contact으로 이동
const homeContactBtn = document.querySelector('.home__contact');
homeContactBtn.addEventListener('click', () => {
  scrollIntoView('#contact');
});

//스크롤 내리면 홈이 연해지게 하기
const home = document.querySelector('.home__container');
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
  // console.log(1 - window.scrollY / homeHeight);
  home.style.opacity = 1 - window.scrollY / homeHeight;
});

//스크롤 하면 에로우업 버튼 사라졌다 나타나기
const arrowUp = document.querySelector('.arrow-up');
document.addEventListener('scroll', () => {
  if (window.scrollY > homeHeight / 2) {
    arrowUp.classList.add('visible');
  } else {
    arrowUp.classList.remove('visible');
  }
});

// 에로우 업 누르면 홈으로 이동하기
arrowUp.addEventListener('click', () => {
  scrollIntoView('#home');
});

function scrollIntoView(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({ behavior: 'smooth' });
}

//프로젝트 메뉴 누르면 해당 프로젝트 열리기
const workMenuBtn = document.querySelector('.work__categories');
const projectMenuBtn = document.querySelector('.works__projects');
const projects = document.querySelectorAll('.project');

workMenuBtn.addEventListener('click', (e) => {
  const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
  if (filter == null) {
    return;
  }

  //새로클릭 된 메뉴에 효과 주기
  const active = document.querySelector('.category__btn.selected');
  if (active != null) {
    active.classList.remove('selected');
  }
  e.target.classList.add('selected');

  // 3초 있다 필터링 노출하기
  projectMenuBtn.classList.add('anim-out');
  setTimeout(() => {
    projects.forEach((project) => {
      // console.log(project.dataset.type);
      if (filter === '*' || filter === project.dataset.type) {
        project.classList.remove('invisible');
      } else {
        project.classList.add('invisible');
      }
    });

    projectMenuBtn.classList.remove('anim-out');
  }, 300);

  // let project = 0;
  // for (let i = 0; i < projects.length; i++) {
  //   project = projects[i];
  //   console.log(project);
  // }
});
