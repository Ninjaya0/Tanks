// document.addEventListener("DOMContentLoaded", function() {
//     const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
//     const cartContainer = document.getElementById('cart-items');

//     cartItems.forEach(item => {
//         const cartItem = document.createElement('div');
//         cartItem.classList.add('cart-item');
//         cartItem.innerHTML = `
//             <p>${item.name} - Size: ${item.size}</p>
//             <p>${item.price}</p>
//         `;
//         cartContainer.appendChild(cartItem);
//     });

//     document.getElementById('checkout-btn').addEventListener('click', function() {
//         window.location.href = 'checkout.html'; // Redirect to the checkout page
//     });
// });


// document.addEventListener("DOMContentLoaded", function() {
//     const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
//     const cartContainer = document.getElementById('cart-items');

//     cartItems.forEach(item => {
//         const cartItem = document.createElement('div');
//         cartItem.classList.add('cart-item');
//         cartItem.innerHTML = `
//             <img src="${item.image}" alt="${item.name}" class="cart-item-image">
//             <div class="cart-item-details">
//                 <p>${item.name} - Size: ${item.size}</p>
//                 <p>${item.price}</p>
//             </div>
//         `;
//         cartContainer.appendChild(cartItem);
//     });

//     document.getElementById('checkout-btn').addEventListener('click', function() {
//         window.location.href = 'checkout.html'; // Redirect to the checkout page
//     });
// });

// document.addEventListener("DOMContentLoaded", function() {
//     let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
//     const cartContainer = document.getElementById('cart-items');
//     const cartTotal = document.getElementById('cart-total');

//     // Function to update the cart total
//     function updateCartTotal() {
//         const total = cartItems.reduce((sum, item) => sum + parseFloat(item.price) * item.quantity, 0);
//         cartTotal.innerText = `Subtotal: ${total.toFixed(2)} LE`;
//     }

//     // Function to render the cart items
//     function renderCart() {
//         cartContainer.innerHTML = ''; // Clear the container
//         cartItems.forEach((item, index) => {
//             const cartItem = document.createElement('div');
//             cartItem.classList.add('cart-item');
//             cartItem.innerHTML = `
//                 <img src="${item.image}" alt="${item.name}" class="cart-item-image">
//                 <div class="cart-item-details">
//                     <p>${item.name} - Size: ${item.size}</p>
//                     <p>${item.price}</p>
//                     <p>Quantity: ${item.quantity}</p>
//                 </div>
//                 <button class="remove-btn" data-index="${index}">Remove</button>
//             `;
//             cartContainer.appendChild(cartItem);
//         });

//         updateCartTotal();
//     }

//     // Function to remove an item from the cart
//     function removeItemFromCart(index) {
//         cartItems.splice(index, 1); // Remove item at the specified index
//         localStorage.setItem('cartItems', JSON.stringify(cartItems)); // Update localStorage
//         renderCart(); // Re-render the cart
//     }

//     // Render the cart on page load
//     renderCart();

//     // Event listener for remove buttons
//     cartContainer.addEventListener('click', function(event) {
//         if (event.target.classList.contains('remove-btn')) {
//             const index = event.target.dataset.index;
//             removeItemFromCart(index);
//         }
//     });

//     // Checkout button event
//     document.getElementById('checkout-btn').addEventListener('click', function() {
//         window.location.href = 'checkout.html'; // Redirect to the checkout page
//     });
// });

//gaaaaaaaaaaaaaaaaaaaaaaaaaaamed
// document.addEventListener("DOMContentLoaded", function() {
//     let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
//     const cartContainer = document.getElementById('cart-items');
//     const cartTotal = document.getElementById('cart-total');

//     // Function to update the cart total
//     function updateCartTotal() {
//         const total = cartItems.reduce((sum, item) => sum + parseFloat(item.price) * item.quantity, 0);
//         cartTotal.innerText = `Subtotal: ${total.toFixed(2)} LE`;
//     }

//     // Function to render the cart items
//     function renderCart() {
//         cartContainer.innerHTML = ''; // Clear the container
//         cartItems.forEach((item, index) => {
//             const cartItem = document.createElement('div');
//             cartItem.classList.add('cart-item');
//             cartItem.innerHTML = `
//                 <img src="${item.image}" alt="${item.name}" class="cart-item-image">
//                 <div class="cart-item-details">
//                     <p>${item.name} - Size: ${item.size}</p>
//                     <p>${item.price} LE</p>
//                     <p>Quantity: ${item.quantity}</p>
//                 </div>
//                 <button class="remove-btn" data-index="${index}">Remove</button>
//             `;
//             cartContainer.appendChild(cartItem);
//         });

//         updateCartTotal();
//     }

//     // Function to remove an item from the cart
//     function removeItemFromCart(index) {
//         cartItems.splice(index, 1); // Remove item at the specified index
//         localStorage.setItem('cartItems', JSON.stringify(cartItems)); // Update localStorage
//         renderCart(); // Re-render the cart
//     }

//     // Render the cart on page load
//     renderCart();

//     // Event listener for remove buttons
//     cartContainer.addEventListener('click', function(event) {
//         if (event.target.classList.contains('remove-btn')) {
//             const index = event.target.dataset.index;
//             removeItemFromCart(index);
//         }
//     });

//     // Checkout button event
//     document.getElementById('checkout-btn').addEventListener('click', function() {
//         window.location.href = 'checkout.html'; // Redirect to the checkout page
//     });
// });


// document.addEventListener("DOMContentLoaded", function() {
//     let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
//     const cartContainer = document.getElementById('cart-items');
//     const cartTotal = document.getElementById('cart-total');

//     // Function to update the cart total
//     function updateCartTotal() {
//         const total = cartItems.reduce((sum, item) => sum + parseFloat(item.price) * item.quantity, 0);
//         cartTotal.innerText = `Subtotal: ${total.toFixed(2)} LE`;
//     }

//     // Function to render the cart items
//     function renderCart() {
//         cartContainer.innerHTML = ''; // Clear the container
//         cartItems.forEach((item, index) => {
//             const cartItem = document.createElement('div');
//             cartItem.classList.add('cart-item');
//             cartItem.innerHTML = `
//                 <img src="${item.image}" alt="${item.name}" class="cart-item-image">
//                 <div class="cart-item-details">
//                     <p>${item.name} - Size: ${item.size}</p>
//                     <p>${item.price} LE</p>
//                     <div class="quantity-selector">
//                         <button class="quantity-btn decrease" data-index="${index}">-</button>
//                         <input type="number" class="quantity-input" value="${item.quantity}" min="1" readonly>
//                         <button class="quantity-btn increase" data-index="${index}">+</button>
//                     </div>
//                 </div>
//                 <button class="remove-btn" data-index="${index}">Remove</button>
//             `;
//             cartContainer.appendChild(cartItem);
//         });

//         updateCartTotal();
//     }

//     // Function to remove an item from the cart
//     function removeItemFromCart(index) {
//         cartItems.splice(index, 1); // Remove item at the specified index
//         localStorage.setItem('cartItems', JSON.stringify(cartItems)); // Update localStorage
//         renderCart(); // Re-render the cart
//     }

//     // Function to update the quantity of an item in the cart
//     function updateQuantity(index, action) {
//         if (action === 'increase') {
//             cartItems[index].quantity += 1;
//         } else if (action === 'decrease' && cartItems[index].quantity > 1) {
//             cartItems[index].quantity -= 1;
//         } else if (action === 'decrease' && cartItems[index].quantity === 1) {
//             // If quantity reaches 1 and user decreases again, remove the item
//             removeItemFromCart(index);
//             return;
//         }

//         localStorage.setItem('cartItems', JSON.stringify(cartItems)); // Update localStorage
//         renderCart(); // Re-render the cart
//     }

//     // Render the cart on page load
//     renderCart();

//     // Event listener for quantity buttons
//     cartContainer.addEventListener('click', function(event) {
//         if (event.target.classList.contains('quantity-btn')) {
//             const index = event.target.dataset.index;
//             const action = event.target.classList.contains('increase') ? 'increase' : 'decrease';
//             updateQuantity(index, action);
//         }

//         if (event.target.classList.contains('remove-btn')) {
//             const index = event.target.dataset.index;
//             removeItemFromCart(index);
//         }
//     });

//     // Checkout button event
//     document.getElementById('checkout-btn').addEventListener('click', function() {
//         window.location.href = 'checkout'; // Redirect to the checkout page
//     });
// });




document.addEventListener("DOMContentLoaded", function() {
    const cartContainer = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    
    function updateCartTotal(cartItems) {
        if(cartItems && cartItems.length > 0){
            const total = cartItems.reduce((sum, item) => sum + parseFloat(item.productPrice) * item.quantity, 0);
            cartTotal.innerText = `Subtotal: ${total.toFixed(2)} LE`;
        }
        else{
            cartTotal.innerText = '';
        }
    }

    function renderCart() {
        cartContainer.innerHTML = '';
        fetch('/cart-data')
        .then(response => response.json())
        .then(data => {
            const cartItems = data.cart;
            cartItems.forEach((item, index) => {
            const cartItem = document.createElement('div');
            cartItem.classList.add('cart-item');
            cartItem.innerHTML = `
                <img src="${item.productImage}" alt="${item.productName}" class="cart-item-image">
                <div class="cart-item-details">
                    <p>${item.productName} - Size: ${item.productSize}</p>
                    <p>${item.productPrice} LE</p>
                    <div class="quantity-selector">
                        <button class="quantity-btn decrease" data-index="${index}">-</button>
                        <input type="number" class="quantity-input" value="${item.quantity}" min="1" readonly>
                        <button class="quantity-btn increase" data-index="${index}">+</button>
                    </div>
                </div>
                <button class="remove-btn" data-index="${index}">Remove</button>
            `;
            cartContainer.appendChild(cartItem);
        });
            updateCartTotal(cartItems);
        })
        .catch(error => console.error('Error fetching cart data:', error));
        
    }

    function removeItemFromCart(index) {
        fetch('/remove-item', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ index: index })
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                renderCart();
            } else {
                console.error('Failed to remove item:', data.message);
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
    }

    function updateQuantity(index, action) {
        fetch('/update-quantity', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ index: index, action: action })
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                renderCart();
            } else {
                console.error('Failed to update quantity:', data.message);
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
    }

    renderCart();

        // Event listener for quantity buttons
        cartContainer.addEventListener('click', function(event) {
            if (event.target.classList.contains('quantity-btn')) {
                const index = event.target.dataset.index;
                const action = event.target.classList.contains('increase') ? 'increase' : 'decrease';
                updateQuantity(index, action);
            }
    
            if (event.target.classList.contains('remove-btn')) {
                const index = event.target.dataset.index;
                removeItemFromCart(index);
            }
        });
    
        // Checkout button event
        document.getElementById('checkout-btn').addEventListener('click', function() {
            window.location.href = 'checkout'; // Redirect to the checkout page
        });

});