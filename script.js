let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    //document.querySelector('.message').textContent = '🤔 You need to input a number'
    displayMessage('🤔 You need to input a number');
  } else if (guess === secretNumber) {
    //document.querySelector('.message').textContent = '✔ Correct number!';
    displayMessage('✔ Correct number!');
    document.querySelector('.secretNumber').textContent = secretNumber;
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } /* else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '😕 Number is too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '😪 You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '🙄 Number is too high!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '😪 You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  } */
  
  // USING TERNARY OPERATOR
    else if (guess !== secretNumber) {
      if (score > 1) {
        guess > secretNumber ? displayMessage('🙄 Number is too high!') : displayMessage('😕 Number is too low!');
        score--;
        document.querySelector('.score').textContent = score;
      } else {
        displayMessage('😪 You lost the game!');
        document.querySelector('.score').textContent = 0;
      }
    }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  //document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.secretNumber').textContent = '?';
  document.querySelector('.guess').value = '';
})