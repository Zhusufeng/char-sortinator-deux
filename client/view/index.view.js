const sortForm = document.getElementById('sort-form');
const sortFormInput = document.getElementById('sort-form-input');

const submitForm = (e) => {
  e.preventDefault();
  console.log('submitForm was pushed');

  postString(sortFormInput.value);
  sortForm.reset();
};

sortForm.addEventListener('submit', submitForm);