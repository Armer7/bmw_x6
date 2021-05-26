export default function SmoothScroll() {
  const smoothScrollElems = document.querySelectorAll(
    'a[href^="#"]:not(a[href="#"])'
  );
  smoothScrollElems.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const id = link.getAttribute('href').substring(1);
      document.getElementById(id).scrollIntoView({
        behavior: 'smooth',
      });
    });
  });
}
