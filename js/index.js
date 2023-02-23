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

// Modals trigger
const modalTriggers = document.querySelectorAll('[data-bs-toggle="modal"]');
modalTriggers.forEach((modalTrigger) => {
  modalTrigger.addEventListener("click", (e) => {
    e.preventDefault();
    squiggle.classList.add("squiggleIn");
    let target = modalTrigger.getAttribute("data-target");
    let targetModal = document.getElementById(target);
    // Delay the modal to appear until the squiggle animation has ended
    setTimeout(() => {
      document.body.style.overflow = "hidden";
      targetModal.classList.add("show");
      targetModal.style.display = "block";
    }, 700);
    squiggle.addEventListener("animationend", () => {
      squiggle.classList.remove("squiggleIn");
    });

    const closeTriggers = document.querySelectorAll('[data-bs-dismiss="modal"]');
    closeTriggers.forEach((closeTrigger) => {
      closeTrigger.addEventListener("click", (e) => {
        e.preventDefault();
        document.body.style.overflow = "";
        targetModal.classList.remove("show");
        targetModal.style.display = "none";
      });
    });
  });
});

// Import all modals from /projects
const urls = ["./projects/podpoint.html", "./projects/samlabs.html", "./projects/orderly.html", "./projects/molteni-kitchen.html"];

window.addEventListener("load", (event) => {
  const modals = document.getElementById("modals");

  // Create an array of promises that resolve to the fetch responses
  const fetchPromises = urls.map((url) => fetch(url).then((response) => response.text()));

  // Wait for all of the promises to resolve
  Promise.all(fetchPromises).then((responses) => {
    // Process the responses
    responses.forEach((response) => {
      modals.innerHTML += response;
    });
  });
});
