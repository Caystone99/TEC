const app = require('./app');
const config = require('../api/utils/config');
const http = require('http');


let server = http.createServer(app);

server.listen(config.PORT, ()=>{
    console.log(`Server is running on PORT ${config.PORT}`)
})