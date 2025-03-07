document.addEventListener('DOMContentLoaded', function() {
    // Referencias a elementos DOM
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelector('.nav-links');
    const burger = document.querySelector('.burger');
    const scrollSections = document.querySelectorAll('.scroll-animation-section, #nosotros, #fundadores, #equipo');
    const cursoCards = document.querySelectorAll('.curso-card');
    const playButtons = document.querySelectorAll('.play-button');

    // Alternar menú de navegación móvil
    burger.addEventListener('click', () => {
        navLinks.classList.toggle('open');
        burger.classList.toggle('toggle');
    });

    // Cerrar menú al hacer clic en un enlace
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('open');
            burger.classList.remove('toggle');
        });
    });

    // Cambiar estilo de navbar al hacer scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        animateOnScroll();
    });

    // Función para animar elementos al hacer scroll
    function animateOnScroll() {
        scrollSections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (sectionTop < windowHeight * 0.75) {
                section.classList.add('show');
            }
        });
    }

    animateOnScroll();

    // Efecto de fade-in progresivo en la sección del equipo
    const equipoItems = document.querySelectorAll('#equipo li');

    equipoItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(10px)';
        item.style.transition = `opacity 0.6s ease ${index * 0.2}s, transform 0.6s ease ${index * 0.2}s`;
    });

    window.addEventListener('scroll', function() {
        const equipoSection = document.querySelector('#equipo');
        if (equipoSection.getBoundingClientRect().top < window.innerHeight * 0.8) {
            equipoItems.forEach(item => {
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
            });
        }
    });

    // Smooth scrolling para los enlaces de navegación
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
});
