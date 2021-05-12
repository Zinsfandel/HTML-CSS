/* Transition for login and register page */

let openLoginRight = document.querySelector('.h1');
let loginWrapper = document.querySelector('.login-wrapper');

openLoginRight.addEventListener('click', function() {
    loginWrapper.classList.toggle('open');
}) 
