/* ============================================================
   MAIN.JS — behaviour and interactions
   ============================================================ */

/* Smooth scroll for the nav CTA button */
document.querySelector('.nav-cta').addEventListener('click', () => {
  document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
});

/* Shrink nav slightly on scroll for a tighter feel */
const nav = document.querySelector('nav');

window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    nav.style.padding = '0.75rem 4rem';
  } else {
    nav.style.padding = '1.25rem 4rem';
  }
});
