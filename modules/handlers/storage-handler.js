import { characters } from "../data/characters.js";
import { Stack } from "../models/stack.js";

const STORAGE_KEY = {
    STACK: 'stack'
}

//Array to be used in other modules
let stack = undefined;

function loadData() {
    //If the characters data doesn't exist yet, then create and store the information
    if(!localStorage.getItem(STORAGE_KEY.STACK)) {
        populateData();
    } else {
        stack = JSON.parse(localStorage.getItem(STORAGE_KEY.STACK));
    }
}

//Function to save the stack to the local storage
function saveData() {
    localStorage.setItem(STORAGE_KEY.STACK, JSON.stringify(stack));
}

function populateData() {

    //Use the characters file to create a new mutatable array
    let newCharacters = characters;

    //Go through each item and set the index value
    newCharacters.forEach(setCharacterIndexes);

    //Create new stack using the new character array
    const initialStack = new Stack(newCharacters);

    //Save stack to local storage
    localStorage.setItem(STORAGE_KEY.STACK, JSON.stringify(initialStack));
    
    //Set stack
    stack = initialStack;

    console.log('Stack was created and characters were stored to it.');

}

function clearData() {
    window.localStorage.clear(); //Delete data
    loadData(); //Reload data
}

//Sets their original index values to be used later
function setCharacterIndexes(item, index) {
    item.index = index;
}

export {loadData, saveData, clearData, stack};