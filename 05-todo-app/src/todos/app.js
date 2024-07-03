import todoStore from '../store/todo.store';
import html from './app.html?raw' 
import { renderTodos } from './use-cases';

const ElementIDs = {
    TodoList: '.todo-list',
}

/**
 * 
 * @param {String} elmentId 
 */

export const App = ( elmentId ) => {

    const displayTodos = () => {
        const todos = todoStore.getTodos( todoStore.getCurrentFilter() );
        // console.log(todos);
        renderTodos( ElementIDs.TodoList, todos );
        
    }
    //Funcion anonima autoinvocada. Cuando la función App se llama. elemento donde voy a renderizar la aplicacion
    (()=>{
        const app = document.createElement('div');
        app.innerHTML = html;
        document.querySelector(elmentId).append( app );
        displayTodos();
    })();

}