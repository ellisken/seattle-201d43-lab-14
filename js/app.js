'use strict';

// Cart constructor.
var Cart = function(items) {
  // this.items is an array of CartItem instances.
  this.items = items;
};

Cart.prototype.addItem = function(product, quantity) {
  // TODO: Fill in this instance method to create a new CartItem and add it to this.items
};

Cart.prototype.saveToLocalStorage = function() {
  // TODO: Fill in this instance method to save the contents of the cart to localStorage
};

Cart.prototype.removeItem = function(item) {
  // TODO: Fill in this instance method to remove one item from the cart.
  // Note: You will have to decide what kind of parameter to pass in here!
};

var CartItem = function(product, quantity) {
  this.product = product;
  this.quantity = quantity;
};

// Product contructor.
var Product = function(filePath, name) {
  this.filePath = filePath;
  this.name = name;
  Product.allProducts.push(this);
};
Product.allProducts = [];

function generateCatalog() {
  new Product('img/bag.jpg', 'Bag');
  new Product('img/banana.jpg', 'Banana');
  new Product('img/bathroom.jpg', 'Bathroom');
  new Product('img/boots.jpg', 'Boots');
  new Product('img/breakfast.jpg', 'Breakfast');
  new Product('img/bubblegum.jpg', 'Bubblegum');
  new Product('img/chair.jpg', 'Chair');
  new Product('img/cthulhu.jpg', 'Cthulhu');
  new Product('img/dog-duck.jpg', 'Dog-Duck');
  new Product('img/dragon.jpg', 'Dragon');
  new Product('img/pen.jpg', 'Pen');
  new Product('img/pet-sweep.jpg', 'Pet Sweep');
  new Product('img/scissors.jpg', 'Scissors');
  new Product('img/shark.jpg', 'Shark');
  new Product('img/sweep.png', 'Sweep');
  new Product('img/tauntaun.jpg', 'Taun-Taun');
  new Product('img/unicorn.jpg', 'Unicorn');
  new Product('img/usb.gif', 'USB');
  new Product('img/water-can.jpg', 'Water Can');
  new Product('img/wine-glass.jpg', 'Wine Glass');
}

// Initialize the app by creating the big list of products with images and names
generateCatalog();

// Function to add all product names to dropdown menu
function addProductsToDropdownMenu(){
  // Grab select element
  var selectMenu = document.getElementById('items');
  // For each product in allProducts, create option element
  // Set value = product.name, set innerText = product.name
  // append to select element
  for(var i=0; i < Product.allProducts.length; i++){
    var productOption = document.createElement('option');
    productOption.value = Product.allProducts[i].name;
    productOption.textContent = Product.allProducts[i].name;
    selectMenu.appendChild(productOption);
  }
}
