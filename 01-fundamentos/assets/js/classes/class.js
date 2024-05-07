class Persona {
    //inicializacion propiedades de una clase
    nombre = '';
    codigo = '';
    frase  = '';

    constructor( nombre = 'Sin nombre', codigo = 'Sin codigo', frase = 'Sin frase' ) {
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase  = frase;
    }
}

const spiderman = new Persona('Peter parker', 'Spider', 'Soy tu amigable vecino Spyderman');
const ironman = new Persona('Tony Stark', 'Ironman', 'Yo soy Ironman');
console.log( spiderman );
console.log( ironman );