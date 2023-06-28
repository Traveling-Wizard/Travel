import express, { Router, Request, Response } from 'express';
import userController from '../controllers/userController';
import authenticateController from '../controllers/authenticateController';

const userRouter = express.Router();

userRouter.post(
  '/',
  userController.getUser,
  authenticateController.generateToken,
  (req: Request, res: Response) => {
    return res.status(200).json(req.cookies.jwtToken);
  }
);

userRouter.post(
  '/signup',
  userController.createUser,
  authenticateController.generateToken,
  (req: Request, res: Response) => {
    return res.status(200).json(req.cookies.jwtToken);
  }
);
// userRouter.post(
//   '/generate-token',
//   authenticateController.generateToken,
//   (req: Request, res: Response) => {
//     return res.status(200).json(req.cookies.jwtToken);
//   }
// );

// userRouter.post(
//   '/protected',
//   authenticateController.authenticateToken,
//   (req: Request, res: Response) => {
//     const user_id = res.locals.userToken.user_id;

//     // Return the user_id in the response
//     return res.json({ user_id });
//   }
// );

// userRouter.post('/logout', (req: Request, res: Response) => {
//   res.clearCookie('jwtToken');
//   return res.status(200).json({ message: 'Logged out successfully' });
// });

export default userRouter;
