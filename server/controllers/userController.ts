import { Request, Response, NextFunction } from 'express';
import UserDB from '../models/travelModel';

const userController = {
  getUser: async (req: Request, res: Response, next: NextFunction) => {
    console.log('Getting User');
    const { username, password } = req.body;
    const selectQuery = `SELECT * FROM users WHERE username = '${username}' AND password = '${password}'`;

    UserDB.query(selectQuery)
      .then((data) => data.rows)
      .then((result) => {
        console.log(result);
        [res.locals.user] = result;
        return next();
      })
      .catch((err) =>
        next({
          log: 'Failed in logging in',
          status: 400,
          message: { err: err },
        })
      );
  },

  createUser: async (req: Request, res: Response, next: NextFunction) => {
    const addQuery =
      'INSERT INTO users (username, password, name) VALUES ($1, $2, $3) RETURNING *';
    const { username, password, name } = req.body;
    const arr = [username, password, name];

    UserDB.query(addQuery, arr)
      .then((data) => {
        console.log(data.rows);
        [res.locals.user] = data.rows;
        return next();
      })
      .catch((err) =>
        next({
          log: 'Failed in signing up',
          status: 400,
          message: { err: err },
        })
      );
  },
};

export default userController;
