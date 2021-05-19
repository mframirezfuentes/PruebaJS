$(document).ready(function () {

    $('#btnBusqueda').click(function () {
        let id = $('#idPokemon').value;
        let metrica1 = /^[1-9]/ + 3;

        if (metrica1.test(id)) {

        } else {
            alert('Tiene que ingresar un número');
            $('p').text('Tiene que ingresar un numero');
        }
    })


});