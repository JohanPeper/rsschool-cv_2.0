const burgerNav = document.querySelector('#collapse');
const navBtn = document.querySelector('#nav-btn');
const navBtnImg = document.querySelector('#nav-btn-img');
const scrollController = {
    disabledScroll() {
        document.body.style.cssText = `
        overflow: hidden;
        `;
    },
    enabledScroll() {
        document.body.style.cssText = `
        overflow: visible;
        `;
    }
}

navBtn.onclick = () => {
    if (burgerNav.classList.toggle('open')) {
        navBtnImg.src = "./img/close.png";
        scrollController.disabledScroll();
    } else {
        navBtnImg.src = "./img/burger.png";
        scrollController.enabledScroll();
    }
}
(function () {
    const burgerNav = document.querySelector("#collapse");
    const burgerNavLinks = burgerNav.querySelectorAll("a");

    burgerNavLinks.forEach((e) => {
        e.addEventListener("click", () => {
            burgerNav.classList.remove("open");
            navBtnImg.src = "./img/burger.png";
            scrollController.enabledScroll();
        });
    });
})();