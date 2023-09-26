/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/style.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\n    margin: 0;\n    padding: 0;\n}\n\n:root {\n    ---left-spacing: 6rem;\n    ---green: #70a827;\n\n    --fancy-font: 'Kaushan Script', cursive;\n}\n\nbody {\n\n    display: flex;\n    justify-content: flex-end;\n    align-items: center;\n    /* background-color: #d8d8d8; */\n    background-color: #a1a1a1;\n    background: linear-gradient(to right , #a1a1a1, #c1c1c1);\n    /* background: linear-gradient(to right, #ff0000, #0000ff); */\n\n    font-family: 'Poppins', sans-serif;\n}\n\n/* .img {\n    height: 250px;\n    width: 500px;\n} */\n\n.img {\n    height: 90vh;\n    width: 95vw; \n    position: fixed;\n    right: 0;\n    z-index: -1;\n    filter: brightness(.75);\n    bottom: 0;\n    right: 0;\n}\n\n#content {\n    height: 100vh;\n    width: 100vw;\n}\n\n.nav-wrapper, .link-wrapper, .middle-content, .content-wrapper,\n.footer-wrapper, .footer-content, .page-wrapper{\n    display: flex;\n    align-items: center;\n}\n\n.nav-wrapper {\n    width: 100%;\n    height: 6rem;\n    background-color: rgba(0, 0, 0, 0.817);\n    justify-content: flex-start;\n    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n}\n\n.link-wrapper {\n    height: 4rem;\n    width: 30rem;\n    margin-left: var(---left-spacing);\n    /* border: 1px solid #fff; */\n    justify-content: space-between;\n}\n\n.link-style {\n    color: #fff;\n    font-size: .9em;\n    font-weight: 200;\n    letter-spacing: 2px;\n    cursor: pointer;\n    transition: .15s ease-in;\n}\n\n.link-style:hover {\n    color: rgb(209, 203, 203);\n}\n\n\n/*  */\n/* Main Contsiner / Wrapper */\n/*  */\n\n.middle-content {\n    width: 100vw;\n    height: 45rem;\n    /* border: 1px solid red; */\n}\n\n.content-wrapper {\n    width: 37rem;\n    height: 30rem;\n    position: relative;\n\n    flex-direction: column;\n    justify-content: left;\n    /* border: 1px solid red; */\n    margin-left: var(---left-spacing);\n}\n\n.res-title {\n    font-size: 5.5rem;\n    font-weight: 600;\n    color: #000000;\n    margin-bottom: 2rem;\n    /* font-family: 'Times New Roman', Times, serif; */\n    font-family: Arial, Helvetica, sans-serif;\n    text-shadow: 2px 10px 4px 5px rgba(0, 0, 0, 0.5);\n}\n\n.res-description {\n    font-size: 1em;\n    font-weight: 400;\n}\n\n.btn-style {\n    border: none;\n    background-color: #000;\n    color: #fff;\n    font-size: .9rem;\n    width: 16rem;\n    height: 4.5rem;\n    cursor: pointer;\n    position: absolute;\n    left: 0;\n    bottom: 0;\n    letter-spacing: 6px;\n    font-weight: 300;\n    transition: .2s ease-in;\n}\n\n.btn-style:hover {\n    background-color: rgba(0, 0, 0, 0);\n    color: #314d0e;\n    border: 1px solid #314d0e;\n}\n\n/*  */\n/* Footer Msg */\n/*  */\n\n.footer-wrapper {\n    /* background-color: rgba(0, 0, 0, 0.512); */\n    height: 8.5rem;\n    width: 100%;\n    justify-content: center;\n}\n\n.footer-content {\n    height: 4rem;\n    width: 20rem;\n    justify-content: center;\n    /* border: 1px solid darkgoldenrod; */\n}\n\n\n/*  */\n/* Card Style */\n/*  */\n.menu-wrapper {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-wrap: wrap;\n}\n\n.food-card {\n    width: 25rem;\n    height: 15rem;\n    margin: 1rem;\n    padding: .75rem;\n    border-radius: 20px;\n    cursor: pointer;\n    position: relative;\n    color: #fff;\n    transition: .5s ease-in-out;\n    /* background-color: rgba(0, 0, 0, 0.108); */\n    outline: 1px solid rgb(255, 255, 255);\n}\n\n/* .food-card::before {\n    content: \"\";\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 0%;\n    border-radius: 20px;\n    z-index: -1;\n    transition: .4s ease-in-out;\n    background-color: #00000087;\n}\n\n.food-card:hover::before {\n    height: 100%;\n} */\n\n.food-card:hover {\n    background-color: rgba(0, 0, 0, .7);\n    outline: none;\n}\n\n.food-name, .food-description, .food-price {\n    z-index: 1000;\n}\n\n.food-name{\n    font-size: 2.5rem;\n    /* font-family: var(--fancy-font); */\n}\n\n.food-description {\n    font-size: 1rem;\n    font-weight: 300;\n}\n\n.food-price {\n    margin-top: 2rem;\n    font-size: 1.2rem;\n    font-weight: 600;\n}\n\n.page-wrapper {\n    justify-content: center;\n}\n\n.msg-content {\n    width: 30rem;\n    height: 10rem;\n    color: #fff;\n\n    justify-content: center;\n    align-items: center;\n    display: flex;\n    border-radius: 20px;\n\n    background-color: rgba(0, 0, 0, 0.8);\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://resturant_project/./src/styles/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://resturant_project/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://resturant_project/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://resturant_project/./src/styles/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://resturant_project/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://resturant_project/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://resturant_project/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://resturant_project/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://resturant_project/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://resturant_project/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   aboutPage: () => (/* binding */ aboutPage)\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ \"./src/index.js\");\n\n\n\nfunction aboutPage() {\n\n    const pageWrapper = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)(\"div\", null, [\"page-wrapper\", \"middle-content\", null]);\n    const msgContent = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)(\"div\", null, [\"msg-content\"], null)\n    const welcomeMsg = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)(\"p\", null, null, 'Thanks for visting');\n    const thankYouMsg = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)(\"p\", null, null, \" - see you next time 👋\")\n\n    msgContent.appendChild(welcomeMsg);\n    msgContent.appendChild(thankYouMsg);\n    pageWrapper.appendChild(msgContent)\n    _index__WEBPACK_IMPORTED_MODULE_0__.content.appendChild(pageWrapper);\n\n}\n\n//# sourceURL=webpack://resturant_project/./src/about.js?");

/***/ }),

/***/ "./src/footer.js":
/*!***********************!*\
  !*** ./src/footer.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   footerPage: () => (/* binding */ footerPage)\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ \"./src/index.js\");\n\n\n\nfunction footerPage() {\n\n    let footerWrapper = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)(\"div\", null, [\"footer-wrapper\"], null);\n    let footerContent = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)(\"div\", null, [\"footer-content\"], null);\n    let footerMsg = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)(\"p\", null, [\"footer-msg\"], \"- Resturant by Guill52 -\");\n    \n    footerContent.appendChild(footerMsg);\n    footerWrapper.appendChild(footerContent);\n    _index__WEBPACK_IMPORTED_MODULE_0__.content.appendChild(footerWrapper);\n}\n\n//# sourceURL=webpack://resturant_project/./src/footer.js?");

/***/ }),

/***/ "./src/home-bkg.js":
/*!*************************!*\
  !*** ./src/home-bkg.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   homeBkg: () => (/* binding */ homeBkg)\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ \"./src/index.js\");\n/* harmony import */ var _asset_food_bkg_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./asset/food-bkg.jpg */ \"./src/asset/food-bkg.jpg\");\n\n\n// import { createHtmlElement } from \"./index\";\n// import logo from \"./asset/lenoides-logo.png\"\n\nfunction homeBkg() {\n\n    let img = document.createElement('img');\n    img.src= _asset_food_bkg_jpg__WEBPACK_IMPORTED_MODULE_1__;\n    img.classList.add(\"img\")\n\n    _index__WEBPACK_IMPORTED_MODULE_0__.content.appendChild(img)\n}\n\n//# sourceURL=webpack://resturant_project/./src/home-bkg.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   homePage: () => (/* binding */ homePage)\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ \"./src/index.js\");\n\n\n\nfunction homePage() {\n    let homeWrapper = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)(\"div\", null, [\"home-wrapper\", \"middle-content\"], null);\n    let contentWrapper = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)(\"div\", null, [\"content-wrapper\"], null);\n    const resturantTitle = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)(\"p\", null, [\"res-title\"], \"Always fresh, never frozen.\")\n    const resturantDescription = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)(\"p\", null, [\"res-description\"], \"Discover exquisite flavors at our restaurant and indulge in a culinary journey like no other\")\n    const menuBtn = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)(\"button\", \"menu-btn\", [\"menu-btn\", \"btn-style\"], \"menu\");\n\n    contentWrapper.appendChild(resturantTitle);\n    contentWrapper.appendChild(resturantDescription);\n    contentWrapper.appendChild(menuBtn);\n    homeWrapper.appendChild(contentWrapper);\n    _index__WEBPACK_IMPORTED_MODULE_0__.content.appendChild(homeWrapper)\n}\n\n//# sourceURL=webpack://resturant_project/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   content: () => (/* binding */ content),\n/* harmony export */   createHtmlElement: () => (/* binding */ createHtmlElement)\n/* harmony export */ });\n/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navbar */ \"./src/navbar.js\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about */ \"./src/about.js\");\n/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./footer */ \"./src/footer.js\");\n/* harmony import */ var _home_bkg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home-bkg */ \"./src/home-bkg.js\");\n/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles/style.css */ \"./src/styles/style.css\");\n\n\n\n\n\n\n\n\n// ---------------------------------------------------------------------------\n\nconst content = document.getElementById(\"content\");\n\nfunction createHtmlElement(type, id, arrayClasses, content) {\n    const element = document.createElement(type);\n    if (id) element.id = id;\n    if (arrayClasses)\n    arrayClasses.forEach((myClass) => element.classList.add(myClass));\n\n    if (content) element.innerText = content;\n\n    return element;\n}\n\n// Elements to be exported    ^\n// ---------------------------|-----------------------------------------------\nfunction home(){\n    content.innerHTML = \"\";\n    (0,_home_bkg__WEBPACK_IMPORTED_MODULE_5__.homeBkg)();\n    (0,_navbar__WEBPACK_IMPORTED_MODULE_0__.navbarPage)();\n    (0,_home__WEBPACK_IMPORTED_MODULE_1__.homePage)();\n    (0,_footer__WEBPACK_IMPORTED_MODULE_4__.footerPage)();\n}\nfunction menu(){\n    content.innerHTML = \"\";\n    (0,_home_bkg__WEBPACK_IMPORTED_MODULE_5__.homeBkg)();\n    (0,_navbar__WEBPACK_IMPORTED_MODULE_0__.navbarPage)();\n    (0,_menu__WEBPACK_IMPORTED_MODULE_2__.menuPage)();\n    (0,_footer__WEBPACK_IMPORTED_MODULE_4__.footerPage)();\n}\nfunction about() {\n    content.innerHTML = \"\";\n    (0,_home_bkg__WEBPACK_IMPORTED_MODULE_5__.homeBkg)();\n    (0,_navbar__WEBPACK_IMPORTED_MODULE_0__.navbarPage)();\n    (0,_about__WEBPACK_IMPORTED_MODULE_3__.aboutPage)();\n    (0,_footer__WEBPACK_IMPORTED_MODULE_4__.footerPage)();\n}\n\nhome();\n\ndocument.addEventListener(\"click\", (e) => {\n\n    const target = e.target.innerText;\n    const elementId = e.target;\n\n    if (target === \"Home\" && elementId.id == \"home\") home();\n    if ((target === \"Menu\" && elementId.id == \"menu\") || (elementId.id == 'menu-btn')) menu();\n    if (target === \"About\" && elementId.id == \"about\") about();\n});\n\n\n\n\n//# sourceURL=webpack://resturant_project/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   menuPage: () => (/* binding */ menuPage)\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ \"./src/index.js\");\n\n\n\nfunction menuPage() {\n\n    const menuItems = {\n        food: [\n            {\n                name: \"Fillet Millone\",\n                description: \"Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo modi itaque placeat vero commodi recusandae maiores quia magni impedit officiis distinctio.\",\n                price: 21\n            },\n            {\n                name: \"Salmon Dish\",\n                description: \"Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo modi itaque placeat vero commodi recusandae maiores quia magni impedit officiis distinctio.\",\n                price: 17\n            },\n            {\n                name: \"Chicken Dish\",\n                description: \"Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo modi itaque placeat vero commodi recusandae maiores quia magni impedit officiis distinctio.\",\n                price: 19\n            },\n            {\n                name: \"Tofu Dish\",\n                description: \"Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo modi itaque placeat vero commodi recusandae maiores quia magni impedit officiis distinctio.\",\n                price: 14\n            },\n            {\n                name: \"Ground Beef Dish\",\n                description: \"Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo modi itaque placeat vero commodi recusandae maiores quia magni impedit officiis distinctio.\",\n                price: 23\n            },\n            {\n                name: \"Steak Dish\",\n                description: \"Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo modi itaque placeat vero commodi recusandae maiores quia magni impedit officiis distinctio.\",\n                price: 26\n            }\n        ]\n    }\n\n    const menuWrapper = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)(\"div\", null, [\"menu-wrapper\", \"middle-content\"], null);\n\n    for (let i = 0; i < menuItems.food.length; i++) {\n        \n        const foodItem = menuItems.food[i]\n        const foodCard = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)(\"div\", null, [\"food-card\"], null);\n        const foodName = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)(\"p\", null, [\"food-name\"], foodItem.name);\n        const foodDesciption = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)(\"p\", null, [\"food-description\"], foodItem.description);\n        const foodPrice = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)(\"p\", null, [\"food-price\"], `$${foodItem.price}.00`);\n\n        foodCard.appendChild(foodName);\n        foodCard.appendChild(foodDesciption);\n        foodCard.appendChild(foodPrice);\n        menuWrapper.appendChild(foodCard)\n    }\n    \n    _index__WEBPACK_IMPORTED_MODULE_0__.content.appendChild(menuWrapper)\n}\n\n//# sourceURL=webpack://resturant_project/./src/menu.js?");

/***/ }),

/***/ "./src/navbar.js":
/*!***********************!*\
  !*** ./src/navbar.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   navbarPage: () => (/* binding */ navbarPage)\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ \"./src/index.js\");\n\n\n\n\nfunction navbarPage() {\n\n    const tabs = [\"Home\", \"Menu\", \"About\"];\n    let navWrapper = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)(\"div\", null, [\"nav-wrapper\"], null);\n    let linkWrapper = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)(\"div\", null, ['link-wrapper'], null);\n    \n    tabs.forEach(tab => {\n        let tabItem = (0,_index__WEBPACK_IMPORTED_MODULE_0__.createHtmlElement)('a', tab.toLocaleLowerCase(), [`link-style`, tab], `${tab}`);\n        linkWrapper.appendChild(tabItem)\n    })\n\n    navWrapper.appendChild(linkWrapper)\n    _index__WEBPACK_IMPORTED_MODULE_0__.content.appendChild(navWrapper)\n}\n\n\n//# sourceURL=webpack://resturant_project/./src/navbar.js?");

/***/ }),

/***/ "./src/asset/food-bkg.jpg":
/*!********************************!*\
  !*** ./src/asset/food-bkg.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"food-bkg.jpg\";\n\n//# sourceURL=webpack://resturant_project/./src/asset/food-bkg.jpg?");

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
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;