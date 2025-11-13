const toggleButton = document.getElementById('theme-toggle');

function setTheme(theme) {
    if (theme === 'dark') {
        document.body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark');
        toggleButton.textContent = '☀️';
    } else if (theme === 'light') {
        document.body.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light');
        toggleButton.textContent = '🌙';
    } else {
        document.body.classList.remove('dark-mode');
        localStorage.removeItem('theme');
    }
}

const savedTheme = localStorage.getItem('theme');

if (savedTheme) {
    setTheme(savedTheme);
} else {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme(prefersDark ? 'dark' : 'light');
}

toggleButton.addEventListener('click', () => {
    if (document.body.classList.contains('dark-mode')) {
        setTheme('light');
    } else {
        setTheme('dark');
    }
});

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    if (!localStorage.getItem('theme')) {
        setTheme(e.matches ? 'dark' : 'light');
    }
});
