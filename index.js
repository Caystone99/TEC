"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./src/app");
const config_1 = require("./api/utils/config");
const http_1 = __importDefault(require("http"));
//const app = require('./src/app');
//const config = require('./api/utils/config');
//const http = require('http');
const server = http_1.default.createServer(app_1.app);
server.listen(config_1.PORT, () => {
    console.log(`Server is running on PORT ${config_1.PORT}`);
});
