// HAMBURGER MENU

const burgerMenu = document.querySelector('.burgerMenu');

const navList = document.querySelector('#navUl');


burgerMenu.addEventListener('click', function () {
    navList.classList.toggle('active')
    this.firstElementChild.classList.toggle('fa-bars');
    this.firstElementChild.classList.toggle('fa-xmark');
    
} )

