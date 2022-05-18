const CHARACTER_SET = {
    HIRAGANA: 'Hiragana',
    KATAKANA: 'Katakana'
};

class Character {
    constructor(japanese, english, characterSet) {
        this.japanese = japanese;
        this.english = english;
        this.characterSet = characterSet;
        this.correctCount = 0;
        this.shownCount = 0;
        this.index = 0; //To be used as a reference when reordering the array later
    }
}

export {CHARACTER_SET, Character};