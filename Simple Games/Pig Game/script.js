'use strict';

// Global Variables:
let 
    PlayerTurn = 1, 
    CurrentScore = 0,
    PlayersScore = [0,0];

const 
    Player1 = document.querySelector('.player--1'), 
    Player2 = document.querySelector('.player--2'), 
    diceImage = document.querySelector('.dice');

// Buttons:
const Roll = document.querySelector('.btn--roll');
Roll.addEventListener('click', function(){

    let Dice = Math.trunc(Math.random() * 6) + 1;

    diceImage.classList.remove('Hidden');
    diceImage.src = `Images/dice-${Dice}.png`;

    if(Dice === 1){
        ChangePlayerTurn();
        return;
    }

    CurrentScore += Dice;

    if(PlayerTurn === 1){
        document.getElementById('current--1').textContent = CurrentScore;
    }
    else{
        document.getElementById('current--2').textContent = CurrentScore;
    }

})

const Hold = document.querySelector('.btn--hold');
Hold.addEventListener('click', function(){
        ChangePlayerScore();

        if(CheckWinner()){
            setGameControlsState(true);
            diceImage.classList.add('Hidden');
            return;
        }

        ChangePlayerTurn();
})

const NewGame = document.querySelector('.btn--new');
NewGame.addEventListener('click', function(){

    PlayerTurn = 1;
    PlayersScore = [0,0]
    CurrentScore = 0;

    document.getElementById('score--1').textContent =  0;
    document.getElementById('score--2').textContent = 0;
    document.getElementById('current--1').textContent = 0;
    document.getElementById('current--2').textContent = 0;

    diceImage.classList.add('Hidden');

    Player1.classList.remove('player--winner');
    Player2.classList.remove('player--winner');
    
    Player1.classList.add('player--active');
    Player2.classList.remove('player--active');

    setGameControlsState(false);
})

// Helper Functions:
function ChangePlayerTurn(){

    document.getElementById(`current--${PlayerTurn}`).textContent = 0;

    PlayerTurn = PlayerTurn === 1 ? 2 : 1;

    Player1.classList.toggle('player--active');
    Player2.classList.toggle('player--active');

    CurrentScore = 0

}

function ChangePlayerScore(){
    
    PlayersScore[PlayerTurn - 1] += CurrentScore;
    document.getElementById(`score--${PlayerTurn}`).textContent = PlayersScore[PlayerTurn - 1];

    CurrentScore = 0;

}

function CheckWinner(){

    if(PlayersScore[0] >= 100){
        Player1.classList.add('player--winner');
        Player1.classList.remove('player--active');
        return true;
    }
    else if(PlayersScore[1] >= 100){
        Player2.classList.add('player--winner');
        Player2.classList.remove('player--active');
        return true;
    }

    return false;

}

function setGameControlsState(State){
    Roll.disabled = State;
    Hold.disabled = State;
}