let height = document.getElementById('height');
let weight = document.getElementById('weight');
let btn = document.getElementById('btn');

let score = document.getElementById('score');
let result = document.querySelector('.result');

btn.addEventListener('click', function () {
  let newHeight = parseFloat(height.value);
  let newWeight = parseFloat(weight.value);

 newHeight=newHeight/100;
 let sqrHeight=newHeight*newHeight;

 let bmi = newWeight/sqrHeight;
 console.log(bmi.toFixed(2));

 score.textContent= bmi.toFixed(2);
 
 result.style.display='block';

 if (score.textContent<18.6){
  score.style.background='yellow';
 } else if (score.textContent<24.9){
  score.style.background='green';
 } else {
  score.style.background='red';
 }
});

let form = document.getElementById('form');
form.addEventListener('submit', function (e) {
  e.preventDefault();
});
