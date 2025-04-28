/* Script added by Manoj Kumar */

document.addEventListener('DOMContentLoaded', function() {
    let currentSlide = 0;
    const slides = document.querySelectorAll('.carousel img');
  
    function showSlide(index) {
      slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
      });
    }
  
    window.nextSlide = function() {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    }
  
    window.prevSlide = function() {
      currentSlide = (currentSlide - 1 + slides.length) % slides.length;
      showSlide(currentSlide);
    }
  
    // 🌟 Auto-rotate every 3 seconds (3000ms)
    setInterval(function() {
      nextSlide();
    }, 3000);
  });
  