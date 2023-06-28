import jwt, { Secret } from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';

// Loads environment variables from .env file
dotenv.config();

// Middleware function to authenticate token
export const authenticateToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log('Attempting to authenticate token');
  // Incoming auth token is extracted from cookies
  const token = req.cookies.jwtToken;

  // If token does not exist, run global error handler
  if (!token) {
    return next({
      log: 'Error in authenticateController middleware',
      status: 400,
      message: 'Token does not exist',
    });
  }

  try {
    // If token is valid
    const decoded = jwt.verify(token, process.env.JWT_SECRET as Secret) as {
      user_id: string;
    };
    // Store decoded token payload in res.locals
    res.locals.userToken = decoded;

    next();
  } catch (err) {
    return next({
      log: 'Error in authenticateController middleware',
      status: 400,
      message: 'Invalid token',
    });
  }
};

export const generateToken = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // Obtain user_id from req body
  const { user_id } = res.locals.user;
  try {
    console.log('Attempting to generate token');

    const token = jwt.sign({ user_id }, process.env.JWT_SECRET as Secret, {
      expiresIn: '1h',
    });
    console.log('creation of token value ' + token);
    await res.cookie('jwtToken', token, {
      maxAge: 3600000,
    });

    return next();
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
