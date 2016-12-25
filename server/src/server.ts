"use strict";

import * as express from 'express';
import * as fs from 'fs';
import * as path from 'path';
import * as bodyParser from 'body-parser';
import * as cookieParser from 'cookie-parser';
import * as logger from 'morgan';

export class Server {
    public static instance(contextPath?: string): Server {
        return new Server(contextPath);
    }

    public readonly app: express.Application;

    constructor(private rootContextPath: string = 'api') {
        this.app = express();
        this.config();
        this.initController();
    }

    private config() {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.app.use(cookieParser('xmfostm18'));
        this.app.use(logger('dev'));
    }

    private initController() {
        let controllerPath: string = path.join(__dirname, 'controllers');
        let controllerNames: string[] = fs.readdirSync(controllerPath)
            .filter((f: string) => fs.statSync(path.join(controllerPath, f)).isDirectory());

        controllerNames.forEach((controllerName: string) => {
            let controllerObj = require(path.join(controllerPath, controllerName));
            if (controllerObj) {
                let router = controllerObj[controllerName];
                if (router) {
                    this.app.use(`/${this.rootContextPath}/${controllerName}`, router as express.Router);
                    console.log(`controller:[${controllerName}] is loaded.`);
                }
            }
        });
    }

    public start(port: number, callback?: Function) {
        this.app.listen(port, callback);
    }
}
