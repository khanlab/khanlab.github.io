// Navbar
const navbar = document.querySelector(".navbar");
const footbar = document.querySelector(".footbar");
const menuToggle = document.querySelector("#nav-toggle");

menuToggle.addEventListener("click", () => {
  navbar.classList.toggle("open");
  footbar.classList.toggle("open");
});