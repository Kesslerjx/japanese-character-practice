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
    //Create new stack
    const initialStack = new Stack(characters);

    //Save stack to local storage
    localStorage.setItem(STORAGE_KEY.STACK, JSON.stringify(initialStack));
    
    //Set stack
    stack = initialStack;

    console.log('Stack was created and characters were stored to it.');

}

export {loadData, saveData, stack};