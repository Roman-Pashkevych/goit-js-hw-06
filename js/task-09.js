const body = document.body;
const backgroundColor = document.querySelector('.color');
const changeColorBtn = document.querySelector('.change-color');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const handleChangeColor = () => {
  const currentColor = getRandomHexColor();
  body.setAttribute('style', `background:${currentColor}`);
  backgroundColor.textContent = currentColor;
};

changeColorBtn.addEventListener('click', handleChangeColor);
