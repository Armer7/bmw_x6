import { DisableScroll, EnableScroll } from './blockScrolled.js';
export default function Modal() {
  const designBlockElem = document.querySelector('.design-block');
  const modalElem = document.querySelector('.modal');

  const openModal = () => {
    modalElem.classList.remove('hidden');
    DisableScroll();
  };

  const closeModal = () => {
    modalElem.classList.add('hidden');
    EnableScroll();
  };

  designBlockElem.addEventListener('click', (e) => {
    const target = e.target;
    if (target.matches('.more')) {
      openModal();
    }
  });

  modalElem.addEventListener('click', (e) => {
    const target = e.target;
    if (target.matches('.overlay, .modal__close')) {
      closeModal();
    }
  });
}
