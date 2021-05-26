export default function Tabs() {
  const dataHandlerElems = document.querySelectorAll('[data-tabs-handler]');
  const dataFieldElems = document.querySelectorAll('[data-tabs-field]');

  dataHandlerElems.forEach((handler) => {
    handler.addEventListener('click', () => {
      dataHandlerElems.forEach((item) => {
        if (handler === item) {
          item.classList.add('design-list__item_active');
        } else {
          item.classList.remove('design-list__item_active');
        }
      });
      dataFieldElems.forEach((item) => {
        if (handler.dataset.tabsHandler === item.dataset.tabsField) {
          item.classList.remove('hidden');
        } else {
          item.classList.add('hidden');
        }
      });
    });
  });
}
