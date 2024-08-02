// https://bytewebster.com/
// https://bytewebster.com/
// https://bytewebster.com/

var swiper = new Swiper(".swiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 2,
      slideShadows: true
    },
    spaceBetween: 60,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    }
  });

  document.addEventListener('DOMContentLoaded', function () {
    var swiper = new Swiper('.swiper-container', {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      autoplay: {
        delay: 3000, // Autoplay delay in milliseconds
        disableOnInteraction: false, // Continue autoplay after user interaction
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      // Add breakpoints for responsive design
      breakpoints: {
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
      },
    });
  });

  
  function showBio(cardNumber) {
    var bioPopup = document.getElementById("bio" + cardNumber);
    bioPopup.style.display = "flex";
}

function hideBio(cardNumber) {
    var bioPopup = document.getElementById("bio" + cardNumber);
    bioPopup.style.display = "none";
}


