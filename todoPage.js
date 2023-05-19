//grab the two buttons
let signUpBTN = document.querySelector('.sign-up');
let loginBTN = document.querySelector('.login');

//create a function to redirect user to a signup page
const goToSignUpPage = () => {
  window.location.href = 'sign-up-page.html';
}
signUpBTN.addEventListener('click', goToSignUpPage);

//create a function to redirect user to the login page
const goToLoginPage = () => {
  window.location.href = 'login-page.html';
}
loginBTN.addEventListener('click', goToLoginPage);

