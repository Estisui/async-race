import carInterface from "../global/carInterface";
import stopCar from "./stopCar";

function startRace(cars: Array<carInterface>, startAll: HTMLButtonElement, stopAll: HTMLButtonElement) {
  return async function curriedStopRace() {
    stopAll.disabled = true;
    cars.forEach((car) => {
      const icon = car.element?.querySelector('.car__icon') as HTMLObjectElement;
      const stop = car.element?.querySelector('.car__stop') as HTMLButtonElement;
      const start = car.element?.querySelector('.car__start') as HTMLButtonElement;
      if (icon && stop && start) {
        stopCar(car.id, icon , stop, start)();
      }
    });
    startAll.disabled = false;
  }
}

export default startRace;