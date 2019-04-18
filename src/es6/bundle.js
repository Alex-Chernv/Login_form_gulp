"use strict";

import { ModalInit } from "./proj/Modal.js";
import { PasswordInit } from "./proj/PasswordForm.js";
import { ItemForm } from "./proj/Form.js";

function proj(){};

proj.prototype.ModalInit = ModalInit;
proj.prototype.PasswordInit = PasswordInit;
proj.prototype.ItemForm = ItemForm;

export {
	proj
};