// Esperar que el DOM esté listo
$(document).ready(function () {
    // Cargamos el snippet de navegación lateral
    $.get('social.html')
        .done(function (respuesta) {
            $('.lateral').append($(respuesta));
        });
});
