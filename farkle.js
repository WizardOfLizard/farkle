let rollDiceEl = document.getElementById("rollDice")

let rollTotEl = document.getElementById("rollTot")

let resetScoreEl = document.getElementById("resetScore")

let score

function getRandomInt (max) {
    return Math.floor(Math.random() * Math.floor(max))
}

function roll2d6 () {
    score = Math.floor(getRandomInt(6) + getRandomInt(6) + 2)
    resetScoreEl.classList.remove("remove")
    console.log("Rolling 2d6")
}



rollDiceEl.addEventListener('click', roll2d6)

//console.log(getRandomInt(3))
//console.log(getRandomInt(1))
//console.log(Math.random())