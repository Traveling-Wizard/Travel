import jwt from 'jsonwebtoken';
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
    //incoming auth token is extracted from request headers
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

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
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
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
  const { username } = req.body;

  try {
    // Generate token passing in username and secret
    const token = jwt.sign(username, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });

    //send token back as json
    res.json({ token });


    next();
  } catch (err) {
    return next({
      log: 'Error in generateToken middleware function',
      status: 500,
      message: 'Failed to generate token',
    });
  }
};

const authenticateController = {
    authenticateToken,
    generateToken
  };
  

export default authenticateController;