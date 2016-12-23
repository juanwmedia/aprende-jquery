// Esperar que el DOM esté listo
$(document).ready(function () {
    // Selector
    /*var $enlaces = $('.lateral').find('a').filter(':even');
     $enlaces.css('transform', 'scale(2)');*/

    // Función - test
    var $enlaceSnapchat = $('.lateral').find('a').filter(function (indice, elemento) {
        //console.log(elemento === this); // ES THIS
        return $(elemento).find('span').text() === 'Snapchat';
    });

    console.log($enlaceSnapchat.css('transform', 'rotate(45deg)'));
});