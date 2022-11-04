var throttle = require('lodash.throttle');

const form = document.querySelector('.feedback-form');
const input = form.querySelector('input[name="email"]');
const textArea = form.querySelector('textarea[name="message"]');

input.value =
  JSON.parse(localStorage.getItem('feedback-form-state'))?.email || '';
textArea.value =
  JSON.parse(localStorage.getItem('feedback-form-state'))?.message || '';

form.addEventListener('submit', e => {
  e.preventDefault();
  console.log({ email: input.value, message: textArea.value });
  localStorage.removeItem('feedback-form-state');
  input.value = '';
  textArea.value = '';
  console.log('CLICK');
});

form.addEventListener(
  'input',
  throttle(() => {
    console.log(input.value);
    console.log(textArea.value);
    localStorage.setItem(
      'feedback-form-state',
      JSON.stringify({
        email: input.value,
        message: textArea.value,
      })
    );
  }, 500)
);
