const cards  = document.querySelectorAll(".memory-card");

let cardIsFlipped = false; 
let lockBoard = false;
let firstCard,secondCard;


function flipcard() {
    if (lockBoard) return;
    if (this === firstCard) return;
    
    this.classList.toggle('flip')
    

    if (!cardIsFlipped) {
        //first click -> first card
        cardIsFlipped = true;
        firstCard = this; 
        return;             
    }
        // second click ->second card
        secondCard = this;  
        checkForMatch(); 
}

function checkForMatch() {
    // checking whether the card match  
    let isMatched = firstCard.dataset.name === secondCard.dataset.name;
    isMatched ? disableCards() :  unFLipCards();
        
}

function disableCards() {
     // it is a match - > disable cards
     firstCard.removeEventListener('click',flipcard)
     secondCard.removeEventListener('click', flipcard)
     resetBoard()     
}

function unFLipCards() {
    lockBoard = true;
            // not a match -> unFlip cards
            setTimeout(()=>{
                firstCard.classList.remove('flip');
                secondCard.classList.remove('flip');
                resetBoard(); 
                }, 1500)
    
}

function resetBoard(){
    //destructturing assignment
    [cardIsFlipped,lockBoard] = [false,false];
    [firstCard,secondCard] =[null,null];
}

//IIFE -> Immediatly Invoked Function Expression => Function is caller immediately after its definition
(function shuffle() {
    cards.forEach(function(card){
        let randomPosition = Math.floor(Math.random() * 12)
        card.style.order = randomPosition;
    })
    
})();

cards.forEach(function (card) {
    card.addEventListener('click',flipcard);    
});

