// Esperar que el DOM esté listo
$(document).ready(function () {
    var $parrafos = $('.contenido').children('p');

    $('.lateral').children('img').on('click', function () {
        mostrarEnSecuencia($parrafos);
    });

    function mostrarEnSecuencia($coleccion, tiempo) {
        tiempo = tiempo || 1000;
        $coleccion.each(function (indice, elemento) {
            $(elemento).slideToggle(tiempo * (indice + 1));
        });
    }
});