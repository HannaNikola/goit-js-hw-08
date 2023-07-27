  import throttle from 'lodash.throttle';

const formElement = document.querySelector('.feedback-form');
const emailElement = document.querySelector('input');
const massageElement = document.querySelector('textarea');
const buttonElement = document.querySelector('button');

const LOCALSTORAGE_KEY = 'feedback-form-state';
let inputObject = {};

formElement.addEventListener('input', throttle(onInput, 1000));
formElement.addEventListener('submit', onSubmit);

function onInput(event) {
  inputObject[event.target.name] = event.target.value;
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(inputObject));
}

function onSubmit(event) {
  event.preventDefault();
  if (inputObject.email && inputObject.message) {
    console.log(inputObject);
    alert('Данні успішно відправленні');
    formElement.reset();
    localStorage.removeItem(LOCALSTORAGE_KEY);
    inputObject = {};
  } else {
    alert(' Поля повинні бути заповнені');
  }
}

function savedDataInput(event) {
  const savedData = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
  if (savedData) {
    emailElement.value = savedData.email;
    massageElement.value = savedData.message;
    inputObject = savedData;
  }
}

savedDataInput();
