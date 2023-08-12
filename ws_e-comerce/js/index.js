import { products } from './data.js';

const $ = document;

function createProductCardTemplate(thumbnail, title, description, price, idx) {
  const productCardTemplate = `
  <div class="col-md-4 mb-4">
  <div class="card">
  <img class="card-img-top" src="${thumbnail}" height="300" alt="Miniatura de producto ${title}">
  <div class="card-body">
  <h5 class="card-title">${title}</h5>
  <p class="card-text">${description}</p>
  <p class="card-text">$${price}</p>
  <button id="addToCartBTN${idx}" class="btn btn-primary">Add to Cart</button>
  </div>
  </div>
  </div>`;
  return productCardTemplate;
}

function render() {
  const productsGalery = $.getElementById('products_galery');
  products.forEach((product, idx) => {
    const productCardTemplate = createProductCardTemplate(
      product.thumbnail,
      product.title,
      product.description,
      product.price,
      idx
    );
    productsGalery.innerHTML += productCardTemplate;
    const btn = $.getElementById(`addToCartBTN${idx}`);
    btn.onclick = addToCart;
    console.log(
      '🚀 ~ file: index.js:34 ~ products.forEach ~ btn:',
      btn.__proto__
    );
  });
}

function addToCart(idx) {
  console.log('Producto', idx);
}

render();
