const express = require('express');
const cors = require('cors');
const router = require('../api/routes/router')

//config files
// const config = require('./utils/config');

const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(router)
app.use(express.json());
app.use(cors());



module.exports = app;