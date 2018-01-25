const sortInput = require('./sortInput');

test('sortInput works', () => {
  let practiceReq = {
    body: {
      input: 'apple bear cat'
    }
  };
  let sortedString = 'cat bear apple';
  // expect(sortInput(practiceReq, res)).to.send({sortedString});
});