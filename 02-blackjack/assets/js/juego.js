/**
 * 2C = Two of Clubs
 * 2D = Two of Diaminds
 * 2H = Two of Hearts
 * 2S = Two of Spades
 */

let deck         = [];
const tipos      = ['C', 'D', 'H', 'S'];
const especiales = ['A', 'J', 'Q', 'K'];
let puntosJugador = 0;
let puntosComputadora = 0;

//Referencias del HTML
const btnPedir = document.querySelector('#btnPedir');
const btnDetener = document.querySelector('#btnDetener');
const btnNuevo = document.querySelector('#btnNuevo');
const divCartasJugador = document.querySelector('#jugador-cartas');
const divCartasComputadora = document.querySelector('#computadora-cartas');
const puntosHTML = document.querySelectorAll('small');


// Esta función crea una nueva baraja
const crearDeck = () => {
    for( let i = 2; i <= 10; i++ ){
        for( let tipo of tipos){
            deck.push( i + tipo )
        }
    }
    for( let tipo of tipos ){
        for( let esp of especiales){
            deck.push( esp + tipo )
        }
    }
    //console.log( deck );
    deck = _.shuffle( deck);
    console.log( deck );
    return deck;
}

crearDeck();

// Esta funcion me permite tomar una carta
const pedirCarta = () => {
    if ( deck.length === 0) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}

// pedirCarta();

//valor carta
const valorCarta = ( carta ) => {
    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN( valor ) ) ?
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;
}

//turno de la computadora
const turnoComputadora = ( puntosMinimos ) => {
    do {
        const carta = pedirCarta();
        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML[1].innerText = puntosComputadora;
        const imgCarta = document.createElement('img');
        imgCarta.src = `assets/cartas/${ carta }.png`;
        imgCarta.classList.add('carta');
        divCartasComputadora.append( imgCarta );

        if( puntosMinimos > 21) {
            break;
        }
    } while (( puntosComputadora < puntosMinimos ) && ( puntosMinimos <= 21 ) );

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana');
        } else if ( puntosComputadora > 21 ) {
            alert('Jugador gana');
        } else {
            alert('Computadora gana');
        }
    }, 10);
}

// Eventos
btnPedir.addEventListener('click', () => {
    const carta = pedirCarta();
    puntosJugador = puntosJugador + valorCarta( carta );
    puntosHTML[0].innerText = puntosJugador;
    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${ carta }.png`;
    imgCarta.classList.add('carta');
    divCartasJugador.append( imgCarta );

    if( puntosJugador > 21 ){
        console.warn('Lo siento mucho, perdiste');
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora( puntosJugador );
    } else if ( puntosJugador === 21 ) {
        console.warn('21, genial!');
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora( puntosJugador );
    }
});

btnDetener.addEventListener( 'click', () => {
    btnPedir.disabled = true;
    btnDetener.disabled = true;
    turnoComputadora(puntosJugador);
});

btnNuevo.addEventListener( 'click', () => {
    console.clear();
    deck = [];
    deck = crearDeck();

    puntosJugador     = 0;
    puntosComputadora = 0;

    puntosHTML[0].innerText = 0;
    puntosHTML[1].innerText = 0;

    divCartasComputadora.innerHTML = '';
    divCartasJugador.innerHTML = '';

    btnPedir.disabled   = false;
    btnDetener.disabled = false;
});

// console.log(16);
// turnoComputadora(16);


// const valor = valorCarta(pedirCarta());


// document.querySelector('#computadora-cartas');
// document.getElementById('computadora-cartas');
// document.querySelector('small').innerHTML= '<b>Hola mundo</>'
// document.querySelector('small').innerText = 10
// document.querySelector('.carta');
// document.querySelectorAll('.carta');
// document.getElementsByClassName('carta');
// document.querySelector('header').innerText = 'Jhon';
// const titulo = document.querySelector('.titulo');
// titulo.innerText = 'Hola mundo';

// const divBotones = document.querySelector('#divBotones');
// document.createElement('button');
// const botonNuevo = document.createElement('button');
// divBotones.append( botonNuevo );
// botonNuevo.innerText = 'Destruir el mundo';
// botonNuevo.classList.add('btn-success');
// const input = document.createElement('input');
// document.body.append( input );
// input.classList.add('form-control');
// input.placeholder = 'Hola mundo';
