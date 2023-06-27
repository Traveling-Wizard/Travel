import express, { Router, Request, Response } from 'express';
import userController from '../controllers/userController';
const userRouter = express.Router();

userRouter.post('/', userController.getUser, (req: Request, res: Response) => {
  return res.status(200).json(res.locals.user);
});

userRouter.post(
  '/signup',
  userController.createUser,
  (req: Request, res: Response) => {
    return res.status(200).json(res.locals.user);
  }
);
export default userRouter;
