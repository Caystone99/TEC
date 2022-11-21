"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
//const router = require('express').Router();
const express_1 = require("express");
const routes = (0, express_1.Router)();
routes.get('/', (req, res) => {
    let trusted = [
        { id: 1, "src": 'img/upao.png' },
        /*{id:3, "src":'img/nysc.png'},*/
        { id: 4, "src": 'img/wes-logo.svg' },
        /*{id:5, "src":'img/unesco.svg'},
        {id:6, "src":'img/moe-nig.png'},*/
    ];
    res.render('index', { title: "Home", trusted });
});
routes.get('/apply', (req, res) => {
    res.render('apply', { title: 'Application' });
});
routes.post('/apply', (req, res) => {
    res.send("Thank You");
});
routes.use('*', (req, res) => {
    res.status(404);
    res.render('404', { title: 'Page not found' });
});
exports.router = routes;
//# sourceMappingURL=router.js.map