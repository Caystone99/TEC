import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import {router} from '../api/routes/router';

//const express = require('express');
//const helmet = require('helmet')
//const cors = require('cors');
//const router = require('../api/routes/router')

//config files
// const config = require('./utils/config');

export const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(router)
app.use(express.json());
app.use(helmet())
app.use(cors());


//module.exports = app;