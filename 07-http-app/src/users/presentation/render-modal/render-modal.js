import modalHtml from './render-modal.html?raw'; // funciona para vite
import './render-modal.css'
let modal, form;

//TODO cargar usuario por id
export const showModal = () => {
    modal?.classList.remove('hide-modal');
}

export const hideModal = () => {
    modal?.classList.add('hide-modal');
    //TODO reset del formulario
}

/**
 * 
 * @param {HTMLDivElement} element 
 * @returns 
 */

export const renderModal = (element) => {
    if(modal) return;
    modal = document.createElement('div');
    modal.innerHTML = modalHtml;
    modal.className = 'modal-container hide-modal';
    form = modal.querySelector('form');

    modal.addEventListener('click', (event) => {
        // console.log(event.target);
        if(event.target.className ==='modal-container'){
            hideModal();
        }
    });

    form.addEventListener('submit', (event) => {
        // console.log(event); evitar la propagacion del formulario en el submit
        //prevenir el comportamiento por defecto

        event.preventDefault();
        console.log('Formulario enviado');
    });

    element.append(modal);
}