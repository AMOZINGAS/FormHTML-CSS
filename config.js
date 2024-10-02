document.addEventListener('DOMContentLoaded', (event) =>{

    const miInputRange = document.getElementById('miInputRange');
    const miSpanRange = document.getElementById('miSpanRange');

    function updateLabel() {

        const value = miInputRange.value;

        miSpanRange.innerHTML = `<strong>${value * 1}K</strong>`;
    }

    miInputRange.addEventListener('input', updateLabel);

    updateLabel();
    
});
