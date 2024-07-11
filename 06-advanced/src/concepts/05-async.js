import { heroes } from '../data/heroes';

/**
 * 
 * @param {HTMLDivElement} element 
 */

export const asyncComponent = (element) => {
    const id1 = '5d86371f2343e37870b91ef1';
    // console.log(findHero( id1 ));
    findHero( id1 )
        .then((name) => element.innerHTML = name )
        .catch(error => element.innerHTML = error )
}


/**
 * 
 * @param {String} id
 * @returns {Promise<String>}
 */
const findHero = async( id ) => { // retorna en ves de un objeto una promesa - transforma la funcion
    const hero = heroes.find( hero => hero.id === id );
    return hero.name;
}

// es equivalente a 
// const findHeroPromise = () => new Promise( resolve => {
//     const hero = heroes.find( hero => hero.id === id );
//     resolve(hero);
// });