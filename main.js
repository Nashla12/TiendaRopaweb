// Manejar el envío del formulario
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('¡Gracias por tu mensaje! Te contactaremos pronto.');
    this.reset();
});

// Añadir un efecto de desplazamiento suave para los enlaces de navegación
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animación de fade-in para los elementos al hacer scroll
window.addEventListener('scroll', function() {
    const elements = document.querySelectorAll('.product-card, .trend-card');
    elements.forEach(el => {
        if (isElementInViewport(el)) {
            el.classList.add('fade-in');
        }
    });
});

function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}
