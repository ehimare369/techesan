// Selection of     HTML objects
const mobileMenu = document.querySelector('.navbar-toggle i');
const navbarMenu = document.querySelector('.navbar-menu');

// Defining function
const toggleNavbar = () => {
    // mobileMenu.classList.toggle('fa-bars');
    mobileMenu.classList.toggle('fa-times');
    navbarMenu.classList.toggle('navbar-active');
}

// Calling the fucntion after click event occurs
mobileMenu.addEventListener('click', toggleNavbar);