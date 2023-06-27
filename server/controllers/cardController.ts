import { Request, Response, NextFunction } from 'express';
import db from '../models/travelModel';

interface CardController {
  getCards(req: Request, res: Response, next: NextFunction): Promise<void>;

  // createCard(req: Request, res: Response, next: NextFunction): Promise<void>;
  // updateCard(req: Request, res: Response, next: NextFunction): Promise<void>;
  // deleteCard(req: Request, res: Response, next: NextFunction): Promise<void>;
}

/**
 * @desc Responsible for CRUD functionality of user cards.
 */
const cardController: CardController = {
  getCards: async (req: Request, res: Response, next: NextFunction) => {
    const cardQuery =
      'SELECT u.user_id, u.username, u.name, uc.points, cc.card_name FROM users AS u INNER JOIN user_cards AS uc ON u.user_id = uc.user_id INNER JOIN card_company AS cc ON uc.card_id = cc.card_id WHERE u.user_id = target_id;';
    try {
      const card = db.query(cardQuery);
      res.locals.cards = await card;
      return next();
    } catch (err) {
      return next({
        log: 'Error in cardController method',
        status: 400,
        message: 'Error while loading items',
      });
    }
  },

  // createCard: async (req: Request, res: Response, next: NextFunction) => {}
  // updateCard: async (req: Request, res: Response, next: NextFunction) => {}
  // deleteCard: async (req: Request, res: Response, next: NextFunction) => {}
};

export default cardController;
