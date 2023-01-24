async function moveCar(carId: number, icon: HTMLObjectElement, velocity: number, stop: HTMLButtonElement, start: HTMLButtonElement) {
  const startTime = Date.now();
  
  let broken = false;

  fetch('http://127.0.0.1:3000/engine?' + new URLSearchParams({
    id: String(carId),
    status: 'drive'
    }), {
    method: 'PATCH'
  }).then(response => {if (response.status == 500) {
    broken = true;
  }});

  const timer = setInterval(function() {
    const timePassed = Date.now() - startTime;

    if (timePassed * velocity / 500000 >= 1 || broken) {
      clearInterval(timer);
      stop.disabled = false;
      return;
    }

    draw(timePassed);

  }, 20);

  function draw(timePassed: number) {
    icon.style.left = timePassed * velocity / 500000 * 100 + '%';
  }
}

export default moveCar;