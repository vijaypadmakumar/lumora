document.addEventListener("DOMContentLoaded", () => {
    console.log("Lumora Teaser Page Active.");
    
    // Add a simple entrance animation delay for the visual
    const visual = document.querySelector('.hero-visual');
    visual.style.opacity = '0';
    visual.style.transition = 'opacity 1.5s ease-in';
    
    setTimeout(() => {
        visual.style.opacity = '1';
    }, 500);
});