let player = {
    name: "Nelson",
    chips: 200
}

let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let fiveCard = false;

let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")

playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard() {
    let randomNumber = Math.floor( Math.random()*13 ) + 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}

function startGame() {
    isAlive = true;
    hasBlackJack = false;
    fiveCard = false;

    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    
    sumEl.textContent = "Sum: " + sum

    if (fiveCardRule(cards)) {
        if (sum <= 21) {
            message = "Five Cards drawn! You win!";
            isAlive = false;
            fiveCard = true;
        } else {
            message = "You're out of the game!"
            isAlive = false;
            fiveCard = true;
        }

    } else if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
        isAlive = false; 
    } else {
        message = "You're out of the game!"
        isAlive = false
    }

    messageEl.textContent = message
}


function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard();
        sum += card;
        cards.push(card);
        renderGame();        
    }
}

function fiveCardRule(arr) {
    if (arr.length === 5) return true;
    return false;
}