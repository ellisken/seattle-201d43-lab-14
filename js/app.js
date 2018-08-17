'use strict';

// Cart constructor.
var Cart = function(items) {
  // this.items is an array of CartItem instances.
  this.items = items;
};

Cart.prototype.addItem = function(product, quantity) {
  // TODO: Fill in this instance method to create a new CartItem and add it to this.items
  var newCartItem = new CartItem(product, quantity);
  this.items.push(newCartItem);
};

Cart.prototype.saveToLocalStorage = function() {
  // TODO: Fill in this instance method to save the contents of the cart to localStorage
  localStorage.setItem('cartItems', JSON.stringify(this.items));
};

Cart.prototype.removeItem = function(productName) {
  // TODO: Fill in this instance method to remove one item from the cart.
  // Note: You will have to decide what kind of parameter to pass in here!
  var index = -1;
  for(var i=0; i < this.items.length; i++){
    if(this.items[i].product === productName){
      index = i;
    }
  }
  this.items.splice(index, 1);
};

var CartItem = function(product, quantity) {
  this.product = product; //Product object
  this.quantity = quantity; //Number
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



