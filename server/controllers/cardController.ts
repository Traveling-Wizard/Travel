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
      'SELECT uc.card_id, uc.points, cc.card_name FROM users AS u INNER JOIN user_cards AS uc ON u.user_id = uc.user_id INNER JOIN card_company AS cc ON uc.card_id = cc.card_id WHERE u.user_id = 1;';
    try {
      const gotCards = await db.query(getCardQuery);
      const userCards = { 
        cards: gotCards.rows
      };
      res.locals.cards = userCards;
      return next();
    } catch (err) {
      return next({
        log: 'Error in cardController.getCards method',
        status: 400,
        message: 'Error while loading cards',
      });
    }
  },

  createCard: async (req: Request, res: Response, next: NextFunction) => {
    const { user_id, card_name, points } = req.body;
    const createArr = [ user_id, card_name, points ];
    const createCardQuery =
      'INSERT INTO user_cards (user_id, card_id, points) SELECT $1, card_id, $3 FROM card_company WHERE card_name = $2 RETURNING points;';
    try {
      const created = await db.query(createCardQuery, createArr);
      const newCard = {
        points: created.rows[0].points,
        card_name,
      }
      res.locals.newCard = newCard;
      return next();
    } catch (err) {
      return next({
        log: 'Error in cardController.createCard method',
        status: 400,
        message: 'Error while creating card',
      });
    }
  },

  updateCard: async (req: Request, res: Response, next: NextFunction) => {
    const { user_id, card_name, points } = req.body;
    const updateArr = [ user_id, card_name, points ];
    const updateCardQuery =
      'UPDATE user_cards SET points = $3 FROM card_company WHERE user_cards.user_id = $1 AND user_cards.card_id = card_company.card_id AND card_company.card_name = $2 RETURNING *;';
    try {
      const updated = await db.query(updateCardQuery, updateArr);
      const updatedCard = {
        points: updated.rows[0].points,
        card_name,
      }
      res.locals.updatedCard = updatedCard;
      return next();
    } catch (err) {
      return next({
        log: 'Error in cardController.updateCard method',
        status: 400,
        message: 'Error while updating card',
      });
    }
  },

  deleteCard: async (req: Request, res: Response, next: NextFunction) => {
    const { user_id, card_id } = req.body;
    const deleteArr = [ user_id, card_id ];
    const deleteCardQuery =
      'DELETE FROM user_cards WHERE user_id = $1 AND card_id = $2;';
    try {
      await db.query(deleteCardQuery, deleteArr);
      return next();
    } catch (err) {
      return next({
        log: 'Error in cardController.deleteCard method',
        status: 400,
        message: 'Error while deleting card',
      });
    }
  },
};

export default cardController;
