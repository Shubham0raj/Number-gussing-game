let randomno =parseInt(Math.random()*100+1)

const userInput = document.getElementById('guessField')
const submit = document.querySelector('#subt')
const remaining = document.querySelector ('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const guessSlot = document.querySelector ('.guesses')
const startOver = document.querySelector('.resultParas')


const p = document.createElement('p');
let prevGuess = [];
let numGuess = 1;

let playGame =true ;

if(playGame){
  submit.addEventListener('click', function (e){
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  })
}

function validateGuess(guess){
if(isNaN(guess)){
  alert("plz enter a valid no")
}
else if (guess>100){
 alert ("plz enter a no less than 100")
}
else if (guess<1){
  alert('plz enter a no greater than 1')
}
else{
  prevGuess.push(guess)
  if(numGuess===11){
    displayGuess(guess)
    displayMessage(`Game over,Random no is ${randomno}`)
    endGame()
  }
  else{
    displayGuess(guess)
    checkGuess(guess)
  }
}
}
function checkGuess(guess){
  if(guess === randomno){
    displayMessage(`u guessed it right`)
    endGame();
  }
  else if(guess<randomno){
    displayMessage(`value is too low`)
  }
  else if(guess>randomno){
    displayMessage(`value is too high`)
  }

}

function displayGuess(guess){
  userInput.value = '';
  guessSlot.innerHTML += `${guess} , `;
  numGuess ++;
  remaining.innerHTML =`${11- numGuess}`;
}
function displayMessage(message){
  lowOrHi.innerHTML = `<h2>${message}</h2>`
}
function endGame(){
  userInput.value = '';
  userInput.setAttribute('disabled','')
  p.classList.add('button')
  p.innerHTML = `<h2 id = "newGame" >Start new</h2>`
  startOver.appendChild(p);
  playGame =false;
  newGame();
}
function newGame(){
  const newGameButton = document.querySelector('#newGame')
  newGameButton.addEventListener('click', function (e) {
    randomno =parseInt(Math.random()*100+1) 
    prevGuess = [];
    numGuess = 1
    guessSlot.innerHTML= ''
    remaining.innerHTML= `${11- numGuess}`;
    userInput.removeAttribute('disabled')
    startOver.removeChild(p)
    playGame = true


  })
}
