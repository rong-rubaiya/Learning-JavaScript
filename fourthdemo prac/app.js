const imgContainer = document.querySelector('#image-container');
const urlApi = 'https://picsum.photos/v2/list';

const getPicture = () => {
  fetch(urlApi)
    .then(data => data.json())
    .then(items => {
      console.log(items);
      items.forEach(function(photoObject) {
        const newContainer = document.createElement('div');
        newContainer.classList.add('image-conatainer-iteam');
        const newImg = document.createElement('img');
        newImg.src = photoObject.download_url;

        newContainer.appendChild(newImg);

        const newAuthor = document.createElement('p');
        newAuthor.textContent = photoObject.author;

        newContainer.appendChild(newAuthor);
        imgContainer.appendChild(newContainer);
      });
    });
};

getPicture();