'use strict';


// random number generator
let randomNumberResult = Math.floor(Math.random() * 20 + 1);

const selectPlayerInput = document.querySelector("input.guess");
const highScoreSelector = document.querySelector("span.highscore");
const scoreSelector = document.querySelector("span.score")
let score = 20;
let highScore = 0;
let playerHasWon = false;

// create empty array to store all guesses the user has made
const playerInputArray = []
// create element "paragraph" in html to store the user's guesses
const storeGuesses = document.createElement('p');
storeGuesses.style.display = "flex";
storeGuesses.style.alignItems = "column";
storeGuesses.style.lineHeight = "3rem"
storeGuesses.style.fontSize = '2rem';
storeGuesses.style.right = '100px';
storeGuesses.style.top = "100px";
// append it to right section to match the theme of the website
const rightSection = document.querySelector("section.right");
rightSection.appendChild(storeGuesses)

function ifNumberCorrect() {
document.querySelector("button.btn.check").addEventListener("click", () => {

    let printMessage = document.querySelector("p.message");
    let getValueFromPlayer = Number(selectPlayerInput.value)
    playerInputArray.push(getValueFromPlayer)
    storeGuesses.innerHTML = `❓ Guesses: ${playerInputArray.join (', ')}`;

    if (selectPlayerInput.value === "") {
        printMessage.textContent = "Please use a number!"
        return;
    }

    // limits input between 1-20
    if (getValueFromPlayer < 1 || getValueFromPlayer > 20) {
        printMessage.textContent = "Please use a number between 1-20!"
        selectPlayerInput.value = "" // clears input field when invalid value is added
        return;
    }
    // if player has won
    if (getValueFromPlayer === randomNumberResult) {
        printMessage.textContent = "You win!";
        // replaces background with gif when win and adds confetti
        document.querySelector(".number").textContent = randomNumberResult // prints correct result in "?"
        document.body.style.backgroundImage = 'url(https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExcWJmZzMzZWc3czE3MTc0cmQ1cmhqNHhkb3Y0YTZwZXFlMjF3aHl1ZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/uRAhwxlVBP6ied6EgB/giphy.webp)'
        document.body.style.backgroundRepeat = 'no-repeat';
        document.body.style.backgroundPosition = 'center';
        document.body.style.backgroundSize = 'cover';
        const jsConfetti = new JSConfetti();
        jsConfetti.addConfetti();
        playerHasWon = true;

        // set score to highScore if higher than highScore
        if (score > highScore) {
            highScore = score;
            highScoreSelector.textContent = highScore
        }
        // if user is wrong
        } else if (getValueFromPlayer < randomNumberResult) {
            printMessage.textContent = "Number is higher!";
            score--;
            scoreSelector.textContent = score;
        } else if (getValueFromPlayer > randomNumberResult) {
            printMessage.textContent = "Number is lower!";
            score--;
            scoreSelector.textContent = score;
    }
    selectPlayerInput.value = ""; // clears input field

})
}
ifNumberCorrect();

// again button functionality
function restartGameScore() {
    document.querySelector("button.again").addEventListener("click", () => {
        score = 20;
        scoreSelector.textContent = score;
        highScoreSelector.textContent = "0";
        playerInputArray.length = 0;
        selectPlayerInput.value = "";
        storeGuesses.innerHTML = "";
        document.body.style.backgroundImage = '';
        document.querySelector(".number").textContent = "?";
        playerHasWon = false;
        randomNumberResult = Math.floor(Math.random() * 20 + 1);
    });
}
restartGameScore()
