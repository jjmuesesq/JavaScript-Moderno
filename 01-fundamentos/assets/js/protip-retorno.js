// function crearPersona(nombre, apellido){
//     return {
//         nombre,
//         apellido
//     }
// }

// funcion de flecha, se utiliza el retorno de un objeto entre parentesis
const crearPersona = ( nombre, apellido ) => ({ nombre, apellido });

const persona = crearPersona( 'Jhon', 'Mueses');
console.log( persona );

function imprimeArgumentos(){
    console.log( arguments );
}

imprimeArgumentos(10, true, false, 'Jhon', 'hola');

const imprimeArgumentos2 = ( edad, ...args) => {
    //console.log({ edad, args });
    return args;
}

//const argumentos = imprimeArgumentos2(10, true, false, 'Jhon', 'hola');
//console.log({ argumentos });

const [ casado, vivo, nombre, saludo ] = imprimeArgumentos2(10, true, false, 'Jhon', 'hola');
console.log({ casado, vivo, nombre, saludo});

const { apellido: nuevoApellido } = crearPersona( 'Jhon', 'Mueses');
console.log({ nuevoApellido });

const tony = {
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    edad: 40,
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
};

// const imprimePropiedades = (personaje) => {
//     console.log( personaje.nombre );
//     console.log( personaje.codeName );
//     console.log( personaje.vivo );
//     console.log( personaje.edad );
//     console.log( personaje.trajes );
// }

//desestructuracion de argumentos

const imprimePropiedades = ({ nombre, codeName, vivo, edad=15, trajes }) => {
    console.log({ nombre });
    console.log({ codeName });
    console.log({ vivo });
    console.log({ edad });
    console.log({ trajes });
}

imprimePropiedades(tony);