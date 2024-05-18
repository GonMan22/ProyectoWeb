const MENU = document.querySelector('.menu');
const CERRAR = document.querySelector('.cerrar');
const NAV = document.querySelector('.nav');

document.addEventListener('click', (e) => {
    let etq = e.target;
    if(etq.classList.contains('menu') || etq.classList.contains('cerrar')){
        NAV.classList.toggle('nav_mobile');
        NAV.classList.toggle('block');
        MENU.classList.toggle('none');
    }
});