const slides = document.querySelectorAll(".slider-img");
const next = document.querySelector(".arrow-right");
const prev = document.querySelector(".arrow-left");
const sliderDots = document.querySelectorAll(".dot");
const linkAdmiral = document.querySelector(".link-admiral");
const linkThieves = document.querySelector(".link-thieves");
const linkPatriotic = document.querySelector(".link-patriotic");
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
    slides.forEach(item => item.style.display = "none");
    slides[slideIndex - 1].style.display = "";    
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
// функция возможно лишняя, но не получается результат через другие функции
function dotClick(index) {
    slides.forEach(item => item.style.display = "none");
    slides[index].style.display = "";    
    sliderDots.forEach(item => item.style.opacity = "0.3");
    sliderDots[index].style.opacity = "1";
    slideIndex = index+1;
    dotIndex = index +1;
    linkConnect(slideIndex);
    showDescription(slideIndex);
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


// переключение  по точкам, надо упростить как то одним выражением, через индекс
sliderDots[1].addEventListener("click", () => {
    // showSlides(2);  по идее эти 2 функции должны делать то же, что и эта оставшаяся, но они не отрабатывают, незнаю почему
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

// переключение  по ссылкам, надо упростить как то одним выражением, через индекс
linkAdmiral.addEventListener("click", () =>{
    dotClick(0);
    linkConnect(slideIndex);
    showDescription(slideIndex);
})

linkThieves.addEventListener("click", () =>{
    dotClick(1);
    linkConnect(slideIndex);
    showDescription(slideIndex);
})

linkPatriotic.addEventListener("click", () =>{
    dotClick(2);
    linkConnect(slideIndex);
    showDescription(slideIndex);
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