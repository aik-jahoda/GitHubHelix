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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/options.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/options.ts":
/*!************************!*\
  !*** ./src/options.ts ***!
  \************************/
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
var _a;

var mergeBtnWarning = document.getElementById('mergeBtnWarning');
// Saves options to chrome.storage
function save_options() {
    return __awaiter(this, void 0, void 0, function* () {
        let mergeBtnWarningValue = false;
        if (mergeBtnWarning) {
            mergeBtnWarningValue = mergeBtnWarning.checked;
        }
        yield Object(_utils__WEBPACK_IMPORTED_MODULE_0__["storageSet"])({
            mergeBtnWarning: mergeBtnWarningValue,
        });
        // Update status to let user know options were saved.
        var status = document.getElementById('status');
        if (status)
            status.textContent = 'Options saved.';
        setTimeout(() => {
            if (status)
                status.textContent = '';
        }, 750);
    });
}
// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
    return __awaiter(this, void 0, void 0, function* () {
        // Use default value color = 'red' and likesColor = true.
        const items = yield Object(_utils__WEBPACK_IMPORTED_MODULE_0__["storageGet"])({
            mergeBtnWarning: false
        });
        if (mergeBtnWarning) {
            mergeBtnWarning.checked = items.mergeBtnWarning;
        }
    });
}
document.addEventListener('DOMContentLoaded', restore_options);
(_a = document.getElementById('save')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', save_options);


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL29wdGlvbnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRmlEO0FBS2pELElBQUksZUFBZSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsaUJBQWlCLENBQTRCLENBQUM7QUFFNUYsa0NBQWtDO0FBQ2xDLFNBQWUsWUFBWTs7UUFFdkIsSUFBSSxvQkFBb0IsR0FBRyxLQUFLO1FBQ2hDLElBQUksZUFBZSxFQUFFO1lBQ2pCLG9CQUFvQixHQUFHLGVBQWUsQ0FBQyxPQUFPO1NBQ2pEO1FBQ0QsTUFBTSx5REFBVSxDQUFDO1lBQ2IsZUFBZSxFQUFFLG9CQUFvQjtTQUN4QyxDQUFDO1FBQ0YscURBQXFEO1FBQ3JELElBQUksTUFBTSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDL0MsSUFBSSxNQUFNO1lBQ04sTUFBTSxDQUFDLFdBQVcsR0FBRyxnQkFBZ0IsQ0FBQztRQUMxQyxVQUFVLENBQUMsR0FBRyxFQUFFO1lBQ1osSUFBSSxNQUFNO2dCQUFFLE1BQU0sQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDO1FBQ3hDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUNaLENBQUM7Q0FBQTtBQUVELCtEQUErRDtBQUMvRCw0QkFBNEI7QUFDNUIsU0FBZSxlQUFlOztRQUMxQix5REFBeUQ7UUFDekQsTUFBTSxLQUFLLEdBQUcsTUFBTSx5REFBVSxDQUFDO1lBQzNCLGVBQWUsRUFBRSxLQUFLO1NBQ3pCLENBQUM7UUFDRixJQUFJLGVBQWUsRUFBRTtZQUNqQixlQUFlLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQyxlQUFlLENBQUM7U0FDbkQ7SUFDTCxDQUFDO0NBQUE7QUFDRCxRQUFRLENBQUMsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsZUFBZSxDQUFDLENBQUM7QUFDL0QsY0FBUSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsMENBQUUsZ0JBQWdCLENBQUMsT0FBTyxFQUNyRCxZQUFZLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZDWCxNQUFNLFVBQVUsR0FBRyxDQUFDLEtBQWEsRUFBRSxFQUFFO0lBQ3hDLE9BQU8sSUFBSSxPQUFPLENBQU8sQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUNqQyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQ2hELENBQUM7QUFHTSxNQUFNLFVBQVUsR0FBRyxDQUFDLEtBQXVCLEVBQUUsRUFBRTtJQUNsRCxPQUFPLElBQUksT0FBTyxDQUFtQixDQUFDLE9BQU8sRUFBRSxFQUFFLENBQzdDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBWSxDQUFDLENBQUMsQ0FBQztBQUN2RSxDQUFDO0FBUU0sTUFBTSxXQUFXLEdBQUcsQ0FBVSxPQUFnQixFQUFFLEVBQUU7SUFDckQsT0FBTyxJQUFJLE9BQU8sQ0FBSSxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTtRQUN0QyxNQUFNLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FDdEIsT0FBTyxFQUNQLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDMUIsTUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ3hCLE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUNwQyxDQUFDLENBQUMsQ0FBQztBQUNQLENBQUM7QUFFRCxNQUFNLG1CQUFtQixHQUFHLENBQUMsT0FBdUIsRUFBRSxJQUFZLEVBQUUsRUFBRTtJQUNsRSxNQUFNLFFBQVEsR0FBRyxPQUFPLGFBQVAsT0FBTyx1QkFBUCxPQUFPLENBQUUsb0JBQW9CLENBQUMsSUFBSSxDQUFDO0lBQ3BELE9BQU8sU0FBUSxhQUFSLFFBQVEsdUJBQVIsUUFBUSxDQUFFLE1BQU0sTUFBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSTtBQUN0RCxDQUFDO0FBVU0sTUFBTSxlQUFlLEdBQUcsQ0FBTyxHQUFXLEVBQUUsRUFBRTs7SUFDakQsTUFBTSxVQUFVLEdBQUcsTUFBTSxXQUFXLENBQVMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQztJQUVyRyxNQUFNLE1BQU0sR0FBRyxJQUFJLFNBQVMsRUFBRSxDQUFDO0lBQy9CLE1BQU0sTUFBTSxHQUFHLE1BQU0sQ0FBQyxlQUFlLENBQUMsVUFBVSxFQUFFLFVBQVUsQ0FBQyxDQUFDO0lBRTlELE1BQU0sS0FBSyxHQUFlLEVBQUU7SUFFNUIsS0FBSyxNQUFNLElBQUksSUFBSSxNQUFNLENBQUMsb0JBQW9CLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFDcEQsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUM7UUFDMUMsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUM7UUFDdEMsSUFBSSxNQUFNLEtBQUssTUFBTSxJQUFJLElBQUksRUFBRTtZQUMzQixNQUFNLE9BQU8sR0FBRyxtQkFBbUIsQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDO1lBRXBELEtBQUssQ0FBQyxJQUFJLENBQUM7Z0JBQ1AsSUFBSTtnQkFDSixNQUFNO2dCQUNOLE9BQU8sRUFBRSwwQkFBbUIsQ0FBQyxPQUFPLEVBQUUsU0FBUyxDQUFDLDBDQUFFLFdBQVcsS0FBSSxTQUFTO2dCQUMxRSxVQUFVLEVBQUUsMEJBQW1CLENBQUMsT0FBTyxFQUFFLGFBQWEsQ0FBQywwQ0FBRSxXQUFXLEtBQUksU0FBUztnQkFDakYsTUFBTSxFQUFFLDBCQUFtQixDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsMENBQUUsV0FBVyxLQUFJLFNBQVM7YUFDeEUsQ0FBQztTQUNMO0tBQ0o7SUFFRCxPQUFPLEtBQUs7QUFDaEIsQ0FBQyIsImZpbGUiOiJvcHRpb25zLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvb3B0aW9ucy50c1wiKTtcbiIsImltcG9ydCB7IHN0b3JhZ2VTZXQsIHN0b3JhZ2VHZXQgfSBmcm9tIFwiLi91dGlsc1wiO1xuXG5cblxuXG52YXIgbWVyZ2VCdG5XYXJuaW5nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lcmdlQnRuV2FybmluZycpIGFzIEhUTUxJbnB1dEVsZW1lbnQgfCBudWxsO1xuXG4vLyBTYXZlcyBvcHRpb25zIHRvIGNocm9tZS5zdG9yYWdlXG5hc3luYyBmdW5jdGlvbiBzYXZlX29wdGlvbnMoKSB7XG5cbiAgICBsZXQgbWVyZ2VCdG5XYXJuaW5nVmFsdWUgPSBmYWxzZVxuICAgIGlmIChtZXJnZUJ0bldhcm5pbmcpIHtcbiAgICAgICAgbWVyZ2VCdG5XYXJuaW5nVmFsdWUgPSBtZXJnZUJ0bldhcm5pbmcuY2hlY2tlZFxuICAgIH1cbiAgICBhd2FpdCBzdG9yYWdlU2V0KHtcbiAgICAgICAgbWVyZ2VCdG5XYXJuaW5nOiBtZXJnZUJ0bldhcm5pbmdWYWx1ZSxcbiAgICB9KVxuICAgIC8vIFVwZGF0ZSBzdGF0dXMgdG8gbGV0IHVzZXIga25vdyBvcHRpb25zIHdlcmUgc2F2ZWQuXG4gICAgdmFyIHN0YXR1cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGF0dXMnKTtcbiAgICBpZiAoc3RhdHVzKVxuICAgICAgICBzdGF0dXMudGV4dENvbnRlbnQgPSAnT3B0aW9ucyBzYXZlZC4nO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBpZiAoc3RhdHVzKSBzdGF0dXMudGV4dENvbnRlbnQgPSAnJztcbiAgICB9LCA3NTApO1xufVxuXG4vLyBSZXN0b3JlcyBzZWxlY3QgYm94IGFuZCBjaGVja2JveCBzdGF0ZSB1c2luZyB0aGUgcHJlZmVyZW5jZXNcbi8vIHN0b3JlZCBpbiBjaHJvbWUuc3RvcmFnZS5cbmFzeW5jIGZ1bmN0aW9uIHJlc3RvcmVfb3B0aW9ucygpIHtcbiAgICAvLyBVc2UgZGVmYXVsdCB2YWx1ZSBjb2xvciA9ICdyZWQnIGFuZCBsaWtlc0NvbG9yID0gdHJ1ZS5cbiAgICBjb25zdCBpdGVtcyA9IGF3YWl0IHN0b3JhZ2VHZXQoe1xuICAgICAgICBtZXJnZUJ0bldhcm5pbmc6IGZhbHNlXG4gICAgfSlcbiAgICBpZiAobWVyZ2VCdG5XYXJuaW5nKSB7XG4gICAgICAgIG1lcmdlQnRuV2FybmluZy5jaGVja2VkID0gaXRlbXMubWVyZ2VCdG5XYXJuaW5nO1xuICAgIH1cbn1cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCByZXN0b3JlX29wdGlvbnMpO1xuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NhdmUnKT8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLFxuICAgIHNhdmVfb3B0aW9ucyk7IiwiZXhwb3J0IGNvbnN0IHN0b3JhZ2VTZXQgPSAoaXRlbXM6IG9iamVjdCkgPT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZTx2b2lkPigocmVzb2x2ZSkgPT5cbiAgICAgICAgY2hyb21lLnN0b3JhZ2Uuc3luYy5zZXQoaXRlbXMsIHJlc29sdmUpKVxufVxuXG5cbmV4cG9ydCBjb25zdCBzdG9yYWdlR2V0ID0gKGl0ZW1zOiBFeHRlbnNpb25TdG9yYWdlKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPEV4dGVuc2lvblN0b3JhZ2U+KChyZXNvbHZlKSA9PlxuICAgICAgICBjaHJvbWUuc3RvcmFnZS5zeW5jLmdldChpdGVtcywgaXRlbXMgPT4gcmVzb2x2ZShpdGVtcyBhcyBhbnkpKSlcbn1cblxuZXhwb3J0IGludGVyZmFjZSBFeHRlbnNpb25TdG9yYWdlIHtcbiAgICBtZXJnZUJ0bldhcm5pbmc6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBkZWNsYXJlIHR5cGUgTWVzc2FnZSA9IHsgdHlwZTogJ2ZldGNoJywgcGF5bG9hZDogeyByZXN1bHRUeXBlOiAnanNvbicgfCAndGV4dCcsIHVybDogc3RyaW5nIH0gfVxuXG5leHBvcnQgY29uc3Qgc2VuZE1lc3NhZ2UgPSBhc3luYyA8VD4obWVzc2FnZTogTWVzc2FnZSkgPT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZTxUPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIGNocm9tZS5ydW50aW1lLnNlbmRNZXNzYWdlKFxuICAgICAgICAgICAgbWVzc2FnZSxcbiAgICAgICAgICAgIChyZXNwb25zZSkgPT4gcmVzcG9uc2UuZXJyb3IgP1xuICAgICAgICAgICAgICAgIHJlamVjdChyZXNwb25zZS5lcnJvcikgOlxuICAgICAgICAgICAgICAgIHJlc29sdmUocmVzcG9uc2UuZGF0YSkpO1xuICAgIH0pO1xufVxuXG5jb25zdCBnZXRFbGVtZW50QnlUYWdOYW1lID0gKGVsZW1lbnQ6IEVsZW1lbnQgfCBudWxsLCBuYW1lOiBzdHJpbmcpID0+IHtcbiAgICBjb25zdCBmYWlsdXJlcyA9IGVsZW1lbnQ/LmdldEVsZW1lbnRzQnlUYWdOYW1lKG5hbWUpXG4gICAgcmV0dXJuIGZhaWx1cmVzPy5sZW5ndGggPT09IDEgPyBmYWlsdXJlc1swXSA6IG51bGxcbn1cblxuZXhwb3J0IHR5cGUgVGVzdFJlc3VsdCA9IHtcbiAgICBuYW1lOiBzdHJpbmcsXG4gICAgcmVzdWx0OiBzdHJpbmcsXG4gICAgbWVzc2FnZT86IHN0cmluZyxcbiAgICBzdGFja1RyYWNlPzogc3RyaW5nLFxuICAgIG91dHB1dD86IHN0cmluZ1xufVtdXG5cbmV4cG9ydCBjb25zdCBsb2FkVGVzdFJlc3VsdHMgPSBhc3luYyAodXJsOiBzdHJpbmcpID0+IHtcbiAgICBjb25zdCB0ZXN0UmVzdWx0ID0gYXdhaXQgc2VuZE1lc3NhZ2U8c3RyaW5nPih7IHR5cGU6ICdmZXRjaCcsIHBheWxvYWQ6IHsgcmVzdWx0VHlwZTogJ3RleHQnLCB1cmwgfSB9KVxuXG4gICAgY29uc3QgcGFyc2VyID0gbmV3IERPTVBhcnNlcigpO1xuICAgIGNvbnN0IHhtbERvYyA9IHBhcnNlci5wYXJzZUZyb21TdHJpbmcodGVzdFJlc3VsdCwgXCJ0ZXh0L3htbFwiKTtcblxuICAgIGNvbnN0IHRlc3RzOiBUZXN0UmVzdWx0ID0gW11cblxuICAgIGZvciAoY29uc3QgdGVzdCBvZiB4bWxEb2MuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJ0ZXN0XCIpKSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHRlc3QuZ2V0QXR0cmlidXRlKFwicmVzdWx0XCIpXG4gICAgICAgIGNvbnN0IG5hbWUgPSB0ZXN0LmdldEF0dHJpYnV0ZShcIm5hbWVcIilcbiAgICAgICAgaWYgKHJlc3VsdCA9PT0gXCJGYWlsXCIgJiYgbmFtZSkge1xuICAgICAgICAgICAgY29uc3QgZmFpbHVyZSA9IGdldEVsZW1lbnRCeVRhZ05hbWUodGVzdCwgXCJmYWlsdXJlXCIpXG5cbiAgICAgICAgICAgIHRlc3RzLnB1c2goe1xuICAgICAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICAgICAgcmVzdWx0LFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGdldEVsZW1lbnRCeVRhZ05hbWUoZmFpbHVyZSwgXCJtZXNzYWdlXCIpPy50ZXh0Q29udGVudCB8fCB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgc3RhY2tUcmFjZTogZ2V0RWxlbWVudEJ5VGFnTmFtZShmYWlsdXJlLCBcInN0YWNrLXRyYWNlXCIpPy50ZXh0Q29udGVudCB8fCB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgb3V0cHV0OiBnZXRFbGVtZW50QnlUYWdOYW1lKHRlc3QsIFwib3V0cHV0XCIpPy50ZXh0Q29udGVudCB8fCB1bmRlZmluZWRcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGVzdHNcbn0iXSwic291cmNlUm9vdCI6IiJ9