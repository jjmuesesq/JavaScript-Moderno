// forma tradicional 
function saludar() {
    console.log('Hola mundo');
    return 10;
    // Esto nunca se va a ejecutar
    console.log('Soy un codigo que esta despues del return');
}

// forma anonima
const saludar2 = function() {
    console.log('Hola mundo 2');
    return [1,2];
}

// funcion con argumento
function saludar3( nombre ) {
    console.log( arguments );
    console.log('Hola ' + nombre);
}

const saludar4 = function( nombre ) {
    console.log('Hola: ' + nombre);
}

// funcion flecha
const saludar5 = () => {
    console.log('Hola flecha');
}
const saludar6 = ( nombre ) => {
    console.log('Hola: ' + nombre);
}

saludar();
const retornoSaludar = saludar();
console.log({ retornoSaludar });
const retornoSaludar2 = saludar2();
console.log( retornoSaludar2[0], retornoSaludar2[1] );
saludar3('Jhon', 34, false, 'Colombia');
saludar4('Jairo');
saludar5();
saludar6('Rosy');

const sumar = (a, b) => {
    return a + b;
}
console.log( sumar(1, 2) );

const sumar2 = (a, b) => a + b;
console.log( sumar2(1, 6) );

function getAleatorio(){
    return Math.random();
}
console.log( getAleatorio() );

//Transformar en funcion de flecha getAleatorio
const getAleatorio2 = () => Math.random();
console.log( getAleatorio2() );