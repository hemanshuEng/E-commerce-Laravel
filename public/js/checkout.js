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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/checkout.js":
/*!**********************************!*\
  !*** ./resources/js/checkout.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function () {
  // Create a Stripe client.
  var stripe = new Stripe("pk_test_51HIDJfD87xwn5urhfgVB0Xon7HpclQhJ7EvXtkAjbINghVOnN4Y9qaTHmLX5M5tAfua9JlFf9Ig3z2W3hISAYfyk00U3RYIqUp"); // Create an instance of Elements.

  var elements = stripe.elements(); // Custom styling can be passed to options when creating an Element.
  // (Note that this demo uses a wider set of styles than the guide below.)

  var style = {
    base: {
      color: '#32325d',
      fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
      fontSmoothing: 'antialiased',
      fontSize: '16px',
      '::placeholder': {
        color: '#aab7c4'
      }
    },
    invalid: {
      color: '#fa755a',
      iconColor: '#fa755a'
    }
  }; // Create an instance of the card Element.

  var card = elements.create('card', {
    style: style,
    hidePostalCode: true
  }); // Add an instance of the card Element into the `card-element` <div>.

  card.mount('#card-element'); // Handle real-time validation errors from the card Element.

  card.on('change', function (event) {
    var displayError = document.getElementById('card-errors');

    if (event.error) {
      displayError.textContent = event.error.message;
    } else {
      displayError.textContent = '';
    }
  }); // Handle form submission.

  var form = document.getElementById('payment-form');
  form.addEventListener('submit', function (event) {
    event.preventDefault();
    var options = {
      name: document.getElementById('firstname').value + " " + document.getElementById('lastname').value,
      address_line1: document.getElementById('address').value,
      address_city: document.getElementById('town').value,
      address_state: document.getElementById('state').value,
      address_zip: document.getElementById('postcode').value
    };
    stripe.createToken(card, options).then(function (result) {
      if (result.error) {
        // Inform the user if there was an error.
        var errorElement = document.getElementById('card-errors');
        errorElement.textContent = result.error.message;
      } else {
        // Send the token to your server.
        stripeTokenHandler(result.token);
      }
    });
  }); // Submit the form with the token ID.

  function stripeTokenHandler(token) {
    // Insert the token ID into the form so it gets submitted to the server
    var form = document.getElementById('payment-form');
    var hiddenInput = document.createElement('input');
    hiddenInput.setAttribute('type', 'hidden');
    hiddenInput.setAttribute('name', 'stripeToken');
    hiddenInput.setAttribute('value', token.id);
    form.appendChild(hiddenInput); // Submit the form

    form.submit();
  }
})();

/***/ }),

/***/ 1:
/*!****************************************!*\
  !*** multi ./resources/js/checkout.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /var/www/resources/js/checkout.js */"./resources/js/checkout.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NoZWNrb3V0LmpzIl0sIm5hbWVzIjpbInN0cmlwZSIsIlN0cmlwZSIsInByb2Nlc3MiLCJlbGVtZW50cyIsInN0eWxlIiwiYmFzZSIsImNvbG9yIiwiZm9udEZhbWlseSIsImZvbnRTbW9vdGhpbmciLCJmb250U2l6ZSIsImludmFsaWQiLCJpY29uQ29sb3IiLCJjYXJkIiwiY3JlYXRlIiwiaGlkZVBvc3RhbENvZGUiLCJtb3VudCIsIm9uIiwiZXZlbnQiLCJkaXNwbGF5RXJyb3IiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiZXJyb3IiLCJ0ZXh0Q29udGVudCIsIm1lc3NhZ2UiLCJmb3JtIiwiYWRkRXZlbnRMaXN0ZW5lciIsInByZXZlbnREZWZhdWx0Iiwib3B0aW9ucyIsIm5hbWUiLCJ2YWx1ZSIsImFkZHJlc3NfbGluZTEiLCJhZGRyZXNzX2NpdHkiLCJhZGRyZXNzX3N0YXRlIiwiYWRkcmVzc196aXAiLCJjcmVhdGVUb2tlbiIsInRoZW4iLCJyZXN1bHQiLCJlcnJvckVsZW1lbnQiLCJzdHJpcGVUb2tlbkhhbmRsZXIiLCJ0b2tlbiIsImhpZGRlbklucHV0IiwiY3JlYXRlRWxlbWVudCIsInNldEF0dHJpYnV0ZSIsImlkIiwiYXBwZW5kQ2hpbGQiLCJzdWJtaXQiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFD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LEdBQTJCYyxNQUFNLENBQUNmLEtBQVAsQ0FBYUUsT0FBeEM7QUFDSCxPQUpELE1BSU87QUFDSDtBQUNBZSwwQkFBa0IsQ0FBQ0YsTUFBTSxDQUFDRyxLQUFSLENBQWxCO0FBQ0g7QUFDSixLQVREO0FBVUgsR0FuQkQsRUE3Q1EsQ0FrRVI7O0FBQ0EsV0FBU0Qsa0JBQVQsQ0FBNEJDLEtBQTVCLEVBQW1DO0FBQy9CO0FBQ0EsUUFBSWYsSUFBSSxHQUFHTCxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsY0FBeEIsQ0FBWDtBQUNBLFFBQUlvQixXQUFXLEdBQUdyQixRQUFRLENBQUNzQixhQUFULENBQXVCLE9BQXZCLENBQWxCO0FBQ0FELGVBQVcsQ0FBQ0UsWUFBWixDQUF5QixNQUF6QixFQUFpQyxRQUFqQztBQUNBRixlQUFXLENBQUNFLFlBQVosQ0FBeUIsTUFBekIsRUFBaUMsYUFBakM7QUFDQUYsZUFBVyxDQUFDRSxZQUFaLENBQXlCLE9BQXpCLEVBQWtDSCxLQUFLLENBQUNJLEVBQXhDO0FBQ0FuQixRQUFJLENBQUNvQixXQUFMLENBQWlCSixXQUFqQixFQVArQixDQVMvQjs7QUFDQWhCLFFBQUksQ0FBQ3FCLE1BQUw7QUFDSDtBQUNKLENBL0VELEkiLCJmaWxlIjoiL2pzL2NoZWNrb3V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxKTtcbiIsIihmdW5jdGlvbiAoKXtcbiAgICAvLyBDcmVhdGUgYSBTdHJpcGUgY2xpZW50LlxuICAgIHZhciBzdHJpcGUgPSBuZXcgU3RyaXBlKHByb2Nlc3MuZW52Lk1JWF9TVFJJUEVfS0VZKTtcbiAgICAvLyBDcmVhdGUgYW4gaW5zdGFuY2Ugb2YgRWxlbWVudHMuXG4gICAgdmFyIGVsZW1lbnRzID0gc3RyaXBlLmVsZW1lbnRzKCk7XG5cbiAgICAvLyBDdXN0b20gc3R5bGluZyBjYW4gYmUgcGFzc2VkIHRvIG9wdGlvbnMgd2hlbiBjcmVhdGluZyBhbiBFbGVtZW50LlxuICAgIC8vIChOb3RlIHRoYXQgdGhpcyBkZW1vIHVzZXMgYSB3aWRlciBzZXQgb2Ygc3R5bGVzIHRoYW4gdGhlIGd1aWRlIGJlbG93LilcbiAgICB2YXIgc3R5bGUgPSB7XG4gICAgICAgIGJhc2U6IHtcbiAgICAgICAgICAgIGNvbG9yOiAnIzMyMzI1ZCcsXG4gICAgICAgICAgICBmb250RmFtaWx5OiAnXCJIZWx2ZXRpY2EgTmV1ZVwiLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWYnLFxuICAgICAgICAgICAgZm9udFNtb290aGluZzogJ2FudGlhbGlhc2VkJyxcbiAgICAgICAgICAgIGZvbnRTaXplOiAnMTZweCcsXG4gICAgICAgICAgICAnOjpwbGFjZWhvbGRlcic6IHtcbiAgICAgICAgICAgICAgICBjb2xvcjogJyNhYWI3YzQnXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGludmFsaWQ6IHtcbiAgICAgICAgICAgIGNvbG9yOiAnI2ZhNzU1YScsXG4gICAgICAgICAgICBpY29uQ29sb3I6ICcjZmE3NTVhJ1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8vIENyZWF0ZSBhbiBpbnN0YW5jZSBvZiB0aGUgY2FyZCBFbGVtZW50LlxuICAgIHZhciBjYXJkID0gZWxlbWVudHMuY3JlYXRlKCdjYXJkJywge1xuICAgICAgICBzdHlsZTogc3R5bGUsXG4gICAgICAgIGhpZGVQb3N0YWxDb2RlOiB0cnVlLFxuICAgIH0pO1xuXG4gICAgLy8gQWRkIGFuIGluc3RhbmNlIG9mIHRoZSBjYXJkIEVsZW1lbnQgaW50byB0aGUgYGNhcmQtZWxlbWVudGAgPGRpdj4uXG4gICAgY2FyZC5tb3VudCgnI2NhcmQtZWxlbWVudCcpO1xuXG4gICAgLy8gSGFuZGxlIHJlYWwtdGltZSB2YWxpZGF0aW9uIGVycm9ycyBmcm9tIHRoZSBjYXJkIEVsZW1lbnQuXG4gICAgY2FyZC5vbignY2hhbmdlJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgdmFyIGRpc3BsYXlFcnJvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXJkLWVycm9ycycpO1xuICAgICAgICBpZiAoZXZlbnQuZXJyb3IpIHtcbiAgICAgICAgICAgIGRpc3BsYXlFcnJvci50ZXh0Q29udGVudCA9IGV2ZW50LmVycm9yLm1lc3NhZ2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkaXNwbGF5RXJyb3IudGV4dENvbnRlbnQgPSAnJztcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gSGFuZGxlIGZvcm0gc3VibWlzc2lvbi5cbiAgICB2YXIgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYXltZW50LWZvcm0nKTtcbiAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHZhciBvcHRpb25zID0ge1xuICAgICAgICAgICAgbmFtZTogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZpcnN0bmFtZScpLnZhbHVlICArIFwiIFwiKyBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGFzdG5hbWUnKS52YWx1ZSxcbiAgICAgICAgICAgIGFkZHJlc3NfbGluZTE6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRyZXNzJykudmFsdWUsXG4gICAgICAgICAgICBhZGRyZXNzX2NpdHk6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b3duJykudmFsdWUsXG4gICAgICAgICAgICBhZGRyZXNzX3N0YXRlOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhdGUnKS52YWx1ZSxcbiAgICAgICAgICAgIGFkZHJlc3NfemlwOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9zdGNvZGUnKS52YWx1ZSxcbiAgICAgICAgfVxuICAgICAgICBzdHJpcGUuY3JlYXRlVG9rZW4oY2FyZCwgb3B0aW9ucykudGhlbihmdW5jdGlvbihyZXN1bHQpIHtcbiAgICAgICAgICAgIGlmIChyZXN1bHQuZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAvLyBJbmZvcm0gdGhlIHVzZXIgaWYgdGhlcmUgd2FzIGFuIGVycm9yLlxuICAgICAgICAgICAgICAgIHZhciBlcnJvckVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FyZC1lcnJvcnMnKTtcbiAgICAgICAgICAgICAgICBlcnJvckVsZW1lbnQudGV4dENvbnRlbnQgPSByZXN1bHQuZXJyb3IubWVzc2FnZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gU2VuZCB0aGUgdG9rZW4gdG8geW91ciBzZXJ2ZXIuXG4gICAgICAgICAgICAgICAgc3RyaXBlVG9rZW5IYW5kbGVyKHJlc3VsdC50b2tlbik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgLy8gU3VibWl0IHRoZSBmb3JtIHdpdGggdGhlIHRva2VuIElELlxuICAgIGZ1bmN0aW9uIHN0cmlwZVRva2VuSGFuZGxlcih0b2tlbikge1xuICAgICAgICAvLyBJbnNlcnQgdGhlIHRva2VuIElEIGludG8gdGhlIGZvcm0gc28gaXQgZ2V0cyBzdWJtaXR0ZWQgdG8gdGhlIHNlcnZlclxuICAgICAgICB2YXIgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYXltZW50LWZvcm0nKTtcbiAgICAgICAgdmFyIGhpZGRlbklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgaGlkZGVuSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2hpZGRlbicpO1xuICAgICAgICBoaWRkZW5JbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnc3RyaXBlVG9rZW4nKTtcbiAgICAgICAgaGlkZGVuSW5wdXQuc2V0QXR0cmlidXRlKCd2YWx1ZScsIHRva2VuLmlkKTtcbiAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChoaWRkZW5JbnB1dCk7XG5cbiAgICAgICAgLy8gU3VibWl0IHRoZSBmb3JtXG4gICAgICAgIGZvcm0uc3VibWl0KCk7XG4gICAgfVxufSkoKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=