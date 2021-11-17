const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

nameInput.addEventListener('input', onInput);

function onInput(event) {
    console.log(event.target.value);

    if (!event.target.value) {
        nameOutput.textContent = 'Anonymous';
    }
    else {
        nameOutput.textContent = event.target.value;
    };
    }
