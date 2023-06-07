import { gsap, ScrollTrigger, MotionPathPlugin } from 'gsap/all';
import path from 'path';

gsap.registerPlugin(ScrollTrigger);

gsap.registerPlugin(MotionPathPlugin);

document.addEventListener('DOMContentLoaded', (e) => {
  console.clear();

  gsap.registerPlugin(MotionPathPlugin, ScrollTrigger);

  const viewport = document.querySelector('#viewport');
  const world = document.querySelector('#animation-container');
  const bee = document.querySelector('#rect');

  const worldWidth = world.offsetWidth;
  const worldHeight = world.offsetHeight;

  const setX = gsap.quickSetter(world, 'x', 'px');
  const setY = gsap.quickSetter(world, 'y', 'px');
  const setOrigin = gsap.quickSetter(world, 'transformOrigin');
  const beeProps = gsap.getProperty(bee);

  let vw; let vh; let clampX; let
    clampY;
  onResize();

  gsap.set('#svg', {
    width: 1920,
    height: 9464,
  });

  gsap.set(bee, {
    display: 'block',
    transformOrigin: '50% 0%',
    x: path[0],
    y: path[1],
  });

  const beeTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: '#viewport',
      start: 'top top',
      end: 'bottom bottom',
      scrub: 1,
      invalidateOnRefresh: true,
      onUpdate: (self) => {
        gsap.to('#rect', { rotation: () => (self.direction === 1 ? 0 : 90), overwrite: 'auto' });
      },
    },
  });

  beeTimeline.to(bee, {
    duration: 100000, // Adjust the duration as needed
    motionPath: {
      path: '#rect125',
      type: 'cubic',
      alignOrigin: [0.5, 0.5],
      autoRotate: 270,
    },
    ease: 'none',
  });

  gsap.ticker.add(update);

  function update() {
    const { x } = bee._gsap;
    const { y } = bee._gsap;

    setX(-clampX(x - vw / 2));
    setY(-clampY(y - vh / 2));
    ScrollTrigger.refresh();
  }

  window.addEventListener('resize', onResize);

  function onResize() {
    vw = window.innerWidth;
    vh = window.innerHeight;
    clampX = gsap.utils.clamp(0, worldWidth - vw);
    clampY = gsap.utils.clamp(0, worldHeight - vh);
  }
});

// var animation;

// gsap.registerPlugin(MotionPathPlugin, ScrollTrigger);

// gsap.set('#rect125', { scale: 1, autoAlpha: 1 });
// gsap.set('#rect', { transformOrigin: '50% 50%' });

// animation = gsap.to('#rect', {
//   scrollTrigger: {
//     trigger: '#rect125',
//     start: 'top 20%',
//     end: '+=9464px',
//     scrub: 1,
//     markers: true,
//     onUpdate: self => {
//       gsap.to('#rect', { rotation: () => (self.direction === 1 ? 0 : -180), overwrite: 'auto' });
//     },
//   },
//   duration: 1,
//   ease: 'none',
//   immediateRender: true,
//   motionPath: {
//     path: '#rect125',
//     align: '#rect125',
//     alignOrigin: [0.5, 0.5],
//     autoRotate: 90,
//   },
// });

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
