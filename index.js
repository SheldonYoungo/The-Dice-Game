
// Set the variables to store the title and the dices images
var dice1 = document.body.querySelector('div').getElementsByTagName('div')[0].querySelector('img');
var dice2 = document.body.querySelector('div').getElementsByTagName('div')[1].querySelector('img');
var title = document.body.querySelector('h1'); 

/* Function that generates two random numbers that will be used to changes both
  dices images (with the changeDicesImg() function, explained below this function)
  and will be compared to see what number is bigger to stablish the winner.*/

function throwDices() {
  var randomNumber1 = Math.floor(Math.random()*5) + 1;
  var randomNumber2 = Math.floor(Math.random()*5) + 1;

  changeDicesImg(randomNumber1, randomNumber2)

  if(randomNumber1 > randomNumber2) {
    title.textContent = 'Player 1 Wins!!!';
  } else if(randomNumber1 === randomNumber2){
    title.textContent = 'Is a draw!!!'
  } else {
    title.textContent = 'Player 2 Wins!!!';
  }
}

/* This function accepts as parameters two numbers that will be the ones to change
  the dices images */

function changeDicesImg(number1, number2){
  dice1.setAttribute('src', 'images/dice'+number1+'.png');
  dice2.setAttribute('src', 'images/dice'+number2+'.png');
}