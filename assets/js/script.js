$(document).ready(function () {

    $('#btnBusqueda').click(function () {
        let id = $('#idPokemon')[0].value;
        let metrica1 = /^[1-9]+$/;
        if (id.match(metrica1)) {
            alert('ingresado correctamente');
            //llamar a la función

        } else {
            alert('Tiene que ingresar un número');

        }
    });

    //crear lafunción


});