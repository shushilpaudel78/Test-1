const toggleButton = document.getElementById('toggleButton');
const nav = document.getElementById('myNav');

toggleButton.addEventListener('click', () => {
    if (nav.style.display === 'none' || nav.style.display === '') {
        nav.style.display = 'block';  // Show the nav
    } else {
        nav.style.display = 'none';  // Hide the nav
    }
});