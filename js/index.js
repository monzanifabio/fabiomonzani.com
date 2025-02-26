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
const targetId = "navbarSupportedContent"; // Hardcoded for reliability
const targetMenu = document.getElementById(targetId);

menuTrigger.addEventListener("click", (e) => {
  e.preventDefault();

  if (!isToggled) {
    // Opening the menu
    targetMenu.classList.remove("closing");
    targetMenu.classList.add("show");
    isToggled = true;
  } else {
    // Closing the menu - add closing class first
    targetMenu.classList.remove("show");
    targetMenu.classList.add("closing");

    // After animation completes, remove the closing class
    setTimeout(() => {
      targetMenu.classList.remove("closing");
    }, 300); // Match this to animation duration

    isToggled = false;
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

// const textReveal = document.getElementById("textReveal");

function animateText(text) {
  textReveal.textContent = "";
  [...text].forEach((char, index) => {
    const span = document.createElement("span");
    span.textContent = char === " " ? "\u00A0" : char;
    if (char === " ") {
      span.classList.add("space");
    }
    span.style.transitionDelay = `${index * 0.1}s`;
    textReveal.appendChild(span);

    setTimeout(() => {
      span.classList.add("visible");
    }, 50);
  });
}

// Initial text animation
// animateText(textReveal.textContent);

//Animated button menu
const btnMenu = document.querySelector(".btn-menu");
btnMenu.addEventListener("click", () => {
  btnMenu.classList.toggle("active");
});
