function loader() {
  const body = document.body;

  const wrapper = document.createElement('div');
  wrapper.classList.add('wrapper');

  const header = document.createElement('header');
  header.classList.add('header');
  const garageBtn = document.createElement('button');
  garageBtn.classList.add('button', 'winner__button');
  garageBtn.innerText = 'Garage';
  const winnerBtn = document.createElement('button');
  winnerBtn.classList.add('button', 'winner__button');
  winnerBtn.innerText = 'Winner';
  header.append(garageBtn, winnerBtn);

  const main = document.createElement('main');
  const heading = document.createElement('h2');
  heading.classList.add('main__heading');
  heading.innerText = 'Garage';
  const cars = document.createElement('h3');
  cars.classList.add('main__carsInfo');
  cars.innerText = 'Cars: 0';
  main.append(heading, cars);

  const footer = document.createElement('footer');

  body.append(header, main, footer);
}

export default loader;