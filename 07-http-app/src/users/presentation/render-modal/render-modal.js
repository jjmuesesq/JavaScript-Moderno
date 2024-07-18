import modalHtml from './render-modal.html?raw'; // funciona para vite
import './render-modal.css'
let modal, form;

//TODO cargar usuario por id
export const showModal = () => {
    modal?.classList.remove('hide-modal');
}

export const hideModal = () => {
    modal?.classList.add('hide-modal');
    form?.reset();
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
        // console.log('Formulario enviado');
        const formData = new FormData( form );
        const userLike = {};

        for (const [key, value] of formData) {
            if(key === 'balance'){
                userLike[key] = +value; //conversion en balance a numerico
                continue;
            }

            if(key === 'isActive'){
                userLike[key] = (value === 'on') ? true : false; //conversion isActive a booleano
                continue;
            }

            userLike[key] = value;

        }

        // console.log(userLike);
        //TODO guardar usuario
        hideModal();

    });

    element.append(modal);
}