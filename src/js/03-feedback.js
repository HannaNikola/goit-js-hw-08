// import _ from 'lodash';

const formElement = document.querySelector('.feedback-form');
const emailElement = document.querySelector('input');
const massageElement = document.querySelector('textarea');
const buttonElement = document.querySelector('button');


const LOCALSTORAGE_KEY = 'feedback-form-state';
let inputObject = {};

formElement.addEventListener('input', onInput);
formElement.addEventListener('submit', onSubmit);



function onInput(event) {
  inputObject[event.target.name] = event.target.value;
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(inputObject));


}

 function onSubmit (event) {
    event.preventDefault();
    if (inputObject.email && inputObject.message) {
      console.log(inputObject);
      alert('Данні успішно відправленні');
      formElement.reset();
      localStorage.removeItem(LOCALSTORAGE_KEY);
      // inputObject = {};
    } else {
      alert(' Поля повинні бути заповнені');
    }
}
  














