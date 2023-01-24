/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/index.scss":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/index.scss ***!
  \*****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".car {\n  position: relative;\n}\n\n.car__icon {\n  height: 50px;\n  position: relative;\n}", "",{"version":3,"sources":["webpack://./src/styles/garage.scss","webpack://./src/index.scss"],"names":[],"mappings":"AAAA;EACE,kBAAA;ACCF;;ADEA;EACE,YAAA;EACA,kBAAA;ACCF","sourcesContent":[".car {\n  position: relative;\n}\n\n.car__icon {\n  height: 50px;\n  position: relative;\n}",".car {\n  position: relative;\n}\n\n.car__icon {\n  height: 50px;\n  position: relative;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./index.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/index.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

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
const generateCars_1 = __webpack_require__(/*! ./generateCars */ "./src/components/garage/generateCars.ts");
const startRace_1 = __webpack_require__(/*! ./startRace */ "./src/components/garage/startRace.ts");
async function garageLoader() {
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
    const cars = document.createElement('div');
    cars.classList.add('main__cars');
    const currentCars = await (0, getCars_1.default)(cars);
    const heading = document.createElement('h2');
    heading.classList.add('main__heading');
    heading.innerText = 'Garage';
    const generate = document.createElement('button');
    generate.innerText = 'Generate cars';
    generate.addEventListener('click', generateCars_1.default);
    const startAll = document.createElement('button');
    startAll.innerText = 'Start race';
    startAll.addEventListener('click', (0, startRace_1.default)(currentCars));
    const pages = document.createElement('h3');
    pages.classList.add('main__pagesInfo');
    pages.innerText = 'Page #1';
    const carsInfo = document.createElement('h3');
    carsInfo.classList.add('main__carsInfo');
    carsInfo.innerText = 'Cars: 0';
    garagePage.append(carsInteraction, heading, generate, startAll, pages, carsInfo, cars);
    main_1.default.replaceChildren(garagePage);
}
exports["default"] = garageLoader;


/***/ }),

/***/ "./src/components/garage/generateCars.ts":
/*!***********************************************!*\
  !*** ./src/components/garage/generateCars.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const garageLoader_1 = __webpack_require__(/*! ./garageLoader */ "./src/components/garage/garageLoader.ts");
function getRandom(items) {
    return items[Math.floor(Math.random() * items.length)];
}
function generateCars() {
    const promises = [];
    for (let i = 0; i <= 5; i++) {
        const car = {
            name: getRandom(['Tesla', 'BMW', 'Ferrari', 'Ford', 'Porsche', 'Honda', 'Lamborghini', 'Opel', 'Toyota', 'Audi'])
                + ' ' + getRandom(['Corvette', 'Plaid', 'Corsa', 'Civic', 'Lagonda', '2CV', 'Cruze', 'Legend', 'Urus', 'Quattro']),
            color: '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')
        };
        const promise = fetch('http://127.0.0.1:3000/garage', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(car)
        });
        promises.push(promise);
    }
    Promise.all(promises).then(garageLoader_1.default);
}
exports["default"] = generateCars;


/***/ }),

/***/ "./src/components/garage/getCars.ts":
/*!******************************************!*\
  !*** ./src/components/garage/getCars.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const viewCar_1 = __webpack_require__(/*! ./viewCar */ "./src/components/garage/viewCar.ts");
async function getCars(cars) {
    const response = await fetch('http://127.0.0.1:3000/garage');
    const carsList = await response.json();
    carsList.forEach((car) => {
        const carBlock = (0, viewCar_1.default)(car);
        cars.append(carBlock);
        car.element = carBlock;
    });
    return carsList;
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

/***/ "./src/components/garage/moveCar.ts":
/*!******************************************!*\
  !*** ./src/components/garage/moveCar.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
async function moveCar(carId, icon, velocity, stop, start) {
    const startTime = Date.now();
    let broken = false;
    fetch('http://127.0.0.1:3000/engine?' + new URLSearchParams({
        id: String(carId),
        status: 'drive'
    }), {
        method: 'PATCH'
    }).then(response => {
        if (response.status == 500) {
            broken = true;
        }
    });
    const timer = setInterval(function () {
        const timePassed = Date.now() - startTime;
        if (timePassed * velocity / 500000 >= 1 || broken) {
            clearInterval(timer);
            stop.disabled = false;
            return;
        }
        draw(timePassed);
    }, 20);
    function draw(timePassed) {
        icon.style.left = `calc(${timePassed} * ${velocity} / 500000 * (100% - 50px))`;
    }
}
exports["default"] = moveCar;


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

/***/ "./src/components/garage/startCar.ts":
/*!*******************************************!*\
  !*** ./src/components/garage/startCar.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const moveCar_1 = __webpack_require__(/*! ./moveCar */ "./src/components/garage/moveCar.ts");
function startCar(carId, icon, stop, start) {
    return async function curriedStartCar() {
        start.disabled = true;
        fetch('http://127.0.0.1:3000/engine?' + new URLSearchParams({
            id: String(carId),
            status: 'started'
        }), {
            method: 'PATCH'
        })
            .then(response => response.json())
            .then(data => { (0, moveCar_1.default)(carId, icon, data.velocity, stop, start); });
    };
}
exports["default"] = startCar;


/***/ }),

/***/ "./src/components/garage/startRace.ts":
/*!********************************************!*\
  !*** ./src/components/garage/startRace.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const startCar_1 = __webpack_require__(/*! ./startCar */ "./src/components/garage/startCar.ts");
function startRace(cars) {
    return async function curriedStartRace() {
        cars.forEach((car) => {
            var _a, _b, _c;
            const icon = (_a = car.element) === null || _a === void 0 ? void 0 : _a.querySelector('.car__icon');
            const stop = (_b = car.element) === null || _b === void 0 ? void 0 : _b.querySelector('.car__stop');
            const start = (_c = car.element) === null || _c === void 0 ? void 0 : _c.querySelector('.car__start');
            console.log('false');
            if (icon && stop && start) {
                console.log(true);
                (0, startCar_1.default)(car.id, icon, stop, start)();
            }
        });
    };
}
exports["default"] = startRace;


/***/ }),

/***/ "./src/components/garage/stopCar.ts":
/*!******************************************!*\
  !*** ./src/components/garage/stopCar.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
function stopCar(carId, icon, stop, start) {
    return async function curriedStopCar() {
        stop.disabled = true;
        fetch('http://127.0.0.1:3000/engine?' + new URLSearchParams({
            id: String(carId),
            status: 'stopped'
        }), {
            method: 'PATCH'
        })
            .then(response => {
            if (response.ok) {
                icon.style.left = 0 + '%';
                start.disabled = false;
            }
        });
    };
}
exports["default"] = stopCar;


/***/ }),

/***/ "./src/components/garage/viewCar.ts":
/*!******************************************!*\
  !*** ./src/components/garage/viewCar.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const makeChangable_1 = __webpack_require__(/*! ./makeChangable */ "./src/components/garage/makeChangable.ts");
const removeCar_1 = __webpack_require__(/*! ./removeCar */ "./src/components/garage/removeCar.ts");
const startCar_1 = __webpack_require__(/*! ./startCar */ "./src/components/garage/startCar.ts");
const stopCar_1 = __webpack_require__(/*! ./stopCar */ "./src/components/garage/stopCar.ts");
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
    const start = document.createElement('button');
    start.classList.add('car__start');
    start.innerText = 'Start';
    const stop = document.createElement('button');
    stop.classList.add('car__stop');
    stop.innerText = 'Stop';
    stop.disabled = true;
    const name = document.createElement('h4');
    name.classList.add('car__name');
    name.innerText = carInfo.name;
    const icon = document.createElement('object');
    icon.classList.add('car__icon');
    icon.type = "image/svg+xml";
    icon.data = 'car.svg';
    icon.addEventListener('load', () => {
        var _a;
        const iconFill = (_a = icon.contentDocument) === null || _a === void 0 ? void 0 : _a.getElementById('SVG_fill');
        if (iconFill) {
            iconFill.innerHTML = `.st0{fill:${carInfo.color};}`;
        }
    });
    start.addEventListener('click', (0, startCar_1.default)(carInfo.id, icon, stop, start));
    stop.addEventListener('click', (0, stopCar_1.default)(carInfo.id, icon, stop, start));
    car.append(select, remove, start, stop, name, icon);
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


/***/ }),

/***/ "./src/icons/car.svg":
/*!***************************!*\
  !*** ./src/icons/car.svg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "car.svg";

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
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
__webpack_require__(/*! ./icons/car.svg */ "./src/icons/car.svg");
const loader_1 = __webpack_require__(/*! ./components/loader */ "./src/components/loader.ts");
__webpack_require__(/*! ./index.scss */ "./src/index.scss");
(0, loader_1.default)();

})();

/******/ })()
;
//# sourceMappingURL=main.12d4e9d90b8a7a110e9e.js.map