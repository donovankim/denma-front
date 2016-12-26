export interface Config {
    readonly mongodb: { url: string };
    readonly logger?: { level: string, stream: string, path?: string };
    readonly rootContextPath: string;
    readonly listenPort: number;
    readonly accessLog?: string;
}

let configPath;
switch (process.env.NODE_ENV || 'development') {
    case 'prod':
    case 'production':
        configPath = '../config/config.prod.json';
        break;
    case 'test':
    case 'testing':
        configPath = '../config/config.test.json';
        break;
    case 'dev':
    case 'development':
    default:
        configPath = '../config/config.dev.json';
        break;
}

export const conf: Config = require(configPath);
