// document.addEventListener("DOMContentLoaded", function() {
//     fetch('/cart-data')
//     .then(response => response.json())
//     .then(data => {
//     const cartItems = data.cart;
//     const orderItemsContainer = document.getElementById('order-items');
//     const orderTotalElement = document.getElementById('order-total');
//
//     let orderTotal = 0;
//
//     cartItems.forEach(item => {
//         const orderItem = document.createElement('div');
//         orderItem.classList.add('order-item');
//         orderItem.innerHTML = `
//             <p>${item.productName} - Size: ${item.productSize} x ${item.quantity}</p>
//             <p>${(item.productPrice * item.quantity).toFixed(2)} LE</p>
//         `;
//         orderItemsContainer.appendChild(orderItem);
//
//         orderTotal += item.productPrice * item.quantity;
//     });
//
//     orderTotalElement.innerText = `${orderTotal.toFixed(2)} LE`;
//     });
//
//
//
// });

document.addEventListener("DOMContentLoaded", function() {
    fetch('/cart-data')
        .then(response => response.json())
        .then(data => {
            const cartItems = data.cart;
            const orderItemsContainer = document.getElementById('order-items');
            const orderTotalElement = document.getElementById('order-total');

            let orderTotal = 0;
            const shippingFee = 50;

            cartItems.forEach(item => {
                const orderItem = document.createElement('div');
                orderItem.classList.add('order-item');
                orderItem.innerHTML = `
//             <p>${item.productName} - Size: ${item.productSize} x ${item.quantity}</p>
//             <p>${(item.productPrice * item.quantity).toFixed(2)} LE</p>
//         `;
                orderItemsContainer.appendChild(orderItem);

                orderTotal += item.productPrice * item.quantity;
            });

            // Add the shipping fee to the total
            orderTotal += shippingFee;

            // Display the total with shipping
            orderTotalElement.innerText = ${orderTotal.toFixed(2)} LE;
        });
});


