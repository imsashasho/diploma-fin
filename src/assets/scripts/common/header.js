import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

{
  const headerRef = document.querySelector('.header');
  const menuRef = document.getElementById('header-menu');
  const toggleBtnRef = document.getElementById('header-toggle-menu');

  gsap.registerPlugin(ScrollTrigger);
  window.addEventListener('scroll', (evt) => {
    scrollFunction();
  });
  function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      headerRef.classList.add('bg-header');
    } else {
      headerRef.classList.remove('bg-header');
    }
  }

  function toggleHeaderClass() {
    headerRef.classList.toggle('active');
  }

  // Функція, яка обробляє клік поза елементом
  function handleOutsideClick(event) {
    if (!headerRef.contains(event.target)) {
      headerRef.classList.remove('active');
      document.removeEventListener('click', handleOutsideClick);
    }
  }

  // Додаємо обробник події на натискання кнопки
  menuRef.addEventListener('click', toggleHeaderClass);

  // Додаємо обробник події на клік поза елементом
  document.addEventListener('click', handleOutsideClick);
}
