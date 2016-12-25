/* app/controllers/welcomeController.ts */

// Import only what we need from express
import { Router, Request, Response } from 'express';
import { Welcome } from '../../models/welcomeModel';

const router: Router = Router();

router.get('/', (req: Request, res: Response) => {
    res.send('Hello, World.');
});

router.get('/:name', (req: Request, res: Response) => {
    let { name } = req.params;
    let welcome = new Welcome({ name: name, adult: true });
    welcome.save();
    res.send(`Helo, ${name}.`);
});

export const welcome: Router = router;
