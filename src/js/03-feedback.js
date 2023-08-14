import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
let formData = {};

populateFormData();

// submit
form.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
    e.preventDefault();

    if (form.email.value === '' || form.message.value === '') {
        return alert('Please, fill in all the fields!');
    };

    const userData = {
        email: form.email.value,
        message: form.message.value,
    };
    console.log(userData);

    localStorage.removeItem('feedback-form-state');
    e.currentTarget.reset();
}

// saving data
form.addEventListener('input', throttle(onFormInput, 500));

function onFormInput(e) {
    formData[e.target.name] = e.target.value;

    localStorage.setItem('feedback-form-state',
    JSON.stringify(formData));
};

// populating saved data
function populateFormData() {
    const savedFormData = localStorage.getItem('feedback-form-state');

    if (!savedFormData) {
        return;
    };

    formData = JSON.parse(savedFormData);
    
    if (formData) {
        form.email.value = formData.email || '';
        form.message.value = formData.message || '';
    }; 
};


