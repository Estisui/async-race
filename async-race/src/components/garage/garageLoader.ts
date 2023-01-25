import { carsAddBtn, carsAddColor, carsAddInput } from "./addInputs";
import main from "../global/main";
import getCars from "./getCars";
import { carsChangeBtn, carsChangeColor, carsChangeInput } from "./changeInputs";
import generateCars from "./generateCars";
import startRace from "./startRace";
import stopRace from "./stopRace";

async function garageLoader() {
  const garagePage = document.createElement('div');

  const carsInteraction = document.createElement('div');
  carsInteraction.classList.add('garage__interaction');

  const carsAdd = document.createElement('div');
  carsAdd.classList.add('garage__add');
  carsInteraction.append(carsAdd);
  carsAdd.append(carsAddInput, carsAddColor, carsAddBtn);

  const carsChange = document.createElement('div');
  carsChange.classList.add('garage__change');
  carsInteraction.append(carsChange);
  carsChange.append(carsChangeInput, carsChangeColor, carsChangeBtn);

  const cars = document.createElement('div');
  cars.classList.add('main__cars');

  const currentCars = await getCars(cars);

  const heading = document.createElement('h2');
  heading.classList.add('main__heading');
  heading.innerText = 'Garage';
  const generate = document.createElement('button');
  generate.innerText = 'Generate cars';
  generate.addEventListener('click', generateCars);
  const startAll = document.createElement('button');
  startAll.innerText = 'Start race';
  const stopAll = document.createElement('button');
  stopAll.innerText = 'Stop race';
  stopAll.addEventListener('click', stopRace(currentCars, startAll, stopAll));
  startAll.addEventListener('click', startRace(currentCars, startAll, stopAll));
  stopAll.disabled = true;
  const wonBy = document.createElement('p');
  wonBy.classList.add('main__wonBy');
  wonBy.innerText = '';
  const pages = document.createElement('h3');
  pages.classList.add('main__pagesInfo');
  pages.innerText = 'Page #1';
  const carsInfo = document.createElement('h3');
  carsInfo.classList.add('main__carsInfo');
  carsInfo.innerText = 'Cars: 0';

  garagePage.append(carsInteraction, heading, generate, startAll, stopAll, wonBy, pages, carsInfo, cars);
  main.replaceChildren(garagePage);
}

export default garageLoader;