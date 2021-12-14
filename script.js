const slides = document.querySelectorAll(".slider-img");
const next = document.querySelector(".arrow-right");
const prev = document.querySelector(".arrow-left");
const sliderDots = document.querySelectorAll(".dot");
const linkAdmiral = document.querySelector(".link-admiral");
let slideIndex = 1;
let dotIndex = 1;

showSlides(slideIndex);
initDots(dotIndex);
linkConnect(slideIndex)

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
    initDots(dotIndex += n);
}

function initDots(n) {
    if (n > sliderDots.length) {
        dotIndex = 1;
    }
    if (n < 1) {
        dotIndex = sliderDots.length;
    }
    sliderDots.forEach(item => item.style.opacity = "0.3");
    sliderDots[dotIndex -1].style.opacity = "1";
}

function dotClick(index) {
    slides.forEach(item => item.style.display = "none");
    slides[index].style.display = "";    
    sliderDots.forEach(item => item.style.opacity = "0.3");
    sliderDots[index].style.opacity = "1";
    slideIndex = index+1;
    dotIndex = index +1;
}
next.addEventListener("click", () => {
    nextSlides(1);
   console.log(slideIndex, dotIndex);
 });

prev.addEventListener("click", () => {
    nextSlides(-1);
    console.log(slideIndex, dotIndex);
});

sliderDots[1].addEventListener("click", () => {
    // showSlides(2);
    // initDots(2);
    dotClick(1);
    console.log(slideIndex, dotIndex);
   })

sliderDots[0].addEventListener("click", () => {
    dotClick(0);
    // showSlides(1);
    // initDots(1);
    console.log(slideIndex, dotIndex);
})

sliderDots[2].addEventListener("click", () => {
    // showSlides(3);
    // initDots(3);
    dotClick(2);
    console.log(slideIndex, dotIndex);
})

function linkConnect(slideIndex) {
    if (slideIndex === 1) {
        linkAdmiral.classList.toggle("special-color");
      linkAdmiral.style.color = "#E3B873";
    } else {
        linkAdmiral.style.color = "";
    }
}