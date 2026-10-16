const themeToggleBtn = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');
const body = document.body;

themeToggleBtn.addEventListener('click', toggleDarkMode);

function toggleDarkMode() {
    body.classList.toggle('dark-mode');
    updateIcon(body.classList.contains('dark-mode'));
}

function updateIcon(isDarkMode) {
    if (isDarkMode) {
        themeIcon.textContent = '☀️';
    } else {
        themeIcon.textContent = '🌙';
    }
}
