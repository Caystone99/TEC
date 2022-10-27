"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const helmet_1 = __importDefault(require("helmet"));
const cors_1 = __importDefault(require("cors"));
const router_1 = require("../api/routes/router");
//const express = require('express');
//const helmet = require('helmet')
//const cors = require('cors');
//const router = require('../api/routes/router')
//config files
// const config = require('./utils/config');
exports.app = (0, express_1.default)();
exports.app.set('view engine', 'ejs');
exports.app.use(express_1.default.static('public'));
exports.app.use(router_1.router);
exports.app.use(express_1.default.json());
exports.app.use((0, helmet_1.default)());
exports.app.use((0, cors_1.default)());
//module.exports = app;
