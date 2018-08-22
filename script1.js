
//define variables
var rightNumber = randomNumber();
var guess = document.querySelector('#number_guess');
var numberInput = parseInt(guess.value);

//Button variables
var submitGuessButton = document.querySelector('.submit_guess');
var clearGuessButton = document.querySelector('.clear_guess');
var resetButton = document.querySelector('#reset_form');

var setRangeButton = document.querySelector('#set_min_max');
//

//response variable
var responseLowHigh = document.querySelector('#responseToGuess');

//display guess
var box = document.querySelector('#guess');




//max and min range inputs
var minimumRange = document.querySelector('#min_range').value;
var maximumRange = document.querySelector('#max_range').value;

var displayMinimum = document.querySelector('#display_minimum');
var displayMaximum = document.querySelector('#display_maximum');



//
let defaultMinimumRange = 0;
let defaultMaximumRange = 100;



//Event Listener
submitGuessButton.addEventListener('click', updateRecentGuess);
submitGuessButton.addEventListener('click', evaluateNumber);
clearGuessButton.addEventListener('click', clearGuessForm);
resetButton.addEventListener('click', resetForm);
setRangeButton.addEventListener('click', assignMinMax);


guess.addEventListener('keyup', disableButton);





//FUNCTIONS ~~~~~

//Generate random number in range
function randomNumber() {
return Math.floor(Math.random()*100+1)};
var rightNumber = randomNumber();

//Show most recent guess on page
function updateRecentGuess(event) {
  event.preventDefault();
  guessValue = document.querySelector('#number_guess').value;
  box.innerText = (guessValue); 
}

//Show if too hi or low
function evaluateNumber(){
  var numberInput = parseInt(guess.value);
  guess.innerText = numberInput;

  if (numberInput > rightNumber){
  responseLowHigh.innerText = 'That is too high!';
  }
  else if (numberInput < rightNumber){
  responseLowHigh.innerText = "That is too low!";
  }
  else if(numberInput == rightNumber){
  responseLowHigh.innerText = "BOOM! You got it.";
  }
  else{
  responseLowHigh.innerText = "this is not a number."
  };
//Display alert if guess is not between 0 and 100

  if (guessValue > 100 || guessValue < 1){
    alert("Must be a valid number between 0 and 100");
    return false;
  }
if (Number.isNaN(guessValue) != false){
  alert('Must enter a valid number')
  }
}


//function to clear number input

function clearGuessForm(event){
  event.preventDefault();
  guess.value= "";
}

//function to reset entire form
function resetForm(event){
  event.preventDefault();
  guess.value= "";
}


//disable buttons when input field is empty

function disableButton() {
;
  if (guess.value === "") { 
    submitGuessButton.disabled = true;
    clearGuessButton.disabled = true;
    resetButton.disabled = true;
    console.log('if');
  } 
  else {
    submitGuessButton.disabled = false;
    clearGuessButton.disabled = false;
    resetButton.disabled = false;
    console.log('else');
  }
};


function assignMinMax(){
  console.log('hey');

}