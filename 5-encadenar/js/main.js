// Esperar que el DOM esté listo
$(document).ready(function () {
    $('.contenido').find('p').last().prev().next().css('background-color', 'red');
});