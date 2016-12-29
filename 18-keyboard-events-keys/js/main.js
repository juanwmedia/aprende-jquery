// Esperar que el DOM esté listo
$(document).ready(function () {
    var $input = $('#claim'),
        $h1 = $('.contenido').children('h1');

    $input.keyup(function (event) {
        // https://www.cambiaresearch.com/articles/15/javascript-char-codes-key-codes
        var codigo = event.which;
        if (codigo === 13) {
            $h1.text($input.val());
        }
    });
});