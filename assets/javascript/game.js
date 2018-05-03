

var flowers = ["TULIP", "LILAC", "DAISY", "BUTTERCUP", "HYACINTH", "DAHLIA", "CARNATION", "DAFFODIL", "COLUMBINE", "BLEEDING HEART", "STARGAZER LILY", "PHLOX", "HOLLYHOCK", "LUPINE", "CANDYTUFT", "LOBELIA", "BUTTERCUP", "ALYSSUM", "PETUNIA", "SUNFLOWER"]
var alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var usedLetters = [];
var select = Math.floor(Math.random()*flowers.length);
var answer = flowers[select];
var mystery = [];
var userGuess;
var wins = 0;
var losses = 0;
var tries = 10;
var inAlphabet = false;


// document.getElementById("demo").innerHTML = flowers;

// Finds the index of the answer in the flowers array and removes it.
function pickWord() {
    var index = flowers.indexOf(answer);
    if (index > 0) {
        flowers.splice(index, 1);
    }
    console.log(flowers);
    console.log(answer);
    console.log(answer.length);
}

// Uses the number of letters in answer and displays an underscore for each letter.
function setup() {

    for (var i=0; i<answer.length; i++) {
        if (answer[i] !== " ") {
            mystery.push("_");
        }
        else {
            mystery.push(" ");
        }
    }

    document.getElementById("blanks").innerHTML = mystery.join("");
  
      
}

// Takes the user's letter, converts it to uppercase, compares it to the alphabet array. 
// If it hasn't already been used, it pushes the letter into the displayed usedLetters array, and removes it from the alphabet array.
function letterPress() {
    var cap = userGuess.toUpperCase();
    for (i=0; i<alphabet.length; i++) {
        if (cap === alphabet[i]) {
            var c = alphabet.indexOf(cap);
            usedLetters.push(cap);
            alphabet.splice(c, 1);
            inAlphabet = true;
            var usedLettersAsString = usedLetters.join(", ");
            document.getElementById("used").innerHTML = usedLettersAsString;
            console.log(usedLetters);
            }
    }
}

function matchLetter() {
    
    var match = userGuess.toUpperCase();
    var positions = [];
    for (var i = 0; i < answer.length; i++) {
        if(answer[i] === match) {
            positions.push(i);
        }
    }

    if (positions.length <= 0 && inAlphabet)  {
        tries--;
        console.log(tries);
        inAlphabet = false;
        if (tries < 1) {
            losses++;
            endGame();
        }
    
    } 
    else {
        // Loop through all the indicies and replace the '_' with a letter.
        for(var i = 0; i < positions.length; i++) {
            mystery[positions[i]] = match;
        }
        document.getElementById("blanks").innerHTML = mystery.join("");

    }
};

function statsDisplay() {
    document.getElementById("tries").textContent = "Number of tries remaining: " + tries;
    document.getElementById("wins").textContent = "Wins: " + wins;
    document.getElementById("losses").textContent = "Losses: " + losses;
}
    
function endGame() {
    alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    usedLetters = [];
    document.getElementById("used").innerHTML = "";
    select = Math.floor(Math.random()*flowers.length);
    answer = flowers[select];
    mystery = [];
    tries = 10;
    inAlphabet = false;
    pickWord();
    setup();
}


document.onkeyup = function(event) {

    // Determines which key was pressed.
    userGuess = event.key;
    letterPress();
    matchLetter();
    statsDisplay();
    // endGame();
 

}





