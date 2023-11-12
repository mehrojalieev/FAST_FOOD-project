const Menu = document.querySelector("#menu-bars")
const Navbar = document.querySelector(".navbar")

Menu.onclick = () => {
    Menu.classList.toggle("fa-times")
    Navbar.classList.toggle("active")
}

window.onscroll = () => {
    Menu.classList.remove('fa-times');
    Navbar.classList.remove("active")
}