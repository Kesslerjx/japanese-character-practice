
class Stack {
    constructor(characters) {
        this.characters = characters;
        this.hiddenCharacters = []; //Characters are moved here once hidden
        this.lastIndex = 0; //The index of the character that the user was on
        this.options = {
            hiragana: true, 
            katakana: true, 
            random: false
        }; //Options that can be used for the stack
    }
}

export {Stack};