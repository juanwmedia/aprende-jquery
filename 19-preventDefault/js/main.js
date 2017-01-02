// Esperar que el DOM esté listo
$(document).ready(function () {
    // Con formularios (recargar la página)
    $('form').on('submit', function (evt) {
        evt.preventDefault();
        console.log('submit!');
    });

    // Con hiperenlaces
    $('a').click(function (evt) {
        evt.preventDefault();
        console.log('click');
    });
});