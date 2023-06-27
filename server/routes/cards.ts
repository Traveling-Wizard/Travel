import express, { Request, Response } from 'express';
import cardController from '../controllers/cardController';

const router = express.Router();

router.get('/', (req: Request, res: Response) => {});

router.post('/', (req: Request, res: Response) => {});

router.patch('/', (req: Request, res: Response) => {});

router.delete('/', (req: Request, res: Response) => {});

router.use((req: Request, res: Response) => res.status(404).send('Invalid endpoint'));

module.exports = router;