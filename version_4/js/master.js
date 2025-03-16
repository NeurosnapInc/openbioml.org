let currentSlideIndex = 0;
const slides = document.querySelectorAll('.slide');
const indicatorsContainer = document.querySelector('.indicators');

// Create indicators dynamically
slides.forEach((_, i) => {
    const indicator = document.createElement('div');
    indicator.classList.add('indicator');
    if (i === currentSlideIndex) indicator.classList.add('active');
    indicator.addEventListener('click', () => {
        showSlide(i);
        currentSlideIndex = i;
        updateIndicators();
        resetAutoChange(); // Reset auto-change timer on manual change
    });
    indicatorsContainer.appendChild(indicator);
});

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });
    updateIndicators();
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

function updateIndicators() {
    const indicators = document.querySelectorAll('.indicator');
    indicators.forEach((indicator, i) => {
        indicator.classList.remove('active');
        if (i === currentSlideIndex) indicator.classList.add('active');
    });
}

// Add the slide transition effect
slides.forEach(slide => {
    slide.style.transition = "transform 0.5s ease-in-out";
});

// Auto-change slides every 8 seconds
let autoChangeInterval = setInterval(() => {
    changeSlide(1);
}, 8000);

// Reset the auto-change timer when the user manually changes slides
function resetAutoChange() {
    clearInterval(autoChangeInterval);
    autoChangeInterval = setInterval(() => {
        changeSlide(1);
    }, 8000);
}

// Initialize the first slide
showSlide(currentSlideIndex);
