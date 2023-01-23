import createCar from "./createCar";

const carsAddInput = document.createElement('input');
carsAddInput.classList.add('garage___add_name');
carsAddInput.type = 'text';
const carsAddColor = document.createElement('input');
carsAddColor.classList.add('garage__add_color');
carsAddColor.type = 'color';
const carsAddBtn = document.createElement('button');
carsAddBtn.innerText = 'Create';
carsAddBtn.addEventListener('click', createCar);

export {carsAddInput, carsAddColor, carsAddBtn};