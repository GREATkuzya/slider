const slides = document.querySelectorAll(".slider-img");
const next = document.querySelector(".arrow-right");
const prev = document.querySelector(".arrow-left");
console.log(slides.length);
let slideIndex = 1;

showSlides(slideIndex);

function showSlides(n) {
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    slides.forEach(item => item.style.display = "none");
    slides[slideIndex - 1].style.display = "";
    }

function nextSlides(n) {
    showSlides(slideIndex += n);
}

next.addEventListener("click", () => {
    nextSlides(1);
});

prev.addEventListener("click", () => {
    nextSlides(-1);
});