// Esperar que el DOM esté listo
$(document).ready(function () {
    var $enlaces = $('a');

    $('.lateral').children('img').on('click', function () {

        /*if ($enlaces.hasClass('dopodcast')) {
            // Si la clase está aplicada, eliminar
            $enlaces.removeClass('dopodcast');
        } else {
            // Si no está aplicada, aplicar
            $enlaces.addClass('dopodcast');
        }*/

        $enlaces.toggleClass('dopodcast');
    });
});