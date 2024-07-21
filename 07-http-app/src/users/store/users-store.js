// nadie pueda manipular el store

import { loadUsersByPage } from "../use-cases/load-users-by-page";

const state = {
    currentPage: 0,
    users: [],
}

// cargar la siguiente pagina
const loadNextPage = async() => {
    const users = await loadUsersByPage( state.currentPage + 1 );
    if(users.length === 0 ) return;
    state.currentPage += 1;
    state.users =  users;
}

// cargar la pagina previa
const loadPreviousPage = async() => {
    if(state.currentPage ===1 ) return;
    const users = await loadUsersByPage( state.currentPage - 1 );
    state.users =  users;
    state.currentPage -= 1; //actualizo el state
}

// informacion cuando un usuario cambia
/**
 * 
 * @param {User} updatedUser 
 */
const onUserChanged = async( updatedUser ) => {
    //actualizar objeto de usuarios en nuestro estado
    let wasFound = false;
    state.users = state.users.map( user => {
        if (user.id === updatedUser.id ) {
            wasFound = true;
            return updatedUser;
        }
        return user;
    });

    if ( state.users.length < 10 && !wasFound ) {
        state.users.push( updatedUser );
    }
}

// recargar la pagina actual
const reloadPage = async() => {
    throw new Error('No implementado');
}

export default {
    loadNextPage,
    loadPreviousPage,
    onUserChanged,
    reloadPage,

    //acceso por fuera del store a la pagina actual y usuarios
    /**
     * 
     * @returns {User[]}
     */
    getUsers: () => [...state.users],// objetos pasan por referencia

    /**
     * 
     * @returns {Number}
     */
    getCurrentPage: () => state.currentPage, // primitivos pasan por valor
}
