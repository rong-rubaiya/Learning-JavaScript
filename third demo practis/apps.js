const randomQuote = [
  'Earth, air, and ocean, glorious three--Robert Montgomery',

  'The three ingredients of poetry: the mystery of the universe, spiritual curiosity, the energy of language--Mary Oliver',

 'There are three signs of old age: loss of memory ... I forget the other two--Red Skelton',

 'To make three guineas do the work of five--Robert Burns'
];


const quoteElement=document.querySelector('#quote');
const authorElement=document.querySelector('#author');
const button=document.querySelector('#btn');

function autoQuote(){
  const quoteIndex=Math.floor(Math.random()*4);
  console.log(quoteIndex);
  quoteElement.textContent = randomQuote[quoteIndex];
}
autoQuote();
button.addEventListener('click',autoQuote);