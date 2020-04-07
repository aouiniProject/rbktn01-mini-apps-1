const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser')
const fs = require('fs')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(express.static('client'))

require('./routes/reports')(app);

let port = 8080;
app.listen(port, () => console.log('server listening on port: ' + port));


