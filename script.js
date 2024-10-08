'use strict';



const randomNumberResult = Math.floor(Math.random() * 20 + 1);
console.log(randomNumberResult)

const selectPlayerInput = document.querySelector("input.guess");
const highScoreSelector = document.querySelector("span.highscore");
const scoreSelector = document.querySelector("span.score")
const body = document.body
let score = 20;
let highScore = 0;

function checkIfGuessCorrect() {
document.querySelector("button.btn.check").addEventListener("click", () => {

    let printMessage = document.querySelector("p.message");
    let getValueFromPlayer = Number(selectPlayerInput.value);

    const storeGuesses = document.createElement('h2')
    storeGuesses.style.display = 'flex';
    storeGuesses.style.justifyContent = 'center';
    storeGuesses.style.textAlign = 'center';
    storeGuesses.innerHTML = "Guess:" + getValueFromPlayer
    body.append(storeGuesses)

    if (getValueFromPlayer < 1 || getValueFromPlayer > 20) {
        printMessage.textContent = "Please use a number between 1-20!"
        selectPlayerInput.value = "" // clears input field when invalid value is added
        return;
    }

    if (getValueFromPlayer === randomNumberResult) {
        printMessage.textContent = "You are correct!";
        document.querySelector(".number").textContent = randomNumberResult // prints correct result in "?"

        if (score > highScore) {
            highScore = score;
            highScoreSelector.textContent = highScore
        }

        } else {
            printMessage.textContent = "You are wrong!";
            score--;
            scoreSelector.textContent = score;
    }
    selectPlayerInput.value = "" // clears input field
})
}
checkIfGuessCorrect();

function restartGameScore() {
    document.querySelector("button.again").addEventListener("click", () => {
        scoreSelector.textContent = score;
        highScoreSelector.textContent = "0";
        selectPlayerInput.value = ""
    });
}
restartGameScore()

