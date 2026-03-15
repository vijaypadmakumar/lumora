document.addEventListener("DOMContentLoaded", () => {
    
    // Smooth entry for text elements
    const heroContent = document.querySelector('.hero-content');
    heroContent.style.opacity = '0';
    heroContent.style.transform = 'translateY(15px)';
    
    setTimeout(() => {
        heroContent.style.transition = 'all 0.9s cubic-bezier(0.16, 1, 0.3, 1)';
        heroContent.style.opacity = '1';
        heroContent.style.transform = 'translateY(0)';
    }, 200);


    // Syncing the lens glimmer effect with the CSS ping dot
    const scanBeam = document.querySelector('.scan-beam');
    
    const triggerScanGlow = () => {
        // Simple opacity pulse to mimic the lens "detecting" the ping
        scanBeam.animate([
            { opacity: 0, transform: 'translate(-50%, -50%) scale(1)' },
            { opacity: 0.6, transform: 'translate(-50%, -50%) scale(3)' },
            { opacity: 0, transform: 'translate(-50%, -50%) scale(1)' }
        ], {
            duration: 800,
            easing: 'ease-out'
        });
    };

    // The CSS animation is 4s long. The dot hits the middle at 50% (2s).
    // We trigger the glimmer just before the dot reaches the lens.
    setInterval(triggerScanGlow, 4000);
    setTimeout(() => {
        setInterval(triggerScanGlow, 4000);
    }, 1800);

    console.log("Lumora Teaser: Responsive Core Initialised.");
});