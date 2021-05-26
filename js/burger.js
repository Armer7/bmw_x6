export default function Burger() {
  const menuElem = document.querySelector('.menu');
  const humburgerElem = document.querySelector('.humburger-menu');

  const handleMenu = (e) => {
    const target = e.target;
    const parent = target.closest('.menu');
    if (
      (!parent && target !== humburgerElem) ||
      target.classList.contains('menu-list__link')
    ) {
      toggleMenu();
    }
  };

  const toggleMenu = () => {
    menuElem.classList.toggle('menu-active');
    humburgerElem.classList.toggle('humburger-menu-active');
    if (menuElem.classList.contains('menu-active')) {
      document.body.addEventListener('click', handleMenu);
    } else {
      document.body.removeEventListener('click', handleMenu);
    }
  };

  humburgerElem.addEventListener('click', toggleMenu);
}
