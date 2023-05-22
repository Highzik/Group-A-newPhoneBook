// create array
const array = [];
//console.log(array);
let form = document.querySelector('#form');
//let submit = document.querySelector('#submit');

//create a constructor
function StudentSignUp (firstname,lastname,email,age,sex,city,tel,password) {
  this.firstname = firstname
  this.lastname = lastname
  this.email = email 
  this.age = age
  this.sex = sex 
  this.city = city
  this.tel = tel 
  this.password = password
} 
const studentData = () => {
  const fname = document.querySelector('#firstname').value;
  const lname = document.querySelector('#lastname').value;
  const email = document.querySelector('#email').value;
  const age = document.querySelector('#age').value;
  const sex = document.querySelector('#sex').value;
  const city = document.querySelector('#city').value;
  const tel = document.querySelector('#tel').value;
  const password = document.querySelector('#password').value;

  const signee1 = new StudentSignUp (fname,lname,email,age,sex,city,tel,password)
  return signee1;

}
function storeData(signee1) {
  // check if local storage is empty
  if (localStorage.getItem('contactData') === null) {
      // add data to local storage
      localStorage.setItem('contactData', JSON.stringify(array));
  } else {
      // get data from local storage2
      const contactData = JSON.parse(localStorage.getItem('contactData'));
      // add data to local storage
      array.push(signee1);
      // console.log(array)
      localStorage.setItem('contactData', JSON.stringify(contactData));
  }
}
form.addEventListener('submit', function (event) {
  event.preventDefault();
  const newSignee = studentData()
  array.push(newSignee);
  // store data in local storage
  storeData(newSignee);
  console.log(array);
  // function to clear form
  form.reset();
});

// submit.addEventListener('click',(studentData) => {
// //  alert('Thank')

// })





