const express = require('express');
const bodyParser = require('body-parser');
const sortInput = require('./actions/sortInput');

const app = express();
const port = 8123;
const host = 'localhost';

app.use(bodyParser.json());
app.use(express.static(__dirname + '/../client'));

app.route('/sort')
  .post(sortInput);

app.listen(port, () => {
  console.log(`Server listening on http://${host}:${port}`);
});

module.exports = app;