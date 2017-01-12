$(document).ready(function () {
    // Capturar hover
    $('a').hover(function () {
        // Hover IN
        // Guardar el atributo title
        var titulo = $(this).attr('title'),
            fondo = $(this).data('fondo'); // y el fondo...

        // Guardamos el título en atributo data- y eliminamos el título original
        $(this).data('titulo', titulo).removeAttr('title');

        // Añadir nuestro propio tooltip
        $('<p class="tooltip"></p>')
            .text(titulo)
            .css('background-color', fondo)
            .appendTo('body')
            .fadeIn('slow');
    }, function () {
        // Hover OUT
        // Reponer el título nativo
        $(this).attr('title', $(this).data('titulo'));

        // Eliminamos nuestro tooltip
        $('.tooltip').remove();
    }).mousemove(function (e) {
        // Capturar la posición X e Y del ratón sobre el elemento
        // que lanza nuestro tooltip
        var ratonX = e.pageX + 20,
            ratonY = e.pageY + 10;

        // Hacer que el tooltip se mueva junto con el puntero
        $('.tooltip').css({
            top: ratonY,
            left: ratonX
        });
    });
});