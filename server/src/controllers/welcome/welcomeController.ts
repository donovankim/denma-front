import { Router, Request, Response, NextFunction } from 'express';
import { Welcome } from '../../models/welcomeModel';
import { log, Logger } from '../../Logger';

const logger: Logger = log.child({ router: 'welcome' });
const router: Router = Router();

router.get('/', (req: Request, res: Response) => {
    logger.trace(req);
    res.send('Hello, World.');
});

router.get('/:name', (req: Request, res: Response) => {
    let { name } = req.params;
    logger.info('hi', name);
    let welcome = new Welcome({ name: name, adult: true });
    welcome.save();
    // Welcome.find({},{},function(err, welcomes){
    // });
    res.send(`Helo, ${name}.`);
});

export const welcome: Router = router;
