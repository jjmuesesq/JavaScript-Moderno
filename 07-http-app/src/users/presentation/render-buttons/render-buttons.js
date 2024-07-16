import userStore from '../../store/users-store';
import './render-buttons.css';

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const renderButtons = (element) => {
    const nextButton = document.createElement('button');
    nextButton.innerText = ' Next > ';

    const prevButton = document.createElement('button');
    prevButton.innerText = ' < Prev ';

    const currentPageLabel = document.createElement('span');
    currentPageLabel.id = 'current-page';
    currentPageLabel.innerText = userStore.getCurrentPage();

    element.append( prevButton, currentPageLabel, nextButton );

}