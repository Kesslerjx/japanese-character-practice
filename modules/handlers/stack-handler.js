import { stack, saveData } from "./storage-handler.js";
import { randomNumber } from './background-handler.js'
import { CHARACTER_SET } from "../models/character.js";
import { characters } from "../data/characters.js";

function missedAnswer() {
    //Add to shown and correct count
    //But only if both are equal to at least 1
    //This way they can get it wrong at least once since they may not have seen it before
    if(getCorrectCount(stack.lastIndex) == 0 && getShownCount(stack.lastIndex)) {
        //Increase both by 1
        increaseCorrectCount(stack.lastIndex);
        increaseShownCount(stack.lastIndex);
    } else {
        //Increase shown count only
        increaseShownCount(stack.lastIndex);
    }

    moveCurrentCharacter();
    setIndex();
    saveData();
}

function correctAnswer() {
    increaseCorrectCount(stack.lastIndex);
    increaseShownCount(stack.lastIndex);
    moveCurrentCharacter();
    setIndex();
    saveData();
}

//Is called when the hiragana option button is pressed
function hiraganaOption() {

    stack.options.hiragana = !stack.options.hiragana; //Set to opposite value
    moveCharacters(stack.options.hiragana, CHARACTER_SET.HIRAGANA); //Move the characters
    setIndex(); //Set the index

}

//Is called when the katakana option button is pressed
function katakanaOption() {

    stack.options.katakana = !stack.options.katakana; //Set to opposite value
    moveCharacters(stack.options.katakana, CHARACTER_SET.KATAKANA); //Move the characters
    setIndex(); //Set the index

}

//Moves the characters based on the option that is passed to it
function moveCharacters(option, characterSet) {
    console.log(stack);
    //If option is false, then move the characters to hidden
    if(option === false) {
        //Add to hidden
        stack.hiddenCharacters = stack.hiddenCharacters.concat(stack.characters.filter(character => (character.characterSet === characterSet)));
        //Remove from characters
        stack.characters = stack.characters.filter(character => (character.characterSet != characterSet));
    } else { //If option is true, move to characters
        //Add to characters
        stack.characters = stack.characters.concat(stack.hiddenCharacters.filter(character => (character.characterSet === characterSet)));
        //Remove from hidden
        stack.hiddenCharacters = stack.hiddenCharacters.filter(character => (character.characterSet != characterSet));
    }

    console.log(stack);
}

//Moves the character to the end of the array
function moveCurrentCharacter() {
    stack.characters.push(stack.characters[stack.lastIndex]);
    stack.characters.splice(stack.lastIndex, 1);
}

function setIndex() {
    //Get next index
    if(stack.options.random) {
        stack.lastIndex = randomNumber(stack.characters.length);
    } else {
        stack.lastIndex = 0;
    }
}

function getPercentage(index) {
    if(stack.characters[index].shownCount == 0 || stack.characters[index].correctCount == 0) {
        return '0%';
    } else {
        return `${(stack.characters[index].shownCount / stack.characters[index].correctCount) * 100}%`;
    }
}

function getCorrectCount(index) {
    return stack.characters[index].correctCount;
}

function getShownCount(index) {
    return stack.characters[index].shownCount;
}

function increaseCorrectCount(index) {
    stack.characters[index].correctCount += 1;
}

function increaseShownCount(index) {
    stack.characters[index].shownCount += 1;
}

export {
    missedAnswer, 
    correctAnswer, 
    getPercentage,
    hiraganaOption,
    katakanaOption
};