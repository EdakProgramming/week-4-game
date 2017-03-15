"use strict";

var scoreBoard = {
    //Adds up the points
    notifier: 0,
    //Logs user's wins
    wins: 0,
    //Logs user's losses
    losses: 0
};



// This callback will generate the random number needed for the computer. The computer will generate a random number from 19-120.
var computerChoice = randomChoice(120, 19);
var crystals = [];

// Through the use of this function, we will be able to generate the random numbers needed for the computer (computerChoice) and each one of the crystals (crystals[])
function randomChoice(a, b) {
    return Math.floor((Math.random() * (a - b) + b));

}

// Through the use of this function, we will be able to generate the random numbers needed for the four chrystals and store them into an array

function crystalArray() {
    for (var i = 0; i < 4; i++) {
        var crystalRandom = randomChoice(12, 1);
        crystals.push(crystalRandom);
    }
}

crystalArray();

// Display the random number on the screen

$("#random-number").html("   " + computerChoice);


// When the player clicks on a crystal. This will add a specific amount of points to the player's total score. 

//ruby
$("#ruby").on("click", function() {
    //add to the notifier variable everytime when clicked
    scoreBoard.notifier += crystals[0];
    $("#notifier").text(scoreBoard.notifier);
    // The game will match the player's score against the computer's score. The player wins if their total score matches the random number from the beginning of the game.

    if (scoreBoard.notifier === computerChoice) {
        //Which increases wins
        scoreBoard.wins++;
        $("#wins").html(scoreBoard.wins);
        restartGame();
        // The player loses if their score goes above the random number.
    } else if (scoreBoard.notifier > computerChoice) {
        scoreBoard.losses++;
        alert("You lose");
        $("#losses").html(scoreBoard.losses);
        restartGame();
    }
});

//sapphire
$("#sapphire").on("click", function() {
    //add to the notifier variable everytime when clicked
    scoreBoard.notifier += crystals[1];
    $("#notifier").text(scoreBoard.notifier);
    // The game will match the player's score against the computer's score. The player wins if their total score matches the random number from the beginning of the game.

    if (scoreBoard.notifier === computerChoice) {
        //Which increases wins
        scoreBoard.wins++;
        $("#wins").html(scoreBoard.wins);
        restartGame();
        // The player loses if their score goes above the random number.
    } else if (scoreBoard.notifier > computerChoice) {
        scoreBoard.losses++;
        $("#losses").html(scoreBoard.losses);
        restartGame();
    }
});

//diamond
$("#diamond").on("click", function() {
    //add to the notifier variable everytime when clicked
    scoreBoard.notifier += crystals[2];
    $("#notifier").text(scoreBoard.notifier);
    // The game will match the player's score against the computer's score. The player wins if their total score matches the random number from the beginning of the game.
    if (scoreBoard.notifier === computerChoice) {
        //Which increases wins
        scoreBoard.wins++;
        $("#wins").html(scoreBoard.wins);
        restartGame();
        // The player loses if their score goes above the random number.
    } else if (scoreBoard.notifier > computerChoice) {
        scoreBoard.losses++;
        $("#losses").html(scoreBoard.losses);
        restartGame();
    }
});

//emerald
$("#emerald").on("click", function() {
    //add to the notifier variable everytime when clicked
    scoreBoard.notifier += crystals[3];
    $("#notifier").text(scoreBoard.notifier);
    // The game will match the player's score against the computer's score. The player wins if their total score matches the random number from the beginning of the game.
    if (scoreBoard.notifier === computerChoice) {
        //Which increases wins
        scoreBoard.wins++;
        $("#wins").html(scoreBoard.wins);
        restartGame();
        // The player loses if their score goes above the random number.
    } else if (scoreBoard.notifier > computerChoice) {
        scoreBoard.losses++;
        $("#losses").html(scoreBoard.losses);
        restartGame();
    }
});

// restarting the game
function restartGame() {

    //set the counter back to 0
    scoreBoard.notifier = 0;
    //print the reset counter var to the html
    $("#notifier").text(scoreBoard.notifier);
    //generate a new random number
    computerChoice = randomChoice(120, 19);
    $("#random-number").html("   " + computerChoice);
    //clean the array
    crystals = [];
    //trigger function again to generate new chrystal numbers
    crystalArray();
}
