const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

nameInput.addEventListener('input', onInput);

function onInput(event) {
    const value = event.target.value.trim()

    if (!value) {
        nameOutput.textContent = 'Anonymous';
    }
    else {
        nameOutput.textContent = value;
    };
    }
