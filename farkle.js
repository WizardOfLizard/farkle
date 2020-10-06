let rollDiceEl = document.getElementById("rollDice")

let rollTotEl = document.getElementById("rollTot")

let resetScoreEl = document.getElementById("resetScore")

let die1El = document.getElementById("die1")
let die2El = document.getElementById("die2")

let roll1
let roll2

let score

function getRandomInt (max) {
    return Math.floor(Math.random() * Math.floor(max))
}

function rollDice () {
    die1El.classList.remove("remove")
    die2El.classList.remove("remove")
    resetScoreEl.classList.remove("remove")
    roll1 = getRandomInt(6) + 1
    roll2 = getRandomInt(6) + 1
    score = roll1 + roll2
    if (roll1 === 1) {
        document.getElementById("die1").src="dice-six-faces-one.png"
    } else if (roll1 === 2) {
        document.getElementById("die1").src="dice-six-faces-two.png"
    } else if (roll1 === 3) {
        document.getElementById("die1").src="dice-six-faces-three.png"
    } else if (roll1 === 4) {
        document.getElementById("die1").src="dice-six-faces-four.png"
    } else if (roll1 === 5) {
        document.getElementById("die1").src="dice-six-faces-five.png"
    } else if (roll1 === 6) {
        document.getElementById("die1").src="dice-six-faces-six.png"
    }
    if (roll2 === 1) {
        document.getElementById("die2").src="dice-six-faces-one.png"
    } else if (roll2 === 2) {
        document.getElementById("die2").src="dice-six-faces-two.png"
    } else if (roll2 === 3) {
        document.getElementById("die2").src="dice-six-faces-three.png"
    } else if (roll2 === 4) {
        document.getElementById("die2").src="dice-six-faces-four.png"
    } else if (roll2 === 5) {
        document.getElementById("die2").src="dice-six-faces-five.png"
    } else if (roll2 === 6) {
        document.getElementById("die2").src="dice-six-faces-six.png"
    }
    rollTotEl.innerHTML = `Roll total: ${score}`
    console.log("Rolling dice")
    console.log(score)
}

function resetRoll () {
    die1El.classList.add("remove")
    die2El.classList.add("remove")
    resetScoreEl.classList.add("remove")
    rollTotEl.innerHTML = `Roll total: No Roll Yet`
}

rollDiceEl.addEventListener("click", rollDice)

resetScoreEl.addEventListener("click", resetRoll)



//console.log(getRandomInt(3))
//console.log(getRandomInt(1))
//console.log(Math.random())