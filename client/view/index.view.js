const sortForm = document.getElementById('sort-form');
const sortFormInput = document.getElementById('sort-form-input');
const sortTable = document.getElementById('sort-table');
let sortFormInputValue = '';

sortForm.addEventListener('submit', submitForm);