
//define variables

var guess = document.querySelector('#number_guess');
// var numberInput = parseInt(guess.value);

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
var minimumRange = document.querySelector('#min_range');
var min = parseInt(minimumRange.value);



var maximumRange = document.querySelector('#max_range');
var max = parseInt(maximumRange.value);


var rightNumber = randomNumber(min, max);

var displayMinimum = document.querySelector('#display_minimum');
var displayMaximum = document.querySelector('#display_maximum');



//



//Event Listener
submitGuessButton.addEventListener('click', updateRecentGuess);
submitGuessButton.addEventListener('click', evaluateNumber);
clearGuessButton.addEventListener('click', clearGuessForm);
resetButton.addEventListener('click', resetForm);

setRangeButton.addEventListener('click', assignMinMax);


guess.addEventListener('keyup', disableButton);



function randomNumber(min, max) {
min = Math.ceil(min);
max = Math.floor(max);
return Math.floor(Math.random()*(max - min + 1))+ min};



minimumRange.addEventListener('keyup', function(event){
event.preventDefault();
min = parseInt(minimumRange.value);
rightNumber = randomNumber(min, max);
});

maximumRange.addEventListener('keyup', function(event){
event.preventDefault();
max = parseInt(maximumRange.value);
rightNumber = randomNumber(min, max);
})


//FUNCTIONS ~~~~~

//Generate random number in range



//Show most recent guess on page
function updateRecentGuess(event) {
  event.preventDefault();
  box.innerText = (guess.value); 
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

  if (guess.value > max || guess.value < min){
    alert(`Must be a valid number between ${min} and ${max}`);
    return false;
  }
if (Number.isNaN(guess.value) != false){
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
  window.location.reload(true);
}


//disable buttons when input field is empty

function disableButton() {
;
  if (guess.value === "") { 
    submitGuessButton.disabled = true;
    clearGuessButton.disabled = true;
    resetButton.disabled = true;
    ;
  } 
  else {
    submitGuessButton.disabled = false;
    clearGuessButton.disabled = false;
    resetButton.disabled = false;
    ;
  }
};


function assignMinMax(event){
  event.preventDefault();
  displayMinimum.innerText = (minimumRange.value);
  displayMaximum.innerText = (maximumRange.value);

};