// Mobile navigation
window.addEventListener("scroll", function () {
  let mobileNav = document.getElementById("mobileNav");

  if (window.scrollY > 800) {
    mobileNav.classList.add("fadeIn");
  } else {
    mobileNav.classList.remove("fadeIn");
  }
});

let squiggle = document.getElementById("squiggle");

// Menu trigger
let isToggled = false;
const menuTrigger = document.querySelector('[data-bs-toggle="collapse"]');
menuTrigger.addEventListener("click", (e) => {
  e.preventDefault();
  isToggled = !isToggled;
  let target = menuTrigger.getAttribute("data-bs-target");
  let targetMenu = document.getElementById(target);
  if (isToggled) {
    document.getElementById(target).classList.add("show");
  } else {
    document.getElementById(target).classList.remove("show");
  }
});

function openModal(target) {
  modal = document.getElementById(target);
  squiggle.classList.add("squiggleIn");
  // Delay the modal to appear until the squiggle animation has ended
  setTimeout(() => {
    modal.showModal();
  }, 800);
  squiggle.addEventListener("animationend", () => {
    squiggle.classList.remove("squiggleIn");
  });
}

function closeModal(target) {
  modal = document.getElementById(target);
  modal.close();
}

// Delayed reveal
var links = document.getElementsByClassName("delayedLink");

for (var i = 0; i < links.length; i++) {
  links[i].addEventListener("click", function (event) {
    event.preventDefault();

    var href = this.getAttribute("href");
    squiggle.classList.add("squiggleIn");

    setTimeout(function () {
      window.location.href = href;
    }, 800); // 5000 milliseconds = 5 seconds
    squiggle.addEventListener("animationend", () => {
      squiggle.classList.remove("squiggleIn");
    });
  });
}
