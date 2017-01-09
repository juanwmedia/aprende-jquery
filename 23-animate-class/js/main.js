// Esperar que el DOM esté listo
$(document).ready(function () {
    var $main = $('main');
    $main.addClass('animated bounceIn');

    var timeout = setTimeout(function () {
        $main.addClass('rotateOut');
        clearTimeout(timeout);
    }, 3000);
});