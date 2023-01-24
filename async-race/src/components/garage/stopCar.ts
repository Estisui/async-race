function stopCar(carId: number, icon: HTMLObjectElement, stop: HTMLButtonElement, start: HTMLButtonElement) {
  return async function curriedStopCar() {
    stop.disabled = true;
    fetch('http://127.0.0.1:3000/engine?' + new URLSearchParams({
      id: String(carId),
      status: 'stopped'
    }), {
    method: 'PATCH'
    })
    .then(response => {if (response.ok) {
      icon.style.left = 0 + '%';
      start.disabled = false;
    }});
  }
}

export default stopCar;