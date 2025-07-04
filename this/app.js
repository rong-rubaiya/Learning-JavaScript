console.log(this);
 var Name= 'Dhong';
const student= {
  Name: 'rong',
  sinfo : function (){
   return `${this.Name} loves Rubaiya`
  }, /* 
  this use for output correctly showing */
  arrowFunction:()=>{
     return `${this.Name} loves Rubaiya`
  },
};

console.log(student.sinfo());
console.log(student.arrowFunction());  /*bcz this is a arroow so it refers global or window*/

// method---object;
//function--window / global