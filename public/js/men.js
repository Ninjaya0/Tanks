document.addEventListener('DOMContentLoaded', function() {
    // JavaScript to handle filter and sort functionality
    console.log('Page loaded, you can add your JS logic here.');
});

//three side role
document.addEventListener("DOMContentLoaded", function() {
    // Select the side menu and menu icon
    const sideMenu = document.getElementById('side-menu');
    const menuIcon = document.querySelector('.menu-icon');
    const closeBtn = document.querySelector('.close-btn');

    // Event listener to open the menu
    menuIcon.addEventListener('click', function(e) {
        e.preventDefault();
        sideMenu.style.width = '250px'; // Adjust width as needed
    });

    // Event listener to close the menu
    closeBtn.addEventListener('click', function(e) {
        e.preventDefault();
        sideMenu.style.width = '0'; // Hide the menu
    });
});



// document.addEventListener("DOMContentLoaded", function() {
//     let cartCount = 0;
//     const cartIcon = document.querySelector('.cart-icon');
//     const cartItems = [];

//     document.querySelectorAll('.add-to-cart-btn').forEach(button => {
//         button.addEventListener('click', function() {
//             cartCount += 1;
//             cartIcon.innerText = cartCount; // Update cart icon count

//             const productName = this.dataset.productName;
//             const productPrice = this.dataset.productPrice;
//             const productSize = this.parentNode.querySelector('.size-select').value;
//             const productImage = this.parentNode.querySelector('img').src; // Get the product image

//             // Add the product to the cart array
//             cartItems.push({
//                 name: productName,
//                 price: productPrice,
//                 size: productSize,
//                 image: productImage
//             });

//             // Save the cart items in localStorage to persist between pages
//             localStorage.setItem('cartItems', JSON.stringify(cartItems));
//         });
//     });

//     document.querySelectorAll('.buy-now-btn').forEach(button => {
//         button.addEventListener('click', function() {
//             const productName = this.dataset.productName;
//             const productPrice = this.dataset.productPrice;
//             const productSize = this.parentNode.querySelector('.size-select').value;
//             const productImage = this.parentNode.querySelector('img').src; // Get the product image

//             // Add the item directly to the cart and redirect to checkout page
//             localStorage.setItem('cartItems', JSON.stringify([{
//                 name: productName,
//                 price: productPrice,
//                 size: productSize,
//                 image: productImage
//             }]));
//             window.location.href = 'checkout.html'; // Change this to your actual checkout page
//         });
//     });

//     // Load cart count on page load from localStorage
//     const savedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
//     cartCount = savedCartItems.length;
//     cartIcon.innerText = cartCount;
// });

// document.addEventListener("DOMContentLoaded", function() {
//     let cartCount = 0;
//     const cartIcon = document.querySelector('.cart-icon');
//     fetch('/cart-items')
//     .then(response => response.json())
//     .then(data => {
//         cartItems = data;
//     }
//     );
//     // Update cart icon count on page load
//     cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);
//     cartIcon.innerText = cartCount;

//     document.querySelectorAll('.quantity-btn').forEach(button => {
//         button.addEventListener('click', function() {
//             const quantityInput = this.parentNode.querySelector('.quantity-input');
//             let currentQuantity = parseInt(quantityInput.value);

//             if (this.classList.contains('increase')) {
//                 quantityInput.value = currentQuantity + 1;
//             } else if (this.classList.contains('decrease')) {
//                 if (currentQuantity > 1) {
//                     quantityInput.value = currentQuantity - 1;
//                 }
//             }
//         });
//     });

//     document.querySelectorAll('.add-to-cart-btn').forEach(button => {
//         button.addEventListener('click', function() {
//             const productCard = this.closest('.product-card');
//             const productName = this.dataset.productName;
//             const productPrice = parseFloat(this.dataset.productPrice);
//             const productSize = productCard.querySelector('.size-select').value;
//             const productImage = productCard.querySelector('img').src;
//             const quantityInput = productCard.querySelector('.quantity-input');
//             const quantity = parseInt(quantityInput.value);

//             // Check if the product is already in the cart
//             let productInCart = cartItems.find(item => item.name === productName && item.size === productSize);

//             fetch('/add-to-cart', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify({
//                     productName: productName,
//                     productPrice: productPrice,
//                     size: productSize,
//                     image: productImage,
//                     quantity: quantity
//                 })
//             })
//             .then(response => response.json())
//             .then(data => {
//                 console.log(data.message);
//                 alert('Product added to cart!');
//             })
//             .catch(error => {
//                 console.error('Error:', error);
//             });

//             // Update cart icon count
//             cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);
//             cartIcon.innerText = cartCount;
//         });
//     });

//     document.querySelectorAll('.buy-now-btn').forEach(button => {
//         button.addEventListener('click', function() {
//             const productCard = this.closest('.product-card');
//             const productName = this.dataset.productName;
//             const productPrice = parseFloat(this.dataset.productPrice);
//             const productSize = productCard.querySelector('.size-select').value;
//             const productImage = productCard.querySelector('img').src;
//             const quantityInput = productCard.querySelector('.quantity-input');
//             const quantity = parseInt(quantityInput.value);

//             // Add the item directly to the cart and redirect to checkout page
//             fetch('/add-to-cart', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify({
//                     productName: productName,
//                     productPrice: productPrice,
//                     size: productSize,
//                     image: productImage,
//                     quantity: quantity
//                 })
//             })
//             .then(response => response.json())
//             .then(data => {
//                 console.log(data.message);
//                 alert('Product added to cart!');
//             })
//             .catch(error => {
//                 console.error('Error:', error);
//             });

//             window.location.href = 'checkout'; // Change this to your actual checkout page
//         });
//     });

//     // Load cart count on page load from localStorage
//     cartCount = savedCartItems.reduce((total, item) => total + item.quantity, 0);
//     cartIcon.innerText = cartCount;
// });


document.addEventListener('DOMContentLoaded', () => {
    const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
    const buyNowButtons = document.querySelectorAll('.buy-now-btn');
    const cartIcon = document.querySelector('.cart-icon');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const clickedButton = event.target;

            const productCard = clickedButton.closest('.product-card');

            const productName = clickedButton.dataset.productName;
            const productPrice = parseFloat(clickedButton.dataset.productPrice);
            const productSize = productCard.querySelector('.size-select').value;
            const productImage = productCard.querySelector('img').src;
            const quantityInput = productCard.querySelector('.quantity-input');
            const quantity = parseInt(quantityInput.value);

            fetch('/add-to-cart', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    productName: productName,
                    productPrice: productPrice,
                    productSize: productSize,
                    productImage: productImage,
                    quantity: quantity
                })
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    console.log(data.message);
                    cartIcon.innerText = data.cartCount;
                    alert('Product added to cart!');
                } else {
                    alert(data.message);
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
        });

    });

    buyNowButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const productName = this.dataset.productName;
            const productPrice = parseFloat(this.dataset.productPrice);
            const productSize = productCard.querySelector('.size-select').value;
            const productImage = productCard.querySelector('img').src;
            const quantity = parseInt(quantityInput.value);

            fetch('/add-to-cart', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    productName: productName,
                    productPrice: productPrice,
                    productSize: productSize,
                    productImage: productImage,
                    quantity: quantity
                })
            })
            .then(response => response.json())
            .catch(error => {
                console.error('Error:', error);
            });
            window.location.href = 'checkout';
        });
    });

});


document.addEventListener('DOMContentLoaded', function() {
    const sizeChartBtns = document.querySelectorAll('.size-chart-btn');
    sizeChartBtns.forEach(function(button) {
        button.addEventListener('click', function() {
            const sizeChartImage = this.nextElementSibling.querySelector('.size-chart');
            // Toggle the visibility of the size chart
            if (sizeChartImage.style.display === 'none' || sizeChartImage.style.display === '') {
                sizeChartImage.style.display = 'block';
            } else {
                sizeChartImage.style.display = 'none';
            }
        });
    });
});


document.querySelectorAll('.quantity-btn').forEach(button => {
    button.addEventListener('click', function() {
        const quantityInput = this.parentNode.querySelector('.quantity-input');
        let currentQuantity = parseInt(quantityInput.value);

        if (this.classList.contains('increase')) {
            quantityInput.value = currentQuantity + 1;
        } else if (this.classList.contains('decrease')) {
            if (currentQuantity > 1) {
                quantityInput.value = currentQuantity - 1;
            }
        }
    });
});