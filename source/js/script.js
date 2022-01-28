// Для бургера

var navMain = document.querySelector('.navigation');
var navToggle = document.querySelector('.navigation__toggle');

  navMain.classList.remove('navigation--no-js');

  navToggle.addEventListener('click', function() {
      if (navMain.classList.contains('navigation--closed')) {
        navMain.classList.remove('navigation--closed');
        navMain.classList.add('navigation--opened');
      } else {
        navMain.classList.add('navigation--closed');
        navMain.classList.remove('navigation--opened');
      }
  });

// // Для таблицы

// let sliderToggle = document.querySelectorAll('.slider__toggle');

// sliderToggle.addEventListener('click', function() {
//   sliderToggle.classList.add('slider__toggle--current');
// });
