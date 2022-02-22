const cross = "fa-duotone fa-xmark";
const burger = "fa-burger fa-solid";

window.onload = ()=>{
    const humMenu = document.querySelector('.hum-menu');
    let clicked = true;
    humMenu.addEventListener('click', ()=>{
        if (clicked)
        {
            document.querySelector('.line1').classList.add('line1-click');
            document.querySelector('.line2').classList.add('line2-click');
            document.querySelector('.line3').classList.add('line3-click');
            document.querySelector('.navbar').classList.remove('hide');
            document.querySelector('body').classList.add('navbar-overflow');
            clicked = false;
        }
        else {
            document.querySelector('.navbar').classList.add('hide');
            document.querySelector('.line1').classList.remove('line1-click');
            document.querySelector('.line2').classList.remove('line2-click');
            document.querySelector('.line3').classList.remove('line3-click');
            document.querySelector('body').classList.remove('navbar-overflow');
            clicked = true;
        }
    });
}