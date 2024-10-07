'use strict';

const selectButtonCheck = document.querySelector("button.btn.check")
console.log(selectButtonCheck)
function checkPlayerInputCorrect() {
    const randomNumberResult = Math.floor(Math.random() * 20 + 1)
    const checkPlayerInput = document.querySelector("input")
    const outputOfPlayer = checkPlayerInput.value

    selectButtonCheck.addEventListener("click", () => {
        console.log(outputOfPlayer)
    });

    if (randomNumberResult === outputOfPlayer) {
        console.log("you win")
    } else if (randomNumberResult != outputOfPlayer) {
        console.log("you lose")
    }
}
checkPlayerInputCorrect()