// Handle navigation between pages
document.querySelectorAll('.nav-link, .footer-column a[data-page]').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Get the target page
        const pageId = this.getAttribute('data-page');
        
        // Hide all pages
        document.querySelectorAll('.page').forEach(page => {
            page.classList.remove('active');
        });
        
        // Show selected page
        document.getElementById(pageId).classList.add('active');
        
        // Update active link styling
        document.querySelectorAll('.nav-link').forEach(navLink => {
            navLink.classList.remove('active');
        });
        
        // Add active class to clicked nav link
        if (this.classList.contains('nav-link')) {
            this.classList.add('active');
        }
        
        // Smooth scroll to top
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});

// Add animation to elements when they come into view
const animateOnScroll = function() {
    const elements = document.querySelectorAll('.topic-card, .member-card, .reg-card, .contact-item, .schedule-item');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementPosition < windowHeight - 100) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
};

// Initialize animations for elements already in view
document.querySelectorAll('.topic-card, .member-card, .reg-card, .contact-item, .schedule-item').forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(30px)';
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
});

window.addEventListener('scroll', animateOnScroll);
animateOnScroll(); // Run once on load

// Add hover effect to cards
document.querySelectorAll('.topic-card, .member-card, .reg-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-8px)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});