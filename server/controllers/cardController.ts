import {Request, Response, NextFunction} from 'express';
import db from '../models/travelModel';

interface CardController {
  getCards(req: Request, res: Response, next: NextFunction): Promise<void>;

  // createCard(req: Request, res: Response, next: NextFunction): Promise<void>;
  // updateCard(req: Request, res: Response, next: NextFunction): Promise<void>;
  // deleteCard(req: Request, res: Response, next: NextFunction): Promise<void>;
}

const cardController: CardController = {
  getCards: async (req: Request, res: Response, next: NextFunction) => {},

  // createCard: async (req: Request, res: Response, next: NextFunction) => {}
  // updateCard: async (req: Request, res: Response, next: NextFunction) => {}
  // deleteCard: async (req: Request, res: Response, next: NextFunction) => {}
};

export default cardController;