
const randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
let score = 0;

function checkGuess() {
    attempts++;
    const guess = parseInt(document.getElementById('guessInput').value);
    const output = document.getElementById('output');

    if (isNaN(guess) || guess < 1 || guess > 100) {
        output.innerHTML = '<div class="alert alert-danger" role="alert">Please enter a valid number between 1 and 100.</div>';
        return;
    }

    if (guess === randomNumber) {
        score = 100 - attempts; // This I have written to calculate score
        output.innerHTML = `<div class="alert alert-success" role="alert">Congratulations! You guessed the correct number! Your score is ${score}.</div>`;
        disableInput();
    } else {
        if (guess < randomNumber) {
            output.innerHTML = `<div class="alert alert-warning" role="alert">Try again! The number is larger than ${guess}.</div>`;
        } else {
            output.innerHTML = `<div class="alert alert-warning" role="alert">Try again! The number is smaller than ${guess}.</div>`;
        }
    }
}

function disableInput() {
    document.getElementById('guessInput').disabled = true;
    document.querySelector('button').disabled = true;
}
