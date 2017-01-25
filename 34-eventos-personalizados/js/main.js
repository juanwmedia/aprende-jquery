// Esperar que el DOM esté listo
$(document).ready(() => {
    // Cargamos el snippet de navegación lateral
    $.get('social.html')
        .done((respuesta) => {
            $('.lateral').append($(respuesta));
        });

    const $candidatos = $('.adoptar').children('input');

    // Adoptar
    $candidatos
        .on('candidatos', function (evt) {
            evt.preventDefault();

            // Obteniendo los datos de los candidatos a adopción
            $.getJSON('http://dev.wmedia.es/do/jquery/adopcion.php')
                .then(mostrarCandidatos)
                .fail(error => console.error(Error(error)))
                .always(() => console.info('Request finalizado'));

            // Componer las fichas de los candidatos
            // e insertarlas en DOM
            function mostrarCandidatos(canditatos) {
                $.each(canditatos, function (indice, candidato) {
                    $(`<div>
                    <h4>${candidato.nombre} <i>(${candidato.edad})</i></h4>
                    <h5>${candidato.info}</h5>
                </div>`)
                        .css('background-image', `url(${candidato.imagen})`)
                        .appendTo($('.candidatos'));
                });
            }
        })
        .on('click.mensaje', function (evt) {
            alert('Muchas gracias por tu interes en ayudar a los gatos negros :)');
            $candidatos.trigger('candidatos');
            $candidatos.off('click.mensaje');
            $candidatos.off('candidatos');
        });
});
