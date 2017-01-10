$(document).ready(function () {
    // Buscamos los elementos a guardar/seleccionar
    var $lis = $('li'),
        $imagenes = $lis.find('img'),
        activo = 0,
        cantidad = $imagenes.length;

    // Ocultamos todas las imágenes
    $lis.hide();

    // Eliminar las imágenes como elemento/tag y añadirlas como fondo de su parent (li)
    $imagenes.each(function (index, imagen) {
        $lis.eq(index).css({
            'background-image': 'url(' + $(imagen).attr('src') + ')',
            'background-size': 'cover',
            'background-position': 'center center',
            'position': 'absolute',
        });

        $(imagen).remove();
    });

    // Mostrar la primera imagen
    $lis.eq(activo).fadeIn();

    // Event listeners
    $('#derecha').click(function (evt) {
        evt.preventDefault();
        activo += 1;
        if (activo > cantidad - 1) {
            activo = 0;
        }
        mostrarImagen();
    });

    $('#izquierda').click(function (evt) {
        evt.preventDefault();
        activo -= 1;
        if (activo < 0) {
            activo = cantidad - 1;
        }
        mostrarImagen();
    });

    function mostrarImagen() {
        $lis.hide().eq(activo).fadeIn();
    }
});