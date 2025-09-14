window.addEventListener('DOMContentLoaded', () => {
  const headerElements = document.querySelectorAll(
    '.container-elements-header, .container-text-header, .container-img-header'
  );
  headerElements.forEach(el => {
    el.style.opacity = '1';
  });
});