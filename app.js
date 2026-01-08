document.addEventListener('DOMContentLoaded', () => {
  const link = document.querySelector('.stranger-link');
  const text = document.querySelector('.stranger-things-text');

  link.addEventListener('click', function(e) {
    e.preventDefault(); // Stop the browser from leaving immediately
    const targetUrl = this.getAttribute('href');

    // Add the animation class NOW
    text.classList.add('fly-out-trigger');

    // Wait for the 0.8s animation to finish before navigating
    setTimeout(() => {
      window.location.href = targetUrl;
    }, 800); 
  });
});
