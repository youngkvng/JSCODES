/*
GAME FUNCTION:
- player must guess a number between a min and max
- player gets a certain amount of guessers
- Notify player of guessers remaining
- Notify player of the correct answer if loose
- Let player choose to play again
*/

// Game values
let min = 1,
    max = 10,
    winningNum = getRandomNum(min, max),
    guessesLeft = 3;

// UI ELEMENTS
const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message');

// Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

// play again event listener
game.addEventListener('mousedown', function(e) {
    if (e.target.className === 'play-again') {
        window.location.reload();
    };
});

// Listen for guess
guessBtn.addEventListener('click', function(){
    let guess = parseInt(guessInput.value)
   
    // Validate
    if (isNaN(guess) || guess < min || guess > max) {
        setMessage(`please enter a number between ${min} and ${max}`, 'red');
    };

    // check if won
    if (guess === winningNum) {
        // Game over - won
        gameOver(true, `${winningNum} is correct, YOU WIN`)
    }else{
        // wrong number
        guessesLeft -= 1;
        if (guessesLeft === 0) {
            // Game over - lost
         gameOver(false, `Game over, YOU LOST. The correct answer is ${winningNum} `)

        }else{
            // Game continues - answer wrong
             // change border color
             guessInput.style.borderColor = 'red';

            //  clear input
            guessInput.value = '';

            //  tell user of wrong number
            setMessage(`${guess} is not correct, ${guessesLeft} guesses left`, 'red');
        }
    }
});

function gameOver(won, msg) {
    let color;
    won === true ? color = 'green' : color = 'red'
    // disable guessInput
    guessInput.disabled = true;
    // change border color
    guessInput.style.borderColor = color;
    // set text color
    message.style.color = color;
    setMessage(msg);

    // play again
    guessBtn.value = 'Play Again';
    guessBtn.className += 'play-again';
};

// get winning number
function getRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min );
}

function setMessage(msg, color) {
    message.style.color = color;
    message.textContent = msg;
}; 