// Esperar que el DOM esté listo
$(document).ready(function(){
    // Descendientes directos
    $('aside > img').fadeOut('slow');

    // Búsqueda de elementos
    $('a span').css('color', 'red');

    // Selectores múltiples
    $('a, span, p').slideToggle();

    // Pseudo clases
    $('p:odd').css({
        'font-weight': 'bold',
        'color': 'goldenrod',
    });
});