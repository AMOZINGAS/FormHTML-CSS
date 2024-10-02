document.addEventListener('DOMContentLoaded', (event) =>{
    const rangeInput = document.getElementById('miInputRange');
    const rangeLabel = document.getElementById('miSpanRange');

    // Función para actualizar el valor del label
    function updateLabel() {
        // Obtén el valor del input range
        const value = rangeInput.value;

        // Actualiza el label con el valor formateado
        // Supongamos que el rango representa miles, así que lo multiplicamos por 1000
        rangeLabel.innerHTML = `<strong>${value * 1}K</strong>`;
    }

    // Escuchar el evento input del input de rango
    rangeInput.addEventListener('input', updateLabel);

    // Llamar a la función al cargar la página para establecer el valor inicial
    updateLabel();
});
