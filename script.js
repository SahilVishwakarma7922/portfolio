// JavaScript to toggle the navbar menu on mobile
document.getElementById('hamburger-menu').addEventListener('click', function() {
    document.querySelector('.navbar').classList.toggle('active');
});


document.addEventListener("DOMContentLoaded", function() {
    const timelineItems = document.querySelectorAll('.timeline-item');

    // Create an IntersectionObserver to detect when an element is in view
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            // If the item is in view
            if (entry.isIntersecting) {
                // Add the 'visible' class to the timeline item to trigger animation
                entry.target.classList.add('visible');
                // Stop observing the element after it becomes visible
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.5 // Trigger the animation when 50% of the element is visible
    });

    // Observe each timeline item
    timelineItems.forEach(item => {
        observer.observe(item);
    });
});

function toggleMenu() {
    document.querySelector(".nav-links").classList.toggle("active");
}

