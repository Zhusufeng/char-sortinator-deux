const sortInput = (req, res) => {
  console.log(req.body.input);

  const sortedString = req.body.input
    .split(' ')
    .sort((a, b) => {
      if(a.charCodeAt(0) > b.charCodeAt(0)) {
        return -1;
      } else if (a.charCodeAt(0) === b.charCodeAt(0)) {
        let len;
        if (a.length > b.length) {
          len = b.length;
        } else {
          len = a.length;
        }
        for (let i = 1; i < len; i++) {
          if (a.charCodeAt(i) > b.charCodeAt(i)) {
            return -1;
          } else if (a.charCodeAt(i) === b.charCodeAt(i)) {
            continue;
          } else {
            return 1;
          }
        }
      } else {
        return 1;
      }
    })
    .join(' ');

  res.status(201).send(JSON.stringify({sortedString}));
};

module.exports = sortInput;