import { Router } from 'express';
import { people } from './people.routes';

const router = Router();

router.get('/ping', (req, res) => {
    res.send('pong')
});

router.use(people)

export default router
