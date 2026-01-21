document.addEventListener('DOMContentLoaded', () => {
    
    // --- Mobile Menu ---
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if(menuBtn) {
        menuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            const icon = menuBtn.querySelector('i');
            if (navLinks.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }

    // --- Carousel Logic (Updated classes) ---
    const cards = document.querySelectorAll('.team-card-3d'); // Nome da classe atualizado
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    let currentIndex = 0;

    function renderCarousel() {
        const total = cards.length;
        cards.forEach((card, index) => {
            // Limpar todas as classes de posição
            card.classList.remove('active', 'prev', 'next', 'prev-2', 'next-2', 'hidden');
            
            // Loop math
            let distance = (index - currentIndex + total) % total;
            if (distance > total / 2) distance -= total;
            if (distance < -total / 2) distance += total;

            // Atribuir classe baseada na distância
            if (distance === 0) {
                card.classList.add('active');
            } else if (distance === -1) {
                card.classList.add('prev');
            } else if (distance === 1) {
                card.classList.add('next');
            } else if (distance === -2) {
                card.classList.add('prev-2');
            } else if (distance === 2) {
                card.classList.add('next-2');
            } else {
                card.classList.add('hidden');
            }
        });
    }

    if(cards.length > 0) {
        renderCarousel();
        if(nextBtn) nextBtn.addEventListener('click', () => { 
            currentIndex = (currentIndex + 1) % cards.length; 
            renderCarousel(); 
        });
        if(prevBtn) prevBtn.addEventListener('click', () => { 
            currentIndex = (currentIndex - 1 + cards.length) % cards.length; 
            renderCarousel(); 
        });
    }

    // --- Utils ---
    const loader = document.getElementById('loader');
    setTimeout(() => { if(loader) { loader.style.opacity = '0'; setTimeout(() => { loader.style.display = 'none'; }, 500); } }, 1500);

    const flashlight = document.getElementById('flashlight');
    document.addEventListener('mousemove', (e) => {
        if(flashlight) { flashlight.style.setProperty('--x', `${e.clientX}px`); flashlight.style.setProperty('--y', `${e.clientY}px`); }
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
        });
    }, { threshold: 0.1 });
    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
                navLinks.classList.remove('active');
                if(menuBtn) { menuBtn.querySelector('i').classList.remove('fa-times'); menuBtn.querySelector('i').classList.add('fa-bars'); }
            }
        });
    });
});