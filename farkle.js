let rollDiceEl = document.getElementById("rollDice")

let resetAllEl = document.getElementById("resetAll")

let die1AEl = document.getElementById("die1A")
let die2AEl = document.getElementById("die2A")
let die3AEl = document.getElementById("die3A")
let die4AEl = document.getElementById("die4A")
let die5AEl = document.getElementById("die5A")
let die6AEl = document.getElementById("die6A")

let roll1
let roll2
let roll3
let roll4
let roll5
let roll6

let roll1Saved = false
let roll2Saved = false
let roll3Saved = false
let roll4Saved = false
let roll5Saved = false
let roll6Saved = false

let score1 = 0
let score2 = 0

let currentScore = 0

function getRandomInt (max) {
    return Math.floor(Math.random() * Math.floor(max))
}

function rollDice () {
    die1AEl.classList.remove("remove")
    die2AEl.classList.remove("remove")
    die3AEl.classList.remove("remove")
    die4AEl.classList.remove("remove")
    die5AEl.classList.remove("remove")
    die6AEl.classList.remove("remove")
    resetAllEl.classList.remove("remove")
    if (!roll1Saved) {
        roll1 = getRandomInt(6) + 1
        console.log("Rolling die 1")
    }
    if (!roll2Saved) {
        roll2 = getRandomInt(6) + 1
        console.log("Rolling die 2")
    }
    if (!roll3Saved) {
        roll3 = getRandomInt(6) + 1
        console.log("Rolling die 3")
    }
    if (!roll4Saved) {
        roll4 = getRandomInt(6) + 1
        console.log("Rolling die 4")
    }
    if (!roll5Saved) {
        roll5 = getRandomInt(6) + 1
        console.log("Rolling die 5")
    }
    if (!roll6Saved) {
        roll6 = getRandomInt(6) + 1
        console.log("Rolling die 6")
    }
    
    if (roll1 === 1) {
        document.getElementById("die1A").src="dice-six-faces-one.png"
    } else if (roll1 === 2) {
        document.getElementById("die1A").src="dice-six-faces-two.png"
    } else if (roll1 === 3) {
        document.getElementById("die1A").src="dice-six-faces-three.png"
    } else if (roll1 === 4) {
        document.getElementById("die1A").src="dice-six-faces-four.png"
    } else if (roll1 === 5) {
        document.getElementById("die1A").src="dice-six-faces-five.png"
    } else if (roll1 === 6) {
        document.getElementById("die1A").src="dice-six-faces-six.png"
    }
    if (roll2 === 1) {
        document.getElementById("die2A").src="dice-six-faces-one.png"
    } else if (roll2 === 2) {
        document.getElementById("die2A").src="dice-six-faces-two.png"
    } else if (roll2 === 3) {
        document.getElementById("die2A").src="dice-six-faces-three.png"
    } else if (roll2 === 4) {
        document.getElementById("die2A").src="dice-six-faces-four.png"
    } else if (roll2 === 5) {
        document.getElementById("die2A").src="dice-six-faces-five.png"
    } else if (roll2 === 6) {
        document.getElementById("die2A").src="dice-six-faces-six.png"
    }
    if (roll3 === 1) {
        document.getElementById("die3A").src="dice-six-faces-one.png"
    } else if (roll3 === 2) {
        document.getElementById("die3A").src="dice-six-faces-two.png"
    } else if (roll3 === 3) {
        document.getElementById("die3A").src="dice-six-faces-three.png"
    } else if (roll3 === 4) {
        document.getElementById("die3A").src="dice-six-faces-four.png"
    } else if (roll3 === 5) {
        document.getElementById("die3A").src="dice-six-faces-five.png"
    } else if (roll3 === 6) {
        document.getElementById("die3A").src="dice-six-faces-six.png"
    }
    if (roll4 === 1) {
        document.getElementById("die4A").src="dice-six-faces-one.png"
    } else if (roll4 === 2) {
        document.getElementById("die4A").src="dice-six-faces-two.png"
    } else if (roll4 === 3) {
        document.getElementById("die4A").src="dice-six-faces-three.png"
    } else if (roll4 === 4) {
        document.getElementById("die4A").src="dice-six-faces-four.png"
    } else if (roll4 === 5) {
        document.getElementById("die4A").src="dice-six-faces-five.png"
    } else if (roll4 === 6) {
        document.getElementById("die4A").src="dice-six-faces-six.png"
    }
    if (roll5 === 1) {
        document.getElementById("die5A").src="dice-six-faces-one.png"
    } else if (roll5 === 2) {
        document.getElementById("die5A").src="dice-six-faces-two.png"
    } else if (roll5 === 3) {
        document.getElementById("die5A").src="dice-six-faces-three.png"
    } else if (roll5 === 4) {
        document.getElementById("die5A").src="dice-six-faces-four.png"
    } else if (roll5 === 5) {
        document.getElementById("die5A").src="dice-six-faces-five.png"
    } else if (roll5 === 6) {
        document.getElementById("die5A").src="dice-six-faces-six.png"
    }
    if (roll6 === 1) {
        document.getElementById("die6A").src="dice-six-faces-one.png"
    } else if (roll6 === 2) {
        document.getElementById("die6A").src="dice-six-faces-two.png"
    } else if (roll6 === 3) {
        document.getElementById("die6A").src="dice-six-faces-three.png"
    } else if (roll6 === 4) {
        document.getElementById("die6A").src="dice-six-faces-four.png"
    } else if (roll6 === 5) {
        document.getElementById("die6A").src="dice-six-faces-five.png"
    } else if (roll6 === 6) {
        document.getElementById("die6A").src="dice-six-faces-six.png"
    }
    //console.log("Rolling dice")
}

function resetAll () {
    die1AEl.classList.add("remove")
    die2AEl.classList.add("remove")
    die3AEl.classList.add("remove")
    die4AEl.classList.add("remove")
    die5AEl.classList.add("remove")
    die6AEl.classList.add("remove")
    resetAllEl.classList.add("remove")
}

rollDiceEl.addEventListener("click", rollDice)

resetAllEl.addEventListener("click", resetAll)



//console.log(getRandomInt(3))
//console.log(getRandomInt(1))
//console.log(Math.random())