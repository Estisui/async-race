import garageLoader from "./garageLoader";

function removeCar(id: number) {
  return async function curriedRemoveCar() {
    fetch(`http://127.0.0.1:3000/garage/${id}`, {
    method: 'DELETE'
    })
    .then(response => response.json())
    .then(garageLoader);
  }
}

export default removeCar;