document.addEventListener('DOMContentLoaded', function() {
    
    const typewriterElement = document.querySelector('.typewriter');
    const textToType = 'NEXUS AI DIGITAL Internship';
    let charIndex = 0;
    
    function typeWriter() {
        if (charIndex < textToType.length) {
            typewriterElement.textContent += textToType.charAt(charIndex);
            charIndex++;
            setTimeout(typeWriter, 100);
        }
    }
    
    setTimeout(typeWriter, 500);
    
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });
    
    const fadeInObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });
    
    const fadeInElements = document.querySelectorAll('.fade-in-scroll');
    
    fadeInElements.forEach(element => {
        fadeInObserver.observe(element);
    });
    
    const statNumbers = document.querySelectorAll('.stat-number');
    let hasAnimated = false;
    
    const statsObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting && !hasAnimated) {
                hasAnimated = true;
                animateCounters();
            }
        });
    }, {
        threshold: 0.5
    });
    
    const aboutSection = document.querySelector('.about');
    if (aboutSection) {
        statsObserver.observe(aboutSection);
    }
    
    function animateCounters() {
        statNumbers.forEach(stat => {
            const target = parseInt(stat.getAttribute('data-target'));
            const duration = 2000;
            const increment = target / (duration / 16);
            let current = 0;
            
            const updateCounter = () => {
                current += increment;
                if (current < target) {
                    stat.textContent = Math.floor(current);
                    requestAnimationFrame(updateCounter);
                } else {
                    stat.textContent = target;
                }
            };
            
            updateCounter();
        });
    }
    
    const hamburger = document.querySelector('.hamburger');
    const navLinksContainer = document.querySelector('.nav-links');
    
    hamburger.addEventListener('click', function() {
        navLinksContainer.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
    
    const contactForm = document.querySelector('.contact-form');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const message = document.getElementById('message').value;
        
        if (!name || !email || !message) {
            alert('Please fill in all required fields!');
            return;
        }
        
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address!');
            return;
        }
        
        alert(`Thank you ${name}! Your application has been submitted successfully. We'll contact you at ${email} soon!`);
        
        contactForm.reset();
    });
    
    const newsletterForm = document.querySelector('.newsletter-form');
    
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const emailInput = this.querySelector('input[type="email"]');
        const email = emailInput.value;
        
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address!');
            return;
        }
        
        alert('Thank you for subscribing to our newsletter!');
        emailInput.value = '';
    });
    
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.style.backgroundColor = 'rgba(10, 25, 47, 1)';
        } else {
            navbar.style.backgroundColor = 'rgba(10, 25, 47, 0.95)';
        }
    });
    
    const cards = document.querySelectorAll('.program-card, .benefit-item, .stat-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    const scrollTopBtn = document.createElement('button');
    scrollTopBtn.innerHTML = '↑';
    scrollTopBtn.className = 'scroll-to-top';
    scrollTopBtn.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        background-color: var(--primary-color);
        color: white;
        border: none;
        border-radius: 50%;
        font-size: 24px;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 999;
    `;
    
    document.body.appendChild(scrollTopBtn);
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 500) {
            scrollTopBtn.style.opacity = '1';
            scrollTopBtn.style.visibility = 'visible';
        } else {
            scrollTopBtn.style.opacity = '0';
            scrollTopBtn.style.visibility = 'hidden';
        }
    });
    
    scrollTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    console.log('%c🚀 NEXUS AI DIGITAL', 'color: #0066FF; font-size: 24px; font-weight: bold;');
    console.log('%cWelcome to our internship program!', 'color: #00D9FF; font-size: 16px;');
    console.log('%cInterested in joining? Visit our contact section!', 'color: #666; font-size: 14px;');
    
});