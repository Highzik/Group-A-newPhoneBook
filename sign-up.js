let theForm = document.querySelector('.form');
let submitButton = document.querySelector('.submit');


//create a function to redirect the user after the form has been filled
function goToContactPage(event) {
  event.preventDefault()
  let firstInput = document.querySelector('.fname').value.toUpperCase();
  let secondInput = document.querySelector('.lname').value.toUpperCase();
  let thirdInput = document.querySelector('.email').value.toUpperCase();
  let forthInput = document.querySelector('.number').value;
  let fifthInput = document.querySelector('.sex').value.toUpperCase();
  let sixthInput = document.querySelector('.city').value.toUpperCase();
  let seventhInput = document.querySelector('.tel').value;
  let eighthInput = document.querySelector('.password').value;

  //create an object to store the information to be imputed by the user
  const formData = {
    firstName: firstInput,
    lastName: secondInput,
    email: thirdInput,
    age: forthInput,
    sex: fifthInput,
    city: sixthInput,
    tel: seventhInput,
    password: eighthInput
  };

  //perform form validation
  if (firstInput === formData.firstName && secondInput === formData.lastName && thirdInput === formData.email && forthInput === formData.age && fifthInput === formData.sex && sixthInput === formData.city && seventhInput === formData.tel && eighthInput === formData.password) {
    //redirect user to another window after successfully filling the forms
    setTimeout(function () {
      window.location.href = 'contactPage.html';
    }, 3000);
    return;
  } else {
    alert('Please fill in the required fields');
  }
}

//add the function to the submit button 
// submitButton.addEventListener('click', goToContactPage);
theForm.addEventListener('onSubmit', () => console.log('form submission'));
