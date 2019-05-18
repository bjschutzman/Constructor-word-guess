// index.js: The file containing the logic for the course of the game, which depends on Word.js and:


// Randomly selects a word and uses the Word constructor to store it
// Prompts the user for each guess and keeps track of the user's remaining guesses
var wordArray = ["fish", "camel", "elephant"]
var chosenWord = ""
var lettersInWord = [];
var numBlanks = 0
var blanksAndSucess = ""
var wrongGuess = []
var guessesLeft = 9


// start game function sets up everything needed to start
    function startGame(){
    guessesLeft = 9

    // Randomly selects a word and uses the Word constructor to store it
    chosenWord = wordArray[Math.floor(Math.random() * wordArray.length)];
    console.log(chosenWord);
    // splits chosen word into indvidual letters
    lettersInWord = chosenWord.split("");
    // counts how mant letters are in lettersInWord
    numBlanks = lettersInWord.length;
    console.log(numBlanks);

    blanksAndSucess = [];
    wrongGuess =[];

    for(var i = 0; i < numBlanks; i++){
        blanksAndSucess.push("_")
    }
    console.log(blanksAndSucess);
}



function letterCheck(letter){
    // sets boolean so that letterInWord is false until told otherwise
    var letterInword = false

    // loop to see if letter is in the selected word
    for (var i = 0; i < numBlanks; i++){
        if (chosenWord === numblanks){
            letterInword === true
        }
    }

    // if the letter is in the word this will loop through and find where that letter is an push the letter to blanksAndSuccesses
    if (letterInword){
        for (var j = 0; j < numblanks; j++){
            if(chosenWord[j] ===letter){
                blanksAndSucess[j] = letter;
            }
            console.log(blanksAndSucess)
        }
    }
    else{
        wrongGuess.push(letter);
        guessesLeft--
    }
}




// var lettersInWord = chosenWord[i].split(" ")
// var letterBlank = lettersInWord.push("_");
// console.log(lettersInWord);
// console.log(letterBlank);
// Letter.js should not require any other files.
// Word.js should only require Letter.js
// HINT: Write Letter.js first and test it on its own before moving on, then do the same thing with Word.js
// HINT: If you name your letter's display function toString, JavaScript 
// will call that function automatically whenever casting that object to a 
// string (check out this example: https://jsbin.com/facawetume/edit?js,console)