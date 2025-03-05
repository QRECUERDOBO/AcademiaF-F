document.addEventListener('DOMContentLoaded', function() {
    // Menú móvil
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');
    
    burger.addEventListener('click', () => {
        navLinks.classList.toggle('open');
    });

    // GSAP Animaciones
    gsap.registerPlugin(ScrollTrigger);
    gsap.utils.toArray(".curso-card").forEach((card) => {
        gsap.fromTo(card, { opacity: 0, y: 50 }, {
            opacity: 1, y: 0, duration: 1,
            scrollTrigger: { trigger: card, start: "top 80%", toggleActions: "play none none reverse" }
        });
    });

    // Botón de WhatsApp dinámico
    document.querySelectorAll(".whatsapp-button").forEach(button => {
        button.addEventListener("click", function () {
            const planName = this.getAttribute("data-plan");
            const message = `Quiero este plan ${planName} como puedo inscribirme?`;
            const whatsappURL = `https://wa.me/59172645173?text=${encodeURIComponent(message)}`;
            window.open(whatsappURL, "_blank");
        });
    });
});
