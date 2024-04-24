const personaje = {
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    edad: 40,
    coords: {
        lat: 34.034,
        lng: -118.70
    },
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
    direccion: {
        zip: '10880, 90265',
        ubicacion: 'Malibu, California'
    },
    'ultima-pelicula': 'Infinity War'
};

console.log( personaje );
console.log( 'Nombre ', personaje.nombre );
console.log( 'Nombre ', personaje['nombre'] );
console.log( 'Edad ', personaje.edad );
console.log( 'Coors ', personaje.coords );
console.log( 'Lat ', personaje.coords.lat );

console.log( 'No. Trajes ', personaje.trajes.length);
console.log( 'ultimo traje ', personaje.trajes[personaje.trajes.length - 1 ]);

const x = 'vivo'
console.log('Vivo', personaje[x]);
console.log('ultima pelicula ', personaje["ultima-pelicula"]);


// mas detalles
// eliminar propiedad
delete personaje.edad;
console.log( personaje );

//crear nueva propiedad en el objeto
personaje.casado = true;

//establece las propiedades como elementos de un array
const entriesPares = Object.entries( personaje );
console.log( entriesPares );

// personaje = true;
Object.freeze( personaje );

personaje.dinero = 1000000000;
personaje.casado = false; // no se puede modificar
personaje.direccion.ubicacion = 'costa Rica'; // si se puede modificar cuando son objetos y no se asigna el freeze
console.log(personaje);

//listar las propiedades
const propiedades = Object.getOwnPropertyNames(personaje);
const valores = Object.values(personaje);
console.log(propiedades, valores);