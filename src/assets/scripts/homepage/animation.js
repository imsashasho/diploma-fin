import { gsap, ScrollTrigger, MotionPathPlugin } from 'gsap/all';

gsap.registerPlugin(MotionPathPlugin, ScrollTrigger);

var animation;
gsap.set('#rect125', { scale: 1, autoAlpha: 1 });
gsap.set('#rect', { transformOrigin: '50% 50%' });

animation = gsap.to('#rect', {
  scrollTrigger: {
    trigger: '#rect125',
    start: 'top 50%',
    end: '+=9464px',
    scrub: 1,
    // markers: true,
  },
  duration: 1,
  ease: 'none',
  immediateRender: true,
  motionPath: {
    path: '#rect125',
    align: '#rect125',
    alignOrigin: [0.5, 0.5],
    autoRotate: 270,
  },
});

// function initParallax() {
//   slides.forEach(slide => {
//     let images = slide.querySelectorAll('[img-paralax]');

//     images.forEach(image => {
//       const wrap = document.createElement('div');
//       wrap.style.overflow = 'hidden';
//       wrap.style.height = '100%';
//       image.parentElement.prepend(wrap);
//       //   gsap.set(image, { willChange: 'transform', scale: 1.1 });
//       wrap.prepend(image);

//       gsap.fromTo(
//         image,
//         {
//           y: '-20px',
//           scale: 1.3,
//         },
//         {
//           y: '5vh',
//           scrollTrigger: {
//             trigger: slide,
//             scrub: true,
//             start: 'top bottom', // position of trigger meets the scroller position
//           },
//           ease: 'sine',
//         },
//       );
//     });
//   });
// }

// function init() {
//   initParallax();
// }

// window.onload = () => {
//   init();
// };
