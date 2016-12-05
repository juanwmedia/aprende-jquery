// Esperar que el DOM esté listo
$(document).ready(function(){
//$('section.contenido p:first-of-type');
$('.contenido').find('p').eq(2).css('background-color', 'red');
});