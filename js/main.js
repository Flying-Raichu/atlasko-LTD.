/* ============================================================
   MAIN.JS — behaviour and interactions
   ============================================================ */

const nav       = document.querySelector('nav');
const hamburger = document.querySelector('.nav-hamburger');
const navLinks  = document.querySelector('.nav-links');

/* Smooth scroll for the nav CTA button */
document.querySelector('.nav-cta').addEventListener('click', () => {
  document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
});

/* Shrink nav on scroll — desktop only, so mobile padding isn't overridden */
window.addEventListener('scroll', () => {
  if (window.innerWidth > 768) {
    nav.style.padding = window.scrollY > 60 ? '0.75rem 4rem' : '1.25rem 4rem';
  }
});

/* Hamburger menu toggle */
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  navLinks.classList.toggle('open');
});

/* Close menu when a nav link is clicked */
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    navLinks.classList.remove('open');
  });
});
