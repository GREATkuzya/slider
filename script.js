function initSlider() { 

const slides = document.querySelectorAll(".slider-img");
const next = document.querySelector(".arrow-right");
const prev = document.querySelector(".arrow-left");
const sliderDots = document.querySelectorAll(".dot");
const linkHotels = document.querySelectorAll(".link-hotels");
const admiralDesk = document.querySelectorAll(".admiral-desc");
const thievesDesk = document.querySelectorAll(".thieves-desc");
const patrioticDesk = document.querySelectorAll(".patriotic-desc");
let slideIndex = 1;
let dotIndex = 1;

showSlides(slideIndex);
initDots(dotIndex);
linkConnect(slideIndex);
showDescription(slideIndex);

function showSlides(n) {
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    slides.forEach(item => item.classList.toggle("hidden", true));
    slides.forEach(item => item.classList.toggle("active", false));
    slides[slideIndex - 1].classList.remove("hidden");    
    slides[slideIndex - 1].classList.add("active");
    linkConnect(slideIndex);
    showDescription(slideIndex);
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


// функция клика по точке
function dotClick(index) {
    slideIndex = index+1;
    dotIndex = index +1;
    linkConnect(slideIndex);
    showDescription(slideIndex);
    showSlides(slideIndex);
    initDots(slideIndex);
}


// текстовое описание
function showDescription(n) {
    if (n === 1) {
        admiralDesk.forEach(item => item.style.display = "");
        thievesDesk.forEach(item => item.style.display = "none");
        patrioticDesk.forEach(item => item.style.display = "none");
    } if 
        (n === 2) {
        admiralDesk.forEach(item => item.style.display = "none");
        thievesDesk.forEach(item => item.style.display = "");
        patrioticDesk.forEach(item => item.style.display = "none");
    }
      if 
        (n === 3) {
        admiralDesk.forEach(item => item.style.display = "none");
        thievesDesk.forEach(item => item.style.display = "none");
        patrioticDesk.forEach(item => item.style.display = "");
    }
}

next.addEventListener("click", () => {
    nextSlides(1); 
});

prev.addEventListener("click", () => {
    nextSlides(-1);
});

// переключение  по точкам
for (let dotNum=0; dotNum<sliderDots.length; dotNum++) {
    sliderDots[dotNum].addEventListener("click", () => {
        dotClick(dotNum);
    })
    }

// переключение  по ссылкам
for (let linkNum=0; linkNum<linkHotels.length; linkNum++) 
linkHotels[linkNum].addEventListener("click", () =>{
    dotClick(linkNum);
   })

// делает ссылкам нужный стиль
function linkConnect(n) {
    if (n > linkHotels.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = linkHotels.length;
    }
    linkHotels.forEach(item => item.style.color = "");
    linkHotels.forEach(item => item.style.textDecorationLine = "none");
    linkHotels[slideIndex - 1].style.color = "#E3B873";    
    linkHotels[slideIndex - 1].style.textDecorationLine = "underline";
}
}

document.addEventListener("DOMContentLoaded", function() {
    initSlider();
});