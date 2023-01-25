import carInterface from "../global/carInterface";
import viewCar from "./viewCar";

async function getCars(cars: HTMLDivElement) {
  const response = await fetch('http://127.0.0.1:3000/garage');
  const carsList = await response.json();
  carsList.forEach((car: carInterface) => {
    const carBlock = viewCar(car);
    cars.append(carBlock);
    car.element = carBlock;
  });
  return carsList;
}

export default getCars;