// Testimonial Slider
document.addEventListener('DOMContentLoaded', function() {
    const testimonials = document.querySelectorAll('.testimonial');
    let currentTestimonial = 0;
    
    if (testimonials.length > 0) {
        // Initialize first testimonial as active
        testimonials[currentTestimonial].classList.add('active');
        
        // Auto-rotate testimonials every 5 seconds
        setInterval(() => {
            showNextTestimonial();
        }, 5000);
        
        // Navigation buttons would go here if added
    }
    
    function showNextTestimonial() {
        testimonials[currentTestimonial].classList.remove('active');
        testimonials[currentTestimonial].classList.add('next');
        
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        
        setTimeout(() => {
            testimonials.forEach(testimonial => {
                testimonial.classList.remove('next', 'prev');
            });
            
            testimonials[currentTestimonial].classList.add('active');
        }, 500);
    }
    
    // Program Card Hover Animations
    const programCards = document.querySelectorAll('.program-card');
    programCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.classList.add('hover-grow', 'hover-shadow');
        });
        
        card.addEventListener('mouseleave', function() {
            this.classList.remove('hover-grow', 'hover-shadow');
        });
    });
    
    // Scroll Reveal Animations
    const scrollReveal = ScrollReveal({
        origin: 'bottom',
        distance: '60px',
        duration: 1000,
        delay: 200,
        reset: true
    });
    
    scrollReveal.reveal('.program-card', { interval: 200 });
    scrollReveal.reveal('.event-item', { interval: 200 });
    scrollReveal.reveal('.testimonial', { interval: 200 });
    
    // Hero Element Staggered Animations
    const heroTitle = document.querySelector('.hero-title');
    const heroSubtitle = document.querySelector('.hero-subtitle');
    const heroButtons = document.querySelector('.hero-buttons');
    
    if (heroTitle && heroSubtitle && heroButtons) {
        setTimeout(() => {
            heroTitle.style.animation = 'fadeIn 1s ease forwards';
        }, 300);
        
        setTimeout(() => {
            heroSubtitle.style.animation = 'fadeIn 1s ease forwards';
        }, 600);
        
        setTimeout(() => {
            heroButtons.style.animation = 'fadeIn 1s ease forwards';
        }, 900);
    }
    
    // Animate elements when they come into view
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    
    const animationObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                animationObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });
    
    animatedElements.forEach(element => {
        animationObserver.observe(element);
    });
});