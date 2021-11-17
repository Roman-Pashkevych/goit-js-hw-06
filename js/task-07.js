const input = document.querySelector('#font-size-control');
const span = document.querySelector('#text');

input.addEventListener('input', (event) => {
    span.setAttribute('style', `font-size: ${event.target.value}px`);
})
/* console.log(input, span); */