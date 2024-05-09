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
    quienSoy(){
        console.log(`Soy ${ this.nombre } y mi identidad es ${ this.codigo }`);
    }
    miFrase(){
        this.quienSoy();
        console.log(`${ this.codigo } dice: ${ this.frase }`);
    } 
}

const spiderman = new Persona('Peter parker', 'Spiderman', 'Soy tu amigable vecino Spyderman');
const ironman = new Persona('Tony Stark', 'Ironman', 'Yo soy Ironman');
console.log( spiderman );
console.log( ironman );

spiderman.quienSoy();
ironman.quienSoy();
spiderman.miFrase();
ironman.miFrase();