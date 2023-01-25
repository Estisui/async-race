import moveCar from "./moveCar";

function startCar(carId: number, icon: HTMLObjectElement, stop: HTMLButtonElement, start: HTMLButtonElement, name: string) {
  return async function curriedStartCar() {
    start.disabled = true;
    const response = fetch('http://127.0.0.1:3000/engine?' + new URLSearchParams({
      id: String(carId),
      status: 'started'
    }), {
    method: 'PATCH'
    });
    const data: Promise<{velocity: number, distance: number}> = (await response).json();
    await moveCar(carId, icon, (await data).velocity, stop, start, name);
  }
}

export default startCar;