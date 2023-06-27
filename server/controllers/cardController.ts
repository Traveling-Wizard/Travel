import { Request, Response, NextFunction } from 'express';
import db from '../models/travelModel';

interface CardController {
  getCards(req: Request, res: Response, next: NextFunction): Promise<void>;
  createCard(req: Request, res: Response, next: NextFunction): Promise<void>;
  updateCard(req: Request, res: Response, next: NextFunction): Promise<void>;
  deleteCard(req: Request, res: Response, next: NextFunction): Promise<void>;
}

/**
 * @desc Responsible for CRUD functionality of user cards.
 */
const cardController: CardController = {
  getCards: async (req: Request, res: Response, next: NextFunction) => {
    const getCardQuery =
      'SELECT u.user_id, u.username, u.name, uc.points, cc.card_name FROM users AS u INNER JOIN user_cards AS uc ON u.user_id = uc.user_id INNER JOIN card_company AS cc ON uc.card_id = cc.card_id WHERE u.user_id = target_id;';
    try {
      const cards = await db.query(getCardQuery);
      res.locals.cards = cards;
      return next();
    } catch (err) {
      return next({
        log: 'Error in cardController.getCards method',
        status: 400,
        message: 'Error while loading items',
      });
    }
  },

  createCard: async (req: Request, res: Response, next: NextFunction) => {
    const { user_id, card_name, points } = req.body;
    const createCardQuery =
      'INSERT INTO user_cards (user_id, card_id, points) SELECT $1, card_id, $3 FROM card_company WHERE card_name = $2;';
    try {
      await db.query(createCardQuery);
      return next();
    } catch (err) {
      return next({
        log: 'Error in cardController.createCard method',
        status: 400,
        message: 'Error while loading items',
      });
    }
  },

  updateCard: async (req: Request, res: Response, next: NextFunction) => {
    const { user_id, card_id, points } = req.body;
    const updateCardQuery =
      'UPDATE user_cards SET points = $3 WHERE user_id = $1 AND card_id = $2;';
    try {
      await db.query(updateCardQuery);
      return next();
    } catch (err) {
      return next({
        log: 'Error in cardController.updateCard method',
        status: 400,
        message: 'Error while loading items',
      });
    }
  },

  deleteCard: async (req: Request, res: Response, next: NextFunction) => {},
};

export default cardController;
