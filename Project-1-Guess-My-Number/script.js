'use strict';

// define the secret number out

let secrtNumber = 20;
//state
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
// 1- select button element itself
// 2- call the addEventListener method
// 3- pass the type of event to method
// 4- tell to eventListener what to do(event handler)

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    displayMessage('⛔ No number !');

    // when players win
  } else if (guess !== secrtNumber) {
    if (score > 1) {
      guess > secrtNumber
        ? displayMessage('📈 Too high!')
        : displayMessage('📉 Too low!');

      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('🤬 You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
    /*
  
  else if () {
    if (score > 1) {
  
      // decrease value of score
      //document.querySelector('.score').textContent--;
      score--;
      document.querySelector('.score').textContent = score;
    } else {
     
    }

    // when guess is too low
  } else if (guess < secrtNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = ;

      // decrease value of score
      //document.querySelector('.score').textContent--;
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '🤬 You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }*/
  } else if (guess === secrtNumber) {
    displayMessage('🎉 Correct Number');
    document.querySelector('.number').textContent = secrtNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (highScore < score) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secrtNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
});
