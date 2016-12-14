// Esperar que el DOM esté listo
$(document).ready(function () {
    var $enlace = $('<a href="#">Conocer más gatos negros!</a>');
    $('.contenido').find('p').after($enlace);
});