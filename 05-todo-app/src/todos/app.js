import html from './app.html?raw' 

/**
 * 
 * @param {String} elmentId 
 */

export const App = ( elmentId ) => {
    //Funcion anonima autoinvocada. Cuando la función App se llama. elemento donde voy a renderizar la aplicacion
    (()=>{
        const app = document.createElement('div');
        app.innerHTML = html;
        document.querySelector(elmentId).append( app );
    })();

}