/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/garage/addInputs.ts":
/*!********************************************!*\
  !*** ./src/components/garage/addInputs.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.carsAddBtn = exports.carsAddColor = exports.carsAddInput = void 0;
const createCar_1 = __webpack_require__(/*! ./createCar */ "./src/components/garage/createCar.ts");
const carsAddInput = document.createElement('input');
exports.carsAddInput = carsAddInput;
carsAddInput.classList.add('garage___add_name');
carsAddInput.type = 'text';
const carsAddColor = document.createElement('input');
exports.carsAddColor = carsAddColor;
carsAddColor.classList.add('garage__add_color');
carsAddColor.type = 'color';
const carsAddBtn = document.createElement('button');
exports.carsAddBtn = carsAddBtn;
carsAddBtn.innerText = 'Create';
carsAddBtn.addEventListener('click', createCar_1.default);


/***/ }),

/***/ "./src/components/garage/changeCar.ts":
/*!********************************************!*\
  !*** ./src/components/garage/changeCar.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const changeInputs_1 = __webpack_require__(/*! ./changeInputs */ "./src/components/garage/changeInputs.ts");
const garageLoader_1 = __webpack_require__(/*! ./garageLoader */ "./src/components/garage/garageLoader.ts");
const makeChangable_1 = __webpack_require__(/*! ./makeChangable */ "./src/components/garage/makeChangable.ts");
async function changeCar() {
    if (typeof makeChangable_1.lastChangableId !== 'number') {
        return;
    }
    else {
        const car = {
            name: changeInputs_1.carsChangeInput.value,
            color: changeInputs_1.carsChangeColor.value
        };
        fetch(`http://127.0.0.1:3000/garage/${makeChangable_1.lastChangableId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(car)
        })
            .then(response => response.json())
            .then(garageLoader_1.default);
    }
}
exports["default"] = changeCar;


/***/ }),

/***/ "./src/components/garage/changeInputs.ts":
/*!***********************************************!*\
  !*** ./src/components/garage/changeInputs.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.carsChangeBtn = exports.carsChangeColor = exports.carsChangeInput = void 0;
const changeCar_1 = __webpack_require__(/*! ./changeCar */ "./src/components/garage/changeCar.ts");
const carsChangeInput = document.createElement('input');
exports.carsChangeInput = carsChangeInput;
carsChangeInput.type = 'text';
const carsChangeColor = document.createElement('input');
exports.carsChangeColor = carsChangeColor;
carsChangeColor.type = 'color';
const carsChangeBtn = document.createElement('button');
exports.carsChangeBtn = carsChangeBtn;
carsChangeBtn.innerText = 'Change';
carsChangeBtn.addEventListener('click', changeCar_1.default);


/***/ }),

/***/ "./src/components/garage/createCar.ts":
/*!********************************************!*\
  !*** ./src/components/garage/createCar.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const addInputs_1 = __webpack_require__(/*! ./addInputs */ "./src/components/garage/addInputs.ts");
const garageLoader_1 = __webpack_require__(/*! ./garageLoader */ "./src/components/garage/garageLoader.ts");
async function createCar() {
    const car = {
        name: addInputs_1.carsAddInput.value,
        color: addInputs_1.carsAddColor.value
    };
    fetch('http://127.0.0.1:3000/garage', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(car)
    })
        .then(response => response.json())
        .then(garageLoader_1.default);
}
exports["default"] = createCar;


/***/ }),

/***/ "./src/components/garage/garageLoader.ts":
/*!***********************************************!*\
  !*** ./src/components/garage/garageLoader.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const addInputs_1 = __webpack_require__(/*! ./addInputs */ "./src/components/garage/addInputs.ts");
const main_1 = __webpack_require__(/*! ../global/main */ "./src/components/global/main.ts");
const getCars_1 = __webpack_require__(/*! ./getCars */ "./src/components/garage/getCars.ts");
const changeInputs_1 = __webpack_require__(/*! ./changeInputs */ "./src/components/garage/changeInputs.ts");
function garageLoader() {
    const garagePage = document.createElement('div');
    const carsInteraction = document.createElement('div');
    carsInteraction.classList.add('garage__interaction');
    const carsAdd = document.createElement('div');
    carsAdd.classList.add('garage__add');
    carsInteraction.append(carsAdd);
    carsAdd.append(addInputs_1.carsAddInput, addInputs_1.carsAddColor, addInputs_1.carsAddBtn);
    const carsChange = document.createElement('div');
    carsChange.classList.add('garage__change');
    carsInteraction.append(carsChange);
    carsChange.append(changeInputs_1.carsChangeInput, changeInputs_1.carsChangeColor, changeInputs_1.carsChangeBtn);
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
    (0, getCars_1.default)(cars);
    garagePage.append(carsInteraction, heading, pages, carsInfo, cars);
    main_1.default.replaceChildren(garagePage);
}
exports["default"] = garageLoader;


/***/ }),

/***/ "./src/components/garage/getCars.ts":
/*!******************************************!*\
  !*** ./src/components/garage/getCars.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const viewCar_1 = __webpack_require__(/*! ./viewCar */ "./src/components/garage/viewCar.ts");
async function getCars(cars) {
    fetch('http://127.0.0.1:3000/garage')
        .then(response => response.json())
        .then(carsList => carsList.forEach((car) => {
        cars.append((0, viewCar_1.default)(car));
    }));
}
exports["default"] = getCars;


/***/ }),

/***/ "./src/components/garage/makeChangable.ts":
/*!************************************************!*\
  !*** ./src/components/garage/makeChangable.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.lastChangableId = exports.makeChangable = void 0;
const changeInputs_1 = __webpack_require__(/*! ./changeInputs */ "./src/components/garage/changeInputs.ts");
let lastChangableId = null;
exports.lastChangableId = lastChangableId;
function makeChangable(carInfo) {
    return function curriedMakeChangable() {
        changeInputs_1.carsChangeInput.value = carInfo.name;
        changeInputs_1.carsChangeColor.value = carInfo.color;
        exports.lastChangableId = lastChangableId = carInfo.id;
    };
}
exports.makeChangable = makeChangable;


/***/ }),

/***/ "./src/components/garage/removeCar.ts":
/*!********************************************!*\
  !*** ./src/components/garage/removeCar.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const garageLoader_1 = __webpack_require__(/*! ./garageLoader */ "./src/components/garage/garageLoader.ts");
function removeCar(id) {
    return async function curriedRemoveCar() {
        fetch(`http://127.0.0.1:3000/garage/${id}`, {
            method: 'DELETE'
        })
            .then(response => response.json())
            .then(garageLoader_1.default);
    };
}
exports["default"] = removeCar;


/***/ }),

/***/ "./src/components/garage/viewCar.ts":
/*!******************************************!*\
  !*** ./src/components/garage/viewCar.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const makeChangable_1 = __webpack_require__(/*! ./makeChangable */ "./src/components/garage/makeChangable.ts");
const removeCar_1 = __webpack_require__(/*! ./removeCar */ "./src/components/garage/removeCar.ts");
function viewCar(carInfo) {
    const car = document.createElement('div');
    car.classList.add('car');
    const select = document.createElement('button');
    select.classList.add('car__select');
    select.innerText = 'Select';
    select.addEventListener('click', (0, makeChangable_1.makeChangable)(carInfo));
    const remove = document.createElement('button');
    remove.classList.add('car__remove');
    remove.innerText = 'Remove';
    remove.addEventListener('click', (0, removeCar_1.default)(carInfo.id));
    const name = document.createElement('h4');
    name.classList.add('car__name');
    name.innerText = carInfo.name;
    car.append(select, remove, name);
    return car;
}
exports["default"] = viewCar;


/***/ }),

/***/ "./src/components/global/main.ts":
/*!***************************************!*\
  !*** ./src/components/global/main.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const main = document.createElement('main');
exports["default"] = main;


/***/ }),

/***/ "./src/components/loader.ts":
/*!**********************************!*\
  !*** ./src/components/loader.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const garageLoader_1 = __webpack_require__(/*! ./garage/garageLoader */ "./src/components/garage/garageLoader.ts");
const main_1 = __webpack_require__(/*! ./global/main */ "./src/components/global/main.ts");
const winnersLoader_1 = __webpack_require__(/*! ./winners/winnersLoader */ "./src/components/winners/winnersLoader.ts");
function loader() {
    const body = document.body;
    const wrapper = document.createElement('div');
    wrapper.classList.add('wrapper');
    const header = document.createElement('header');
    header.classList.add('header');
    const garageBtn = document.createElement('button');
    garageBtn.classList.add('button', 'winner__button');
    garageBtn.innerText = 'Garage';
    garageBtn.addEventListener('click', garageLoader_1.default);
    const winnerBtn = document.createElement('button');
    winnerBtn.classList.add('button', 'winner__button');
    winnerBtn.innerText = 'Winner';
    winnerBtn.addEventListener('click', winnersLoader_1.default);
    header.append(garageBtn, winnerBtn);
    (0, garageLoader_1.default)();
    const footer = document.createElement('footer');
    body.append(header, main_1.default, footer);
}
exports["default"] = loader;


/***/ }),

/***/ "./src/components/winners/winnersLoader.ts":
/*!*************************************************!*\
  !*** ./src/components/winners/winnersLoader.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const main_1 = __webpack_require__(/*! ../global/main */ "./src/components/global/main.ts");
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
    main_1.default.replaceChildren(winnersPage);
}
exports["default"] = winnersLoader;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
const loader_1 = __webpack_require__(/*! ./components/loader */ "./src/components/loader.ts");
(0, loader_1.default)();

})();

/******/ })()
;
//# sourceMappingURL=main.fa486d564b979ae709bf.js.map