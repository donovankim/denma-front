"use strict";

import * as express from 'express';
import * as fs from 'fs';
import * as path from 'path';
import * as bodyParser from 'body-parser';
import * as cookieParser from 'cookie-parser';
import * as morgan from 'morgan';
import { conf } from './config';
import { log as logger } from './Logger';

export class Server {
    public static newInstance(contextPath?: string): Server {
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
        if (!conf.accessLog || conf.accessLog === null || typeof conf.accessLog === 'undefined') {
            this.app.use(morgan('dev'));
        } else {
            let accessLogStream = fs.createWriteStream(conf.accessLog, { flags: 'a' });
            this.app.use(morgan('dev', { stream: accessLogStream }));

        }
    }

    private initController() {
        let controllerPath: string = path.join(__dirname, 'controllers');
        let controllerNames: string[] = fs.readdirSync(controllerPath)
            .filter((f: string) => fs.statSync(path.join(controllerPath, f)).isDirectory());

        logger.info('controller loading start');

        controllerNames.forEach((controllerName: string) => {
            let controllerObj = require(path.join(controllerPath, controllerName));
            if (controllerObj) {
                let router = controllerObj[controllerName];
                if (router) {
                    this.app.use(`/${this.rootContextPath}/${controllerName}`, router as express.Router);
                    logger.info(`controller:[${controllerName}] is loaded.`);
                }
            }
        });
    }

    public start(port: number, callback?: Function) {
        this.app.listen(port, callback);
    }
}
