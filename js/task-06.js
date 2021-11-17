const validationInput = document.querySelector('#validation-input');
const validNumber = parseInt(validationInput.dataset.length);

const onInput = (event) => {
    const userValue = event.target.value.trim().length;

    if (userValue === validNumber) {
        validationInput.classList.add('valid');
        validationInput.classList.remove('invalid')
        return;
    } 
        validationInput.classList.add('invalid');
        validationInput.classList.remove('valid');
    
};

validationInput.addEventListener('blur', onInput);

