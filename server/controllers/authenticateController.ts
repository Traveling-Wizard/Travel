import jwt, { Secret } from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';

//loads environment variables from .env file
dotenv.config();

//middleware function to authenticate token
export const authenticateToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  //incoming auth token is extracted cookies
  const token = req.cookies.jwtToken;

  try {
    // If token does not exist, run global error handler
    if (!token) {
      return next({
        log: 'Error in authenticateController middleware',
        status: 400,
        message: 'Token does not exist',
      });
    }
    //if token is valid
    const decoded = jwt.verify(token, process.env.JWT_SECRET as Secret);
    //store decoded token paylod in res.locals.user
    res.locals.user = decoded;
    next();
  } catch (err) {
    return next({
      log: 'Error in authenticateController middleware',
      status: 400,
      message: 'Invalid token',
    });
  }
};

export const generateToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  //obtain username from req body
  const { user_id } = req.body;

  try {
    // Generate token passing in username and secret
    const token = jwt.sign(
      { user_id: user_id },
      process.env.JWT_SECRET as Secret,
      {
        expiresIn: '1h',
      }
    );
    res.cookie('jwtToken', token, {
      httpOnly: true,
      maxAge: 3600000,
    });

    next();
  } catch (err) {
    return next({
      log: 'Error in generateToken middleware function',
      status: 400,
      message: 'Failed to generate token',
    });
  }
};

const authenticateController = {
  authenticateToken,
  generateToken,
};

export default authenticateController;
