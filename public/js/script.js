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


document.addEventListener("DOMContentLoaded", function() {
    const images = ["images/g1.jpeg", "images/g2.jpeg", "images/g3.jpeg"];
    let currentIndex = 0;
    const heroImage = document.getElementById('hero-image');

    // Function to change the image with swipe animation
    function changeImage() {
        // Add swipe-out class
        heroImage.classList.add("swipe-left-out");

        setTimeout(() => {
            currentIndex = (currentIndex + 1) % images.length;
            heroImage.src = images[currentIndex];

            // Remove swipe-out class and add swipe-in class
            heroImage.classList.remove("swipe-left-out");
            heroImage.classList.add("swipe-left-in");
        }, 500); // Duration of the swipe out

        // Remove swipe-in class after animation completes
        setTimeout(() => {
            heroImage.classList.remove("swipe-left-in");
        }, 1000); // Duration of the swipe in
    }

    setInterval(changeImage, 5000); // Change image every 5 seconds
});


