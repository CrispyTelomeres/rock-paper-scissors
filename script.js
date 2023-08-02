function getComputerChoice() {
    return Math.floor(Math.random() * 3 + 1);

}
function getPlayerChoice() {
    var playerChoice = prompt("Rock, Papper or Scissors?")
    if (playerChoice.localeCompare("rock", 'en', {sensitivity: 'base'}) == 0) {
        return 1;
    } else if (playerChoice.localeCompare("paper", 'en', {sensitivity: 'base'}) == 0) {
        return 2;
    } else if (playerChoice.localeCompare("scissors", 'en', {sensitivity: 'base'}) == 0) {
        return 3;
    }
}

function playRound() {
    return [getPlayerChoice(), getComputerChoice()]
}

function game() {
    let a = 0;
    let b = 0;

    for (let i = 0; i < 5; i++) {
        const [x, y] = playRound()
        if (x === 1 && y === 1) {
            alert("Tie!");
        } else if (x === 1 && y === 2) {
            b++;
            alert("You lose! Paper beats Rock");
        } else if (x === 1 & y === 3) {
            a++;
            alert("You win! Rock beats scissors");
        } else if (x === 2 & y === 1) {
            a++;
            alert("You win! Paper beats rock");
        } else if (x === 2 & y === 2) {
            alert("Tie!");
        } else if (x === 2 && y ===3) {
            b++;
            alert("You lose! Scissors beats paper");
        } else if (x === 3 && y === 1) {
            b++;
            alert("You lose! Rock beats scissors");
        } else if (x === 3 && y === 2) {
            a++;
            alert("You win! Scissors beats paper");
        } else if (x === 3 && y === 3) {
            alert("Tie!");
        }
    }

    if (a > b) {
        alert("Player Wins!");
    } else if (a < b) {
        alert("Computer Wins!");
    }
    alert("Score: Player won " + a + " games " + "and computer won " + b + " games.")
}
console.log(game())
