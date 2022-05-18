import { stack } from "../handlers/storage-handler.js";
import { missedAnswer } from "../handlers/stack-handler.js";

const SETTINGS_ICON = '../icons/settings.svg';

//Get main element
const main = document.querySelector('main');

//Create elements
const div = document.createElement('div');
const settingsBtn = document.createElement('img');
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
    div.classList.add('home-page');
    settingsBtn.classList.add('settings-icon');
    statDiv.classList.add('stat-div');
    character.classList.add('character');
    buttonsDiv.classList.add('buttons-div');
    showButton.classList.add('normal-button');
    missButton.classList.add('normal-button', 'smaller-button');
    correctButton.classList.add('normal-button', 'smaller-button');

    settingsBtn.src = SETTINGS_ICON;
    statP.textContent = "100 / 200";
    showCharacter();
    showButton.textContent = 'Show';
    missButton.textContent = 'Missed';
    correctButton.textContent = 'Correct';

    showButton.addEventListener('click', showAnswer);
    missButton.addEventListener('click', missPressed);
    correctButton.addEventListener('click', correctPressed);

    statDiv.append(statP);
    buttonsDiv.append(showButton);
    div.append(settingsBtn, statDiv, character, buttonsDiv);
    main.append(div);
}

function showCharacter() {
    character.textContent = stack.characters[stack.lastIndex].japanese;
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
    missedAnswer();
    showCharacter();
    clearButtonsDiv();
    buttonsDiv.append(showButton);
}

function correctPressed() {

}

//Removes the show button from the buttons div
function clearButtonsDiv() {
    while(buttonsDiv.firstChild) {
        buttonsDiv.removeChild(buttonsDiv.firstChild);
    }
}

export { buildHomePage }