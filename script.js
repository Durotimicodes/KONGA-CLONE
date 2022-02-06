"use strict";

// SLIDE SHOW SECTION

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

// MODAL SECTION

// selecting the classes

// const modal = document.querySelector(".modal");
// const btnsCloseModal = document.querySelector(".close-modal");
// const btnsOpenModal = document.querySelector(".btn-subcribe");
// const overlay = document.querySelector(".overlay");

// // open modal function

// const openModal = function () {
//   modal.classList.remove("hidden");
//   overlayModal.classList.remove("hidden");
// };

// // close modal function

// const closeModal = function () {
//   modal.classList.add("hidden");
//   overlay.classList.add("hidden");
// };

// // functionality

// for (let i = 0; i < btnsOpenModal.length; i++) {
//   console.log(btnsOpenModal[i].addEventListener("click", openModal));

//   btnsCloseModal.addEventListener("click", closeModal);
//   overlay.addEventListener("click", closeModal);
// }

// document.addEventListener("keydown", function (e) {
//   console.log(e.key);
//   if (e.key === "Escape" && !modal.classList.contains("hidden")) {
//     closeModal();
//   }
// });


