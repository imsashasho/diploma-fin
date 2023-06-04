import { popupFactory } from './popupFactory';

export const contactPopup = popupFactory(document.querySelector('.contact-popup'));
const closeBtnRef = document.querySelector('.close-popup');
const closeAllBtnRef = document.querySelector('.close-form');

closeBtnRef.addEventListener('click', () => {
  contactPopup.close();
});

closeAllBtnRef.addEventListener('click', () => {
  contactPopup.close();
});
