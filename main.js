const body = document.body;
const slides = document.querySelectorAll('.slide');
const leftBtn = document.querySelector('#left');
const rightBtn = document.querySelector('#right');

let activeSlide = 0;
const myInterval = setInterval(nextSlide, 4000);

function bodyBackground() {
    body.style.backgroundImage = slides[activeSlide].style.backgroundImage;
}
bodyBackground();

function currentSlide() {
    slides.forEach(slide => {
        slide.classList.remove('active');
    })
    slides[activeSlide].classList.add('active');
}
rightBtn.addEventListener('click', () => {
    activeSlide++;

    if (activeSlide > slides.length - 1) {
        activeSlide = 0;
    }
    currentSlide();
    bodyBackground();
});

leftBtn.addEventListener('click', () => {
    activeSlide--;

    if (activeSlide < 0) {
        activeSlide = slides.length - 1;
    }
    currentSlide();
    bodyBackground();
});

    function nextSlide(){
        bodyBackground();
        currentSlide();
        activeSlide++;
        if (activeSlide == slides.length) {
            activeSlide = 0;
        }
    };

