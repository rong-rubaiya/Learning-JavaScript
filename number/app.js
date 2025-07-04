
// ?string:

const x='434';
 console.log(x);

// ? 16+ digit:
const y=999999999999999999;
console.log(y);

//? 16- resutlt;

let t=444444444444444;
console.log(t);


//?.digit :

const k= 0.1;
const l= 0.2;
const n=k+l;
console.log(k+l);/*limitation of computer;*/ 
  //? solution
console.log((k*10+l*10)/10);

console.log(n.toFixed(2));

// ?number+ string:

let a=10;
let b=20;
let c= 0.6;
let d= 0.7;
let e= (c+d).toFixed(1)/*string*/
let f=30;
let g= 'not'
console.log(a+b+e);
console.log(e+b+a);
console.log(a+e+b);
console.log(b-c-e);
console.log(a-g);/*NaN=not a number data type:Number*/



console.log(f.toString(2));/*  ?binary converted*/
console.log(f.toString(16));/*  ?hexadecimal converted*/
console.log(f.toString(8));/*  ?octal converted*/


// ?toPrecision:

const r= 300;
console.log(r.toPrecision(2));/*3.0e+2*/
console.log(r.toPrecision(4));/*300.0*/
console.log(r.toFixed(4));/*300.0*/

const s=4894783948;
console.log(s.toPrecision(4));/*4.895e+9*/


// ? number method:

let newNumber= Number.EPSILON;
 newNumber= Number.MAX_VALUE;
 newNumber= Number.MIN_VALUE;
 newNumber= Number.POSITIVE_INFINITY;
 newNumber= Number.NEGATIVE_INFINITY;
 newNumber= Number.NaN;

 console.log(newNumber);