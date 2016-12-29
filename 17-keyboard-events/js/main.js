// Esperar que el DOM esté listo
$(document).ready(function () {
    var $input = $('#claim'),
        $h1 = $('.contenido').children('h1');

    $input.keyup(function (event) {
       $h1.text($input.val());
    });
});