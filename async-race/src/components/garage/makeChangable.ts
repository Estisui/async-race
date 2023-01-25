import carInterface from "../global/carInterface";
import { carsChangeColor, carsChangeInput } from "./changeInputs";

let lastChangableId: number | null = null;

function makeChangable(carInfo: carInterface) {
  return function curriedMakeChangable() {
    carsChangeInput.value = carInfo.name;
    carsChangeColor.value = carInfo.color;
    lastChangableId = carInfo.id;
  }
}

export { makeChangable , lastChangableId };