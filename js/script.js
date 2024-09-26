document.addEventListener('DOMContentLoaded', () => {
    const themeToggleButton = document.getElementById('theme-toggle');
    const iconSun = document.getElementById('icon-sun');
    const iconMoon = document.getElementById('icon-moon');

    // Funkcja do ustawiania motywu
    const setTheme = (theme) => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        if (theme === 'dark') {
            iconSun.style.display = 'none';
            iconMoon.style.display = 'block';
        } else {
            iconSun.style.display = 'block';
            iconMoon.style.display = 'none';
        }
    };
    
    // Sprawdź zapisany motyw z localStorage lub ustaw domyślny motyw
    const savedTheme = localStorage.getItem('theme');
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: light)').matches;

    // Ustaw motyw w zależności od zapisanych preferencji
    if (savedTheme) {
        setTheme(savedTheme);
    } else {
        setTheme(prefersDarkScheme ? 'dark' : 'light');
    }

    // Nasłuchuj zmian preferencji motywu w przeglądarce
    window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', (event) => {
        if (!localStorage.getItem('theme')) {
            setTheme(event.matches ? 'dark' : 'light');
        }
    });

    themeToggleButton.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
    });

    //Funkcja otwierania menu navigacji
    let menuBtn = document.querySelector ('#toggle__menu');
    let navbar = document.querySelector('.menu-list');
    function hamburgerMenu() {
      navbar.classList.toggle('active');  
    }
    menuBtn.onclick = () =>{
    navbar.classList.toggle('active');
    };
    
    window.onscroll = () =>{
    navbar.classList.remove('active');
    };
    
});

