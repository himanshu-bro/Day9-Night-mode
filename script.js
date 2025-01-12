// Get the toggle checkbox
const toggleCheckbox = document.getElementById('dark-mode-toggle');

// Check if the user has a saved preference in localStorage
const currentMode = localStorage.getItem('darkMode');
if (currentMode === 'enabled') {
    document.body.classList.add('dark-mode');
    toggleCheckbox.checked = true;
}

// Toggle Dark Mode on checkbox change
toggleCheckbox.addEventListener('change', () => {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'enabled');
    } else {
        localStorage.setItem('darkMode', 'disabled');
    }
});

