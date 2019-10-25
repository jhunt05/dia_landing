//Adaptive menu
let menu = document.querySelector('.menu__links');

function openMenu() {
  menu.classList.toggle('menu__links-show');
}

//Slider
let images = document.querySelectorAll('.slide');
let i = 0;

function previousPhoto() {
  images[i].classList.remove('showed');
  i--;

  if (i < 0) {
    i = images.length - 1;
  }

  images[i].classList.add('showed');
}

function nextPhoto() {
  images[i].classList.remove('showed');
  i++;

  if (i >= images.length) {
    i = 0;
  }

  images[i].classList.add('showed');
}

setInterval(nextPhoto, 7000);