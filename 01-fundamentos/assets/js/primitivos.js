let nombre = 'Peter Parker';
console.log( nombre );

nombre = 'Ben Parker';
console.log( nombre );

nombre = "Tia May";
nombre = `Tia May`;
console.log( typeof nombre );

nombre = 123;
console.log( typeof nombre );

let esMarvel = false;
console.log( typeof esMarvel );

let edad = 34;
console.log( typeof edad );
edad = 34.001; // para javascript es lo mismo un number ya sea decimal o entero
console.log( typeof edad );

//camelCase
let superPoder;
console.log( superPoder );

//snike_case
let super_poder = null;
console.log( typeof super_poder );

// crear identificadores unicos
let symbol1 = Symbol('a');
let symbol2 = Symbol('a');
console.log( typeof symbol1 );

console.log( symbol1 === symbol2 );