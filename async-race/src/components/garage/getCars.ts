import carInterface from "../global/carInterface";
import viewCar from "./viewCar";

async function getCars(cars: HTMLDivElement) {
  fetch('http://127.0.0.1:3000/garage')
  .then(response => response.json())
  .then(carsList => carsList.forEach((car: carInterface) => {
    cars.append(viewCar(car));
  }));
}

export default getCars;