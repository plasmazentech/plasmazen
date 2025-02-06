// Scroll reveal animation for sections
const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -100px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});

// JavaScript for toggling the mobile menu
const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');

hamburger.addEventListener('click', () => {
    menu.classList.toggle('active');
});

// Close the menu if a link is clicked (optional)
const menuLinks = document.querySelectorAll('.menu a');
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('active');
    });
});

// Reset menu state on screen resize
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) { // Adjust this value as per your design breakpoint
        // Ensure the menu is closed and hamburger icon is visible
        menu.classList.remove('active');
    }
});
