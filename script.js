// Wait for the page to fully load first
window.onload = function() {
    // Start the fade out process after 3 seconds (3000ms)
    setTimeout(loader, 3000);
};

function loader() {
    document.querySelector('.loader-container').classList.add('fade-out');
}

function toggleMenu() {
    const navLinks = document.getElementById("nav-links");
    navLinks.classList.toggle("show")
}