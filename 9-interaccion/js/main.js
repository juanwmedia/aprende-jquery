// Esperar que el DOM esté listo
$(document).ready(function () {
    // Escuchar un <a>
    $('.lateral').find('a').last().on('click', function() {
        $('.contenido').children('p').css('color', 'red');
    });

    // Escuchar los <p>
    $('.contenido').children('p').on('click', function(evento){
        evento.preventDefault();
        console.log(this);
    });
});