/* global Product, Cart */

'use strict';

// Set up an empty cart for use on this page.
var cart = new Cart([]);

// On screen load, we call this method to put all of the busmall options
// (the things in the Product.allProducts array) into the drop down list.
function populateForm() {
  // Grab selected element
  var selectMenu = document.getElementById('items');
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

// When someone submits the form, we need to add the selected item to the cart
// object, save the whole thing back to local storage and update the screen
// so that it shows the # of items in the cart and a quick preview of the cart itself.
function handleSubmit(event) {
  // TODO: Prevent the page from reloading
  event.preventDefault();

  // Do all the things ...
  addSelectedItemToCart();
  cart.saveToLocalStorage();
  updateCounter();
  updateCartPreview();

}

// TODO: Add the selected item and quantity to the cart
function addSelectedItemToCart() {
  // TODO: suss out the item picked from the select list
  // TODO: get the quantity
  // TODO: using those, add one item to the Cart
  //Get value for quantity selected
  var itemQty = document.getElementById('quantity');
  //If no qty specified, do not add to cart
  if(itemQty < 1){
    return;
  }
  //Get value for item selected
  var itemName = document.getElementById('items');
  //Instantiate new cartItem and add to Cart
  cart.addItem(itemName.value, itemQty.value);
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

// TODO: Update the cart count in the header nav with the number of items in the Cart
function updateCounter() {}

// TODO: As you add items into the cart, show them (item & quantity) in the cart preview div
function updateCartPreview() {
  // TODO: Get the item and quantity from the form
  // TODO: Add a new element to the cartContents div with that information
}

// Set up the "submit" event listener on the form.
// This is the trigger for the app. When a user "submits" the form, it will
// Call that handleSubmit method above and kick off the whole process
var catalogForm = document.getElementById('catalog');
catalogForm.addEventListener('submit', handleSubmit);

// Before anything else of value can happen, we need to fill in the select
// drop down list in the form.
populateForm();
