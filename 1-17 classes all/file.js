/*let  a=4;
 let b=3;
 console.log(a*b)*/










 
// * if else basic rules
//  let userInput=prompt("enter a Number");
//  let number= parseInt(userInput);
//  if(number%2==0){
//    console.log(`${number} is even number` );
//  }
//  else{
//    console.log(`${number} is odd number` );}










//!operator

// *Arithmatic

// let x=10;
// x++;//increament


// console.log(x);

// let y=10;

// *Comparison

/*let a=3;
let b=4;
console.log(a<b);
*/

// **logical operator

// *Assignment operator:

/*let m=3;
let n=6;
m=m+n;

console.log(m);*/

//* ternary /conditional:

/*(let a=5;
let b=4;

let t = a>b? 'true' : 'false';
console.log(t);*/









//!data type

/* let firstName= 'My name is \'Rong\'';

console.log(firstName);*/

//?changing variable

 
/*let firstName="Rong";
firstName="RUBAIYA"

let lastName= `My name is ${firstName}` ;

console.log(lastName);*/

//? calculation method
/*let firstName="Rongkoni"
let age=44;
let age2=47;

let calculation=age+age2+firstName+age+age2;

console.log(calculation);
console.log(typeof calculation);*/

//?digint

/*let number=44444444444444444444444n;
let number1=4444444444444444n;

console.log(number*number1);
*/
//?same data save

/*let fruit= ['apple','lemon','orange'];
fruit[2]= 'peer';

console.log(fruit);
console.log(typeof fruit);

let student={
  fulname: 'Rong',
  age: 22,
  Date: 2002,
};

console.log(student);*/











//!Functon


/*function myFunction(fulName,age,datBirth){
  console.log('Hello '+ fulName  + ' '+ datBirth
  );
}

myFunction('Ali', 30, 1991);
myFunction('Rong',22,2002);


//?Even driven invocation


function isSubcribed(){
  console.log("Subscribed");
}
document.getElementById('btn').addEventListener('click',isSubcribed);


//?Automatic invocation

(function(message){console.log('my name is Rong',message);})("Tuki");


//?function expression

let maths=function(x,y){
   console.log("Hi hlw");
  return x*y
 
};

console.log(maths(3,4));
console.log(maths(5,4));

//?Arrays Function

let numbers=[3,4,5];
let sqNumbers= numbers.map(function (number){
  return number * number;
} );
console.log(sqNumbers);

//?without arrays

let plus=function(x,y){
  return x+y;
};
console.log(plus(4,6));*/

//?with arrays

/*let plus=(x,y)=>x+y;
console.log(plus (6,7));

// ?nested function

function greet(firstName){
  function sayHelo(){
    alert('helo '+firstName);
  }
   return sayHelo();
}
greet("Ali");*/







//!object:

/*const mobileModel= {
  brand:'Samsung',
  Model:'s24 Ultra',
  processor:'sanpdragon Gen 3',
  Camera:['200Mp','400mP',],
};

console.log(mobileModel);
//?for specification
console.log(mobileModel.brand);

// ?update

mobileModel.Model='s25 ultra';

console.log(mobileModel);

//?freez:

const mobileModel= {
  brand:'Samsung',
  Model:'s24 Ultra',
  processor:'sanpdragon Gen 3',
  Camera:['200Mp','400mP',],
};

Object.freeze(mobileModel);

mobileModel.Model='s34 ultra';

console.log(mobileModel);
console.log(Object.keys(mobileModel));

console.log(Object.values(mobileModel));

console.log(Object.hasOwnProperty('camera'));*/

//?  object 1:

// const obj1={
//   a:2,
//   b:3,
//   c:5,
// };

// const obj2={
//   p:4,
//   q:5,
//   r:8,
// };

// const obj3={
//   x:7,
//   y:9,
//   z:33,
// };
// ?const finaObj= Object.assign({target,source);
// const finaObj= Object.assign({},obj1,obj2,obj3);

// console.log(finaObj);


//?modarn way


// const finaObj= {...obj1,...obj2,...obj3};

// console.log(finaObj);



// ?function and cons specific answer:

// function Person(first,last){this.firstName=first,
//   this.lastName=last
// };

// const person1=new Person("Ali");
// const person2=new Person('rong');
// person2.age=15;

// console.log(person1);
// console.log(person2);












// !arrays:

// const language=['HTML','JAVA' , 'CSS', 44,true];
//  language[3]='php'//you can change the element
// const language2=new Array('HTML','JAVA' , 'CSS', 44,true);

// console.log(language);
// console.log(language2);


// ?string  express:

// console.log(language.toString());

// ?lenght

// console.log(language.length);

// ?increasing:

// const language3=['HTML','JAVA' , 'CSS', 44,true];
// language3 [6]='love';
// language3 [7]='Hate';
// language3[10]='wow'
// console.log(language3);


//?finding last numebr:

// console.log(language3[language3.length-1]);

//?undefined arrays:

// const person=[];
// person['firstName']='ali';
// person ['lastName']='rong';
// person[2]=35;
// console.log(person);
// console.log(person[2]);
// console.log(person.length);

// const num=[20];
// console.log(num);

// const num2=new Array(2,3);

// console.log(num2);



// ?latest way:

// const language3=['HTML','JAVA' , 'CSS', 44,true];
// language3 [6]='love';
// language3 [7]='Hate';
// language3[8]='wow'
// console.log(language3.at(3));

// console.log(language3.join(' * '));


// ?last item add & delete

// const language3=['HTML','JAVA' , 'CSS', 44,true];
// language3 [6]='love';
// language3 [7]='Hate';
// language3[8]='wow'

//  language3.pop();   //dlt
// language3.push("yahu")//add

// language3.unshift('lalalal')  //first add

// language3.shift();  // last dlt
// console.log(language3);


// ?adding many arrays:

// const x=[1,3,4,5,5];
// const y=[1,3,4,5,5];
// const z=[1,3,4,5,5];

// const a= x.concat(y);

// console.log(a);











// !event

// function subscribe(){
//   document.getElementById('text').innerHTML ='Subscribed';
//   document.getElementById('btn').innerHTML ='Subscribed';
//   document.getElementById('btn').style.backgroundColor='black'
// }

// function like (){
//   document.getElementById('like').innerHTML=' <i class="fa-solid fa-thumbs-up"></i> Liked';
// }


// function pressKey(){
//   document.getElementById('text').innerHTML='key press'
// }


// function onLoad(){
//   alert('Testing Js onloaded')
//   document.getElementById('text').innerHTML='Website loaded properly'
// }

// 








//!math

// let num=30.00000009;
// console.log(Math.round(num));
// console.log(Math.ceil(num));
// console.log(Math.floor(num));


// ?square value:

// console.log(Math.pow(5,3));

// ?root

// console.log(Math.sqrt(64));

// ?absulate

// console.log(Math.abs(-5));

// ?max min

// console.log(Math.max(1,2,3,4,5,6));
// console.log(Math.min(1,2,3,4,5,6));

// ?pie:

// console.log(Math.PI);


// ?trigonomatric value:

// console.log(Math.sin(90*Math.PI/180));

// ? random

// console.log(Math.random().toFixed(2)*10-4);


// ?make a ludo:

// let upperValue= 6;
// let lowerValue=1;
// let resultValue= Math.ceil(Math.random()*upperValue);
// console.log(resultValue);

function rollDice(){
  let randomNumber=Math.floor(Math.random()*6)+1;

let imagSource= randomNumber+ '.png';
document.getElementById("ludo").src=imagSource;
}