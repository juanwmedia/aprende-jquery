// Esperar que el DOM esté listo
$(document).ready(() => {
    function consultarAPI() {
        const deferred = $.Deferred();
        setTimeout(function () {

            // Promesa satisfecha
            /*var respuesta = [
                {titulo: 'Aprender jQuery'},
                {titulo: 'Aprender JavaScript'},
                {titulo: 'Hacer la compra'},
            ];

            deferred.resolve(respuesta);*/

            // Promesa rechazada
            deferred.reject(Error('No puedo conectar'));
        }, 2000);
        return deferred.promise();
    }

    consultarAPI()
        .then((respuesta) => console.log(respuesta))
        .fail((error) => console.error(error))
        .always(() => console.info('Request finalizado'));
});
