import { gsap, ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

const footer = document.querySelector('footer');

const initFooter = () => {
  const footerUpRef = document.querySelector('.footer-up');

  // External footer link scroll animation
  gsap.from('.footer-up', {
    scrollTrigger: {
      trigger: '.footer',
      scrub: 2,
      start: '50% 100%', // position of trigger meets the scroller position
      end: '0% 0%',
    },
    y: 150,
    ease: 'sine',
  });

  function scrollToTop(e) {
    // Scroll to top logic
    e.preventDefault();
    window.scrollTo({
      behavior: 'smooth',
      top: 0,
    });
  }

  footerUpRef.addEventListener('click', scrollToTop);
};

if (footer) {
  initFooter();
}
