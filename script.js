const iconMenu = document.querySelector(".menu__icon");
if (iconMenu) {
    const navLists = document.querySelector('.burger__list');
    const burgerLogo = document.querySelector('.logo__header');
    const blackOut = document.querySelector('.blackout');
    iconMenu.addEventListener('click', function(e) {
        document.body.classList.toggle('body__lock');
        iconMenu.classList.toggle('menu__icon__active');
        navLists.classList.toggle('burger__list__active');
        burgerLogo.classList.toggle('burger__logo');
        blackOut.classList.toggle('blackout__active');
    }); 
}