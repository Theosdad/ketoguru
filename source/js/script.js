import '../js/bmi-calculator.js';
import '../js/init-swiper.js';


const tabsButtons = document.querySelectorAll('.tabs__button');
const tabsItems = document.querySelectorAll('.contains__item--tabs');

const initTabs = () => {
  tabsButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
      tabsButtons.forEach((button) => {
        button.classList.remove('active');
      });

      tabsItems.forEach((item) => {
        item.classList.remove('active');
      });

      button.classList.add("active");
      tabsItems[index].classList.add('active');
    });
  });
}

initTabs();
