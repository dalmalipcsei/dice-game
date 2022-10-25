'use strict';

let btnRoll = document.querySelector('.btn--roll');
let btnHold = document.querySelector('.btn--hold');
let diceImage = document.querySelector('.dice');
let playerOneCurrent = document.querySelector('#current--0');
let playerOneScore = document.querySelector('#score--0');
let playerTwoCurrent = document.querySelector('#current--1');
let playerTwoScore = document.querySelector('#score--1');

let player = 1;

//roll the dice
const rollDice = () => {
  //generate random number between 1 and 6
  let rollNumber = Math.floor(Math.random() * 6 + 1);
  console.log(rollNumber);
  // change dice img
  diceImage.setAttribute('src', `dice-${rollNumber}.png`);

  if (player == 1) {
    if (rollNumber == 1) {
      playerOneCurrent.textContent = 0;
      player = 2;
    } else {
      playerOneCurrent.textContent =
        Number(playerOneCurrent.textContent) + rollNumber;
    }
  } else {
    if (rollNumber == 1) {
      playerTwoCurrent.textContent = 0;
      player = 1;
    } else {
      playerTwoCurrent.textContent =
        Number(playerTwoCurrent.textContent) + rollNumber;
    }
  }
};

const holdScore = () => {
  if (player == 1) {
    playerOneScore.textContent =
      Number(playerOneScore.textContent) + Number(playerOneCurrent.textContent);
    playerOneCurrent.textContent = 0;
    if (Number(playerOneScore.textContent) >= 25) {
      console.log('PLAYER 1 WON THE GAME!');
    } else {
      player = 2;
    }
  } else {
    playerTwoScore.textContent =
      Number(playerTwoScore.textContent) + Number(playerTwoCurrent.textContent);
    playerTwoCurrent.textContent = 0;

    if (Number(playerTwoScore.textContent) >= 25) {
      console.log('PLAYER 2 WON THE GAME!');
    } else {
      player = 1;
    }
  }
};

//attach event listener to roll dice btn
btnRoll.addEventListener('click', rollDice);
//hold score
btnHold.addEventListener('click', holdScore);
