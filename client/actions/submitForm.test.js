const submitForm = require('./submitForm');

test('submitForm works', () => {
  sortFormInputValue = 'apple';
  submitForm();
  expect(sortFormInputValue).toBe('apple');
});