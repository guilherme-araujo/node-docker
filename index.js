const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect(`mongodb://${process.env.DB_URL}:27017/nodemongo`)

app.get('/', (req, res) => {
    return res.send('Hello world');
})

app.listen(3000);