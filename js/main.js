const form = document.querySelector('#main');
const emailInput = document.querySelector('#email');
const input = document.querySelector('.input-group');

form.addEventListener('submit', (event) =>{
 event.preventDefault();
 

 validateForm();
})


function validateForm() {
 // email
 if(emailInput.value.trim().length == '') {
  setError(emailInput, 'Email cannot be empty');
 }else if (isEmailValid(emailInput.value)){
  input.classList.remove('error');
 }else{
  setError(emailInput, 'Please provide a valid email address');
 }
}

function setError(element, errorMessage) {
 const parent = element.parentElement;
 parent.classList.add('error');
 const paragraph = parent.querySelector('.error-message');
 paragraph.textContent = errorMessage;
}



function isEmailValid(email) {
 const emailRegExp =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
 return emailRegExp.test(email);
}