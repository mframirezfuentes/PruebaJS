/* $('#resultados').hide(); */
$(document).ready(function () {


    //crear lafunción flecha de lo que sucede cuando se aprieta el botón buscar.

    const agregar = () => {
        /*  $('#busqueda').hide(); */
        
          document.getElementById('btnBusqueda').addEventListener('click', function () {
              $('#busqueda').hide();
          });
          document.getElementById('btnBusqueda').addEventListener('click', function () {
              $('#resultados').show();
          });

    }
    $('#btnBusqueda').click(function () {
        let id = $('#idPokemon')[0].value;
        let metrica1 = /^[0-9]/g;
        if (id.match(metrica1)) {

            //llamar a la función buscar pokemon.
            /*    buscarPokemon(); */
            alert('ingresado correctamente');
            agregar();


        } else {
            alert('Tiene que ingresar un número');

        }
    });


});