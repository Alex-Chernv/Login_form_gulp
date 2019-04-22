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

        element.addEventListener('focus', function() {
            _addClass.call(this);
        }, true);
        element.addEventListener('blur', function() {
           _removeClass.call(this);
        }, true);

      	element.addEventListener('keyup', function() {
      		elementKey.call(this);
  		}, true);
      	element.addEventListener('keydown', function() {
      		elementKey.call(this);
  		}, true);
    });

    function elementKey() {
  		if(!this.value.length && status) {
  			_addClass.call(this);
  		} else if(this.value.length) {
  			_removeClass.call(this);
  		}
    };

    function _addClass() {
        this.parentElement.classList.add('is-active');
        status = true;
    };
    function _removeClass() {
        if(!this.value.length) {
            this.parentElement.classList.remove('is-active');
            status = false;
        }
    }
};

export { 
	ItemForm
};