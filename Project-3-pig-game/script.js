//  HTML elements selecting

const palyer0EL = document.querySelector('.player--0 ');
const palyer1EL = document.querySelector('.player--1 ');
const score0EL = document.getElementById('score--0');
const score1EL = document.getElementById('score--1');
const newBtn = document.querySelector('.btn--new');
const rollBtn = document.querySelector('.btn--roll');
const holdBtn = document.querySelector('.btn--hold');
const diceEl = document.querySelector('.dice');
const current0EL = document.getElementById('current--0');
const current1EL = document.getElementById('current--0');

// Function..

const switchPlayer = function () {
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 1 ? 0 : 1;
  palyer0EL.classList.toggle('player--active');
  palyer1EL.classList.toggle('player--active');
};
let score, currentScore, activePlayer, player;

const init = function () {
  score = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  player = true;

  diceEl.classList.add('hidden');
  score0EL.textContent = 0;
  score1EL.textContent = 0;
  current0EL.textContent = 0;
  current1EL.textContent = 0;

  palyer0EL.classList.add('player--active');
  palyer1EL.classList.remove('player--active');
  palyer0EL.classList.remove('player--winner');
  palyer1EL.classList.remove('player--winner');
};

init();

// Event-Listener ..

// Roll functionality
rollBtn.addEventListener('click', function () {
  // generate random diceRoll
  if (player) {
    const dice = Math.trunc(Math.random() * 6) + 1;

    // display diceRoll
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    // check for rolled
    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

// hold functionality
holdBtn.addEventListener('click', function () {
  // ADD CURRENT SCORE TO TOTAL SCORE
  if (player) {
    score[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      score[activePlayer];
    document.getElementById(`current--${activePlayer}`).textContent = 0;

    //SCORE >=100
    if (score[activePlayer] >= 100) {
      player = false;
      diceEl.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      // SWITCH PLAYER
      switchPlayer();
    }
  }
});

// new functionality
newBtn.addEventListener('click', init);
