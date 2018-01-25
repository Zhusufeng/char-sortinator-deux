const sortDescLexico = require('./sortDescendingLexicographically');

test('sortDescendingLexicographically works - turn ascending to descending order', () => {
  expect(sortDescLexico('apple bear')).toBe('bear apple');
});

test('sortDescendingLexicographically works - if already in descending order, keep descending order', () => {
  expect(sortDescLexico('super duper')).toBe('super duper');
});

test('sortDescendingLexicographically works - if multiple words start with the same letter', () => {
  expect(sortDescLexico('cat cake chat')).toBe('chat cat cake');
});

test('sortDescendingLexicographically works - if multiple words start with the same letter but differ in length', () => {
  expect(sortDescLexico('a aa aaa aaaa1 aaaa2')).toBe('aaaa2 aaaa1 aaa aa a');
});