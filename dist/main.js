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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/loader */ \"./src/modules/loader.js\");\n/* harmony import */ var _modules_footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/footer */ \"./src/modules/footer.js\");\n/* harmony import */ var _modules_lazy_load_images__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/lazy-load-images */ \"./src/modules/lazy-load-images.js\");\n/* harmony import */ var _modules_revealing_sections__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/revealing-sections */ \"./src/modules/revealing-sections.js\");\n/* harmony import */ var _modules_sticky_navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/sticky-navigation */ \"./src/modules/sticky-navigation.js\");\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/slider */ \"./src/modules/slider.js\");\n/* harmony import */ var _modules_activate_nav_links__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/activate-nav-links */ \"./src/modules/activate-nav-links.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nwindow.addEventListener(\"DOMContentLoaded\", () => {\r\n  (0,_modules_loader__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n  (0,_modules_footer__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n  (0,_modules_lazy_load_images__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n  (0,_modules_revealing_sections__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n  (0,_modules_sticky_navigation__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\r\n  (0,_modules_slider__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\r\n  (0,_modules_activate_nav_links__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\r\n});\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/modules/activate-nav-links.js":
/*!*******************************************!*\
  !*** ./src/modules/activate-nav-links.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction activateNavLinks() {\r\n  const nav = document.querySelector(\".header__nav\");\r\n  const handleHover = function (e) {\r\n    if (e.target.classList.contains(\"header__nav-link\")) {\r\n      const link = e.target;\r\n      const siblings = link\r\n        .closest(\".header__nav\")\r\n        .querySelectorAll(\".header__nav-link\");\r\n      const logo = link.closest(\".header\").querySelector(\".header__logo-text\");\r\n      siblings.forEach((sibling) => {\r\n        if (sibling !== link) sibling.style.opacity = this;\r\n      });\r\n      logo.style.opacity = this;\r\n    }\r\n  };\r\n  nav.addEventListener(\"mouseover\", handleHover.bind(0.5));\r\n  nav.addEventListener(\"mouseout\", handleHover.bind(1));\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (activateNavLinks);\n\n//# sourceURL=webpack://restaurant-page/./src/modules/activate-nav-links.js?");

/***/ }),

/***/ "./src/modules/footer.js":
/*!*******************************!*\
  !*** ./src/modules/footer.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction footer() {\r\n  const copyright = document.querySelector(\"#copyright\");\r\n  const year = new Date().getFullYear();\r\n  copyright.innerHTML = `&copy; ${year} by Choyxona. Proudly created by <a href=\"#\" class=\"footer__text-link\">Uktamjon</a> <br> All rights reserved.`;\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (footer);\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/modules/footer.js?");

/***/ }),

/***/ "./src/modules/lazy-load-images.js":
/*!*****************************************!*\
  !*** ./src/modules/lazy-load-images.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction lazyLoadImages() {\r\n  const imgTargets = document.querySelectorAll(\"img[data-src]\");\r\n  const callBackObserverLazy = function (entries, observer) {\r\n    const [entry] = entries;\r\n    if (!entry.isIntersecting) return;\r\n    entry.target.src = entry.target.dataset.src;\r\n    entry.target.addEventListener(\"load\", function () {\r\n      entry.target.classList.remove(\"lazy-img\");\r\n    });\r\n    observer.unobserve(entry.target);\r\n  };\r\n  const optionsLazy = {\r\n    root: null,\r\n    threshold: 0,\r\n    rootMargin: \"200px\",\r\n  };\r\n  const observerLazy = new IntersectionObserver(\r\n    callBackObserverLazy,\r\n    optionsLazy\r\n  );\r\n  imgTargets.forEach((img) => observerLazy.observe(img));\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (lazyLoadImages);\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/modules/lazy-load-images.js?");

/***/ }),

/***/ "./src/modules/loader.js":
/*!*******************************!*\
  !*** ./src/modules/loader.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction loader() {\r\n  const loader = document.querySelector(\".loader\");\r\n  setTimeout(() => {\r\n    loader.style.opacity = 0;\r\n    setTimeout(() => {\r\n      loader.style.display = \"none\";\r\n    }, 500);\r\n  }, 2000);\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loader);\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/modules/loader.js?");

/***/ }),

/***/ "./src/modules/revealing-sections.js":
/*!*******************************************!*\
  !*** ./src/modules/revealing-sections.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction revealingSections() {\r\n  const allSections = document.querySelectorAll(\".main__content\");\r\n  const callBackObserverReveal = function (entries, observer) {\r\n    const [entry] = entries;\r\n    if (!entry.isIntersecting) return;\r\n    entry.target.classList.remove(\"section--hidden\");\r\n    observer.unobserve(entry.target);\r\n  };\r\n  const optionsReveal = {\r\n    root: null,\r\n    threshold: 0.15,\r\n  };\r\n  const observerReveal = new IntersectionObserver(\r\n    callBackObserverReveal,\r\n    optionsReveal\r\n  );\r\n  allSections.forEach((section) => {\r\n    observerReveal.observe(section);\r\n    section.classList.add(\"section--hidden\");\r\n  });\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (revealingSections);\n\n//# sourceURL=webpack://restaurant-page/./src/modules/revealing-sections.js?");

/***/ }),

/***/ "./src/modules/slider.js":
/*!*******************************!*\
  !*** ./src/modules/slider.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction slider() {\r\n  const slider = function () {\r\n    const slides = document.querySelectorAll(\".slide\");\r\n    const btnLeft = document.querySelector(\".slider__btn--left\");\r\n    const btnRight = document.querySelector(\".slider__btn--right\");\r\n    const dotsContainer = document.querySelector(\".dots\");\r\n    let currentSlide = 0;\r\n    const maxSlide = slides.length;\r\n    const goToSlide = function (slide) {\r\n      slides.forEach(\r\n        (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)\r\n      );\r\n    };\r\n    goToSlide(0);\r\n    const activeDot = function (slide) {\r\n      document\r\n        .querySelectorAll(\".dots__dot\")\r\n        .forEach((dot) => dot.classList.remove(\"dots__dot--active\"));\r\n      document\r\n        .querySelector(`.dots__dot[data-slide=\"${slide}\"]`)\r\n        .classList.add(\"dots__dot--active\");\r\n    };\r\n    const createDots = function () {\r\n      slides.forEach((_, i) => {\r\n        dotsContainer.insertAdjacentHTML(\r\n          \"beforeend\",\r\n          `<button class=\"dots__dot\" data-slide=\"${i}\"></button>`\r\n        );\r\n      });\r\n    };\r\n    const nextSlide = function () {\r\n      if (currentSlide === maxSlide - 1) {\r\n        currentSlide = 0;\r\n      } else {\r\n        currentSlide++;\r\n      }\r\n      goToSlide(currentSlide);\r\n      activeDot(currentSlide);\r\n    };\r\n    const prevSlide = function () {\r\n      if (currentSlide === 0) {\r\n        currentSlide = maxSlide - 1;\r\n      } else {\r\n        currentSlide--;\r\n      }\r\n      goToSlide(currentSlide);\r\n      activeDot(currentSlide);\r\n    };\r\n    const init = function () {\r\n      goToSlide(0);\r\n      createDots();\r\n      activeDot(0);\r\n    };\r\n    init();\r\n    btnRight.addEventListener(\"click\", nextSlide);\r\n    btnLeft.addEventListener(\"click\", prevSlide);\r\n    document.addEventListener(\"keydown\", function (e) {\r\n      if (e.key === \"ArrowLeft\") prevSlide();\r\n      e.key === \"ArrowRight\" && nextSlide();\r\n    });\r\n    dotsContainer.addEventListener(\"click\", (e) => {\r\n      if (e.target.classList.contains(\"dots__dot\")) {\r\n        const { slide } = e.target.dataset;\r\n        goToSlide(slide);\r\n        activeDot(slide);\r\n      }\r\n    });\r\n  };\r\n  slider();\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/modules/slider.js?");

/***/ }),

/***/ "./src/modules/sticky-navigation.js":
/*!******************************************!*\
  !*** ./src/modules/sticky-navigation.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction stickyNavigation() {\r\n  const nav = document.querySelector(\".header__nav\");\r\n  const header = document.querySelector(\".header\");\r\n  const viewHeight = nav.getBoundingClientRect().height;\r\n  const callBackObserver = function (entries) {\r\n    const [entry] = entries;\r\n    if (!entry.isIntersecting) nav.classList.add(\"sticky\");\r\n    else nav.classList.remove(\"sticky\");\r\n  };\r\n  const options = {\r\n    root: null,\r\n    threshold: 0.1,\r\n    rootMargin: `-${viewHeight}px`,\r\n  };\r\n  const observer = new IntersectionObserver(callBackObserver, options);\r\n  observer.observe(header);\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stickyNavigation);\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/modules/sticky-navigation.js?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;