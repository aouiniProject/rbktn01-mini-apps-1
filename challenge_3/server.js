const express = require('express');
const bodyParser = require('body-parser');
const app = express();
// const { db } = require('./db/index') // test db connection
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use(express.static('public'))

const port = 2020;

app.listen(port, () => console.log(`server listening on port: ${port}`));

