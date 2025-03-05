document.addEventListener('DOMContentLoaded', () => {
    // Navbar Toggle for Mobile
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');

    burger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        burger.classList.toggle('active');
    });

    // Close menu when link is clicked
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            burger.classList.remove('active');
        });
    });

    // Reveal Animations
    const revealElements = document.querySelectorAll('.reveal');

    const revealOnScroll = () => {
        revealElements.forEach(element => {
            const windowHeight = window.innerHeight;
            const elementTop = element.getBoundingClientRect().top;
            const revealPoint = 150;

            if (elementTop < windowHeight - revealPoint) {
                element.classList.add('active');
            } else {
                element.classList.remove('active');
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Initial check

    // Form Submission Simulation
    const contactForm = document.getElementById('contact-form');
    
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Simulate form submission
        const submitBtn = contactForm.querySelector('.submit-btn');
        submitBtn.textContent = 'Enviando...';
        submitBtn.disabled = true;

        setTimeout(() => {
            // Reset form
            submitBtn.textContent = 'Mensaje Enviado';
            
            // Optional: Clear form fields
            contactForm.reset();
            
            // Re-enable button after few seconds
            setTimeout(() => {
                submitBtn.textContent = 'Enviar Mensaje';
                submitBtn.disabled = false;
            }, 3000);
        }, 1500);
    });

    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Parallax Effect on Hero Section
    const heroSection = document.getElementById('hero');
    
    window.addEventListener('scroll', () => {
        const scrollPosition = window.pageYOffset;
        const heroBackground = document.querySelector('.hero-background');
        
        // Parallax background
        heroBackground.style.transform = `translateY(${scrollPosition * 0.5}px)`;
    });

    // Remove Loader after page load
    window.addEventListener('load', () => {
        const loader = document.querySelector('.loader');
        loader.style.display = 'none';
    });
});
