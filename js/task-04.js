let counterValue = 0;
const spanValue = document.querySelector("#value");
const buttonDecrement = document.querySelector('button[data-action="decrement"]');

const buttonIncrement = document.querySelector('button[data-action="increment"]');

buttonDecrement.addEventListener("click", onDecrement);
buttonIncrement.addEventListener("click", onIncrement);

function onDecrement () {
    console.log('click');
    spanValue.textContent = counterValue -= 1;
};

function onIncrement () {
    console.log('click');
    spanValue.textContent = counterValue += 1;
};

