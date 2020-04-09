const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

mongoose.Promise = global.Promise;
mongoose.connect(`mongodb://localhost:27017/challenge_4`, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.on('error', err => {
    throw err;
});

mongoose.connection.once('open', () => console.log('mongoose connected'))

app.use(bodyParser.json());

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`app running on port ${PORT}`)
});