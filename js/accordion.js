const featureLinkElems = document.querySelectorAll('.feature__link');
const featureSubElems = document.querySelectorAll('.feature-sub');

featureLinkElems.forEach((item, index) => {
  item.addEventListener('click', () => {
    featureLinkElems.forEach((featureLinkElem, key) => {
      if (index !== key) {
        featureLinkElem.classList.remove('feature__link_active');
      }
    });
    featureSubElems.forEach((featureSubElem, key) => {
      if (index !== key) {
        featureSubElem.classList.add('hidden');
      }
    });
    item.classList.toggle('feature__link_active');
    featureSubElems[index].classList.toggle('hidden');
  });
});
