function toggleEmailBox() {
    const emailBox = document.getElementById('emailBox');
    emailBox.classList.toggle('show');
}

function copyEmail() {
    const emailText = 'tylervermeulen@outlook.com';
    navigator.clipboard.writeText(emailText).then(() => {
        const copyBtn = document.querySelector('.copy-btn');
        const originalText = copyBtn.textContent;
        copyBtn.textContent = 'Copied!';
        copyBtn.style.background = '#28a745';
        setTimeout(() => {
            copyBtn.textContent = originalText;
            copyBtn.style.background = '';
        }, 2000);
    }).catch(() => {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = emailText;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        
        const copyBtn = document.querySelector('.copy-btn');
        const originalText = copyBtn.textContent;
        copyBtn.textContent = 'Copied!';
        copyBtn.style.background = '#28a745';
        setTimeout(() => {
            copyBtn.textContent = originalText;
            copyBtn.style.background = '';
        }, 2000);
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
