import moveCar from "./moveCar";

function startCar(carId: number, icon: HTMLObjectElement, stop: HTMLButtonElement, start: HTMLButtonElement) {
  return async function curriedStartCar() {
    start.disabled = true;
    fetch('http://127.0.0.1:3000/engine?' + new URLSearchParams({
      id: String(carId),
      status: 'started'
    }), {
    method: 'PATCH'
    })
    .then(response => response.json())
    .then(data => {moveCar(carId, icon, data.velocity, stop, start)});
  }
}

export default startCar;