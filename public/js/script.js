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

    // Select all shop buttons
    const shopButtons = document.querySelectorAll('.shop-button');

    // Add touchstart event to simulate hover effect on touch devices
    shopButtons.forEach(function(button) {
        button.addEventListener('touchstart', function() {
            button.style.backgroundColor = 'purple';
            button.style.color = '#efefe9';
        });

        button.addEventListener('touchend', function() {
            button.style.backgroundColor = '#efefe9'; // Reset to cream white after touch
            button.style.color = 'black';
        });
    });

    // Select all images and videos with the class 'product-image'
    const productElements = document.querySelectorAll('.product-image');

    // Function to check if an element is visible in the viewport
    function checkVisibility() {
        productElements.forEach(function(element) {
            const rect = element.getBoundingClientRect(); // Get the position of the element
            const windowHeight = (window.innerHeight || document.documentElement.clientHeight);

            // If the element is within the viewport, add the 'visible' class
            if (rect.top <= windowHeight) {
                element.classList.add('visible');

                // Check if the element is a video and play it once visible
                if (element.tagName.toLowerCase() === 'video') {
                    element.play();
                }
            }
        });
    }

    // Add an event listener for the scroll event
    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); // Run on page load in case the element is already visible
});
