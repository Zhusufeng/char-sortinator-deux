const submitForm = (e) => {
  e.preventDefault();
  console.log('submitForm was pushed');
  sortFormInputValue = sortFormInput.value;
  postString(sortFormInputValue);
  sortForm.reset();
};

module.exports = submitForm;