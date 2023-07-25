// import _ from 'lodash';

const formElement = document.querySelector('.feedback-form');
const emailElement = document.querySelector('input');
const massageElement = document.querySelector('textarea');
const buttonElement = document.querySelector('button');
// console.log(emailElement);
// console.log(massageElement);
// console.log(formElement);
// console.log(buttonElement);

const LOCALSTORAGE_KEY = 'feedback-form-state';
let inputObject = {};

formElement.addEventListener('input', onInput);



function onInput(event) {
  inputObject[event.target.name] = event.target.value;
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(inputObject));
}

function saveMassage(evt) {
  evt.preventDefault();
}

