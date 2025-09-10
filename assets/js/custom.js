// Navbar - vanilla JavaScript version (fallback for when jQuery is blocked)
document.addEventListener('DOMContentLoaded', function() {
  const navbarToggler = document.querySelector('.navbar-toggler');
  const animatedIcon = document.querySelector('.animated-icon');
  
  if (navbarToggler && animatedIcon) {
    navbarToggler.addEventListener('click', function() {
      animatedIcon.classList.toggle('open');
    });
  }
});

// Fallback jQuery version if available
if (typeof $ !== 'undefined') {
  $(document).ready(function () {
    $(".navbar-toggler").on("click", function () {
      $(".animated-icon").toggleClass("open");
    });
  });
}