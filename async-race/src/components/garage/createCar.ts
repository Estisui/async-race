import { carsAddColor, carsAddInput } from "./addInputs";
import garageLoader from "./garageLoader";

async function createCar() {
  const car = {
    name: carsAddInput.value,
    color: carsAddColor.value
  };
  fetch('http://127.0.0.1:3000/garage', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(car)
  })
  .then(response => response.json())
  .then(garageLoader);
}

export default createCar;