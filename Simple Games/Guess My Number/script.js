'use strict';

    let SecretNumber = Math.trunc(Math.random() * 20) + 1;
    let CurrentScore = 20;
    let HighSccore = 0;

document.querySelector('.check').addEventListener('click', function() {

    const Guess = Number(document.querySelector('.guess').value);

    if(!Guess)
    {
        DisplayMessage('No Number! ⛔');
    }
    else if(Guess === SecretNumber){

        setGameControlsState(true);

        DisplayMessage('Correct Number 🎉');

        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.number').textContent = SecretNumber;

        if(CurrentScore > HighSccore){
            HighSccore = CurrentScore;
            document.querySelector('.highscore').textContent = HighSccore;
        }
    }

    else if(Guess > SecretNumber){
        WrongGuess('Too High 📈');
    }
    else if(Guess < SecretNumber){
        WrongGuess('Too Low 📉');
    }

})

document.querySelector('.again').addEventListener('click', function() {
    
    SecretNumber = Math.trunc(Math.random() * 20) + 1;
    CurrentScore = 20;
    document.querySelector('.score').textContent = CurrentScore;

    document.querySelector('.number').textContent = '?';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';

    document.querySelector('.guess').value = '';

    DisplayMessage('Start guessing...');

    setGameControlsState(false);

})

function WrongGuess(message){

    if(CurrentScore > 1){
        DisplayMessage(message);
        
        CurrentScore--;
        document.querySelector('.score').textContent = CurrentScore;
    }
    else{
        setGameControlsState(true);

        DisplayMessage('You Lost Try Again 💥');
        document.querySelector('.score').textContent = 0;
    }
}

function DisplayMessage(Message){
    document.querySelector('.message').textContent = Message;

}

function setGameControlsState(State){
    document.querySelector('.check').disabled = State;
    document.querySelector('.guess').disabled = State;
}