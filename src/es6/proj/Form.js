'use strict';
	
	// Polyfill
if (!Array.prototype.forEach) {

  Array.prototype.forEach = function (callback, thisArg) {

    var T, k;

    if (this == null) {
      throw new TypeError(' this is null or not defined');
    }

    var O = Object(this);

    var len = O.length >>> 0;

    if (typeof callback !== 'function') {
        throw new TypeError(callback + ' is not a function');
    }

    if (arguments.length > 1) {
      T = thisArg;
    }

    k = 0;

    while (k < len) {

      var kValue;

      if (k in O) {

        kValue = O[k];

        callback.call(T, kValue, k, O);
      }
      k++;
    }
  };
}

function ItemForm () {
	var elements = document.getElementsByClassName('js-form-item'),
		passwordEye = document.getElementsByClassName('js-password-toggle');

	Array.from(elements).forEach(function(element) {
		var status = false;

      	element.addEventListener('keyup', function() {
      		elemntKey.call(this);
  		}, true);

      	element.addEventListener('keydown', function() {
      		elemntKey.call(this);
  		}, true);
    });

    function elemntKey() {
  		if(!this.value.length && status) {
  			this.parentElement.classList.remove('is-active');

  			status = false;
  		} else if(this.value.length) {
  			this.parentElement.classList.add('is-active');

  			status = true;
  		}
    };
};

export { 
	ItemForm
};