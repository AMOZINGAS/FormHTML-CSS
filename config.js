document.addEventListener('DOMContentLoaded', (event) =>{
    const rangeInput = document.getElementById('miInputRange');
    const rangeLabel = document.getElementById('miSpanRange');

    function updateLabel() {
        const value = rangeInput.value;

        rangeLabel.innerHTML = `<strong>${value * 1}K</strong>`;
    }

    rangeInput.addEventListener('input', updateLabel);

    updateLabel();
});
