import express, { Request, Response, NextFunction } from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
const cardRouter = require('./routes/cards');

const port: number = 5050;
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors());

app.use('/cards', cardRouter);

app.use(
  (
    err: { log?: string; status?: number; message?: { err: string } },
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const defaultErr: {
      log: string;
      status: number;
      message: { err: string };
    } = {
      log: 'Express error handler caught unknown middleware error',
      status: 400,
      message: { err: 'An error occurred' },
    };
    const errorObj = Object.assign({}, defaultErr, err);
    console.log(errorObj.log);
    return res.status(errorObj.status).json(errorObj.message);
  }
);

app.listen(port);
