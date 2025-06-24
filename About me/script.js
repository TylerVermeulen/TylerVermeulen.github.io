
function toggleEmailBox() {
    const emailBox = document.getElementById('emailBox');
    if (emailBox.style.display === 'none' || emailBox.style.display === '') {
        emailBox.style.display = 'block';
        emailBox.style.animation = 'slideDown 0.3s ease-out';
    } else {
        emailBox.style.animation = 'slideUp 0.3s ease-out';
        setTimeout(() => {
            emailBox.style.display = 'none';
        }, 300);
    }
}

function copyEmail() {
    const emailText = 'tyler.vermeulen@example.com';
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
