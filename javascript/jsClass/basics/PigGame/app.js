/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/


var scores, roundScore, activePlayer, gamePlaying;

initGame();

function initGame(){
scores = [0,0];
roundScore = 0;
activePlayer = 0;
gamePlaying = true;

//setting default values
document.querySelector('.dice').style.display = 'none';
document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';
document.getElementById('name-0').textContent = 'Player 1';
document.getElementById('name-1').textContent = 'Player 2';
document.querySelector('.player-0-panel').classList.remove('winner');
document.querySelector('.player-1-panel').classList.remove('winner');
document.querySelector('.player-0-panel').classList.remove('active');
document.querySelector('.player-1-panel').classList.remove('active');
document.querySelector('.player-0-panel').classList.add('active');
}
scores = [0,0];
roundScore = 0;
activePlayer = 0;


//setting default values
document.querySelector('.dice').style.display = 'none';
document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';

//creating eventListeners

document.querySelector('.btn-roll').addEventListener('click' , function(){
if (gamePlaying){
 //generating random number
var dice = Math.floor(Math.random() *6 +1);

//change the dice display as per the number generated
var diceDOM = document.querySelector('.dice');
diceDOM.style.display = 'block';
diceDOM.src = 'dice-' + dice + '.png';
    
//update the score if the number is not 1
    
if(dice > 1){
    //add the score
    roundScore +=dice;
    document.getElementById('current-'+activePlayer).textContent = roundScore;
}
else{
    //toggle player using ternary operator
    nextPlayer(); 
    
}   
}
    
        
});

document.querySelector('.btn-hold').addEventListener('click', function(){
if(gamePlaying){
 //update the global score
scores[activePlayer] = scores[activePlayer]+roundScore;

//update the UI
document.getElementById('score-'+ activePlayer).textContent = scores[activePlayer];

    
//check if the player won
if (scores[activePlayer] >= 100 ){
gamePlaying = false;
document.querySelector('#name-'+ activePlayer).textContent = 'WINNER!!!';
document.querySelector('.dice').style.display = 'none';
document.querySelector ('.player-'+activePlayer+'-panel').classList.add('winner');
document.querySelector ('.player-'+activePlayer+'-panel').classList.remove('active');
}
else{
nextPlayer();   
}
       
}
    
});

function nextPlayer(){
activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;
    
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    
    //toggle the active class
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    
    //hide the dice
    
    document.querySelector('.dice').style.display = 'none';
};


document.querySelector('.btn-new').addEventListener('click', initGame);