// Enhanced JavaScript with jQuery fallbacks
(function() {
  'use strict';
  
  // Check if jQuery is available, otherwise use vanilla JS
  function ready(fn) {
    if (typeof jQuery !== 'undefined' && jQuery) {
      $(document).ready(fn);
    } else {
      if (document.readyState === 'complete' || 
          (document.readyState !== 'loading' && !document.documentElement.doScrollTop)) {
        fn();
      } else {
        document.addEventListener('DOMContentLoaded', fn);
      }
    }
  }
  
  function initializeNavbar() {
    const toggler = document.querySelector('.navbar-toggler');
    const icon = document.querySelector('.animated-icon');
    
    if (toggler && icon) {
      toggler.addEventListener('click', function() {
        icon.classList.toggle('open');
      });
    }
  }
  
  function showBody() {
    const body = document.body;
    if (body) {
      body.style.display = 'block';
      body.style.opacity = '0';
      
      // Fade in effect
      let opacity = 0;
      const fadeIn = setInterval(function() {
        if (opacity >= 1) {
          clearInterval(fadeIn);
        }
        body.style.opacity = opacity;
        opacity += 0.1;
      }, 50);
    }
  }
  
  // Initialize when DOM is ready
  ready(function() {
    initializeNavbar();
    showBody();
    
    // If jQuery is available, use it for enhanced features
    if (typeof jQuery !== 'undefined' && jQuery) {
      // jQuery-enhanced navbar toggle
      $('.navbar-toggler').on('click', function() {
        $('.animated-icon').toggleClass('open');
      });
      
      // Smooth show body
      $('body').show(500);
    }
  });
  
})();