'use strict';



const randomNumberResult = Math.floor(Math.random() * 20 + 1);
console.log(randomNumberResult)
let selectPlayerInput = document.querySelector("input.guess");
let highScore = 0;
let score = 20;

function checkIfPlayerCorrect() {
document.querySelector("button.btn.check").addEventListener("click", () => {

    let getValueFromPlayer = Number(selectPlayerInput.value);
    let printMessage = document.querySelector("p.message");
    const highScoreSelector = document.querySelector("span.highscore");
    let scoreSelector = document.querySelector("span.score")

    if (getValueFromPlayer === randomNumberResult) {
        printMessage.textContent = "You are correct!";
        document.querySelector(".number").textContent = randomNumberResult // prints correct result in "?"
        selectPlayerInput.value = "" // clears input field
        if (score < highScore) {
            highScore = score;
            highScoreSelector.textContent = highScore
        }
    } else {
        printMessage.textContent = "You are wrong!";
        scoreSelector = score--;
        selectPlayerInput.value = ""
    }

})
}
checkIfPlayerCorrect()

/*function changeHighScore () {
            const selectHighScore = Number(document.querySelector(".span.highscore").textContent)
            console.log(selectHighScore)
            if (getValueFromPlayer < highScore) {

            }
        }*/