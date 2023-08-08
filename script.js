let menu = document.querySelector('#list-btn')
let navbar = document.querySelector('.navbar')

menu.onclick = () =>{
  navbar.classList.toggle('active')
}

var swiper = new Swiper(".product-box", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    grabCursor:true,
    autoplay: {
        delay: 9500,
        disableOnInteraction: false,
      },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });
  // 640: {
  //   slidesPerView: 1,
  // },
  // 768: {
  //   slidesPerView: 2,
  // },
  // 991: {
  //   slidesPerView: 5,
  // },