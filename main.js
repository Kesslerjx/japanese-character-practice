import {loadBackground} from './modules/background-handler.js';
import {PAGE_STATE, changePage} from './modules/page-handler.js';

loadBackground(); //Load a background image using Pexels API
changePage(PAGE_STATE.HOME); //Loads the home page