document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById('theme-toggle');
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');
  const typingSpan = document.querySelector('.typing');

  toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
  });

  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

  const titles = ["Web Developer", "Frontend Developer", "UI/UX Designer"];
  let index = 0;

  function animateTyping() {
    let charIndex = 0;
    const currentTitle = titles[index];
    typingSpan.textContent = "";

    const type = () => {
      if (charIndex < currentTitle.length) {
        typingSpan.textContent += currentTitle.charAt(charIndex);
        charIndex++;
        setTimeout(type, 100);
      } else {
        setTimeout(() => {
          index = (index + 1) % titles.length;
          animateTyping();
        }, 2000);
      }
    };

    type();
  }

  animateTyping();

  document.querySelectorAll('.cert-thumb').forEach(img => {
    img.addEventListener('click', () => {
      const lightbox = document.getElementById('lightbox');
      const lightboxImg = document.getElementById('lightbox-img');
      const lightboxCaption = document.getElementById('lightbox-caption');
      lightboxImg.src = img.src;
      lightboxCaption.textContent = img.dataset.caption || '';
      lightbox.classList.add('active');
    });
  });

  document.getElementById('lightbox').addEventListener('click', () => {
    document.getElementById('lightbox').classList.remove('active');
  });
});