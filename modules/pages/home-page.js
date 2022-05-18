import { stack } from "../handlers/storage-handler.js";
import { getPercentage, missedAnswer, correctAnswer } from "../handlers/stack-handler.js";
import { PAGE_STATE, changePage } from "../handlers/page-handler.js";

const SETTINGS_ICON = '../icons/settings.svg';

//Get main element
const main = document.querySelector('main');

//Create elements
const div = document.createElement('div');
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

    //Add classes
    div.classList.add('normal-page');
    settingsButton.classList.add('normal-icon');
    statDiv.classList.add('stat-div');
    character.classList.add('character');
    buttonsDiv.classList.add('buttons-div');
    showButton.classList.add('normal-button');
    missButton.classList.add('normal-button', 'smaller-button');
    correctButton.classList.add('normal-button', 'smaller-button');

    settingsButton.src = SETTINGS_ICON;
    statP.textContent = getPercentage(stack.lastIndex);
    showButton.textContent = 'Show';
    missButton.textContent = 'Missed';
    correctButton.textContent = 'Correct';

    settingsButton.addEventListener('click', settingsPressed);
    showButton.addEventListener('click', showAnswer);
    missButton.addEventListener('click', missPressed);
    correctButton.addEventListener('click', correctPressed);

    statDiv.append(statP);
    buttonsDiv.append(showButton);
    div.append(settingsButton, statDiv, character, buttonsDiv);
    main.append(div);

    showCharacter();
}

function showCharacter() {
    character.textContent = stack.characters[stack.lastIndex].japanese;
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

//Removes the show button from the buttons div
function clearButtonsDiv() {
    while(buttonsDiv.firstChild) {
        buttonsDiv.removeChild(buttonsDiv.firstChild);
    }
}

export { buildHomePage }