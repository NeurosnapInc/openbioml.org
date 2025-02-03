let currentSlideIndex = 0;
const slides = document.querySelectorAll('.slide');
const indicatorsContainer = document.querySelector('.indicators');

// Create indicators dynamically
slides.forEach((_, i) => {
    const indicator = document.createElement('div');
    indicator.classList.add('indicator');
    if (i === currentSlideIndex) indicator.classList.add('active');
    indicator.addEventListener('click', () => {
        showSlide(i); // Navigate to the clicked slide
        currentSlideIndex = i; // Update currentSlideIndex
        updateIndicators();
    });
    indicatorsContainer.appendChild(indicator);
});

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) slide.classList.add('active');
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

// Initialize the first slide
showSlide(currentSlideIndex);
