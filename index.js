/* sets animation movement for cursor et hover element */
document.addEventListener('DOMContentLoaded', () => {
    const hoverElements = document.querySelectorAll('.navbar-brand, .navbar-menu a, .navbar-cta, .cta-button');

    hoverElements.forEach(elem => {
        elem.addEventListener('mousemove', e => {
            const rect = elem.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top -rect.height / 2;

            elem.style.setProperty('--mouse-x', `${x}px`);
            elem.style.setProperty('--mouse-y', `${y}px`);
        });

        elem.addEventListener('mouseleave', () => {
            elem.style.setProperty('--mouse-x', '0');
            elem.style.setProperty('--mouse-y', '0');
        });
    });
});