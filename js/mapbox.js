if (!('remove' in Element.prototype)) {
    Element.prototype.remove = function () {
        if (this.parentNode) {
            this.parentNode.removeChild(this);
        }
    };
}

mapboxgl.accessToken = 'pk.eyJ1IjoidXJpZWxyZXkiLCJhIjoiY2syMTExb29mMWVzejNkbXVxNmtqbm8xNyJ9.ql695J-qWXltHllEvu5UxQ';

//Se crea la variable bounds para establecer los limites del mapa (De acuerdo a coordenadas)
var bounds = [
    [-98.77942801, 20.07987529], // Southwest coordinates
    [-98.76998292, 20.08793844]  // Northeast coordinates
];
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/outdoors-v11',
    center: [-98.77485752, 20.08362377],
    zoom: 17.2,
    minZoom: 16.5,
    maxZoom: 19,
    maxBounds: bounds,
    pitch: 60,
    bearing: -25, // bearing in degrees
    antialias: true
});
// Esto Funciona Para los estilos del Mapa ** Pero aún tiene conflictos con el demás código **
/*var layerList = document.getElementById('menu');
var inputs = layerList.getElementsByTagName('input');

function switchLayer(layer) {
    var layerId = layer.target.id;
    map.setStyle('mapbox://styles/mapbox/' + layerId);
}

for (var i = 0; i < inputs.length; i++) {
    inputs[i].onclick = switchLayer;
}*///Aquí termina el bloque del código de los estilos del mapa

//Se crean los arreglos para la informacion de la localizacion de los edificios
var edificios = {
    "type": "FeatureCollection",
    "features": [
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -98.77567559480669,
                    20.083215676040588
                ]
            },
            "properties": {
                "Edificio": "E - Depto. Ingeniería Industrial",
                "Nombre": "Industrial",
                "tipo": "Departamentos"
            }
        }, {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -98.77432376146318,
                    20.083230790741766
                ]
            },
            "properties": {
                "Edificio": "K - Depto. Ciencias Básicas",
                "Nombre": "Ciencias Básicas",
                "tipo": "Departamentos"
            }
        }, {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -98.77494603395463,
                    20.0827521578299
                ]
            },
            "properties": {
                "Edificio": "M - Depto. Metal Mecánica",
                "Nombre": "Depto Metal Mecánica",
                "tipo": "Departamentos"
            }
        }, {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -98.77532690763475,
                    20.082933534684297
                ]
            },
            "properties": {
                "Edificio": "N - Depto. Ingeniería Química",
                "Nombre": "Química",
                "tipo": "Departamentos"
            }
        }, {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -98.7757828831673,
                    20.083810186521287
                ]
            },
            "properties": {
                "Edificio": "Y - Depto. Sistemas y Computación",
                "Nombre": "Ingeniería en Sistemas Computacionales e Ingeniería en Telecomunicaciones",
                "tipo": "Departamentos"
            }
        }, {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -98.77422452,
                    20.0838253
                ]
            },
            "properties": {
                "Edificio": "Z - Depto. Económico Administrativo",
                "Nombre": "Economico Administrativo",
                "tipo": "Departamentos"
            }
        }, {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -98.77599745988847,
                    20.083482702213473
                ]
            },
            "properties": {
                "Edificio": "Depto. Mantenimiento",
                "Nombre": "Mantenimiento",
                "tipo": "Departamentos"
            }
        }, {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -98.77472609281541,
                    20.081910768009703
                ]
            },
            "properties": {
                "Edificio": "Depto. Ingeniería Eléctrica y Electrónica",
                "Nombre": "Ingeniería Eléctrica",
                "tipo": "Departamentos"
            }
        }, {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -98.77602964639665,
                    20.083200561337947
                ]
            },
            "properties": {
                "Edificio": "Depto. Ciencias de la Tierra",
                "Nombre": "Arquitectura",
                "tipo": "Departamentos"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -98.7754610180855,
                    20.084167899367763
                ]
            },
            "properties": {
                "Edificio": "Depto. Extraescolares",
                "Nombre": "Actividades Extraescolares",
                "tipo": "Departamentos"
            }
        }, {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -98.77621203660966,
                    20.082948649412693
                ]
            },
            "properties": {
                "Edificio": "Taller de Construcción",
                "Nombre": "Construcción",
                "tipo": "Departamentos"
            }
        }, {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -98.77462149,
                    20.0825204
                ]
            },
            "properties": {
                "Edificio": "Aula Institutos",
                "Nombre": "Teatro",
                "tipo": "Departamentos"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -98.77550393342973,
                    20.08434423638596
                ]
            },
            "properties": {
                "Edificio": "Salón de Usos Múltiples",
                "Nombre": "Usos Múltiples",
                "tipo": "Departamentos"
            }
        }, {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -98.77388387918474,
                    20.083397052358528
                ]
            },
            "properties": {
                "Edificio": "Edificio A-1",
                "Nombre": "Oficinas Administrativas",
                "tipo": "Edificios"
            }
        }, {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -98.77389997243883,
                    20.08310987309151
                ]
            },
            "properties": {
               
                "Edificio": "Edificio A-2",
                "Nombre": "Recursos Financieros,Servicios Escolares",
                "tipo": "Edificios"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -98.7747046351433,
                    20.08506973517317
                ]
            },
            "properties": {
                
                "Edificio": "Edificio B",
                "Nombre": "División de Estudios Profesionales",
                "tipo": "Edificios"
            }
        }, {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -98.7752464413643,
                    20.08374468971447
                ]
            },
            "properties": {
             
                "Edificio": "Edificio C",
                "Nombre": "Aulas Eléctrica",
                "tipo": "Edificios"
            }
        }, {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -98.77554148435594,
                    20.08350789333837
                ]
            },
            "properties": {
                
                "Edificio": "Edificio D",
                "Nombre": "Aulas de Industrial",
                "tipo": "Edificios"
            }
        }, {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -98.77421110868457,
                    20.0852964528553
                ]
            },
            "properties": {
                
                "Edificio": "Edificio DEPI",
                "Nombre": "Division de estudios de posgrado e investigación",
                "tipo": "Edificios"
            }
        }, {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -98.77472609281541,
                    20.083427281724436
                ]
            },
            "properties": {
          
                "Edificio": "Edificio G",
                "Nombre": "Aulas de Administración",
                "tipo": "Edificios"
            }
        }, {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -98.77536445856096,
                    20.08266146932397
                ]
            },
            "properties": {
                
                "Edificio": "Edificio H",
                "Nombre": "Aulas de Química",
                "tipo": "Edificios"
            }
        }, {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -98.77583921,
                    20.08291338
                ]
            },
            "properties": {
                
                "Edificio": "Edificio I",
                "Nombre": "Aulas de Arquitectura",
                "tipo": "Edificios"
            }
        }, {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -98.7747421860695,
                    20.083150178985292
                ]
            },
            "properties": {
                "Edificio": "Edificio J",
                "Nombre": "Laboratorios de diversas ramas",
                "tipo": "Edificios"
            }
        }, {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -98.7744364142418,
                    20.08287811400106
                ]
            },
            "properties": {
                "Edificio": "Edificio L",
                "Nombre": "Aulas de Mecánica",
                "tipo": "Edificios"
            }
        }, {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -98.77598673105241,
                    20.08263627806301
                ]
            },
            "properties": {
                "Edificio": "Edificio O",
                "Nombre": "Aulas de Arquitectura",
                "tipo": "Edificios"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -98.77516597509386,
                    20.08407721168113
                ]
            },
            "properties": {
                "Edificio": "Edificio U - Titulaciones",
                "Nombre": "Posgrado - Sala de Titulaciones",
                "tipo": "Edificios"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -98.77510696649553,
                    20.083815224736053
                ]
            },
            "properties": {
                "Edificio": "Campana Monumental - Titulaciones",
                "Nombre": "Titulaciones",
                "tipo": "Edificios"
            }
        }, {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -98.77565413713457,
                    20.08251032169747
                ]
            },
            "properties": {
                "Edificio": "Edificio V-1",
                "Nombre": "Aulas de Química",
                "tipo": "Edificios"
            }
        }, {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -98.77538591623309,
                    20.08246497738109
                ]
            },
            "properties": {
                "Edificio": "Edificio V",
                "Nombre": "Aulas de Química",
                "tipo": "Edificios"
            }
        }, {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -98.77584725618364,
                    20.082379326969917
                ]
            },
            "properties": {
                "Edificio": "Edificio X",
                "Nombre": "Arquitectura",
                "tipo": "Edificios"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -98.77342253923418,
                    20.085014315245413
                ]
            },
            "properties": {
                "Edificio": "Campo No.1",
                "Nombre": "Campo de Futbol",
                "tipo": "Areas Deportivas"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -98.7751016,
                    20.08588592
                ]
            },
            "properties": {
                "Edificio": "Campo No.2",
                "Nombre": "Campo de Futbol",
                "tipo": "Areas Deportivas"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -98.77550393342973,
                    20.084863169888287
                ]
            },
            "properties": {
                "Edificio": "Campo de Béisbol",
                "Nombre": "Campo de Béisbol",
                "tipo": "Areas Deportivas"
            }
        }, {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -98.7761637568474,
                    20.084369427372362
                ]
            },
            "properties": {
                "Edificio": "Canchas al Aire Libre",
                "Nombre": "Para Futbol rápido",
                "tipo": "Areas Deportivas"
            }
        }, {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -98.77683967351915,
                    20.083351708298718
                ]
            },
            "properties": {
                "Edificio": "Estacionamiento Alumnos y Visitantes",
                "Nombre": "Uso exclusivo ",
                "tipo": "Estacionamientos"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -98.77359956502916,
                    20.08390087436243
                ]
            },
            "properties": {
                "Edificio": "Estacionamiento Personal Administrativo",
                "Nombre": "Exclusivo para personal administrativo y docencia",
                "tipo": "Estacionamientos"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -98.77456516027453,
                    20.084596146067753
                ]
            },
            "properties": {
                "Edificio": "Gimnasio Olímpico",
                "Nombre": "Para practicar deportes como Baloncesto y Voleybol",
                "tipo": "Gimnasios"
            }
        }, {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -98.7765607237816,
                    20.083820262950667
                ]
            },
            "properties": {
                "Edificio": "Gimnasio Miguel Hidalgo",
                "Nombre": "Para practicar deportes como Baloncesto y Voleybol",
                "tipo": "Gimnasios"
            }
        }, {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -98.77547711133958,
                    20.082253370397858
                ]
            },
            "properties": {
                "Edificio": "Laboratorio Ingeniería Química",
                "Nombre": "Para uso de la carrera de Ing. Química",
                "tipo": "Laboratorios"
            }
        }, {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -98.7750479578972,
                    20.082359173925198
                ]
            },
            "properties": {
                "Edificio": "Laboratorio Ingenierá Mecánica",
                "Nombre": "Para uso de la carrera de Ing. Mecánica",
                "tipo": "Laboratorios"
            }
        }, {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -98.77520889043811,
                    20.082056877943316
                ]
            },
            "properties": {
                "Edificio": "Laboratorio Ingeniería Eléctrica",
                "Nombre": "Para uso de la carrera de Ing. Eléctrica",
                "tipo": "Laboratorios"
            }
        }, {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -98.77455979585649,
                    20.08240955653214
                ]
            },
            "properties": {
                "Edificio": "Laboratorio Manufactura Integral",
                "Nombre": "Uso de Ingeniería Mecánica",
                "tipo": "Laboratorios"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -98.77411454916002,
                    20.084243472399855
                ]
            },
            "properties": {
                "Edificio": "Lab. Idiomas",
                "Nombre": "Uso exclusivo para el aprendizaje de lenguas extranjeras",
                "tipo": "Laboratorios"
            }
        }, {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -98.77577215433124,
                    20.084167899367763
                ]
            },
            "properties": {
                "Edificio": "Centro de Cómputo",
                "Nombre": "Centrol de control informático del ITP",
                "tipo": "Centros Didacticos"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -98.77461880445482,
                    20.08403186781813
                ]
            },
            "properties": {
                "Edificio": "Centro de Información",
                "Nombre": "Biblioteca estudiantil",
                "tipo": "Centros Didacticos"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -98.77547711133958,
                    20.084016753194216
                ]
            },
            "properties": {
                "Edificio": "Aula Cultural - Danza",
                "Nombre": "Para uso exclusivo de actividades extraescolares",
                "tipo": "Area Cultural"
            }
        }, {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -98.77511233091356,
                    20.083467587536582
                ]
            },
            "properties": {
                "Edificio": "Foro Cultural",
                "Nombre": "Uso exclusivo para actividades extraescolares",
                "tipo": "Area Cultural"
            }
        }, {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -98.7751552462578,
                    20.08323582897517
                ]
            },
            "properties": {
                "Edificio": "Cafeteria",
                "Nombre": "Consumo y venta de alimentos",
                "tipo": "Area de Alimentos"
            }
        }, {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -98.77401262521747,
                    20.082812616804688
                ]
            },
            "properties": {
                "Edificio": "Papeleria Don Nachito",
                "Nombre": "Servicio de impresiones,copias, etc",
                "tipo": "Papelerias"
            }
        }, {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -98.7762013077736,
                    20.08329628776336
                ]
            },
            "properties": {
                "Edificio": "Vigilancia",
                "Nombre": "Vigilancia del estacionamiento de estudiantes",
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -98.77359956502916,
                    20.083200561337947
                ]
            },
            "properties": {
                "Edificio": "Entrada Pricipal",
                "Nombre": "Acceso a estudiantes, visitantes mediante la via peatonal",
                "tipo": "Entradas"
            }
        }

    ]
};
map.on('load', function (e) {
    //Agregamos la funcion
    document.getElementById("desactivar").disabled = true;
    //buildLocationList(edificios);
    // Agregamos color a las demas partes del mapa
});


// Add an event listener for when a user clicks on the map
/* edificios.features.forEach(function (marker) {
    // Create a div element for the marker
    var el = document.createElement('div');

    // Add a class called 'marker' to each div
    el.className = 'marker';
    // By default the image for your custom marker will be anchored
    // by its center. Adjust the position accordingly
    // Create the custom markers, set their position, and add to map
    new mapboxgl.Marker(el, { offset: [0, -23] })
        .setLngLat(marker.geometry.coordinates)
        .addTo(map);
    ///
    el.addEventListener('click', function (e) {
        // 1. Fly to the point
        flyToStore(marker); // Este lo comentamos pero es el que acerca
        // 2. Close all other popups and display popup for clicked store
        createPopUp(marker);

        // 3. Highlight listing in sidebar (and remove highlight for all other listings)
        var activeItem = document.getElementsByClassName('active');
        e.stopPropagation();
        if (activeItem[0]) {
            activeItem[0].classList.remove('active');
        }
        var listing = document.getElementById('listing-' + i);
        console.log(listing);
        listing.classList.add('active');
    });

}); */

//Funciones interactivas
function flyToStore(currentFeature) {
    map.flyTo({
        center: currentFeature.geometry.coordinates,
        zoom: 19
    });
}

function abrir() {
    document.getElementById('btn-abrir-popup');
}
///////////////////////////
var btnAbrirPopup = document.getElementById('btn-abrir-popup'),
    overlay = document.getElementById('overlay'),
    popup = document.getElementById('popup'),
    btnCerrarPopup = document.getElementById('btn-cerrar-popup');

btnAbrirPopup.addEventListener('click', function () {
    overlay.classList.add('active');
    popup.classList.add('active');
});

btnCerrarPopup.addEventListener('click', function (e) {
    e.preventDefault();
    overlay.classList.remove('active');
    popup.classList.remove('active');
});
////////////

function createPopUp(currentFeature) {
    var popUps = document.getElementsByClassName('mapboxgl-popup');
    // Check if there is already a popup on the map and if so, remove it
    if (popUps[0]) popUps[0].remove();

    var popup = new mapboxgl.Popup({ closeOnClick: false })
        .setLngLat(currentFeature.geometry.coordinates)
        .setMaxWidth()
        .setHTML('<h1 style="color=black; font-size: 15px;font-weight: bold">' + currentFeature.properties.Edificio + '</h1>')
        .addTo(map);
    map.on('click', function (e) {
        // popup.remove();
        CerrarLaterar();
    });
}
function buildLocationList(data, type) {
    // Iterate through the list of stores
    var list = document.getElementById("listings");
    while (list.hasChildNodes()) {
        list.removeChild(list.firstChild);
    } // Removemos los child y asi mostramos todas las areas
    for (i = 0; i < data.features.length; i++) {
        var currentFeature = data.features[i];
        // Shorten data.feature.properties to `prop` so we're not
        // writing this long form over and over again.
        var filtro = currentFeature.tipo;
        var prop = currentFeature.properties;
        if (prop.tipo == type) {
            // Select the listing container in the HTML and append a div
            // with the class 'item' for each store
            var listings = document.getElementById('listings');
            var listing = listings.appendChild(document.createElement('div'));
            listing.className = 'item';
            listing.id = 'listing-' + i;

            // Create a new link with the class 'title' for each store
            // and fill it with the store address
            var link = listing.appendChild(document.createElement('a'));
            link.href = '#';
            link.className = 'title';
            link.dataPosition = i;
            link.innerHTML = prop.Edificio;
            // Create a new div with the class 'details' for each store
            // and fill it with the city and phone number
            var details = listing.appendChild(document.createElement('div'));
            details.innerHTML = prop.Nombre;
            if (prop.Telefono) {
                details.innerHTML += ' · ' + prop.FormatoTelefono;
            }
            link.addEventListener('click', function (e) {
                // Update the currentFeature to the store associated with the clicked link
                var clickedListing = data.features[this.dataPosition];
                // 1. Fly to the point associated with the clicked link
                flyToStore(clickedListing);
                // 2. Close all other popups and display popup for clicked store
                createPopUp(clickedListing);
                // 3. Highlight listing in sidebar (and remove highlight for all other listings)
                var activeItem = document.getElementsByClassName('active');
                if (activeItem[0]) {
                    activeItem[0].classList.remove('active');
                }
                this.parentNode.classList.add('active');
            });
        }
    }
}
// Add an event listener for the links in the sidebar listing

//Controles



// Ahora Creamos el efecto Hover del Mapa

// Add a feature
var feature = {
    'type': 'FeatureCollection',
    'features': [
        {
            'geometry': {
                'type': 'Polygon',
                'coordinates': [[
                    [-98.77439082, 20.08542241],
                    [-98.77442837, 20.0852108],
                    [-98.77421916, 20.08516546],
                    [-98.77402067, 20.08515538],
                    [-98.77398312, 20.08535691],
                    [-98.77439082, 20.08542241]
                ]]
            },
            'properties': {
                'name': 'E. DEPI',
                coordenadas: [-98.77520084, 20.08637462],
                "img1": "img/Edificios/DEPI.jpeg",
                "img2": "img/Edificios/DEPI-2.jpeg",
                "aulas": "P. BAJA: *" +
                    "AULAS DIDÁCTICAS*" +
                    "•  S-1*" +
                    "•  S-2*" +
                    "•  S-3*" +
                    "•  S-4*" +
                    "•  SANITARIOS DE HOMBRES *" +
                    "•  SANITARIOS DE MUJERES*" +
                    "P. ALTA: *" +
                    "•  AULAS DIDÁCTICAS*" +
                    "•  S-5*" +
                    "•  S-6*" +
                    "•  S-7*" +
                    "•  S-8*" +
                    "•  S-9*" +
                    "•  S-10*" +
                    "•  DIVISION DE ESTUDIOS DE POSGRADO E INVESTIGACION*" +
                    "•  OFICINAS*" +
                    "•  SANITARIO MUJERES*" +
                    "•  SANITARIO HOMBRES*" 
            }
        },
        {
            'geometry': {
                'type': 'Polygon',
                'coordinates': [[
                    [-98.77367735, 20.08550806],
                    [-98.77298875, 20.08541737],
                    [-98.77313554, 20.08449538],
                    [-98.7738061, 20.08458103],
                    [-98.77367735, 20.08550806]
                ]]
            },
            'properties': {
                'name': 'Campo No.1',
                coordenadas: [-98.77520084, 20.08637462],
                "img1": "img/Edificios/Cancha-Frente-DEPI.jpeg",
                "img2": "img/Edificios/Cancha-Frente-DEPI-2.jpeg",
                "aulas": "Campo del ITP con pista para*atletismo"
            }
        },
        {
            'geometry': {
                'type': 'Polygon',
                'coordinates': [[
                    [-98.77520084, 20.08637462],
                    [-98.77558708, 20.0856592],
                    [-98.774997, 20.08538714],
                    [-98.77464294, 20.08612271],
                    [-98.77520084, 20.08637462]
                ]]
            },
            'properties': {
                'name': 'Campo No.2',
                coordenadas: [-98.77520084, 20.08637462],
                "img1": "img/Edificios/Campo-Deportivo-Edificio-B.jpeg",
                "img2": "img/Edificios/Campo-Deportivo-Edificio-B-2.jpeg",
                "aulas": "Esta es un Área deportiva* Por lo que en general solo*cuenta con un espacio destinado*al deporte"
            },
        },
        {
            'geometry': {
                'type': 'Polygon',
                'coordinates': [[[-98.77532726, 20.08238241],
                [-98.77547565, 20.08240504],
                [-98.77544842, 20.08252291],
                [-98.77531155, 20.08249785],
                [-98.77532726, 20.08238241]]]

            },
            'properties': {
                'name': 'Edificio V',
                coordenadas: [-98.77520084, 20.08637462],
                "img1": "img/Edificios/Edificio-V.jpeg",
                "img2": "img/Edificios/Edificio-V-2.jpeg",
                "aulas": "P.  BAJA:*• LABORATORIO DE CÓMPUTO*• LABORATORIO DE FISICOQUÍMICA*• AULAS DIDÁCTICAS"
            },
        },
        {
            'geometry': {
                'type': 'Polygon',
                'coordinates': [[[-98.7757667, 20.08245275],
                [-98.77552994, 20.08241688],
                [-98.77550427, 20.08253448],
                [-98.77574563, 20.08257279],
                [-98.7757667, 20.08245275]
                ]]
            },
            'properties': {
                'name': 'Edificio V-1',
                coordenadas: [-98.77520084, 20.08637462],
                "img1": "img/Edificios/Edificio-V1-2.jpeg",
                "img2": "img/Edificios/Edificio-V1.jpeg",
                "aulas": "P.  BAJA:*• LABORATORIO DE CÓMPUTO*• LABORATORIO DE FISICOQUÍMICA*• AULAS DIDÁCTICAS"
            },
        },
        {
            'geometry': {
                'type': 'Polygon',
                'coordinates': [[
                    [-98.77582029, 20.0826542],
                    [-98.7758375, 20.08254411],
                    [-98.77618253, 20.08259093],
                    [-98.77616878, 20.08270798],
                    [-98.77582029, 20.0826542]
                ]]
            },
            'properties': {
                'name': 'Edificio O',
                coordenadas: [-98.77520084, 20.08637462],
                "img1": "img/Edificios/Edificio-O.jpeg",
                "img2": "img/Edificios/Edificio-O-2.jpeg",
                "aulas": "P.  BAJA:*• O-1*" +
                "• O-2*"+
                "• O-3*"+
                "• O-4*"+

                "P. ALTA: *" +
                 "• SANITARIOS HOMBRES*"+
                 "• O-5*"+
                 "• O-6*"+
                 "• O-7*" 

            },
        },
        {
            'geometry': {
                'type': 'Polygon',
                'coordinates': [[[-98.77488434, 20.08520073],
                [-98.77491653, 20.0849992],
                [-98.77450883, 20.0849337],
                [-98.77447665, 20.08514531],
                [-98.77488434, 20.08520073]
                ]]
            },
            'properties': {
                'name': 'Edificio B',
                coordenadas: [-98.77520084, 20.08637462],
                "img1": "img/Edificios/Edificio-B.jpeg",
                "img2": "img/Edificios/Edificio-B-2.jpeg",
                "aulas": "P. BAJA: *" +
                    "•	VESTÍBULO Y ESCALERA*" +
                    "•	SANITARIO HOMBRES*" +
                    "•	LABORATORIO DE CÓMPUTO*" +
                    "•	LABORATORIO DE FÍSICA*" +
                    "•	LABORATORIO DE QUÍMICA*" +
                    "•	B-1*" +
                    "•	B-2*" +
                    "•	B-3*" +
                    "•	B-4*" +
                    "P. ALTA: *" +
                    "•	B-5*" +
                    "•	B-6*" +
                    "•	B-7*" +
                    "•	B-8*" +
                    "•	B-9*" +
                    "•	B-10*" +
                    "•	JEFATURA DIVISIÓN DE ESTUDIOS PROFESIONALES*" +
                    "•	CUBÍCULOS POR CARRERA*" +
                    "•	SALA DE JUNTAS*" +
                    "•	SANITARIO MUJERES*" +
                    "•	SANITARIO HOMBRES*" +
                    "•	SALA DE JUNTAS*" +
                    "•	SALA DE TITULACIONES"
            },
        },
        {
            'geometry': {
                'type': 'Polygon',
                'coordinates': [[[-98.77420843, 20.08439966],
                [-98.77424598, 20.08413767],
                [-98.77401531, 20.0841024],
                [-98.77397239, 20.08437447],
                [-98.77420843, 20.08439966]]]
            },
            'properties': {
                'name': 'Lab. Idiomas',
                coordenadas: [-98.77520084, 20.08637462],
                "img1": "img/Edificios/Laboratorio-De-Idiomas.jpeg",
                "img2": "img/Edificios/Laboratorio-De-Idiomas-2.jpeg",
                "aulas": "P. BAJA*"+
                "•	OFICINA DE EMPRENDIMIENTO EMPRESARIAL*"+
                "•	LABORATORIO DE IDIOMAS*"+
                "•	AULAS DIDÁCTICAS*"+
                "•	SANITARIO HOMBRES*"+
                "•	SANITARIO MUJERES*"+
                "•	CUBÍCULOS*"
            },
        },
        {
            'geometry': {
                'type': 'Polygon',
                'coordinates': [[
                    [-98.77535105, 20.08541233],
                    [-98.77579093, 20.08525615],
                    [-98.77590895, 20.08516546],
                    [-98.77597332, 20.08506974],
                    [-98.77603769, 20.08493874],
                    [-98.77604842, 20.08481783],
                    [-98.77603233, 20.08464149],
                    [-98.77582848, 20.08431401],
                    [-98.77561927, 20.08442989],
                    [-98.7751472, 20.08443492],
                    [-98.77488971, 20.08451554],
                    [-98.77483606, 20.08460622],
                    [-98.77484679, 20.08466668],
                    [-98.77489507, 20.08470699],
                    [-98.77535105, 20.08541233]
                ]]
            },
            'properties': {
                'name': 'Campo de Beisbol',
                coordenadas: [-98.77520084, 20.08637462],
                "img1": "img/Edificios/Campo-Deportivo-Posgrado.jpeg",
                "img2": "img/Edificios/Campo-Deportivo-Posgrado-2.jpeg",
                "aulas": "Este campo está destinado a las actividades deportivas.*Practicar el deporte Beisbol"
            },
        },
        {
            'geometry': {
                'type': 'Polygon',
                'coordinates': [[[-98.77603769, 20.08243475],
                [-98.77604842, 20.08232391],
                [-98.77601087, 20.08230879],
                [-98.77566755, 20.08227856],
                [-98.77565145, 20.08239444],
                [-98.77603769, 20.08243475]
                ]]
            },
            'properties': {
                'name': 'Edificio X',
                coordenadas: [-98.77520084, 20.08637462],
                "img1": "img/Edificios/Edificio-X.jpeg",
                "img2": "img/Edificios/Edificio-X-2.jpeg",
                "aulas": "P. BAJA:*• AULAS DIDÁCTICAS*• P. ALTA:*• AULAS DIDÁCTICAS"
            },
        },
        {
            'geometry': {
                'type': 'Polygon',
                'coordinates': [[
                    [-98.77365053, 20.08346255],
                    [-98.77377391, 20.08277735],
                    [-98.77368271, 20.08276223],
                    [-98.77355933, 20.08345751],
                    [-98.77365053, 20.08346255]
                ]]
            },
            'properties': {
                'name': 'Entrada',
                coordenadas: [-98.77520084, 20.08637462],
                "img1": "img/Edificios/EntradaP.jpeg",
                "img2": "img/Edificios/EntradaP2.jpeg",
                "aulas": "• Entrada Principal*• Caseta de Vigilancia"
            },
        },
        {
            'geometry': {
                'type': 'Polygon',
                'coordinates': [[
                    [-98.77472878, 20.08432912],
                    [-98.77482533, 20.08369935],
                    [-98.77453566, 20.083654],
                    [-98.77442837, 20.08428882],
                    [-98.77472878, 20.08432912]
                ]]
            },
            'properties': {
                'name': 'Centro de Información',
                coordenadas: [-98.77520084, 20.08637462],
                "img1": "img/Edificios/Centro-De-Informacion.jpeg",
                "img2": "img/Edificios/Centro-De-Informacion-2.jpeg",
                "aulas": "P. BAJA:*"+
                "•	ESPACIO CÍRCULO DE LECTURA*"+
                "•	AULAS DIDÁCTICAS*"+
                "•	JEFATURA CENTRO DE INFORMACIÓN*"+
                "•	CUBÍCULOS*"+
                "•	BODEGA*"+
                "•	PAPELERÍA*"+
                "•	CENTRO DE INFORMACIÓN*"+
                "•	SANITARIOS HOMBRES*"+
                "•	SANITARIOS MUJERES"
            },
        },
        {
            'geometry': {
                'type': 'Polygon',
                'coordinates': [[
                    [-98.77391338, 20.08429889],
                    [-98.77402604, 20.08362881],
                    [-98.77342522, 20.08353308],
                    [-98.7733072, 20.08362881],
                    [-98.77303362, 20.08419309],
                    [-98.7730819, 20.08424851],
                    [-98.77333403, 20.08413263],
                    [-98.7737149, 20.08419813],
                    [-98.77391338, 20.08429889]
                ]]
            },
            'properties': {
                'name': 'Estacionamiento Personal Administrativo',
                coordenadas: [-98.77520084, 20.08637462],
                "img1": "img/Edificios/EstacionamientoM.jpeg",
                "img2": "img/Edificios/EstacionamientoM2.jpeg",
                "aulas": "Area de estacionamiento exclusiva personal*administrativo"
            },
        },
        {
            'geometry': {
                'type': 'Polygon',
                'coordinates': [[
                    [-98.77425134, 20.08405202],
                    [-98.77432108, 20.08362469],
                    [-98.77420843, 20.08360866],
                    [-98.77413332, 20.08403187],
                    [-98.77425134, 20.08405202]
                ]]
            },
            'properties': {
                'name': 'Z-Depto. Económico Administrativo',
                coordenadas: [-98.77520084, 20.08637462],
                "img1": "img/Edificios/Dept-Economico-Administrativas-Z.jpeg",
                "img2": "img/Edificios/Dept-Economico-Administrativas-Z-2.jpeg",
                "aulas": "P. BAJA*"+
                "•	Z-1*"+
                "•	Z-2*"+
                "•	JEFATURA DEPTO. CIENCIAS ECONÓMICO ADMINISTRATIVO*"+
                "•	SALA DE JUNTAS*"+
                "•	SANITARIO HOMBRES*"+
                "•	SANITARIO MUJERES*"+
                "•	CUBÍCULOS*"
            },
        },
        {
            'geometry': {
                'type': 'Polygon',
                'coordinates': [[
                    [-98.77373636, 20.08316529],
                    [-98.77404213, 20.08321064],
                    [-98.77406895, 20.08302422],
                    [-98.77377391, 20.08297888],
                    [-98.77373636, 20.08316529]
                ]]
            },
            'properties': {
                'name': 'Edificio A-2',
                coordenadas: [-98.77520084, 20.08637462],
                "img1": "img/Edificios/EdificioA2.jpeg",
                "img2": "img/Edificios/EdificioA2-2.jpeg",
                "aulas": "P.  BAJA:*"+
                "•	JEFATURA DEPTO. RECURSOS FINANCIEROS*" +
                    "•	JEFATURA DEPTO. DESARROLLO ACADÉMICO*" +
                    "•	JEFATURA DEPTO. SERVICIOS ESCOLARES*" +
                    "•	JEFATURA DEPTO. GESTIÓN TECNOLÓGICA Y VINCULACIÓN*"
            },
        },
        {
            'geometry': {
                'type': 'Polygon',
                'coordinates': [[
                    [-98.77400458, 20.08347766],
                    [-98.77403677, 20.08329629],
                    [-98.77373636, 20.08325094],
                    [-98.77370417, 20.08342728],
                    [-98.77400458, 20.08347766]
                ]]
            },
            'properties': {
                'name': 'Edificio A-1',
                coordenadas: [-98.77520084, 20.08637462],
                "img1": "img/Edificios/EdificioA1.jpeg",
                "img2": "img/Edificios/EdificioA1-2.jpeg",
                "aulas": "P. BAJA:*" +
                    "•	VESTÍBULO Y ESCALERA*" +
                    "•	JEFATURA DEPTO. RECURSOS HUMANOS*" +
                    "•	JEFATURA DEPTO. PLANEACIÓN, PROGRAMACIÓN Y PRESUPUESTACIÓN*" +
                    "•	JEFATURA DEPTO. RECURSOS MATERIALES Y SERVICIOS*" +
                    "•	JEFATURA DEPTO. COMUNICACIÓN Y DIFUSIÓN*" +
                    "•	SANITARIOS HOMBRES*" +
                    "•	SANITARIOS MUJERES*" +
                    "P. ALTA:*" +
                    "•	JEFATURA SUBDIRECCIÓN DE PLANEACIÓN Y VINCULACIÓN*" +
                    "•	JEFATURA SUBDIRECCIÓN DE SERVICIOS ADMINISTRATIVOS*" +
                    "•	JEFATURA SUBDIRECCIÓN ACADÉMICA*" +
                    "•	JEFATURA DIRECCIÓN*" +
                    "•	SANITARIOS HOMBRES*" +
                    "•	SANITARIOS MUJERES*" +
                    "•	SALA DE ESPERA*" +
                    "•	SALA DE JUNTAS"
            },
        },
        {
            'geometry': {
                'type': 'Polygon',
                'coordinates': [[
                    [-98.77406359, 20.08285796],
                    [-98.77392948, 20.08283277],
                    [-98.77394557, 20.08275216],
                    [-98.77406895, 20.08276727],
                    [-98.77406359, 20.08285796]
                ]]
            },
            'properties': {
                'name': 'Papelería',
                coordenadas: [-98.77520084, 20.08637462],
                "img1": "img/Edificios/PapeleriaDN.jpeg",
                "img2": "img/Edificios/PapeleriaDN2.jpeg",
                "aulas": "Papelería, Copias e Impresiones*'Don Nachito'"
            },
        },
        {
            'geometry': {
                'type': 'Polygon',
                'coordinates': [[
                    [-98.7746644, 20.08295873],
                    [-98.7746805, 20.08285292],
                    [-98.77423525, 20.08278239],
                    [-98.77421379, 20.08288315],
                    [-98.7746644, 20.08295873]
                ]]
            },
            'properties': {
                'name': 'Edificio L',
                coordenadas: [-98.77520084, 20.08637462],
                "img1": "img/Edificios/Edificio-L.jpeg",
                "img2": "img/Edificios/Edificio-L-3.jpeg",
                "aulas": "P .BAJA*"+
                "•	OFICINAS SINDICALES*"+
                "•	AUDITORIO SALA RAFAEL ROSADO*"+
                "•	L-1*"+
                "•	L-2*"+
                "P. ALTA*"+
                "•	L-3*"+
                "•	L-4*"+
                "•	L-5*"+
                "•	L-6*"+
                "•	L-7"
            },
        },
        {
            'geometry': {
                'type': 'Polygon',
                'coordinates': [[
                    [-98.77436936, 20.08339705],
                    [-98.77440691, 20.08309476],
                    [-98.77428353, 20.08307461],
                    [-98.77423525, 20.08338194],
                    [-98.77436936, 20.08339705]
                ]]
            },
            'properties': {
                'name': 'K - Depto. Ciencias Básicas',
                coordenadas: [-98.77520084, 20.08637462],
                "img1": "img/Edificios/Dep-CienciasBasicas.jpeg",
                "img2": "img/Edificios/Dep-CienciasBasicas2.jpeg",
                "aulas": "P.  BAJA:*• JEFATURA DEPTO. CIENCIAS BÁSICAS *"+
                "• SALA DE JUNTAS*"+
                "• SANITARIO MUJERES*"+
                "• SANITARIO HOMBRES*"+
                "• CUBÍCULOS MAESTROS"


            },
        },
        {
            'geometry': {
                'type': 'Polygon',
                'coordinates': [[
                    [-98.77472878, 20.08253047],
                    [-98.77477169, 20.08229871],
                    [-98.77429962, 20.08223322],
                    [-98.77426744, 20.08245994],
                    [-98.77472878, 20.08253047]
                ]]
            },
            'properties': {
                'name': 'Lab. Manufactura Integral',
                coordenadas: [-98.77520084, 20.08637462],
                "img1": "img/Edificios/Manufactura-Integral.jpeg",
                "img2": "img/Edificios/Manufactura-Integral.jpeg",
                "aulas": "P.  BAJA:*• LABORATORIO MANUFACTURA INTEGRAL*• HERRAMENTERÍA"
            },
        },
        /*{
            'geometry': {
                'type': 'Polygon',
                'coordinates': [[
                    [-98.77480924, 20.08201657],
                    [-98.77484143, 20.08179923],
                    [-98.77461612, 20.08176466],
                    [-98.77457857, 20.0819813],
                    [-98.77480924, 20.08201657]
                ]]
            },
            'properties': {
                'name': 'Depto. Ingeniería Eléctrica',
                coordenadas: [-98.77520084, 20.08637462],
                "img1": "img/Edificio_Y(1).jpeg",
                "img2": "img/Edificio_Y(2).jpeg",
                "aulas": "P.  BAJA:*• LABORATORIO DE CÓMPUTO*• LABORATORIO DE FISICOQUÍMICA*• AULAS DIDÁCTICAS"
            },
        },*/
        {
            'geometry': {
                'type': 'Polygon',
                'coordinates': [[
                    [-98.77467513, 20.0825204],
                    [-98.77466977, 20.08255567],
                    [-98.77455711, 20.08254055],
                    [-98.77455711, 20.08250528],
                    [-98.77467513, 20.0825204]
                ]]
            },
            'properties': {
                'name': 'Aula Institutos',
                coordenadas: [-98.77520084, 20.08637462],
                "img1": "img/Edificios/Aula-Institutos.jpeg",
                "img2": "img/Edificios/Aula-Institutos.jpeg",
                "aulas": "P.  BAJA:*• AULA INSTITUTOS*• SALA DE CONTROLES*• BODEGA"
            },
        },
        {
            'geometry': {
                'type': 'Polygon',
                'coordinates': [[
                    [-98.7751472, 20.08244482],
                    [-98.77517402, 20.08227352],
                    [-98.77493262, 20.08223322],
                    [-98.7749058, 20.08240452],
                    [-98.7751472, 20.08244482]
                ]]
            },
            'properties': {
                'name': 'Lab. Ingeniería Mecánica',
                coordenadas: [-98.77520084, 20.08637462],
                "img1": "img/Edificios/Lab-Mecanica.jpeg",
                "img2": "img/Edificios/Lab-Mecanica-2.jpeg",
                "aulas": "P.  BAJA:*• LABORATORIO DE INGENIERÍA MECÁNICA*• HERRAMENTERÍA*• CUBÍCULOS*P. ALTA:**• AULAS DIDÁCTICAS"
            },
        },
        {
            'geometry': {
                'type': 'Polygon',
                'coordinates': [[
                    [-98.77530277, 20.08217276],
                    [-98.77534568, 20.08195611],
                    [-98.77509356, 20.08191581],
                    [-98.77505064, 20.08213245],
                    [-98.77530277, 20.08217276]
                ]]
            },
            'properties': {
                'name': 'Lab. Ingeniería Eléctrica',
                coordenadas: [-98.77520084, 20.08637462],
                "img1": "img/Edificios/Lab-Electrica.jpeg",
                "img2": "img/Edificios/Lab-Electrica.jpeg",
                "aulas": "P. BAJA:*"+
                "•	LABORATORIO DE INGENIERÍA ELÉCTRICA*"+
                "•	HERRAMENTERÍA*"+
                "•	CUBÍCULOS*"+
                "P. ALTA:*"+
                "•	CUBÍCULOS*"
            },
        },
        {
            'geometry': {
                'type': 'Polygon',
                'coordinates': [[
                    [-98.7755549, 20.08237933],
                    [-98.77558708, 20.08210726],
                    [-98.7753886, 20.08208207],
                    [-98.77534568, 20.0823491],
                    [-98.7755549, 20.08237933]
                ]]
            },
            'properties': {
                'name': 'Lab. Ingenirería Química',
                coordenadas: [-98.77520084, 20.08637462],
                "img1": "img/Edificios/Lab-Quimica.jpeg",
                "img2": "img/Edificios/Lab-Quimica-2.jpeg",
                "aulas": "P.  BAJA:*• LABORATORIO DE INGENIERÍA QUÍMICA*• CUBÍCULOS*• HERRAMENTERÍA"
            },
        },
        {
            'geometry': {
                'type': 'Polygon',
                'coordinates': [[
                    [-98.77562463, 20.08225841],
                    [-98.77563536, 20.08219291],
                    [-98.77558172, 20.08218787],
                    [-98.77557635, 20.08225337],
                    [-98.77562463, 20.08225841]
                ]]
            },
            'properties': {
                'name': 'Sala de Máquinas',
                coordenadas: [-98.77520084, 20.08637462],
                "img1": "img/Edificios/Sala-maquinas.jpeg",
                "img2": "img/Edificios/Sala-maquinas2.jpeg",
                "aulas": "P.  BAJA:*• SALA DE MÁQUINAS"
            },
        },
        {
            'geometry': {
                'type': 'Polygon',
                'coordinates': [[
                    [-98.7755549, 20.08275216],
                    [-98.77557099, 20.08262116],
                    [-98.7751472, 20.0825607],
                    [-98.77513111, 20.0826917],
                    [-98.7755549, 20.08275216]
                ]]
            },
            'properties': {
                'name': 'Edificio H',
                coordenadas: [-98.77520084, 20.08637462],
                "img1": "img/Edificios/Edificio-H.jpeg",
                "img2": "img/Edificios/Edificio-H-2.jpeg",
                "aulas": "P. BAJA*"+
                "• H-1*"+
                "• H-2*"+
                "• H-3*"+
                "• H-4*"+
                "• H-5*"+
                "• H-6"
            },
        },
        {
            'geometry': {
                'type': 'Polygon',
                'coordinates': [[
                    [-98.77497017, 20.08291338],
                    [-98.77502382, 20.08256574],
                    [-98.77490044, 20.08255063],
                    [-98.77484679, 20.08289323],
                    [-98.77497017, 20.08291338]
                ]]
            },
            'properties': {
                'name': 'Depto. Metal Mecánica',
                coordenadas: [-98.77520084, 20.08637462],
                "img1": "img/Edificios/Edificio-M.jpeg",
                "img2": "img/Edificios/Edificio-M-2.jpeg",
                "aulas": "P.  BAJA:*•OFICINA COMITÉ EJECUTIVO SOCIEDAD ALUMNOS*• JEFATURA DEPTO. METAL MECÁNICA*• SALA DE JUNTAS*"+
                "• SANITARIO HOMBRES*• SANITARIO MUJERES*• CUBÍCULOS*"
            },
        },
        {
            'geometry': {
                'type': 'Polygon',
                'coordinates': [[
                    [-98.77720714, 20.08394622],
                    [-98.77758265, 20.08341721],
                    [-98.77641857, 20.08264635],
                    [-98.77632201, 20.08269674],
                    [-98.77624691, 20.08332652],
                    [-98.77631664, 20.08332652],
                    [-98.77720714, 20.08395126],
                    [-98.77720714, 20.08394622]
                ]]
            },
            'properties': {
                'name': 'Estacionamiento Alumnos y Visitantes',
                coordenadas: [-98.77520084, 20.08637462],
                "img1": "img/Edificios/EstacionamientoA.jpeg",
                "img2": "img/Edificios/EstacionamientoA2.jpeg",
                "aulas": "Area de estacionamiento exclusiva alumnos y visitantes"
            },
        },
        /*{
            'geometry': {
                'type': 'Polygon',
                'coordinates': [[
                    [-98.77480924, 20.08201657],
                    [-98.77484143, 20.08179923],
                    [-98.77461612, 20.08176466],
                    [-98.77457857, 20.0819813],
                    [-98.77480924, 20.08201657]
                ]]
            },
            'properties': {
                'name': 'Depto. Ingeniería Eléctrica',
                coordenadas: [-98.77520084, 20.08637462],
                "img1": "img/Edificio_Y(1).jpeg",
                "img2": "img/Edificio_Y(2).jpeg",
                "aulas": "P.  BAJA:*• LABORATORIO DE CÓMPUTO*• LABORATORIO DE FISICOQUÍMICA*• AULAS DIDÁCTICAS"
            },
        },*/
        {
            'geometry': {
                'type': 'Polygon',
                'coordinates': [[
                    [-98.77480924, 20.08201657],
                    [-98.77484143, 20.08179923],
                    [-98.77461612, 20.08176466],
                    [-98.77457857, 20.0819813],
                    [-98.77480924, 20.08201657]
                ]]
            },
            'properties': {
                'name': 'Depto. Ingeniería Eléctrica',
                coordenadas: [-98.77520084, 20.08637462],
                "img1": "img/Edificios/Dep-Electrica.jpeg",
                "img2": "img/Edificios/Dep-Electrica-2.jpeg",
                "aulas": "P. BAJA: *" +
                    "•  JEFATURA DEPTO. INGENIERÍA ELÉCTRICA Y ELECTRÓNICA*" +
                    "•  SALA DE JUNTAS*" +
                    "•  COCINETA*" +
                    "•  LABORATORIO DE CÓMPUTO*" +
                    "•  HERRAMENTERÍA*" +
                    "•  LABORATORIO DE ELECTRÓNICA*" +
                    "•  AULAS DIDÁCTICAS*" +
                    "•  CUBÍCULOS*" +
                    "•  SANITARIO HOMBRES*" +
                    "•  SANITARIO MUJERES*" +
                    "• LABORATORIO DE CONTROL"

            },
        },
        {
            'geometry': {
                'type': 'Polygon',
                'coordinates': [[
                    [-98.77468586, 20.08471706],
                    [-98.77477705, 20.0846566],
                    [-98.77480388, 20.08451554],
                    [-98.77472878, 20.08440973],
                    [-98.77455711, 20.08438958],
                    [-98.77453029, 20.08441477],
                    [-98.77447665, 20.0843392],
                    [-98.77436936, 20.08441981],
                    [-98.77432108, 20.08463645],
                    [-98.77439618, 20.08473218],
                    [-98.77448201, 20.08466668],
                    [-98.77468586, 20.08471706]
                ]]
            },
            'properties': {
                'name': 'Gimnasio Olímpico',
                coordenadas: [-98.77520084, 20.08637462],
                "img1": "img/Edificios/Gimnasio-Olimpico.jpeg",
                "img2": "img/Edificios/Gimnasio-Olimpico-2.jpeg",
                "aulas": "P.  BAJA:* • DUELA DE BASQUETBOL Y VOLEYBOL"+
                "• VESTIDOR DE HOMBRES*"+
                "• VESTIDOR DE MUJERES*"+
                "• SANITARIO DE HOMBRES*"+
                "•  SANITARIO DE MUJERES"
            },
        },
        {
            'geometry': {
                'type': 'Polygon',
                'coordinates': [[
                    [-98.77626836, 20.08301918],
                    [-98.77629519, 20.08284788],
                    [-98.77615035, 20.08282269],
                    [-98.77612352, 20.08299903],
                    [-98.77626836, 20.08301918]
                ]]
            },
            'properties': {
                'name': 'Taller de Construcción',
                coordenadas: [-98.77520084, 20.08637462],
                "img1": "img/Edificios/Tallercontruccion.jpeg",
                "img2": "img/Edificios/Tallercontruccion2.jpeg",
                "aulas": "P.  BAJA:*•  TALLER DE CONSTRUCCIÓN*•HERRAMENTERIA"
            },
        },
        {
            'geometry': {
                'type': 'Polygon',
                'coordinates': [[[-98.77602696, 20.08299903],
                [-98.77603769, 20.08288315],
                [-98.77566218, 20.08283277],
                [-98.77564609, 20.08294865],
                [-98.77602696, 20.08299903]]]

            },
            'properties': {
                'name': 'Edificio I',
                coordenadas: [-98.77520084, 20.08637462],
                "img1": "img/Edificios/Edificio-I.jpeg",
                "img2": "img/Edificios/Edificio-I-2.jpeg",
                "aulas": "P. BAJA*"+
                "•	SANITARIOS MUJERES*"+
                "•	I-1*"+
                "•	I-2*"+
                "•	I-3*"+
                "P. ALTA*"+
                "•	I-4*"+
                "•	I-5*"+
                "•	I-6*"+
                "•	I-7*"
            },
        },
        {
            'geometry': {
                'type': 'Polygon',
                'coordinates': [[[-98.77554417, 20.08301415],
                [-98.77556562, 20.08288315],
                [-98.77509892, 20.08282269],
                [-98.77508819, 20.08294865],
                [-98.77554417, 20.08301415]]]
            },
            'properties': {
                'name': 'Edificio N',
                coordenadas: [-98.77520084, 20.08637462],
                "img1": "img/Edificios/Edificio-N.jpeg",
                "img2": "img/Edificios/Edificio-N-2.jpeg",
                "aulas": "P.  BAJA:*• LABORATORIO QUÍMICA ANALÍTICA*"+
                "• LABORATORIO CÓMPUTO*"+
                "• JEFATURA DEPTO. QUÍMICA*"+
                "• SALA DE JUNTAS CUBÍCULOS"
            },
        },

        {
            'geometry': {
                'type': 'Polygon',
                'coordinates': [[[-98.77483606, 20.08322575],
                [-98.77486289, 20.08311491],
                [-98.77461076, 20.08306957],
                [-98.77458394, 20.08318041],
                [-98.77483606, 20.08322575]]]
            },
            'properties': {
                'name': 'Edificio J',
                coordenadas: [-98.77520084, 20.08637462],
                "img1": "img/Edificios/Edificio-J.jpeg",
                "img2": "img/Edificios/Edificio-J-2.jpeg",
                "aulas": "P. BAJA*"+
                "•	CONSULTORIO MÉDICO*"+
                "•	LABORATORIO DE CÓMPUTO*"+
                "•	J-1 AULA DIDÁCTICA DE CIENCIAS BÁSICAS*"+
                "•	J-2 AULA DE CÓMPUTO DE CIVIL*"+
                "•	J-3 AULA DE CÓMPUTO DE ARQUITECTURA"
            },
        },
        {
            'geometry': {
                'type': 'Polygon',
                'coordinates': [[[-98.77490044, 20.08350286],
                [-98.77492189, 20.08339201],
                [-98.77456784, 20.08333659],
                [-98.77455175, 20.0834424]],
                [-98.77490044, 20.08350286]]

            },
            'properties': {
                'name': 'Edificio G',
                coordenadas: [-98.77520084, 20.08637462],
                "img1": "img/Edificios/Edificio-G.jpeg",
                "img2": "img/Edificios/Edificio-G-2.jpeg",
                "aulas": "P. BAJA:*"+
                "•	G-1*"+
                "•	G-2*"+
                "•	G-3*"+
                "•	LABORATORIO DE CÓMPUTO*"+
                "P. ALTA*"+
                "•	G-4*"+
                "•	G-5*"+
                "•	G-6*"+
                "•	G-7*"
            },
        },
        {
            'geometry': {
                'type': 'Polygon',
                'coordinates': [[[-98.77525985, 20.08333156],
                [-98.77528667, 20.08314514],
                [-98.77508283, 20.08311995],
                [-98.77506137, 20.08330133],
                [-98.77525985, 20.08333156]]]
            },
            'properties': {
                'name': 'Cafetería',
                coordenadas: [-98.77520084, 20.08637462],
                "img1": "img/Edificios/Cafeteria.jpeg",
                "img2": "img/Edificios/Cafeteria2.jpeg",
                "aulas": "P.  BAJA:*• CAFETERIA"
            },
        },
        {
            'geometry': {
                'type': 'Polygon',
                'coordinates': [[[-98.77513647, 20.08356835],
                [-98.77518475, 20.08353308],
                [-98.77521157, 20.08347263],
                [-98.77521694, 20.08339201],
                [-98.77517939, 20.08334667],
                [-98.77506137, 20.08334667],
                [-98.77503991, 20.08342224],
                [-98.77504528, 20.0835482],
                [-98.77513647, 20.08356835]
                ]]

            },
            'properties': {
                'name': 'Foro Cultural',
                coordenadas: [-98.77520084, 20.08637462],
                "img1": "img/Edificios/ForoCultural.jpeg",
                "img2": "img/Edificios/ForoCultural2.jpeg",
                "aulas": "P.  BAJA:*• FORO CULTURAL"
            },
        },
        {
            'geometry': {
                'type': 'Polygon',
                'coordinates': [[[-98.77609134, 20.08330133],
                [-98.77612889, 20.08308972],
                [-98.77595723, 20.08306453],
                [-98.77592504, 20.08327613],
                [-98.77609134, 20.08330133]]]

            },
            'properties': {
                'name': 'Edificio Ciencias de la Tierra',
                coordenadas: [-98.77520084, 20.08637462],
                "img1": "img/Edificios/Ciencias-De-La-Tierra.jpeg",
                "img2": "img/Edificios/Ciencias-De-La-Tierra-2.jpeg",
               "aulas": "P.  BAJA:*• SANITARIO MIXTO*• SALA DE JUNTAS*• JEFATURA DEPTO. CIENCIAS DE LA TIERRA*•  CUBÍCULOS"
            },
        },
        {
            'geometry': {
                'type': 'Polygon',
                'coordinates': [[[-98.77622545, 20.08331644],
                [-98.77623081, 20.08325598],
                [-98.77618253, 20.08325094],
                [-98.77617717, 20.0833114],
                [-98.77622545, 20.08331644]]]

            },
            'properties': {
                'name': 'Vigilancia',
                coordenadas: [-98.77520084, 20.08637462],
                "img1": "img/Edificios/EstacionamientoA.jpeg",
                "img2": "img/Edificios/EstacionamientoA2.jpeg",
                "aulas": "Area de vigilancia para el estacionamiento*de alumnos y visitantes"
            },
        },
        {
            'geometry': {
                'type': 'Polygon',
                'coordinates': [[[-98.77586603, 20.08328621],
                [-98.77588749, 20.08317033],
                [-98.77545297, 20.08310483],
                [-98.77543688, 20.08322575],
                [-98.77586603, 20.08328621]]]
            },
            'properties': {
                'name': 'Edificio E',
                coordenadas: [-98.77520084, 20.08637462],
                "img1": "img/Edificios/Edificio-E.jpeg",
                "img2": "img/Edificios/Edificio-E-2.jpeg",
                "aulas": "P.  BAJA:*• JEFATURA DEPTO. INGENIERÍA INDUSTRIAL*• SALA DE JUNTAS*• SANITARIO HOMBRES* • SANITARIO MUJERES* • CUBÍCULOS POR MAESTRO"
            },
        },
        {
            'geometry': {
                'type': 'Polygon',
                'coordinates': [[[-98.77607524, 20.08359354],
                [-98.77610207, 20.08343232],
                [-98.77605915, 20.08342728],
                [-98.77606988, 20.08337186],
                [-98.77586603, 20.08334667],
                [-98.77586067, 20.08343736],
                [-98.77590895, 20.08344743],
                [-98.77589285, 20.08356835],
                [-98.77607524, 20.08359354]]]
            },
            'properties': {
                'name': 'Edificio Mantenimiento de Equipo',
                coordenadas: [-98.77520084, 20.08637462],
                "img1": "img/Edificios/Mantenimiento.jpeg",
                "img2": "img/Edificios/Mantenimiento.jpeg",
                "aulas": "P.  BAJA:*• JEFATURA DEPTO. MANTENIMIENTO DE EQUIPO*• BODEGA"
            },
        },
        {
            'geometry': {
                'type': 'Polygon',
                'coordinates': [[[-98.77575338, 20.08355828],
                [-98.77576411, 20.08345751],
                [-98.77532959, 20.08340209],
                [-98.77532423, 20.08349782],
                [-98.77575338, 20.08355828]]]
            },
            'properties': {
                'name': 'Edificio D',
                coordenadas: [-98.77520084, 20.08637462],
                "img1": "img/Edificios/EdificioD.jpeg",
                "img2": "img/Edificios/EdificioD2.jpeg",
                "aulas": "P. BAJA*" +
                    "•	AULAS DIDÁCTICAS:*" +
                    "•	D1*" +
                    "•	D2*" +
                    "•	LABORATORIO DE MÉTODOS*" +
                    "•	SANITARIOS HOMBRES*" +
                    "•	ÁREA PSICOLÓGICA"
            },
        },
        {
            'geometry': {
                'type': 'Polygon',
                'coordinates': [[[-98.77596796, 20.08394118],
                [-98.77600014, 20.08373965],
                [-98.77558172, 20.08367919],
                [-98.77554953, 20.08388072],
                [-98.77596796, 20.08394118]]]
            },
            'properties': {
                'name': 'Y - Depto. Sistemas y Computación',
                coordenadas: [-98.77520084, 20.08637462],
                "img1": "img/Edificios/Edificio_Y(1).jpeg",
                "img2": "img/Edificios/Edificio_Y(2).jpeg",
                "aulas": "P.  BAJA:*• Y-1*"+
                "• Y-2*"+
                "• Y-3*"+
                "• Y-4*"+
                "• VESTÍBULO Y ESCALERAS*"+
                "• SANITARIO HOMBRES*"+
                "• SANITARIO MUJERES*"+
                "• LABORATORIO DE CÓMPUTO LCR*"+
                "• LABORATORIO DE CÓMPUTO LCA*"+
                "• LABORATORIO DE CÓMPUTO MAC*"+
                " P. ALTA*"+
                "• Y5*"+
                "• Y6*"+
                "• Y7*"+
                "• Y8*"+
                "• Y9*"+
                "• SANITARIO HOMBRES*"+
                "• SANITARIO MUJERES*"+
                "• JEFATURA DEPTO. SISTEMAS Y COMPUTACIÓN*"+
                "• SALA DE JUNTAS*"+
                "• CUBÍCUOS DE PROFESORES*"

            },
        },
        {
            'geometry': {
                'type': 'Polygon',
                'coordinates': [[[-98.77544761, 20.08382026],
                [-98.77546906, 20.08370438],
                [-98.77503991, 20.08364896],
                [-98.77501845, 20.08376484],
                [-98.77544761, 20.08382026]]]
            },
            'properties': {
                'name': 'Edificio C',
                coordenadas: [-98.77520084, 20.08637462],
                "img1": "img/Edificios/Edificio-C.jpeg",
                "img2": "img/Edificios/Edificio-C-2.jpeg",
                "aulas": "P. BAJA:*•C-1*•C-2*•C-3*•C-4*•C-5*•C-6"
            },
        },
        {
            'geometry': {
                'type': 'Polygon',
                'coordinates': [[[-98.77663851, 20.08399156],
                [-98.77663851, 20.08395126],
                [-98.77668142, 20.08395629],
                [-98.77671361, 20.08371446],
                [-98.77667069, 20.08371446],
                [-98.77667069, 20.08362881],
                [-98.77642393, 20.08357843],
                [-98.77638638, 20.08396637]]]
            },
            'properties': {
                'name': 'Gimnasio Miguel Hidalgo',
                coordenadas: [-98.77520084, 20.08637462],
                "img1": "img/Edificios/Gimnasio_Miguel_Hidalgo1.jpeg",
                "img2": "img/Edificios/Gimnasio_Miguel_Hidalgo2.jpeg",
                "aulas": "P. BAJA:*"+
                "•	DUELA DE BASQUETBOL Y VOLEYBOL*"+
                "•	VESTIDOR DE HOMBRES*"+
                "•	VESTIDOR DE MUJERES*"+
                "•	SANITARIO DE HOMBRES*"+
                "•	SANITARIO DE MUJERES*"
            },
        },
        {
            'geometry': {
                'type': 'Polygon',
                'coordinates': [[[-98.77587676, 20.08430393],
                [-98.77591431, 20.08407217],
                [-98.77564609, 20.08402683],
                [-98.77560854, 20.08426866],
                [-98.77587676, 20.08430393]]]
            },
            'properties': {
                'name': 'Centro de Cómputo',
                coordenadas: [-98.77520084, 20.08637462],
                "img1": "img/Edificios/Centro-De-Computo-De-Sistemas.jpeg",
                "img2": "img/Edificios/Centro-De-Computo-De-Sistemas-2.jpeg",
               "aulas": "P. BAJA:*" +
                    "•  JEFATURA CENTRO DE CÓMPUTO*" +
                    "•  SALA DE CONTROL*" +
                    "•  SALA DE USOS MÚLTIPLES*" +
                    "•  SANITARIOS HOMBRES*" +
                    "•  SANITARIOS MUJERES*" +
                    "P. ALTA*" +
                    "•  SANITARIO HOMBRES*" +
                    "•  SANITARIO MUJERES*" +
                    "•  JEFATURA EDUCACIÓN A DISTANCIA*" +
                    "•  LABORATORIO DE CÓMPUTO*" +
                    "•  CUBÍCULOS"
            },
        },
        {
            'geometry': {
                'type': 'Polygon',
                'coordinates': [[[-98.77554953, 20.08408225],
                [-98.77556562, 20.08396637],
                [-98.77541006, 20.08394622],
                [-98.77539396, 20.0840621],
                [-98.77554953, 20.08408225]]]
            },
            'properties': {
                'name': 'Foro Danza/ Música',
                coordenadas: [-98.77520084, 20.08637462],
                "img1": "img/Edificios/Edificio-F.jpeg",
                "img2": "img/Edificios/Edificio-F-2.jpeg",
                "aulas": "Foro Danza y Música"
            },
        },
        {
            'geometry': {
                'type': 'Polygon',
                'coordinates': [[[-98.77551734, 20.08423843],
                [-98.77553344, 20.08412759],
                [-98.77540469, 20.08411248],
                [-98.77539396, 20.08422332],
                [-98.77551734, 20.08423843]]]
            },
            'properties': {
                'name': 'Extraescolares',
                coordenadas: [-98.77520084, 20.08637462],
                "img1": "img/Edificios/Aula-De-Actividades-Extraescolares.jpeg",
                "img2": "img/Edificios/Aula-De-Actividades-Extraescolares-2.jpeg",
                "aulas": "P.  BAJA:*• JEFATURA DEPTO. ACTIVIDADES EXTRAESCOLARES"
            },
        },
        {
            'geometry': {
                'type': 'Polygon',
                'coordinates': [[[-98.77532423, 20.08420317],
                [-98.77536178, 20.08398652],
                [-98.77494872, 20.08392607],
                [-98.77491653, 20.08413767],
                [-98.77532423, 20.08420317]]]
            },
            'properties': {
                'name': 'Edificio U ',
                coordenadas: [-98.77520084, 20.08637462],
                "img1": "img/Edificios/Posgrado.jpeg",
                "img2": "img/Edificios/Posgrado.jpeg",
                 "aulas": "P. BAJA: *" +
                    "AULAS DIDÁCTICAS*" +
                    "•  U-1*" +
                    "•  U-2*" +
                    "•  U-3*" +
                    "•  U-4*" +
                    "•  U-5*" +
                    "•  SANITARIOS DE HOMBRES *" +
                    "•  SANITARIOS DE MUJERES*" +
                    "•  SALA DE TITULACIONES*" +
                    "•  SALA DE JUNTAS*" +
                    "P. ALTA: *" +
                    "•  AULAS DIDÁCTICAS*" +
                    "•  U-6*" +
                    "•  U-7*" +
                    "•  U-8*" +
                    "•  U-9*" +
                    "•  U-10*" +
                    "•  DIVISION DE ESTUDIOS DE POSGRADO *" +
                    "•  COORDINACION DE MAESTRIAS*" +
                    "•  SALA DE JUNTAS*" +
                    "•  CUBICULOS DE MAESTROS*" +
                    "•  JEFATURA DE POSGRADO*" +
                    "•  SANITARIO MUJERES*" +
                    "•  SANITARIO HOMBRES*" 
            },
        },

        /*{
            'geometry': {
                'type': 'Polygon',
                'coordinates': [[[-98.77513647, 20.08384042],
                [-98.77504528, 20.0838253],
                [-98.77506137, 20.083785],
                [-98.77509892, 20.08377996],
                [-98.77513647, 20.08381019],
                [-98.77513647, 20.08384042]]]
            },
            'properties': {
                'name': 'Campana - Titulaciones',
                coordenadas: [-98.77520084, 20.08637462],
                "img1": "img/Edificio_Y(1).jpeg",
                "img2": "img/Edificio_Y(2).jpeg",
                "aulas": "P.  BAJA:*• LABORATORIO DE CÓMPUTO*• LABORATORIO DE FISICOQUÍMICA*• AULAS DIDÁCTICAS"
            },
        },*/
        {
            'geometry': {
                'type': 'Polygon',
                'coordinates': [[[-98.7756139, 20.08442485],
                [-98.77564073, 20.08429385],
                [-98.77539933, 20.08426363],
                [-98.77537787, 20.08439462],
                [-98.7756139, 20.08442485]]]
            },
            'properties': {
                'name': 'Salón Usos Múltiples',
                coordenadas: [-98.77520084, 20.08637462],
                "img1": "img/Edificios/SalondeUsosMultiples.jpeg",
                "img2": "img/Edificios/SalondeUsosMultiples2.jpeg",
                "aulas": "Salón Usos Múltiples"
            },
        },
        {
            'geometry': {
                'type': 'Polygon',
                'coordinates': [[[-98.77623081, 20.08450042],
                [-98.77627909, 20.08424347],
                [-98.77611279, 20.08421324],
                [-98.77605915, 20.08447019],
                [-98.77623081, 20.08450042]]]
            },
            'properties': {
                'name': 'Cancha Futbol No.1',
                coordenadas: [-98.77520084, 20.08637462],
                "img1": "img/Edificios/AreasDeportivasEstAutobuses.jpeg",
                "img2": "img/Edificios/AreasDeportivasEstAutobuses2.jpeg",
                "aulas": "Chanchas destinadas el deportes* Futbol*Baloncesto"
            },
        },
        {
            'geometry': {
                'type': 'Polygon',
                'coordinates': [[[-98.77627909, 20.08420317],
                [-98.77632737, 20.08394118],
                [-98.77615571, 20.08391095],
                [-98.77610743, 20.0841679],
                [-98.77627909, 20.08420317]]]
            },
            'properties': {
                'name': 'Cancha Futbol No.2',
                coordenadas: [-98.77520084, 20.08637462],
                "img1": "img/Edificios/AreasDeportivasEstAutobuses.jpeg",
                "img2": "img/Edificios/AreasDeportivasEstAutobuses2.jpeg",
                "aulas": "Chanchas destinadas el deportes* Futbol*Baloncesto"
            },
        },
        /*{
            'geometry': {
                'type': 'Polygon',
                'coordinates': [[[-98.77513647, 20.08384042],
                [-98.77504528, 20.0838253],
                [-98.77506137, 20.083785],
                [-98.77509892, 20.08377996],
                [-98.77513647, 20.08381019],
                [-98.77513647, 20.08384042]]]
            },
            'properties': {
                'name': 'Campana - Titulaciones',
                coordenadas: [-98.77520084, 20.08637462],
                "img1": "img/Edificio_Y(1).jpeg",
                "img2": "img/Edificio_Y(2).jpeg",
                "aulas": "P.  BAJA:*• LABORATORIO DE CÓMPUTO*• LABORATORIO DE FISICOQUÍMICA*• AULAS DIDÁCTICAS"
            },
        },*/
        {
            'geometry': {
                'type': 'Polygon',
                'coordinates': [[[-98.77513647, 20.08384042],
                [-98.77504528, 20.0838253],
                [-98.77506137, 20.083785],
                [-98.77509892, 20.08377996],
                [-98.77513647, 20.08381019],
                [-98.77513647, 20.08384042]]]
            },
            'properties': {
                'name': 'Campana de Identidad',
                coordenadas: [-98.77520084, 20.08637462],
                "img1": "img/Edificios/Campana-De-Identidad.jpeg",
                "img2": "img/Edificios/Campana-De-Identidad-2.jpeg",
                "aulas": "Ceremonia de Titulación de los*estudiantes egresados del*INSTITUTO TECNOLÓGICO DE PACHUCA"
            },
        },
        {
            'geometry': {
                'type': 'Polygon',
                'coordinates': [[[-98.77655268, 20.0845508],
                [-98.77663314, 20.08403691],
                [-98.77634883, 20.0839966],
                [-98.776263, 20.08450042],
                [-98.77655268, 20.0845508]]]
            },
            'properties': {
                'name': 'Estacionamiento Autobuses',
                coordenadas: [-98.77520084, 20.08637462],
                "img1": "img/Edificios/AreasDeportivasEstAutobuses.jpeg",
                "img2": "img/Edificios/AreasDeportivasEstAutobuses2.jpeg",
                "aulas": "Espacio destinado para estacionar los autobuses oficiales del ITP y visitantes."
            },
        }
    ]
};

// Make a point feature for displaying the text;
// User turf library to find the centroid of the polygon
var centroidPt = turf.centroid(feature);

map.on('load', function () {
    // Add the feature source
    map.addSource('Edificio', {
        'type': 'geojson',
        'data': feature
    });

    // Add the label point source
    map.addSource('label', {
        'type': 'geojson',
        'data': centroidPt
    });

    // Add the feature style
    map.addLayer({
        'id': 'estructuraedificios',
        'type': 'fill',
        'source': 'Edificio',
        'layout': {},
        'paint': {
            'fill-color': '#0D9AB4',
            "fill-opacity": ["case",
                ["boolean", ["feature-state", "hover"], false],
                1,
                0.5
            ]
        }
    });

    map.addLayer({
        'id': 'estructuraedificios_hover',
        'type': 'fill',
        'source': 'Edificio',
        'layout': {},
        'paint': {
            'fill-color': '#0281C1'
        },
        "filter": ["==", "name", ""]
    });

    map.addLayer({
        "id": "state-borders",
        "type": "line",
        "source": "Edificio",
        "layout": {},
        "paint": {
            "line-color": "#0CC7E8",
            "line-width": 2
        }
    });
    // Add the label style
    map.addLayer({
        'id': 'label-style',
        'type': 'symbol',
        'source': 'Edificio',
        'layout': {
            'text-field': "{name}",
            "text-font": [
                "DIN Offc Pro Medium",
                "Arial Unicode MS Bold"
            ],
            "text-size": 12
        },
        'paint': {
            'text-color': 'black'
        }
    });

});

map.on("mousemove", "estructuraedificios", function (e) {
    map.getCanvas().style.cursor = 'pointer';
    map.setFilter("estructuraedificios_hover", ["==", "name", e.features[0].properties.name]);
});

// Reset the state-fills-hover layer's filter when the mouse leaves the layer.
map.on("mouseleave", "estructuraedificios", function () {
    map.getCanvas().style.cursor = '';
    map.setFilter("estructuraedificios_hover", ["==", "name", ""]);
});
//Funciones interactivas
function flyTo(currentFeature) {
    map.flyTo({
        center: currentFeature,
        zoom: 19
    });
}


map.on('click', 'estructuraedificios', function (e) {
    var coord = e.features[0].properties.coordenadas // La salida del Dato es de Tipo String 
    var coordenadas = JSON.parse(coord);// Hacemos un Parseo para obtener un tipo de dato 'object'
    var fly = coordenadas;
    //flyTo(fly)
    // alert(typeof obj)
    //NuevoPopUp(fly);
    document.getElementById('Titulo').innerHTML = e.features[0].properties.name;
    document.getElementById("img1").src = e.features[0].properties.img1;
    document.getElementById('img2').src = e.features[0].properties.img2;
    var inf = [] // Creamos un arreglo vacio
    for (i = 0; i < e.features[0].properties.aulas.length; i++) { //Recorremos el String del JSON
        //document.getElementById('aulas').innerHTML = (e.features[0].properties.aulas.charAt(i)).split('*')
        inf.push(e.features[0].properties.aulas.charAt(i).replace('*', '<br />')) // recorremos cada caracter y si encontramos un * lo reemplazamos por un <br /> html
    }
    document.getElementById('aulas').innerHTML = inf.join("") // Como obtenemos de salida un array de carácteres utilizamos join("") para unirlo ya con el formato

    abrirInformacion();
    // 3. Highlight listing in sidebar (and remove highlight for all other listings)
    var activeItem = document.getElementsByClassName('active');
    e.stopPropagation();
    if (activeItem[0]) {
        activeItem[0].classList.remove('active');
    }
    var listing = document.getElementById('listing-' + i);
    console.log(listing);
    listing.classList.add('active');
});


function abrirInformacion() {
    document.getElementById("Lanzar").click();
}

/* Geocoder*/

var customData = {
    "features": [
        {
            "type": "Feature",
            "properties": {
                "title": "Edificio Y",
                "description": "Ingeniería en Sistemas Computacionales e Ingeniería en Tecnológias de la Información"
            },
            "geometry": {
                "coordinates": [
                    -98.7757828831673,
                    20.083810186521287
                ],
                "type": "Point"
            }
        },
        {
            "type": "Feature",
            "properties": {
                "title": "Aulas E",
                "description": "Texto"
            },
            "geometry": {
                "coordinates": [-98.77517273, 20.08226704],
                "type": "Point"
            }
        }
    ],
    "type": "FeatureCollection"
};

function forwardGeocoder(query) {
    var matchingFeatures = [];
    for (var i = 0; i < edificios.features.length; i++) {
        var feature = edificios.features[i];
        // handle queries with different capitalization than the source data by calling toLowerCase()
        if (feature.properties.Edificio.toLowerCase().search(query.toLowerCase()) !== -1) {
            // add a tree emoji as a prefix for custom data results
            // using carmen geojson format: https://github.com/mapbox/carmen/blob/master/carmen-geojson.md
            feature['place_name'] = ' 🏢 ' + feature.properties.Edificio;
            feature['center'] = feature.geometry.coordinates;
            feature['place_type'] = ['Edificio'];
            matchingFeatures.push(feature);
        }
    }
    return matchingFeatures;
}

map.addControl(new MapboxGeocoder({
    accessToken: mapboxgl.accessToken,
    localGeocoder: forwardGeocoder,
    zoom: 19,
    placeholder: "Busca un Edificio",
    mapboxgl: mapboxgl,//Ponemos Icono
    bbox: [-98.77887010574342, 20.080258204795115, -98.77084493637086, 20.08892389115445],// Limites
    proximity: {
        longitude: -98.774804,
        latitude: 20.084102
    } // Limitamos el Espacio a solo las Locaciones cercanas al ITP
}), 'top-right');
var directions = new MapboxDirections({
    accessToken: mapboxgl.accessToken,
    unit: 'metric',
    profile: 'mapbox/walking',
    alternatives: false,
    language: 'es',
    steps: true,
    geocoder: {
        language: 'es'
    }
});

//map.addControl(directions, 'top-left');
function cerrar_navegacion() {
    alert("Ha dejado de navegar");
    document.getElementById("activar").disabled = false;
    document.getElementById("desactivar").disabled = true;
    map.removeControl(directions, 'top-left');
    //var audio = document.getElementById("audio");
    //audio.pause();
    //audio.currentTime = 0;
}
var geocoder = new MapboxGeocoder({
    accessToken: mapboxgl.accessToken,
    localGeocoder: forwardGeocoder,
    zoom: 19,
    placeholder: "Busca un Edificio",
    //mapboxgl: mapboxgl,//Ponemos Icono
    bbox: [-98.77887010574342, 20.080258204795115, -98.77084493637086, 20.08892389115445],// Limites
    proximity: {
        longitude: -98.774804,
        latitude: 20.084102
    }
}, 'top-right');
function abrir_navegacion() {
    alert("Ahora puede navegar, seleccione un ORIGEN y un DESTINO");
    document.getElementById("activar").disabled = true;
    document.getElementById("desactivar").disabled = false;
    document.getElementById('geocoder').appendChild(directions.onAdd(map));
    //var audio = document.getElementById("audio");
    //audio.play();
}


map.addControl(new mapboxgl.NavigationControl());
//map.addControl(new mapboxgl.FullscreenControl());
map.on('click', function (e) {
    CerrarLaterar();
});



/// Barra lateral

function AbrirLateralEdificios() {
    buildLocationList(edificios, "Edificios")
    var style = document.createElement('style');
    style.innerHTML = `
        #map {
            transition-duration:1s;
            left:25%;
            width:75%;
        }
        #informacion{
            display:block;
            transition-duration:1s;
        }
        `;
    document.head.appendChild(style);
}
function AbrirLateralDepartamentos() {
    buildLocationList(edificios, "Departamentos")
    var style = document.createElement('style');
    style.innerHTML = `
        #map {
            transition-duration:1s;
            left:25%;
            width:75%;
        }
        #informacion{
            display:block;
            transition-duration:1s;
        }
        `;
    document.head.appendChild(style);
}
function AbrirLateralLaboratorios() {
    buildLocationList(edificios, "Laboratorios")
    var style = document.createElement('style');
    style.innerHTML = `
        #map {
            transition-duration:1s;
            left:25%;
            width:75%;
        }
        #informacion{
            display:block;
            transition-duration:1s;
        }
        `;
    document.head.appendChild(style);
}
function AbrirLateralDeportivas() {
    buildLocationList(edificios, "Areas Deportivas")
    var style = document.createElement('style');
    style.innerHTML = `
        #map {
            transition-duration:1s;
            left:25%;
            width:75%;
        }
        #informacion{
            display:block;
            transition-duration:1s;
        }
        `;
    document.head.appendChild(style);
}
function AbrirLateralDidacticos() {
    buildLocationList(edificios, "Centros Didacticos")
    var style = document.createElement('style');
    style.innerHTML = `
        #map {
            transition-duration:1s;
            left:25%;
            width:75%;
        }
        #informacion{
            display:block;
            transition-duration:1s;
        }
        `;
    document.head.appendChild(style);
}

function AbrirLateralGimnasios() {
    buildLocationList(edificios, "Gimnasios")
    var style = document.createElement('style');
    style.innerHTML = `
        #map {
            transition-duration:1s;
            left:25%;
            width:75%;
        }
        #informacion{
            display:block;
            transition-duration:1s;
        }
        `;
    document.head.appendChild(style);
}

function AbrirLateralCultural() {
    buildLocationList(edificios, "Area Cultural")
    var style = document.createElement('style');
    style.innerHTML = `
        #map {
            transition-duration:1s;
            left:25%;
            width:75%;
        }
        #informacion{
            display:block;
            transition-duration:1s;
        }
        `;
    document.head.appendChild(style);
}

function AbrirLateralEstacionamientos() {
    buildLocationList(edificios, "Estacionamientos")
    var style = document.createElement('style');
    style.innerHTML = `
        #map {
            transition-duration:1s;
            left:25%;
            width:75%;
        }
        #informacion{
            display:block;
            transition-duration:1s;
        }
        `;
    document.head.appendChild(style);
}

function AbrirLateralAlimentos() {
    buildLocationList(edificios, "Area de Alimentos")
    var style = document.createElement('style');
    style.innerHTML = `
        #map {
            transition-duration:1s;
            left:25%;
            width:75%;
        }
        #informacion{
            display:block;
            transition-duration:1s;
        }
        `;
    document.head.appendChild(style);
}


// Geolocalización ////
map.addControl(new mapboxgl.GeolocateControl({
    positionOptions: {
        enableHighAccuracy: true
    },
    trackUserLocation: true
}));

// Fondo 
