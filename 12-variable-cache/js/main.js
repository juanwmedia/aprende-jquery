// Esperar que el DOM esté listo
$(document).ready(function () {
/*    var $parrafo = $('p').last();

    // CSS
    $parrafo.css('color', 'goldenrod');

    // Atributo data
    $parrafo.data('color', 'amarillo');

    // Append
    var $enlace = $('<a href="http://www.wmedia.es" target="_blank">wmedia.es</a>');
    $parrafo.append($enlace);*/

    // Method chaining
    var $enlace = $('<a href="http://www.wmedia.es" target="_blank">wmedia.es</a>');
    $('p').last().css('color', 'goldenrod').data('color', 'amarillo').append($enlace);
});