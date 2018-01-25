const sortDescLexico = require('./sortDescendingLexicographically');

test('sortDescendingLexicographically works', () => {
  expect(sortDescLexico('apple bear')).toBe('bear apple');
});