import { stack } from "../handlers/storage-handler.js";
import { getPercentage, missedAnswer, correctAnswer, reorderStack } from "../handlers/stack-handler.js";
import { PAGE_STATE, changePage } from "../handlers/page-handler.js";

const SETTINGS_ICON = '../icons/settings.svg';
const REORDER_ICON  = '../icons/reorder.svg';

//Get main element
const main = document.querySelector('main');
const hideButton = document.querySelector('#hide-button');

//Create elements
const div = document.createElement('div');
const iconsDiv = document.createElement('div');
const reorderButton = document.createElement('img');
const settingsButton = document.createElement('img');
const statDiv = document.createElement('div');
const statP = document.createElement('p');
const character = document.createElement('p');
const buttonsDiv = document.createElement('div');
const showButton = document.createElement('button');
const missButton = document.createElement('button');
const correctButton = document.createElement('button');

//Builds the home page and adds it to the main element
function buildHomePage() {

    //Get rid of missed and correct buttons if they're there
    clearButtonsDiv();

    //Add classes
    div.classList.add('normal-page');
    iconsDiv.classList.add('icons-div');
    reorderButton.classList.add('normal-icon');
    settingsButton.classList.add('normal-icon');
    statDiv.classList.add('stat-div');
    character.classList.add('character');
    buttonsDiv.classList.add('buttons-div');
    showButton.classList.add('normal-button');
    missButton.classList.add('normal-button', 'smaller-button');
    correctButton.classList.add('normal-button', 'smaller-button');

    settingsButton.src = SETTINGS_ICON;
    settingsButton.title = 'Settings button';
    reorderButton.src = REORDER_ICON;
    reorderButton.title = 'Reorder stack button';
    showButton.textContent = 'Show';
    missButton.textContent = 'Missed';
    correctButton.textContent = 'Correct';

    settingsButton.addEventListener('click', settingsPressed);
    reorderButton.addEventListener('click', reorderPressed);
    showButton.addEventListener('click', showAnswer);
    missButton.addEventListener('click', missPressed);
    correctButton.addEventListener('click', correctPressed);
    hideButton.addEventListener('click', hideMain);

    iconsDiv.append(reorderButton, settingsButton);
    statDiv.append(statP);
    buttonsDiv.append(showButton);
    div.append(iconsDiv, statDiv, character, buttonsDiv);
    main.append(div);

    showCharacter();
}

function showCharacter() {
    statP.textContent = getPercentage(stack.lastIndex);
    character.textContent = stack.characters[stack.lastIndex].japanese;
}

function reorderPressed() {
    reorderStack();
    showCharacter();
}

function settingsPressed() {
    changePage(PAGE_STATE.SETTINGS);
}

function showAnswer() {
    //Remove the show button
    clearButtonsDiv();

    //Add the missed and correct button
    buttonsDiv.append(missButton, correctButton);

    //Show the english meaning
    character.textContent = stack.characters[stack.lastIndex].english;

}

function missPressed() {
    missedAnswer(); //Modify the stack to reflect an incorrect answer
    showCharacter(); //Shows the next character
    clearButtonsDiv(); //Removes the buttons from the div
    buttonsDiv.append(showButton); //Adds the show button back
}

function correctPressed() {
    correctAnswer(); //Modify the stack to reflect an incorrect answer
    showCharacter(); //Shows the next character
    clearButtonsDiv(); //Removes the buttons from the div
    buttonsDiv.append(showButton); //Adds the show button back
}

function hideMain() {
    if(main.style.opacity === '0') {
        main.style.opacity = '1'
    } else {
        main.style.opacity = '0';
    }
}

//Removes the show button from the buttons div
function clearButtonsDiv() {
    while(buttonsDiv.firstChild) {
        buttonsDiv.removeChild(buttonsDiv.firstChild);
    }
}

export { buildHomePage }