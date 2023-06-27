import express, { Request, Response } from 'express';
import cardController from '../controllers/cardController';

const router = express.Router();

router.get('/', cardController.getCards, (req: Request, res: Response) => {
  res.status(200).json(res.locals.cards);
});

router.post('/', cardController.createCard, (req: Request, res: Response) => {
  res.status(200).json({ message: 'Successfully created card'});
});

router.patch('/', cardController.updateCard, (req: Request, res: Response) => {
  res.status(200).json({ message: 'Successfully updated card'});
});

router.delete('/', cardController.deleteCard, (req: Request, res: Response) => {
  res.status(200).json({ message: 'Successfully deleted card'});
});

router.use((req: Request, res: Response) => res.status(404).send('Invalid endpoint'));

module.exports = router;