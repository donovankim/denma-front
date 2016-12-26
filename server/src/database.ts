import * as mongoose from 'mongoose';
import { conf } from './config';
import { log as logger } from './Logger';

mongoose.connect(conf.mongodb.url, () => {
    logger.info("connected to mongo.", conf.mongodb.url);
});

export { mongoose as MongoDB };
