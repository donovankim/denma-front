import * as mongoose from 'mongoose';
import { conf } from './config';
import { log as logger } from './Logger';

mongoose.connect(conf.mongodb.url, () => {
    logger.info("connected to mongo.");
});

export { mongoose as MongoDB };
