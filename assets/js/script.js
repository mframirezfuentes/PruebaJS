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
                $('#imgHero').append(`<img src="${data.url}" alt="100%" width="110%"></img>`);

            }
        });
    }

    //las conexiones del super heroe con otros super heroes

    const apariencia = () => {
        id = $('#idHeroe')[0].value;
        idHeroe = parseInt(id);
        $.ajax({
            type: "GET",
            url: `https://www.superheroapi.com/api.php/10159429364869539/${idHeroe}/appearance`,
            dataType: "json",
            success: function (data) {
                $('#infoHeroe').append(`<div></div><p >Nombre: ${data.name}</p></div>`);
                $('#infoHeroe').append(`<div></div><p >Género: ${data.gender}</p></div>`);
                $('#infoHeroe').append(`<div><p>Raza: ${data.race}</p></div>`);
                $('#infoHeroe').append(`<div><p >Altura: ${data.height[1]}</p></div>`);
                $('#infoHeroe').append(`<div><p>Peso: ${data.weight[1]}</p></div>`);
            }
        });
    }
    const conexiones = () => {
        id = $('#idHeroe')[0].value;
        idHeroe = parseInt(id);
        $.ajax({
            type: "GET",
            url: `https://www.superheroapi.com/api.php/10159429364869539/${idHeroe}/connections`,
            dataType: "json",
            success: function (data) {
                $('#infoHeroe').append(`<p >Parientes: ${data.relatives}</p>`);
            }
        });
    }

    const grafico = () => {
        id = $('#idHeroe')[0].value;
        idHeroe = parseInt(id);
        $.ajax({
            type: "GET",
            url: `https://www.superheroapi.com/api.php/10159429364869539/${idHeroe}/powerstats`,
            dataType: "json",
            success: function (data) {

                var chart = new CanvasJS.Chart("chartContainer", {
                    theme: "light2",
                    animationEnabled: true,
                    title: {
                        text: `Estadisticas de poder de ${data.name}`
                    },

                    data: [{
                        type: "pie",
                        indexLabelFontSize: 18,
                        radius: 80,
                        indexLabel: "{label} - {y}",
                        /*  yValueFormatString: "###0.0\"%\"", */
                        click: explodePie,
                        dataPoints: [{
                                y: `${data.intelligence}`,
                                label: "Inteligencia"
                            },
                            {
                                y: `${data.speed}`,
                                label: "velocidad"
                            },
                            {
                                y: `${data.durability}`,
                                label: "durabilidad"
                            },
                            {
                                y: `${data.combat}`,
                                label: "combate"
                            },
                            {
                                y: `${data.power}`,
                                label: "poder"
                            },
                            {
                                y: `${data.strength}`,
                                label: "fuerza"
                            }
                        ]
                    }]
                });
                chart.render();

                function explodePie(e) {
                    for (var i = 0; i < e.dataSeries.dataPoints.length; i++) {
                        if (i !== e.dataPointIndex)
                            e.dataSeries.dataPoints[i].exploded = false;
                    };
                };

            }
        });
    };

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
              apariencia();
             conexiones();
              $('#estadisticaHeore').append(`<div id="chartContainer" style="height: 370px; width: 100%;"></div>`).append(grafico());
            
        } else {
            alert('Tiene que ingresar un número, entre 1 y 731');

        }
    });


});