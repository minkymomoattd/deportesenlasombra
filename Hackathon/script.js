document.addEventListener('DOMContentLoaded', function() {
    const comprarButtons = document.querySelectorAll('.comprar');
    comprarButtons.forEach(button => {
        button.addEventListener('click', function() {
            window.location.href = 'formulario de compra.html';
        });
    });
});
