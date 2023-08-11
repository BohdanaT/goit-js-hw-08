

const form = document.querySelector('.feedback-form');
const email = document.querySelector('input[name="email"]');
const message = document.querySelector('textarea[name="message"]');


form.addEventListener('input', onFormInput);

function onFormInput(e) {
    console.log(e.CurrentTarget);
}