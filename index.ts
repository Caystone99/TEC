import {app} from './src/app';
import {PORT} from './api/utils/config';
import http from 'http'

//const app = require('./src/app');
//const config = require('./api/utils/config');
//const http = require('http');


const server = http.createServer(app);

server.listen(PORT, ()=>{
    console.log(`Server is running on PORT ${PORT}`)
})