// console.log(console.log('Hola mundo'));

// VARIABLES

let a = 10,
    b = 20,
    c = 'Hola ',
    d = 'Spiderman',
    x = a + b;
const saludo = c + d;
console.log('%c Mis variables', 'color:blue; font-weight:bold');
console.log( x );
console.warn( x );
console.error( x );
console.info( x );

console.log( 'a', a );
console.log( 'b', b );
console.log( 'c', c );

console.log( {a} );
console.log( {b} );
console.log( {c} );

console.table({a, b, c, d, x})

//var b = 10; // forma antigua de crear variables
// const c = 10;

// c = 24; // no se puede hacer
// a = 20; 
// b = 30;


// VERSIONES DE JAVA SCRIPT
// 1996 live script a javascript (standar)
// 1997 ES1 ECMAScript 1
// 2009 ES5 ECMAScript 5 nuevas caracteristicas -> soporta en todos los navegadores web
// 2015 ES6 ECMAScript 2015 actualización mas grande hasta el momento -> soporta la mayoria de navegadores modernos pero no todos los navegadores web

// polyfill -> codigo que provee funcionamiento de una nueva caracteristica de JavaScript ES6 en versiones viejas como ES5