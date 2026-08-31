document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var menu = document.querySelector('nav.primary ul');
  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      menu.classList.toggle('open');
    });
    menu.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { menu.classList.remove('open'); });
    });
  }
});
