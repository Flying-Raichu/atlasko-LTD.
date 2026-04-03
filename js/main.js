/* ============================================================
   MAIN.JS — behaviour and interactions
   ============================================================ */

const navInner    = document.querySelector('.nav-inner');
const hamburger   = document.querySelector('.nav-hamburger');
const mobileMenu  = document.querySelector('.nav-mobile-menu');

/* Smooth scroll for the nav CTA button */
document.querySelector('.nav-cta').addEventListener('click', () => {
  document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
});

/* Shrink nav on scroll — desktop only */
window.addEventListener('scroll', () => {
  if (window.innerWidth > 768) {
    navInner.style.padding = window.scrollY > 60 ? '0.75rem 4rem' : '1.25rem 4rem';
  }
});

/* Hamburger toggle */
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  mobileMenu.classList.toggle('open');
});

/* Close mobile menu when a link is tapped */
mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    mobileMenu.classList.remove('open');
  });
});
