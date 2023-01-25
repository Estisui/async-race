import garageLoader from "./garageLoader";

function getRandom (items: Array<string>) {
  return items[Math.floor(Math.random() * items.length)];
}

function generateCars() {
  const promises = [];
  for (let i = 0; i <= 5; i++) {
    const car = {
      name: getRandom(['Tesla', 'BMW', 'Ferrari', 'Ford', 'Porsche', 'Honda', 'Lamborghini', 'Opel', 'Toyota', 'Audi'])
      + ' ' + getRandom(['Corvette', 'Plaid', 'Corsa', 'Civic', 'Lagonda', '2CV', 'Cruze', 'Legend', 'Urus', 'Quattro']),
      color: '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0')
    };
    const promise = fetch('http://127.0.0.1:3000/garage', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(car)
    })
    promises.push(promise);
  }
  Promise.all(promises).then(garageLoader);
}

export default generateCars;