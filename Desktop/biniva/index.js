
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 8000;


app.use(bodyParser.json());
app.listen(port);