import modalHtml from './render-modal.html?raw'; // funciona para vite
import './render-modal.css'
let modal;

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

    element.append(modal);
}