// Navbar
const navbar = document.querySelector("#navbar");
const menuToggle = document.querySelector("#nav-toggle");

menuToggle.addEventListener("click", () => {
  navbar.classList.toggle("open");
});