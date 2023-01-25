import carInterface from "../global/carInterface";
import winner from "../winners/winner";
import startCar from "./startCar";

function startRace(cars: Array<carInterface>, startAll: HTMLButtonElement, stopAll: HTMLButtonElement) {
  return async function curriedStartRace() {
    startAll.disabled = true;
    winner.isKnown = false;
    const promises: Array<Promise<void>> = [];
    cars.forEach(async (car) => {
      const icon = car.element?.querySelector('.car__icon') as HTMLObjectElement;
      const stop = car.element?.querySelector('.car__stop') as HTMLButtonElement;
      const start = car.element?.querySelector('.car__start') as HTMLButtonElement;
      if (icon && stop && start) {
        const promise = ((startCar(car.id, icon, stop, start, car.name)))();
        promises.push(promise);
      }
    });
    Promise.all(promises).then(() => {stopAll.disabled = false});
  }
}

export default startRace;