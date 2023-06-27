import express, { Request, Response } from 'express';
import cardController from '../controllers/cardController';

const cardRouter = express.Router();

cardRouter.get('/', cardController.getCards, (req: Request, res: Response) => {
  res.status(200).json(res.locals.cards);
});

cardRouter.post(
  '/',
  cardController.createCard,
  (req: Request, res: Response) => {
    res.status(200).json({ message: 'Successfully created card' });
  }
);

cardRouter.patch(
  '/',
  cardController.updateCard,
  (req: Request, res: Response) => {
    res.status(200).json({ message: 'Successfully updated card' });
  }
);

cardRouter.delete(
  '/',
  cardController.deleteCard,
  (req: Request, res: Response) => {
    res.status(200).json({ message: 'Successfully deleted card' });
  }
);

cardRouter.use((req: Request, res: Response) =>
  res.status(404).send('Invalid endpoint')
);

export default cardRouter;
