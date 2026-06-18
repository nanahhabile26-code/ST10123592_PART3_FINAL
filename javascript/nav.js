// ── Hamburger toggle ──
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('navLinks');

if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navLinks.classList.toggle('open');
  });
}

// ── Submenu toggle on mobile ──
document.querySelectorAll('.submenu-toggle').forEach(toggle => {
  toggle.addEventListener('click', e => {
    if (window.innerWidth <= 768) {
      e.preventDefault();
      toggle.parentElement.classList.toggle('open');
    }
  });
});

// ── Scroll — add .scrolled to nav ──
const nav = document.querySelector('nav');
if (nav) {
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 40);
  });
}