const sortInput = (req, res) => {
  console.log(req.body.input);
  const input = req.body.input;
  res.status(201).send(input);
};

module.exports = sortInput;