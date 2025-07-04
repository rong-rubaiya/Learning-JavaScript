// !add text

let headTitle=document.querySelector('h1');

headTitle.innerText=headTitle.innerText+' Rong';

// !change:

let boxes = document.querySelectorAll('.box'); // ✅ সব `.box` ধরবে (NodeList)
boxes[0].innerText = 'new text ';
boxes[1].innerText = 'new text ';

let newNum = 1;
for (let box of boxes) { // ✅ NodeList iterable, so for...of কাজ করে
  box.innerText = `Box no ${newNum}`;
  newNum++;
}

//! creat element:

let learnBtn=document.createElement('button');
learnBtn.innerText='Learn more';

let bodyArea=document.querySelector('.main-box');
  bodyArea.append(learnBtn); //last
  bodyArea.prepend(learnBtn); //first
  bodyArea.before(learnBtn); //before
  bodyArea.after(learnBtn); //after



  //! add element:

  function addFruits(nameFruits){
    const li =document.createElement('li');
    li.innerText=`${nameFruits}`;
    document.querySelector('ul').appendChild(li);
  }
  addFruits('grapes'); 
  addFruits('jackfruits'); 



  //! add element: optimize:

  function addFruits(nameFruits){
    const li =document.createElement('li');
    li.appendChild(document.createTextNode(nameFruits));



    document.querySelector('ul').appendChild(li);
  }
  addFruits('apple'); 
  addFruits('dragon');
  
  
  // !edit:

  const editFruits= document.querySelector('li:first-child');
  console.log(editFruits);
  editFruits.textContent ='blueberry';

  // !replace:

  const newFruits = document.querySelector('li');
  newFruits.textContent='strawberry';
  editFruits.replaceWith(newFruits);
