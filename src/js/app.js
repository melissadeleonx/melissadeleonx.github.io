/* sweetScroll load */
document.addEventListener("DOMContentLoaded", function () {
  new SweetScroll({/* some options */});

  var sections = document.querySelectorAll('.animated-section');

var handleScrollAnimations = function () {
  sections.forEach(function (section, index) {
    var sectionTop = section.getBoundingClientRect().top;
    var windowHeight = window.innerHeight;

    // Adjust the animation properties
    var offset = 50; 
    var delay = 0.1; 
    var duration = 1.0; 

    // Check if the section is in the viewport
    if (sectionTop < windowHeight * 0.75) {
      // Apply slide-up and fade-in animation
      section.style.opacity = 1;
      section.style.transform = 'translateY(0)';
      section.style.transition = 'opacity ' + duration + 's ease-in-out, transform ' + duration + 's ease-in-out ' + delay + 's';
    } else {
      // Hide the section if it's not in the viewport
      section.style.opacity = 0;
      section.style.transform = 'translateY(' + offset + 'px)';
      section.style.transition = 'opacity ' + duration + 's ease-in-out, transform ' + duration + 's ease-in-out';
    }
  });
};

// Attach the handleScrollAnimations function to the 'scroll' event
window.addEventListener('scroll', handleScrollAnimations);

  
}, false);
