const body = document.querySelector('body')
const menuTrigger = document.querySelector('#toggle-main-menu-mobile') as HTMLDivElement;
const menuContainer = document.querySelector('#main-menu-mobile');

// tslint:disable-next-line
require('../scss/main.scss');

menuTrigger.onclick = function() {
    menuContainer.classList.toggle('open');
    menuTrigger.classList.toggle('is-active')
    body.classList.toggle('lock-scroll')
}
