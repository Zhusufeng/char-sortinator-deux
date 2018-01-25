const sortDescendingLexicographically = require('../logic/sortDescendingLexicographically');

const sortInput = (req, res) => {
  const sortedString = sortDescendingLexicographically(req.body.input);
  res.status(201).send(JSON.stringify({sortedString}));
};

module.exports = sortInput;