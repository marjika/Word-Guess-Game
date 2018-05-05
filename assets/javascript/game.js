
//Starting variables
var flowers = ["TULIP", "LILAC", "DAISY", "BUTTERCUP", "HYACINTH", "DAHLIA", "CARNATION", "DAFFODIL", "COLUMBINE", "BLEEDING HEART", "STARGAZER LILY", "PHLOX", "HOLLYHOCK", "LUPINE", "CANDYTUFT", "CHERRY BLOSSOMS", "BLUEBELLS", "ALYSSUM", "PETUNIA", "SUNFLOWER"]
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


// Finds the index of the answer in the flowers array and removes it.
function pickWord() {
    var index = flowers.indexOf(answer);
    if (index > -1) {
        flowers.splice(index, 1);
    }
}

// Uses the number of letters in answer and displays an underscore for each letter and a space where there is a two-word answer.
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
        }
    }
}

//Compares the user's guess to the answer, stores the indices where they correspond in an array, positions,
//If they do not match, the tries variable goes down and the game resets when tries goes to zero.
//If they match, the blanks are filled with the match using positions and when the mystery word matches the answer key, 
//the wins variable goes up and the game resets.
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
        inAlphabet = false;
        if (tries < 1) {
            losses++;
            addFlowerImage();
            endGame();
        }
    
    } 
    else {
        // Loop through all the indicies and replace the '_' with a letter.
        for(var i = 0; i < positions.length; i++) {
            mystery[positions[i]] = match;
        }
        document.getElementById("blanks").innerHTML = mystery.join("");
        if (mystery.join("") === answer) {
            wins++;
            addFlowerImage();
            endGame();
        }

    }
};

//Displays stats
function statsDisplay() {
    document.getElementById("tries").textContent = "Number of tries remaining: " + tries;
    document.getElementById("wins").textContent = "Wins: " + wins;
    document.getElementById("losses").textContent = "Losses: " + losses;
}
 
//Clears the neccesary variables and provides a new word to solve.
function endGame() {
    alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    usedLetters = [];
    document.getElementById("used").innerHTML = "";
    select = Math.floor(Math.random()*flowers.length);
    answer = flowers[select];
    mystery = [];
    tries = 10;
    inAlphabet = false;
    if (flowers.length < 2) {
        flowers = ["TULIP", "LILAC", "DAISY", "BUTTERCUP", "HYACINTH", "DAHLIA", "CARNATION", "DAFFODIL", "COLUMBINE", "BLEEDING HEART", "STARGAZER LILY", "PHLOX", "HOLLYHOCK", "LUPINE", "CANDYTUFT", "CHERRY BLOSSOMS", "BLUEBELLS", "ALYSSUM", "PETUNIA", "SUNFLOWER"]
    }
    pickWord();
    setup();

}

//After the player solves the word or runs out of tries, the game displays the name and picture of the flower
function addFlowerImage() {
    if (answer === "TULIP") {
        document.getElementById("flowerImage").src = "assets/images/tulip.jpg";
        document.getElementById("flowerType").innerHTML = "Tulip";
    }
    else if (answer === "LILAC") {
        document.getElementById("flowerImage").src = "assets/images/Lilac.jpg";
        document.getElementById("flowerType").innerHTML = "Lilac";
    }
    else if (answer === "DAISY") {
        document.getElementById("flowerImage").src = "assets/images/daisy.jpg";
        document.getElementById("flowerType").innerHTML = "Daisy";
    }
    else if (answer === "BUTTERCUP") {
        document.getElementById("flowerImage").src = "assets/images/buttercup.jpg";
        document.getElementById("flowerType").innerHTML = "Buttercup";
    }
    else if (answer === "HYACINTH") {
        document.getElementById("flowerImage").src = "assets/images/hyacinth.jpg";
        document.getElementById("flowerType").innerHTML = "Hyacinth";
    }
    else if (answer === "DAHLIA") {
        document.getElementById("flowerImage").src = "assets/images/Dahlia.jpg";
        document.getElementById("flowerType").innerHTML = "Dahlia";
    }
    else if (answer === "CARNATION") {
        document.getElementById("flowerImage").src = "assets/images/Carnation.jpg";
        document.getElementById("flowerType").innerHTML = "Carnation";
    }
    else if (answer === "DAFFODIL") {
        document.getElementById("flowerImage").src = "assets/images/daffodil.jpg";
        document.getElementById("flowerType").innerHTML = "Daffodil";
    }
    else if (answer === "COLUMBINE") {
        document.getElementById("flowerImage").src = "assets/images/Columbine.JPG";
        document.getElementById("flowerType").innerHTML = "Columbine";
    }
    else if (answer === "BLEEDING HEART") {
        document.getElementById("flowerImage").src = "assets/images/Bleeding-Heart.jpg";
        document.getElementById("flowerType").innerHTML = "Bleeding Heart";
    }
    else if (answer === "STARGAZER LILY") {
        document.getElementById("flowerImage").src = "assets/images/Stargazer-lily.jpg";
        document.getElementById("flowerType").innerHTML = "Stargazer Lily";
    }
    else if (answer === "PHLOX") {
        document.getElementById("flowerImage").src = "assets/images/phlox.jpg";
        document.getElementById("flowerType").innerHTML = "Phlox";
    }
    else if (answer === "HOLLYHOCK") {
        document.getElementById("flowerImage").src = "assets/images/hollyhock.jpg";
        document.getElementById("flowerType").innerHTML = "Hollyhock";
    }
    else if (answer === "LUPINE") {
        document.getElementById("flowerImage").src = "assets/images/lupine.jpg";
        document.getElementById("flowerType").innerHTML = "Lupine";
    }
    else if (answer === "CANDYTUFT") {
        document.getElementById("flowerImage").src = "assets/images/candytuft.JPG";
        document.getElementById("flowerType").innerHTML = "Candytuft";
    }
    else if (answer === "CHERRY BLOSSOMS") {
        document.getElementById("flowerImage").src = "assets/images/Cherry-blossom.jpg";
        document.getElementById("flowerType").innerHTML = "Cherry Blossoms";
    }
    else if (answer === "BLUEBELLS") {
        document.getElementById("flowerImage").src = "assets/images/bluebells.jpg";
        document.getElementById("flowerType").innerHTML = "Bluebells";
    }
    else if (answer === "ALYSSUM") {
        document.getElementById("flowerImage").src = "assets/images/alyssum.jpg";
        document.getElementById("flowerType").innerHTML = "Alyssum";
    }
    else if (answer === "PETUNIA") {
        document.getElementById("flowerImage").src = "assets/images/petunia.jpg";
        document.getElementById("flowerType").innerHTML = "Petunia";
    }
    else if (answer === "SUNFLOWER") {
        document.getElementById("flowerImage").src = "assets/images/sunflower.jpg";
        document.getElementById("flowerType").innerHTML = "Sunflower";
    }
}


document.onkeyup = function(event) {

    // Determines which key was pressed.
    userGuess = event.key;
    letterPress();
    matchLetter();
    statsDisplay();
   
}





