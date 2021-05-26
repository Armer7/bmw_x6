const DisableScroll = () => {
  document.body.dataset.scrollY = window.scrollY;
  const scrollWidth = window.innerWidth - document.body.offsetWidth;
  //document.body.style.overflow = 'hidden'; 1 вариант, но не работает в бом и сафари
  document.body.style.cssText = `overflow:hidden;
    top: -${window.scrollY}px;
    left: 0;
    width: 100%;
    position: fixed;
    height: 100vh;
    padding-right: ${scrollWidth}px;
    `;
};

const EnableScroll = () => {
  document.body.style.cssText = '';
  window.scroll({
    top: document.body.dataset.scrollY,
  });
};

export { DisableScroll, EnableScroll };
