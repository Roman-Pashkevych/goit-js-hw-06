const form = document.querySelector('.login-form');
console.log(form);

const onSubmit = (event) => {
    event.preventDefault();

    const email = form.elements.email.value;
    const password = form.elements.password.value;

    if (!email || !password) return alert('Всі поля мають бути заповнені!');
        
    console.log({
        email,
        password,
    });
    form.reset();
}

form.addEventListener('submit', onSubmit);