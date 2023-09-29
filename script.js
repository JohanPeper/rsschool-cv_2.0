const burgerNav = document.querySelector('#collapse');
const navBtn = document.querySelector('#nav-btn');
const navBtnImg = document.querySelector('#nav-btn-img')

navBtn.onclick = () => {
    if (burgerNav.classList.toggle('open')){
        navBtnImg.src = "./img/close.png";
    } else {
        navBtnImg.src = "./img/burger.png";
    }
}