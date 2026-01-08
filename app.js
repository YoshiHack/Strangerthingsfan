document.querySelector('.stranger-link').addEventListener('click', function(e) {
  e.preventDefault(); // Stop immediate navigation
  const targetUrl = this.getAttribute('href');
  const textElement = document.querySelector('.stranger-things-text');

  // Add the animation class
  textElement.classList.add('fly-out');

  // Wait for the animation to finish (800ms) before changing page
  setTimeout(() => {
    window.location.href = targetUrl;
  }, 800); 
});
