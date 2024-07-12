import { heroes } from '../data/heroes';

/**
 * 
 * @param {HTMLDivElement} element 
 */

export const asyncComponent = (element) => {
    const id1 = '5d86371f2343e37870b91ef1';
    // console.log(findHero( id1 ));
    console.log('Inicio de componente');
    findHero( id1 ) //funcion asyncrona no sigue el hilo principal
        .then(name => element.innerHTML = name )
        // .then(console.log )
        .catch(error => element.innerHTML = error )

    console.log('Fin del componente');
}


/**
 * 
 * @param {String} id
 * @returns {Promise<String>}
 */
const findHero = async( id ) => { // retorna en ves de un objeto una promesa - transforma la funcion
    const hero = heroes.find( hero => hero.id === id );
    if( !hero )
        throw `Hero with id ${ id } not found`;
    return hero.name;
}

// es equivalente a 
// const findHeroPromise = () => new Promise( resolve => {
//     const hero = heroes.find( hero => hero.id === id );
//     resolve(hero);
// });