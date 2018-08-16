/* global Cart */
'use strict';

var table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
var cart;

function loadCart() {
  var cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
  cart = new Cart(cartItems);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  var tableBody = document.querySelector('#cart tbody');
  var newTableBody = document.createElement('tbody');
  tableBody.parentNode.replaceChild(newTableBody, tableBody);
}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {

  // TODO: Find the table body
  var tableBody = document.querySelector('#cart tbody');
  // TODO: Iterate over the items in the cart
  // TODO: Create a TR
  // TODO: Create a TD for the delete link, quantity,  and the item
  // TODO: Add the TR to the TBODY and each of the TD's to the TR
  for(var i=0; i < cart.items.length; i++){
    var itemRow = document.createElement('tr');
    var itemDelete = document.createElement('td');
    itemDelete.innerText = 'X';
    itemDelete.id = cart.items[i].product;
    var itemQty = document.createElement('td');
    itemQty.innerText = cart.items[i].quantity;
    var itemName = document.createElement('td');
    itemName.innerText = cart.items[i].product;
    itemRow.appendChild(itemDelete);
    itemRow.appendChild(itemQty);
    itemRow.appendChild(itemName);
    tableBody.appendChild(itemRow);
  }
}

function removeItemFromCart(event) {

  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  var productClicked = event.target.id;
  console.log(productClicked);
  if(productClicked){
    cart.removeItem(productClicked);
  }

  // TODO: Save the cart back to local storage
  cart.saveToLocalStorage();
  // TODO: Re-draw the cart table
  renderCart();
}

// This will initialize the page and draw the cart on screen
renderCart();

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
// var table = document.getElementById('cart');
// table.addEventListener('click', removeItemFromCart);
// For each td
