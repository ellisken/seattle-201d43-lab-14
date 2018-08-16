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
    if(this.items[i].product == productName){
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

// Function to add all product names to dropdown menu
function addProductsToDropdownMenu(){
  // Grab select element
  var selectMenu = document.getElementById('items')
  if(selectMenu){
    // For each product in allProducts, create option element
    // Set value = product.name, set innerText = product.name
    // append to select element
    for(var i=0; i < Product.allProducts.length; i++){
      var productOption = document.createElement('option');
      productOption.value = Product.allProducts[i].name;
      productOption.textContent = Product.allProducts[i].name;
      selectMenu.appendChild(productOption);
    }
    // Set default dropdown item to blank
    var itemName = document.getElementById('items');
    itemName.value = '';
  }
}


// Event handler for submitting new cart item
function addItemSelectionToCart(e){
  e.preventDefault();
  //Get value for quantity selected
  var itemQty = document.getElementById('quantity');
  //If no qty specified, do not add to cart
  if(itemQty < 1){
    return;
  }
  //Get value for item selected
  var itemName = document.getElementById('items');
  //Instantiate new cartItem and add to Cart
  customerCart.addItem(itemName.value, itemQty.value);
  //Reset form values
  itemQty.value = '';
  itemName.value = '';
  //Display confirmation message
  displayConfirmationMessage();
}

// Add animated submit message to the main
function displayConfirmationMessage(){
  //Add confirmation section to main
  var mainElement = document.querySelector('main');
  var confirmationMessageSection = document.createElement('section');
  mainElement.appendChild(confirmationMessageSection);
  var confirmationMessage = document.createElement('p');

  //Add confirmation text and link to cart
  confirmationMessage.innerHTML = 'Added to cart!';
  confirmationMessageSection.appendChild(confirmationMessage);
}

// Initialize the app by creating the big list of products with images and names
generateCatalog();
// Add product options to dropdown
addProductsToDropdownMenu();

// Create cart Object
var customerCart = new Cart([]);

// Add event listener to submit button
var submitItemChoice = document.getElementById('catalog');
if(submitItemChoice){
  submitItemChoice.addEventListener('submit', addItemSelectionToCart);
}

// Add event listener to save cart contents to local storage to
// 'Cart' link
var navigateToCart = document.querySelector('nav ul li:last-child');
navigateToCart.addEventListener('click', function(){
  customerCart.saveToLocalStorage();
});



