const formShop = document.querySelector('form');
const newItemInput = document.getElementById('shop-item');
const deleteItem = document.querySelector('.fa-trash-alt');
const purchasedItem = document.querySelector('.fa-check');

const shoppingList = document.querySelector('ul.shopping-collection');

loadEventListeners();

function loadEventListeners() {
  // deleteItem.addEventListener('click', removeShopItem)
  // purchasedItem.addEventListener('click', purchasedShopItem)
  formShop.addEventListener('submit', addItem);

  shoppingList.addEventListener('click', removeShopItem);
}

function removeShopItem(e) {
  // Remove item
  if (e.target.parentElement.classList.contains('remove')) {
    if (confirm('Are you sure'))
      e.target.parentElement.parentElement.parentElement.remove();
  }

  if (e.target.parentElement.classList.contains('purchase')) {
    e.target.parentElement.parentElement.parentElement.style.background =
      'rgb(22, 174, 45)';
  }
  console.log('remove item clicked');
}
function purchasedShopItem(e) {
  console.log('purchase item clicked');
}

function addItem(e) {
  if (newItemInput.value == '') {
    alert('Enter a valid input');
  } else {
    // create h3 for input item
    const newElement = document.createElement('h3');
    newElement.innerHTML = newItemInput.value;

    // create cross and check a tags
    const link = document.createElement('span');
    link.innerHTML =
      "<a class='remove' href='#'><i class='fas fa-trash-alt'></i></a> <a class='purchase' href='#'><i class='fas fa-check'></i></a>";

    // create and append li for the new input
    const li = document.createElement('li');
    li.className = 'shopping-collection-item';
    li.appendChild(newElement);
    li.appendChild(link);

    // append to the ul
    shoppingList.appendChild(li);

    // initialize the input
    newItemInput.value = '';
  }

  e.preventDefault();
}
