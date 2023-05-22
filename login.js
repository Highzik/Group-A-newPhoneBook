//grab the id or class that wants to be worked with from html
let myLogin = document.querySelector('.my-login');
let loginBtn = document.querySelector('.login-page');


//create a function to be executed
const goToContactPage = (event) => {
  event.preventDefault()

  //collecting and storing the value imputed by the user
  let firstInput = document.querySelector('.input_1').value;
  let secondInput = document.querySelector('.input_2').value;
  console.log(firstInput, secondInput);

  //the object data where the values imputed will be checked to know if they tally
  const login = {
    email: 'ajadiisaac99@gmail.com',
    password: 'FunkeAjadi12345'
  };

  //the if/else condition to know if they tally
  if (firstInput === login.email && secondInput === login.password) {
    //redirect the user to the new page if the condition is met
    true;
    setTimeout(function () {
      window.location.href = 'contactPage.html';
    }, 2000);
  } else if (firstInput === login.email && secondInput !== login.password) {
    false;
    alert('email or password incorrect');
  } else if (firstInput !== login.email && secondInput === login.password) {
    false;
    alert('email or password incorrect');
  } else {
    false;
    alert('Please fill in the required fields');
  }
}

loginBtn.addEventListener('click', goToContactPage);

