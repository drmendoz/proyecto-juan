var express = require('express');
var bodyParser = require("body-parser");
const apiRouter = require('./routes/api');
const cors= require('cors');
var app = express();
app.use(cors());
config = require('./utils/config');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api/v1', apiRouter);
app.listen(5000, function () {
    console.log('Servidor arrancado 5000');
});  