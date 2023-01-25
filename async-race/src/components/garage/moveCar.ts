import winner from "../winners/winner";

async function moveCar(carId: number, icon: HTMLObjectElement, velocity: number, stop: HTMLButtonElement, start: HTMLButtonElement, name: string) {
  const startTime = Date.now();
  
  let broken = false;
  let timePassed: number | null = null;

  const timer = setInterval(function() {
    timePassed = Date.now() - startTime;

    if (timePassed * velocity / 500000 >= 1 || broken) {
      clearInterval(timer);
      stop.disabled = false;
      if (timePassed * velocity / 500000 >= 1 && !winner.isKnown) {
        winner.updateWinner(carId, timePassed, name);
      }
      return;
    }

    draw(timePassed);

  }, 20);

  function draw(timePassed: number) {
    icon.style.left = `calc(${timePassed} * ${velocity} / 500000 * (100% - 50px))`;
  }

  const response = fetch('http://127.0.0.1:3000/engine?' + new URLSearchParams({
    id: String(carId),
    status: 'drive'
    }), {
    method: 'PATCH'
  });
  if ((await response).status == 500) {
    broken = true;
  }
  response.then(() => {return timePassed});
}

export default moveCar;