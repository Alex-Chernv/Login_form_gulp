'use strict';

function PasswordInit () {
	const passwordToggle = document.querySelector('.js-password-toggle')

	passwordToggle.addEventListener('change', function() {
	  	const password = document.querySelector('.js-password')
	  	    , passwordLabel = document.querySelector('.js-password-label')
	
	  	if (password.type === 'password') {
	  	  	password.type = 'text'
	  	} else {
	  	  	password.type = 'password'
	  	}
	  	
	  	password.focus()
	});
};

export { 
	PasswordInit
};