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
                $('#imgHeroe').append(`<img src="${data.url}" alt="100%" width="130%" class=" mt-3"></img>`);

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
                $('#nombre').append(`<p >Nombre: ${data.name}</p>`);
            }
        });
    }
    //las conexiones del super heroe con otros super heroes
    const conexiones=()=>{
        id = $('#idHeroe')[0].value;
        idHeroe = parseInt(id);
        $.ajax({
            type: "GET",
            url: `https://www.superheroapi.com/api.php/10159429364869539/${idHeroe}/connections`,
            dataType: "json",
            success: function (data) {
                $('#parientes').append(`<p >Parientes: ${data.relatives}</p>`);
            }
        });
    }
    const apariencia=()=>{
        id = $('#idHeroe')[0].value;
        idHeroe = parseInt(id);
        $.ajax({
            type: "GET",
            url: `https://www.superheroapi.com/api.php/10159429364869539/${idHeroe}/appearance`,
            dataType: "json",
            success: function (data) {
                $('#genero').append(`<p >Género: ${data.gender}</p>`);
                $('#raza').append(`<p >Raza: ${data.race}</p>`);
                $('#altura').append(`<p >Altura: ${data.height[1]}</p>`);
                $('#peso').append(`<p >Peso: ${data.height[1]}</p>`);
            }
        });
    }

    $('#btnBusqueda').click(function () {
        id = $('#idHeroe')[0].value;
        idHeroe = parseInt(id);
        let metrica1 = /^[0-9]/g;
        if (id.match(metrica1) >= 1 && id.match(metrica1) < 732) {
            $('#busqueda').hide();

            //la imagen del Heroe
            $('#imfoHeroe').append(`<p>Super Heroe Encontrado</p>`);
            //imagen del super heroe
            imgHeroe();
            //info del super heroe
            poderesHeroe();
            conexiones();
            apariencia();

        } else {
            alert('Tiene que ingresar un número, entre 1 y 731');

        }
    });


});