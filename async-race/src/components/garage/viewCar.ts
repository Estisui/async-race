import carInterface from "../global/carInterface";
import { makeChangable } from "./makeChangable";
import removeCar from "./removeCar";

function viewCar(carInfo: carInterface) {
  const car = document.createElement('div');
  car.classList.add('car');

  const select = document.createElement('button');
  select.classList.add('car__select');
  select.innerText = 'Select';
  select.addEventListener('click', makeChangable(carInfo));

  const remove = document.createElement('button');
  remove.classList.add('car__remove');
  remove.innerText = 'Remove';
  remove.addEventListener('click', removeCar(carInfo.id));

  const name = document.createElement('h4');
  name.classList.add('car__name');
  name.innerText = carInfo.name;

  car.append(select, remove, name);
  return car;
}

export default viewCar;