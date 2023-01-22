import carInterface from "../global/carInterface";

function viewCar(carInfo: carInterface) {
  const car = document.createElement('div');
  car.classList.add('car');

  const select = document.createElement('button');
  select.classList.add('car__select');
  select.innerText = 'Select';

  const remove = document.createElement('button');
  remove.classList.add('car__remove');
  remove.innerText = 'Remove';

  const name = document.createElement('h4');
  name.classList.add('car__name');
  name.innerText = carInfo.name;

  car.append(select, remove, name);
  return car;
}

export default viewCar;