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
    document.getElementById('complete-order').disabled = true;
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
        document.getElementById('complete-order').disabled = false;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NoZWNrb3V0LmpzIl0sIm5hbWVzIjpbInN0cmlwZSIsIlN0cmlwZSIsInByb2Nlc3MiLCJlbGVtZW50cyIsInN0eWxlIiwiYmFzZSIsImNvbG9yIiwiZm9udEZhbWlseSIsImZvbnRTbW9vdGhpbmciLCJmb250U2l6ZSIsImludmFsaWQiLCJpY29uQ29sb3IiLCJjYXJkIiwiY3JlYXRlIiwiaGlkZVBvc3RhbENvZGUiLCJtb3VudCIsIm9uIiwiZXZlbnQiLCJkaXNwbGF5RXJyb3IiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiZXJyb3IiLCJ0ZXh0Q29udGVudCIsIm1lc3NhZ2UiLCJmb3JtIiwiYWRkRXZlbnRMaXN0ZW5lciIsInByZXZlbnREZWZhdWx0IiwiZGlzYWJsZWQiLCJvcHRpb25zIiwibmFtZSIsInZhbHVlIiwiYWRkcmVzc19saW5lMSIsImFkZHJlc3NfY2l0eSIsImFkZHJlc3Nfc3RhdGUiLCJhZGRyZXNzX3ppcCIsImNyZWF0ZVRva2VuIiwidGhlbiIsInJlc3VsdCIsImVycm9yRWxlbWVudCIsInN0cmlwZVRva2VuSGFuZGxlciIsInRva2VuIiwiaGlkZGVuSW5wdXQiLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwiaWQiLCJhcHBlbmRDaGlsZCIsInN1Ym1pdCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMv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SWlCLFlBQVksR0FBR25CLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixhQUF4QixDQUFuQjtBQUNBa0Isb0JBQVksQ0FBQ2hCLFdBQWIsR0FBMkJlLE1BQU0sQ0FBQ2hCLEtBQVAsQ0FBYUUsT0FBeEM7QUFDQUosZ0JBQVEsQ0FBQ0MsY0FBVCxDQUF3QixnQkFBeEIsRUFBMENPLFFBQTFDLEdBQXFELEtBQXJEO0FBQ0gsT0FMRCxNQUtPO0FBQ0g7QUFDQVksMEJBQWtCLENBQUNGLE1BQU0sQ0FBQ0csS0FBUixDQUFsQjtBQUNIO0FBQ0osS0FWRDtBQVdILEdBdkJELEVBN0NRLENBc0VSOztBQUNBLFdBQVNELGtCQUFULENBQTRCQyxLQUE1QixFQUFtQztBQUMvQjtBQUNBLFFBQUloQixJQUFJLEdBQUdMLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixjQUF4QixDQUFYO0FBQ0EsUUFBSXFCLFdBQVcsR0FBR3RCLFFBQVEsQ0FBQ3VCLGFBQVQsQ0FBdUIsT0FBdkIsQ0FBbEI7QUFDQUQsZUFBVyxDQUFDRSxZQUFaLENBQXlCLE1BQXpCLEVBQWlDLFFBQWpDO0FBQ0FGLGVBQVcsQ0FBQ0UsWUFBWixDQUF5QixNQUF6QixFQUFpQyxhQUFqQztBQUNBRixlQUFXLENBQUNFLFlBQVosQ0FBeUIsT0FBekIsRUFBa0NILEtBQUssQ0FBQ0ksRUFBeEM7QUFDQXBCLFFBQUksQ0FBQ3FCLFdBQUwsQ0FBaUJKLFdBQWpCLEVBUCtCLENBUy9COztBQUNBakIsUUFBSSxDQUFDc0IsTUFBTDtBQUNIO0FBQ0osQ0FuRkQsSSIsImZpbGUiOiIvanMvY2hlY2tvdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDEpO1xuIiwiKGZ1bmN0aW9uICgpe1xyXG4gICAgLy8gQ3JlYXRlIGEgU3RyaXBlIGNsaWVudC5cclxuICAgIHZhciBzdHJpcGUgPSBuZXcgU3RyaXBlKHByb2Nlc3MuZW52Lk1JWF9TVFJJUEVfS0VZKTtcclxuICAgIC8vIENyZWF0ZSBhbiBpbnN0YW5jZSBvZiBFbGVtZW50cy5cclxuICAgIHZhciBlbGVtZW50cyA9IHN0cmlwZS5lbGVtZW50cygpO1xyXG5cclxuICAgIC8vIEN1c3RvbSBzdHlsaW5nIGNhbiBiZSBwYXNzZWQgdG8gb3B0aW9ucyB3aGVuIGNyZWF0aW5nIGFuIEVsZW1lbnQuXHJcbiAgICAvLyAoTm90ZSB0aGF0IHRoaXMgZGVtbyB1c2VzIGEgd2lkZXIgc2V0IG9mIHN0eWxlcyB0aGFuIHRoZSBndWlkZSBiZWxvdy4pXHJcbiAgICB2YXIgc3R5bGUgPSB7XHJcbiAgICAgICAgYmFzZToge1xyXG4gICAgICAgICAgICBjb2xvcjogJyMzMjMyNWQnLFxyXG4gICAgICAgICAgICBmb250RmFtaWx5OiAnXCJIZWx2ZXRpY2EgTmV1ZVwiLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWYnLFxyXG4gICAgICAgICAgICBmb250U21vb3RoaW5nOiAnYW50aWFsaWFzZWQnLFxyXG4gICAgICAgICAgICBmb250U2l6ZTogJzE2cHgnLFxyXG4gICAgICAgICAgICAnOjpwbGFjZWhvbGRlcic6IHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAnI2FhYjdjNCdcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaW52YWxpZDoge1xyXG4gICAgICAgICAgICBjb2xvcjogJyNmYTc1NWEnLFxyXG4gICAgICAgICAgICBpY29uQ29sb3I6ICcjZmE3NTVhJ1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgLy8gQ3JlYXRlIGFuIGluc3RhbmNlIG9mIHRoZSBjYXJkIEVsZW1lbnQuXHJcbiAgICB2YXIgY2FyZCA9IGVsZW1lbnRzLmNyZWF0ZSgnY2FyZCcsIHtcclxuICAgICAgICBzdHlsZTogc3R5bGUsXHJcbiAgICAgICAgaGlkZVBvc3RhbENvZGU6IHRydWUsXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBBZGQgYW4gaW5zdGFuY2Ugb2YgdGhlIGNhcmQgRWxlbWVudCBpbnRvIHRoZSBgY2FyZC1lbGVtZW50YCA8ZGl2Pi5cclxuICAgIGNhcmQubW91bnQoJyNjYXJkLWVsZW1lbnQnKTtcclxuXHJcbiAgICAvLyBIYW5kbGUgcmVhbC10aW1lIHZhbGlkYXRpb24gZXJyb3JzIGZyb20gdGhlIGNhcmQgRWxlbWVudC5cclxuICAgIGNhcmQub24oJ2NoYW5nZScsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICAgICAgdmFyIGRpc3BsYXlFcnJvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXJkLWVycm9ycycpO1xyXG4gICAgICAgIGlmIChldmVudC5lcnJvcikge1xyXG4gICAgICAgICAgICBkaXNwbGF5RXJyb3IudGV4dENvbnRlbnQgPSBldmVudC5lcnJvci5tZXNzYWdlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXlFcnJvci50ZXh0Q29udGVudCA9ICcnO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIC8vIEhhbmRsZSBmb3JtIHN1Ym1pc3Npb24uXHJcbiAgICB2YXIgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYXltZW50LWZvcm0nKTtcclxuICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29tcGxldGUtb3JkZXInKS5kaXNhYmxlZCA9IHRydWU7XHJcblxyXG4gICAgICAgIHZhciBvcHRpb25zID0ge1xyXG4gICAgICAgICAgICBuYW1lOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmlyc3RuYW1lJykudmFsdWUgICsgXCIgXCIrIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsYXN0bmFtZScpLnZhbHVlLFxyXG4gICAgICAgICAgICBhZGRyZXNzX2xpbmUxOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkcmVzcycpLnZhbHVlLFxyXG4gICAgICAgICAgICBhZGRyZXNzX2NpdHk6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b3duJykudmFsdWUsXHJcbiAgICAgICAgICAgIGFkZHJlc3Nfc3RhdGU6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGF0ZScpLnZhbHVlLFxyXG4gICAgICAgICAgICBhZGRyZXNzX3ppcDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Bvc3Rjb2RlJykudmFsdWUsXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHN0cmlwZS5jcmVhdGVUb2tlbihjYXJkLCBvcHRpb25zKS50aGVuKGZ1bmN0aW9uKHJlc3VsdCkge1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0LmVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBJbmZvcm0gdGhlIHVzZXIgaWYgdGhlcmUgd2FzIGFuIGVycm9yLlxyXG4gICAgICAgICAgICAgICAgdmFyIGVycm9yRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXJkLWVycm9ycycpO1xyXG4gICAgICAgICAgICAgICAgZXJyb3JFbGVtZW50LnRleHRDb250ZW50ID0gcmVzdWx0LmVycm9yLm1lc3NhZ2U7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29tcGxldGUtb3JkZXInKS5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8gU2VuZCB0aGUgdG9rZW4gdG8geW91ciBzZXJ2ZXIuXHJcbiAgICAgICAgICAgICAgICBzdHJpcGVUb2tlbkhhbmRsZXIocmVzdWx0LnRva2VuKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gU3VibWl0IHRoZSBmb3JtIHdpdGggdGhlIHRva2VuIElELlxyXG4gICAgZnVuY3Rpb24gc3RyaXBlVG9rZW5IYW5kbGVyKHRva2VuKSB7XHJcbiAgICAgICAgLy8gSW5zZXJ0IHRoZSB0b2tlbiBJRCBpbnRvIHRoZSBmb3JtIHNvIGl0IGdldHMgc3VibWl0dGVkIHRvIHRoZSBzZXJ2ZXJcclxuICAgICAgICB2YXIgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYXltZW50LWZvcm0nKTtcclxuICAgICAgICB2YXIgaGlkZGVuSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgICAgIGhpZGRlbklucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICdoaWRkZW4nKTtcclxuICAgICAgICBoaWRkZW5JbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnc3RyaXBlVG9rZW4nKTtcclxuICAgICAgICBoaWRkZW5JbnB1dC5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgdG9rZW4uaWQpO1xyXG4gICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoaGlkZGVuSW5wdXQpO1xyXG5cclxuICAgICAgICAvLyBTdWJtaXQgdGhlIGZvcm1cclxuICAgICAgICBmb3JtLnN1Ym1pdCgpO1xyXG4gICAgfVxyXG59KSgpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9