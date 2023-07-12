const thumbnails = document.querySelectorAll(".thumbnail img");
const popup = document.querySelector(".popup");
const popupClose = document.querySelector(".popup-close");
const popupImg = document.querySelector(".popup-img");
const arrowLeft = document.querySelector(".popup-arrow--left");
const arrowRight = document.querySelector(".popup-arrow--right");

let currentImgIndex;
let pizda;
let cipuszka;

const showNextImg = (e) => {
  if (currentImgIndex === thumbnails.length - 1) {
    currentImgIndex = 0;
  } else {
    currentImgIndex++;
  }
  popupImg.src = thumbnails[currentImgIndex].src;
};

const showPreviousImg = (e) => {
  if (currentImgIndex === 0) {
    currentImgIndex = 11;
  } else {
    currentImgIndex--;
  }
  popupImg.src = thumbnails[currentImgIndex].src;
};

thumbnails.forEach((thumbnail, index) => {
  thumbnail.addEventListener("click", (e) => {
    popup.classList.remove("hidden");
    popupImg.src = e.target.src;
    currentImgIndex = index;
  });
});

popupClose.addEventListener("click", () => {
  popup.classList.add("hidden");
});

arrowLeft.addEventListener("click", showPreviousImg);

arrowRight.addEventListener("click", showNextImg);

// document.addEventListener("keydown", (e) => {
//   if (e.code === "Escape" || "Esc") {
//     popup.classList.add("hidden");
//   }
// });

document.addEventListener("keydown", (e) => {
  if (e.code === "ArrowRight" || e.KeyCode === 39) {
    showNextImg();
  }
});

document.addEventListener("keydown", (e) => {
  if (e.code === "ArrowLeft" || e.KeyCode === 39) {
    showPreviousImg();
  }
});
