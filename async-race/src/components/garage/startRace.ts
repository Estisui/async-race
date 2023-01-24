import carInterface from "../global/carInterface";
import startCar from "./startCar";

function startRace(cars: Array<carInterface>) {
  return async function curriedStartRace() {
    cars.forEach((car) => {
      const icon = car.element?.querySelector('.car__icon') as HTMLObjectElement;
      const stop = car.element?.querySelector('.car__stop') as HTMLButtonElement;
      const start = car.element?.querySelector('.car__start') as HTMLButtonElement;
      console.log('false')
      if (icon && stop && start) {
        console.log(true);
        startCar(car.id, icon , stop, start)();
      }
    });
  }
}

export default startRace;