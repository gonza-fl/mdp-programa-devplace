import { products } from './data.js';

const $ = document;

const cart = [];

const productsGalery = $.getElementById('products_galery');
productsGalery.addEventListener('click', (e) => {
  const node = e.target;
  if (node.classList.contains('btn')) {
    addToCart(node.dataset.id);
  }
});

function renderProducts() {
  const template = $.querySelector('#template-galery-productItem').content;
  const fragment = $.createDocumentFragment();
  products.forEach((product) => {
    template.querySelector('img').src = product.thumbnail;
    template.querySelector(
      'img'
    ).alt = `Miniatura de producto ${product.title}`;
    template.querySelector('h5').textContent = product.title;
    template.querySelector('.product-description').textContent =
      product.description;
    template.querySelector('.product-price').textContent = `$ ${product.price}`;
    template.querySelector('button').setAttribute('data-id', product.id);
    const clone = template.cloneNode(true);
    fragment.appendChild(clone);
  });
  productsGalery.appendChild(fragment);
}

function addToCart(id) {
  const productFound = products.find((product) => product.id === parseInt(id));
  const productCartList = $.getElementById('productCartList');
  cart.push(productFound);

  const template = $.querySelector('#template-cart-productItem').content;
  const fragment = $.createDocumentFragment();

  cart.forEach((product) => {
    template.querySelector('.cart-product-title').textContent = product.title;
    template.querySelector(
      '.cart-product-price'
    ).textContent = `$ ${product.price}`;
    template.querySelector('.cart-product-amount').textContent = '1';
    template.querySelector('button').setAttribute('data-id', product.id);
    const clone = template.cloneNode(true);
    fragment.appendChild(clone);
  });
  productCartList.innerHTML = '';
  productCartList.appendChild(fragment);

  const initialValue = 0;

  const cartPrice = cart.reduce(
    (acc, product) => acc + product.price,
    initialValue
  );
  console.log('🚀 ~ file: index.js:56 ~ addToCart ~ cartPrice:', cartPrice);
}

function main() {
  renderProducts();
}

main();
