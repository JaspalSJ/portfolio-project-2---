const card = document.querySelectorAll('.cell');
const front = document.querySelectorAll('.front');
const container = document.querySelector('.container');
const score = document.querySelector('.score span');


/**
 * Function to shuffle the images on each page refresh
 */
function shuffleImage() {


    card.forEach(c=>{

        const num = [...Array(card.length).keys()];
        const random = Math.floor(Math.random()*card.length);

        c.style.order = num[random];
    });
}
shuffleImage();

/**
 * Function to reveal the image when box is clicked
 */

function clicking() {

    for(let i =0; i < card.length; i++){

        /**
         * Reveals the images on page refresh,
         * then hides after 1.5 seconds have passed
         */

        front[i].classList.add('show');

        setInterval( () => {
            front[i].classList.remove('show');
        }, 1500),

        card[i].addEventListener('click' , ()=> {
            
            front[i].classList.add('flip');
            const flippedCard = document.querySelectorAll('.flip');

            if(flippedCard.length == 2){

                container.style.pointerEvents = 'none';

                setInterval( ()=> {

                    container.style.pointerEvents = 'all';

                }, 1000);
                match(flippedCard[0] , flippedCard[1]);
            }
        });

    }
}
clicking();

/**
 * Function to match the cards together,
 * if they match they are revealed,
 * if not they are reversed
 */

function match(cardOne , cardTwo){

    if(cardOne.dataset.index == cardTwo.dataset.index){

        /**
         * Increments the score by 1 after matching two images
         */

        score.innerHTML = parseInt(score.innerHTML) + 1;

        cardOne.classList.remove('flip');
        cardTwo.classList.remove('flip');


        cardOne.classList.add('match');
        cardTwo.classList.add('match');

    } else {
        
        setTimeout( () => {

        cardOne.classList.remove('flip');
        cardTwo.classList.remove('flip');
        }, 1000);
    }
}