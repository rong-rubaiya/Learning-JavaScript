const fruits =[ 'mango','lichi','banana','orange']

for (let fruit=0;fruit<fruits.length;fruit++){
  console.log(fruit[fruit]);
}

for(const fruit of fruits){
console.log(fruit);
}

const myName ='Rubaiya Hamdi';
for (const name of myName) {
 console.log(`Each char is ${name}`);  
}

const country= new Map([
  ['bn', 'bangladesh'],
  ['in', 'india'],
  ['pk', 'pakistan']
]);

country.set('vu','vutan');/* can add*/;
country.set('bn', 'bangladesh');/*cannot adding*/
for (const element of country) {
  console.log(element);
}

for (const [value,element] of country) {
  console.log( value,':',element);
}

const myCountry={
bn : 'bangladesh',
in : 'india',
pk : 'pakistan'
}

// for (const country of myCountry) {
//   console.log(country);
// }

/*iterabble- repeatation*/

/*solve this problem use for of object */

for (const key of Object.keys(myCountry)) {
  console.log(key);
}

/*solve this problem use for in */

// for (const country in myCountry) {
//   console.log(country,'-',myCountry[country]);
// }

for (const key in fruits) {
 console.log(fruits[key]);
}

fruits.forEach(function(fruit) {
  console.log(fruit);
});

fruits.forEach(fruit => {
  console.log(fruit);
});


function myFruit(fruit){
  console.log(fruit);
}
fruits.forEach(myFruit);

const  learn=[
  {
    name: 'love',
    need:'love everybody'
  },
  {
    name: 'chocklate',
    need:'buy chocklate'
  },
  {
    name: 'husband',
    need:'find a boy '
   }
];

learn.forEach(info=> {
  console.log(`want ${info.name}? so ${info.need}`);
})