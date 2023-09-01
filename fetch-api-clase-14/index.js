const root = document.getElementById('root');

function createElementToPhoto(photos) {
  for (let index = 0; index < 10; index++) {
    const element = photos[index];
    const h1 = document.createElement('h1');
    const img = document.createElement('img');
    img.src = element.thumbnailUrl;
    h1.innerText = element.title;
    root.append(img);
  }
}

fetch('https://jsonplaceholder.typicode.com/photos')
  .then((response) => response.json())
  .then((json) => {
    createElementToPhoto(json);
  });
