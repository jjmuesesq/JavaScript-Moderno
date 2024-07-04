import todoStore from '../store/todo.store';
import html from './app.html?raw' 
import { renderTodos } from './use-cases';

const ElementIDs = {
    TodoList: '.todo-list',
    NewTodoInput: '#new-todo-input',
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

    //Referencias HTML
    const newDescriptionInput = document.querySelector(ElementIDs.NewTodoInput);

    //Listeners
    newDescriptionInput.addEventListener('keyup', (event) => {
        if( event.keyCode !== 13 ) return;
        if( event.target.value.trim().length === 0 ) return;

        todoStore.addTodo(event.target.value);
        displayTodos();
        event.target.value = '';

    });
}