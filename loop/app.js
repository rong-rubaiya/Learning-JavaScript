let car =['BMW','TOYATA','FORD', 'TESLA'];

for (let i=0;i<car.length; i++){
  console.log(i, car[i]);
}

// for in loop

let person={
  name: 'Rong',
  age: 23,
  FavouriteFood : 'nothing'
}

for( let i in person){
  let capLetter= i.charAt(0).toUpperCase()+ i.slice(1);

  console.log(capLetter+ ':'+ person[i]);
  // console.log(i + ':'+person [i]);
}

// for each method

for(let i of car){
  console.log(i);
}

// while

let num=0;
while(num <10){
  console.log(num);
  num++;
}