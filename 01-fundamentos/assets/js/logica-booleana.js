const regresaTrue = () => {
    console.log('Regresa true');
    return true;
}
const regresaFalse = () => {
    console.log('Regresa false');
    return false;
}

console.warn('Not o la negación');
console.log( true );
console.log( !true ); // false
console.log( !false ); // true

console.log( !regresaFalse() ); // true

console.warn('And'); //true si todos los valores son verdaderos
console.log( true && true );
console.log( true && !false );

console.log('======================================');
console.log( regresaFalse() && regresaTrue() );
console.log( regresaTrue() && regresaFalse() );
console.log('4 condiciones', true && true && true && false);

console.warn('OR'); //true si algino de los valores son verdaderos
console.log( true || false );
console.log( false || false );
console.log( regresaTrue() || regresaFalse() );
console.log('4 condiciones', true || true || true || false);

console.warn('Asignaciones');
const soyundefined = undefined;
const soyNull = null;
const soyFalso = false;

const a1 = false && 'hola mundo' && 150;
const a2 = 'hola' && 'mundo' && soyFalso;
const a3 = soyFalso || 'ya no soy falso';
const a4 = soyFalso || soyundefined || soyNull || 'ya no soy falso de nuevo' || true;
const a5 = soyFalso || soyundefined || regresaTrue() || 'ya no soy falso de nuevo' || true;
console.log({ a1, a2, a3, a4, a5 });