import './style.css';
import { App } from './src/todos/app';

// llamado al store 
import todoStore from './src/store/todo.store';

todoStore.initStore();
App('#app');
