// Scroll Event for Animation
window.addEventListener('scroll', () => {
    const strengths = document.querySelectorAll('.strength');
    const heading = document.querySelector('.strengths-heading');

    // For Strength Bars Animation
    strengths.forEach(strength => {
        const bar = strength.querySelector('.bar');
        const position = bar.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3; // Trigger animation when bar is 1/3 into the viewport

        // Check if bar is in the viewport and trigger animation
        if (position < screenPosition) {
            const width = bar.getAttribute('data-width'); // Get the width from data-width
            bar.style.width = `${width}%`; // Animate the width to the specified value
            bar.style.opacity = 1; // Fade in the bar
        }
    });

    // For Heading Animation
    const headingPosition = heading.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;

    if (headingPosition < screenPosition) {
        heading.style.opacity = 1;
        heading.style.transform = 'translateY(0)'; // Bring it back to its original position
    }
});
