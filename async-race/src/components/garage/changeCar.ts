import { carsChangeColor, carsChangeInput } from "./changeInputs";
import garageLoader from "./garageLoader";
import { lastChangableId } from "./makeChangable";

async function changeCar() {
  if (typeof lastChangableId !== 'number') {
    return
  } else {
    const car = {
      name: carsChangeInput.value,
      color: carsChangeColor.value
    };
    fetch(`http://127.0.0.1:3000/garage/${lastChangableId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(car)
    })
    .then(response => response.json())
    .then(garageLoader);
  }
}

export default changeCar;