const sortInput = (req, res) => {
  console.log(req.body.input);
  const input = {
    sortedString: req.body.input
  };
  res.status(201).send(JSON.stringify(input));
};

module.exports = sortInput;