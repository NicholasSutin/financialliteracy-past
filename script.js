let isMenuOpen = false;
function openMobileNav() {
    const menu = document.querySelector('.hidden-menu');
    const transitionTime = 200; // 0.2s in milliseconds

    if (!isMenuOpen) { 
        menu.style.display = "block"; 
        setTimeout(() => {
            menu.style.transition = 'right 0.2s ease-in-out';
            menu.style.right = '0px';
        }, 10); // Slight delay to ensure display change takes effect
        isMenuOpen = true;
    } else {
        menu.style.transition = 'right 0.2s ease-in-out';
        menu.style.right = '-220px';

        setTimeout(() => {
            menu.style.display = "none";
        }, transitionTime); // Wait for the transition to finish
        isMenuOpen = false;
    }
}
