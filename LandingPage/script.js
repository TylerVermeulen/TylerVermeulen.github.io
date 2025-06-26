// Initialize Swiper
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
});

// Function to update project name
function updateProjectName(name) {
  document.getElementById('projectName').textContent = name;
}

// Example usage - you can call this function to change the project name
// updateProjectName("Your Project Name Here");