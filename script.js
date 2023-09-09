// defines scores
let playerScore = 0;
let computerScore = 0;

// adds event listener to each button to pass on button id information
const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click', handleEvent));

// recieves button information
function handleEvent(e) {
    if (e.target.id === "btn-newgame") {
        newGame();
    }
    else if (e.target.id === "btn-rock") {
        newRound(1);
    }
    else if (e.target.id === "btn-paper") {
        newRound(2);
    }
    else if (e.target.id === "btn-scissor") {
        newRound(3);
    }
}

// newGame resets scores to 0 and re-enables the buttons to play again
function newGame() {
    playerScore = 0;
    computerScore = 0;
    scoreCheck();
    const container = document.querySelector('#result');
    container.textContent = '';
    const container2 = document.querySelector('#winner');
    container2.textContent = ' ';
    document.getElementById('btn-rock').disabled = false;
    document.getElementById('btn-paper').disabled = false;
    document.getElementById('btn-scissor').disabled = false;
}

// adds text to html element declaring who won from end of newRound()
function winner(x) {
    const container = document.querySelector('#winner');
    if (x === 1) {
        container.textContent = "Player Won!";
        document.getElementById('winner').style.color = 'green';
    }
    else if (x === 2) {
        container.textContent = "Computer Won!";
        document.getElementById("winner").style.color = 'red';
    }
}

// tallies score & calls scoreCheck to update score
function score(x) {
    if (x === 1) {
        playerScore += 1;
        document.getElementById('result').style.color = 'green';
        scoreCheck();
    }
    else if (x === 2) {
        computerScore += 1;
        document.getElementById("result").style.color = 'red';
        scoreCheck();
    }
}

// updates score with incrmented tally, if theres a winner 
// it procs winner() and disables buttons
function scoreCheck () {
    const player = document.querySelector('#player');
    const computer = document.querySelector('#computer');
    player.textContent = playerScore;
    computer.textContent = computerScore;

    if (playerScore === 5) {
        winner(1);
        document.getElementById('btn-rock').disabled = true;
        document.getElementById('btn-paper').disabled = true;
        document.getElementById('btn-scissor').disabled = true;
    }
    else if (computerScore === 5) {
        winner(2);
        document.getElementById('btn-rock').disabled = true;
        document.getElementById('btn-paper').disabled = true;
        document.getElementById('btn-scissor').disabled = true;
    }
}

function roundResult(x) {
    const container = document.querySelector('#result');

    if (x === 1) {
        container.textContent = "Tie!";
        document.getElementById('result').style.color = 'yellow';
    }
    if (x === 2) {
        container.textContent = "You lose! Paper beats Rock!";
        score(2);
    }
    if (x === 3) {
        container.textContent = "You win! Rock beats scissors!";
        score(1);
    }
    if (x === 4) {
        container.textContent = "You win! Paper beats rock!";
        score(1);
    }
    if (x === 5) {
        container.textContent = "You lose! Scissors beat paper!";
        score(2);
    }
    if (x === 6) {
        container.textContent = "You lose! Rock beats scissors!";
        score(2);
    }
    if (x === 7) {
        container.textContent = "You win! Scissors beat paper!";
        score(1);
    }
}

// returns random choice from computer (1, 2, 3)
function getComputerChoice() {
    return Math.floor(Math.random() * 3 + 1);
}

// compares player and computer choices and procs roundResult() with a value
function newRound(x) {
    const y = getComputerChoice();
    if (x === 1 && y === 1) {
        roundResult(1);
    } else if (x === 1 && y === 2) {
        roundResult(2);
    } else if (x === 1 & y === 3) {
        roundResult(3);
    } else if (x === 2 & y === 1) {
        roundResult(4);
    } else if (x === 2 & y === 2) {
        roundResult(1);
    } else if (x === 2 && y ===3) {
        roundResult(5);
    } else if (x === 3 && y === 1) {
        roundResult(6);
    } else if (x === 3 && y === 2) {
        roundResult(7);
    } else if (x === 3 && y === 3) {
        roundResult(1);
    }



}
