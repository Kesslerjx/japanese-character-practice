import { changePage, PAGE_STATE } from "../handlers/page-handler.js";
import { stack, clearData } from "../handlers/storage-handler.js";
import { hiraganaOption, katakanaOption, randomOption } from "../handlers/stack-handler.js";

const BACK_ICON = '../icons/back.svg';

const main = document.querySelector('main');

//Create elements
const mainDiv = document.createElement('div');
const buttonsDiv = document.createElement('div');
const backButton = document.createElement('img');
const randomButton = document.createElement('button');
const hiraganaButton = document.createElement('button');
const katakanaButton = document.createElement('button');
const clearDataButton = document.createElement('button');

function buildSettingsPage() {
    buttonsDiv.classList.add('normal-page', 'settings-page');
    backButton.classList.add('normal-icon', 'icon-right');
    randomButton.classList.add('normal-button', 'medium-button');
    hiraganaButton.classList.add('normal-button', 'medium-button');
    katakanaButton.classList.add('normal-button', 'medium-button');
    clearDataButton.classList.add('normal-button', 'medium-button', 'red-button');

    backButton.src = BACK_ICON;

    randomButton.textContent = 'Random';
    hiraganaButton.textContent = 'Hiragana';
    katakanaButton.textContent = 'Katakana';
    clearDataButton.textContent = 'Clear Data';

    backButton.addEventListener('click', backPressed);
    randomButton.addEventListener('click', randomPressed);
    hiraganaButton.addEventListener('click', hiraganaPressed);
    katakanaButton.addEventListener('click', katakanaPressed);
    clearDataButton.addEventListener('click', clearDataPressed);

    buttonsDiv.append(
        randomButton, 
        hiraganaButton, 
        katakanaButton, 
        clearDataButton
    );

    mainDiv.append(backButton, buttonsDiv);

    main.append(mainDiv);

    highlightButtons();

}

function backPressed() {
    changePage(PAGE_STATE.HOME);
}

function randomPressed() {
    randomOption();
    highlightButtons();
}

function hiraganaPressed() {

    //Only allow for hiragana characters to be removed if the katakana ones are present
    if(stack.options.katakana === true) {
        //Handle stack modification
        hiraganaOption();

        //Hightlight or unhighlight button
        highlightButtons();
    }

}

function katakanaPressed() {

    //Only allow for hiragana characters to be removed if the katakana ones are present
    if(stack.options.hiragana === true) {
        //Handle stack modification
        katakanaOption();

        //Hightlight or unhighlight button
        highlightButtons();
    }

}

function clearDataPressed() {
    if(confirm("This will reset your progress. Are you sure?")) {
        clearData();
        highlightButtons();
    } else {
        console.log('User canceled data deletion');
    }
}

//Makes the buttons highlighted if that option is pressed
function highlightButtons() {
    if(stack.options.random) {
        randomButton.classList.remove('gray-button');
        randomButton.classList.add('highlighted-button');
    } else {
        randomButton.classList.remove('highlighted-button');
        randomButton.classList.add('gray-button');
    }

    if(stack.options.hiragana) {
        hiraganaButton.classList.remove('gray-button');
        hiraganaButton.classList.add('highlighted-button');
    } else {
        hiraganaButton.classList.remove('highlighted-button');
        hiraganaButton.classList.add('gray-button');
    }

    if(stack.options.katakana) {
        katakanaButton.classList.remove('gray-button');
        katakanaButton.classList.add('highlighted-button');
    } else {
        katakanaButton.classList.remove('highlighted-button');
        katakanaButton.classList.add('gray-button');
    }
}

export {
    buildSettingsPage
}