document.addEventListener('DOMContentLoaded', function() {
    // Referencias a elementos DOM
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelector('.nav-links');
    const burger = document.querySelector('.burger');
    const scrollSections = document.querySelectorAll('.scroll-animation-section, #nosotros, #fundadores, #equipo, #cursos');
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

// Animación de fade-in progresivo para la sección de fundadores
const fundadoresItems = document.querySelectorAll('#fundadores .fundador');

fundadoresItems.forEach((item, index) => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(15px)';
    item.style.transition = `opacity 0.7s ease ${index * 0.2}s, transform 0.7s ease ${index * 0.2}s`;
});

window.addEventListener('scroll', function() {
    const fundadoresSection = document.querySelector('#fundadores');
    if (fundadoresSection.getBoundingClientRect().top < window.innerHeight * 0.8) {
        fundadoresItems.forEach(item => {
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        });
    }
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

    // Animación de imágenes en la galería del equipo
const galeriaItems = document.querySelectorAll('.galeria-equipo img');

galeriaItems.forEach((img, index) => {
    img.style.opacity = '0';
    img.style.transform = 'translateY(15px)';
    img.style.transition = `opacity 0.7s ease ${index * 0.2}s, transform 0.7s ease ${index * 0.2}s`;
});

window.addEventListener('scroll', function() {
    const galeriaSection = document.querySelector('#galeria-equipo');
    if (galeriaSection && galeriaSection.getBoundingClientRect().top < window.innerHeight * 0.8) {
        galeriaItems.forEach(img => {
            img.style.opacity = '1';
            img.style.transform = 'translateY(0)';
        });
    }
});

    document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".galeria-container").forEach(galeria => {
        let clone = galeria.cloneNode(true); // Clona las imágenes para que el efecto parezca infinito
        galeria.parentElement.appendChild(clone);
    });
});



    // Smooth scrolling para los enlaces de navegación
   document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
  });
});
