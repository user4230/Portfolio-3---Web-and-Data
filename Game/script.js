'use strict';



let randomNumberResult = Math.floor(Math.random() * 20 + 1);
console.log(randomNumberResult) // for debugging
const selectPlayerInput = document.querySelector("input.guess");
const highScoreSelector = document.querySelector("span.highscore");
const scoreSelector = document.querySelector("span.score")
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

    // logs guesses made and stores them in right section
    const storeGuesses = document.createElement('span');
    storeGuesses.style.display = "flex";
    storeGuesses.style.alignItems = "column";
    storeGuesses.style.lineHeight = "3rem"
    storeGuesses.style.fontSize = '2rem';
    storeGuesses.style.right = '100px';
    storeGuesses.style.top = "100px";
    storeGuesses.innerHTML = "❓ Guess: " + getValueFromPlayer;
    const rightSection = document.querySelector("section.right");
    rightSection.appendChild(storeGuesses)

    // limits input between 1-20
    if (getValueFromPlayer < 0 || getValueFromPlayer > 20) {
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
        // reset randomNumberResult if user wants to keep playing and beat their highScore
        randomNumberResult = Math.floor(Math.random() * 20 + 1);
        console.log(randomNumberResult)

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
            storeGuesses.remove()
            document.body.style.backgroundImage = ''
            document.querySelector(".number").textContent = "?"

        });
    }
    restartGameScore()

})
}
ifNumberCorrect();
