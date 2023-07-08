let menu = document.querySelector(' #menu-bar')
let navbar = document.querySelector('.nav-links')
let navbar_links = document.querySelector('#navbar-links')
let button = document.querySelector('.browser-txt')
let header = document.querySelector('header')

menu.onclick = () => {
    menu.classList.toggle('fa-times')
    navbar.classList.toggle('active')
}
window.onscroll = () => {
    menu.classList.remove('fa-times')
    navbar.classList.remove('active')
}


window.onscroll = function () { myFunction() };
function myFunction() {
    if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
        document.getElementById("navbar-links").className = "nav-links";
        header.style.background = "rgb(246, 242, 242)";
        header.style.borderBottom = "1px solid #ece7e5";
    } else {
        document.getElementById("navbar-links").style.display = "none";
    }
}



