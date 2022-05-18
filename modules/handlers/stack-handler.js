import { stack, saveData } from "./storage-handler.js";
import { randomNumber } from './background-handler.js'

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

    //Move character to shown array to move it out of the current stack
    stack.shownCharacters.push(stack[stack.lastIndex]);

    //Remove character from current stack
    stack.characters.splice(stack.lastIndex, 1);

    //Get next index
    if(stack.options.random) {
        stack.lastIndex = randomNumber(stack.characters.length);
    } else {
        stack.lastIndex = 0;
    }

    saveData();
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

export {missedAnswer};