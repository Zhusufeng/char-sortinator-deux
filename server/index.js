const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 8123;
const host = 'localhost';

app.use(bodyParser.json());
app.use(express.static(__dirname + 'client/public'));

app.listen(port, () => {
  console.log(`Server listening on http://${host}:${port}`);
});

module.exports = app;