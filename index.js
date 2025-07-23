const navLinks = document.querySelector('.nav-links');
function onToggleMenu(icon){
    icon.name = icon.name === 'close' ? 'menu' : 'close';
    navLinks.classList.toggle('top-[100%]');
}

// add to cart functionality
// document.addEventListener('DOMContentLoaded', () => {
//   const cartCount = document.getElementById('cart-count');
//   let count = 0;

//   const addToCartButtons = document.querySelectorAll('.add-to-cart');

//   addToCartButtons.forEach(button => {
//     button.addEventListener('click', () => {
//       count += 1;
//       cartCount.textContent = count;
//     });
//   });
// });


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


document.addEventListener('DOMContentLoaded', () => {
  const cartSidebar = document.getElementById('cart-sidebar');
  const closeCartBtn = document.getElementById('close-cart');
  const cartItemsContainer = document.getElementById('cart-items');
  const cartTotal = document.getElementById('cart-total');
  const cartCount = document.getElementById('cart-count');
  const cartIcon = document.querySelector('a[href=""]'); // The cart icon link

  let cart = [];

  // Open Cart when Cart Icon is clicked
  cartIcon.addEventListener('click', (e) => {
    e.preventDefault();
    cartSidebar.classList.remove('translate-x-full');
  });

  // Close Cart
  closeCartBtn.addEventListener('click', () => {
    cartSidebar.classList.add('translate-x-full');
  });

  // Add to Cart functionality
  document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
      const name = button.dataset.name;
      const price = parseFloat(button.dataset.price);

      // Add item to cart array
      cart.push({ name, price });

      // Update cart display
      renderCart();
    });
  });

  function renderCart() {
    cartItemsContainer.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
      total += item.price;
      const div = document.createElement('div');
      div.classList = 'flex justify-between items-center border-b pb-2';
      div.innerHTML = `
        <p>${item.name}</p>
        <p>$${item.price}</p>
      `;
      cartItemsContainer.appendChild(div);
    });

    cartTotal.textContent = total.toFixed(2);
    cartCount.textContent = cart.length;
  }
});
