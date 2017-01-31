// Esperar que el DOM esté listo
$(document).ready(() => {
    function consultarTareas() {
        const deferred = $.Deferred();
        setTimeout(() => {
            let respuesta = [
                {titulo: 'Aprender jQuery'},
                {titulo: 'Aprender JavaScript'},
                {titulo: 'Hacer la compra'},
            ];
            deferred.resolve(respuesta);
        }, 2000);
        return deferred.promise();
    }

    function consultarSaldo() {
        const deferred = $.Deferred();
        setTimeout(() => deferred.resolve(3.400), 5000);
        return deferred.promise();
    }

    function consultarTrafico() {
        const deferred = $.Deferred();
        setTimeout(() => deferred.reject(Error('Fluído')), 1500);
        return deferred.promise();
    }

    //consultarTareas()
    $.when(consultarTareas(), consultarSaldo(), consultarTrafico())
        .then((tareas, saldo, trafico) => console.log(tareas, saldo, trafico))
        .fail((error) => console.error(error))
        .always(() => console.info('Requests finalizados'));
});
