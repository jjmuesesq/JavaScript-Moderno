let a = 10;
if ( a >= 10 ) { // siempre recibe un booleano. no undefined, null, una asignacion
    console.log('A es mayor o igual a 10');
} else {
    console.log('A es menor a 10');
}

//console.log('Fin de programa');

const hoy = new Date(); //{}
let dia = hoy.getDay(); // 0:domingo, 1: lunes, ...
console.log({ dia });

if ( dia === 0 ) {
    console.log('Domingo');
} else if ( dia === 1 ) {
    console.log('Lunes');
} else if ( dia === 2 ) {
    console.log('Martes');
} else {
    console.log('No es lunes, martes o domingo...');
}

// sin usar if o switch, unicamente objetos
dia = 6;
const diasLetras = {
    0: 'domingo',
    1: 'lunes',
    2: 'martes',
    3: 'miércoles',
    4: 'jueves',
    5: 'viernes',
    6: 'sábado',
}

const diasLetras2 = ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sabado',];
console.log( diasLetras[dia] || 'Día no definido');
console.log( diasLetras2[dia] || 'Día no definido');