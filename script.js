const menuIcon = document.querySelector(".nav-menuicon");
const menuCloseBtn = document.querySelector(".menu-close-button");
const navMenu = document.querySelector(".nav-menu");

menuIcon.addEventListener("click", () => {
  navMenu.classList.toggle("show-animation");
  navMenu.classList.toggle("hidden");
});

menuCloseBtn.addEventListener("click", () => {
  navMenu.classList.toggle("show-animation");
  navMenu.classList.toggle("hidden");
});
