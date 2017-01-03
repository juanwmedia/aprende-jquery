// Esperar que el DOM esté listo
$(document).ready(function () {
    var $enlaces = $('a');

    // Getter
    console.log($enlaces.css('font-family'));

    // Getter múltiple
    console.log($('.lateral').css([
        'font-size',
        'color',
        'margin'
    ]));

    // Setter
    $('p').css('color', 'goldenrod');

    // Setter múltiple
    $enlaces.css({
        'color': 'pink',
        'font-size': '40px',
        'margin': '100px'
    });
});