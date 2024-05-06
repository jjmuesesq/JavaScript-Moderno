// Patron modulo
// funcion anonima, autoinvocadas.

(() => {
    'use strict'
    let deck         = [];
    const tipos      = ['C', 'D', 'H', 'S'],
          especiales = ['A', 'J', 'Q', 'K'];
    let puntosJugadores = [];

    //Referencias del HTML
    const btnPedir = document.querySelector('#btnPedir'),
          btnDetener = document.querySelector('#btnDetener'),
          btnNuevo = document.querySelector('#btnNuevo');
    const divCartasJugadores = document.querySelectorAll('.divCartas'),
          puntosHTML = document.querySelectorAll('small');

    // Esta función inicializa el juego
    const inicializarJuego = ( numJugadores = 2 )  => {
        deck = crearDeck();
        for ( let i = 0; i < numJugadores; i++ ) {
            puntosJugadores.push(0);
        }
    }

    // Esta función crea una nueva baraja
    const crearDeck = () => {
        deck = [];
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
        return _.shuffle( deck);
    }

    // Esta funcion me permite tomar una carta
    const pedirCarta = () => {
        if ( deck.length === 0) {
            throw 'No hay cartas en el deck';
        }
        return deck.pop();
    }

    //valor carta
    const valorCarta = ( carta ) => {
        const valor = carta.substring(0, carta.length - 1);
        return ( isNaN( valor ) ) ?
                ( valor === 'A' ) ? 11 : 10
                : valor * 1;
    }

    // Turno: 0 = primer jugador y el ultimo será la computadora
    const acumularPuntos = ( carta, turno ) => {
        puntosJugadores[turno] = puntosJugadores[turno] + valorCarta( carta );
        puntosHTML[turno].innerText = puntosJugadores[turno];
        return puntosJugadores[turno];
    }

    const crearCarta = (carta, turno ) => {
        const imgCarta = document.createElement('img');
        imgCarta.src = `assets/cartas/${ carta }.png`;
        imgCarta.classList.add('carta');
        divCartasJugadores[turno].append( imgCarta);
    }

    //turno de la computadora
    const turnoComputadora = ( puntosMinimos ) => {
        let puntosComputadora = 0;
        do {
            const carta = pedirCarta();
            puntosComputadora = acumularPuntos(carta, puntosJugadores.length - 1);
            crearCarta( carta, puntosJugadores.length - 1);
            // const imgCarta = document.createElement('img');
            // imgCarta.src = `assets/cartas/${ carta }.png`;
            // imgCarta.classList.add('carta');
            // divCartasComputadora.append( imgCarta );

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
        const puntosJugador = acumularPuntos(carta, 0);
        crearCarta( carta, 0);

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
        inicializarJuego();
        // deck = [];
        // deck = crearDeck();

        // puntosJugador     = 0;
        // puntosComputadora = 0;

        // puntosHTML[0].innerText = 0;
        // puntosHTML[1].innerText = 0;

        // divCartasComputadora.innerHTML = '';
        // divCartasJugador.innerHTML = '';

        // btnPedir.disabled   = false;
        // btnDetener.disabled = false;
    });
})();

// (function() {

// })()

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
