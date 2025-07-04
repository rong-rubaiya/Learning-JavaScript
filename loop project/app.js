// guss the number

function guessTheNumber(difficulty){
  let randomNumber;
  let attemps = 0;
  let maxAttemps;
  let range;


switch (difficulty) {
  case 'easy':
    range=10;
    maxAttemps= 5;
    randomNumber= Math.floor(Math.random() *10)+1;
    // console.log(randomNumber);
    break; 

  case 'medium':
    range=100;
     maxAttemps= 7;
    randomNumber= Math.floor(Math.random() *100)+1;
    console.log(randomNumber);
    break;

  case 'hard':
    range=1000;
     maxAttemps= 10;
    randomNumber= Math.floor(Math.random() *1000)+1;
    console.log(randomNumber);
    break;
  default:
    console.error("invalid difficulty,Choose dificulty (Easy,Medium , hard)")
}

// guess promt

while (attemps < maxAttemps) {
  let guess = parseInt(prompt(`Guess the number between 1 to ${range} (Inclusive). You have ${maxAttemps - attemps} attempts left:`));
  attemps++;

  if (guess === randomNumber) {
    console.log('🎉 Congratulation! You guessed the number in', attemps, 'attempts');
    break;
  } else if (guess < randomNumber) {
    console.log("📉 Too low, try again");
  } else {
    console.log("📈 Too big, try again");
  }

  // console.log(guess); // এটা চাইলে বাদ দাও
}
 if(maxAttemps===attemps){
  console.log('Sorry, you run out of attemps. The number was ', randomNumber);
 }
}


// Get user input:

// !it is  first code:

let difficulty = prompt('Choose dificulty (Easy,Medium , hard)').toLowerCase();
// console.log(difficulty);

guessTheNumber(difficulty);/* it should be in the last*/