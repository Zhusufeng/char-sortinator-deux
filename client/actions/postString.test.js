const postString = require('./postString');

test('postString works', () => {
  expect.assertions(1);

  const testString = 'apple bear'
  return postString(testString).then(data => {
    expect(data).toBe('bear apple');
  });
});