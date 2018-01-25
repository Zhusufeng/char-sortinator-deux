const submitForm = (e) => {
  e.preventDefault();
  console.log('submitForm was pushed');

  postString(sortFormInput.value);
  sortForm.reset();
};