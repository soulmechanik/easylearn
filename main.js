let menu = document.querySelector('#menu-btn ')
let navbar = document.querySelector('.navbar')

menu.onclick = () =>{
    menu.classList.toggle('fa-times')
    navbar.classList.toggle('active')
}
window.onscroll = () =>{
    menu.classList.remove('fa-times')
    navbar.classList.remove('active')
}


var swiper = new Swiper(".slide-content", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
