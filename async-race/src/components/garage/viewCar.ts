import carInterface from "../global/carInterface";
import { makeChangable } from "./makeChangable";
import removeCar from "./removeCar";
import startCar from "./startCar";
import stopCar from "./stopCar";

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

  const start = document.createElement('button');
  start.classList.add('car__start');
  start.innerText = 'Start';

  const stop = document.createElement('button');
  stop.classList.add('car__stop');
  stop.innerText = 'Stop';
  stop.disabled = true;

  const name = document.createElement('h4');
  name.classList.add('car__name');
  name.innerText = carInfo.name;

  const icon = document.createElement('object');
  icon.classList.add('car__icon');
  icon.type = "image/svg+xml";
  icon.data = 'car.svg';
  icon.addEventListener('load', () => {
    const iconFill = icon.contentDocument?.getElementById('SVG_fill');
    if (iconFill) {
      iconFill.innerHTML = `.st0{fill:${carInfo.color};}`;
    }
  })
  start.addEventListener('click', startCar(carInfo.id, icon, stop, start));
  stop.addEventListener('click', stopCar(carInfo.id, icon, stop, start));

  car.append(select, remove, start, stop, name, icon);
  return car;
}

export default viewCar;