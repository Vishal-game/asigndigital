document.querySelector('.cta-button').addEventListener('click', () => {
    alert('Redirecting to more details...');
    // Add redirection logic here if needed.
});

document.addEventListener("DOMContentLoaded", function() {
    const testimonialsGrid = document.querySelector(".testimonials-grid");
    const testimonials = document.querySelectorAll(".testimonial-card");
    const visibleCount = 2; // Number of testimonials to show at a time
    let currentIndex = 0;

    function showNextTestimonials() {
        currentIndex += visibleCount;

        // If we reach the end, start from the beginning
        if (currentIndex >= testimonials.length) {
            currentIndex = 0;
        }

        // Calculate the width to slide
        const slideWidth = testimonialsGrid.clientWidth * (currentIndex / visibleCount);
        
        testimonialsGrid.style.transform = `translateX(-${slideWidth}px)`;
    }

    // Rotate testimonials every second
    setInterval(showNextTestimonials, 1000);
});
