// Esperar que el DOM esté listo
$(document).ready(() => {
    // Cargamos el snippet de navegación lateral
  $.get('social.html')
        .done((respuesta) => {
          $('.lateral').append($(respuesta));
        });
});
