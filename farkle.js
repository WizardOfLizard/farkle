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

let oneOneEl = document.getElementById("oneOne")
let oneFiveEl = document.getElementById("oneFive")
let threeOneEl = document.getElementById("threeOne")
let threeTwoEl = document.getElementById("threeTwo")
let threeThreeEl = document.getElementById("threeThree")
let threeFourEl = document.getElementById("threeFour")
let threeFiveEl = document.getElementById("threeFive")
let threeSixEl = document.getElementById("threeSix")
let fourKindEl = document.getElementById("fourKind")
let fiveKindEl = document.getElementById("fiveKind")
let sixKindEl = document.getElementById("sixKind")
let straightEl = document.getElementById("straight")
let threePairEl = document.getElementById("threePair")
let pairQuadEl = document.getElementById("pairQuad")
let twoTripEl = document.getElementById("twoTrip")

let currentPEl = document.getElementById("currentP")
let score1El = document.getElementById("score1")
let score2El = document.getElementById("score2")

let currentScoreEl = document.getElementById("currentScore")

let saveEl = document.getElementById("save")

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

let isFarkle = true

let score1 = 0
let score2 = 0

let currentPlayer = 1

let name1 = window.prompt("Player 1, what is your name?")
let name2 = window.prompt("Player 2, what is your name?")

let currentScore = 0

let endgame = false

function getRandomInt (max) {
    return Math.floor(Math.random() * Math.floor(max))
}

function rollDice () {
    if (roll1Saved && roll2Saved && roll3Saved && roll4Saved && roll5Saved && roll6Saved) {
        roll1Saved = false
        roll2Saved = false
        roll3Saved = false
        roll4Saved = false
        roll5Saved = false
        roll6Saved = false
    }
    console.log("New Roll...")
    isFarkle = true
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
    if (!roll1Saved) {
        roll1 = getRandomInt(6) + 1
        //console.log("Rolling die 1")
    }
    if (!roll2Saved) {
        roll2 = getRandomInt(6) + 1
        //console.log("Rolling die 2")
    }
    if (!roll3Saved) {
        roll3 = getRandomInt(6) + 1
        //console.log("Rolling die 3")
    }
    if (!roll4Saved) {
        roll4 = getRandomInt(6) + 1
        //console.log("Rolling die 4")
    }
    if (!roll5Saved) {
        roll5 = getRandomInt(6) + 1
        //console.log("Rolling die 5")
    }
    if (!roll6Saved) {
        roll6 = getRandomInt(6) + 1
        //console.log("Rolling die 6")
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
    rollDiceEl.classList.add("remove")
    checkAll()
    if (isFarkle) {
        window.alert("You rolled a Farkle.  Your turn is over.")
        rollDiceEl.classList.remove("remove")
        currentScore = 0
        if (currentPlayer === 1) {
            currentPlayer = 2
            console.log("changing players...")
            currentPEl.innerHTML = `Current Player: ${name2}`
        }
        if (currentPlayer === 2) {
            currentPlayer = 1
            currentPEl.innerHTML = `Current Player: ${name1}`
        }
        currentScoreEl.innerHTML = `Current Score: ${currentScore}`
        saveEl.classList.add("remove")
        resetAll()
        if (endgame) {
            window.alert("The game is over, let's see who won.")
            if (score1 > score2) {
                window.alert(`Well done, ${name1}, you beat ${name2} by ${score1-score2}.  You are a good player.  If you want to play again, reload the page.`)
            }
            if (score1 < score2) {
                window.alert(`Well done, ${name2}, you beat ${name1} by ${score2-score1}.  You are a good player.  If you want to play again, reload the page.`)
            }
            if (score1 === score2) {
                window.alert(`Wow... Just... Wow...  either you guys are stupid, or you were trying to break the game.  ${name1} and ${name2}, you disapoint me.  If you want to play the game CORRECTLY, reload the page.`)
            }
        }
    }
    //console.log(`${checkNum(1, 2)}`)
    //console.log("Rolling dice")
}

function checkNum (num, amnt) {
    let total = 0
    if (roll1 === num && !roll1Saved) {
        total ++
    }
    if (roll2 === num && !roll2Saved) {
        total ++
    }
    if (roll3 === num && !roll3Saved) {
        total ++
    }
    if (roll4 === num && !roll4Saved) {
        total ++
    }
    if (roll5 === num && !roll5Saved) {
        total ++
    }
    if (roll6 === num && !roll6Saved) {
        total ++
    }
    if (total >= amnt) {
        return true
    } else {
        return false
    }
}
function check3Pair () {
    let total = 0
    //console.log("Checking...")
    if (checkNum(1, 2)) {
        total ++
        //console.log("pair of ones")
    }
    if (checkNum(2, 2)) {
        total ++
        //console.log("pair of twos")
    }
    if (checkNum(3, 2)) {
        total ++
        //console.log("pair of threes")
    }
    if (checkNum(4, 2)) {
        total ++
        //console.log("pair of fours")
    }
    if (checkNum(5, 2)) {
        total ++
        //console.log("pair of fives")
    }
    if (checkNum(6, 2)) {
        total ++
        //console.log("pair of sixes")
    }
    if (total === 3) {
        return true
    } else {
        return false
    }
}
function checkPairFour () {
    let total = 0
    if (checkNum(1, 2)) {
        total ++
    }
    if (checkNum(2, 2)) {
        total ++
    }
    if (checkNum(3, 2)) {
        total ++
    }
    if (checkNum(4, 2)) {
        total ++
    }
    if (checkNum(5, 2)) {
        total ++
    }
    if (checkNum(6, 2)) {
        total ++
    }
    if (checkNum(1, 4)) {
        total ++
    } else if (checkNum(2, 4)) {
        total ++
    } else if (checkNum(3, 4)) {
        total ++
    } else if (checkNum(4, 4)) {
        total ++
    } else if (checkNum(5, 4)) {
        total ++
    } else if (checkNum(6, 4)) {
        total ++
    } else {
        total --
    }
    if (total === 3) {
        return true
    } else {
        return false
    }
}
function check2Trip () {
    let total = 0
    if (checkNum(1, 3)) {
        total ++
    }
    if (checkNum(2, 3)) {
        total ++
    }
    if (checkNum(3, 3)) {
        total ++
    }
    if (checkNum(4, 3)) {
        total ++
    }
    if (checkNum(5, 3)) {
        total ++
    }
    if (checkNum(6, 3)) {
        total ++
    }
    if (total === 2) {
        return true
    } else {
        return false
    }
}
function checkAll () {
    if (checkNum(1, 1)) {
        isFarkle = false
        oneOneEl.classList.remove("remove")
        console.log("There is one one.")
    } else {
        oneOneEl.classList.add("remove")
    }
    if (checkNum(5, 1)) {
        isFarkle = false
        oneFiveEl.classList.remove("remove")
        console.log("There is one five.")
    } else {
        oneFiveEl.classList.add("remove")
    }
    if (checkNum(1, 3)) {
        isFarkle = false
        threeOneEl.classList.remove("remove")
        console.log("There are three ones.")
    } else {
        threeOneEl.classList.add("remove")
    }
    if (checkNum(2, 3)) {
        isFarkle = false
        threeTwoEl.classList.remove("remove")
        console.log("There are three twos.")
    } else {
        threeTwoEl.classList.add("remove")
    }
    if (checkNum(3, 3)) {
        isFarkle = false
        threeThreeEl.classList.remove("remove")
        console.log("There are three threes.")
    } else {
        threeThreeEl.classList.add("remove")
    }
    if (checkNum(4, 3)) {
        isFarkle = false
        threeFourEl.classList.remove("remove")
        console.log("There are three fours.")
    } else {
        threeFourEl.classList.add("remove")
    }
    if (checkNum(5, 3)) {
        isFarkle = false
        threeFiveEl.classList.remove("remove")
        console.log("There are three fives.")
    } else {
        threeFiveEl.classList.add("remove")
    }
    if (checkNum(6, 3)) {
        isFarkle = false
        threeSixEl.classList.remove("remove")
        console.log("There are three sixes.")
    } else {
        threeSixEl.classList.add("remove")
    }
    if (checkNum(1, 4) || checkNum(2, 4) || checkNum(3, 4) || checkNum(4, 4) || checkNum(5, 4) || checkNum(6, 4)) {
        isFarkle = false
        fourKindEl.classList.remove("remove")
        console.log("There is four of a kind.")
    } else {
        fourKindEl.classList.add("remove")
    }
    if (checkNum(1, 5) || checkNum(2, 5) || checkNum(3, 5) || checkNum(4, 5) || checkNum(5, 5) || checkNum(6, 5)) {
        isFarkle = false
        fiveKindEl.classList.remove("remove")
        console.log("There is five of a kind.")
    } else {
        fiveKindEl.classList.add("remove")
    }
    if (checkNum(1, 6) || checkNum(2, 6) || checkNum(3, 6) || checkNum(4, 6) || checkNum(5, 6) || checkNum(6, 6)) {
        isFarkle = false
        sixKindEl.classList.remove("remove")
        console.log("There is six of a kind.")
    } else {
        sixKindEl.classList.add("remove")
    }
    if (checkNum(1, 1) && checkNum(2, 1) && checkNum(3, 1) && checkNum(4, 1) && checkNum(5, 1) && checkNum(6, 1)) {
        isFarkle = false
        straightEl.classList.remove("remove")
        console.log("There is a straight.")
    } else {
        straightEl.classList.add("remove")
    }
    if (check3Pair()) {
        isFarkle = false
        threePairEl.classList.remove("remove")
        console.log("There are three pairs.")
    } else {
        threePairEl.classList.add("remove")
    }
    if (checkPairFour()) {
        isFarkle = false
        pairQuadEl.classList.remove("remove")
        console.log("There is a pair and a four of a kind.")
    } else {
        pairQuadEl.classList.add("remove")
    }
    if (check2Trip()) {
        isFarkle = false
        twoTripEl.classList.remove("remove")
        console.log("There are 2 triples.")
    } else {
        twoTripEl.classList.add("remove")
    }
}

function saveDie1 () {
    roll1Saved = true
    die1AEl.classList.add("remove")
    die1BEl.classList.remove("remove")
    saveEl.classList.remove("remove")
}
function saveDie2 () {
    roll2Saved = true
    die2AEl.classList.add("remove")
    die2BEl.classList.remove("remove")
    saveEl.classList.remove("remove")
}
function saveDie3 () {
    roll3Saved = true
    die3AEl.classList.add("remove")
    die3BEl.classList.remove("remove")
    saveEl.classList.remove("remove")
}
function saveDie4 () {
    roll4Saved = true
    die4AEl.classList.add("remove")
    die4BEl.classList.remove("remove")
    saveEl.classList.remove("remove")
}
function saveDie5 () {
    roll5Saved = true
    die5AEl.classList.add("remove")
    die5BEl.classList.remove("remove")
    saveEl.classList.remove("remove")
}
function saveDie6 () {
    roll6Saved = true
    die6AEl.classList.add("remove")
    die6BEl.classList.remove("remove")
    saveEl.classList.remove("remove")
}

function scoreOneOne () {
    let total = 0
    if (roll1 === 1 && !roll1Saved && total < 1) {
        saveDie1()
        total ++
    }
    if (roll2 === 1 && !roll2Saved && total < 1) {
        saveDie2()
        total ++
    }
    if (roll3 === 1 && !roll3Saved && total < 1) {
        saveDie3()
        total ++
    }
    if (roll4 === 1 && !roll4Saved && total < 1) {
        saveDie4()
        total ++
    }
    if (roll5 === 1 && !roll5Saved && total < 1) {
        saveDie5()
        total ++
    }
    if (roll6 === 1 && !roll6Saved && total < 1) {
        saveDie6()
        total ++
    }
    currentScore += 100
    rollDiceEl.classList.remove("remove")
    currentScoreEl.innerHTML = `Current Score: ${currentScore}`
    //console.log(currentScore)
    checkAll()
}
function scoreOneFive () {
    let total = 0
    if (roll1 === 5 && !roll1Saved && total < 1) {
        saveDie1()
        total ++
    }
    if (roll2 === 5 && !roll2Saved && total < 1) {
        saveDie2()
        total ++
    }
    if (roll3 === 5 && !roll3Saved && total < 1) {
        saveDie3()
        total ++
    }
    if (roll4 === 5 && !roll4Saved && total < 1) {
        saveDie4()
        total ++
    }
    if (roll5 === 5 && !roll5Saved && total < 1) {
        saveDie5()
        total ++
    }
    if (roll6 === 5 && !roll6Saved && total < 1) {
        saveDie6()
        total ++
    }
    currentScore += 50
    rollDiceEl.classList.remove("remove")
    currentScoreEl.innerHTML = `Current Score: ${currentScore}`
    //console.log(currentScore)
    checkAll()
}
function scoreThreeOne () {
    let total = 0
    if (roll1 === 1 && !roll1Saved && total < 3) {
        saveDie1()
        total ++
    }
    if (roll2 === 1 && !roll2Saved && total < 3) {
        saveDie2()
        total ++
    }
    if (roll3 === 1 && !roll3Saved && total < 3) {
        saveDie3()
        total ++
    }
    if (roll4 === 1 && !roll4Saved && total < 3) {
        saveDie4()
        total ++
    }
    if (roll5 === 1 && !roll5Saved && total < 3) {
        saveDie5()
        total ++
    }
    if (roll6 === 1 && !roll6Saved && total < 3) {
        saveDie6()
        total ++
    }
    currentScore += 300
    rollDiceEl.classList.remove("remove")
    currentScoreEl.innerHTML = `Current Score: ${currentScore}`
    //console.log(currentScore)
    checkAll()
}
function scoreThreeTwo () {
    let total = 0
    if (roll1 === 2 && !roll1Saved && total < 3) {
        saveDie1()
        total ++
    }
    if (roll2 === 2 && !roll2Saved && total < 3) {
        saveDie2()
        total ++
    }
    if (roll3 === 2 && !roll3Saved && total < 3) {
        saveDie3()
        total ++
    }
    if (roll4 === 2 && !roll4Saved && total < 3) {
        saveDie4()
        total ++
    }
    if (roll5 === 2 && !roll5Saved && total < 3) {
        saveDie5()
        total ++
    }
    if (roll6 === 2 && !roll6Saved && total < 3) {
        saveDie6()
        total ++
    }
    currentScore += 200
    rollDiceEl.classList.remove("remove")
    currentScoreEl.innerHTML = `Current Score: ${currentScore}`
    //console.log(currentScore)
    checkAll()
}
function scoreThreeThree () {
    let total = 0
    if (roll1 === 3 && !roll1Saved && total < 3) {
        saveDie1()
        total ++
    }
    if (roll2 === 3 && !roll2Saved && total < 3) {
        saveDie2()
        total ++
    }
    if (roll3 === 3 && !roll3Saved && total < 3) {
        saveDie3()
        total ++
    }
    if (roll4 === 3 && !roll4Saved && total < 3) {
        saveDie4()
        total ++
    }
    if (roll5 === 3 && !roll5Saved && total < 3) {
        saveDie5()
        total ++
    }
    if (roll6 === 3 && !roll6Saved && total < 3) {
        saveDie6()
        total ++
    }
    currentScore += 300
    rollDiceEl.classList.remove("remove")
    currentScoreEl.innerHTML = `Current Score: ${currentScore}`
    //console.log(currentScore)
    checkAll()
}
function scoreThreeFour () {
    let total = 0
    if (roll1 === 4 && !roll1Saved && total < 3) {
        saveDie1()
        total ++
    }
    if (roll2 === 4 && !roll2Saved && total < 3) {
        saveDie2()
        total ++
    }
    if (roll3 === 4 && !roll3Saved && total < 3) {
        saveDie3()
        total ++
    }
    if (roll4 === 4 && !roll4Saved && total < 3) {
        saveDie4()
        total ++
    }
    if (roll5 === 4 && !roll5Saved && total < 3) {
        saveDie5()
        total ++
    }
    if (roll6 === 4 && !roll6Saved && total < 3) {
        saveDie6()
        total ++
    }
    currentScore += 400
    rollDiceEl.classList.remove("remove")
    currentScoreEl.innerHTML = `Current Score: ${currentScore}`
    //console.log(currentScore)
    checkAll()
}
function scoreThreeFive () {
    let total = 0
    if (roll1 === 5 && !roll1Saved && total < 3) {
        saveDie1()
        total ++
    }
    if (roll2 === 5 && !roll2Saved && total < 3) {
        saveDie2()
        total ++
    }
    if (roll3 === 5 && !roll3Saved && total < 3) {
        saveDie3()
        total ++
    }
    if (roll4 === 5 && !roll4Saved && total < 3) {
        saveDie4()
        total ++
    }
    if (roll5 === 5 && !roll5Saved && total < 3) {
        saveDie5()
        total ++
    }
    if (roll6 === 5 && !roll6Saved && total < 3) {
        saveDie6()
        total ++
    }
    currentScore += 500
    rollDiceEl.classList.remove("remove")
    currentScoreEl.innerHTML = `Current Score: ${currentScore}`
    //console.log(currentScore)
    checkAll()
}
function scoreThreeSix () {
    let total = 0
    if (roll1 === 6 && !roll1Saved && total < 3) {
        saveDie1()
        total ++
    }
    if (roll2 === 6 && !roll2Saved && total < 3) {
        saveDie2()
        total ++
    }
    if (roll3 === 6 && !roll3Saved && total < 3) {
        saveDie3()
        total ++
    }
    if (roll4 === 6 && !roll4Saved && total < 3) {
        saveDie4()
        total ++
    }
    if (roll5 === 6 && !roll5Saved && total < 3) {
        saveDie5()
        total ++
    }
    if (roll6 === 6 && !roll6Saved && total < 3) {
        saveDie6()
        total ++
    }
    currentScore += 600
    rollDiceEl.classList.remove("remove")
    currentScoreEl.innerHTML = `Current Score: ${currentScore}`
    //console.log(currentScore)
    checkAll()
}
function scoreFourKind () {
    let total = 0
    if (checkNum(1, 4)) {
        if (roll1 === 1 && !roll1Saved && total < 4) {
            saveDie1()
            total ++
        }
        if (roll2 === 1 && !roll2Saved && total < 4) {
            saveDie2()
            total ++
        }
        if (roll3 === 1 && !roll3Saved && total < 4) {
            saveDie3()
            total ++
        }
        if (roll4 === 1 && !roll4Saved && total < 4) {
            saveDie4()
            total ++
        }
        if (roll5 === 1 && !roll5Saved && total < 4) {
            saveDie5()
            total ++
        }
        if (roll6 === 1 && !roll6Saved && total < 4) {
            saveDie6()
            total ++
        }
    } else if (checkNum(2, 4)) {
        if (roll1 === 2 && !roll1Saved && total < 4) {
            saveDie1()
            total ++
        }
        if (roll2 === 2 && !roll2Saved && total < 4) {
            saveDie2()
            total ++
        }
        if (roll3 === 2 && !roll3Saved && total < 4) {
            saveDie3()
            total ++
        }
        if (roll4 === 2 && !roll4Saved && total < 4) {
            saveDie4()
            total ++
        }
        if (roll5 === 2 && !roll5Saved && total < 4) {
            saveDie5()
            total ++
        }
        if (roll6 === 2 && !roll6Saved && total < 4) {
            saveDie6()
            total ++
        }
    } else if (checkNum(3, 4)) {
        if (roll1 === 3 && !roll1Saved && total < 4) {
            saveDie1()
            total ++
        }
        if (roll2 === 3 && !roll2Saved && total < 4) {
            saveDie2()
            total ++
        }
        if (roll3 === 3 && !roll3Saved && total < 4) {
            saveDie3()
            total ++
        }
        if (roll4 === 3 && !roll4Saved && total < 4) {
            saveDie4()
            total ++
        }
        if (roll5 === 3 && !roll5Saved && total < 4) {
            saveDie5()
            total ++
        }
        if (roll6 === 3 && !roll6Saved && total < 4) {
            saveDie6()
            total ++
        }
    } else if (checkNum(4, 4)) {
        if (roll1 === 4 && !roll1Saved && total < 4) {
            saveDie1()
            total ++
        }
        if (roll2 === 4 && !roll2Saved && total < 4) {
            saveDie2()
            total ++
        }
        if (roll3 === 4 && !roll3Saved && total < 4) {
            saveDie3()
            total ++
        }
        if (roll4 === 4 && !roll4Saved && total < 4) {
            saveDie4()
            total ++
        }
        if (roll5 === 4 && !roll5Saved && total < 4) {
            saveDie5()
            total ++
        }
        if (roll6 === 4 && !roll6Saved && total < 4) {
            saveDie6()
            total ++
        }
    } else if (checkNum(5, 4)) {
        if (roll1 === 5 && !roll1Saved && total < 4) {
            saveDie1()
            total ++
        }
        if (roll2 === 5 && !roll2Saved && total < 4) {
            saveDie2()
            total ++
        }
        if (roll3 === 5 && !roll3Saved && total < 4) {
            saveDie3()
            total ++
        }
        if (roll4 === 5 && !roll4Saved && total < 4) {
            saveDie4()
            total ++
        }
        if (roll5 === 5 && !roll5Saved && total < 4) {
            saveDie5()
            total ++
        }
        if (roll6 === 5 && !roll6Saved && total < 4) {
            saveDie6()
            total ++
        }
    } else if (checkNum(6, 4)) {
        if (roll1 === 6 && !roll1Saved && total < 4) {
            saveDie1()
            total ++
        }
        if (roll2 === 6 && !roll2Saved && total < 4) {
            saveDie2()
            total ++
        }
        if (roll3 === 6 && !roll3Saved && total < 4) {
            saveDie3()
            total ++
        }
        if (roll4 === 6 && !roll4Saved && total < 4) {
            saveDie4()
            total ++
        }
        if (roll5 === 6 && !roll5Saved && total < 4) {
            saveDie5()
            total ++
        }
        if (roll6 === 6 && !roll6Saved && total < 4) {
            saveDie6()
            total ++
        }
    }
    currentScore += 1000
    rollDiceEl.classList.remove("remove")
    currentScoreEl.innerHTML = `Current Score: ${currentScore}`
    //console.log(currentScore)
    checkAll()
}
function scoreFiveKind () {
    let total = 0
    if (checkNum(1, 4)) {
        if (roll1 === 1 && !roll1Saved && total < 5) {
            saveDie1()
            total ++
        }
        if (roll2 === 1 && !roll2Saved && total < 5) {
            saveDie2()
            total ++
        }
        if (roll3 === 1 && !roll3Saved && total < 5) {
            saveDie3()
            total ++
        }
        if (roll4 === 1 && !roll4Saved && total < 5) {
            saveDie4()
            total ++
        }
        if (roll5 === 1 && !roll5Saved && total < 5) {
            saveDie5()
            total ++
        }
        if (roll6 === 1 && !roll6Saved && total < 5) {
            saveDie6()
            total ++
        }
    } else if (checkNum(2, 4)) {
        if (roll1 === 2 && !roll1Saved && total < 5) {
            saveDie1()
            total ++
        }
        if (roll2 === 2 && !roll2Saved && total < 5) {
            saveDie2()
            total ++
        }
        if (roll3 === 2 && !roll3Saved && total < 5) {
            saveDie3()
            total ++
        }
        if (roll4 === 2 && !roll4Saved && total < 5) {
            saveDie4()
            total ++
        }
        if (roll5 === 2 && !roll5Saved && total < 5) {
            saveDie5()
            total ++
        }
        if (roll6 === 2 && !roll6Saved && total < 5) {
            saveDie6()
            total ++
        }
    } else if (checkNum(3, 4)) {
        if (roll1 === 3 && !roll1Saved && total < 5) {
            saveDie1()
            total ++
        }
        if (roll2 === 3 && !roll2Saved && total < 5) {
            saveDie2()
            total ++
        }
        if (roll3 === 3 && !roll3Saved && total < 5) {
            saveDie3()
            total ++
        }
        if (roll4 === 3 && !roll4Saved && total < 5) {
            saveDie4()
            total ++
        }
        if (roll5 === 3 && !roll5Saved && total < 5) {
            saveDie5()
            total ++
        }
        if (roll6 === 3 && !roll6Saved && total < 5) {
            saveDie6()
            total ++
        }
    } else if (checkNum(4, 4)) {
        if (roll1 === 4 && !roll1Saved && total < 5) {
            saveDie1()
            total ++
        }
        if (roll2 === 4 && !roll2Saved && total < 5) {
            saveDie2()
            total ++
        }
        if (roll3 === 4 && !roll3Saved && total < 5) {
            saveDie3()
            total ++
        }
        if (roll4 === 4 && !roll4Saved && total < 5) {
            saveDie4()
            total ++
        }
        if (roll5 === 4 && !roll5Saved && total < 5) {
            saveDie5()
            total ++
        }
        if (roll6 === 4 && !roll6Saved && total < 5) {
            saveDie6()
            total ++
        }
    } else if (checkNum(5, 4)) {
        if (roll1 === 5 && !roll1Saved && total < 5) {
            saveDie1()
            total ++
        }
        if (roll2 === 5 && !roll2Saved && total < 5) {
            saveDie2()
            total ++
        }
        if (roll3 === 5 && !roll3Saved && total < 5) {
            saveDie3()
            total ++
        }
        if (roll4 === 5 && !roll4Saved && total < 5) {
            saveDie4()
            total ++
        }
        if (roll5 === 5 && !roll5Saved && total < 5) {
            saveDie5()
            total ++
        }
        if (roll6 === 5 && !roll6Saved && total < 5) {
            saveDie6()
            total ++
        }
    } else if (checkNum(6, 4)) {
        if (roll1 === 6 && !roll1Saved && total < 5) {
            saveDie1()
            total ++
        }
        if (roll2 === 6 && !roll2Saved && total < 5) {
            saveDie2()
            total ++
        }
        if (roll3 === 6 && !roll3Saved && total < 5) {
            saveDie3()
            total ++
        }
        if (roll4 === 6 && !roll4Saved && total < 5) {
            saveDie4()
            total ++
        }
        if (roll5 === 6 && !roll5Saved && total < 5) {
            saveDie5()
            total ++
        }
        if (roll6 === 6 && !roll6Saved && total < 5) {
            saveDie6()
            total ++
        }
    }
    currentScore += 2000
    rollDiceEl.classList.remove("remove")
    currentScoreEl.innerHTML = `Current Score: ${currentScore}`
    //console.log(currentScore)
    checkAll()
}
function scoreSixKind () {
    saveDie1()
    saveDie2()
    saveDie3()
    saveDie4()
    saveDie5()
    saveDie6()
    currentScore += 3000
    rollDiceEl.classList.remove("remove")
    currentScoreEl.innerHTML = `Current Score: ${currentScore}`
    //console.log(currentScore)
    checkAll()
}
function scoreStraight () {
    saveDie1()
    saveDie2()
    saveDie3()
    saveDie4()
    saveDie5()
    saveDie6()
    currentScore += 1500
    rollDiceEl.classList.remove("remove")
    currentScoreEl.innerHTML = `Current Score: ${currentScore}`
    //console.log(currentScore)
    checkAll()
}
function scoreThreePair () {
    saveDie1()
    saveDie2()
    saveDie3()
    saveDie4()
    saveDie5()
    saveDie6()
    currentScore += 1500
    rollDiceEl.classList.remove("remove")
    currentScoreEl.innerHTML = `Current Score: ${currentScore}`
    //console.log(currentScore)
    checkAll()
}
function scorePairQuad () {
    saveDie1()
    saveDie2()
    saveDie3()
    saveDie4()
    saveDie5()
    saveDie6()
    currentScore += 1500
    rollDiceEl.classList.remove("remove")
    currentScoreEl.innerHTML = `Current Score: ${currentScore}`
    //console.log(currentScore)
    checkAll()
}
function scoreTwoTrip () {
    saveDie1()
    saveDie2()
    saveDie3()
    saveDie4()
    saveDie5()
    saveDie6()
    currentScore += 2500
    rollDiceEl.classList.remove("remove")
    currentScoreEl.innerHTML = `Current Score: ${currentScore}`
    //console.log(currentScore)
    checkAll()
}

function saveScore () {
    if (currentPlayer === 1) {
        if (score1 > 0 || currentScore >= 500) {
            score1 += currentScore
            currentScore = 0
            currentPlayer = 2
            currentPEl.innerHTML = `Current Player: ${name2}`
            saveEl.classList.add("remove")
        }
    } else if (currentPlayer === 2) {
        if (score2 > 0 || currentScore >= 500) {
            score2 += currentScore
            currentScore = 0
            currentPlayer = 1
            currentPEl.innerHTML = `Current Player: ${name1}`
            saveEl.classList.add("remove")
        }
    }
    score1El.innerHTML = `${name1}'s Score: ${score1}`
    score2El.innerHTML = `${name2}'s Score: ${score2}`
    currentScoreEl.innerHTML = `Current Score: ${currentScore}`
    resetAll()
    if (score1 >= 1000 && !endgame) {
        endgame = true
        window.alert(`${name1} has gained ${score1} points.  ${name2}, you must beat this score on your next turn or ${name1} will win.  If you beat ${name1}'s score, you win.  Good luck ${name2}, you have ${score1-score2} points to go.`)
    }
    if (score2 >= 1000 && !endgame) {
        endgame = true
        window.alert(`${name2} has gained ${score2} points.  ${name1}, you must beat this score on your next turn or ${name2} will win.  If you beat ${name2}'s score, you win.  Good luck ${name1}, you have ${score2-score1} points to go.`)
    }
    if (endgame) {
        window.alert("The game is over, let's see who won.")
        if (score1 > score2) {
            window.alert(`Well done, ${name1}, you beat ${name2} by ${score1-score2}.  You are a good player.  If you want to play again, reload the page.`)
        }
        if (score1 < score2) {
            window.alert(`Well done, ${name2}, you beat ${name1} by ${score2-score1}.  You are a good player.  If you want to play again, reload the page.`)
        }
        if (score1 === score2) {
            window.alert(`Wow... Just... Wow...  either you guys are stupid, or you were trying to break the game.  ${name1} and ${name2}, you disapoint me.  If you want to play the game CORRECTLY, reload the page.`)
        }
    }
}

function resetAll () {
    die1AEl.classList.add("remove")
    die2AEl.classList.add("remove")
    die3AEl.classList.add("remove")
    die4AEl.classList.add("remove")
    die5AEl.classList.add("remove")
    die6AEl.classList.add("remove")

    die1BEl.classList.add("remove")
    die2BEl.classList.add("remove")
    die3BEl.classList.add("remove")
    die4BEl.classList.add("remove")
    die5BEl.classList.add("remove")
    die6BEl.classList.add("remove")

    roll1Saved = false
    roll2Saved = false
    roll3Saved = false
    roll4Saved = false
    roll5Saved = false
    roll6Saved = false
}

rollDiceEl.addEventListener("click", rollDice)

saveEl.addEventListener("click", saveScore)

oneOneEl.addEventListener("click", scoreOneOne)
oneFiveEl.addEventListener("click", scoreOneFive)
threeOneEl.addEventListener("click", scoreThreeOne)
threeTwoEl.addEventListener("click", scoreThreeTwo)
threeThreeEl.addEventListener("click", scoreThreeThree)
threeFourEl.addEventListener("click", scoreThreeFour)
threeFiveEl.addEventListener("click", scoreThreeFive)
threeSixEl.addEventListener("click", scoreThreeSix)
fourKindEl.addEventListener("click", scoreFourKind)
fiveKindEl.addEventListener("click", scoreFiveKind)
sixKindEl.addEventListener("click", scoreSixKind)
straightEl.addEventListener("click", scoreStraight)
threePairEl.addEventListener("click", scoreThreePair)
pairQuadEl.addEventListener("click", scorePairQuad)
twoTripEl.addEventListener("click", scoreTwoTrip)

//die1AEl.addEventListener("click", saveDie1)
//die2AEl.addEventListener("click", saveDie2)
//die3AEl.addEventListener("click", saveDie3)
//die4AEl.addEventListener("click", saveDie4)
//die5AEl.addEventListener("click", saveDie5)
//die6AEl.addEventListener("click", saveDie6)


//console.log(getRandomInt(3))
//console.log(getRandomInt(1))
//console.log(Math.random())