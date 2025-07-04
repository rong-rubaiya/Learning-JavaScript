function rollDice(){
  let randomNumber =Math.floor(Math.random ()*6)+1;
  let imageSource = 'ludopic/' + randomNumber + '.png';
  document.getElementById('ludo').src =imageSource;
}