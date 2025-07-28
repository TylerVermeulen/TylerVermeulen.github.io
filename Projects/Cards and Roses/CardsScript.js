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

// Code snippet expand/collapse functionality
function toggleCode(button) {
    const codeSnippet = button.parentElement;
    const previewDiv = codeSnippet.querySelector('.code-preview');
    const fullDiv = codeSnippet.querySelector('.code-full');
    
    if (fullDiv.style.display === 'none' || fullDiv.style.display === '') {
        // Expanding to show full code
        previewDiv.style.display = 'none';
        fullDiv.style.display = 'block';
        button.textContent = 'Collapse Code';
        button.style.background = 'linear-gradient(135deg, #ff6b6b, #ee5a5a)';
        button.style.color = '#ffffff';
    } else {
        // Collapsing to show preview
        previewDiv.style.display = 'block';
        fullDiv.style.display = 'none';
        button.textContent = 'Expand Code';
        button.style.background = 'linear-gradient(135deg, #f8edd2, #e6d5a8)';
        button.style.color = '#0a0f1c';
    }
}