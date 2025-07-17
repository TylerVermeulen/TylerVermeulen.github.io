const swiper = new Swiper('.swiper', {
  loop: true,
  pagination: {
      el: '.swiper-pagination',
      clickable: true,
  },
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },
  scrollbar: {
      el: '.swiper-scrollbar',
  },
  autoplay: {
      delay: 5000,
  },
  on: {
    init: function () {
      addSlideClickHandlers();
    },
    slideChangeTransitionEnd: function () {
      addSlideClickHandlers();
    },
  },
});

// Function to add click handlers to slides
function addSlideClickHandlers() {
  const slides = document.querySelectorAll('.swiper-slide');
  
  slides.forEach((slide, index) => {
    // Remove existing click handlers to avoid duplicates
    slide.style.cursor = 'pointer';
    slide.onclick = null;
    
    // Add click handler based on slide position
    slide.addEventListener('click', function(e) {
      // Don't trigger if clicking on navigation buttons
      if (e.target.closest('.swiper-button-next') || e.target.closest('.swiper-button-prev') || e.target.closest('.swiper-pagination')) {
        return;
      }
      
      // Determine which slide is currently active
      const projectName = slide.querySelector('.project-name-display')?.textContent;
      
      switch(projectName) {
        case 'Cards and Roses':
          window.location.href = 'Projects/Cards and Roses/Cards.html';
          break;
        case 'Tower Defense':
          window.location.href = 'Projects/TowerDefense/Tower_defense.html';
          break;
        case 'Vertical Slice':
          window.location.href = 'Projects/Vertical Slice/VertSlice.html';
          break;
        case 'NeoNUnreal':
          window.location.href = 'Projects/NeoNUnreal/NeoNUnreal.html';
          break;
      }
    });
  });
}

// Night Sky Star Effect
function createStars() {
    const starsContainer = document.getElementById('stars-container');
    const numberOfStars = 200;
    
    // Create regular twinkling stars
    for (let i = 0; i < numberOfStars; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        
        // Random size class
        const sizes = ['small', 'small', 'small', 'medium', 'large']; // More small stars
        const randomSize = sizes[Math.floor(Math.random() * sizes.length)];
        star.classList.add(randomSize);
        
        // Random position
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        
        // Random animation delay for twinkling effect
        star.style.animationDelay = Math.random() * 3 + 's';
        star.style.animationDuration = (2 + Math.random() * 3) + 's';
        
        starsContainer.appendChild(star);
    }
    
    // Create occasional shooting stars
    setInterval(createShootingStar, 8000 + Math.random() * 12000);
}

function createShootingStar() {
    const starsContainer = document.getElementById('stars-container');
    const shootingStar = document.createElement('div');
    shootingStar.className = 'star shooting';
    
    // Start from random position on the left/top edge
    shootingStar.style.left = Math.random() * 20 + '%';
    shootingStar.style.top = Math.random() * 20 + '%';
    
    starsContainer.appendChild(shootingStar);
    
    // Remove shooting star after animation completes
    setTimeout(() => {
        if (shootingStar.parentNode) {
            shootingStar.parentNode.removeChild(shootingStar);
        }
    }, 2000);
}

// Initialize stars when page loads
document.addEventListener('DOMContentLoaded', createStars);


