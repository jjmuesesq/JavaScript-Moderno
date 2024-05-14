/**
 * Esta función obtiene el valor de una carta
 * @param {String} carta Ejemplo: '2C'
 * @returns {Number} retorna el valor, Ejemplo: 2
 */

export const valorCarta = ( carta ) => {
    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;
}