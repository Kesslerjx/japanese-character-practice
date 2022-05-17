const CHARACTER_SET = {
    HIRAGANA: 'Hiragana',
    KATAKANA: 'Katakana'
}
class Character {
    constructor(japanese, english, characterSet) {
        this.japanese = japanese;
        this.english = english;
        this.characterSet = characterSet;
        this.correctCount = 0;
        this.shownCount = 0;
    }

    //Returns the users correct percentage for this character
    percentage() {
        return (this.correctCount / this.shownCount) * 100;
    }
}