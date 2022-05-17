import {loadBackground} from './modules/handlers/background-handler.js';
import {PAGE_STATE, changePage} from './modules/handlers/page-handler.js';

loadBackground(); //Load a background image using Pexels API
changePage(PAGE_STATE.HOME); //Loads the home page