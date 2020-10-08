let rollDiceEl = document.getElementById("rollDice")

let resetAllEl = document.getElementById("resetAll")

let die1AEl = document.getElementById("die1A")
let die2AEl = document.getElementById("die2A")
let die3AEl = document.getElementById("die3A")
let die4AEl = document.getElementById("die4A")
let die5AEl = document.getElementById("die5A")
let die6AEl = document.getElementById("die6A")

let die1BEl = document.getElementById("die1B")
let die2BEl = document.getElementById("die2B")
let die3BEl = document.getElementById("die3B")
let die4BEl = document.getElementById("die4B")
let die5BEl = document.getElementById("die5B")
let die6BEl = document.getElementById("die6B")

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
    if (!roll1Saved) {
        die1AEl.classList.remove("remove")
    }
    if (!roll2Saved) {
        die2AEl.classList.remove("remove")
    }
    if (!roll3Saved) {
        die3AEl.classList.remove("remove")
    }
    if (!roll4Saved) {
        die4AEl.classList.remove("remove")
    }
    if (!roll5Saved) {
        die5AEl.classList.remove("remove")
    }
    if (!roll6Saved) {
        die6AEl.classList.remove("remove")
    }
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
        document.getElementById("die1B").src="dice-six-faces-one.png"
    } else if (roll1 === 2) {
        document.getElementById("die1A").src="dice-six-faces-two.png"
        document.getElementById("die1B").src="dice-six-faces-two.png"
    } else if (roll1 === 3) {
        document.getElementById("die1A").src="dice-six-faces-three.png"
        document.getElementById("die1B").src="dice-six-faces-three.png"
    } else if (roll1 === 4) {
        document.getElementById("die1A").src="dice-six-faces-four.png"
        document.getElementById("die1B").src="dice-six-faces-four.png"
    } else if (roll1 === 5) {
        document.getElementById("die1A").src="dice-six-faces-five.png"
        document.getElementById("die1B").src="dice-six-faces-five.png"
    } else if (roll1 === 6) {
        document.getElementById("die1A").src="dice-six-faces-six.png"
        document.getElementById("die1B").src="dice-six-faces-six.png"
    }
    if (roll2 === 1) {
        document.getElementById("die2A").src="dice-six-faces-one.png"
        document.getElementById("die2B").src="dice-six-faces-one.png"
    } else if (roll2 === 2) {
        document.getElementById("die2A").src="dice-six-faces-two.png"
        document.getElementById("die2B").src="dice-six-faces-two.png"
    } else if (roll2 === 3) {
        document.getElementById("die2A").src="dice-six-faces-three.png"
        document.getElementById("die2B").src="dice-six-faces-three.png"
    } else if (roll2 === 4) {
        document.getElementById("die2A").src="dice-six-faces-four.png"
        document.getElementById("die2B").src="dice-six-faces-four.png"
    } else if (roll2 === 5) {
        document.getElementById("die2A").src="dice-six-faces-five.png"
        document.getElementById("die2B").src="dice-six-faces-five.png"
    } else if (roll2 === 6) {
        document.getElementById("die2A").src="dice-six-faces-six.png"
        document.getElementById("die2B").src="dice-six-faces-six.png"
    }
    if (roll3 === 1) {
        document.getElementById("die3A").src="dice-six-faces-one.png"
        document.getElementById("die3B").src="dice-six-faces-one.png"
    } else if (roll3 === 2) {
        document.getElementById("die3A").src="dice-six-faces-two.png"
        document.getElementById("die3B").src="dice-six-faces-two.png"
    } else if (roll3 === 3) {
        document.getElementById("die3A").src="dice-six-faces-three.png"
        document.getElementById("die3B").src="dice-six-faces-three.png"
    } else if (roll3 === 4) {
        document.getElementById("die3A").src="dice-six-faces-four.png"
        document.getElementById("die3B").src="dice-six-faces-four.png"
    } else if (roll3 === 5) {
        document.getElementById("die3A").src="dice-six-faces-five.png"
        document.getElementById("die3B").src="dice-six-faces-five.png"
    } else if (roll3 === 6) {
        document.getElementById("die3A").src="dice-six-faces-six.png"
        document.getElementById("die3B").src="dice-six-faces-six.png"
    }
    if (roll4 === 1) {
        document.getElementById("die4A").src="dice-six-faces-one.png"
        document.getElementById("die4B").src="dice-six-faces-one.png"
    } else if (roll4 === 2) {
        document.getElementById("die4A").src="dice-six-faces-two.png"
        document.getElementById("die4B").src="dice-six-faces-two.png"
    } else if (roll4 === 3) {
        document.getElementById("die4A").src="dice-six-faces-three.png"
        document.getElementById("die4B").src="dice-six-faces-three.png"
    } else if (roll4 === 4) {
        document.getElementById("die4A").src="dice-six-faces-four.png"
        document.getElementById("die4B").src="dice-six-faces-four.png"
    } else if (roll4 === 5) {
        document.getElementById("die4A").src="dice-six-faces-five.png"
        document.getElementById("die4B").src="dice-six-faces-five.png"
    } else if (roll4 === 6) {
        document.getElementById("die4A").src="dice-six-faces-six.png"
        document.getElementById("die4B").src="dice-six-faces-six.png"
    }
    if (roll5 === 1) {
        document.getElementById("die5A").src="dice-six-faces-one.png"
        document.getElementById("die5B").src="dice-six-faces-one.png"
    } else if (roll5 === 2) {
        document.getElementById("die5A").src="dice-six-faces-two.png"
        document.getElementById("die5B").src="dice-six-faces-two.png"
    } else if (roll5 === 3) {
        document.getElementById("die5A").src="dice-six-faces-three.png"
        document.getElementById("die5B").src="dice-six-faces-three.png"
    } else if (roll5 === 4) {
        document.getElementById("die5A").src="dice-six-faces-four.png"
        document.getElementById("die5B").src="dice-six-faces-four.png"
    } else if (roll5 === 5) {
        document.getElementById("die5A").src="dice-six-faces-five.png"
        document.getElementById("die5B").src="dice-six-faces-five.png"
    } else if (roll5 === 6) {
        document.getElementById("die5A").src="dice-six-faces-six.png"
        document.getElementById("die5B").src="dice-six-faces-six.png"
    }
    if (roll6 === 1) {
        document.getElementById("die6A").src="dice-six-faces-one.png"
        document.getElementById("die6B").src="dice-six-faces-one.png"
    } else if (roll6 === 2) {
        document.getElementById("die6A").src="dice-six-faces-two.png"
        document.getElementById("die6B").src="dice-six-faces-two.png"
    } else if (roll6 === 3) {
        document.getElementById("die6A").src="dice-six-faces-three.png"
        document.getElementById("die6B").src="dice-six-faces-three.png"
    } else if (roll6 === 4) {
        document.getElementById("die6A").src="dice-six-faces-four.png"
        document.getElementById("die6B").src="dice-six-faces-four.png"
    } else if (roll6 === 5) {
        document.getElementById("die6A").src="dice-six-faces-five.png"
        document.getElementById("die6B").src="dice-six-faces-five.png"
    } else if (roll6 === 6) {
        document.getElementById("die6A").src="dice-six-faces-six.png"
        document.getElementById("die6B").src="dice-six-faces-six.png"
    }
    //console.log("Rolling dice")
}

function saveDie1 () {
    roll1Saved = true
    die1AEl.classList.add("remove")
    die1BEl.classList.remove("remove")
}
function saveDie2 () {
    roll2Saved = true
    die2AEl.classList.add("remove")
    die2BEl.classList.remove("remove")
}
function saveDie3 () {
    roll3Saved = true
    die3AEl.classList.add("remove")
    die3BEl.classList.remove("remove")
}
function saveDie4 () {
    roll4Saved = true
    die4AEl.classList.add("remove")
    die4BEl.classList.remove("remove")
}
function saveDie5 () {
    roll5Saved = true
    die5AEl.classList.add("remove")
    die5BEl.classList.remove("remove")
}
function saveDie6 () {
    roll6Saved = true
    die6AEl.classList.add("remove")
    die6BEl.classList.remove("remove")
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

die1AEl.addEventListener("click", saveDie1)
die2AEl.addEventListener("click", saveDie2)
die3AEl.addEventListener("click", saveDie3)
die4AEl.addEventListener("click", saveDie4)
die5AEl.addEventListener("click", saveDie5)
die6AEl.addEventListener("click", saveDie6)


//console.log(getRandomInt(3))
//console.log(getRandomInt(1))
//console.log(Math.random())