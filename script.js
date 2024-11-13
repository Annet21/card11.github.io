let userScore = 0;
let computerScore = 0;
const maxWins = 3;

const userName = prompt("Введіть Ваше ім'я:");
document.getElementById("username").textContent = userName;

function generateNumbers() {
    let userNumber;
    let computerNumber;

    do {
        userNumber = Math.floor(Math.random() * 10) + 1;
    } while (userNumber === 1 || userNumber === 5);

    do {
        computerNumber = Math.floor(Math.random() * 10) + 1;
    } while (computerNumber === 1 || computerNumber === 5);

    const userRectangle = document.getElementById("userNumber");
    const computerRectangle = document.getElementById("computerNumber");

    userRectangle.textContent = userNumber;
    computerRectangle.textContent = computerNumber;

    userRectangle.style.backgroundImage = `url('${getBackgroundImage(userNumber)}')`;
    computerRectangle.style.backgroundImage = `url('${getBackgroundImage(computerNumber)}')`;

    userRectangle.style.backgroundSize = "cover";
    computerRectangle.style.backgroundSize = "cover";

    if (userNumber > computerNumber) {
        userScore++;
    } else if (computerNumber > userNumber) {
        computerScore++;
    }

    document.getElementById("userScore").textContent = userScore;
    document.getElementById("computerScore").textContent = computerScore;

    const winnerMessage = document.getElementById("winner");

if (userScore === maxWins) {
        winnerMessage.textContent = userName + " winner!";
        setTimeout(resetGame, 5000); 
    } else if (computerScore === maxWins) {
        winnerMessage.textContent = "Computer is a winner!";
        setTimeout(resetGame, 5000); 
    }
}
function getBackgroundImage(number) {
    switch (number) {
        case 2: return 'jack.png';
        case 3: return 'queen.png';
        case 4: return 'king.png';
        case 6: return '6.png';
        case 7: return '7.png';
        case 8: return '8.png';
        case 9: return '9.png';
        case 10: return '10.png';
        case 11: return 'ace.png';
    }
}

function resetGame() {
    userScore = 0;
    computerScore = 0;

    document.getElementById("userScore").textContent = userScore;
    document.getElementById("computerScore").textContent = computerScore;
    document.getElementById("userNumber").textContent = 0;
    document.getElementById("computerNumber").textContent = 0;
    document.getElementById("winner").textContent = "";

    const userRectangle = document.getElementById("userNumber");
    const computerRectangle = document.getElementById("computerNumber");

    userRectangle.style.backgroundImage = `url('cards.png')`;
    computerRectangle.style.backgroundImage = `url('cards.png')`;
}
document.getElementById("generate").addEventListener("click", generateNumbers);