// main.js
document.addEventListener('DOMContentLoaded', () => {
    console.log('El DOM ha sido cargado');

    document.querySelector('.mis-productos').addEventListener('click', function(event) {
        if (event.target.classList.contains('boton-borrar')) {
            const item = event.target.closest('.productosItem');
            item.classList.add('fade-out');
            item.addEventListener('transitionend', function() {
                item.remove();
            });
        }
    });
});
