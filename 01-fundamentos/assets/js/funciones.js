// forma tradicional 
function saludar() {
    console.log('Hola mundo');
}

// forma anonima
const saludar2 = function() {
    console.log('Hola mundo 2');
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
saludar();
saludar2();
saludar3('Jhon', 34, false, 'Colombia');
saludar4('Jairo');
saludar5();
saludar6('Rosy');