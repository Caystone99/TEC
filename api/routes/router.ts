//const router = require('express').Router();
import express, { Router, Request, Response } from 'express';

const routes = Router();

routes.get('/', (req:Request, res:Response)=>{
    let trusted = [
        {id:1, "src":'img/upao.png'},
        /*{id:3, "src":'img/nysc.png'},*/
        {id:4, "src":'img/wes-logo.svg'},
        /*{id:5, "src":'img/unesco.svg'},
        {id:6, "src":'img/moe-nig.png'},*/
    ];
    res.render('index', {title:"Home", trusted});
})

routes.get('/apply', (req: Request, res: Response)=>{
    res.render('apply', {title:'Application'});
})

routes.post('/apply', (req:Request, res:Response)=>{
    res.send("Thank You");
})

routes.use('*',(req:Request, res:Response)=>{
    res.status(404);
    res.render('404', {title:'Page not found'});
})

export const router: Router = routes;