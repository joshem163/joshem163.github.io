(function () {
  const button = document.querySelector('.menu-toggle');
  const navigation = document.querySelector('.site-nav');

  if (button && navigation) {
    button.addEventListener('click', function () {
      const open = navigation.classList.toggle('open');
      button.setAttribute('aria-expanded', String(open));
    });
  }

  document.querySelectorAll('[data-year]').forEach(function (element) {
    element.textContent = new Date().getFullYear();
  });
})();
