import * as bunyan from 'bunyan';
import { conf } from './config';

// const LOG_LEVEL : string =conf.logger.level;
// const LOG_STREAMS = switch(conf.logger.stream){
// case 'file': 
// }
let stream: any = { level: conf.logger.level };

switch (conf.logger.stream) {
    case 'file':
        Object.assign(stream, { path: conf.logger.path });
        break;
    default:
        Object.assign(stream, { stream: process.stdout });
        break;
}

export { Logger } from 'bunyan';
export const log = bunyan.createLogger({
    name: 'denma',
    serializers: {
        req: bunyan.stdSerializers.req,     // standard bunyan req serializer
        err: bunyan.stdSerializers.err      // standard bunyan error serializer
    },
    streams: [
        stream
    ]
});
