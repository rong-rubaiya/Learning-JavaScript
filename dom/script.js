document.querySelector('h1').innerText='Subscribe:'  /*to change welcome to subscribe:*/

const box = document.querySelector('#box');
box.style.backgroundColor='blue';
box.style.width= '100px';
box.style.height= '100px';

const box2 = document.querySelector('.box2');
box2.style.backgroundColor='red';
box2.style.width= '100px';
box2.style.height= '100px';

document.getElementById('box3').style.backgroundColor='green';

const menuItem = document.querySelectorAll('a');
// menuItem[0].style.color = 'red';

menuItem.forEach(function(i){
  i.style.color='red';
  i.style.fontSize='32px';

});
/* for all changes*/
const className=document.getElementsByClassName('change');

const convertedClass =  Array.from(className);

// for(let i=0 ; i<className.length;i++){
//   console.log(className[i]);
// }

convertedClass.forEach(function(i) {
i.style.backgroundColor='orange';
i.style.margin='5px 10px'
});

