document.addEventListener("DOMContentLoaded", function() {
    const enginesContainer = document.getElementById('engines-container');
    const engineSlots = document.querySelectorAll('.engine-slot');
    let moving = true;
    let position = 0;
    let direction = 1;

    function moveContainer() {
        if (moving) {
            const containerWidth = enginesContainer.offsetWidth;
            const parentWidth = enginesContainer.parentElement.offsetWidth;
            const speed = 0.25;

            if (position + containerWidth > parentWidth || position < 0) {
                direction *= -1;
            }

            position += direction * speed;
            enginesContainer.style.transform = `translateX(${position}px)`;
        }

        requestAnimationFrame(moveContainer);
    }

    engineSlots.forEach(slot => {
        slot.addEventListener('mouseenter', () => moving = false);
        slot.addEventListener('mouseleave', () => moving = true);
    });

    // Verificar la media query inicial
    function checkMediaQuery() {
        if (window.matchMedia("(min-width: 1024px)").matches) {
            requestAnimationFrame(moveContainer);
        }
    }

    checkMediaQuery();

    // Escuchar cambios en el tamaño de la ventana
    window.addEventListener('resize', checkMediaQuery);
});

