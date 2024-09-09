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