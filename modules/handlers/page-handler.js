import { buildHomePage } from '../pages/home-page.js';
import { buildSettingsPage } from '../pages/settings-page.js';

const PAGE_STATE = {
    HOME: 'home',
    SETTINGS: 'settings'
}

function changePage(state) {
    clearMain();
    
    switch(state) {
        case PAGE_STATE.SETTINGS:
            buildSettingsPage();
            break;
        default:
            buildHomePage();
    }
}

//Clears the first child thats in the main element
//There should only be one child in there
function clearMain() {
    const main = document.querySelector('main');
    if(main.firstChild) {
        main.removeChild(main.firstChild);
    }
}

export {PAGE_STATE, changePage};