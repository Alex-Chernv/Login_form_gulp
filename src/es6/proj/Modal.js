'use strict';

function ModalInit () {
	const 	modalShowButton = document.querySelector(".js-modal-show"),
				modalHideButton = document.querySelector(".js-modal-exit"),
				modal = document.querySelector('.js-modal');

		modalShowButton.addEventListener('click', function() {
		  	modal.classList.add("is-active");
		});
		modalHideButton.addEventListener('click', function() {
		  	modal.classList.remove("is-active");
		});
};

export { 
	ModalInit
};