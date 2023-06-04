import { popupFactory } from './popupFactory';

export const successPopup = popupFactory(document.querySelector('.thank-you-popup'));

const closeAllBtnRef = document.querySelector('.close-popup');

closeAllBtnRef.addEventListener('click', () => {
  successPopup.close();
});
