let currentSlideIndex = 0;
const slides = document.querySelectorAll('.slide');


function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) slide.classList.add('active');
    });
}


function changeSlide(direction) {
    currentSlideIndex += direction;
    if (currentSlideIndex < 0) {
        currentSlideIndex = slides.length - 1; // Wrap to last slide
    }
    if (currentSlideIndex >= slides.length) {
        currentSlideIndex = 0; // Wrap to first slide
    }
    showSlide(currentSlideIndex);
}


// Initialize the first slide
showSlide(currentSlideIndex);
