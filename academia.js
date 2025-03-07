document.addEventListener('DOMContentLoaded', function() {
    // Referencia a elementos DOM
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelector('.nav-links');
    const burger = document.querySelector('.burger');
    const scrollSections = document.querySelectorAll('.scroll-animation-section');
    const cursoCards = document.querySelectorAll('.curso-card');
    const playButtons = document.querySelectorAll('.play-button');

    // Comprobar si el navegador soporta Scroll-Driven Animations
    const supportsScrollDriven = 'animationTimeline' in document.documentElement.style ||
                               'scrollTimeline' in window;
    
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
        
        // Aplicar animaciones de scroll si el navegador no soporta scroll-driven animations
        if (!supportsScrollDriven) {
            animateOnScroll();
        }
    });

    // Simulación de reproducción de vídeo
    playButtons.forEach(button => {
        button.addEventListener('click', function() {
            const videoContainer = this.parentElement;
            const placeholder = videoContainer.querySelector('.placeholder-video');
            
            // Simular carga de video con un efecto visual
            this.innerHTML = '⏳';
            this.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
            
            setTimeout(() => {
                // Simular reproducción (en producción, aquí se cargaría el video real)
                this.style.display = 'none';
                placeholder.style.opacity = '0.8';
                
                // Crear un overlay con mensaje
                const overlay = document.createElement('div');
                overlay.style.position = 'absolute';
                overlay.style.top = '0';
                overlay.style.left = '0';
                overlay.style.width = '100%';
                overlay.style.height = '100%';
                overlay.style.display = 'flex';
                overlay.style.alignItems = 'center';
                overlay.style.justifyContent = 'center';
                overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
                overlay.style.color = 'white';
                overlay.style.fontSize = '1rem';
                overlay.style.textAlign = 'center';
                overlay.innerHTML = 'Video reproduciéndose...<br>Simulación para demostración';
                
                videoContainer.appendChild(overlay);
                
                // Permitir cerrar la simulación con clic
                overlay.addEventListener('click', () => {
                    overlay.remove();
                    placeholder.style.opacity = '1';
                    this.style.display = 'flex';
                    this.innerHTML = '▶';
                    this.style.backgroundColor = 'rgba(138, 43, 226, 0.8)';
                });
            }, 1000);
        });
    });

    // Función para animar elementos al hacer scroll
   function animateOnScroll() {
    scrollSections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        console.log("Section:", section.id, "Position:", sectionTop); // <-- AGREGADO

        if (sectionTop < windowHeight * 0.75) {
            section.classList.add('show');
            console.log("Sección activada:", section.id); // <-- AGREGADO
        }
    });
}
        
        cursoCards.forEach((card, index) => {
            const cardTop = card.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (cardTop < windowHeight * 0.85) {
                // Agregar retraso progresivo según el índice
                setTimeout(() => {
                    card.classList.add('show');
                }, 200 * index);
            }
        });
    }

    // Iniciar animaciones en carga de página
    if (!supportsScrollDriven) {
        animateOnScroll();
    }

    // Implementar efectos de paralaje en la sección hero
    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;
        
        if (scrollPosition < window.innerHeight) {
            const heroImage = document.querySelector('.hero-image');
            if (heroImage) {
                heroImage.style.transform = `translateY(${scrollPosition * 0.1}px)`;
            }
            
            const heroContent = document.querySelector('.hero-content');
            if (heroContent) {
                heroContent.style.transform = `translateY(${scrollPosition * 0.05}px)`;
            }
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

    // Animaciones para galerías de imágenes
    const galerias = document.querySelectorAll('.galeria');
    
    galerias.forEach(galeria => {
        const images = galeria.querySelectorAll('img');
        
        // Animación sutil al pasar el cursor
        images.forEach(img => {
            img.addEventListener('mouseenter', function() {
                images.forEach(otherImg => {
                    if (otherImg !== img) {
                        otherImg.style.opacity = '0.6';
                        otherImg.style.transform = 'scale(0.95)';
                    }
                });
            });
            
            img.addEventListener('mouseleave', function() {
                images.forEach(otherImg => {
                    otherImg.style.opacity = '1';
                    otherImg.style.transform = 'scale(1)';
                });
            });
        });
    });

    // Validación básica del formulario
    const contactForm = document.querySelector('#contacto form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simular envío de formulario
            const submitBtn = this.querySelector('.submit-btn');
            const originalText = submitBtn.textContent;
            
            submitBtn.textContent = 'Enviando...';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                // Mostrar mensaje de éxito
                const formGroups = this.querySelectorAll('.form-group');
                formGroups.forEach(group => {
                    group.style.display = 'none';
                });
                
                submitBtn.style.display = 'none';
                
                const successMessage = document.createElement('div');
                successMessage.classList.add('success-message');
                successMessage.innerHTML = ` 
                    <div style="text-align: center; padding: 2rem;">
                        <div style="font-size: 3rem; margin-bottom: 1rem;">✅</div>
                        <h3 style="color: var(--color-morado); margin-bottom: 1rem;">¡Mensaje Enviado!</h3>
                        <p>Gracias por contactarnos. Nos pondremos en contacto contigo lo antes posible.</p>
                        <button id="reset-form" style="margin-top: 1.5rem; padding: 0.5rem 1.5rem; background-color: var(--color-celeste); color: white; border: none; border-radius: 5px; cursor: pointer;">Enviar otro mensaje</button>
                    </div>
                `;
                
                this.appendChild(successMessage);
                
                // Restaurar formulario al hacer clic en "Enviar otro mensaje"
                document.getElementById('reset-form').addEventListener('click', () => {
                    successMessage.remove();
                    formGroups.forEach(group => {
                        group.style.display = 'block';
                        const input = group.querySelector('input, textarea');
                        if (input) input.value = '';
                    });
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;
                    submitBtn.style.display = 'inline-block';
                });
            }, 1500);
        });
    }
});
