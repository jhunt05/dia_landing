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

// Menu anchors

let linkNav = document.querySelectorAll('[href^="#"]');
const V = 1.2;
        
for (let i = 0; i < linkNav.length; i++) {
  linkNav[i].addEventListener('click', function(e) { 
    e.preventDefault();

    let w = window.pageYOffset;
    let hash = this.href.replace(/[^#]*(.*)/, '$1');  
    let t = document.querySelector(hash).getBoundingClientRect().top;
    let start = null;

    requestAnimationFrame(step);

    function step(time) {
      if (start === null) start = time;
            
      let progress = time - start;
      let r = (t < 0 ? Math.max(w - progress/V, w + t) : Math.min(w + progress/V, w + t));
      window.scrollTo(0,r);
                
      if (r != w + t) {
        requestAnimationFrame(step)
      } else {
        location.hash = hash  
      }
    }
  }, false);
}