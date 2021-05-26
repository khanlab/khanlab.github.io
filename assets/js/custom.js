// Navbar
$(document).ready(function () {
  $(".navbar-toggler").on("click", function () {
    $(".animated-icon").toggleClass("open");
  });
});

// Page transition
$(document).ready(function() {
  $("body").show(500);
  $("a").click(function() {
      $link = $(this).attr("href");
      setTimeout(function(){
          window.location.replace($link);
      },900);
      $("body").hide(1000);
      return false;
  });
});