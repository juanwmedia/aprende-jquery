// Esperar que el DOM esté listo
$(document).ready(function () {
    // Petición esencial con Ajax
/*    $.ajax('social.html', {
        beforeSend: function () {
            // Mostrar loading spinner
        },
        success: function (respuesta, status, request) {
            //console.log(arguments);
            $('.lateral').append($(respuesta));
        },
        error: function (request, tipoError, mensaje) {
            console.error(arguments);
        },
        complete: function (request, status) {
            console.info(arguments);
        },
        timeout: 1,
    });*/

    // jQuery 3.0> = Promise API
    $.ajax('social.html')
        // success()
        .done(function (respuesta) {
            $('.lateral').append($(respuesta));
        })
        // error()
        .fail(function (request, tipoError, mensaje) {
            console.error(arguments);
        })
        // complete()
        .always(function (request, status) {
            console.log(arguments)
        });
});
