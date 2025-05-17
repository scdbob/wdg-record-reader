// Create and show a banner
function showBanner() {
    const banner = document.createElement('div');
    banner.id = 'banner';
    banner.innerHTML = 'Welcome to our website!';
    document.body.insertBefore(banner, document.body.firstChild);
}

// Call the function when the page loads
window.onload = showBanner; 