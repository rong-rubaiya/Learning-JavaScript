const body=document.getElementById('body');
const button=document.querySelectorAll('li');

// const blueColor = document.querySelector('.blue');
// blueColor.addEventListener('click', function() {
//   body.style.backgroundColor = 'blue';
// });

// const greenColor = document.querySelector('.green');
// greenColor.addEventListener('click', function() {
//   body.style.backgroundColor = 'green';
// });

// const pinkColor = document.querySelector('.pink');
// pinkColor.addEventListener('click', function() {
//   body.style.backgroundColor = 'pink';
// });

// const redColor = document.querySelector('.red');
// redColor.addEventListener('click', function() {
//   body.style.backgroundColor = 'red';
// });


// !above system is not so standard that you cannot use when there is many button



// ? standard method


// button.forEach(function (value){
// value.addEventListener('click', function(){
//   let className= this.classList.value;
//   body.style.backgroundColor=className;
// })
// });

// !above system cannot provide exact color that I took in my project



button.forEach(function (value){
value.addEventListener('click', function(){
  let className= this.classList[0];

   let color='';

  if(className==='red'){
    color='#c75454';
  }

  if(className==='blue'){
    color='#2f47df';
  }
  
  if(className==='green'){
    color='#287223';
  }

  if(className==='pink'){
    color='#220927';
  }
  body.style.backgroundColor=color;
})
});
