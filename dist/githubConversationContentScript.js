/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/githubConversationContentScript.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/githubConversationContentScript.ts":
/*!************************************************!*\
  !*** ./src/githubConversationContentScript.ts ***!
  \************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/utils.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

const main = () => __awaiter(void 0, void 0, void 0, function* () {
    const items = yield Object(_utils__WEBPACK_IMPORTED_MODULE_0__["storageGet"])({ mergeBtnWarning: false });
    if (items.mergeBtnWarning) {
        const mergeBtn = document.querySelector("button.btn-group-merge");
        if (mergeBtn) {
            mergeBtn.className += " btn-danger";
        }
    }
});
console.log("Conversation plugin loaded.");
main();


/***/ }),

/***/ "./src/utils.ts":
/*!**********************!*\
  !*** ./src/utils.ts ***!
  \**********************/
/*! exports provided: storageSet, storageGet, sendMessage, loadTestResults */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storageSet", function() { return storageSet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storageGet", function() { return storageGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendMessage", function() { return sendMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadTestResults", function() { return loadTestResults; });
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const storageSet = (items) => {
    return new Promise((resolve) => chrome.storage.sync.set(items, resolve));
};
const storageGet = (items) => {
    return new Promise((resolve) => chrome.storage.sync.get(items, items => resolve(items)));
};
const sendMessage = (message) => __awaiter(void 0, void 0, void 0, function* () {
    return new Promise((resolve, reject) => {
        chrome.runtime.sendMessage(message, (response) => response.error ?
            reject(response.error) :
            resolve(response.data));
    });
});
const getElementByTagName = (element, name) => {
    const failures = element === null || element === void 0 ? void 0 : element.getElementsByTagName(name);
    return (failures === null || failures === void 0 ? void 0 : failures.length) === 1 ? failures[0] : null;
};
const loadTestResults = (url) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c;
    const testResult = yield sendMessage({ type: 'fetch', payload: { resultType: 'text', url } });
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(testResult, "text/xml");
    const tests = [];
    for (const test of xmlDoc.getElementsByTagName("test")) {
        const result = test.getAttribute("result");
        const name = test.getAttribute("name");
        if (result === "Fail" && name) {
            const failure = getElementByTagName(test, "failure");
            tests.push({
                name,
                result,
                message: ((_a = getElementByTagName(failure, "message")) === null || _a === void 0 ? void 0 : _a.textContent) || undefined,
                stackTrace: ((_b = getElementByTagName(failure, "stack-trace")) === null || _b === void 0 ? void 0 : _b.textContent) || undefined,
                output: ((_c = getElementByTagName(test, "output")) === null || _c === void 0 ? void 0 : _c.textContent) || undefined
            });
        }
    }
    return tests;
});


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dpdGh1YkNvbnZlcnNhdGlvbkNvbnRlbnRTY3JpcHQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xGcUM7QUFFckMsTUFBTSxJQUFJLEdBQUcsR0FBUyxFQUFFO0lBQ3BCLE1BQU0sS0FBSyxHQUFHLE1BQU0seURBQVUsQ0FBQyxFQUFFLGVBQWUsRUFBRSxLQUFLLEVBQUUsQ0FBQztJQUMxRCxJQUFJLEtBQUssQ0FBQyxlQUFlLEVBQUU7UUFDdkIsTUFBTSxRQUFRLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1FBQ2xFLElBQUksUUFBUSxFQUFFO1lBQ1YsUUFBUSxDQUFDLFNBQVMsSUFB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MEJBQW1CLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQywwQ0FBRSxXQUFXLEtBQUksU0FBUzthQUN4RSxDQUFDO1NBQ0w7S0FDSjtJQUVELE9BQU8sS0FBSztBQUNoQixDQUFDIiwiZmlsZSI6ImdpdGh1YkNvbnZlcnNhdGlvbkNvbnRlbnRTY3JpcHQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9naXRodWJDb252ZXJzYXRpb25Db250ZW50U2NyaXB0LnRzXCIpO1xuIiwiaW1wb3J0IHsgc3RvcmFnZUdldCB9IGZyb20gXCIuL3V0aWxzXCI7XG5cbmNvbnN0IG1haW4gPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgaXRlbXMgPSBhd2FpdCBzdG9yYWdlR2V0KHsgbWVyZ2VCdG5XYXJuaW5nOiBmYWxzZSB9KVxuICAgIGlmIChpdGVtcy5tZXJnZUJ0bldhcm5pbmcpIHtcbiAgICAgICAgY29uc3QgbWVyZ2VCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYnV0dG9uLmJ0bi1ncm91cC1tZXJnZVwiKTtcbiAgICAgICAgaWYgKG1lcmdlQnRuKSB7XG4gICAgICAgICAgICBtZXJnZUJ0bi5jbGFzc05hbWUgKz0gXCIgYnRuLWRhbmdlclwiXG4gICAgICAgIH1cbiAgICB9XG59XG5cbmNvbnNvbGUubG9nKFwiQ29udmVyc2F0aW9uIHBsdWdpbiBsb2FkZWQuXCIpXG5tYWluKCkiLCJleHBvcnQgY29uc3Qgc3RvcmFnZVNldCA9IChpdGVtczogb2JqZWN0KSA9PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPHZvaWQ+KChyZXNvbHZlKSA9PlxuICAgICAgICBjaHJvbWUuc3RvcmFnZS5zeW5jLnNldChpdGVtcywgcmVzb2x2ZSkpXG59XG5cblxuZXhwb3J0IGNvbnN0IHN0b3JhZ2VHZXQgPSAoaXRlbXM6IEV4dGVuc2lvblN0b3JhZ2UpID0+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2U8RXh0ZW5zaW9uU3RvcmFnZT4oKHJlc29sdmUpID0+XG4gICAgICAgIGNocm9tZS5zdG9yYWdlLnN5bmMuZ2V0KGl0ZW1zLCBpdGVtcyA9PiByZXNvbHZlKGl0ZW1zIGFzIGFueSkpKVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEV4dGVuc2lvblN0b3JhZ2Uge1xuICAgIG1lcmdlQnRuV2FybmluZzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGRlY2xhcmUgdHlwZSBNZXNzYWdlID0geyB0eXBlOiAnZmV0Y2gnLCBwYXlsb2FkOiB7IHJlc3VsdFR5cGU6ICdqc29uJyB8ICd0ZXh0JywgdXJsOiBzdHJpbmcgfSB9XG5cbmV4cG9ydCBjb25zdCBzZW5kTWVzc2FnZSA9IGFzeW5jIDxUPihtZXNzYWdlOiBNZXNzYWdlKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPFQ+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgY2hyb21lLnJ1bnRpbWUuc2VuZE1lc3NhZ2UoXG4gICAgICAgICAgICBtZXNzYWdlLFxuICAgICAgICAgICAgKHJlc3BvbnNlKSA9PiByZXNwb25zZS5lcnJvciA/XG4gICAgICAgICAgICAgICAgcmVqZWN0KHJlc3BvbnNlLmVycm9yKSA6XG4gICAgICAgICAgICAgICAgcmVzb2x2ZShyZXNwb25zZS5kYXRhKSk7XG4gICAgfSk7XG59XG5cbmNvbnN0IGdldEVsZW1lbnRCeVRhZ05hbWUgPSAoZWxlbWVudDogRWxlbWVudCB8IG51bGwsIG5hbWU6IHN0cmluZykgPT4ge1xuICAgIGNvbnN0IGZhaWx1cmVzID0gZWxlbWVudD8uZ2V0RWxlbWVudHNCeVRhZ05hbWUobmFtZSlcbiAgICByZXR1cm4gZmFpbHVyZXM/Lmxlbmd0aCA9PT0gMSA/IGZhaWx1cmVzWzBdIDogbnVsbFxufVxuXG5leHBvcnQgdHlwZSBUZXN0UmVzdWx0ID0ge1xuICAgIG5hbWU6IHN0cmluZyxcbiAgICByZXN1bHQ6IHN0cmluZyxcbiAgICBtZXNzYWdlPzogc3RyaW5nLFxuICAgIHN0YWNrVHJhY2U/OiBzdHJpbmcsXG4gICAgb3V0cHV0Pzogc3RyaW5nXG59W11cblxuZXhwb3J0IGNvbnN0IGxvYWRUZXN0UmVzdWx0cyA9IGFzeW5jICh1cmw6IHN0cmluZykgPT4ge1xuICAgIGNvbnN0IHRlc3RSZXN1bHQgPSBhd2FpdCBzZW5kTWVzc2FnZTxzdHJpbmc+KHsgdHlwZTogJ2ZldGNoJywgcGF5bG9hZDogeyByZXN1bHRUeXBlOiAndGV4dCcsIHVybCB9IH0pXG5cbiAgICBjb25zdCBwYXJzZXIgPSBuZXcgRE9NUGFyc2VyKCk7XG4gICAgY29uc3QgeG1sRG9jID0gcGFyc2VyLnBhcnNlRnJvbVN0cmluZyh0ZXN0UmVzdWx0LCBcInRleHQveG1sXCIpO1xuXG4gICAgY29uc3QgdGVzdHM6IFRlc3RSZXN1bHQgPSBbXVxuXG4gICAgZm9yIChjb25zdCB0ZXN0IG9mIHhtbERvYy5nZXRFbGVtZW50c0J5VGFnTmFtZShcInRlc3RcIikpIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gdGVzdC5nZXRBdHRyaWJ1dGUoXCJyZXN1bHRcIilcbiAgICAgICAgY29uc3QgbmFtZSA9IHRlc3QuZ2V0QXR0cmlidXRlKFwibmFtZVwiKVxuICAgICAgICBpZiAocmVzdWx0ID09PSBcIkZhaWxcIiAmJiBuYW1lKSB7XG4gICAgICAgICAgICBjb25zdCBmYWlsdXJlID0gZ2V0RWxlbWVudEJ5VGFnTmFtZSh0ZXN0LCBcImZhaWx1cmVcIilcblxuICAgICAgICAgICAgdGVzdHMucHVzaCh7XG4gICAgICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgICAgICByZXN1bHQsXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogZ2V0RWxlbWVudEJ5VGFnTmFtZShmYWlsdXJlLCBcIm1lc3NhZ2VcIik/LnRleHRDb250ZW50IHx8IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgICBzdGFja1RyYWNlOiBnZXRFbGVtZW50QnlUYWdOYW1lKGZhaWx1cmUsIFwic3RhY2stdHJhY2VcIik/LnRleHRDb250ZW50IHx8IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgICBvdXRwdXQ6IGdldEVsZW1lbnRCeVRhZ05hbWUodGVzdCwgXCJvdXRwdXRcIik/LnRleHRDb250ZW50IHx8IHVuZGVmaW5lZFxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0ZXN0c1xufSJdLCJzb3VyY2VSb290IjoiIn0=