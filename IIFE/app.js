const aFunction =function(a,b){
  console.log(`A simple calculation ${a*b}`);
}
aFunction(3,4);
aFunction(3,6);

(function(a,b){
  console.log(a+b)})
  (3,6);/*  used semicolon*/

  ((a,b)=>console.log(a*b))(3,4);

  // dom:

  const h1= document.querySelector('.h1');
  h1.style.backgroundColor='red';  /*memory saved---it may be conflict*/

  // solve the problem:

  (function (){
    const h1= document.querySelector('.h1');
  h1.style.backgroundColor='red';
  })();

  // storing iife:

  const myModule= (function(){
    let privateVar="this is private";
    function privateFunc(){
      console.log('this is private function');
    }

    return {
      publicVar:'this is a public variable',
      publicMethod: function(){
        console.log("this is public mathod");
      },
    }
  })();

console.log(myModule.publicVar);   

console.log(myModule.publicMethod);/*accessible*/

console.log(myModule.privateVar);
 
console.log(myModule.privateFunc);

/*unaccessible*/


