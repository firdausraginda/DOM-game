init()

function init() {
    scoreCurrent = 0
    currentPlayer = 0
    scoreHold = [0, 0]
    document.querySelector('.score-board-1').classList.add('active')
    document.querySelector('.score-board-2').classList.remove('active')
    document.querySelector('.score-board-1 h3').innerHTML = 'Player 1'
    document.querySelector('.score-board-2 h3').innerHTML = 'Player 2'
    document.querySelector('.score-board-1 h1').innerHTML = 0
    document.querySelector('.score-board-2 h1').innerHTML = 0
    document.querySelector('.box-score-1 h3').innerHTML = 0
    document.querySelector('.box-score-2 h3').innerHTML = 0
    document.querySelector('.control .roll-dice').style.visibility = 'visible'
    document.querySelector('.control .hold').style.visibility = 'visible'
    document.querySelector('.dice').style.visibility = 'hidden'
}

function next() {
    if (currentPlayer == 0) {
        currentPlayer = 1
        scoreCurrent = 0
        document.querySelector('.box-score-1 h3').innerHTML = 0
    } else {
        currentPlayer = 0
        scoreCurrent = 0
        document.querySelector('.box-score-2 h3').innerHTML = 0
    }
    document.querySelector('.row .score-board-1').classList.toggle('active')
    document.querySelector('.row .score-board-2').classList.toggle('active')
}

document.querySelector('.roll-dice').addEventListener('click', function () {

    document.querySelector('.dice').style.visibility = 'visible'
    var randNumber = Math.floor(Math.random() * 6 + 1)
    document.querySelector('.dice img').setAttribute('src', `picts/dice-${randNumber}.jpg`)

    if (randNumber == 1) {
        next()
    } else {
        scoreCurrent += randNumber
        if (currentPlayer == 0) {
            document.querySelector('.box-score-1 h3').innerHTML = scoreCurrent
        } else {
            document.querySelector('.box-score-2 h3').innerHTML = scoreCurrent
        }
    }
})

document.querySelector('.hold').addEventListener('click', function () {
    scoreHold[currentPlayer] += scoreCurrent
    document.querySelector('.active h1').innerHTML = scoreHold[currentPlayer]
    if (scoreHold[currentPlayer] >= 20) {
        document.querySelector('.active h3').innerHTML = 'MENANG !!!'
        document.querySelector('.control .roll-dice').style.visibility = 'hidden'
        document.querySelector('.control .hold').style.visibility = 'hidden'
        document.querySelector('.dice').style.visibility = 'hidden'
    } else {
        next()
    }
})

document.querySelector('.new-game').addEventListener('click', function () {
    init()
})