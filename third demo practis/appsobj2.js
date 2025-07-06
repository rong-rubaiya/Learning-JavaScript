const randomQuotes=[
  {quote:'Earth, air, and ocean, glorious three',
  author:'Robert Montgomery',},
  {quote:'The three ingredients of poetry: the mystery of the universe, spiritual curiosity, the energy of language',
  author:'Mary Oliver',},
  {quote:'There are three signs of old age: loss of memory ... I forget the other two',
  author:'Red Skelton',},
  {quote:'To make three guineas do the work of five',
  author:'Robert Burns',},
]



const quoteElement=document.querySelector('#quote');
const authorElement=document.querySelector('#author');
const button=document.querySelector('#btn');

function autoQuote(){
  const quoteIndex=Math.floor(Math.random()*randomQuotes.length);
  console.log(quoteIndex);
  quoteElement.textContent = randomQuotes[quoteIndex].quote;
  authorElement.textContent = randomQuotes[quoteIndex].author;
}
autoQuote();
button.addEventListener('click',autoQuote);