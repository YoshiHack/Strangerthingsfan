document.addEventListener('DOMContentLoaded', () => {
  const link = document.querySelector('.stranger-link');
  const text = document.querySelector('.stranger-things-text');

  if (link && text) {
    link.addEventListener('click', function(e) {
      e.preventDefault(); 
      const targetUrl = this.getAttribute('href');

      // 1. Remove class if it was somehow already there
      text.classList.remove('fly-out-trigger');
      
      // 2. Force a "reflow" (Critical for triggering animations reliably)
      void text.offsetWidth; 

      // 3. Add the animation class
      text.classList.add('fly-out-trigger');

      // 4. Navigate after the animation duration (800ms)
      setTimeout(() => {
        window.location.href = targetUrl;
      }, 800); 
    });
  } else {
    console.error("Link or Text element not found. Check your class names!");
  }
});
