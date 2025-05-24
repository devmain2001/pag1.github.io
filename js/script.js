document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu');

    menuToggle.addEventListener('click', () => {
        menu.classList.toggle('active');
    });
});

// Selecciona todos los botones "Ver más"
const verMasButtons = document.querySelectorAll('.ver-mas');

// Itera sobre cada botón y añade un evento de clic
verMasButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Encuentra el parágrafo asociado al botón
        const descripcion = button.previousElementSibling;

        // Verifica si el texto está oculto
        if (descripcion.style.display === 'none' || descripcion.style.display === '') {
            // Muestra el texto adicional
            descripcion.style.display = 'block';
            button.textContent = 'Ocultar'; // Cambia el texto del botón a "Ocultar"
        } else {
            // Oculta el texto adicional
            descripcion.style.display = 'none';
            button.textContent = 'Ver más'; // Cambia el texto del botón a "Ver más"
        }
    });
});