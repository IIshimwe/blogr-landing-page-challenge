
document.querySelector('.button-close').addEventListener('click', menuHideShow);
document.querySelector('.burger').addEventListener('click', menuHideShow);

function menuHideShow() {
    document.querySelector('.menu').classList.toggle('menu-hide');
    document.querySelector('.burger').classList.toggle('burger-hide');
}