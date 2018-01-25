const appendData = require('./appendData.view');

test('appendData works', () => {
  const sortedInput1 = 'cat bear apple';
  const sortFormInputValue1 = 'apple bear cat';
  expect(appendData(sortedInput1, sortFormInputValue1).innerHTML).toBe(`<td>${sortFormInputValue}</td><td>${sortedInput}</td>`);
});