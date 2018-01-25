const sortDescLexico = require('./sortDescendingLexicographically');

test('sortDescendingLexicographically works', () => {
  expect(sortDescLexico('apple bear')).toBe('bear apple');
  expect(sortDescLexico('super duper')).toBe('super duper');
  expect(sortDescLexico('cat cake chat')).toBe('chat cat cake');
  expect(sortDescLexico('a aa aaa aaaa1 aaaa2')).toBe('aaaa2 aaaa1 aaa aa a');
});