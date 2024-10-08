'use strict';



const randomNumberResult = Math.floor(Math.random() * 20 + 1);
console.log(randomNumberResult)

const selectPlayerInput = document.querySelector("input.guess");
const highScoreSelector = document.querySelector("span.highscore");
const scoreSelector = document.querySelector("span.score")
const body = document.body
let score = 20;
let highScore = 0;
let playerHasWon = false;

function ifNumberCorrect() {
document.querySelector("button.btn.check").addEventListener("click", () => {

    let printMessage = document.querySelector("p.message");
    let getValueFromPlayer = Number(selectPlayerInput.value)

    if (selectPlayerInput.value === "") {
        printMessage.textContent = "Please use a number!"
        return;
    }

    // logs guesses made
    const storeGuesses = document.createElement('span')
    storeGuesses.style.display = 'flex';
    storeGuesses.style.justifyContent = 'center';
    storeGuesses.style.fontSize = '3rem'
    storeGuesses.innerHTML = "Guess:" + getValueFromPlayer
    body.append(storeGuesses)

    // limits input between 1-20
    if (getValueFromPlayer < 0 || getValueFromPlayer > 20) {
        printMessage.textContent = "Please use a number between 1-20!"
        selectPlayerInput.value = "" // clears input field when invalid value is added
        return;
    }
    // if result is correct
    if (getValueFromPlayer === randomNumberResult) {
        printMessage.textContent = "You win!";
        // replaces background with gif when win and adds confetti
        document.querySelector(".number").textContent = randomNumberResult // prints correct result in "?"
        document.body.style.backgroundImage = 'url(https://data.textstudio.com/output/sample/animated/5/9/8/5/win-25-5895.gif)'
        document.body.style.backgroundRepeat = 'no-repeat';
        document.body.style.backgroundPosition = 'center';
        document.body.style.backgroundSize = 'cover';
        const jsConfetti = new JSConfetti()
        jsConfetti.addConfetti()
        playerHasWon = true;

        // set score to highScore if higher than highScore
        if (score > highScore) {
            highScore = score;
            highScoreSelector.textContent = highScore
        }
        // if user is wrong
        } else {
            printMessage.textContent = "Try again!";
            score--;
            scoreSelector.textContent = score;
    }
    selectPlayerInput.value = "" // clears input field

    // again button functionality
    function restartGameScore() {
        document.querySelector("button.again").addEventListener("click", () => {
            scoreSelector.textContent = 20;
            highScoreSelector.textContent = "0";
            selectPlayerInput.value = ""
            const removeGuesses = storeGuesses.remove()
            document.body.style.backgroundImage = ''
        });
    }
    restartGameScore()

})
}
ifNumberCorrect();
