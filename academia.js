document.addEventListener('DOMContentLoaded', function() {
    // GSAP Animations
    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray(".curso-card").forEach((card) => {
        gsap.fromTo(
            card,
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: card,
                    start: "top 80%",
                    toggleActions: "play none none reverse",
                },
            }
        );
    });

    // Navbar Scroll Effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile Menu Toggle
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');
    burger.addEventListener('click', () => {
        navLinks.classList.toggle('open');
        burger.classList.toggle('toggle');
    });

    // Close menu on link click
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('open');
            burger.classList.remove('toggle');
        });
    });

    // WhatsApp Button Functionality
    document.querySelectorAll(".whatsapp-button").forEach(button => {
        button.addEventListener("click", function () {
            const planName = this.getAttribute("data-plan");
            const message = `Quiero este plan ${planName} como puedo inscribirme?`;
            const whatsappURL = `https://wa.me/59172645173?text=${encodeURIComponent(message)}`;
            window.open(whatsappURL, "_blank");
        });
    });

    // Smooth Scrolling for Navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: "smooth",
                });
            }
        });
    });

    // Image Hover Effect in Gallery
    const galleries = document.querySelectorAll(".galeria img");
    galleries.forEach(img => {
        img.addEventListener("mouseenter", () => {
            img.style.transform = "scale(1.05)";
        });
        img.addEventListener("mouseleave", () => {
            img.style.transform = "scale(1)";
        });
    });
});
