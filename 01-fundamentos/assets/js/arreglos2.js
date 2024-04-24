let juegos = ['Zelda', 'Mario', 'Metroid', 'Chrono'];
console.log('Largo: ', juegos.length);

let primero = juegos[ 2 - 2 ];
let ultimo = juegos[ juegos.length - 1];
console.log({ primero, ultimo });

// iterar sobre los arreglos
juegos.forEach((elemento, indice, arr)=>{
    console.log({elemento, indice, arr});
});

// agregar un elemento al final del arreglo
let nuevaLongitud = juegos.push('F-Zero');
console.log({ nuevaLongitud, juegos });

// agregar elemento al inicio del arreglo
nuevaLongitud = juegos.unshift('Fire Emblem');
console.log({ nuevaLongitud, juegos });

// eliminar el ultimo elemento del arreglo
let juegoBorrado = juegos.pop();
console.log({ juegoBorrado, juegos });

// eliminar elementos a partir de un indice
let pos = 1;
console.log(juegos);
let juegosBorrados = juegos.splice(pos, 2);
console.log({ juegosBorrados, juegos });

//obtener el indice de un elemento
let metroIndex = juegos.indexOf('metroid'); //case Sensitive
console.log( metroIndex ); // cuando regresa -1 es porque no lo encontro
