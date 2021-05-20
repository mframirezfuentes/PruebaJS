/* $('#resultados').hide(); */
$(document).ready(function () {
    let id = $('#idHeroe')[0].value;
    let idHeroe = parseInt(id);

    //Se va a buscar la imagen del super heroe
    const imgHeroe = (id) => {
        id = $('#idHeroe')[0].value;
        idHeroe = parseInt(id);
        $.ajax({
            type: "GET",
            url: `https://www.superheroapi.com/api.php/10159429364869539/${idHeroe}/image`,
            dataType: "json",
            success: function (data) {
                $('#imgHeroe').append(`<p>${data.url}</p>`);

            }
        });
    }
    const poderesHeroe = (id) => {
        id = $('#idHeroe')[0].value;
        idHeroe = parseInt(id);
        $.ajax({
            type: "GET",
            url: `https://www.superheroapi.com/api.php/10159429364869539/${idHeroe}/powerstats`,
            dataType: "json",
            success: function (data) {
                $('#infoHeroe').append(`<p >Nombre: ${data.name}</p>`);


            }
        });
    }

    $('#btnBusqueda').click(function () {
        id = $('#idHeroe')[0].value;
        idHeroe = parseInt(id);
        let metrica1 = /^[0-9]/g;
        if (id.match(metrica1) >= 1 && id.match(metrica1) < 732) {
            /*  let idHeroe = parseInt(id); */

            //la imagen del Heroe
            $('#infoHeroe').append(`<p>Super Heroe Encontrado</p>`);
            //imagen del super heroe
            imgHeroe();
            //info del super heroe
            poderesHeroe();

        } else {
            alert('Tiene que ingresar un número, entre 1 y 731');

        }
    });


});