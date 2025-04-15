const board = document.getElementById('game-board');
const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
let cards = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
let firstCard = null;
let secondCard = null;
let lockBoard = false;

function shuffle(array) {
    array.sort(()=> Math.random() - 0.5);
    
}

function createBoard() {
    shuffle(cards);
    cards.forEach(letter => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.dataset.letter = letter
        card.textContent = '';
        card.addEventListener('click', flipCard);
        board.appendChild(card);
    });
}

function flipCard() {
    if (lockBoard || this.classList.contains('flipped')) return;
    
    this.textContent = this.dataset.letter;
    this.classList.add('flipped');
    
    if (!firstCard) {
        firstCard = this;
        return; 
        
    }
    secondCard = this;
    lockBoard = true;
    
    if (firstCard.dataset.letter === secondCard.dataset.letter) {
        firstCard = null;
        secondCard = null;
        lockBoard = false;
    }else{
        setTimeout(() => {
            firstCard.textContent = '';
            secondCard.textContent = '';
            firstCard.classList.remove('flipped');
            secondCard.classList.remove('flipped');
            firstCard = null;
            secondCard = null;
            lockBoard = false;
        }, 1000);
    }
    
}

createBoard();