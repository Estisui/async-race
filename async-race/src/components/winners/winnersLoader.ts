import main from "../global/main";

function winnersLoader() {
  const winnersPage = document.createElement('div');

  const heading = document.createElement('h2');
  heading.classList.add('main__heading');
  heading.innerText = 'Garage';
  const pages = document.createElement('h3');
  pages.classList.add('main__pagesInfo');
  pages.innerText = 'Page #1';
  const winners = document.createElement('h3');
  winners.classList.add('main__winnersInfo');
  winners.innerText = 'Winners: 0';
  winnersPage.append(heading, pages, winners);

  main.replaceChildren(winnersPage);
}

export default winnersLoader;