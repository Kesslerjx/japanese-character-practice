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
    //Increase counts
    increaseCorrectCount(stack.lastIndex);
    increaseShownCount(stack.lastIndex);
    moveCurrentCharacter();
    setIndex();
    saveData();
}

//Is called when the hiragana option button is pressed
function hiraganaOption() {

    //Set to the opposite value
    stack.options.hiragana = !stack.options.hiragana;

    moveHiraganaCharacters();
}

function moveHiraganaCharacters() {
    if(stack.options.hiragana) {
        //Move characters from hidden to current
        for(let index=0; index < stack.hiddenCharacters.length; index=index) {
            //If it is a hiragana character, then move
            if(stack.hiddenCharacters[index].characterSet === CHARACTER_SET.HIRAGANA) {
                stack.characters.push(stack.characters[index]); //Add item to characters array
                stack.hiddenCharacters.splice(index, 1); //Remove from the hidden characters array
            } else {
                index += 1;
            }
        }
    } else {

        //It only iterates the index value when a character hasn't been moved
        //If a character has been moved, then the index should stay the same
        //This is because the next item is being moved into its place
        //If you iterate the for loop, it'll skip over every other item
        for(let index=0; index < stack.characters.length; index=index) {
            //If it is a hiragana character, then move
            if(stack.characters[index].characterSet === CHARACTER_SET.HIRAGANA) {
                stack.hiddenCharacters.push(stack.characters[index]); //Add item to hidden characters array
                stack.characters.splice(index, 1); //Remove from the characters array
            } else {
                index += 1;
            }
        }
    }

    console.log(stack);

    //Set stack index to 0 so a character is loaded when the user goes back
    stack.lastIndex = 0;
}

function moveCurrentCharacter() {
   //Move character to shown array to move it out of the current stack
   stack.shownCharacters.push(stack[stack.lastIndex]);

   //Remove character from current stack
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
    hiraganaOption
};