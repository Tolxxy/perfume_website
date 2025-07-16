const navLinks = document.querySelector('.nav-links');
function onToggleMenu(icon){
    icon.name = icon.name === 'close' ? 'menu' : 'close';
    navLinks.classList.toggle('top-[100%]');
}

// add to cart functionality
document.addEventListener('DOMContentLoaded', () => {
  const cartCount = document.getElementById('cart-count');
  let count = 0;

  const addToCartButtons = document.querySelectorAll('.add-to-cart');

  addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
      count += 1;
      cartCount.textContent = count;
    });
  });
});


// search drop dwon
const searchIcon = document.getElementById('search-icon');
const searchInput = document.getElementById('search');
const cancel = document.getElementById('cancel');
searchIcon.addEventListener('click', () => {
  searchInput.classList.add('top-0');
});

//
    cancel.addEventListener('click', () => {
        searchInput.classList.remove('top-0');
       
    });
// 
