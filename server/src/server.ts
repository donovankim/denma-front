"use strict";

import * as express from 'express';
import * as fs from 'fs';
import * as path from 'path';

const rootContextPath: string = '/api';
const app: express.Application = express();
const port: number = process.env.PORT || 3000;

let controllerPath: string = path.join(__dirname, 'controllers');
let controllerNames: string[] = fs.readdirSync(controllerPath)
    .filter((f: string) => fs.statSync(path.join(controllerPath, f)).isDirectory());

app.use((req, res, next) => {
    console.log(`access:${req.path}`);
    next();
});

controllerNames.forEach((controllerName: string) => {
    let controllerObj = require(path.join(controllerPath, controllerName));
    if (controllerObj) {
        let router = controllerObj[controllerName];
        if (router) {
            app.use(`${rootContextPath}/${controllerName}`, router as express.Router);
            console.log(`controller:[${controllerName}] is loaded.`);
        }
    }
});

app.listen(port, () => {
    console.log(`...Listening at http://localhost:${port}/`);
});
