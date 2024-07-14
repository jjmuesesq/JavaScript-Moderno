// nadie pueda manipular el store

import { loadUsersByPage } from "../use-cases/load-users-by-page";

const state = {
    currentPage: 0,
    users: [],
}

// cargar la siguiente pagina
const loadNextPage = async() => {
    await loadUsersByPage( state.currentPage + 1 );
}

// cargar la pagina previa
const loadPreviousPage = async() => {
    throw new Error('No implementado');
}

// informacion cuando un usuario cambia
const onUserChanged = async() => {
    throw new Error('No implementado');
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
    getUser: () => [...state.users],// objetos pasan por referencia
    getCurrentPage: () => state.currentPage, // primitivos pasan por valor
}
