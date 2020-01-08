let wordArray = ["Sunset Chaser", "Photographer", "Filmmaker", "Avid Foodie", "Tech Enthusiast", "Maple Leafs Fan", "Adventure Seeker"];
let wordIncrement = -1;
let stateChange = 0;

let displayWord = '';
let wordIndex = 0;
let word;
let nextWord;

let changeLetterTime = 50;
let displayWordTime = 2000;

updatePage();
setTimeout(alterDisplayWord, displayWordTime);

const start = async() => {
    word = wordArray[wordIndex];
    wordIndex += 1;
    nextWord = wordArray[wordIndex];
    displayWord = word;
    updatePage();
    alterDisplayWord();
}

function updatePage(){
    document.getElementById('text-generator').innerText = displayWord;
}

function alterDisplayWord() { 

    if (stateChange === 0){
        displayWord = word.substring(0, displayWord.length + wordIncrement);
   
    if (displayWord.length == 0 || displayWord == word) {
        stateChange = 1;
    }
    setTimeout(alterDisplayWord, changeLetterTime);
    updatePage();
    }
    else {
    stateChange = 0;

    if (displayWord.length === 0) {
        wordIncrement = 1;
        changeWord();
    }
    else {
        wordIncrement = -1;
        setTimeout(alterDisplayWord, displayWordTime);
    }
    
 }

}

const changeWord = async () => {
    word = nextWord;
    setTimeout(alterDisplayWord, displayWordTime);
    wordIndex += 1;
    
    if (wordIndex > wordArray.length - 1) {
        wordIndex = 0;
        nextWord = wordArray[wordIndex];
    }
    else {
        nextWord = wordArray[wordIndex];
    }
}

start();