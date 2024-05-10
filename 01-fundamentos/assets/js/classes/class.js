class Persona {
    //inicializacion propiedades de una clase
    static _conteo = 0;
    static get conteo(){
        return Persona._conteo + ' instancias';
    }
    static mensaje(){
        console.log( this.nombre ); //undefined
        console.log('Hola a todos, soy un método stático');
    }

    nombre = '';
    codigo = '';
    frase  = '';
    comida = '';

    constructor( nombre = 'Sin nombre', codigo = 'Sin codigo', frase = 'Sin frase' ) {
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase  = frase;

        Persona._conteo++;
    }

    set setComidafavorita( comida ){
        this.comida = comida.toUpperCase();
    }
    get getComidaFavorita(){
        return `La comida favorita de ${ this.nombre } es ${this.comida}`
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

// console.log( ironman );

// spiderman.quienSoy();
// ironman.quienSoy();
spiderman.miFrase();
// ironman.miFrase();

spiderman.setComidafavorita = 'El pie de cereza de la tía May';
// console.log( spiderman.getComidaFavorita );
// console.log( spiderman );

Persona._conteo = 2;
console.log('Conteo estático ', Persona._conteo);
console.log( Persona.conteo );
Persona.mensaje();

// definir propiedades estaticas fuera de la clase
Persona.propiedadExterna = 'Hola Mundo';
console.log( Persona.propiedadExterna );
console.log( Persona );