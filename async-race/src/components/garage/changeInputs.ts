import changeCar from "./changeCar";

const carsChangeInput = document.createElement('input');
carsChangeInput.type = 'text';
const carsChangeColor = document.createElement('input');
carsChangeColor.type = 'color';
const carsChangeBtn = document.createElement('button');
carsChangeBtn.innerText = 'Change';
carsChangeBtn.addEventListener('click', changeCar);

export { carsChangeInput, carsChangeColor, carsChangeBtn }