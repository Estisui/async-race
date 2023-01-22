import main from "../global/main";
import viewCar from "./viewCar";
import carInterface from "../global/carInterface";
import getCars from "./getCars";

function garageLoader() {
  const garagePage = document.createElement('div');

  const carsInteraction = document.createElement('div');
  carsInteraction.classList.add('garage__interaction');

  const carsAdd = document.createElement('div');
  carsAdd.classList.add('garage__add');
  carsInteraction.append(carsAdd);

  const carsAddInput = document.createElement('input');
  carsAddInput.type = 'text';
  const carsAddColor = document.createElement('input');
  carsAddColor.type = 'text';
  const carsAddBtn = document.createElement('button');
  carsAddBtn.innerText = 'Create';
  carsAdd.append(carsAddInput, carsAddColor, carsAddBtn);

  const carsChange = document.createElement('div');
  carsChange.classList.add('garage__change');
  carsInteraction.append(carsChange);

  const carsChangeInput = document.createElement('input');
  carsChangeInput.type = 'text';
  const carsChangeColor = document.createElement('input');
  carsChangeColor.type = 'text';
  const carsChangeBtn = document.createElement('button');
  carsChangeBtn.innerText = 'Change';
  carsChange.append(carsChangeInput, carsChangeColor, carsChangeBtn);

  const heading = document.createElement('h2');
  heading.classList.add('main__heading');
  heading.innerText = 'Garage';
  const pages = document.createElement('h3');
  pages.classList.add('main__pagesInfo');
  pages.innerText = 'Page #1';
  const carsInfo = document.createElement('h3');
  carsInfo.classList.add('main__carsInfo');
  carsInfo.innerText = 'Cars: 0';

  const cars = document.createElement('div');
  cars.classList.add('main__cars');

  getCars(cars);

  garagePage.append(carsInteraction, heading, pages, carsInfo, cars);
  main.replaceChildren(garagePage);
}

export default garageLoader;