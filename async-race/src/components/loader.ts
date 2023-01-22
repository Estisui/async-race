import garageLoader from "./garage/garageLoader";
import main from "./global/main";
import winnersLoader from "./winners/winnersLoader";

function loader() {
  const body = document.body;

  const wrapper = document.createElement('div');
  wrapper.classList.add('wrapper');

  const header = document.createElement('header');
  header.classList.add('header');

  const garageBtn = document.createElement('button');
  garageBtn.classList.add('button', 'winner__button');
  garageBtn.innerText = 'Garage';
  garageBtn.addEventListener('click', garageLoader);

  const winnerBtn = document.createElement('button');
  winnerBtn.classList.add('button', 'winner__button');
  winnerBtn.innerText = 'Winner';
  winnerBtn.addEventListener('click', winnersLoader);

  header.append(garageBtn, winnerBtn);

  garageLoader();

  const footer = document.createElement('footer');

  body.append(header, main, footer);
}

export default loader;