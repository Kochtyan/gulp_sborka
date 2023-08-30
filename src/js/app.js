// import MousePRLX from './libs/parallaxMouse'
// import AOS from 'aos'
// import Swiper, { Navigation, Pagination } from 'swiper';

import BaseHelpers from './helpers/BaseHelpers.js';
import PopupManager from './modules/PopupManager';
import BurgerMenu from './modules/BurgerMenu';
import Tabs from './modules/Tabs';
import Accordion from './modules/Accordion.js';

BaseHelpers.checkWebpSupport();

BaseHelpers.addTouchClass();

BaseHelpers.addLoadedClass();

BaseHelpers.headerFixed();

/**
 * Открытие/закрытие модальных окон
 * Чтобы модальное окно открывалось и закрывалось
 * На окно повешай атрибут data-popup="<название окна>"
 * На кнопку, которая вызывает окно повешай атрибут data-type="<название окна>"

 * На обертку(.popup) окна добавь атрибут '[data-close-overlay]'
 * На кнопку для закрытия окна добавь класс '.button-close'
 * */
new PopupManager();

/**
 *  Модуль для работы с меню (Бургер)
 * */
new BurgerMenu().init();

/**
 *  Библиотека для анимаций
 *  документация: https://michalsnik.github.io/aos
 * */
// AOS.init();

/**
 * Параллакс мышей
 * */
// new MousePRLX();

new Tabs('tabs-example', {
  onChange: (data) => {
    console.log(data);
  },
});

new Accordion('.accordion', {
  shouldOpenAll: false, // true
  defaultOpen: [], // [0,1]
  collapsedClass: 'open',
});

class Popup {
  constructor(root) {
      this.root = root;
      this.closeButton = this.root.querySelector('.popupp__close');
      this.overlay = this.root;
      this.html = document.querySelector('html');
      this.bindListeners();
  }

  bindListeners() {
      this.root.addEventListener('click', (event) => {
          if(event.target == this.overlay || event.target == this.closeButton) {
              event.preventDefault();
              this.close();
          }
      })
  }

  open() {
      console.log('open');
      this.html.classList.add('no-scroll');
      this.root.classList.add('popupp__overlay_show');
  }

  close() {
      this.html.classList.remove('no-scroll');
      this.root.classList.remove('popupp__overlay_show');
  }
  
}
function initPopup() {
 //Mobile menu
 const mobileMenuNode = document.querySelector('#mobile-menu');
 const mobileMenu = new Popup(mobileMenuNode);


 const mobileMenuButton = document.querySelector('.menu__burger');
 if(mobileMenuButton) {
     mobileMenuButton.addEventListener('click', (event) => {
         mobileMenu.open();
     })
 }
}

document.addEventListener('DOMContentLoaded', (event) => {
  initPopup();
})
