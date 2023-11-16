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

document.querySelector("#search-icon").onclick = () => {
    document.querySelector("#search-form").classList.toggle('active')
}
document.querySelector("#close").onclick = () => {
    document.querySelector("#search-form").classList.remove('active')
}

// Swiper
var swiper = new Swiper(".home-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
   loop: true
  });