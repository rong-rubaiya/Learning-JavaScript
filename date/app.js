const myDate= new Date();
console.log(myDate);/*object*/

/* in termilar output:2025-06-18T03:55:50.877Z;

in consol output:Wed Jun 18 2025 09:57:16 GMT+0600 (Bangladesh Standard Time)*/

//solve this difference ooutput:
console.log(myDate.getDay);
console.log(myDate.toString());
console.log(myDate.toDateString());/*Wed Jun 18 2025  */
console.log(myDate.toLocaleDateString('default',{
  weekday:'long'
}));

// ?customised:

let update=new Date(2002, 6, 8,10,30,44,4);
console.log(update);

//now time

let nowTime=Date.now();
console.log(nowTime);

/* *defult time 19071 to now time all milisecond */

// ?example of now time:

function simpleTask (){
  for(let step =1; step<100; step++){
    console.log(`My walking time east to west step`);
  }
}
let startTime =Date.now();
simpleTask;
let endTime= Date.now();
console.log(`the time need ${endTime-startTime} millisecond to complete`);

// converted second:

let Time=Date.now();
console.log(Math.floor(Time/1000));/* second converted*/
console.log(Math.floor(Time/3600000  ));/* hour converted*/