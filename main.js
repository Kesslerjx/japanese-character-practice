import {loadBackground} from './modules/handlers/background-handler.js';
import {PAGE_STATE, changePage} from './modules/handlers/page-handler.js';
import {loadData} from './modules/handlers/storage-handler.js'

loadBackground(); //Load a background image using Pexels API
loadData(); //Loads the data from the local storage
changePage(PAGE_STATE.HOME); //Loads the home page