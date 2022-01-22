/* eslint-disable no-undef */

// Parallax fin de page
const light = document.getElementById('light');
const character = document.getElementById('character');
const screenWidth = window.innerWidth;
const maxScroll = document.body.scrollHeight;

let nbScroll = 0;
let previousScroll = 3400;

window.addEventListener('scroll', () => {
  const scroll = (window.scrollY / maxScroll) * 100;
  if (scroll > 58) {
    // eslint-disable-next-line no-unused-expressions
    scroll > previousScroll ? (nbScroll += 1) : (nbScroll -= 1);
    previousScroll = scroll;

    light.style.left = `${nbScroll * (screenWidth * 0.0003)}px`;
    character.style.left = `${nbScroll * (-screenWidth * 0.0005)}px`;
  }
});

const nav = document.querySelector('.nav');
const headerLogo = document.querySelector('.header__logo');
const toTopButton = document.querySelector('.toTopButton');

window.onscroll = () => {
  const top = window.scrollY;
  // background sur la navigation
  if (top >= 30) {
    headerLogo.classList.add('active');
  } else {
    headerLogo.classList.remove('active');
  }

  if (top >= 800) {
    nav.classList.add('active--background');
    toTopButton.classList.add('button-active');
  } else {
    nav.classList.remove('active--background');
    toTopButton.classList.remove('button-active');
  }
};

const list = document.querySelectorAll('.nav__list');

// eslint-disable-next-line no-unused-vars
function activeLink() {
  list.forEach((item) => {
    item.classList.remove('nav__list--active');
    this.classList.add('nav__list--active');
  });
}

list.forEach((item) => {
  item.addEventListener('click', activeLink);
});

// Services desktop
const servicesContainer = document.getElementsByClassName('services__container');
const servicesArray = [...servicesContainer];
const rightMarketing = document.getElementById('marketing');
const rightWebTechnique = document.getElementById('web-technique');
const rightAudiovisuel = document.getElementById('audiovisuel');
const rightUiUx = document.getElementById('ui-ux');

servicesArray.forEach((service) => {
  service.addEventListener('click', () => {
    if (service.children[0].innerText === 'Marketing Digital') {
      rightMarketing.classList.add('right__container--active');
      rightWebTechnique.classList.remove('right__container--active');
      rightAudiovisuel.classList.remove('right__container--active');
      rightUiUx.classList.remove('right__container--active');
    } else if (service.children[0].innerText === 'Web Technique') {
      rightMarketing.classList.remove('right__container--active');
      rightWebTechnique.classList.add('right__container--active');
      rightAudiovisuel.classList.remove('right__container--active');
      rightUiUx.classList.remove('right__container--active');
    } else if (service.children[0].innerText === 'Audiovisuel') {
      rightMarketing.classList.remove('right__container--active');
      rightWebTechnique.classList.remove('right__container--active');
      rightAudiovisuel.classList.add('right__container--active');
      rightUiUx.classList.remove('right__container--active');
    } else {
      rightMarketing.classList.remove('right__container--active');
      rightWebTechnique.classList.remove('right__container--active');
      rightAudiovisuel.classList.remove('right__container--active');
      rightUiUx.classList.add('right__container--active');
    }
  });
});

// Bouton haut de page
// eslint-disable-next-line no-unused-vars
const topFunction = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};
