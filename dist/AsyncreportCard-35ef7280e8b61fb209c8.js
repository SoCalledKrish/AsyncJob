/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("@ellucian/react-design-system/core/styles"), require("@ellucian/react-design-system/core"), require("prop-types"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "@ellucian/react-design-system/core/styles", "@ellucian/react-design-system/core", "prop-types"], factory);
	else if(typeof exports === 'object')
		exports["AsyncreportCard"] = factory(require("react"), require("@ellucian/react-design-system/core/styles"), require("@ellucian/react-design-system/core"), require("prop-types"));
	else
		root["AsyncreportCard"] = factory(root["react"], root["@ellucian/react-design-system/core/styles"], root["@ellucian/react-design-system/core"], root["prop-types"]);
})(self, (__WEBPACK_EXTERNAL_MODULE_react__, __WEBPACK_EXTERNAL_MODULE__ellucian_react_design_system_core_styles__, __WEBPACK_EXTERNAL_MODULE__ellucian_react_design_system_core__, __WEBPACK_EXTERNAL_MODULE_prop_types__) => {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@ellucian/experience-extension/lib/enableLazyLoading.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@ellucian/experience-extension/lib/enableLazyLoading.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// getExtensionPublicPath will be available in the 'global' context of an extension in Experience\nif (typeof getExtensionPublicPath === 'function') {\n    // eslint-disable-next-line camelcase, no-undef, no-alert\n    __webpack_require__.p = getExtensionPublicPath();\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvQGVsbHVjaWFuL2V4cGVyaWVuY2UtZXh0ZW5zaW9uL2xpYi9lbmFibGVMYXp5TG9hZGluZy5qcy5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHFCQUF1QjtBQUMzQiIsInNvdXJjZXMiOlsid2VicGFjazovL0FzeW5jcmVwb3J0Ly4vbm9kZV9tb2R1bGVzL0BlbGx1Y2lhbi9leHBlcmllbmNlLWV4dGVuc2lvbi9saWIvZW5hYmxlTGF6eUxvYWRpbmcuanM/MjAyMyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBnZXRFeHRlbnNpb25QdWJsaWNQYXRoIHdpbGwgYmUgYXZhaWxhYmxlIGluIHRoZSAnZ2xvYmFsJyBjb250ZXh0IG9mIGFuIGV4dGVuc2lvbiBpbiBFeHBlcmllbmNlXG5pZiAodHlwZW9mIGdldEV4dGVuc2lvblB1YmxpY1BhdGggPT09ICdmdW5jdGlvbicpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY2FtZWxjYXNlLCBuby11bmRlZiwgbm8tYWxlcnRcbiAgICBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyA9IGdldEV4dGVuc2lvblB1YmxpY1BhdGgoKTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/@ellucian/experience-extension/lib/enableLazyLoading.js\n");

/***/ }),

/***/ "./src/cards/AsyncreportCard.jsx":
/*!***************************************!*\
  !*** ./src/cards/AsyncreportCard.jsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ellucian_react_design_system_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ellucian/react-design-system/core/styles */ \"@ellucian/react-design-system/core/styles\");\n/* harmony import */ var _ellucian_react_design_system_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ellucian_react_design_system_core_styles__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ellucian_react_design_system_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ellucian/react-design-system/core */ \"@ellucian/react-design-system/core\");\n/* harmony import */ var _ellucian_react_design_system_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ellucian_react_design_system_core__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nvar styles = function styles() {\n  return {\n    card: {\n      marginTop: '20px',\n      padding: '20px',\n      backgroundColor: '#F4F4F4',\n      borderRadius: '8px'\n    }\n  };\n};\nvar AsyncreportCard = function AsyncreportCard(props) {\n  console.log(\"props\", props);\n  var classes = props.classes,\n    navigateToPage = props.cardControl.navigateToPage;\n  var handleNavigation = function handleNavigation() {\n    console.log(\"Navigating\");\n    navigateToPage({\n      route: \"/async\"\n    });\n  };\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: classes.card\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ellucian_react_design_system_core__WEBPACK_IMPORTED_MODULE_2__.Button, {\n    color: \"primary\",\n    size: \"large\",\n    variant: \"contained\",\n    onClick: handleNavigation\n  }, \"Async Reports\"));\n};\nAsyncreportCard.propTypes = {\n  classes: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object.isRequired),\n  cardControl: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object.isRequired)\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_ellucian_react_design_system_core_styles__WEBPACK_IMPORTED_MODULE_1__.withStyles)(styles)(AsyncreportCard));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY2FyZHMvQXN5bmNyZXBvcnRDYXJkLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBMEI7QUFDNkM7QUFDWDtBQUN6QjtBQUVuQyxJQUFNSSxNQUFNLEdBQUcsU0FBVEEsTUFBTUEsQ0FBQTtFQUFBLE9BQVU7SUFDbEJDLElBQUksRUFBRTtNQUNGQyxTQUFTLEVBQUUsTUFBTTtNQUNqQkMsT0FBTyxFQUFFLE1BQU07TUFDZkMsZUFBZSxFQUFFLFNBQVM7TUFDMUJDLFlBQVksRUFBRTtJQUNsQjtFQUNKLENBQUM7QUFBQSxDQUFDO0FBRUYsSUFBTUMsZUFBZSxHQUFHLFNBQWxCQSxlQUFlQSxDQUFJQyxLQUFLLEVBQUs7RUFDL0JDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLE9BQU8sRUFBRUYsS0FBSyxDQUFDO0VBQzNCLElBQVFHLE9BQU8sR0FBc0NILEtBQUssQ0FBbERHLE9BQU87SUFBaUJDLGNBQWMsR0FBT0osS0FBSyxDQUF6Q0ssV0FBVyxDQUFJRCxjQUFjO0VBRzlDLElBQU1FLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBZ0JBLENBQUEsRUFBUztJQUMzQkwsT0FBTyxDQUFDQyxHQUFHLENBQUMsWUFBWSxDQUFDO0lBQ3pCRSxjQUFjLENBQUM7TUFBRUcsS0FBSyxFQUFFO0lBQVMsQ0FBQyxDQUFDO0VBQ3ZDLENBQUM7RUFFRCxvQkFDSWxCLDBEQUFBO0lBQUtvQixTQUFTLEVBQUVOLE9BQU8sQ0FBQ1Q7RUFBSyxnQkFDekJMLDBEQUFBLENBQUNFLHNFQUFNO0lBQUNtQixLQUFLLEVBQUMsU0FBUztJQUFDQyxJQUFJLEVBQUMsT0FBTztJQUFDQyxPQUFPLEVBQUMsV0FBVztJQUFDQyxPQUFPLEVBQUVQO0VBQWlCLEdBQUMsZUFFNUUsQ0FDUCxDQUFDO0FBRWQsQ0FBQztBQUVEUCxlQUFlLENBQUNlLFNBQVMsR0FBRztFQUN4QlgsT0FBTyxFQUFFWCxxRUFBMkI7RUFDcENhLFdBQVcsRUFBRWIscUVBQTJCd0I7QUFDNUMsQ0FBQztBQUVELGlFQUFlMUIscUZBQVUsQ0FBQ0csTUFBTSxDQUFDLENBQUNNLGVBQWUsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL0FzeW5jcmVwb3J0Ly4vc3JjL2NhcmRzL0FzeW5jcmVwb3J0Q2FyZC5qc3g/OTE4MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgd2l0aFN0eWxlcyB9IGZyb20gJ0BlbGx1Y2lhbi9yZWFjdC1kZXNpZ24tc3lzdGVtL2NvcmUvc3R5bGVzJztcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ0BlbGx1Y2lhbi9yZWFjdC1kZXNpZ24tc3lzdGVtL2NvcmUnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuY29uc3Qgc3R5bGVzID0gKCkgPT4gKHtcbiAgICBjYXJkOiB7XG4gICAgICAgIG1hcmdpblRvcDogJzIwcHgnLFxuICAgICAgICBwYWRkaW5nOiAnMjBweCcsXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJyNGNEY0RjQnLFxuICAgICAgICBib3JkZXJSYWRpdXM6ICc4cHgnXG4gICAgfVxufSk7XG5cbmNvbnN0IEFzeW5jcmVwb3J0Q2FyZCA9IChwcm9wcykgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwicHJvcHNcIiAscHJvcHMpXG4gICAgY29uc3QgeyBjbGFzc2VzLCBjYXJkQ29udHJvbDogeyBuYXZpZ2F0ZVRvUGFnZSB9IH0gPSBwcm9wcztcblxuICBcbiAgICBjb25zdCBoYW5kbGVOYXZpZ2F0aW9uID0gKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcIk5hdmlnYXRpbmdcIik7XG4gICAgICAgIG5hdmlnYXRlVG9QYWdlKHsgcm91dGU6IFwiL2FzeW5jXCIgfSk7IFxuICAgIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jYXJkfT5cbiAgICAgICAgICAgIDxCdXR0b24gY29sb3I9XCJwcmltYXJ5XCIgc2l6ZT1cImxhcmdlXCIgdmFyaWFudD1cImNvbnRhaW5lZFwiIG9uQ2xpY2s9e2hhbmRsZU5hdmlnYXRpb259PlxuICAgICAgICAgICAgICAgIEFzeW5jIFJlcG9ydHNcbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufTtcblxuQXN5bmNyZXBvcnRDYXJkLnByb3BUeXBlcyA9IHtcbiAgICBjbGFzc2VzOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gICAgY2FyZENvbnRyb2w6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZFxufTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzdHlsZXMpKEFzeW5jcmVwb3J0Q2FyZCk7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ3aXRoU3R5bGVzIiwiQnV0dG9uIiwiUHJvcFR5cGVzIiwic3R5bGVzIiwiY2FyZCIsIm1hcmdpblRvcCIsInBhZGRpbmciLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3JkZXJSYWRpdXMiLCJBc3luY3JlcG9ydENhcmQiLCJwcm9wcyIsImNvbnNvbGUiLCJsb2ciLCJjbGFzc2VzIiwibmF2aWdhdGVUb1BhZ2UiLCJjYXJkQ29udHJvbCIsImhhbmRsZU5hdmlnYXRpb24iLCJyb3V0ZSIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJjb2xvciIsInNpemUiLCJ2YXJpYW50Iiwib25DbGljayIsInByb3BUeXBlcyIsIm9iamVjdCIsImlzUmVxdWlyZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/cards/AsyncreportCard.jsx\n");

/***/ }),

/***/ "@ellucian/react-design-system/core":
/*!*****************************************************!*\
  !*** external "@ellucian/react-design-system/core" ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__ellucian_react_design_system_core__;

/***/ }),

/***/ "@ellucian/react-design-system/core/styles":
/*!************************************************************!*\
  !*** external "@ellucian/react-design-system/core/styles" ***!
  \************************************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__ellucian_react_design_system_core_styles__;

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_prop_types__;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

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
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./node_modules/@ellucian/experience-extension/lib/enableLazyLoading.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/cards/AsyncreportCard.jsx");
/******/ 	__webpack_exports__ = __webpack_exports__["default"];
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});