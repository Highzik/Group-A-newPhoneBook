//grab the letters in the index file
let firstColor = document.querySelectorAll('._color1');
let secondColor = document.querySelectorAll('._color2');
let loadingElement = document.querySelector('.loading');

//create a function to make it dynamic

const updateText = () => {
  loadingElement.textContent = 'Loading...... Please Wait';
}
updateText();

const goToPage = () => {
  window.location.href = 'todo-page.html';
}

//set the delay time before the redirection
setTimeout(goToPage, 3000);


