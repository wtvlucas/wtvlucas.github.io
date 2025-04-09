
    function toggleMenu() {
        const navLinks = document.querySelector('.nav-links');
        const menuIcon = document.querySelector('.menu-icon');

        navLinks.classList.toggle('active');
        if (navLinks.classList.contains('active')) {
            menuIcon.textContent = 'X';
        } else {
            menuIcon.textContent = '☰'; 
        }
    }

