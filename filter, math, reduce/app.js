const fruits = ['apple',  'jackfruits', 'orange', 'lemon'];

const fruitCapA =fruits.filter(fruits=> fruits.toLowerCase().startsWith('a'));
console.log(fruitCapA);

const fruits5 = fruits.filter(fruits=> fruits.length===5);
console.log(fruits5);

const fruitsA = fruits.filter(fruits=>fruits.toLocaleLowerCase().includes('a'));
console.log(fruitsA);


const number = [1,2,3,4,5,6,7,8,9,10];
const numberMore5= number.filter(number=>number>5);
console.log(numberMore5);

const num= number.
map(number=> number+5).
map(number=>number*5)
.filter(number=> number>=50);
console.log(num);


// reduce

// const mytotal= number.reduce(accu,curValue=>(accu+curValue),0);
// console.log(mytotal);

const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((acc, cur) => acc + cur, 0);
console.log(sum); // 10


