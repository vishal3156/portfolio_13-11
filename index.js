const containerEl = document.querySelector('.projects_container');
var mixer = mixitup(containerEl, {
    animation: {
        enable: false
    }
});

mixer.filter('*');

const navMenu = document.querySelector(".nav_menu")
const navOpenBtn = document.querySelector(".nav_toogle-open")
const navCloseBtn = document.querySelector(".nav_toogle-close")

const openNavHandler = () => {
    navMenu.style.display = "flex";
    navOpenBtn.style.display = "none";
    navCloseBtn.style.display = "inline-block";
}

const closeNavHandler = () => {
    navMenu.style.display = "none";
    navOpenBtn.style.display = "inline-block";
    navCloseBtn.style.display = "none";
}

navOpenBtn.addEventListener("click", openNavHandler)
navCloseBtn.addEventListener("click", closeNavHandler)


const navItems = navMenu.querySelectorAll("a")
if(window.innerWidth < 768) {
    navItems.forEach(item => {
        item.addEventListener("click", closeNavHandler)
    })
}

const themeBtn = document.querySelector(".nav_theme-btn");
themeBtn.addEventListener("click", () => {
    let bodyClass = document.body.className;
    if (!bodyClass) {
        bodyClass = "dark";
        document.body.className = bodyClass;
        window.localStorage.setItem("theme", bodyClass);
    } else {
        bodyClass = "";
        document.body.className = bodyClass;
        window.localStorage.setItem("theme", bodyClass);  
    }
})

window.addEventListener("load", () => {
    document.body.className = window.localStorage.getItem("theme");
})