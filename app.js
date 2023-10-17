const cardArray = [
    {
        name: 'fries',
        img: '/fries.jpg'
    },
    {
        name: 'pizza',
        img: '/pizza.jpg'
    },
    {
        name: 'cheeseburger',
        img: '/cheeseburger.jpg'
    },
    {
        name: 'hot-dog',
        img: '/hot-dog.png'
    },
    {
        name: 'milkshake',
        img: '/milkshake.jpg'
    },
    {
        name: 'icecream',
        img: '/ice-cream.jpeg'
    },
    {
        name: 'fries',
        img: '/fries.jpg'
    },
    {
        name: 'pizza',
        img: '/pizza.jpg'
    },
    {
        name: 'cheeseburger',
        img: '/cheeseburger.jpg'
    },
    {
        name: 'hot-dog',
        img: '/hot-dog.png'
    },
    {
        name: 'milkshake',
        img: '/milkshake.jpg'
    },
    {
        name: 'icecream',
        img: '/ice-cream.jpeg'
    }
]

cardArray.sort(() => 0.5 - Math.random());  //-0.5 tecnic is advanced

const gridDisplay = document.querySelector('#grid');
const resultDisplay = document.querySelector('#result');
let cardChoosen = [];
let cardChoosenIds = [];
let cardsWon = [];

function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img');
        card.setAttribute('src', '/blank.jpg');
        card.setAttribute('data-id', i);
        card.addEventListener('click', flipCard);
        gridDisplay.appendChild(card);
    }
}
createBoard();

function checkMatch() {
    const cards = document.querySelectorAll('img')
    const optionOneId = cardChoosenIds[0]
    const optionTwoId = cardChoosenIds[1]

    if (optionOneId === optionTwoId) {
        cards[optionOneId].setAttribute('src', '/blank.jpg')
        cards[optionTwoId].setAttribute('src', '/blank.jpg')
        alert('You click the same card');
    }
    if (cardChoosen[0] == cardChoosen[1]) {
        alert('You found a match');
        cards[optionOneId].setAttribute('src', '/white.jpg')
        cards[optionTwoId].setAttribute('src', '/white.jpg')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardsWon.push(cardChoosen)
    }else{
        cards[optionOneId].setAttribute('src', '/blank.jpg')
        cards[optionTwoId].setAttribute('src', '/blank.jpg')
        alert('Sorry try again!');
    }
    resultDisplay.textContent = cardsWon.length
    cardChoosen = []
    cardChoosenIds = []

    if (cardsWon.length === cardArray.length/2) {
        resultDisplay.textContent = 'Congrats You found them all';
    }
}

function flipCard() {
    const cardId = this.getAttribute('data-id');
    cardChoosen.push(cardArray[cardId].name);
    cardChoosenIds.push(cardId);
    console.log(cardChoosenIds);
    this.setAttribute('src', cardArray[cardId].img);
    if (cardChoosen.length === 2) {
        setTimeout( checkMatch, 500);
    }
}

